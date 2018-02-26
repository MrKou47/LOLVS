const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = path.resolve('');

const config = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8388/',
    path.join(__dirname, '../src/client/index.ts')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'interface': path.join(basePath, 'src/client/interface')
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /tsx?/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]-[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8388,
    // hot: true,
    historyApiFallback: true,
  },
  cache: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(basePath, 'webpack/tmpl.html')
    })
  ],
  devtool: 'source-map'
};

module.exports = config;