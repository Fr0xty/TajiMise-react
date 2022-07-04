import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
    resources: {
        en: {},
        ja: {},
        'zh-cn': {},
        'zh-tw': {},
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});
