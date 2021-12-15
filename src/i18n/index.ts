import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '@/i18n/resources';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    lng: 'en',
    debug: true,
    resources: resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
