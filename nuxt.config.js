require('dotenv').config();
import webpack from 'webpack'
const _ = require('lodash');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'INFIA',
    titleTemplate: '%s | INFIA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [    
    '~/assets/css/main.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel.js', mode: 'client' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    },
    clubPlugins: {
      scrollSmoother: true
    },
    registerEffect: [],
    registerEase: []
  },

//   layoutTransition: {
//     name: "page",
//     mode: "out-in"
// },
// pageTransition: {
//   name: 'halaman',
//   mode: 'out-in',
//   beforeEnter (el) {
//     console.log('Before enter...',el);
//   },
//   enter(el) {
//     console.log('enter', el)
//   }
// },
  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   css: false,

  //   beforeEnter(el) {
  //     this.$gsap.set(el, {
  //       opacity: 0,
  //       x:-1000,
  //     })
  //   },

  //   enter(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 1,
  //       x:0,
  //       duration: 0.5,
  //       ease: 'elastic',
  //       onComplete: done
  //     })
  //   },

  //   leave(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 0,
  //       x:0,
  //       duration: 0.5,
  //       ease: 'power2.inOut',
  //       onComplete: done
  //     })
  //   }
  // },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    'nuxt-gsap-module',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  image: {
    // Options
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        // $: 'jquery',
        _: 'lodash'
      })
    ],

    // postcss: {
    //   plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    //   },
    // },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },

  }
}
