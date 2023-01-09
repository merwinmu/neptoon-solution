"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 2284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-f1d27b44-0"
})`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 1431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ EnvVars)
/* harmony export */ });
const EnvVars = {
    SITE_NAME: 'neptoon.ch',
    OG_IMAGES_URL: 'https://next-saas-starter-ashy.vercel.app/og-images/',
    URL: 'https://next-saas-starter-ashy.vercel.app/',
    MAILCHIMP_SUBSCRIBE_URL: 'https://bstefanski.us5.list-manage.com/subscribe/post?u=66b4c22d5c726ae22da1dcb2e&id=679fb0eec9'
};


/***/ }),

/***/ 4712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SingleArticlePage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "tinacms"
const external_tinacms_namespaceObject = require("tinacms");
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
;// CONCATENATED MODULE: external "tinacms/dist/rich-text"
const rich_text_namespaceObject = require("tinacms/dist/rich-text");
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/ArticleImage.tsx




function ArticleImage({ src , caption , ...rest }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ImageWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: src,
                    alt: caption || 'Article Image',
                    placeholder: "blur",
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkj6+vBwAC4AFuNSmtGAAAAABJRU5ErkJggg==",
                    layout: "fill",
                    objectFit: "cover",
                    ...rest
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Caption, {
                children: caption
            })
        ]
    }));
};
const ImageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-13754946-0"
})`
  position: relative;
  max-width: 90rem;
  border-radius: 0.6rem;
  overflow: hidden;

  &::before {
    float: left;
    padding-top: 56.25%;
    content: '';
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-13754946-1"
})`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
const Caption = external_styled_components_default().small.withConfig({
    componentId: "sc-13754946-2"
})`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;

;// CONCATENATED MODULE: external "prism-react-renderer"
const external_prism_react_renderer_namespaceObject = require("prism-react-renderer");
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_namespaceObject);
// EXTERNAL MODULE: ./components/ClientOnly.tsx
var ClientOnly = __webpack_require__(3032);
;// CONCATENATED MODULE: external "use-clipboard-copy"
const external_use_clipboard_copy_namespaceObject = require("use-clipboard-copy");
;// CONCATENATED MODULE: ./hooks/useClipboard.ts



;// CONCATENATED MODULE: ./components/Code.tsx






