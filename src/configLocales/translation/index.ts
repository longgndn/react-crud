import EnLang from "./entries/en-US";
import VnLang from "./entries/vi-VN";

const AppLocale: Record<string, typeof EnLang | typeof VnLang> = {
  en: EnLang,
  vi: VnLang,
};

export default AppLocale;
