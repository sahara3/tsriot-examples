const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['./build/app.ts', './build/currency.ts'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    externals: {
        riot: 'riot',
    },
};
