import React, { useMemo, useState } from "react";

const COLORS = {
  bg: "#FCFAF2",
  ink: "#1F1F1F",
  sumi: "#2B2B2B",
  hai: "#828282",
  gofun: "#FFFFFB",
  mizu: "#EAF6F6",
  byakuroku: "#D7E7D6",
  toki: "#F7D7CF",
  benihi: "#E95464",
  ai: "#165E83",
  nando: "#2C4F54",
  kokimurasaki: "#4A225D",
  kikuchiba: "#D19826",
  usuki: "#FAD689",
};

const safe = (value, fallback = 0) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};

const clamp = (value, min, max) => Math.min(Math.max(safe(value), min), max);
const fmt = (value, digits = 0) => Number.isFinite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: digits }) : "---";
const pct = (value, digits = 2) => Number.isFinite(value) ? `${value.toFixed(digits)}%` : "---";
const money = (value) => Number.isFinite(value) ? value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : "---";

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

function sampleSizePerGroup({ confidence, power, baselinePct, liftPct, variantsIncludingControl, sided = "one" }) {
  const alpha = 1 - clamp(confidence, 50, 99.999) / 100;
  const beta = 1 - clamp(power, 1, 99.999) / 100;
  const p1 = clamp(baselinePct, 0.0001, 99.999) / 100;
  const p2 = clamp(p1 * (1 + safe(liftPct) / 100), 0.000001, 0.999999);
  const delta = Math.abs(p2 - p1);
  if (!delta) return NaN;
  const comparisons = Math.max(1, Math.floor(safe(variantsIncludingControl, 2)) - 1);
  const adjustedAlpha = alpha / comparisons;
  const zAlpha = inverseNormal(sided === "two" ? 1 - adjustedAlpha / 2 : 1 - adjustedAlpha);
  const zBeta = inverseNormal(1 - beta);
  const pooled = (p1 + p2) / 2;
  const numerator = Math.pow(
    zAlpha * Math.sqrt(2 * pooled * (1 - pooled)) + zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)),
    2
  );
  return Math.ceil(numerator / Math.pow(delta, 2));
}

function solveMdeForVisitors({ confidence, power, baselinePct, visitorsPerVariant, variantsIncludingControl, sided = "one" }) {
  const n = safe(visitorsPerVariant);
  const base = clamp(baselinePct, 0.0001, 99.999) / 100;
  if (n <= 0 || base <= 0) return NaN;
  let low = 0.0001;
  let high = 500;
  for (let i = 0; i < 70; i += 1) {
    const mid = (low + high) / 2;
    const needed = sampleSizePerGroup({ confidence, power, baselinePct, liftPct: mid, variantsIncludingControl, sided });
    if (needed > n) low = mid;
    else high = mid;
  }
  return high;
}

function analyze(controlUsers, controlConversions, variantUsers, variantConversions, confidence, sided = "one") {
  const n1 = Math.max(1, safe(controlUsers));
  const n2 = Math.max(1, safe(variantUsers));
  const x1 = clamp(controlConversions, 0, n1);
  const x2 = clamp(variantConversions, 0, n2);
  const p1 = x1 / n1;
  const p2 = x2 / n2;
  const diff = p2 - p1;
  const lift = p1 ? diff / p1 : NaN;
  const pooled = (x1 + x2) / (n1 + n2);
  const sePooled = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
  const z = sePooled ? diff / sePooled : 0;
  const oneP = 1 - normalCdf(z);
  const twoP = 2 * (1 - normalCdf(Math.abs(z)));
  const alpha = 1 - clamp(confidence, 50, 99.999) / 100;
  const zCrit = inverseNormal(sided === "two" ? 1 - alpha / 2 : 1 - alpha);
  const se = Math.sqrt((p1 * (1 - p1)) / n1 + (p2 * (1 - p2)) / n2);
  const ciLow = diff - zCrit * se;
  const ciHigh = sided === "two" ? diff + zCrit * se : Infinity;
  const a1 = x1 + 1;
  const b1 = n1 - x1 + 1;
  const a2 = x2 + 1;
  const b2 = n2 - x2 + 1;
  const m1 = a1 / (a1 + b1);
  const m2 = a2 / (a2 + b2);
  const v1 = (a1 * b1) / (Math.pow(a1 + b1, 2) * (a1 + b1 + 1));
  const v2 = (a2 * b2) / (Math.pow(a2 + b2, 2) * (a2 + b2 + 1));
  const bayesVariant = normalCdf((m2 - m1) / Math.sqrt(v1 + v2));
  const bayesControl = 1 - bayesVariant;
  const bayesFactor = clamp(bayesVariant, 0.000001, 0.999999) / clamp(bayesControl, 0.000001, 0.999999);
  return { n1, n2, x1, x2, p1, p2, diff, lift, se, z, oneP, twoP, ciLow, ciHigh, bayesVariant, bayesControl, bayesFactor };
}

