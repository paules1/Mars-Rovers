const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: {
      main: './source/components/vue/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  module:{
      rules: [
          {
              test:/\.scss$/,
              use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
              test:/\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
              test:/\.vue$/,
              loader: 'vue-loader'
          },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
      ]
  },
  plugins:[
      new VueLoaderPlugin()
  ]
};