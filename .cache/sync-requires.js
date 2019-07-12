const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/superjuarri/Websites/gradient-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/superjuarri/Websites/gradient-site/src/pages/404.js"))),
  "component---src-pages-gradients-js": hot(preferDefault(require("/home/superjuarri/Websites/gradient-site/src/pages/gradients.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/superjuarri/Websites/gradient-site/src/pages/index.js"))),
  "component---src-pages-palettes-js": hot(preferDefault(require("/home/superjuarri/Websites/gradient-site/src/pages/palettes.js"))),
  "component---src-pages-tools-js": hot(preferDefault(require("/home/superjuarri/Websites/gradient-site/src/pages/tools.js")))
}

