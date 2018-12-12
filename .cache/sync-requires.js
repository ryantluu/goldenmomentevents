// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/src/templates/index.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/src/templates/post.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/src/templates/tag.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/src/templates/page.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/ryanluu/src/goldenmomentevents/src/pages/contact.js"))
}

