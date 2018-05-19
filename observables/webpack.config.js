const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './build/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        library: "app",
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
