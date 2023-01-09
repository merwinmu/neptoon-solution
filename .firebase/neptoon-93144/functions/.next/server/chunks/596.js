"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 3353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9fc8a32b-0"
})`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=tablet')} {
    & > * {
      width: 100%;
    }

    & > *:not(:last-child) {
      margin-bottom: 2rem;
      margin-right: 0rem;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroup);


/***/ }),

/***/ 3130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mR": () => (/* binding */ NewsletterModalContextProvider),
/* harmony export */   "rd": () => (/* binding */ useNewsletterModalContext)
/* harmony export */ });
/* unused harmony export NewsletterModalContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NewsletterModalContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
function NewsletterModalContextProvider({ children  }) {
    const { 0: isModalOpened , 1: setIsModalOpened  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NewsletterModalContext.Provider, {
        value: {
            isModalOpened,
            setIsModalOpened
        },
        children: children
    }));
}
function useNewsletterModalContext() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NewsletterModalContext);
    if (!context) {
        throw new Error('useNewsletterModalContext can only be used inside NewsletterModalContextProvider');
    }
    return context;
}


/***/ })

};
;