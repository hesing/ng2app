import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import {join} from 'path';
import {APP_SRC, ENV} from '../../config';
const plugins = <any>gulpLoadPlugins();
var sasslint = require('gulp-sass-lint');

const isProd = ENV === 'prod';

function lintComponentCss() {
  return gulp.src([
    join(APP_SRC, 'app', '**', '*.scss'),
    '!' + join(APP_SRC, 'scss', '**', '*.scss')
    ])
    .pipe(isProd ? plugins.cached('sass-lint') : plugins.util.noop())
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
}

function lintExternalCss() {
  //return gulp.src(getExternalCss().map(r => r.src))
  return gulp.src(getExternalCss())
    .pipe(isProd ? plugins.cached('sass-lint') : plugins.util.noop())
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
}

function getExternalCss() {
  return [
    join(APP_SRC, 'scss', '*.scss'),
    '!' + join(APP_SRC, 'scss', 'vendor', '**', '*.scss')
    ];
  // return APP_ASSETS.filter(d => /\.scss$/.test(d.src) && !d.vendor);
}

export = () => merge(lintComponentCss(), lintExternalCss());
