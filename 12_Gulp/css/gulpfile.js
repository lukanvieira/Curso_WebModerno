const { series } = require('gulp')
const gulp = require('gulp')
// Foi usado o comando 'npm install --save-dev sass' no terminal
const sass = require('gulp-sass')(require('sass'))  // Essa parte não está no curso
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarHTML)