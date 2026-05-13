import en from "./en.js";
import zh from "./zh.js";
import zhCN from "./zh-CN.js";
import es from "./es.js";
import ja from "./ja.js";
import de from "./de.js";
import fr from "./fr.js";
import ar from "./ar.js";
import pt from "./pt.js";
import hi from "./hi.js";
import vi from "./vi.js";
import id from "./id.js";
import ko from "./ko.js";
import ru from "./ru.js";
import it from "./it.js";
import tr from "./tr.js";
import ur from "./ur.js";
import th from "./th.js";
import he from "./he.js";

// Single source of truth. Order here drives the language switcher menu.
// Adding a locale = create <code>.js, import above, add one row here.
const REGISTRY = [
  { code: "en",    label: "English",          short: "EN", htmlLang: "en",      rtl: false, module: en },
  { code: "zh",    label: "中文",              short: "中", htmlLang: "zh",      rtl: false, module: zh },
  { code: "zh-CN", label: "简体",              short: "简", htmlLang: "zh-Hans", rtl: false, module: zhCN },
  { code: "es",    label: "Español",          short: "ES", htmlLang: "es",      rtl: false, module: es },
  { code: "ja",    label: "日本語",            short: "日", htmlLang: "ja",      rtl: false, module: ja },
  { code: "de",    label: "Deutsch",          short: "DE", htmlLang: "de",      rtl: false, module: de },
  { code: "fr",    label: "Français",         short: "FR", htmlLang: "fr",      rtl: false, module: fr },
  { code: "ar",    label: "العربية",           short: "ع",  htmlLang: "ar",      rtl: true,  module: ar },
  { code: "pt",    label: "Português",        short: "PT", htmlLang: "pt",      rtl: false, module: pt },
  { code: "hi",    label: "हिन्दी",             short: "हि", htmlLang: "hi",      rtl: false, module: hi },
  { code: "vi",    label: "Tiếng Việt",       short: "VI", htmlLang: "vi",      rtl: false, module: vi },
  { code: "id",    label: "Bahasa Indonesia", short: "ID", htmlLang: "id",      rtl: false, module: id },
  { code: "ko",    label: "한국어",            short: "한", htmlLang: "ko",      rtl: false, module: ko },
  { code: "ru",    label: "Русский",          short: "RU", htmlLang: "ru",      rtl: false, module: ru },
  { code: "it",    label: "Italiano",         short: "IT", htmlLang: "it",      rtl: false, module: it },
  { code: "tr",    label: "Türkçe",           short: "TR", htmlLang: "tr",      rtl: false, module: tr },
  { code: "ur",    label: "اردو",              short: "ار", htmlLang: "ur",      rtl: true,  module: ur },
  { code: "th",    label: "ไทย",              short: "ไท", htmlLang: "th",      rtl: false, module: th },
  { code: "he",    label: "עברית",             short: "עב", htmlLang: "he",      rtl: true,  module: he },
];

export const translations = Object.fromEntries(REGISTRY.map((l) => [l.code, l.module]));
export const LANGUAGES = REGISTRY.map(({ code, label, short }) => ({ code, label, short }));
export const HTML_LANG = Object.fromEntries(REGISTRY.map((l) => [l.code, l.htmlLang]));
export const RTL_LANGS = new Set(REGISTRY.filter((l) => l.rtl).map((l) => l.code));

export function detectInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem("aiweb-lang");
    if (stored && translations[stored]) return stored;
  } catch (_) {
    // ignore storage errors
  }
  const browser = (window.navigator.language || "en").toLowerCase();
  // Chinese needs script-level disambiguation
  if (browser.startsWith("zh")) {
    return browser === "zh-cn" || browser.startsWith("zh-hans") ? "zh-CN" : "zh";
  }
  const match = REGISTRY.find(
    ({ code }) => code !== "zh" && code !== "zh-CN" && browser.startsWith(code),
  );
  return match?.code || "en";
}

if (import.meta.env?.DEV) {
  const baseKeys = Object.keys(en).sort();
  const baseSet = new Set(baseKeys);
  for (const code of Object.keys(translations)) {
    if (code === "en") continue;
    const keys = Object.keys(translations[code]);
    const missing = baseKeys.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !baseSet.has(k));
    if (missing.length || extra.length) {
      // eslint-disable-next-line no-console
      console.warn(
        `[locales] key drift in "${code}":` +
          (missing.length ? ` missing=[${missing.join(", ")}]` : "") +
          (extra.length ? ` extra=[${extra.join(", ")}]` : ""),
      );
    }
    const baseVariants = en.promptVariants?.length ?? 0;
    const localeVariants = translations[code].promptVariants?.length ?? 0;
    if (baseVariants !== localeVariants) {
      // eslint-disable-next-line no-console
      console.warn(
        `[locales] promptVariants count mismatch in "${code}": expected ${baseVariants}, got ${localeVariants}`,
      );
    }
  }
}
