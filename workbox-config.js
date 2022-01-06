module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,less,yml,json,scss,svg,eot,ttf,woff,woff2,png,jpg,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};