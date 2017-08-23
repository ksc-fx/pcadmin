var path = require('path');

const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const merge = require('webpack-merge');

const BaseConfig = require('./webpack.base.js');



module.exports = merge(BaseConfig, {

    devtool: '#cheap-module-eval-source-map', //http://www.cnblogs.com/hhhyaaon/p/5657469.html  cheap-module-source-map

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
});