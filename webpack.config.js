
const webpack = require("webpack");
module.exports = {
    entry:__dirname+ "/app/entry.js",
    output:{
        path: __dirname + "/build",
        filename:"bundle.js"
    },
    devServer:{
      contentBase: "./build",
        port:8888
    },
    devtool: "#inline-source-map",
    module:{
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ["eslint"],
                include: [
                    /app/
                ]
            }
        ],

        loaders:[
            {
                test: /\.css$/,
                loader:"style!css"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel", // "babel-loader" is also a valid name to reference
                query: {
                    babelrc: false,
                    cacheDirectory: true,
                    presets: ["es2015"]
                }
            },
            {
                test: /\.(html|eot|woff|woff2|ttf|svg|png)$/,
                loader:"file-loader?name=[name].[ext]",
                query:{

                }
            }
        ]

    }
};