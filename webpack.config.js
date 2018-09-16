const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    target: 'node',
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};

