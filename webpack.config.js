const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	mode: 'development',
	output: {
		filename: 'app.bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		port: 3005,
	},
}
