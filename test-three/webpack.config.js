var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssProd = ExtractTextPlugin.extract({
    fallback:"style-loader",
    loader:["css-loader","sass-loader"],
    publicPath:"/dist"
});
var loadCss = cssProd;
// below plugin extract css into a separate file
const extractLess = new ExtractTextPlugin({
    filename:"[name].css"
});

module.exports = {
    entry: {
          app:'./src/components/index.js'
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'[name].js',
        publicPath:''
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test:/\.(jpg)$/,
                use:'file-loader?name=[name].[ext]'
            },
            {
                test:/\.scss$/,
                use:loadCss
            }
        ]
    },
    plugins:[
        extractLess,
        // below plugin reduces file size
        new webpack.optimize.UglifyJsPlugin({
      			compress:{ warnings: false },
      			mangle: true,
      			sourcemap : false,
      			beautify: false,
      			dead_code : true
      		}),
        // setting below env variable to let webpack create production build to reduce script size
        new webpack.DefinePlugin({
         'process.env': {
           NODE_ENV: JSON.stringify('production')
         }
        })
    ]
}
