module.exports = (options) => {
  const view = options.view;
  const mappedModel = view.replace(".hbs", ".json");
  return {
    title: options.model.title,
    model: mappedModel,
  };
};
