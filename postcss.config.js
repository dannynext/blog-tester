module.exports = context => ({
  plugins: {
    'postcss-import': {
      path: context.cwd,
      skipDuplicates: true,
    },
    'postcss-color-mod-function': {},
    'postcss-preset-env': {
      stage: 1,
      browsers: ['last 2 major versions', 'not dead'],
    },
  },
})