function Code({ code: code1 , language ='javascript' , selectedLines =[] , withCopyButton =true , withLineNumbers , caption  }) {
    const { copy , copied  } = (0,external_use_clipboard_copy_namespaceObject.useClipboard)({
        copiedTimeout: 600
    });
    function handleCopyClick(code) {
        copy(code);
    }
    const copyButtonMarkup = /*#__PURE__*/ jsx_runtime_.jsx(ClientOnly/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(CopyButton, {
            copied: copied,
            onClick: ()=>handleCopyClick(code1)
            ,
            children: /*#__PURE__*/ jsx_runtime_.jsx(CopyIcon, {})
        })
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_prism_react_renderer_default()), {
            ...external_prism_react_renderer_namespaceObject.defaultProps,
            theme: undefined,
            code: code1,
            language: language,
            children: ({ className: className1 , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CodeWrapper, {
                            className: "code-wrapper",
                            language: language,
                            children: [
                                withCopyButton && copyButtonMarkup,
                                /*#__PURE__*/ jsx_runtime_.jsx(Pre, {
                                    className: className1,
                                    style: style,
                                    children: tokens.map((line, i)=>{
                                        const lineNumber = i + 1;
                                        const isSelected = selectedLines.includes(lineNumber);
                                        const lineProps = getLineProps({
                                            line,
                                            key: i
                                        });
                                        const className = lineProps.className + (isSelected ? ' selected-line' : '');
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Line, {
                                            ...lineProps,
                                            className,
                                            children: [
                                                withLineNumbers && /*#__PURE__*/ jsx_runtime_.jsx(LineNo, {
                                                    children: lineNumber
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(LineContent, {
                                                    children: line.map((token, key)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            ...getTokenProps({
                                                                token,
                                                                key
                                                            })
                                                        }, key)
                                                    )
                                                })
                                            ]
                                        }, i));
                                    })
                                })
                            ]
                        }),
                        caption && /*#__PURE__*/ jsx_runtime_.jsx(Code_Caption, {
                            children: caption
                        })
                    ]
                })
        })
    }));
};
function CopyIcon() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        focusable: "false",
        className: "chakra-icon css-onkibi",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        })
    }));
}
const Code_Caption = external_styled_components_default().small.withConfig({
    componentId: "sc-ddfcef69-0"
})`
  position: relative;
  top: -2.2rem;
  word-break: break-word;
  font-size: 1.2rem;
`;
const CopyButton = external_styled_components_default().button.withConfig({
    componentId: "sc-ddfcef69-1"
})`
  position: absolute;
  border: none;
  top: 2.4rem;
  right: 2.4rem;
  visibility: hidden;
  background-color: rgba(var(--secondary), 0.1);
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  line-height: normal;
  border-radius: 0.3rem;
  color: rgb(var(--text));
  z-index: 1;
  line-height: 1;

  &::after {
    position: absolute;
    content: 'Copied';
    visibility: ${(p)=>p.copied ? 'visible' : 'hidden'
};
    top: 0;
    left: -4rem;
    height: 3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    line-height: 1.5;
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    color: rgb(var(--primary));
    background-color: rgb(var(--secondary));
  }

  &:hover {
    background-color: rgba(var(--secondary), 0.2);
  }
`;
const CodeWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ddfcef69-2"
})`
  position: relative;
  border-radius: 0.3em;
  margin-top: 4.5rem;
  transition: visibility 0.1s;
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &::after {
    position: absolute;
    height: 2.2em;
    content: '${(p)=>p.language
}';
    right: 2.4rem;
    padding: 1.2rem;
    top: -2em;
    line-height: 1rem;
    border-radius: 0.3em;
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: inherit;
    font-weight: bold;
    text-align: center;
  }

  &:hover {
    ${CopyButton} {
      visibility: visible;
    }
  }
`;
const Pre = external_styled_components_default().pre.withConfig({
    componentId: "sc-ddfcef69-3"
})`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;
const Line = external_styled_components_default().div.withConfig({
    componentId: "sc-ddfcef69-4"
})`
  display: flex;
`;
const LineNo = external_styled_components_default().span.withConfig({
    componentId: "sc-ddfcef69-5"
})`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;
const LineContent = external_styled_components_default().span.withConfig({
    componentId: "sc-ddfcef69-6"
})`
  display: table-cell;
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Link.tsx



function Link({ href , children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Anchor, {
            children: children
        })
    }));
};
const Anchor = external_styled_components_default().a.withConfig({
    componentId: "sc-13e23be0-0"
})`
  display: inline;
  width: fit-content;
  text-decoration: none;

  background: linear-gradient(rgb(var(--primary)), rgb(var(--primary)));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 0px;
  transition: 100ms;
  transition-property: background-size, text-decoration, color;
  color: rgb(var(--primary));

  &:hover {
    background-size: 100% 100%;
    text-decoration: none;
    color: rgb(var(--background));
  }

  &:active {
    color: rgb(var(--background));
    background-size: 100% 100%;
  }
`;

;// CONCATENATED MODULE: ./components/Quote.tsx



function Quote({ content , author , cite  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Quote_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Blockquote, {
                ...cite && {
                    cite
                },
                children: content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Quote_Caption, {
                children: [
                    "— ",
                    author
                ]
            })
        ]
    }));
};
const Quote_Container = external_styled_components_default().figure.withConfig({
    componentId: "sc-eeb564e2-0"
})`
  border-left: 1px solid rgb(var(--secondary));
  padding: 3rem;
  quotes: ${`"\\201c" "\\201d" "\\2018" "\\2019"`};
  color: rgb(var(--secondary));
  margin-bottom: 3.7rem;

  &::before {
    content: open-quote;
    font-size: 8em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
    opacity: 0.6;
    font-family: arial, sans-serif;
  }
`;
const Blockquote = external_styled_components_default().blockquote.withConfig({
    componentId: "sc-eeb564e2-1"
})`
  color: rgb(var(--text));
  display: inline;
  font-size: 2.2rem;
  line-height: 3rem;
  font-style: italic;
  hanging-punctuation: first;
