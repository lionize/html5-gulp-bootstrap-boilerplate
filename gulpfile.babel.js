import gulp from 'gulp'

import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

const dirs = {}

gulp.task('default', ['html', 'sass'])

gulp.task('html', () => {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
})
