'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app'],
    },

    devtool: 'source-map',

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },

    resolveLoader: {
        'alias': {
            'handlebars-hot-loader': path.join(__dirname, '../')
        }
    },

    module: {
        loaders: [
            {
                test: /\.hbs/,
                loader: 'handlebars-hot-loader!handlebars'
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
