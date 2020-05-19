import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //.use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
		lng: 'en',
    fallbackLng: ['en', 'de'],
		whitelist: ['en', 'de'],
    debug: true,
		resources: {
			en: {
				translation: {
					"welcome": "Welcome to hello world",
					"description": {
						"part2": "Child AppThis is really unbelievable that it loads"
					}
				}
			},
			de: {
				translation: {
					"welcome": "Herzlig wilkommen nach Halo Welt",
					"description": {
						"part2": "Child AppEs ist ziemlig unglaublige Das dieses hat geloaden"
					}
				}
			}
		},

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