`;
const Quote_Caption = external_styled_components_default().figcaption.withConfig({
    componentId: "sc-eeb564e2-2"
})`
  color: rgb(var(--text));
  display: block;
  font-size: 1.6rem;
  margin-top: 2.5rem;
`;

;// CONCATENATED MODULE: ./components/MDXRichText.tsx








function RichText(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(MDXRichText_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(rich_text_namespaceObject.TinaMarkdown, {
            content: props.content,
            components: components
        })
    }));
};
const MDXRichText_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-40d5cc3b-0"
})`
  display: flex;
  ${'' /* Opting-out of margin-collapse */ }

  flex-direction: column;
  width: 100%;

  section:not(:last-child) {
    margin-bottom: 3.8rem;
  }

  a {
    word-break: break-word;
  }

  ${(0,media/* media */.B)('<=desktop')} {
    .remark-highlight {
      width: 100%;
      overflow-x: auto;
    }
  }

  & > section,
  .footnotes {
    ${'' /* content-visibility: auto; */ }
  }

  ol,
  ul {
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin: 0;
    padding-left: 2.4rem;
    li {
      & > * {
        vertical-align: top;
      }
    }

    &:not(:last-child) {
      margin-bottom: 2.7rem;
    }
  }
`;
const Paragraph = external_styled_components_default().p.withConfig({
    componentId: "sc-40d5cc3b-1"
})`
  font-size: 1.8rem;
  line-height: 2.7rem;
  hanging-punctuation: first;

  &:not(:last-child) {
    margin-bottom: 2.7rem;
  }

  & + ul,
  & + li {
    margin-top: -1.5rem !important;
  }
`;
const SecondHeading = external_styled_components_default().h2.withConfig({
    componentId: "sc-40d5cc3b-2"
})`
  font-size: 2.5rem;
  line-height: 3.75rem;
  margin-bottom: 3.75rem;
`;
const ThirdHeading = external_styled_components_default().h3.withConfig({
    componentId: "sc-40d5cc3b-3"
})`
  font-size: 2.2rem;
  line-height: 3.4rem;
  margin-bottom: 3.4rem;
`;
const Break = external_styled_components_default().br.withConfig({
    componentId: "sc-40d5cc3b-4"
})`
  display: block;
  content: '';
  margin: 0;
  height: 3rem;
`;
const TextHighlight = external_styled_components_default().code.withConfig({
    componentId: "sc-40d5cc3b-5"
})`
  display: inline-block;
  padding: 0 0.6rem;
  color: rgb(var(--textSecondary));
  border-radius: 0.4rem;
  background-color: rgba(var(--primary), 0.8);
  font-size: 1.6rem;
  font-family: inherit;
`;
const components = {
    h2: SecondHeading,
    h3: ThirdHeading,
    p: Paragraph,
    br: Break,
    inlineCode: TextHighlight,
    Image: ArticleImage,
    Link: Link,
    Code: Code,
    Quote: Quote,
    ArticleImage: ArticleImage
};

;// CONCATENATED MODULE: external "date-fns/format"
const format_namespaceObject = require("date-fns/format");
var format_default = /*#__PURE__*/__webpack_require__.n(format_namespaceObject);
;// CONCATENATED MODULE: external "date-fns/isValid"
const isValid_namespaceObject = require("date-fns/isValid");
var isValid_default = /*#__PURE__*/__webpack_require__.n(isValid_namespaceObject);
;// CONCATENATED MODULE: ./utils/formatDate.ts


function formatDate(date) {
    return isValid_default()(date) ? format_default()(date, 'do MMMM yyyy') : 'N/A';
}

;// CONCATENATED MODULE: external "reading-time"
const external_reading_time_namespaceObject = require("reading-time");
var external_reading_time_default = /*#__PURE__*/__webpack_require__.n(external_reading_time_namespaceObject);
;// CONCATENATED MODULE: ./utils/readTime.ts

function getReadTime(text) {
    const readTime = Math.round(external_reading_time_default()(text).minutes);
    return `${readTime < 1 ? '< 1' : Math.round(readTime)}min read`;
}

;// CONCATENATED MODULE: ./views/SingleArticlePage/Header.tsx





function Header({ title , formattedDate , imageUrl , readTime  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ArticleImage, {
                src: imageUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailsContainer, {
                children: [
                    formattedDate,
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(MidDot, {}),
                    " ",
                    readTime
                ]
            })
        ]
    }));
};
const HeaderContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-98c67c27-0"
})`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin-bottom: 8rem;
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-98c67c27-1"
})`
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.6rem;
  margin-bottom: 28px;

  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 3.5rem;
    line-height: 4.8rem;
  }
`;
const DetailsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-98c67c27-2"
})`
  font-size: 1.6rem;
  color: var(--text-lighter);
`;
const MidDot = external_styled_components_default().span.withConfig({
    componentId: "sc-98c67c27-3"
})`
  &::before {
    display: inline-block;
    content: '\x000B7';
    margin: 0 0.6rem;
  }
`;

