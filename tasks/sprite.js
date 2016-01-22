var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

var config = require('./config'),
	production = config.production,
	path = config.path;

var browserSync = require("browser-sync"),
	reload = browserSync.reload;

gulp.task('sprite', function () {
	var spriteData =
		gulp.src(path.src.sprite) // путь, откуда берем картинки для спрайта
			.pipe(spritesmith({
				cssFormat:   'css',
				cssName:     'sprite.less',
				cssSelector: function (item) {
					return '.g-icon-' + item.name;
				},
				algorithm:   'binary-tree',
				imgName:     'sprite.png',
				imgPath:     '../images/sprite/sprite.png'
			}));

	spriteData.img.pipe(gulp.dest(path.build.sprite)); // путь, куда сохраняем картинку
	spriteData.css.pipe(gulp.dest('site/src/styles/')); // путь, куда сохраняем стили
});
