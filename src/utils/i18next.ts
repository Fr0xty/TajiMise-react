import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLocaleResource from '../assets/locales/en.json';
import zh_cnLocaleResource from '../assets/locales/zh-cn.json';
import zh_twLocaleResource from '../assets/locales/zh-tw.json';
import jaLocaleResource from '../assets/locales/ja.json';

/**
 * get locale cookie from document.cookie
 */
const getLocaleCookie = (): string | null => {
    const cookieObject: Record<string, string> = {};

    document.cookie.split('; ').forEach((cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        cookieObject[cookieName] = cookieValue;
    });

    return cookieObject.locale;
};

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: enLocaleResource },
        zh_cn: { translation: zh_cnLocaleResource },
        zh_tw: { translation: zh_twLocaleResource },
        ja: { translation: jaLocaleResource },
    },
    lng: (getLocaleCookie() || window.navigator.language.toLowerCase()).replace('-', '_'),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});
