var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: ["./src/js/main.js"]
	},
	output: {
		path: path.resolve(__dirname, "dist/assets/js"),
		publicPath: "/",
		filename: "app.js"
	},
	module: {
	    loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	},
    devServer: {
        contentBase: "./dist",
    }
};