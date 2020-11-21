const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    entry: ['react-hot-loader/patch', './src/index.js'],

    resolve: {
	alias: {
	    'react-dom': '@hot-loader/react-dom'
	}
    },

    devtool: 'inline-source-map',
    devServer: {
	contentBase: path.resolve(__dirname, 'dist'),
	port: 9000,
	hot: true,
	open: true
    },
});
