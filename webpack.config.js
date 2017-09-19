var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}