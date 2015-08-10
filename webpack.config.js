
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: [/* 'webpack/hot/dev-server',  */path.resolve(__dirname, 'app/main.js')],
  // resolve: {
  //   alias: {
  //     'react': pathToReact
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime', 'es7.asyncFunctions'],
          stage: 0
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      {
        test: /\.(woff2?|eot)$/,
        loader: 'url?limit=200000'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ],
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    // noParse: [pathToReact]
  },
  eslint: {
    formatter: require("eslint-friendly-formatter"),
  }
};

module.exports = config;
