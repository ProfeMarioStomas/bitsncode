const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './src/app/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
      standard: [
        'html',
        'body',
        /^is-/,
        /^has-/,
        /^navbar/,
        /^hero/,
        /^container/,
        /^columns/,
        /^column/,
        'section'
      ],
      deep: [/^is-/, /^has-/],
    },
  },
];

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    ...(process.env.NODE_ENV === 'production' ? { '@fullhuman/postcss-purgecss': purgecss[1] } : {}),
  },
};
