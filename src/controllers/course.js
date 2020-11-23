module.exports = ({ model }) => {
  if (model.faqs) {
    console.log('Loading faqs:'.grey, model.faqs)
    const faqs = require(model.faqs)
    model.faqs = faqs.faqs
  }

  return {
    slug: model.slug,
    title: model.title,
    description: model.description,
    model: model,
  }
}
