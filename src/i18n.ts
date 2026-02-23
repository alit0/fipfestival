import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Indexed language resources
import { en } from './locales/en';
import { es } from './locales/es';
import { it } from './locales/it';
import { fr } from './locales/fr';
import { pt } from './locales/pt';

const resources = {
  en,
  es,
  it,
  fr,
  pt
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Establecer español como predeterminado
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
