const Kiss = require('./src/kiss-ssg.js')
const kiss = new Kiss({ dev: true })

const autoOptionMapper = require('./src/controller/autoOptionMapper.js')
kiss
  .page(
    {
      view: 'index.hbs',
    },
    autoOptionMapper
  )
  .page(
    {
      view: 'find-us.hbs',
    },
    autoOptionMapper
  )
  .pages(
    {
      view: 'course.hbs',
      model: 'courses',
    },
    require('./src/controller/course.js')
  )
  .viewState()
