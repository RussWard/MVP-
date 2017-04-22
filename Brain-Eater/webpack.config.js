var HTMLWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/client/index.html',
//   filename: 'index.html',
//   inject: 'body'
// }); 

module.exports = {
    entry: __dirname + '/client/src/index.js',
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    output: {
      filename: 'transformed.js',
      path: __dirname + '/build'
    },
    // plugins: [HTMLWebpackPluginConfig]

};