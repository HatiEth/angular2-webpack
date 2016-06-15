'use strict';
const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	output: {
		filename: '[name].js'
	},

	resolve: {
		extensions: ['', '.js', '.ts']
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['ts']
			},
			{
				test: /\.sass$/,
				loaders: ['raw', 'sass']
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.html$/,
				loaders: ['html']
			},
			{
				test: /\.pug$/,
				loaders: ['html', 'pug-html-loader']
			}
		]
	},
	
	sassLoader: {
		includePaths: [path.resolve(__dirname, './some-folder')]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.pug'
		})
	]
};

