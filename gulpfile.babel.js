import gulp from 'gulp'

import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import del from 'del'

const dirs = {}

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('default', ['html', 'sass'])

gulp.task('html', ['html:clean'], () => {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
})
gulp.task('html:clean', () => {
  del(['dist/index.html'])
})

gulp.task('sass', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
})
