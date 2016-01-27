import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import ejs from 'gulp-ejs';
import webserver from 'gulp-webserver';
import prettify from 'gulp-jsbeautifier';

//jsonをテンプレートフォルダに
gulp.task('json', () => {
  gulp.src('./data/**/*.json')
    .pipe(prettify({json: {indent_size: 1, indent_char: '\t'}}))
    .pipe(gulp.dest('./template/data'))
});

gulp.task('webserver', () => {
  gulp.src('template')
  .pipe(webserver({
    fallback: 'index.html',
    livereload: true,
    open: true
  }));
});

gulp.task('js', () => {
  browserify({
    entries: ['js/common.js']
  })
  .transform(babelify, {presets: ["es2015"]})
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(gulp.dest('template/js'))
});

gulp.task('watch', () => {
  gulp.watch('./ejs/**/*.ejs', ['ejs']);
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('ejs', () => {
  gulp.src(["ejs/*.ejs",'!' + "ejs/**/_*.ejs"])
  .pipe(ejs())
  .pipe(gulp.dest("./template"))
})

gulp.task('default', ['js', 'ejs', 'webserver', 'watch','json']);
