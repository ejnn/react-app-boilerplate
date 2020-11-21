var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname,  'dist')
    },

    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		include: path.resolve(__dirname, 'src'),
		use: {
		    loader: 'babel-loader',
		    options: {
			presets: ['@babel/env']
		    }
		}
	    },
	    {
		test: /.*\~/,
		exclude: /node_modules/,
		include: path.resolve(__dirname, 'src'),
		use: {
		    loader: 'ignore-loader'
		}
	    },
	    {
		test: /.(png|svg|jpg|jpeg|gif)$/,
		type: 'asset/resource'
	    }
	]
    }
}
