module.exports = ({ model }) => {
  return {
    slug: model.slug,
    title: model.title,
    model: model,
  };
};
