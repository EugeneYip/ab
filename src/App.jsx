import React, { useMemo, useState } from "react";

const safe = (value, fallback = 0) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};
const clamp = (value, min, max) => Math.min(Math.max(safe(value), min), max);
const fmt = (value, digits = 0) => Number.isFinite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: digits }) : "–";
const pct = (value, digits = 2) => Number.isFinite(value) ? `${value.toFixed(digits)}%` : "–";
const money = (value) => Number.isFinite(value) ? value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : "–";

function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

function normalCdf(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function inverseNormal(p) {
  if (p <= 0 || p >= 1) return NaN;
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const plow = 0.02425;
  const phigh = 1 - plow;
  let q, r;
  if (p < plow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  if (p > phigh) {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  q = p - 0.5;
  r = q * q;
  return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function sampleSizePerGroup({ confidence, power, baseline, mde, relative, variants, sided, correction }) {
  const alpha = 1 - clamp(confidence, 50, 99.999) / 100;
  const beta = 1 - clamp(power, 1, 99.999) / 100;
  const p1 = clamp(baseline, 0.0001, 99.9999) / 100;
  const delta = relative ? p1 * (safe(mde) / 100) : safe(mde) / 100;
  const p2 = clamp(p1 + delta, 0.000001, 0.999999);
  const absDelta = Math.abs(p2 - p1);
  if (!absDelta) return NaN;
  const comparisons = correction ? Math.max(1, Math.floor(safe(variants, 1))) : 1;
  const adjustedAlpha = alpha / comparisons;
  const zAlpha = inverseNormal(sided === "two" ? 1 - adjustedAlpha / 2 : 1 - adjustedAlpha);
  const zBeta = inverseNormal(1 - beta);
  const pooled = (p1 + p2) / 2;
  const numerator = Math.pow(
    zAlpha * Math.sqrt(2 * pooled * (1 - pooled)) + zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)),
    2
  );
  return Math.ceil(numerator / Math.pow(absDelta, 2));
}

function solveDetectableEffect({ confidence, power, baseline, visitorsPerGroup, variants, sided, correction }) {
  const p1 = clamp(baseline, 0.0001, 99.999) / 100;
  const n = safe(visitorsPerGroup);
  if (n <= 0) return { absolute: NaN, relative: NaN };
  let low = 0.000001;
  let high = Math.max(0.000002, Math.min(0.95, 0.999999 - p1));
  for (let i = 0; i < 70; i += 1) {
    const mid = (low + high) / 2;
    const needed = sampleSizePerGroup({ confidence, power, baseline, mde: mid * 100, relative: false, variants, sided, correction });
    if (needed > n) low = mid;
    else high = mid;
  }
  const absolute = high * 100;
  const relative = (high / p1) * 100;
  return { absolute, relative };
}

function analyzeVariant(controlVisitors, controlConversions, variantVisitors, variantConversions, confidence) {
  const n1 = Math.max(1, safe(controlVisitors));
  const n2 = Math.max(1, safe(variantVisitors));
  const x1 = clamp(controlConversions, 0, n1);
  const x2 = clamp(variantConversions, 0, n2);
  const p1 = x1 / n1;
  const p2 = x2 / n2;
  const diff = p2 - p1;
  const lift = p1 > 0 ? diff / p1 : NaN;
  const alpha = 1 - clamp(confidence, 50, 99.999) / 100;
  const zTwo = inverseNormal(1 - alpha / 2);
  const zOne = inverseNormal(1 - alpha);

  const pooled = (x1 + x2) / (n1 + n2);
  const sePooled = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
  const z = sePooled > 0 ? diff / sePooled : 0;
  const oneSidedP = 1 - normalCdf(z);
  const twoSidedP = 2 * (1 - normalCdf(Math.abs(z)));

  const seAbs = Math.sqrt((p1 * (1 - p1)) / n1 + (p2 * (1 - p2)) / n2);
  const ciLow = diff - zTwo * seAbs;
  const ciHigh = diff + zTwo * seAbs;
  const rightLow = diff - zOne * seAbs;
  const leftHigh = diff + zOne * seAbs;

  const var1 = (p1 * (1 - p1)) / n1;
  const var2 = (p2 * (1 - p2)) / n2;
  const seRel = p1 > 0 ? Math.sqrt(var2 / (p1 * p1) + (p2 * p2 * var1) / Math.pow(p1, 4)) : NaN;
  const relZ = seRel > 0 ? lift / seRel : NaN;
  const relP = Number.isFinite(relZ) ? 2 * (1 - normalCdf(Math.abs(relZ))) : NaN;
  const relCiLow = lift - zTwo * seRel;
  const relCiHigh = lift + zTwo * seRel;
  const relRightLow = lift - zOne * seRel;
  const relLeftHigh = lift + zOne * seRel;

  const a1 = x1 + 1;
  const b1 = n1 - x1 + 1;
  const a2 = x2 + 1;
  const b2 = n2 - x2 + 1;
  const mean1 = a1 / (a1 + b1);
  const mean2 = a2 / (a2 + b2);
  const betaVar1 = (a1 * b1) / (Math.pow(a1 + b1, 2) * (a1 + b1 + 1));
  const betaVar2 = (a2 * b2) / (Math.pow(a2 + b2, 2) * (a2 + b2 + 1));
  const bayesVariant = normalCdf((mean2 - mean1) / Math.sqrt(betaVar1 + betaVar2));
  const bayesControl = 1 - bayesVariant;
  const boundedVariant = clamp(bayesVariant, 0.000001, 0.999999);
  const bayesFactor = boundedVariant / (1 - boundedVariant);

  return {
    n1, n2, x1, x2, p1, p2, diff, lift,
    seAbs, z, oneSidedP, twoSidedP,
    ciLow, ciHigh, rightLow, leftHigh,
    seRel, relZ, relP, relCiLow, relCiHigh, relRightLow, relLeftHigh,
    bayesVariant, bayesControl, bayesFactor,
  };
}

function Field({ label, value, setValue, suffix, min = 0, step = "any" }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</span>
      <div className="mt-2 flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm focus-within:border-slate-900">
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent text-base font-semibold text-slate-900 outline-none"
        />
        {suffix && <span className="ml-2 text-sm font-medium text-slate-500">{suffix}</span>}
      </div>
    </label>
  );
}

function Metric({ label, value, tone = "default" }) {
  const toneClass = tone === "good" ? "text-emerald-700" : tone === "bad" ? "text-rose-700" : "text-slate-950";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</div>
      <div className={`mt-2 text-2xl font-black ${toneClass}`}>{value}</div>
    </div>
  );
}

