const path = require('path');
const webpack = require('webpack');

const ngtools = require('@ngtools/webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = __dirname + '/app/ui'

const plugins = [
  new ngtools.AotPlugin({ tsConfigPath: __dirname + '/tsconfig.json', entryModule: root + '/app/app.module#AppModule' }),
  new CopyWebpackPlugin([{ from: `${root}/index.html`, to: 'index.html' }]),
  new CopyWebpackPlugin([{ from: `${root}/styles.css`, to: 'styles.css' }]),
  new CopyWebpackPlugin([{ from: `${root}/favicon.ico`, to: 'favicon.ico' }])
]

module.exports = {
  entry: {
    polyfills: root + '/polyfills.ts',
    main: root + '/main.ts'
  },
  output: {
    path: __dirname + '/build/dist',
    publicPath: '/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  devServer: {
    contentBase: path.join(__dirname, '/build/dist'),
    compress: true,
    port: 9000,
    compress: true,
    open: true
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.ts', '.js', '.css', '.html']
  }
};