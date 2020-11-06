const Kiss = require("./src/kiss-ssg.js");
const kiss = new Kiss({ dev: true });

const slugMapper = ({ model }) => {
  return {
    slug: model.slug,
  };
};
const courseController = ({ model }) => {
  return {
    slug: model.slug,
    title: model.title,
    model: model,
  };
};

kiss
  .page(
    {
      view: "index.hbs",
      model: "index.json",
    },
    slugMapper
  )
  .page(
    {
      view: "find-us.hbs",
      model: "find-us.json",
    },
    slugMapper
  )
  .pages(
    {
      view: "course.hbs",
      model: "courses",
      nav: true,
    },
    courseController
  );
