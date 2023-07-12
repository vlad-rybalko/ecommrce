import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Магазин семян',
            titleTemplate: '%s - Семена',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }],
        },
    },
    css: ['src/app/styles/index.scss'],
    modules: ['@nuxtjs/device', '@nuxtjs/i18n', '@pinia/nuxt'],
    vite: {
        plugins: [svgLoader()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "/assets/scss/variables.scss";',
                },
            },
        },
    },
    i18n: {
        vueI18n: './i18n.config.ts',
    },
    alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        src: fileURLToPath(new URL('./src', import.meta.url)),
        shared: fileURLToPath(new URL('./src/shared', import.meta.url)),
        entities: fileURLToPath(new URL('./src/entities', import.meta.url)),
        widgets: fileURLToPath(new URL('./src/widgets', import.meta.url)),
        features: fileURLToPath(new URL('./src/features', import.meta.url)),
        pages: fileURLToPath(new URL('./pages', import.meta.url)),
        assets: fileURLToPath(new URL('./assets', import.meta.url)),
    },
});
