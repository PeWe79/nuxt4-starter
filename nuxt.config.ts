// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      // script: [],
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxt/content'],

  css: ['~/assets/css/main.css'],

  icon: {
    serverBundle: 'local',
    clientBundle: {
      scan: true,
      // include all custom collections in the client bundle
      includeCustomCollections: true,
      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'color-mode',
  },

  compatibilityDate: '2025-07-16',
})
