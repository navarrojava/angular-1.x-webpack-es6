
const webpack = require('webpack');
module.exports = {
    entry:__dirname+ '/app/entry.js',
    output:{
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    devServer:{
      contentBase: './build'
    },
    devtool: "#inline-source-map",
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader:'style!css'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.html$/,
                loader:'file-loader?name=[name].[ext]',
                query:{

                }
            }
        ]

    }
};