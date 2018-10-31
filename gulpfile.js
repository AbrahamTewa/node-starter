/* eslint-disable import/no-extraneous-dependencies */
// ============================================================
// Import packages
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

const sourcemaps = require('gulp-sourcemaps');

// ============================================================
// Module's constants and variables
const DIST_FOLDER_PATH = './dist';
const DOC_FOLDER_PATH = './doc';
const UNIT_TEST_FOLDER_PATH = './reports/tests/unit';

// ============================================================
// Simple tasks

// ==============================
// Clean
gulp.task('clean:build', () => del([
    DIST_FOLDER_PATH,
]));

gulp.task('clean:doc', () => del([
    DOC_FOLDER_PATH,
]));

gulp.task('clean:tests:unit', () => del([
    UNIT_TEST_FOLDER_PATH,
]));

// ==============================
// Convert

gulp.task('convert:javascript', () => gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist')));

// ============================================================
// Composed tasks
gulp.task(
    'build',
    gulp.series(
        'clean:build',
        'convert:javascript',
    ),
);
