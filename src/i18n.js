import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(LanguageDetector) // Language detection based on browser preference
  .use(initReactI18next) // For React
  .use(HttpBackend) // Load translations from API dynamically
  .init({
    fallbackLng: "en", // Default language if the requested language is not available
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // React already escapes variables
    },
    backend: {
      loadPath:
        "https://api.mymemory.translated.net/get?q={{text}}&langpair=en|{{lng}}", // Use MyMemory API for translation
    },
  });

export default i18n;
