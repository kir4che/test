import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationTW from './locales/tw.json';
import translationEN from './locales/en.json';

const savedLanguage = localStorage.getItem('language') || 'tw';

i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: ["tw", "en"],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    tw: { translation: translationTW },
    en: { translation: translationEN },
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;