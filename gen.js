const Kiss = require("kiss-ssg");
const kiss = new Kiss({ dev: true });

kiss
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
  )
  .page({
    view: "index.hbs",
    model: "index.json",
  });