// EXTERNAL MODULE: ./env.ts
var env = __webpack_require__(1431);
;// CONCATENATED MODULE: ./views/SingleArticlePage/MetadataHead.tsx




function MetadataHead(props) {
    const { title , description , author  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                children: [
                    title,
                    " | ",
                    env/* EnvVars.SITE_NAME */.$.SITE_NAME
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: author
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./views/SingleArticlePage/OpenGraphHead.tsx




function OpenGraphHead(props) {
    const { slug , title , description , date , tags  } = props;
    const currentUrl = env/* EnvVars.URL */.$.URL + 'blog/' + slug;
    const ogImageUrl = env/* EnvVars.OG_IMAGES_URL */.$.OG_IMAGES_URL + `${slug}.png`;
    const domainName = env/* EnvVars.URL.replace */.$.URL.replace('https://', '');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: domainName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "article"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: currentUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: ogImageUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:alt",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:locale",
                content: "en_US"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "article:published_time",
                content: new Date(date).toString()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "article:section",
                content: tags
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: ogImageUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image:alt",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "max-image-preview:large"
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "react-share"
const external_react_share_namespaceObject = require("react-share");
;// CONCATENATED MODULE: ./views/SingleArticlePage/ShareWidget.tsx





function ShareWidget({ title , slug  }) {
    const shareMessage = 'New article: ' + title;
    const currentUrl = env/* EnvVars.URL */.$.URL + 'blog/' + slug;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ShareWidget_Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.FacebookShareButton, {
                title: shareMessage,
                url: currentUrl,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.FacebookIcon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.TwitterShareButton, {
                title: shareMessage,
                url: currentUrl,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.TwitterIcon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.LinkedinShareButton, {
                title: shareMessage,
                url: currentUrl,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.LinkedinIcon, {})
            })
        ]
    }));
};
const ShareWidget_Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-eaae25c9-0"
})`
  display: flex;
  width: fit-content;
  flex-direction: column;
  position: sticky;
  align-items: flex-start;
  margin-left: -10rem;
  margin-top: -22.4rem;
  top: 50%;
  z-index: var(--z-sticky);
  transform: translateY(-50%);

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${(0,media/* media */.B)('<=largeDesktop')} {
    transform: translateY(-50%) scale(0.8);
  }

  ${(0,media/* media */.B)('<=desktop')} {
    display: none;
  }
`;

;// CONCATENATED MODULE: external "react-schemaorg"
const external_react_schemaorg_namespaceObject = require("react-schemaorg");
;// CONCATENATED MODULE: ./views/SingleArticlePage/StructuredDataHead.tsx




