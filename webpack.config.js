const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.js',
  filename: 'index.html',
  inject: 'body'
});

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [APP_DIR, ASSETS_DIR]
              }
            }
          ]
        })
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader?name=[path][name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
