const mix = require('laravel-mix')

require('vuetifyjs-mix-extension')

mix.js('src/app.js', 'dist').vuetify().vue()