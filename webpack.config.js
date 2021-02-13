const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './client/components/Map.jsx',
    output: {
        path: path.join(__dirname, './client/public'),
        filename: 'map_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options:{
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
           },
           {
               test: /\.css?$/,
               use:['style-loader', 'css-loader']
           }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]
}