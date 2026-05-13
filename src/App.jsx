import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Settings, Upload, Globe, ArrowUpRight, CheckCircle2, Lightbulb, Anchor, Sun, Moon, Copy, Check } from "lucide-react";
import { translations, LANGUAGES, HTML_LANG, RTL_LANGS, detectInitialLang } from "./locales";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const STEP_ICONS = [
  <Sparkles className="h-5 w-5" />,
  <Settings className="h-5 w-5" />,
  <Upload className="h-5 w-5" />,
];

function detectInitialDarkMode() {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem("aiweb-theme");
    if (stored) return stored === "dark";
  } catch (_) {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function App() {
  const [lang, setLang] = useState(detectInitialLang);
  const [darkMode, setDarkMode] = useState(detectInitialDarkMode);
  const [langOpen, setLangOpen] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);
  const [promptCopied, setPromptCopied] = useState(false);
  const [variantIdx, setVariantIdx] = useState(0);
  const switcherRef = useRef(null);
  const listRef = useRef(null);
  const triggerRef = useRef(null);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
      m.setAttribute("content", darkMode ? "#1A1816" : "#FCFAF2");
    });
  }, [darkMode]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("aiweb-theme")) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("aiweb-lang", lang);
    } catch (_) {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[lang] || "en";
      document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
    }
  }, [lang]);

  useEffect(() => {
    if (langOpen) {
      setFocusIdx(LANGUAGES.findIndex((l) => l.code === lang));
    }
  }, [langOpen, lang]);

  useEffect(() => {
    if (!langOpen || focusIdx < 0) return;
    const list = listRef.current;
    if (!list) return;
    const items = list.querySelectorAll("[role=option]");
    if (items[focusIdx]) items[focusIdx].scrollIntoView({ block: "nearest" });
  }, [focusIdx, langOpen]);

  const handleSwitcherKey = useCallback(
    (e) => {
      if (!langOpen) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setLangOpen(true);
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusIdx((i) => (i + 1) % LANGUAGES.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusIdx((i) => (i - 1 + LANGUAGES.length) % LANGUAGES.length);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (focusIdx >= 0) {
            setLang(LANGUAGES[focusIdx].code);
            setVariantIdx(0);
            setLangOpen(false);
            triggerRef.current?.focus();
          }
          break;
        case "Escape":
          e.preventDefault();
          setLangOpen(false);
          triggerRef.current?.focus();
          break;
      }
    },
    [langOpen, focusIdx],
  );

  useEffect(() => {
    if (!langOpen) return;
    function onClickAway(e) {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [langOpen]);

  const t = translations[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-body)] antialiased">
      <main className="mx-auto max-w-6xl px-4 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* Hero */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="overflow-hidden rounded-[2rem] border border-[var(--lp-border)] bg-[image:var(--lp-hero-grad)] shadow-[0_18px_70px_rgba(var(--lp-shadow-rgb),0.08)]"
        >
          <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.85)] px-3 py-1.5 text-xs font-medium text-[var(--lp-subtle)]">
                <Anchor className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                {t.badge}
              </div>

              <h1 className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-[var(--lp-heading)] sm:text-5xl lg:text-[3.5rem]">
                {t.heroTitle[0]}
                <br />
                {t.heroTitle[1]}
              </h1>

              <p className="mt-5 max-w-xl text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base sm:leading-8">
                {t.heroSubtitle}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/EugeneYip/aiweb"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--lp-cta-bg)] px-5 py-3 text-sm font-medium text-[var(--lp-cta-fg)] shadow-sm transition-all hover:bg-[var(--lp-cta-hover)] hover:shadow-md"
                >
                  {t.ctaPrimary}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={t.readmeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--lp-border-mid)] bg-[rgba(var(--lp-surface-rgb),0.80)] px-5 py-3 text-sm font-medium text-[var(--lp-body)] transition-all hover:bg-[var(--lp-surface-solid)] hover:border-[var(--lp-border-hover)]"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.80)] p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between border-b border-[var(--lp-divider)] pb-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--lp-muted)]">{t.includedLabel}</p>
                  <h2 className="mt-1.5 text-lg font-semibold text-[var(--lp-heading)]">{t.includedTitle}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--lp-raised)] text-[var(--lp-subtle)]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-[var(--lp-bg)] px-3.5 py-2.5 transition-colors hover:bg-[var(--lp-raised)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--lp-accent)]" />
                    <span className="text-sm font-medium text-[var(--lp-heading)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 rounded-[2rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.65)] px-5 py-6 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-muted)]">{t.howItWorksLabel}</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[var(--lp-heading)] sm:text-3xl">
              {t.howItWorksTitle}
            </h2>
            <p className="mt-3 text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8">
            {t.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="relative overflow-hidden rounded-2xl border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.80)] p-5 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.05)] transition-all hover:shadow-[0_12px_40px_rgba(var(--lp-shadow-rgb),0.1)] hover:border-[var(--lp-border-hover)] sm:p-6"
              >
                <span className="pointer-events-none absolute end-3 top-1 select-none font-mono text-6xl font-bold text-[var(--lp-watermark)]">
                  {step.number}
                </span>
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--lp-raised)] text-[var(--lp-subtle)] sm:h-11 sm:w-11">
                    {STEP_ICONS[idx]}
                  </div>
                  <div className="min-w-0 flex-1 pe-12">
                    <h3 className="text-base font-semibold text-[var(--lp-heading)] sm:text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--lp-text)] sm:text-[0.938rem] sm:leading-7">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Prompt Template */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 rounded-[2rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.65)] px-5 py-6 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-muted)]">{t.promptLabel}</p>
            <p className="mt-2.5 text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base">
              {t.promptHint}
            </p>
          </div>

          <div role="tablist" aria-label={t.promptLabel} className="mt-4 flex flex-wrap gap-2">
            {t.promptVariants.map((v, i) => {
              const selected = i === variantIdx;
              return (
                <button
                  key={v.label}
                  id={`prompt-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="prompt-tabpanel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => { setVariantIdx(i); setPromptCopied(false); }}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                    selected
                      ? "border-[var(--lp-accent)] bg-[var(--lp-accent)] text-white shadow-sm"
                      : "border-[var(--lp-border-mid)] bg-[rgba(var(--lp-surface-rgb),0.6)] text-[var(--lp-subtle)] hover:border-[var(--lp-border-hover)] hover:bg-[var(--lp-surface-solid)]"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>

          <div
            id="prompt-tabpanel"
            role="tabpanel"
            aria-labelledby={`prompt-tab-${variantIdx}`}
            className="relative mt-4 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-bg)] p-4 sm:p-5"
          >
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(t.promptVariants[variantIdx].template)
                  .then(() => {
                    setPromptCopied(true);
                    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
                    copyTimeoutRef.current = setTimeout(() => {
                      setPromptCopied(false);
                      copyTimeoutRef.current = null;
                    }, 2000);
                  })
                  .catch(() => {
                    // clipboard unavailable (non-HTTPS, denied, unsupported) — silently no-op
                  });
              }}
              className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-[var(--lp-border-mid)] bg-[rgba(var(--lp-surface-rgb),0.85)] px-3 py-1.5 text-xs font-medium text-[var(--lp-subtle)] transition-all hover:bg-[var(--lp-surface-solid)] hover:border-[var(--lp-border-hover)]"
            >
              {promptCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {promptCopied ? t.promptCopied : t.promptCopy}
            </button>
            <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 text-[var(--lp-text)] sm:text-sm sm:leading-7 pe-20">{t.promptVariants[variantIdx].template}</pre>
          </div>
        </motion.section>

        {/* Files You'll Change */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 rounded-[2rem] border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.65)] px-5 py-6 shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.04)] sm:mt-8 sm:px-8 sm:py-9 lg:px-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-muted)]">{t.filesLabel}</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[var(--lp-heading)] sm:text-3xl">
              {t.filesTitle}
            </h2>
            <p className="mt-3 text-[0.938rem] leading-7 text-[var(--lp-text)] sm:text-base">
              {t.filesSubtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
            {t.files.map((file) => (
              <div
                key={file.name}
                className={`relative overflow-hidden rounded-2xl border p-5 transition-all ${
                  file.required
                    ? "border-[var(--lp-border-accent)] bg-[rgba(var(--lp-surface-rgb),0.90)] shadow-[0_8px_30px_rgba(var(--lp-shadow-rgb),0.06)] hover:shadow-[0_12px_40px_rgba(var(--lp-shadow-rgb),0.1)]"
                    : "border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.60)] hover:bg-[rgba(var(--lp-surface-rgb),0.80)] hover:border-[var(--lp-border-hover)]"
                }`}
              >
                {file.required && (
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--lp-accent-bar)]" />
                )}
                <div className="flex items-center justify-between gap-2">
                  <code className="rounded-lg bg-[var(--lp-raised)] px-2.5 py-1 font-mono text-xs font-medium text-[var(--lp-heading)]">
                    {file.name}
                  </code>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      file.required
                        ? "bg-[var(--lp-accent-soft)] text-[var(--lp-accent)]"
                        : "bg-[var(--lp-border-tag)] text-[var(--lp-dim)]"
                    }`}
                  >
                    {file.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--lp-text)]">{file.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--lp-border-tip)] border-s-[3px] border-s-[var(--lp-accent-tint-soft)] bg-[var(--lp-hover)] px-4 py-3.5">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lp-accent)]" />
            <p className="text-sm leading-6 text-[var(--lp-text)]">
              <span className="font-semibold text-[var(--lp-heading)]">{t.tipLabel}</span>
              {" — "}
              {t.tipText}{" "}
              <code className="rounded bg-[var(--lp-raised)] px-1.5 py-0.5 font-mono text-xs text-[var(--lp-heading)]">
                {t.tipCommand}
              </code>{" "}
              {t.tipAfter}
            </p>
          </div>
        </motion.section>

        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 pb-24 text-center text-sm text-[var(--lp-muted)]"
        >
          <Anchor className="mx-auto mb-2.5 h-4 w-4 text-[var(--lp-footer-icon)]" />
          {t.footerLine1} <br className="sm:hidden" />
          {t.footerLine2}
        </motion.footer>
      </main>

      {/* Controls */}
      <div className="fixed bottom-4 end-4 z-50 flex items-center gap-2 sm:bottom-6 sm:end-6">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => {
            const next = !darkMode;
            setDarkMode(next);
            localStorage.setItem("aiweb-theme", next ? "dark" : "light");
          }}
          aria-label={darkMode ? t.themeLight : t.themeDark}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.90)] text-[var(--lp-subtle)] shadow-[0_10px_30px_rgba(var(--lp-shadow-rgb),0.12)] backdrop-blur-sm transition hover:bg-[var(--lp-surface-solid)]"
        >
          {darkMode ? <Sun className="h-[1.125rem] w-[1.125rem]" /> : <Moon className="h-[1.125rem] w-[1.125rem]" />}
        </button>

        {/* Language switcher */}
        <div ref={switcherRef} className="relative" onKeyDown={handleSwitcherKey}>
          {langOpen && (
            <div
              ref={listRef}
              id="lang-listbox"
              role="listbox"
              aria-label={t.langLabel}
              aria-activedescendant={focusIdx >= 0 ? `lang-opt-${LANGUAGES[focusIdx].code}` : undefined}
              className="absolute bottom-[calc(100%+0.625rem)] end-0 min-w-[9.5rem] max-h-[min(20rem,60vh)] overflow-y-auto rounded-2xl border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.95)] shadow-[0_18px_50px_rgba(var(--lp-shadow-rgb),0.15)] backdrop-blur-sm"
            >
              {LANGUAGES.map((l, i) => {
                const active = l.code === lang;
                const focused = i === focusIdx;
                return (
                  <button
                    key={l.code}
                    id={`lang-opt-${l.code}`}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onMouseEnter={() => setFocusIdx(i)}
                    onClick={() => {
                      setLang(l.code);
                      setVariantIdx(0);
                      setLangOpen(false);
                      triggerRef.current?.focus();
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-start text-sm transition ${
                      active
                        ? "bg-[var(--lp-raised)] font-semibold text-[var(--lp-heading)]"
                        : focused
                          ? "bg-[var(--lp-hover)] text-[var(--lp-heading)]"
                          : "text-[var(--lp-text)] hover:bg-[var(--lp-bg)]"
                    }${focused ? " ring-1 ring-inset ring-[var(--lp-ring)]" : ""}`}
                  >
                    <span className="w-4 font-mono text-[11px] text-[var(--lp-hint)]">{l.short}</span>
                    <span>{l.label}</span>
                    {active && <CheckCircle2 className="ms-auto h-4 w-4 text-[var(--lp-accent)]" />}
                  </button>
                );
              })}
            </div>
          )}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setLangOpen((v) => !v)}
            aria-label={t.langLabel}
            aria-expanded={langOpen}
            aria-haspopup="listbox"
            aria-controls="lang-listbox"
            className="flex h-11 items-center gap-2 rounded-full border border-[var(--lp-border)] bg-[rgba(var(--lp-surface-rgb),0.90)] px-3.5 text-[var(--lp-subtle)] shadow-[0_10px_30px_rgba(var(--lp-shadow-rgb),0.12)] backdrop-blur-sm transition hover:bg-[var(--lp-surface-solid)]"
          >
            <Globe className="h-4.5 w-4.5" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[var(--lp-subtle)]">
              {currentLang.short}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
