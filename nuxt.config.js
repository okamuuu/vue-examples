module.exports = { 
  mode: 'spa',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/vue-examples/' : '/'
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: [
    { src: '~/plugins/highlight.js', ssr: false}, 
    { src: "~/plugins/fontawesome", ssr: false },
  ],

  modules: [
    //    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-center',
    duration: 5000
  },

  build: {
    publicPath: '/assets/',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
