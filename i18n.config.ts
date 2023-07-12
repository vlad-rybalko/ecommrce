import { ru } from 'shared/i18n';

const messages = { ru };

export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    messages,
}));
