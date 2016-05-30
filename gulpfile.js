const postcss = require('gulp-postcss');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const easyImport = require('postcss-easy-import');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const rev = require('gulp-rev');
const del = require('del');

const production = process.env.NODE_ENV === 'production';

const dependencies = [
  // 'alt',
  'classnames',
  'react',
  'react-dom',
  'react-router',
  'underscore',
];

const staticAssets = [
  'index.html',
];

function buildDirs(base) {
  return {
    assets: `build/${base}`,
    js: `build/${base}/js`,
    css: `build/${base}/css`,
  };
}

const tmpDirs = buildDirs('tmp');
const finalDirs = buildDirs('app');

gulp.task('browserify-vendor', () =>
  browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('1-vendor.bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(gulp.dest(tmpDirs.js)));

gulp.task('browserify', ['browserify-vendor'], () =>
  browserify({ entries: './app/app.jsx', debug: true })
    .external(dependencies)
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('2-bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(tmpDirs.js)));

gulp.task('styles', () => {
  const processors = [
    easyImport(),
    cssnext(),
    rucksack(),
  ];
  return gulp.src('./app/app.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest(tmpDirs.css));
});

gulp.task('static', () =>
  gulp.src(staticAssets)
    .pipe(gulp.dest(finalDirs.assets)));

gulp.task('build-static', ['styles', 'browserify', 'static']);

gulp.task('rev', ['build-static'], () =>
  gulp.src(`${tmpDirs.assets}/**/*.*`)
    .pipe(rev())
    .pipe(gulp.dest(finalDirs.assets))
    .pipe(rev.manifest())
    .pipe(gulp.dest(finalDirs.assets)));

gulp.task('cleanup', () => del('build'));

gulp.task('watch', () => {
  gulp.watch('./app/**/*.*', ['build']);
});

gulp.task('build', ['rev']);