function InputField({ label, value, setValue, suffix, hint }) {
  return (
    <label className="block min-w-0">
      <span className="block text-[12px] font-semibold leading-tight text-stone-700 md:text-[13px]">{label}</span>
      <div className="mt-1.5 flex min-h-10 items-center rounded-lg border border-stone-300 bg-white px-3 transition focus-within:border-[#165E83] focus-within:ring-2 focus-within:ring-[#165E83]/15">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-w-0 flex-1 bg-transparent py-2 text-[15px] font-semibold tabular-nums text-stone-950 outline-none"
        />
        {suffix && <span className="ml-1.5 shrink-0 text-sm font-bold text-stone-600">{suffix}</span>}
      </div>
      {hint && <span className="mt-1 block text-[11px] leading-snug text-stone-500">{hint}</span>}
    </label>
  );
}

function StepLabel({ number, text }) {
  return (
    <div className="hidden w-[172px] shrink-0 md:block lg:w-[210px]">
      <div className="sticky top-[92px] flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-lg font-semibold text-stone-900 shadow-sm">{number}</div>
        <div className="pt-1.5 text-[12px] font-medium leading-snug text-stone-700 lg:text-[13px]">{text}</div>
      </div>
    </div>
  );
}

function Panel({ children, className = "" }) {
  return <section className={`overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm ${className}`}>{children}</section>;
}

function PanelTitle({ title, subtitle }) {
  return (
    <div className="mb-4 min-w-0">
      <h2 className="text-[22px] font-semibold leading-tight tracking-tight text-stone-950 md:text-[25px]">{title}</h2>
      {subtitle && <p className="mt-1 max-w-[68ch] text-[13px] leading-5 text-stone-600">{subtitle}</p>}
    </div>
  );
}

function OutputArea({ label, value, tone = "neutral" }) {
  const color = tone === "good" ? "text-emerald-700" : tone === "bad" ? "text-[#E95464]" : "text-stone-900";
  return (
    <div className="flex min-h-[92px] flex-col justify-center bg-[#EAF6F6] p-4 md:p-5">
      <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-stone-600">{label}</div>
      <div className={`mt-2 break-words text-[20px] font-black tabular-nums leading-tight ${color}`}>{value}</div>
    </div>
  );
}

function OutputMini({ label, value, tone = "neutral" }) {
  const color = tone === "good" ? "text-emerald-700" : tone === "bad" ? "text-[#E95464]" : "text-stone-950";
  return (
    <div className="min-w-0 rounded-xl border border-sky-100 bg-white/55 p-3">
      <div className="min-h-[30px] text-[11px] font-bold uppercase tracking-[0.06em] leading-tight text-stone-600">{label}</div>
      <div className={`mt-2 break-words text-[15px] font-black tabular-nums leading-tight ${color}`}>{value}</div>
    </div>
  );
}

function ResultLine({ label, value }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-sky-100 py-2.5 text-[13px] md:text-sm">
      <span className="font-semibold leading-snug text-stone-700">{label}</span>
      <span className="text-right font-black tabular-nums text-stone-950">{value}</span>
    </div>
  );
}