function StructuredDataHead(props) {
    const { slug , title , date , description , tags , author  } = props;
    const currentSiteUrl = env/* EnvVars.URL */.$.URL + 'blog/' + slug;
    const ogImageUrl = env/* EnvVars.OG_IMAGES_URL */.$.OG_IMAGES_URL + `${slug}.png`;
    const domainName = env/* EnvVars.URL.replace */.$.URL.replace('https://', '');
    const logoUrl = env/* EnvVars.URL */.$.URL + 'logo.png';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                ...(0,external_react_schemaorg_namespaceObject.jsonLdScriptProps)({
                    '@context': 'https://schema.org',
                    '@type': 'TechArticle',
                    mainEntityOfPage: `${currentSiteUrl}#content`,
                    headline: title,
                    datePublished: date,
                    dateModified: date,
                    author: {
                        '@type': 'Person',
                        name: author
                    },
                    description: description,
                    dependencies: tags,
                    proficiencyLevel: 'Beginner',
                    publisher: {
                        '@type': 'Organization',
                        name: domainName,
                        logo: {
                            '@type': 'ImageObject',
                            url: logoUrl
                        }
                    },
                    image: {
                        '@type': 'ImageObject',
                        url: ogImageUrl
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                ...(0,external_react_schemaorg_namespaceObject.jsonLdScriptProps)({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: domainName,
                    alternateName: domainName,
                    url: env/* EnvVars.URL */.$.URL
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/blog/[slug].tsx















function SingleArticlePage(props) {
    const contentRef = (0,external_react_.useRef)(null);
    const { 0: readTime , 1: setReadTime  } = (0,external_react_.useState)('');
    (0,external_react_.useEffect)(()=>{
        calculateReadTime();
        lazyLoadPrismTheme();
        function calculateReadTime() {
            const currentContent = contentRef.current;
            if (currentContent) {
                setReadTime(getReadTime(currentContent.textContent || ''));
            }
        }
        function lazyLoadPrismTheme() {
            const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');
            if (!prismThemeLinkEl) {
                const headEl = document.querySelector('head');
                if (headEl) {
                    const newEl = document.createElement('link');
                    newEl.setAttribute('data-id', 'prism-theme');
                    newEl.setAttribute('rel', 'stylesheet');
                    newEl.setAttribute('href', '/prism-theme.css');
                    newEl.setAttribute('media', 'print');
                    newEl.setAttribute('onload', "this.media='all'; this.onload=null;");
                    headEl.appendChild(newEl);
                }
            }
        }
    }, []);
    const { slug , data  } = props;
    const content = data.getPostsDocument.data.body;
    if (!data) {
        return null;
    }
    const { title , description , date , tags , imageUrl  } = data.getPostsDocument.data;
    const meta = {
        title,
        description,
        date: date,
        tags,
        imageUrl,
        author: ''
    };
    const formattedDate = formatDate(new Date(date));
    const absoluteImageUrl = imageUrl.replace(/\/+/, '/');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/prism-theme.css"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OpenGraphHead, {
                slug: slug,
                ...meta
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StructuredDataHead, {
                slug: slug,
                ...meta
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MetadataHead, {
                ...meta
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomContainer, {
                id: "content",
                ref: contentRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ShareWidget, {
                        title: title,
                        slug: slug
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        title: title,
                        formattedDate: formattedDate,
                        imageUrl: absoluteImageUrl,
                        readTime: readTime
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RichText, {
                        content: content
                    })
                ]
            })
        ]
    }));
};
async function getStaticPaths() {
    const postsListData = await (0,external_tinacms_namespaceObject.staticRequest)({
        query: `
      query PostsSlugs{
        getPostsList{
          edges{
            node{
              sys{
                basename
              }
            }
          }
        }
      }
    `,
        variables: {}
    });
    if (!postsListData) {
        return {
            paths: [],
            fallback: false
        };
    }
    return {
        paths: postsListData.getPostsList.edges.map((edge)=>({
                params: {
                    slug: normalizePostName(edge.node.sys.basename)
                }
            })
        ),
        fallback: false
    };
}
function normalizePostName(postName) {
    return postName.replace('.mdx', '');
}
async function getStaticProps({ params  }) {
    const { slug  } = params;
    const variables = {
        relativePath: `${slug}.mdx`
    };
    const query = `
    query BlogPostQuery($relativePath: String!) {
      getPostsDocument(relativePath: $relativePath) {
        data {
          title
          description
          date
          tags
          imageUrl
          body
        }
      }
    }
  `;
    const data = await (0,external_tinacms_namespaceObject.staticRequest)({
        query: query,
        variables: variables
    });
    return {
        props: {
            slug,
            variables,
            query,
            data
        }
    };
}
const CustomContainer = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-e1dee4be-0"
})`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${(0,media/* media */.B)('<=tablet')} {
    margin: 5rem auto;
  }
`;


/***/ }),

/***/ 3274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ media)
/* harmony export */ });
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_0__);

const media = (css_in_js_media__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,32], () => (__webpack_exec__(4712)));
module.exports = __webpack_exports__;

})();