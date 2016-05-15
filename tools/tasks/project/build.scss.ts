import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import {join} from 'path';
import {APP_SRC, APP_DEST, CSS_PROD_BUNDLE, CSS_DEST, BROWSER_LIST, ENV, SASS_OPTIONS} from '../../config';
const plugins = <any>gulpLoadPlugins();

const processors = [
  autoprefixer({
    browsers: BROWSER_LIST
  })
];

const isProd = ENV === 'prod';

if (isProd) {
  processors.push(
    cssnano({
      discardComments: {removeAll: true}
    })
  );
}

export = () => merge(processComponentScss(), processExternalScss());

function processComponentScss() {
  return gulp.src([
      join(APP_SRC, 'app', '**', '*.scss'),
      '!' + join(APP_SRC, 'scss', '**', '*.scss')
    ])
    .pipe(plugins.sass(SASS_OPTIONS))
    .pipe(isProd ? plugins.cached('process-component-css') : plugins.util.noop())
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest(APP_DEST + '/app'));
    //.pipe(gulp.dest(isProd ? TMP_DIR : APP_DEST + '/app'));
}

function processExternalScss() {
  return gulp.src([
      join(APP_SRC, 'scss', '**', '*.scss')
    ])
    .pipe(plugins.sass(SASS_OPTIONS))
    .pipe(isProd ? plugins.cached('process-external-css') : plugins.util.noop())
    .pipe(plugins.postcss(processors))
    .pipe(isProd ? plugins.concat(CSS_PROD_BUNDLE) : plugins.util.noop())
    .pipe(gulp.dest(CSS_DEST));
}