function DenseTable({ children }) {
  return <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">{children}</div>;
}

function StickySummary({ activeTab, testSummary, preSummary }) {
  const items = activeTab === "test" ? testSummary : preSummary;
  return (
    <aside className="sticky top-0 z-30 border-y border-stone-200 bg-[#FCFAF2]/95 px-4 py-2 backdrop-blur md:top-0">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="min-w-0 rounded-xl border border-stone-200 bg-white/75 px-3 py-2">
            <div className="truncate text-[10px] font-bold uppercase tracking-[0.08em] text-stone-500">{item.label}</div>
            <div className="mt-0.5 truncate text-[13px] font-black tabular-nums text-stone-950 md:text-sm">{item.value}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function App() {
  const [tab, setTab] = useState("test");
  const [method, setMethod] = useState("bayesian");
  const [side, setSide] = useState("one");

  const [testDays, setTestDays] = useState(14);
  const [trafficPct, setTrafficPct] = useState(100);
  const [controlUsers, setControlUsers] = useState(10000);
  const [controlConversions, setControlConversions] = useState(1000);
  const [variants, setVariants] = useState([{ id: 1, users: 10000, conversions: 1120 }]);

  const [sampleBase, setSampleBase] = useState(10);
  const [sampleConfidence, setSampleConfidence] = useState(95);
  const [samplePower, setSamplePower] = useState(80);
  const [sampleLift, setSampleLift] = useState(10);
  const [sampleVariants, setSampleVariants] = useState(2);

  const [durationBase, setDurationBase] = useState(10);
  const [durationMde, setDurationMde] = useState(10);
  const [durationVariants, setDurationVariants] = useState(2);
  const [dailyVisitors, setDailyVisitors] = useState(1000);
  const [durationTrafficPct, setDurationTrafficPct] = useState(100);
  const [aov, setAov] = useState(80);

  const [weeklyTraffic, setWeeklyTraffic] = useState(7000);
  const [weeklyConversions, setWeeklyConversions] = useState(700);
  const [preVariants, setPreVariants] = useState(2);
  const [preConfidence, setPreConfidence] = useState(95);
  const [prePower, setPrePower] = useState(80);

  const controlCr = safe(controlUsers) ? safe(controlConversions) / safe(controlUsers) : NaN;
  const totalObserved = safe(controlUsers) + variants.reduce((s, v) => s + safe(v.users), 0);
  const observedDailyTraffic = safe(testDays) ? totalObserved / safe(testDays) : NaN;
  const estimatedDailyTotalTraffic = safe(trafficPct) ? observedDailyTraffic / (safe(trafficPct) / 100) : NaN;
  const requiredPerVariantFromObserved = sampleSizePerGroup({ confidence: sampleConfidence, power: samplePower, baselinePct: controlCr * 100, liftPct: sampleLift, variantsIncludingControl: variants.length + 1, sided: side });
  const additionalDays = Number.isFinite(requiredPerVariantFromObserved) && observedDailyTraffic ? Math.max(0, ((requiredPerVariantFromObserved * (variants.length + 1)) - totalObserved) / observedDailyTraffic) : NaN;

  const sampleRequired = useMemo(() => sampleSizePerGroup({ confidence: sampleConfidence, power: samplePower, baselinePct: sampleBase, liftPct: sampleLift, variantsIncludingControl: sampleVariants, sided: side }), [sampleConfidence, samplePower, sampleBase, sampleLift, sampleVariants, side]);

  const durationRequired = useMemo(() => {
    const per = sampleSizePerGroup({ confidence: sampleConfidence, power: samplePower, baselinePct: durationBase, liftPct: durationMde, variantsIncludingControl: durationVariants, sided: side });
    const total = per * Math.max(2, safe(durationVariants, 2));
    const dailyInTest = safe(dailyVisitors) * (safe(durationTrafficPct) / 100);
    return dailyInTest ? total / dailyInTest : NaN;
  }, [sampleConfidence, samplePower, durationBase, durationMde, durationVariants, side, dailyVisitors, durationTrafficPct]);

  const mdeTable = [1, 2, 3, 4, 5, 6].map((week) => {
    const visitorsPerVariant = safe(dailyVisitors) * 7 * week * (safe(durationTrafficPct) / 100) / Math.max(2, safe(durationVariants, 2));
    const mde = solveMdeForVisitors({ confidence: sampleConfidence, power: samplePower, baselinePct: durationBase, visitorsPerVariant, variantsIncludingControl: durationVariants, sided: side });
    return { week, visitorsPerVariant, mde };
  });

  const preBaseCr = safe(weeklyTraffic) ? (safe(weeklyConversions) / safe(weeklyTraffic)) * 100 : NaN;
  const preRows = [1, 2, 3, 4, 5, 6].map((week) => {
    const visitorsPerVariant = safe(weeklyTraffic) * week / Math.max(2, safe(preVariants, 2));
    const mde = solveMdeForVisitors({ confidence: preConfidence, power: prePower, baselinePct: preBaseCr, visitorsPerVariant, variantsIncludingControl: preVariants, sided: "one" });
    return { week, visitorsPerVariant, mde };
  });

  const bestVariant = variants.map((row, index) => ({ index, stats: analyze(controlUsers, controlConversions, row.users, row.conversions, sampleConfidence, side) })).sort((a, b) => b.stats.lift - a.stats.lift)[0];
  const bestLift = bestVariant ? bestVariant.stats.lift * 100 : NaN;
  const bestP = bestVariant ? (side === "one" ? bestVariant.stats.oneP : bestVariant.stats.twoP) : NaN;

  const testSummary = [
    { label: "Control CR", value: pct(controlCr * 100) },
    { label: "Best lift", value: pct(bestLift) },
    { label: "P-value", value: Number.isFinite(bestP) ? bestP.toFixed(4) : "---" },
    { label: "Required / group", value: fmt(requiredPerVariantFromObserved) },
    { label: "Extra days", value: fmt(additionalDays, 1) },
    { label: "Method", value: method === "bayesian" ? "Bayesian" : "Z Test" },
  ];

  const preSummary = [
    { label: "Weekly traffic", value: fmt(safe(weeklyTraffic)) },
    { label: "Weekly conv.", value: fmt(safe(weeklyConversions)) },
    { label: "Baseline CR", value: pct(preBaseCr) },
    { label: "Variants", value: fmt(safe(preVariants)) },
    { label: "Confidence", value: pct(safe(preConfidence), 0) },
    { label: "Power", value: pct(safe(prePower), 0) },
  ];

  const addDummy = () => {
    setTestDays(14);
    setTrafficPct(100);
    setControlUsers(10000);
    setControlConversions(1000);
    setVariants([{ id: 1, users: 10000, conversions: 1120 }]);
    setSampleBase(10);
    setSampleConfidence(95);
    setSamplePower(80);
    setSampleLift(10);
    setSampleVariants(2);
    setDurationBase(10);
    setDurationMde(10);
    setDurationVariants(2);
    setDailyVisitors(1000);
    setDurationTrafficPct(100);
    setAov(80);
    setWeeklyTraffic(7000);
    setWeeklyConversions(700);
    setPreVariants(2);
    setPreConfidence(95);
    setPrePower(80);
  };

  const addVariant = () => setVariants(rows => [...rows, { id: Date.now(), users: 10000, conversions: 1100 }]);
  const updateVariant = (id, key, value) => setVariants(rows => rows.map(row => row.id === id ? { ...row, [key]: value } : row));
  const removeVariant = (id) => setVariants(rows => rows.length <= 1 ? rows : rows.filter(row => row.id !== id));

  return (
    <main className="min-h-screen text-stone-950" style={{ backgroundColor: COLORS.bg }}>
      <div className="border-b border-stone-200 bg-[#4A225D] px-4 py-2.5 text-center text-xs font-semibold leading-5 text-white md:text-sm">Independent A/B test calculator recreation. Focus: full functionality, readable layout, and auditable assumptions.</div>

      <StickySummary activeTab={tab} testSummary={testSummary} preSummary={preSummary} />

      <section className="mx-auto max-w-[1320px] px-4 py-6 md:px-6 md:py-8 lg:px-8">
        <header className="mx-auto max-w-[980px] text-center">
          <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#165E83]">A/B Test Calculator</div>
          <h1 className="mt-2 text-[34px] font-black leading-[1.05] tracking-tight text-stone-950 md:text-[56px]">Plan and analyze A/B tests without guessing.</h1>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-6 text-stone-700 md:text-base">This recreation preserves the full workflow: test duration, test data, sample size, duration planning, monetary contribution, MDE table, Bayesian view, Z-test view, and pre-test analysis.</p>

          <div className="mt-6 grid gap-3 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white/75 p-4">
              <div className="text-xs font-black uppercase tracking-[0.12em] text-[#165E83]">Test analysis</div>
              <ul className="mt-2 space-y-1.5 text-[13px] leading-5 text-stone-700">
                <li>Does the variant beat the control?</li>
                <li>Does the test have enough sample and duration?</li>
                <li>What is the projected monetary contribution?</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/75 p-4">
              <div className="text-xs font-black uppercase tracking-[0.12em] text-[#4A225D]">Pre-test analysis</div>
              <ul className="mt-2 space-y-1.5 text-[13px] leading-5 text-stone-700">
                <li>What MDE is detectable by week?</li>
                <li>How does traffic split affect visitors per variant?</li>
                <li>How do confidence and power change feasibility?</li>
              </ul>
            </div>
          </div>
        </header>

        <div className="sticky top-[57px] z-20 mt-7 rounded-2xl border border-stone-200 bg-white/90 p-1 shadow-sm backdrop-blur md:top-[62px] md:mx-auto md:w-[520px]">
          <div className="grid grid-cols-2 gap-1">
            <button onClick={() => setTab("test")} className={`rounded-xl px-3 py-3 text-sm font-black transition ${tab === "test" ? "bg-[#165E83] text-white" : "text-stone-500 hover:bg-stone-50"}`}>Test Analysis</button>
            <button onClick={() => setTab("pre")} className={`rounded-xl px-3 py-3 text-sm font-black transition ${tab === "pre" ? "bg-[#165E83] text-white" : "text-stone-500 hover:bg-stone-50"}`}>Pre-Test Analysis</button>
          </div>
        </div>

        <div className="mt-4 text-center text-[13px] text-stone-600">Need sample inputs? <button onClick={addDummy} className="font-black text-[#165E83] underline underline-offset-4">Add dummy test data</button></div>

        {tab === "test" ? (
          <div className="mt-7 space-y-8 md:space-y-10">
            <div className="flex gap-5">
              <StepLabel number="1" text="How long has the test been running?" />
              <Panel className="grid min-w-0 flex-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_330px]">
                <div className="p-4 md:p-5 lg:p-6">
                  <PanelTitle title="Test duration" subtitle="Use elapsed days and traffic allocation to check whether the test has enough running time." />
                  <div className="grid gap-4 md:grid-cols-2">
                    <InputField label="Test duration" value={testDays} setValue={setTestDays} suffix="days" />
                    <InputField label="Percent of traffic in test" value={trafficPct} setValue={setTrafficPct} suffix="%" />
                  </div>
                </div>
                <OutputArea label="Additional days needed" value={fmt(additionalDays, 1)} tone={additionalDays <= 0 ? "good" : "bad"} />
              </Panel>
            </div>

            <div className="flex gap-5">
              <StepLabel number="2" text="Test data" />
              <div className="min-w-0 flex-1 space-y-4">
                <Panel className="grid md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_330px]">
                  <div className="border-l-4 border-[#165E83] p-4 md:p-5 lg:p-6">
                    <PanelTitle title="Control" subtitle="Base experience or original page." />
                    <div className="grid gap-4 md:grid-cols-2">
                      <InputField label="Users or sessions" value={controlUsers} setValue={setControlUsers} />
                      <InputField label="Conversions" value={controlConversions} setValue={setControlConversions} />
                    </div>
                  </div>
                  <OutputArea label="Conversion rate" value={pct(controlCr * 100)} />
                </Panel>

                {variants.map((row, index) => {
                  const stats = analyze(controlUsers, controlConversions, row.users, row.conversions, sampleConfidence, side);
                  const extraTransactions = stats.diff * safe(row.users);
                  const monthlyContribution = stats.diff * estimatedDailyTotalTraffic * 30 * safe(aov);
                  return (
                    <Panel key={row.id} className="relative grid md:grid-cols-[1fr_1.25fr]">
                      {variants.length > 1 && <button onClick={() => removeVariant(row.id)} className="absolute right-3 top-2 rounded-full px-2 py-1 text-lg font-black text-stone-500 hover:bg-stone-100">×</button>}
                      <div className="border-l-4 border-[#E95464] p-4 md:p-5 lg:p-6">
                        <PanelTitle title={`Variation ${index + 1}`} subtitle="Candidate experience compared with control." />
                        <div className="grid gap-4 md:grid-cols-2">
                          <InputField label="Users or sessions" value={row.users} setValue={(v) => updateVariant(row.id, "users", v)} />
                          <InputField label="Conversions" value={row.conversions} setValue={(v) => updateVariant(row.id, "conversions", v)} />
                        </div>
                      </div>
                      <div className="grid gap-3 bg-[#EAF6F6] p-4 sm:grid-cols-2 lg:grid-cols-4">
                        <OutputMini label="Conversion rate" value={pct(stats.p2 * 100)} tone="bad" />
                        <OutputMini label="Lift" value={pct(stats.lift * 100)} tone={stats.lift >= 0 ? "good" : "bad"} />
                        <OutputMini label="Extra transactions" value={fmt(extraTransactions, 1)} tone={extraTransactions >= 0 ? "good" : "bad"} />
                        <OutputMini label="Monthly contribution" value={money(monthlyContribution)} tone={monthlyContribution >= 0 ? "good" : "bad"} />
                      </div>
                    </Panel>
                  );
                })}
                <button onClick={addVariant} className="rounded-xl bg-[#E95464] px-5 py-3 text-sm font-black text-white shadow-sm hover:brightness-95">+ Add Variant</button>
              </div>
            </div>

            <div className="flex gap-5">
              <StepLabel number="3" text="Statistical details, sample size, duration, contribution, and MDE tools." />
              <div className="grid min-w-0 flex-1 gap-4 lg:grid-cols-4">
                <Panel className="flex flex-col">
                  <div className="grow p-4 md:p-5">
                    <PanelTitle title="Sample size calculator" subtitle="Required visitors per variant." />
                    <div className="space-y-4">
                      <InputField label="Baseline conversion rate" value={sampleBase} setValue={setSampleBase} suffix="%" />
                      <InputField label="Confidence level" value={sampleConfidence} setValue={setSampleConfidence} suffix="%" />
                      <InputField label="Statistical power" value={samplePower} setValue={setSamplePower} suffix="%" />
                      <InputField label="Conversion rate lift" value={sampleLift} setValue={setSampleLift} suffix="%" />
                      <InputField label="Number of variants including control" value={sampleVariants} setValue={setSampleVariants} />
                    </div>
                  </div>
                  <OutputArea label="Required sample size per variant" value={fmt(sampleRequired)} tone="good" />
                </Panel>

                <Panel className="flex flex-col">
                  <div className="grow p-4 md:p-5">
                    <PanelTitle title="Duration calculator" subtitle="Total days needed under current traffic." />
                    <div className="space-y-4">
                      <InputField label="Baseline conversion rate" value={durationBase} setValue={setDurationBase} suffix="%" />
                      <InputField label="Minimal detectable effect" value={durationMde} setValue={setDurationMde} suffix="%" />
                      <InputField label="Number of variants including control" value={durationVariants} setValue={setDurationVariants} />
                      <InputField label="Number of daily visitors" value={dailyVisitors} setValue={setDailyVisitors} />
                      <InputField label="Percent traffic in test" value={durationTrafficPct} setValue={setDurationTrafficPct} suffix="%" />
                    </div>
                  </div>
                  <OutputArea label="How long to run the test" value={`${fmt(durationRequired, 1)} days`} tone="good" />
                </Panel>

                <Panel className="p-4 md:p-5">
                  <PanelTitle title="Monthly monetary contribution" subtitle="Uses the variant lift, estimated total traffic, and average order value." />
                  <InputField label="Average order value" value={aov} setValue={setAov} suffix="$" />
                  <div className="mt-4 rounded-xl bg-[#FAD689]/35 p-3 text-[12px] leading-5 text-stone-700">Projection only. This does not replace revenue attribution or experiment guardrail checks.</div>
                </Panel>

                <Panel className="bg-[#EAF6F6] p-4 md:p-5">
                  <PanelTitle title="Minimal detectable effect" subtitle="Detectable lift by test length." />
                  <DenseTable>
                    <table className="w-full text-left text-[13px]">
                      <thead className="bg-white/70 text-[11px] uppercase tracking-[0.08em] text-stone-500">
                        <tr><th className="px-3 py-2">Week</th><th className="px-3 py-2">Visitors / variant</th><th className="px-3 py-2">MDE</th></tr>
                      </thead>
                      <tbody>
                        {mdeTable.map(row => <tr key={row.week} className="border-t border-stone-200"><td className="px-3 py-2 font-bold">{row.week}</td><td className="px-3 py-2 tabular-nums">{fmt(row.visitorsPerVariant)}</td><td className="px-3 py-2 font-black tabular-nums text-[#E95464]">{pct(row.mde, 2)}</td></tr>)}
                      </tbody>
                    </table>
                  </DenseTable>
                </Panel>
              </div>
            </div>

            <div className="flex gap-5">
              <StepLabel number="4" text="Results" />
              <div className="min-w-0 flex-1">
                <div className="mb-3 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                  <PanelTitle title="Results" subtitle="Switch between Bayesian approximation and two-proportion Z-test outputs." />
                  <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-stone-200 bg-white p-1">
                    <button onClick={() => setMethod("bayesian")} className={`rounded-lg px-4 py-2.5 text-sm font-black ${method === "bayesian" ? "bg-[#165E83] text-white" : "text-stone-600"}`}>Bayesian</button>
                    <button onClick={() => setMethod("z")} className={`rounded-lg px-4 py-2.5 text-sm font-black ${method === "z" ? "bg-[#165E83] text-white" : "text-stone-600"}`}>Z Test</button>
                  </div>
                </div>
                <Panel className="bg-[#EAF6F6] p-4 md:p-6">
                  <div className="mb-5 flex flex-wrap gap-4 text-sm font-semibold text-stone-700">
                    <label className="flex items-center gap-2"><input type="radio" checked={side === "one"} onChange={() => setSide("one")} /> One-sided</label>
                    <label className="flex items-center gap-2"><input type="radio" checked={side === "two"} onChange={() => setSide("two")} /> Two-sided</label>
                  </div>
                  <div className="space-y-4">
                    {variants.map((row, index) => {
                      const stats = analyze(controlUsers, controlConversions, row.users, row.conversions, sampleConfidence, side);
                      const pValue = side === "one" ? stats.oneP : stats.twoP;
                      const significant = pValue < (1 - safe(sampleConfidence) / 100);
                      return (
                        <div key={row.id} className="rounded-2xl border border-sky-100 bg-white/65 p-4">
                          <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                            <h3 className="text-lg font-black">Variation {index + 1}</h3>
                            <span className={`inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-black ${significant ? "bg-emerald-100 text-emerald-800" : "bg-[#FAD689]/45 text-stone-800"}`}>{significant ? "Variant beats control" : "No conclusive winner"}</span>
                          </div>
                          {method === "bayesian" ? (
                            <div className="grid gap-3 md:grid-cols-3">
                              <ResultLine label="Probability variant wins" value={pct(stats.bayesVariant * 100)} />
                              <ResultLine label="Probability control wins" value={pct(stats.bayesControl * 100)} />
                              <ResultLine label="Bayes factor H1/H0" value={fmt(stats.bayesFactor, 2)} />
                            </div>
                          ) : (
                            <div className="grid gap-3 md:grid-cols-3">
                              <ResultLine label="Confidence interval" value={side === "one" ? `${pct(stats.ciLow * 100)} to +∞` : `${pct(stats.ciLow * 100)} to ${pct(stats.ciHigh * 100)}`} />
                              <ResultLine label="P-value" value={pValue.toFixed(4)} />
                              <ResultLine label="Z-score" value={stats.z.toFixed(3)} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Panel>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-7 space-y-8 md:space-y-10">
            <div className="flex gap-5">
              <StepLabel number="1" text="Insert data from the page you want to test." />
              <Panel className="min-w-0 flex-1 p-4 md:p-6">
                <PanelTitle title="Test page data" subtitle="Weekly traffic is used for pre-test feasibility and MDE planning." />
                <div className="grid gap-4 md:grid-cols-3">
                  <InputField label="Weekly traffic" value={weeklyTraffic} setValue={setWeeklyTraffic} />
                  <InputField label="Weekly conversions" value={weeklyConversions} setValue={setWeeklyConversions} />
                  <InputField label="Number of variants including control" value={preVariants} setValue={setPreVariants} />
                </div>
              </Panel>
            </div>

            <div className="flex gap-5">
              <StepLabel number="2" text="Results" />
              <Panel className="grid min-w-0 flex-1 md:grid-cols-[300px_1fr]">
                <div className="p-4 md:p-6">
                  <PanelTitle title="CR, confidence, and power" subtitle="Baseline CR is derived from weekly conversions divided by weekly traffic." />
                  <div className="space-y-4">
                    <InputField label="Baseline conversion rate" value={Number.isFinite(preBaseCr) ? preBaseCr.toFixed(2) : ""} setValue={() => {}} suffix="%" />
                    <InputField label="Confidence level" value={preConfidence} setValue={setPreConfidence} suffix="%" />
                    <InputField label="Statistical power" value={prePower} setValue={setPrePower} suffix="%" />
                  </div>
                </div>
                <div className="bg-[#EAF6F6] p-4 md:p-6">
                  <DenseTable>
                    <table className="w-full min-w-[560px] text-left text-sm">
                      <thead className="bg-white/75 text-[11px] uppercase tracking-[0.08em] text-stone-500">
                        <tr>
                          <th className="px-3 py-2">Weeks running test</th>
                          <th className="px-3 py-2">Minimal detectable effect</th>
                          <th className="px-3 py-2">Visitors per variant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preRows.map(row => (
                          <tr key={row.week} className="border-t border-stone-200">
                            <td className="px-3 py-2 font-bold tabular-nums">{row.week}</td>
                            <td className="px-3 py-2 font-black tabular-nums text-[#E95464]">{pct(row.mde, 2)}</td>
                            <td className="px-3 py-2 tabular-nums">{fmt(row.visitorsPerVariant)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </DenseTable>
                </div>
              </Panel>
            </div>
          </div>
        )}

        <footer className="mt-12 border-t border-stone-200 py-6 text-center text-[12px] leading-5 text-stone-500">Independent recreation for testing and learning. Validate final experiment decisions with the full analytics context, data quality checks, and experiment governance rules.</footer>
      </section>
    </main>
  );
}
