const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  plugins: [
    extractSass
  ],
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [APP_DIR]
            }
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  }
};
