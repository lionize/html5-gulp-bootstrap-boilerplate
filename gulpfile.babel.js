import gulp from 'gulp'

import sass from 'gulp-sass'

const dirs = {}

gulp.task('default', ['sass'])

gulp.task('sass', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(gulp.dest('dist/css'))
})
