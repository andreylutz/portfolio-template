import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ru from "./locales/ru";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLanguage = savedLanguage === "en" || savedLanguage === "ru" ? savedLanguage : "ru";

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en }
  },
  lng: initialLanguage,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false
  }
});

i18n.on("languageChanged", (language) => {
  if (language === "ru" || language === "en") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
});

export default i18n;
