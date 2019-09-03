module.exports = {
  assetsDir: 'assets',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  }
}
