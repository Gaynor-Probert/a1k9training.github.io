const Kiss = require('./src/kiss-ssg.js')
const kiss = new Kiss({ dev: true })

kiss
  .page({
    model: 'index.json',
    view: 'index.hbs',
    controller: 'metaMapper.js',
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
  .complete(() => {
    console.log('Success'.rainbow)
  })
  .then(() => {
    console.log('Ready to publish'.brightCyan)
  })
