export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Epicurean Fox',
    title: 'Epicurean Fox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { 
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title', 
        skip: true,
      },
      {
        hid: `description`,
        name: 'description',
        content: 'Recipes from Klaus\' kitchen outside Jamestown, CO'
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'Recipes from Klaus\' kitchen outside Jamestown, CO'
      },
      {
        hid: `og:site_name`,
        property: 'og:site_name',
        content: 'Epicurean Fox'
      },
      {
        hid: 'mobile-web-app-capable',
        property: 'mobile-web-app-capable',
        skip: true
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Lato&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  styleResources: {
      scss: [
          '~/assets/scss/variables.scss',
      ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    //'@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/pages').map(file => {
        return {
          route: `/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/pages/${file}`),
        };
      });
    },
  }

}
