const connect = require('connect')
const compiler = require('connect-compiler')
const static = require('serve-static')
const app = connect()

const chokidar = require('chokidar')
const { exec } = require('child_process')

function generate() {
  exec('node generate', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.log('listening...')
  })
}

// app.use(
//   compiler({
//     //    enabled: ['coffee', 'uglify'],
//     src: 'src',
//     dest: 'public',
//   })
// )

app.use(function (req, res, next) {
  // req is the Node.js http request object
  // res is the Node.js http response object
  // next is a function to call to invoke the next middleware
  console.log(req.url)
  next()
})

app.use(
  static(__dirname + '/public', {
    index: true,
    extensions: true,
  })
)

console.log('Serving (with live reload): ', 'http://localhost:3000')
app.listen(3000)

var livereload = require('livereload')
var lrserver = livereload.createServer()
lrserver.watch(__dirname + '/public')

chokidar.watch('./src').on('all', (event, path) => {
  if (!event.includes('add')) {
    console.log(event, path)
    generate()
  }
})
