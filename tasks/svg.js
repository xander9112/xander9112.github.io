var gulp = require('gulp');
var plumber = require('gulp-plumber');

var browserSync = require("browser-sync"),
	reload = browserSync.reload;

var config = require('./config'),
	production = config.production,
	path = config.path;

gulp.task('svg', function () {
	return gulp.src(path.src.svg)
		.pipe(plumber())
		.pipe(gulp.dest(path.build.svg))
		.pipe(reload({ stream: true }));
});
