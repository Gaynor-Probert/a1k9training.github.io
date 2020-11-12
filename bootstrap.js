const fs = require('fs')
const sass = require('sass')

// sass.render({ file: './node_modules/bootstrap/scss/bootstrap.scss' }, function (
//   err,
//   result
// ) {
//   if (err) console.error('There has been an error: ' + err)
//   else {
//     console.log(result)
//   }
// })

const bootDir = './src/assets/css'
fs.mkdirSync(bootDir, { recursive: true })
var result = sass.renderSync({
  file: './node_modules/bootstrap/scss/bootstrap.scss',
  outFile: './bootstrap',
})

fs.writeFile(`${bootDir}/bootstrap.css`, result.css, function (err) {
  if (!err) {
    console.log('Generated bootstrap')
  }
})
