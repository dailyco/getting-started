const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 5000,
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            // use: ['style-loader', 'css-loader'],
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
    ],
};