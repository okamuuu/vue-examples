module.exports = { 
  mode: 'spa',
  css: [
    //    '../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css',
  ],

  plugins: [
    { src: '~/plugins/highlight.js', ssr: false}, 
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
