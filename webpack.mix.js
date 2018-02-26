const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.webpackConfig({
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      $: 'jquery/src/jquery'
    }
  }
})

mix
  .js('src/js/index.js', 'dist/index.js')
  .sass('src/styles/app.scss', 'dist/app.css')
  .sourceMaps()

mix.copy('src/fonts', 'dist/fonts')
mix.copy('src/images', 'dist/images')