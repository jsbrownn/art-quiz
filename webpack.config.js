const path = require('path');
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: "/",
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules : [
      
      {test: /\.(?:mp3|wav)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
        type: 'asset/resource',
    },
    ],
  },

  mode: 'development',
  devServer: {
    port: 3001,
    hot: false,
    static: path.resolve(__dirname, './src'),
    historyApiFallback: true
  
  },
  
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
  })
    
  ]
};