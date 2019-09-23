var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/public/index.html`,
    filename: 'index.html',
    inject: 'body',
    hash: true,
    favicon: `${__dirname}/public/favicon.ico`,
    title: 'Cashier App'
});

module.exports = {
    //JavaScript執行的入口
    entry: {
        main: './src/index.js',
    },
    output: {
        //將輸出的檔案放到這個資料夾下
        path: path.join(__dirname, 'build'),
        //將所有依賴的模組都合併輸出到這個檔案
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',  // 這個會後執行
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=1024&name=[sha512:hash:base64:7].[ext]'
            }
        ]
    },
    // webpack-dev-server 設定
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        HTMLWebpackPluginConfig
    ]
};