const path = require('path')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
import './src/style.css'


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },
    rules: [
      
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
    new MiniCssExtractPlugin()
    ],

}