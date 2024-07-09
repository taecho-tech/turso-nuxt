// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        turso: {
            // The private keys which are only available within server-side
            NUXT_TURSO_DATABASE_URL: process.env.NUXT_TURSO_DATABASE_URL,
            NUXT_TURSO_AUTH_TOKEN: process.env.NUXT_TURSO_AUTH_TOKEN,
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
