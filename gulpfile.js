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

const production = process.env.NODE_ENV === 'production';

const dependencies = [
  // 'alt',
  'classnames',
  'react',
  'react-dom',
  'react-router',
  'underscore',
];

gulp.task('browserify-vendor', () =>
  browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(gulp.dest('./public/js')));

gulp.task('browserify', ['browserify-vendor'], () =>
  browserify({ entries: './main.jsx', debug: true })
    .external(dependencies)
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js')));

gulp.task('styles', () => {
  const processors = [
    easyImport(),
    cssnext(),
    rucksack(),
  ];
  return gulp.src('./main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('build', ['styles', 'browserify']);
