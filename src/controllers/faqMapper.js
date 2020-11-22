const colors = require('colors')

module.exports = ({ model }) => {
  console.log('Loading faqs:'.grey, model.faqs)
  const faqs = require(model.faqs)
  model.faqs = faqs.faqs
  return {
    model,
  }
}
