const Kiss = require("./src/kiss-ssg.js");
const kiss = new Kiss({ dev: true });

kiss
  .page({
    view: "index2.hbs",
    model: "index.json",
  })
  .page({
    view: "index.hbs",
    model: "index.json",
  })
  .pages(
    {
      view: "course.hbs",
      model: "courses",
      nav: true,
    },
    ({ model }) => {
      return {
        slug: model.slug,
        title: model.title,
        model: model,
      };
    }
  );
