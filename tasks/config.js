module.exports = {
	config:     {
		spa: false
	},
	production: require('./configs/production'),
	path:       require('./configs/variables'),
	webserver:  {
		tunnel:    true,
		host:      'localhost',
		port:      9000,
		proxy:     'xander9112.github.io',
		logPrefix: "Frontend"
	}
};

