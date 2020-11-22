const Kiss = require('kiss-ssg')
var args = process.argv.slice(2)
const kiss = new Kiss({
  dev: args.length > 0,
  verbose: true,
  folders: { build: './docs' },
  sass: { includePaths: ['./node_modules/bootstrap/scss'] },
})

kiss.handlebars.registerHelper('offset', function (index) {
  index++
  return index
})

kiss
  .page({
    view: 'index.hbs',
    title: 'Dog Behaviour and Training',
    description: 'A1K9 Dog Behaviour and Training',
  })

  .page({
    view: 'behavioural-consultations/index.hbs',
    model: {
      image: '/images/consultations/consultations-v1.png',
      'caption-class': 'pull-right',
    },
    title: 'Dog Behavioural Consultations - by Gaynor Probert',
  })
  .page({
    view: 'behavioural-consultations/dog-on-dog-aggression.hbs',
    model: {
      image:
        '/images/consultations/dog-on-dog-aggression/dog-on-dog-aggression-v1.png',
      'caption-class': 'pull-right',
    },
    title: 'Behavioural Consultations for Dog on Dog Aggression',
  })
  .page({
    view: 'behavioural-consultations/dog-on-person-aggression.hbs',
    model: {
      image:
        '/images/consultations/dog-on-person-aggression/dog-on-person-aggression-v3.png',
      'caption-class': 'pull-left',
    },
    title: 'Behavioural Consultations for Dog on Person Aggression',
  })

  .page({
    view: 'courses/index.hbs',
    model: 'courses',
    model: {
      image: '/images/courses/classes-v1.1.png',
      'caption-class': 'pull-left',
      faqs: './src/models/faqs/courses.json',
    },
    controller: ({ model }) => {
      console.log('Loading sub model:', model.faqs)
      const faqs = require(model.faqs)
      console.log(faqs)
      return {
        model: { faqs: faqs.faqs },
      }
    },
    title: 'Gaynor Probert Dog Training Classes',
  })
  .pages({
    view: 'courses/course.hbs',
    model: 'courses',
    controller: 'course.js',
    path: 'courses',
  })

  // About Section
  .page({
    view: 'about/philosophy.hbs',
    model: 'about/philosophy.json',
    path: 'about',
    slug: 'index',
  })
  .page({
    view: 'about/facilities.hbs',
    model: 'about/facilities.json',
  })
  .page({
    view: 'about/gaynor-probert.hbs',
    model: 'about/gaynor-probert.json',
  })
  .page({
    view: 'about/sara-thomas.hbs',
    model: 'about/sara-thomas.json',
  })

  .page({
    view: 'find-us.hbs',
    model: {
      image: '/images/about/horse-sit-v1.png',
      'caption-class': 'pull-right push-down',
    },
    title: 'Find A1K9',
  })

  .generate(() => {
    console.log('Success'.rainbow)
  })
