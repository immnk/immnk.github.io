const path = require('path');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const packageRoot = process.cwd();
const packageJson = require(path.resolve(__dirname, 'package.json'));
const revision = require('child_process')
  .execSync('git log -n 1 --pretty=format:"%H"')
  .toString()
  .trim();

const banner = `
    Package: ${packageJson.name} v${packageJson.version}
    File name: [filebase]
    Generated on: ${new Date(Date.now()).toLocaleString()} 
    Commit hash: ${revision}`;

module.exports = (env = {}, argv = {}) => {
  const isProd = argv.mode === 'production';
  const { NODE_ENV } = process.env;

  return {
    mode: isProd ? 'production' : 'development',
    entry: path.resolve(packageRoot, 'src/index.js'),
    output: {
      path: path.resolve(packageRoot, 'build'),
      filename: '[name].js',
      chunkFilename: '[name]-[hash:8].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [packageRoot, 'node_modules'],
      alias: {
        store: path.resolve(packageRoot, 'src/store'),
        components: path.resolve(packageRoot, 'src/components'),
        pages: path.resolve(packageRoot, 'src/pages'),
        utils: path.resolve(packageRoot, 'src/utils'),
        'react-don': 'hot-loader/react-dom'
      }
    },
    module: {
      rules: [
        {
          test: /\.(jsx?)$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward',
                cacheDirectory: true
              }
            },
            isProd
              ? false
              : {
                  loader: 'eslint-loader',
                  options: {
                    emitWarning: true
                  }
                }
          ].filter(Boolean)
        },
        {
          test: /\.css$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]-[hash:8]'
                }
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          exclude: /src/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]-[hash:8]'
                }
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /(\.gif|\.jpe?g|\.png|\.svg)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash:8]-[ext]',
                outputPath: './static/images'
              }
            }
          ]
        }
      ]
    },
    target: 'web',
    optimization: {
      minimize: true,
      minimizer: [`...`, new CssMinimizerPlugin()]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new ProgressBarPlugin({ clear: false }),
      new HtmlWebpackPlugin({
        cache: true,
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
        filename: './index.html',
        now: new Date().toISOString(),
        title: `${packageJson.description}`,
        package: `${packageJson.name} v${packageJson.version}`
      }),
      new webpack.BannerPlugin(banner),
      new webpack.ids.HashedModuleIdsPlugin({
        context: __dirname,
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 8
      })
    ],
    devtool: isProd ? false : 'cheap-module-source-map',
    performance: {
      hints: false
    },
    stats: 'minimal'
  };
};
