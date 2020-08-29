const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/page-2.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/services.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/jason/Repos/JayAtMachine/src/templates/blog-post.js")))
}

