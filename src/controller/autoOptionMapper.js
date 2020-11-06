const fs = require("fs");

module.exports = (options) => {
  const view = options.view;
  const mappedModel = view.replace(".hbs", ".json");
  const modelText = fs.readFileSync(`./src/models/${mappedModel}`, "utf8");
  const model = JSON.parse(modelText);
  return {
    title: model.title,
    model: model,
  };
};
