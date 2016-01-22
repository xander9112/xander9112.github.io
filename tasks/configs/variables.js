module.exports = {
	//Тут мы укажем куда складывать готовые после сборки файлы
	build: {
		vendor:       'site/assets/js/',
		js:           'site/assets/js/',
		styles:       'site/assets/css/',
		stylesBlocks: 'site/src/styles/',
		images:       'site/assets/images/',
		sprite:       'site/assets/images/sprite/',
		fonts:        'site/assets/fonts/',
		svg:          'site/assets/svg-icons/'
	},
	//Пути откуда брать исходники
	src:   {
		vendor:       [
			'site/src/vendor/jquery-2.1.4.min.js',
			'site/src/vendor/lodash.min.js',
			'site/src/vendor/jquery.nicescroll.js',
			'site/src/vendor/angular/angular.js',
			'site/src/vendor/angular/*.js',
			//'site/src/vendor/**/*'
		],
		js:           [
			'site/src/js/controllers/*',
			'site/src/js/directives/*.js',
			'site/src/js/modules/*.js',
			'site/src/js/services/*.js',
			'site/src/js/Config.js',
			'site/src/js/Router.js',
			'site/src/js/Application.js'
		],
		styles:       'site/src/styles/site.less',
		stylesBlocks: [
			'site/src/styles/blocks.less',
			'site/src/styles/blocks/*.less'
		],
		images:       'site/src/images/**/*',
		sprite:       'site/src/images/sprite/*',
		fonts:        'site/src/fonts/**/*',
		svg:          'site/src/svg-icons/**/*'
	},
	//Тут мы укажем, за изменением каких файлов мы хотим наблюдать
	watch: {
		vendor:       [
			'site/src/vendor/**/*'
		],
		js:           [
			'site/src/js/**/*'
		],
		styles:       'site/src/styles/*',
		stylesBlocks: [
			'site/src/styles/blocks/*.less'
		],
		blocks:       'site/src/styles/blocks/*',
		images:       'site/src/images/**/*',
		sprite:       'site/src/images/sprite/*',
		fonts:        'site/src/fonts/**/*'
	},
	clean: 'site/assets/'
};
