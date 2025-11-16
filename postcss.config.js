module.exports = {
  plugins: [
    require('autoprefixer', {
      overrides: {
        content: ["./**.*/*.js"]
      }
    }),
    require('tailwindcss'),
    require('postcss-nest')
  ]
};