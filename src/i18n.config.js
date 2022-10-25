import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './assets/translation/en';
import id from './assets/translation/id';

const resources = {
  id,
  en,
};

i18n.use(initReactI18next).init({
  fallbackLng: 'id',
  compatibilityJSON: 'v3',
  resources,
});
