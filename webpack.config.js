const webpack = require('webpack');
const path = require('path')
const { MiniCssExtractPlugin} = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
import './src/style.css'



module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
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
  mode: 'development',
  devtool: 'inline-source-map',
    devServer: {
        
        historyApiFallback: {
          index: './index.html'
        },
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8082,
    },


  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],



}