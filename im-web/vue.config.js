const path = require('path')
const fs = require('fs')

module.exports = {
	publicPath:'./',
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8888',
				changeOrigin: true,
				ws: false,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}

}