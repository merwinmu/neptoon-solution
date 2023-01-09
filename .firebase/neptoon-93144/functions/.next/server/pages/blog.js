"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 7640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogIndexPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
;// CONCATENATED MODULE: ./components/ArticleCard.tsx





function ArticleCard({ title , slug , imageUrl , description  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: '/blog/' + slug,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ArticleCardWrapper, {
            className: "article-card-wrapper",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HoverEffectContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: imageUrl,
                            layout: "fill",
                            objectFit: "cover",
                            alt: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                                children: description
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
const ArticleCardWrapper = external_styled_components_default().a.withConfig({
    componentId: "sc-76f4a83f-0"
})`
  display: flex;
  flex-direction: column;
  height: 45rem;
  max-width: 35rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(var(--cardBackground));
  cursor: pointer;
  color: rgb(var(--text));
`;
const HoverEffectContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-76f4a83f-1"
})`
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-76f4a83f-2"
})`
  position: relative;
  height: 20rem;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${(0,media/* media */.B)('<=desktop')} {
    width: 100%;
  }
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-76f4a83f-3"
})`
  padding: 0 2rem;

  & > * {
    margin-top: 2rem;
  }
`;
const Title = external_styled_components_default().h4.withConfig({
    componentId: "sc-76f4a83f-4"
})`
  font-size: 1.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const Description = external_styled_components_default().p.withConfig({
    componentId: "sc-76f4a83f-5"
})`
  font-size: 1.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

// EXTERNAL MODULE: ./components/AutofitGrid.tsx
var AutofitGrid = __webpack_require__(7564);
// EXTERNAL MODULE: ./components/Page.tsx
var Page = __webpack_require__(6000);
// EXTERNAL MODULE: ./utils/postsFetcher.ts
var postsFetcher = __webpack_require__(2505);
;// CONCATENATED MODULE: ./pages/blog/index.tsx







function BlogIndexPage({ posts  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Page/* default */.Z, {
        title: "My SaaS Startup Blog",
        description: "Culpa duis reprehenderit in ex amet cillum nulla do in enim commodo. Sunt ut excepteur et est aliqua anim ea excepteur fugiat voluptate. Fugiat exercitation dolore laboris do quis consectetur eiusmod tempor consequat.",
        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomAutofitGrid, {
            children: posts.map((singlePost, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(ArticleCard, {
                    title: singlePost.meta.title,
                    description: singlePost.meta.description,
                    imageUrl: singlePost.meta.imageUrl,
                    slug: singlePost.slug
                }, singlePost.slug)
            )
        })
    }));
};
const CustomAutofitGrid = external_styled_components_default()(AutofitGrid/* default */.Z).withConfig({
    componentId: "sc-4e2c65aa-0"
})`
  --autofit-grid-item-size: 40rem;

  ${(0,media/* media */.B)('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${(0,media/* media */.B)('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;
async function getStaticProps() {
    return {
        props: {
            posts: await (0,postsFetcher/* getAllPosts */.Bd)()
        }
    };
}


/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,739,0,445], () => (__webpack_exec__(7640)));
module.exports = __webpack_exports__;

})();