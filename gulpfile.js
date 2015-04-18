'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

var path = {
    lib: './lib/**/*.js',
    tests: './tests/**/*.js'
};

gulp.task('test', [], function () {
    return gulp.src(path.tests)
        .pipe(mocha({
            ui: 'bdd',
            reporter: 'spec'
        }));
});

gulp.task('watch', [], function () {
    gulp.watch([path.lib, path.tests], ['test']);
});
