"use strict";
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 7564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AutofitGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-66c548f1-0"
})`
  --autofit-grid-item-size: 30rem;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 0 auto;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutofitGrid);


/***/ }),

/***/ 2505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts)
/* harmony export */ });
/* unused harmony exports getAllPostsSlugs, getSinglePost, getPostsDirectory */
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



async function getAllPosts() {
    return Promise.all(getAllPostsSlugs().map(getSinglePost));
}
function getAllPostsSlugs() {
    return fs__WEBPACK_IMPORTED_MODULE_1__.readdirSync(getPostsDirectory()).map(normalizePostName);
}
function normalizePostName(postName) {
    return postName.replace('.mdx', '');
}
async function getSinglePost(slug) {
    const filePath = path__WEBPACK_IMPORTED_MODULE_2__.join(getPostsDirectory(), slug + '.mdx');
    const contents = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(filePath, 'utf8');
    const { data: meta , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(contents);
    return {
        slug,
        content,
        meta: meta
    };
}
function getPostsDirectory() {
    let basePath = process.cwd();
    return path__WEBPACK_IMPORTED_MODULE_2__.join(basePath, 'posts');
}


/***/ })

};
;