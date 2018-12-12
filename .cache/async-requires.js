// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-js": () => import("/Users/ryanluu/src/goldenmomentevents/src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-post-js": () => import("/Users/ryanluu/src/goldenmomentevents/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-tag-js": () => import("/Users/ryanluu/src/goldenmomentevents/src/templates/tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---src-templates-page-js": () => import("/Users/ryanluu/src/goldenmomentevents/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/ryanluu/src/goldenmomentevents/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/ryanluu/src/goldenmomentevents/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/ryanluu/src/goldenmomentevents/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */)
}

exports.data = () => import("/Users/ryanluu/src/goldenmomentevents/.cache/data.json")

