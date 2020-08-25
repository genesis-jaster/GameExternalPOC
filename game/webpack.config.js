
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.join(__dirname, '../dist');

module.exports = () => {
    const config = {
        mode: 'development',
        entry: {
            polyfill : ['core-js/stable'],
            app: './app.ts',
        },
        externals: {
            core    : 'core',
            genplus : 'genplus'
        },
        output : {
            path : dist,
            filename: '[name].[hash].js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new HtmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html',
            }),
        ]
    };


    // for more information, see https://webpack.js.org/configuration/dev-server
    config.devServer = {
        contentBase: 'dist',
        host: '0.0.0.0',
        port: 8888,
        open: true,
        hot: true,
        compress: true,
        stats: 'errors-only',
        overlay: true,
        useLocalIp: true
    };

    return config;
}