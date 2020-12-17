
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 generate: {
  routes: [
    '/contact'
  ]
},
  head: {
    title: 'Ana-Maria Iancu | Web Deveoper',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web developer able to build a Web presence from the ground up -- from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web Development.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon2.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/base/main.scss',
    '@/assets/scss/base/_variables.scss',
    '@/assets/scss/base/_mixins.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  {src: '~/plugins/Vuelidate'},
  { src: '~plugins/ga.js', mode: 'client' }
],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
