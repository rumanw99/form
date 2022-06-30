import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locale/en.json';
import translationAR from './locale/ar.json';

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
.use(initReactI18next) 
.use(LanguageDetector)
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    },
    React:{
        useSuspense : false
    }
  });

  export default i18n;