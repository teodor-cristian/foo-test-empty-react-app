const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve( __dirname, './src/index.js' ),
    output: {
        filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      static: path.join(__dirname, './src'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader ,'css-loader']
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              'file-loader?limit=10000&name=images/[name].[ext]',
               'image-webpack-loader'
            ]
          },
        ],
      },
    plugins: [ new MiniCssExtractPlugin() ]
}