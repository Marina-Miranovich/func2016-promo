var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var svgSprite = require('gulp-svg-sprite');

gulp.task('default', function() {
	return gulp.src('./less/main.less')
        .pipe(watch('/less/**/*.less'))
        .pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
        .pipe(gulp.dest('./css'));
});

gulp.task ('svg', function () {
  gulp.src('./img/icons/**/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: 'svg/sprite.svg'
        }
      }
    })).pipe(gulp.dest('./img/sprites'));
});
 
gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});