const Kiss = require('./src/kiss-ssg.js')
const kiss = new Kiss({ dev: true })

kiss
  .page({
    model: 'index.json',
    view: 'index.hbs',
  })
  .page({
    model: 'find-us.json',
    view: 'find-us.hbs',
  })
  .pages({
    model: 'courses',
    view: 'course.hbs',
    controller: 'course.js',
  })
// .viewState()
