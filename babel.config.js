module.exports = (api) => {
  api.cache(true);

  return {
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          targets: { firefox: '78', chrome: '78' },
          useBuiltIns: 'usage',
          corejs: '3.6.4'
        }
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV === 'development'
        }
      ]
    ],
    plugins: [
      'react-hot-loader/babel',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-react-jsx-source'
    ],
    env: {
      test: {
        plugins: ['dynamic-import-node']
      }
    }
  };
};
