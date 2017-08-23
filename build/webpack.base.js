var path = require('path');

const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

//const ManifestPlugin = require('webpack-manifest-plugin');

var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

console.log(process.env.NODE_ENV);

console.log("============================start===============================");

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

var cssLoader = {
    loader: 'css-loader',
    options: {
        minimize: false,
        sourceMap: true
    }
}

function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
        loaders.push({
            loader: loader + '-loader',
            options: Object.assign({}, loaderOptions, {
                sourceMap: true
            })
        })
    }
    return ['vue-style-loader'].concat(loaders)
}

module.exports = {
    entry: {
        app: './client/index.js',
        vendor: [
            'vue',
            'vue-router',
            'vuex',
            'vue-resource'
        ]
    },
    output: {
        filename: 'static/pcadmin/[name]-[chunkHash:5].js',
        path: resolve('dist'),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },

    devServer: {
        contentBase: resolve('dist'),
        openPage: 'view/index.html',
        port: 9001,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: generateLoaders(),
                        less: generateLoaders('less')
                    },
                    transformToRequire: {
                        video: 'src',
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },

    plugins: [

        //new ManifestPlugin(),

        new CleanWebpackPlugin(['dist'],{
            root: path.join(__dirname, '../')
        }),

        new HtmlWebpackPlugin({
            filename: './view/index.html',
            template: './view/index.html',
            title: '系统',
            inject: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
          chunks: ['vendor']
        }),

        new FriendlyErrorsPlugin()
    ]
};


