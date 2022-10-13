var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
	return gulp
		.src('./style/style.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(gulp.dest('./style/'));
});

gulp.task('js', function () {
	return gulp
		.src('./app.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	gulp.watch('style/style.scss', ['sass']);
	gulp.watch('app.js', ['js']);
});