function Toggle({ label, options, value, setValue }) {
  return (
    <div className="rounded-2xl bg-slate-100 p-3">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
        {options.map((option) => (
          <button key={option.value} onClick={() => setValue(option.value)} className={`rounded-xl px-3 py-2 text-sm font-bold ${value === option.value ? "bg-slate-950 text-white" : "bg-white text-slate-600"}`}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function CompactRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 py-2 text-sm">
      <span className="font-semibold text-slate-500">{label}</span>
      <span className="text-right font-black text-slate-950">{value}</span>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState("pre");
  const [confidence, setConfidence] = useState(95);
  const [power, setPower] = useState(80);
  const [baseline, setBaseline] = useState(10);
  const [mde, setMde] = useState(20);
  const [variants, setVariants] = useState(1);
  const [weeklyTraffic, setWeeklyTraffic] = useState(10000);
  const [relative, setRelative] = useState("yes");
  const [sided, setSided] = useState("one");
  const [correction, setCorrection] = useState("yes");

  const [testDays, setTestDays] = useState(14);
  const [trafficPct, setTrafficPct] = useState(100);
  const [aov, setAov] = useState(80);
  const [postConfidence, setPostConfidence] = useState(95);
  const [cv, setCv] = useState(10000);
  const [cc, setCc] = useState(1000);
  const [variantRows, setVariantRows] = useState([{ id: 1, name: "Variation 1", visitors: 10000, conversions: 1120 }]);

  const variantCount = Math.max(1, Math.floor(safe(variants, 1)));
  const totalGroups = variantCount + 1;

  const pre = useMemo(() => {
    const perGroup = sampleSizePerGroup({ confidence, power, baseline, mde, relative: relative === "yes", variants: variantCount, sided, correction: correction === "yes" });
    const total = perGroup * totalGroups;
    const weeks = safe(weeklyTraffic) > 0 ? total / safe(weeklyTraffic) : NaN;
    const targetRate = relative === "yes" ? safe(baseline) * (1 + safe(mde) / 100) : safe(baseline) + safe(mde);
    const mdeRows = [1, 2, 3, 4, 5, 6].map((week) => {
      const visitorsPerGroup = (safe(weeklyTraffic) * week) / totalGroups;
      const detectable = solveDetectableEffect({ confidence, power, baseline, visitorsPerGroup, variants: variantCount, sided, correction: correction === "yes" });
      return { week, visitorsPerGroup, ...detectable };
    });
    return { perGroup, total, weeks, targetRate, mdeRows };
  }, [confidence, power, baseline, mde, relative, variantCount, sided, correction, weeklyTraffic, totalGroups]);

  const post = useMemo(() => {
    const analyses = variantRows.map((row) => ({ ...row, stats: analyzeVariant(cv, cc, row.visitors, row.conversions, postConfidence) }));
    const totalObserved = safe(cv) + variantRows.reduce((sum, row) => sum + safe(row.visitors), 0);
    const observedDailyTestTraffic = safe(testDays) > 0 ? totalObserved / safe(testDays) : NaN;
    const estimatedDailyTotalTraffic = safe(trafficPct) > 0 ? observedDailyTestTraffic / (safe(trafficPct) / 100) : NaN;
    const controlCr = analyzeVariant(cv, cc, variantRows[0]?.visitors || 1, variantRows[0]?.conversions || 0, postConfidence).p1 * 100;
    const requiredPerGroup = sampleSizePerGroup({ confidence: postConfidence, power, baseline: controlCr, mde, relative: relative === "yes", variants: variantRows.length, sided, correction: correction === "yes" });
    const requiredTotal = requiredPerGroup * (variantRows.length + 1);
    const additionalDays = observedDailyTestTraffic > 0 ? Math.max(0, (requiredTotal - totalObserved) / observedDailyTestTraffic) : NaN;
    return { analyses, totalObserved, observedDailyTestTraffic, estimatedDailyTotalTraffic, requiredPerGroup, requiredTotal, additionalDays };
  }, [variantRows, cv, cc, postConfidence, testDays, trafficPct, power, mde, relative, sided, correction]);

  const updateVariant = (id, key, value) => {
    setVariantRows((rows) => rows.map((row) => row.id === id ? { ...row, [key]: value } : row));
  };
  const addVariant = () => {
    setVariantRows((rows) => [...rows, { id: Date.now(), name: `Variation ${rows.length + 1}`, visitors: 10000, conversions: 1100 }]);
  };
  const removeVariant = (id) => {
    setVariantRows((rows) => rows.length <= 1 ? rows : rows.filter((row) => row.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#f6f2e8] text-slate-950">
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <header className="grid gap-8 rounded-[2rem] bg-slate-950 p-6 text-white md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">AB+ Test Calculator Recreation</div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Plan, run, and analyze A/B tests with explicit assumptions.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">A functional recreation combining the current CXL calculator structure with the archived AB+ calculator’s broader planning, duration, MDE, multi-variant, and monetary-contribution checks.</p>
          </div>
          <div className="grid content-end gap-3 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Implemented modules</p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Sample size per group, total sample, estimated duration</li>
              <li>• MDE by one to six weeks</li>
              <li>• Z-test, confidence intervals, one-sided and two-sided p-values</li>
              <li>• Relative-difference statistics and Bayesian approximation</li>
              <li>• Additional days and projected monetary contribution</li>
            </ul>
          </div>
        </header>

        <div className="sticky top-3 z-10 mx-auto mt-6 flex max-w-xl rounded-2xl border border-slate-200 bg-white/90 p-1 shadow-xl backdrop-blur">
          <button onClick={() => setMode("pre")} className={`flex-1 rounded-xl px-4 py-3 text-sm font-black ${mode === "pre" ? "bg-slate-950 text-white" : "text-slate-600"}`}>Pre-Test Calculator</button>
          <button onClick={() => setMode("post")} className={`flex-1 rounded-xl px-4 py-3 text-sm font-black ${mode === "post" ? "bg-slate-950 text-white" : "text-slate-600"}`}>Test Result Calculator</button>
        </div>

        {mode === "pre" ? (
          <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-5 shadow-sm md:p-7">
              <h2 className="text-2xl font-black">Pre-Test Inputs</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Use this before launch to decide whether the expected lift is detectable with available traffic.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Confidence level" value={confidence} setValue={setConfidence} suffix="%" />
                <Field label="Statistical power" value={power} setValue={setPower} suffix="%" />
                <Field label="Control conversion rate" value={baseline} setValue={setBaseline} suffix="%" />
                <Field label="Minimum detectable effect" value={mde} setValue={setMde} suffix="%" />
                <Field label="Variants excluding control" value={variants} setValue={setVariants} step="1" />
                <Field label="Weekly traffic" value={weeklyTraffic} setValue={setWeeklyTraffic} step="1" />
              </div>
              <div className="mt-5 grid gap-3">
                <Toggle label="MDE expression" value={relative} setValue={setRelative} options={[{ value: "yes", label: "Relative" }, { value: "no", label: "Absolute" }]} />
                <Toggle label="Test direction" value={sided} setValue={setSided} options={[{ value: "one", label: "One-sided" }, { value: "two", label: "Two-sided" }]} />
                <Toggle label="Multiple-variant correction" value={correction} setValue={setCorrection} options={[{ value: "yes", label: "Conservative" }, { value: "no", label: "None" }]} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
              <h2 className="text-2xl font-black">Pre-Test Results</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Metric label="Sample size per group" value={fmt(pre.perGroup)} />
                <Metric label="Total sample size" value={fmt(pre.total)} />
                <Metric label="Estimated duration" value={`${fmt(pre.weeks, 1)} weeks`} tone={pre.weeks <= 6 ? "good" : "bad"} />
                <Metric label="Target variant CR" value={pct(pre.targetRate)} />
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="bg-slate-950 px-4 py-3 text-sm font-black text-white">Minimal Detectable Effect by Test Length</div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                      <th className="px-4 py-3">Weeks</th>
                      <th className="px-4 py-3">Visitors per group</th>
                      <th className="px-4 py-3">Absolute MDE</th>
                      <th className="px-4 py-3">Relative MDE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pre.mdeRows.map((row) => (
                      <tr key={row.week} className="border-t border-slate-100">
                        <td className="px-4 py-3 font-black">{row.week}</td>
                        <td className="px-4 py-3">{fmt(row.visitorsPerGroup)}</td>
                        <td className="px-4 py-3">{pct(row.absolute)}</td>
                        <td className="px-4 py-3">{pct(row.relative)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-2xl bg-[#f6f2e8] p-5 text-sm leading-7 text-slate-700">
                <p><strong>Formula note:</strong> sample size uses a normal approximation for two proportions. Conservative mode divides alpha by the number of variant comparisons. Duration assumes even allocation across control and variants.</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-5 shadow-sm md:p-7">
              <h2 className="text-2xl font-black">Test Data</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Use after the planned sample size has been reached. Repeated peeking inflates false-positive risk.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Test duration" value={testDays} setValue={setTestDays} suffix="days" />
                <Field label="Traffic in test" value={trafficPct} setValue={setTrafficPct} suffix="%" />
                <Field label="Confidence level" value={postConfidence} setValue={setPostConfidence} suffix="%" />
                <Field label="Average order value" value={aov} setValue={setAov} suffix="$" />
                <Field label="Control visitors" value={cv} setValue={setCv} />
                <Field label="Control conversions" value={cc} setValue={setCc} />
              </div>
              <div className="mt-6 space-y-4">
                {variantRows.map((row, index) => (
                  <div key={row.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <input value={row.name} onChange={(e) => updateVariant(row.id, "name", e.target.value)} className="w-full bg-transparent text-lg font-black outline-none" />
                      {variantRows.length > 1 && <button onClick={() => removeVariant(row.id)} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-black text-rose-700">Remove</button>}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Variant visitors" value={row.visitors} setValue={(v) => updateVariant(row.id, "visitors", v)} />
                      <Field label="Variant conversions" value={row.conversions} setValue={(v) => updateVariant(row.id, "conversions", v)} />
                    </div>
                  </div>
                ))}
                <button onClick={addVariant} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-800 shadow-sm">+ Add Variant</button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
                <h2 className="text-2xl font-black">Sample Size and Duration Check</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <Metric label="Required per group" value={fmt(post.requiredPerGroup)} />
                  <Metric label="Required total" value={fmt(post.requiredTotal)} />
                  <Metric label="Additional days needed" value={fmt(post.additionalDays, 1)} tone={post.additionalDays <= 0 ? "good" : "bad"} />
                </div>
              </div>

              {post.analyses.map(({ id, name, visitors, conversions, stats }) => {
                const alpha = 1 - safe(postConfidence) / 100;
                const significant = stats.oneSidedP < alpha;
                const monthlyTransactions = stats.diff * post.estimatedDailyTotalTraffic * 30;
                const monthlyContribution = monthlyTransactions * safe(aov);
                return (
                  <div key={id} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <h2 className="text-2xl font-black">{name} Results</h2>
                        <p className="mt-1 text-sm text-slate-600">Compared against control using visitors and conversions supplied above.</p>
                      </div>
                      <div className={`rounded-full px-4 py-2 text-sm font-black ${significant ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>{significant ? "One-sided significant" : "Not significant yet"}</div>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      <Metric label="Control CR" value={pct(stats.p1 * 100)} />
                      <Metric label="Variant CR" value={pct(stats.p2 * 100)} />
                      <Metric label="Lift" value={pct(stats.lift * 100)} tone={stats.lift > 0 ? "good" : "bad"} />
                      <Metric label="Extra transactions" value={fmt(stats.diff * safe(visitors), 1)} tone={stats.diff > 0 ? "good" : "bad"} />
                    </div>

                    <div className="mt-6 grid gap-4 xl:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 p-5">
                        <div className="mb-2 text-sm font-black uppercase tracking-[0.12em] text-slate-500">Absolute differences</div>
                        <CompactRow label="Absolute difference" value={pct(stats.diff * 100)} />
                        <CompactRow label="Confidence interval" value={`${pct(stats.ciLow * 100)} to ${pct(stats.ciHigh * 100)}`} />
                        <CompactRow label="Right-sided interval" value={`${pct(stats.rightLow * 100)} to +∞`} />
                        <CompactRow label="Left-sided interval" value={`-∞ to ${pct(stats.leftHigh * 100)}`} />
                        <CompactRow label="Value ± SE" value={`${pct(stats.diff * 100)} ± ${pct(stats.seAbs * 100)}`} />
                        <CompactRow label="P-value one-sided" value={stats.oneSidedP.toFixed(4)} />
                        <CompactRow label="P-value two-sided" value={stats.twoSidedP.toFixed(4)} />
                        <CompactRow label="Z-score" value={stats.z.toFixed(3)} />
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-5">
                        <div className="mb-2 text-sm font-black uppercase tracking-[0.12em] text-slate-500">Relative differences</div>
                        <CompactRow label="Relative confidence interval" value={`${pct(stats.relCiLow * 100)} to ${pct(stats.relCiHigh * 100)}`} />
                        <CompactRow label="Relative right-sided interval" value={`${pct(stats.relRightLow * 100)} to +∞`} />
                        <CompactRow label="Relative left-sided interval" value={`-∞ to ${pct(stats.relLeftHigh * 100)}`} />
                        <CompactRow label="Relative difference ± SE" value={`${pct(stats.lift * 100)} ± ${pct(stats.seRel * 100)}`} />
                        <CompactRow label="Relative p-value" value={stats.relP.toFixed(4)} />
                        <CompactRow label="Relative z-score" value={stats.relZ.toFixed(3)} />
                        <CompactRow label="Bayesian probability: variant wins" value={pct(stats.bayesVariant * 100)} />
                        <CompactRow label="Bayesian probability: control wins" value={pct(stats.bayesControl * 100)} />
                        <CompactRow label="Bayes factor H1/H0" value={fmt(stats.bayesFactor, 2)} />
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-[#f6f2e8] p-5 text-sm leading-7 text-slate-700">
                      <p><strong>Projected monetary contribution:</strong> {money(monthlyContribution)} per month, estimated by applying the observed absolute conversion-rate difference to estimated total monthly traffic and multiplying by AOV. This is a projection, not proof of realized revenue.</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <footer className="mt-8 rounded-3xl border border-slate-200 bg-white/60 p-5 text-xs leading-6 text-slate-500">
          Independent educational recreation. It does not copy CXL source code and cannot guarantee exact parity with CXL’s private implementation. Statistical outputs use documented approximations: two-proportion normal tests, delta-method relative intervals, and a normal approximation to Beta posterior win probability.
        </footer>
      </section>
    </main>
  );
}
