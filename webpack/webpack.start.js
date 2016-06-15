'use strict';
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
	devtool: 'cheap-module-eval-source-map',

	output: {
		path: './dist/',
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});
