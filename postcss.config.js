const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './site/**/*.html',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      browserlist: "last 2 versions"
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
};
