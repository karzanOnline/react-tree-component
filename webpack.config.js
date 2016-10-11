/**
 * Created by caozheng on 2016/9/1.
 */
var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:9090/';

//let ROOT_PATH = path.resolve(__dirname);

var devConfig ={
    entry: './src/index.jsx',
    output :{
        publicPath: publicPath,
        path:"./dist/",
        filename:'[name].js',
        chunkFilename:'chunk/[chunkhash:8].chunk.js'
    },
    ProvidePlugin :{
        "React" : 'react',
        "ReactDOM":"react-dom"
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loader: "babel",
                exclude:/node_modules/
            },      /*es6 to es5*/
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};
module.exports = devConfig;
