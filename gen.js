const Kiss = require("./src/kiss-ssg.js");
const kiss = new Kiss({ dev: true });

const titleMapper = require("./src/controller/title.js");
kiss
  .page(
    {
      view: "index.hbs",
      model: "index.json",
    },
    titleMapper
  )
  .page(
    {
      view: "find-us.hbs",
      model: "find-us.json",
    },
    titleMapper
  )
  .pages(
    {
      view: "course.hbs",
      model: "courses",
      nav: true,
    },
    require("./src/controller/course.js")
  );
