const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/page-2.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/portfolio.js"))),
  "component---src-pages-portfolio-hustle-design-management-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/portfolio/hustleDesignManagement.js"))),
  "component---src-pages-portfolio-quora-design-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/portfolio/quoraDesign.js"))),
  "component---src-pages-portfolio-quora-design-management-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/portfolio/quoraDesignManagement.js"))),
  "component---src-pages-portfolio-retargeting-js": hot(preferDefault(require("/Users/joel/Dropbox/joellewenstein.github.io/src/pages/portfolio/retargeting.js")))
}

