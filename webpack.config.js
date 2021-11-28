const webpack = require('webpack');
const path = require('path')
const { MiniCssExtractPlugin} = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HtmlWebpackPlugin } = require ('html-webpack-plugin')
import './src/style.css'



module.exports = {
  
  entry: {
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },

    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },

  ],


  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), 
      filename: 'index.html', 
  })

  ],

  devServer: {
    historyApiFallback: {
      index: './index.html'
    },
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    
}



}