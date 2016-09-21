module.exports = {
	entry: './app/app.js',

	devtool: 'source-map',

	output: {
		path: './public',
		filename: 'bundle.js',
		publicPath: '/'
	},

	devServer: {
		inline: true,
		contentBase: './public'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};