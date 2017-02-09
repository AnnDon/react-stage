var path = require('path');
var webpack = require("webpack");
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        './main': path.resolve(__dirname,'src/index.js'),
        vendor: 'moment'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:"dist",
        filename: '[name].js'
    },
    module: {
		rules: [{
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			//'react': pathToReact,
			//'react-dom': pathToReactDOM
		}
	},
	plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest'] // Specify the common bundle's name.
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};