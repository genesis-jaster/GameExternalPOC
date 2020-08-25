
const path = require('path');
const webpack = require('webpack');

const dist = path.join(__dirname, '../dist');

module.exports = () => {
    const config = {
        mode: 'development',
        entry: {
            genplus: './genplus.ts',
        },
        externals: {
            core  : 'core',
        },
        output : {
            path: dist,
            filename: '[name].js',
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
        plugins: []
    };

    return config;
}