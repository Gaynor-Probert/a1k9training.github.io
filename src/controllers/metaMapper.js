const fs = require('fs')

module.exports = ({ model }) => {
  return {
    title: model.title,
    description: model.description,
  }
}
