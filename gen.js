const Kiss = require('kiss-ssg')
const kiss = new Kiss({ dev: true })

kiss
  .page({
    view: 'index.hbs',
    controller: 'metaMapper.js',
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
    view: 'find-us.hbs',
    model: {
      image: '/images/about/horse-sit-v1.png',
      'caption-class': 'pull-right push-down',
    },
    title: 'Find A1K9',
  })
  .pages({
    view: 'course.hbs',
    model: 'courses',
  })
  .complete(() => {
    console.log('Success'.rainbow)
  })
