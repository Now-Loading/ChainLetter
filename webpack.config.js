/* eslint-disable*/
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PORT = process.env.PORT || 3001;
// todo: clean line endings
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'), // absolute path
    filename: 'bundle.js' // file name
  },
  module: {
    rules: [

      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },

      // Third Rule
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: path.resolve( __dirname, 'public/index.html' ),
       filename: 'index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true,
    open: true
  },
};