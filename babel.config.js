module.exports = (api) => {
  api.cache(true);

  return {
    sourceType: 'unambiguous',
    presets: ['@babel/preset-env', '@babel/preset-react'],
    exclude: 'node_modules',
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
