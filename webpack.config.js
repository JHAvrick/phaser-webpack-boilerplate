var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
	devtool: "cheap-module-source-map",
	entry: path.resolve(APP_DIR, 'app.js'),
	output: {
			devtoolLineToLine: true,
			pathinfo: true,
			path: BUILD_DIR,
			sourceMapFilename: "bundle.js.map",
			filename: 'bundle.js'
	},
	module : {
		loaders : [{
			test : /\.js?/,
			include : APP_DIR,
			loader : 'babel-loader'
		}]
	},
	resolve: {
		alias: {
			objects: path.resolve(__dirname, 'app/objects'),
			state: path.resolve(__dirname, 'app/state')
		}
	}
};

module.exports = config;