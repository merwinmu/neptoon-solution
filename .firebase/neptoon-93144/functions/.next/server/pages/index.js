"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Collapse)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-animate-height"
const external_react_animate_height_namespaceObject = require("react-animate-height");
var external_react_animate_height_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_height_namespaceObject);
;// CONCATENATED MODULE: ./components/Collapse.tsx



const Collapse = /*#__PURE__*/ (0,external_react_.forwardRef)(({ isOpen , animateOpacity =true , onAnimationStart , onAnimationEnd , duration , easing ='ease' , startingHeight =0 , endingHeight ='auto' , ...rest }, ref)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_height_default()), {
        duration: duration,
        easing: easing,
        animateOpacity: animateOpacity,
        height: isOpen ? endingHeight : startingHeight,
        applyInlineTransitions: false,
        onAnimationStart,
        onAnimationEnd,
        style: {
            transition: 'height .3s ease,opacity .3s ease-in-out,transform .3s ease-in-out',
            backfaceVisibility: 'hidden'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ref: ref,
            ...rest
        })
    }));
});
/* harmony default export */ const components_Collapse = (Collapse);


/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Homepage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
;// CONCATENATED MODULE: ./components/OverTitle.tsx


const OverTitle = external_styled_components_default().span.withConfig({
    componentId: "sc-e0da1836-0"
})`
  display: block;
  &::before {
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: rgb(var(--primary));
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;

  ${(0,media/* media */.B)('<=desktop')} {
    line-height: 1.5;
  }
`;
/* harmony default export */ const components_OverTitle = (OverTitle);

// EXTERNAL MODULE: ./components/RichText.tsx
var RichText = __webpack_require__(3017);
;// CONCATENATED MODULE: ./components/BasicSection.tsx








function BasicSection({ imageUrl , title , overTitle , reversed , children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(BasicSectionWrapper, {
        reversed: reversed,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: imageUrl,
                    alt: title,
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomOverTitle, {
                        children: overTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RichText/* default */.Z, {
                        children: children
                    })
                ]
            })
        ]
    }));
};
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-7dca8f35-0"
})`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const CustomOverTitle = external_styled_components_default()(components_OverTitle).withConfig({
    componentId: "sc-7dca8f35-1"
})`
  margin-bottom: 2rem;
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7dca8f35-2"
})`
  flex: 1;

  position: relative;
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
const ContentContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7dca8f35-3"
})`
  flex: 1;
`;
const BasicSectionWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-7dca8f35-4"
})`
  display: flex;
  align-items: center;
  flex-direction: ${(p)=>p.reversed ? 'row-reverse' : 'row'
};

  ${ImageContainer} {
    margin: ${(p)=>p.reversed ? '0 0 0 5rem' : '0 5rem 0 0'
};
  }

  ${(0,media/* media */.B)('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;

// EXTERNAL MODULE: ./env.ts
var env = __webpack_require__(1431);
// EXTERNAL MODULE: ./utils/postsFetcher.ts
var postsFetcher = __webpack_require__(2505);
// EXTERNAL MODULE: ./components/AutofitGrid.tsx
var AutofitGrid = __webpack_require__(7564);
;// CONCATENATED MODULE: ./components/BasicCard.tsx



function BasicCard({ title , description , imageUrl  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: imageUrl,
                width: 128,
                height: 128,
                alt: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BasicCard_Title, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                children: description
            })
        ]
    }));
};
const Card = external_styled_components_default().div.withConfig({
    componentId: "sc-92414a77-0"
})`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;
const BasicCard_Title = external_styled_components_default().div.withConfig({
    componentId: "sc-92414a77-1"
})`
  font-weight: bold;
`;
const Description = external_styled_components_default().div.withConfig({
    componentId: "sc-92414a77-2"
})`
  opacity: 0.6;
`;

;// CONCATENATED MODULE: ./views/HomePage/Features.tsx







const FEATURES = [
    {
        imageUrl: '/grid-icons/asset-1.svg',
        title: 'Design',
        description: 'UX and UI'
    },
    {
        imageUrl: '/grid-icons/asset-2.svg',
        title: 'Suchmaschine Optimierungen',
        description: 'Onpage- und Offpage-Optimierung'
    },
    {
        imageUrl: '/grid-icons/asset-3.svg',
        title: 'Responsive',
        description: 'Mobile, Tablet und Desktop optimierungen'
    },
    {
        imageUrl: '/grid-icons/asset-4.svg',
        title: 'Support',
        description: 'Jederzeit erreichbar'
    },
    {
        imageUrl: '/grid-icons/asset-5.svg',
        title: 'Schweizer Hosting',
        description: 'Wir hosten bei Hostpoint.ch'
    },
    {
        imageUrl: '/grid-icons/asset-6.svg',
        title: 'Next.js und Django',
        description: 'Wir verwenden Next.js um Webseiten zu erstellen'
    },
    {
        imageUrl: '/grid-icons/asset-7.svg',
        title: 'State of Art Webdesign',
        description: 'Wir verwenden die neuesten Design Frameworks'
    },
    {
        imageUrl: '/grid-icons/asset-8.svg',
        title: 'Social Media Integration',
        description: 'Verlinkungen auf Facebook, Twitter und Instagram'
    },
    {
        imageUrl: '/grid-icons/asset-9.svg',
        title: 'Swiss Made',
        description: 'Entwicklung in der Schweiz'
    }, 
];
function Features() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomAutofitGrid, {
            children: FEATURES.map((singleFeature, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(BasicCard, {
                    ...singleFeature
                }, singleFeature.title)
            )
        })
    }));
};
const CustomAutofitGrid = external_styled_components_default()(AutofitGrid/* default */.Z).withConfig({
    componentId: "sc-7660f642-0"
})`
  --autofit-grid-item-size: 40rem;

  ${(0,media/* media */.B)('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${(0,media/* media */.B)('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

// EXTERNAL MODULE: ./components/Collapse.tsx + 1 modules
var Collapse = __webpack_require__(5972);
// EXTERNAL MODULE: ./components/SectionTitle.tsx
var SectionTitle = __webpack_require__(619);
;// CONCATENATED MODULE: ./components/ThreeLayersCircle.tsx


const ThreeLayersCircle = external_styled_components_default().div.withConfig({
    componentId: "sc-a71c41bd-0"
})`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 5rem;
  height: 5rem;
  border-radius: 100rem;
  background: rgb(${(p)=>p.baseColor
});
  z-index: 0;
  transition: background 0.2s;

  ${(0,media/* media */.B)('<=tablet')} {
    width: 4rem;
    height: 4rem;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100rem;
    z-index: -1;
  }

  &:after {
    width: 4rem;
    height: 4rem;
    background: rgb(${(p)=>p.secondColor
});
    z-index: -2;
  }

  &:before {
    width: 2rem;
    height: 2rem;
    background: rgb(${(p)=>p.baseColor
});
  }
`;
/* harmony default export */ const components_ThreeLayersCircle = (ThreeLayersCircle);

;// CONCATENATED MODULE: ./views/HomePage/FeaturesGallery.tsx









const TABS = [
    {
        title: 'michmieten.ch gmbh',
        description: '<p>michmieten.ch gmbh vermietet im Umgebung Basel, Lieferwagen/Transporter f\xfcr einen g\xfcnstigen Preis. Die Website wurde SEO opmitiert sodass sie im Google Suche zu den Top 10 geh\xf6rt</p>',
        imageUrl: '/website1.png',
        baseColor: '249,82,120',
        secondColor: '221,9,57'
    },
    {
        title: 'mietplace.ch',
        description: '<p>mietplace.ch erm\xf6glicht Autos, M\xf6bel, Haushalteger\xe4te etc g\xfcnstig zu mieten. Nebenbei kann man eigene Gegenst\xe4nde zu vermietung geben und Geld verdienen.</p>',
        imageUrl: '/website2.png',
        baseColor: '57,148,224',
        secondColor: '99,172,232'
    }, 
];
function FeaturesGallery() {
    const { 0: currentTab , 1: setCurrentTab  } = (0,external_react_.useState)(TABS[0]);
    const imagesMarkup = TABS.map((singleTab, idx)=>{
        const isActive = singleTab.title === currentTab.title;
        const isFirst = idx === 0;
        return(/*#__PURE__*/ jsx_runtime_.jsx(FeaturesGallery_ImageContainer, {
            isActive: isActive,
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: singleTab.imageUrl,
                alt: singleTab.title,
                layout: "fill",
                objectFit: "contain",
                priority: isFirst
            })
        }, singleTab.title));
    });
    const tabsMarkup = TABS.map((singleTab, idx)=>{
        const isActive = singleTab.title === currentTab.title;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tab, {
            isActive: isActive,
            onClick: ()=>handleTabClick(idx)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabTitleContainer, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CircleContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ThreeLayersCircle, {
                                baseColor: isActive ? 'transparent' : singleTab.baseColor,
                                secondColor: singleTab.secondColor
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: singleTab.title
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Collapse/* default */.Z, {
                    isOpen: isActive,
                    duration: 300,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TabContent, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: singleTab.description
                            }
                        })
                    })
                })
            ]
        }, idx));
    });
    function handleTabClick(idx) {
        setCurrentTab(TABS[idx]);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeaturesGalleryWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                    children: "Erfolgreiche Webseiten"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GalleryWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TabsContainer, {
                        children: tabsMarkup
                    }),
                    imagesMarkup
                ]
            })
        ]
    }));
};
const FeaturesGalleryWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-e3b172e-0"
})`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const GalleryWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-1"
})`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${(0,media/* media */.B)('<=desktop')} {
    flex-direction: column;
  }
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-2"
})`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;
const TabsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-3"
})`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${(0,media/* media */.B)('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;
const FeaturesGallery_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-4"
})`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p)=>p.isActive ? '2' : '0'
};
  box-shadow: var(--shadow-md);

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
    width: ${(p)=>p.isActive ? '100%' : '0'
};
  }
`;
const Tab = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-5"
})`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p)=>p.isActive ? 1 : 0.6
};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${(0,media/* media */.B)('<=desktop')} {
    width: 100%;
  }
`;
const TabTitleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-6"
})`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;
const TabContent = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-7"
})`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${(0,media/* media */.B)('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;
const CircleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e3b172e-8"
})`
  flex: 0 calc(5rem + 1.5rem);

  ${(0,media/* media */.B)('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;

// EXTERNAL MODULE: ./components/ButtonGroup.tsx
var ButtonGroup = __webpack_require__(3353);
;// CONCATENATED MODULE: ./components/HeroIllustation.tsx

function HeroIllustration() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "70093593-85a2-447b-b81e-208691c845a3",
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "1113.8",
        height: "425.71",
        viewBox: "0 0 1113.8 825.71",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "38c043cc-bff7-4144-86c9-76214eedfc2b",
                    x1: "879.53",
                    y1: "603.57",
                    x2: "879.53",
                    y2: "231.44",
                    gradientTransform: "matrix(-1, 0, 0, 1, 1191.18, 0)",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "0",
                            stopColor: "gray",
                            stopOpacity: "0.25"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "0.54",
                            stopColor: "gray",
                            stopOpacity: "0.12"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: "gray",
                            stopOpacity: "0.1"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "startup life"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M534,68.31c-44.08-17.92-90.65-32.88-138.19-31-69.9,2.75-136.94,44.8-169.85,106.53-27.89,52.3-31.33,113.6-43.34,171.64C167.8,387,139.46,454.94,109.18,521.4,92.92,557.1,75.76,593.57,73.1,632.71c-3.71,54.32,22.26,108.46,63,144.6s94.82,55.21,149.11,59.37c28.89,2.21,59.08.16,84.75-13.29,27.14-14.22,46.94-39.93,74.19-53.95,25.26-13,54.81-14.83,83.17-13.13a372.67,372.67,0,0,1,108.58,23.08c39.64,14.89,76.5,36.44,116.05,51.54s83.74,23.51,124.17,10.92c37.94-11.83,68-40.56,95-69.66a1218.85,1218.85,0,0,0,121.17-153.3c24.41-36.56,47.13-75.14,57.93-117.76,20.63-81.48-7.77-173.41-70.76-229C1027.3,226,957.26,206,888.7,193.82c-62.52-11.07-134.81-11.76-192.36-40.62C641.46,125.68,591.52,91.71,534,68.31Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                points: "934.03 576.92 935.7 578.6 936.45 575.71 935.65 572.86 933.59 572.86 934.03 576.92",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                points: "934.03 576.92 935.7 578.6 936.45 575.71 935.65 572.86 933.59 572.86 934.03 576.92",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                points: "934.03 576.92 935.65 578.65 934.03 580.55 932.29 579.9 931.86 579.06 934.03 576.92",
                fill: "#9c9ca1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                points: "934.03 576.92 935.65 578.65 934.03 580.55 932.29 579.9 931.86 579.06 934.03 576.92",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M669.31,310.28,486.43,493.16a17.58,17.58,0,0,0-.05,24.81L766.7,800.52a17.58,17.58,0,0,0,24.82.13L977.13,617.7Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#9c9ca1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M669.31,310.28,486.43,493.16a17.58,17.58,0,0,0-.05,24.81L766.7,800.52a17.58,17.58,0,0,0,24.82.13L977.13,617.7Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M669.31,306.65,486.43,489.53a17.58,17.58,0,0,0-.05,24.81L766.7,796.88a17.58,17.58,0,0,0,24.82.14l185.61-183Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#9c9ca1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M688.51,178.1,671.73,305.44,979.55,612.85l17.68-129.44a18.72,18.72,0,0,0-5.44-15.93l-297-291.56A3.72,3.72,0,0,0,688.51,178.1Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M688.51,178.1,671.73,305.44,979.55,612.85l17.68-129.44a18.72,18.72,0,0,0-5.44-15.93l-297-291.56A3.72,3.72,0,0,0,688.51,178.1Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M686.09,179.31,669.31,306.65,977.13,614.06l17.68-129.44a18.72,18.72,0,0,0-5.44-15.93l-297-291.56A3.72,3.72,0,0,0,686.09,179.31Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                opacity: "0.1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M670.13,365.17,659,376.4a3.53,3.53,0,0,0,0,5l11.28,11.57a3.54,3.54,0,0,0,5,.1l11.08-10.46a3.53,3.53,0,0,0,.18-4.95l-11.28-12.34A3.53,3.53,0,0,0,670.13,365.17Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M690.87,385.92l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5L696,386A3.53,3.53,0,0,0,690.87,385.92Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M712.65,407.69l-11.09,11.23a3.54,3.54,0,0,0,0,4.95l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.08-10.46a3.53,3.53,0,0,0,.18-4.95l-11.28-12.34A3.53,3.53,0,0,0,712.65,407.69Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M734.67,429.72,723.59,441a3.54,3.54,0,0,0,0,4.95l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.07-10.46a3.52,3.52,0,0,0,.19-4.95L739.8,429.82A3.54,3.54,0,0,0,734.67,429.72Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M756.7,451.75,745.62,463a3.54,3.54,0,0,0,0,5l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.07-10.46a3.52,3.52,0,0,0,.19-4.95l-11.28-12.34A3.54,3.54,0,0,0,756.7,451.75Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M780.12,472.37l-13.77,13.95a1.66,1.66,0,0,0,0,2.32l13.87,14.21a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,780.12,472.37Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M802.15,494.4l-13.77,14a1.65,1.65,0,0,0,0,2.31l13.87,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,802.15,494.4Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M821.65,513.9l-13.77,14a1.65,1.65,0,0,0,0,2.31l13.87,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32L824.05,514A1.66,1.66,0,0,0,821.65,513.9Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M843.49,535.74l-13.77,13.94a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,843.49,535.74Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M864.64,556.89l-13.77,13.94a1.65,1.65,0,0,0,0,2.32l13.87,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32L867,556.94A1.66,1.66,0,0,0,864.64,556.89Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M885.79,578,872,592a1.65,1.65,0,0,0,0,2.31l13.87,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,885.79,578Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M906.94,599.19l-13.77,13.95a1.66,1.66,0,0,0,0,2.32L907,629.67a1.66,1.66,0,0,0,2.32.05l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,906.94,599.19Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M650,385.31l-11.08,11.22a3.53,3.53,0,0,0,0,5l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.07-10.45a3.54,3.54,0,0,0,.19-5L655.12,385.4A3.54,3.54,0,0,0,650,385.31Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M606,429.3l-11.09,11.22a3.54,3.54,0,0,0,0,5L606.19,457a3.53,3.53,0,0,0,4.95.11l11.08-10.46a3.52,3.52,0,0,0,.18-4.95L611.12,429.4A3.53,3.53,0,0,0,606,429.3Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M670.74,406.05l-11.09,11.22a3.53,3.53,0,0,0,0,5l11.28,11.57a3.54,3.54,0,0,0,5,.11L687,423.44a3.55,3.55,0,0,0,.18-5l-11.28-12.33A3.52,3.52,0,0,0,670.74,406.05Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M692.51,427.83l-11.08,11.22a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.07-10.45a3.54,3.54,0,0,0,.19-5l-11.28-12.34A3.54,3.54,0,0,0,692.51,427.83Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M714.54,449.85l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.52,3.52,0,0,0,4.95.1l11.08-10.45a3.54,3.54,0,0,0,.19-5L719.67,450A3.55,3.55,0,0,0,714.54,449.85Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M627.45,449.34l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.33A3.52,3.52,0,0,0,627.45,449.34Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M649.22,471.11l-11.08,11.23a3.53,3.53,0,0,0,0,5l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.07-10.45a3.54,3.54,0,0,0,.19-5l-11.28-12.34A3.54,3.54,0,0,0,649.22,471.11Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M671.25,493.14l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.07-10.46a3.52,3.52,0,0,0,.19-4.95l-11.28-12.34A3.54,3.54,0,0,0,671.25,493.14Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M736.57,471.88l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.53,3.53,0,0,0,.18-5L741.69,472A3.53,3.53,0,0,0,736.57,471.88Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M758.6,493.91l-11.09,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.46a3.52,3.52,0,0,0,.18-4.95L763.72,494A3.53,3.53,0,0,0,758.6,493.91Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M782,514.53l-13.77,14a1.65,1.65,0,0,0,0,2.32L782.11,545a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,782,514.53Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M801.52,534l-13.77,14a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,801.52,534Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M823.36,555.87l-13.78,14a1.65,1.65,0,0,0,0,2.31l13.86,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.09-2.32l-13.86-15.16A1.66,1.66,0,0,0,823.36,555.87Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M844.51,577l-13.77,14a1.65,1.65,0,0,0,0,2.32l13.86,14.21a1.67,1.67,0,0,0,2.33,0l13.76-13a1.65,1.65,0,0,0,.09-2.32l-13.86-15.16A1.66,1.66,0,0,0,844.51,577Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M671.58,448.76,660.49,460a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.52,3.52,0,0,0,5,.1l11.08-10.45a3.54,3.54,0,0,0,.18-5L676.7,448.86A3.52,3.52,0,0,0,671.58,448.76Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M693.61,470.79,682.52,482a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.52,3.52,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.33A3.52,3.52,0,0,0,693.61,470.79Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M715.64,492.82,704.55,504a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.34A3.53,3.53,0,0,0,715.64,492.82Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M737.67,514.85l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.34A3.53,3.53,0,0,0,737.67,514.85Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M761.09,535.47l-13.78,13.94a1.66,1.66,0,0,0,0,2.32l13.86,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.09-2.32l-13.86-15.17A1.65,1.65,0,0,0,761.09,535.47Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M780.59,555l-13.78,13.94a1.66,1.66,0,0,0,0,2.32l13.86,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.09-2.32L783,555A1.65,1.65,0,0,0,780.59,555Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M802.42,576.8l-13.77,14a1.66,1.66,0,0,0,0,2.32l13.86,14.21a1.65,1.65,0,0,0,2.32.05l13.77-13a1.65,1.65,0,0,0,.09-2.32l-13.87-15.16A1.66,1.66,0,0,0,802.42,576.8Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M823.58,598,809.8,611.9a1.66,1.66,0,0,0,0,2.32l13.86,14.21a1.65,1.65,0,0,0,2.32.05l13.77-13a1.65,1.65,0,0,0,.09-2.32L826,598A1.64,1.64,0,0,0,823.58,598Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M865.66,598.17l-13.77,14a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32.05l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,865.66,598.17Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M886.81,619.33,873,633.27a1.65,1.65,0,0,0,0,2.32L886.9,649.8a1.65,1.65,0,0,0,2.32.05l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.65,1.65,0,0,0,886.81,619.33Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M779.66,599.57l-13,13.13a2.22,2.22,0,0,0,0,3.11l13.09,13.42a2.22,2.22,0,0,0,3.11.06l13-12.23A2.23,2.23,0,0,0,796,614l-13.09-14.32A2.23,2.23,0,0,0,779.66,599.57Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M800.81,620.72l-13,13.13a2.22,2.22,0,0,0,0,3.11l13.09,13.42a2.22,2.22,0,0,0,3.11.06l13-12.23a2.22,2.22,0,0,0,.12-3.11L804,620.78A2.23,2.23,0,0,0,800.81,620.72Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M822,641.87,809,655a2.22,2.22,0,0,0,0,3.11l13.09,13.42a2.22,2.22,0,0,0,3.11.07l13-12.24a2.21,2.21,0,0,0,.12-3.11l-13.09-14.31A2.21,2.21,0,0,0,822,641.87Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M843.53,662.6l-13.77,13.95a1.66,1.66,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,843.53,662.6Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M628.2,405.94,616.38,418a3.53,3.53,0,0,0,0,5l33,32.67a3.54,3.54,0,0,0,4.91.06l12.32-11.59a3.54,3.54,0,0,0,.07-5.09l-33.5-33.14A3.53,3.53,0,0,0,628.2,405.94Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M844.21,619.28,829.76,634a1.68,1.68,0,0,0,0,2.34l35.61,35.25a1.65,1.65,0,0,0,2.3,0l15.06-14.17a1.65,1.65,0,0,0,0-2.38l-36.23-35.84A1.66,1.66,0,0,0,844.21,619.28Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M694,513.82l-13.79,13.66a1.64,1.64,0,0,0,0,2.33l76.79,78.71a1.66,1.66,0,0,0,2.32,0l15-14.15a1.65,1.65,0,0,0,0-2.37l-78-78.21A1.66,1.66,0,0,0,694,513.82Z",
                        transform: "translate(-43.1 -37.14)"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M670.13,362.75,659,374a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.54,3.54,0,0,0,5,.1l11.08-10.46a3.53,3.53,0,0,0,.18-4.95l-11.28-12.34A3.53,3.53,0,0,0,670.13,362.75Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M690.87,383.5l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5L696,383.59A3.53,3.53,0,0,0,690.87,383.5Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M712.65,405.27,701.56,416.5a3.54,3.54,0,0,0,0,4.95L712.83,433a3.54,3.54,0,0,0,5,.1l11.08-10.46a3.53,3.53,0,0,0,.18-5l-11.28-12.34A3.53,3.53,0,0,0,712.65,405.27Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M734.67,427.3l-11.08,11.22a3.55,3.55,0,0,0,0,5l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.07-10.46a3.52,3.52,0,0,0,.19-4.95L739.8,427.4A3.54,3.54,0,0,0,734.67,427.3Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M756.7,449.33l-11.08,11.22a3.54,3.54,0,0,0,0,5l11.29,11.56a3.54,3.54,0,0,0,5,.11l11.07-10.46a3.52,3.52,0,0,0,.19-5l-11.28-12.34A3.54,3.54,0,0,0,756.7,449.33Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M780.12,470,766.35,483.9a1.65,1.65,0,0,0,0,2.31l13.87,14.22a1.66,1.66,0,0,0,2.32.05l13.77-13a1.65,1.65,0,0,0,.08-2.32L782.52,470A1.66,1.66,0,0,0,780.12,470Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M802.15,492l-13.77,13.95a1.65,1.65,0,0,0,0,2.31l13.87,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32L804.55,492A1.66,1.66,0,0,0,802.15,492Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M821.65,511.48l-13.77,13.95a1.65,1.65,0,0,0,0,2.31L821.74,542a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,821.65,511.48Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M843.49,533.32l-13.77,13.94a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32.05l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.17A1.66,1.66,0,0,0,843.49,533.32Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M864.64,554.47l-13.77,13.94a1.65,1.65,0,0,0,0,2.32L864.73,585a1.66,1.66,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32L867,554.52A1.66,1.66,0,0,0,864.64,554.47Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M885.79,575.62l-13.77,14a1.65,1.65,0,0,0,0,2.31l13.87,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,885.79,575.62Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M906.94,596.77l-13.77,14a1.66,1.66,0,0,0,0,2.32L907,627.25a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,906.94,596.77Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M650,382.89l-11.08,11.22a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.07-10.45a3.54,3.54,0,0,0,.19-5L655.12,383A3.54,3.54,0,0,0,650,382.89Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M606,426.88,594.91,438.1a3.54,3.54,0,0,0,0,5l11.29,11.56a3.53,3.53,0,0,0,4.95.11l11.08-10.46a3.54,3.54,0,0,0,.18-5L611.12,427A3.52,3.52,0,0,0,606,426.88Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M670.74,403.63l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1L687,421a3.55,3.55,0,0,0,.18-5l-11.28-12.33A3.52,3.52,0,0,0,670.74,403.63Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M692.51,425.4l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.07-10.45a3.54,3.54,0,0,0,.19-5L697.64,425.5A3.55,3.55,0,0,0,692.51,425.4Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M714.54,447.43l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,4.95.1l11.08-10.45a3.54,3.54,0,0,0,.19-5l-11.28-12.34A3.54,3.54,0,0,0,714.54,447.43Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M627.45,446.92l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5L632.57,447A3.52,3.52,0,0,0,627.45,446.92Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M649.22,468.69l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.07-10.45a3.54,3.54,0,0,0,.19-5l-11.28-12.34A3.54,3.54,0,0,0,649.22,468.69Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M671.25,490.72,660.17,502a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.54,3.54,0,0,0,5,.1l11.07-10.46a3.52,3.52,0,0,0,.19-4.95l-11.28-12.34A3.54,3.54,0,0,0,671.25,490.72Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M736.57,469.46l-11.08,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.46a3.52,3.52,0,0,0,.18-5l-11.28-12.34A3.53,3.53,0,0,0,736.57,469.46Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M758.6,491.49l-11.09,11.23a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.46a3.52,3.52,0,0,0,.18-4.95l-11.28-12.34A3.53,3.53,0,0,0,758.6,491.49Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M782,512.11l-13.77,13.95a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,782,512.11Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M801.52,531.61l-13.77,13.95a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,801.52,531.61Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M823.36,553.45,809.58,567.4a1.65,1.65,0,0,0,0,2.31l13.86,14.22a1.66,1.66,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.09-2.32L825.76,553.5A1.66,1.66,0,0,0,823.36,553.45Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M844.51,574.6l-13.77,13.95a1.65,1.65,0,0,0,0,2.32l13.86,14.21a1.67,1.67,0,0,0,2.33,0l13.76-13a1.65,1.65,0,0,0,.09-2.32l-13.86-15.16A1.66,1.66,0,0,0,844.51,574.6Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M671.58,446.34l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.29,11.57a3.52,3.52,0,0,0,5,.1l11.08-10.45a3.54,3.54,0,0,0,.18-5L676.7,446.44A3.52,3.52,0,0,0,671.58,446.34Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M693.61,468.37l-11.09,11.22a3.53,3.53,0,0,0,0,5l11.29,11.57a3.52,3.52,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.33A3.52,3.52,0,0,0,693.61,468.37Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M715.64,490.4l-11.09,11.22a3.53,3.53,0,0,0,0,4.95l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.34A3.53,3.53,0,0,0,715.64,490.4Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M737.67,512.42l-11.09,11.23a3.53,3.53,0,0,0,0,5l11.28,11.57a3.53,3.53,0,0,0,5,.1l11.08-10.45a3.55,3.55,0,0,0,.18-5l-11.28-12.34A3.54,3.54,0,0,0,737.67,512.42Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M761.09,533.05,747.31,547a1.66,1.66,0,0,0,0,2.32l13.86,14.21a1.65,1.65,0,0,0,2.32.05l13.77-13a1.66,1.66,0,0,0,.09-2.33l-13.86-15.16A1.65,1.65,0,0,0,761.09,533.05Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M780.59,552.55l-13.78,13.94a1.66,1.66,0,0,0,0,2.32L780.67,583a1.65,1.65,0,0,0,2.32.05l13.77-13a1.66,1.66,0,0,0,.09-2.33L783,552.59A1.65,1.65,0,0,0,780.59,552.55Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M802.42,574.38l-13.77,14a1.66,1.66,0,0,0,0,2.32l13.86,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.09-2.32l-13.87-15.16A1.66,1.66,0,0,0,802.42,574.38Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M823.58,595.54,809.8,609.48a1.66,1.66,0,0,0,0,2.32L823.66,626a1.65,1.65,0,0,0,2.32,0l13.77-13a1.65,1.65,0,0,0,.09-2.32L826,595.58A1.64,1.64,0,0,0,823.58,595.54Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M865.66,595.75l-13.77,14a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32L868.06,595.8A1.66,1.66,0,0,0,865.66,595.75Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M886.81,616.9l-13.77,14a1.65,1.65,0,0,0,0,2.32l13.87,14.21a1.65,1.65,0,0,0,2.32,0l13.77-13a1.66,1.66,0,0,0,.08-2.32L889.21,617A1.66,1.66,0,0,0,886.81,616.9Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M779.66,597.15l-13,13.13a2.22,2.22,0,0,0,0,3.11l13.09,13.42a2.22,2.22,0,0,0,3.11.06l13-12.23a2.23,2.23,0,0,0,.12-3.11l-13.09-14.32A2.23,2.23,0,0,0,779.66,597.15Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M800.81,618.3l-13,13.13a2.22,2.22,0,0,0,0,3.11L800.93,648A2.22,2.22,0,0,0,804,648l13-12.23a2.22,2.22,0,0,0,.12-3.11L804,618.36A2.23,2.23,0,0,0,800.81,618.3Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M822,639.45l-13,13.13a2.22,2.22,0,0,0,0,3.11l13.09,13.42a2.21,2.21,0,0,0,3.11.06l13-12.23a2.21,2.21,0,0,0,.12-3.11l-13.09-14.32A2.22,2.22,0,0,0,822,639.45Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M843.53,660.18l-13.77,14a1.66,1.66,0,0,0,0,2.32l13.87,14.21a1.66,1.66,0,0,0,2.32.05l13.77-13a1.65,1.65,0,0,0,.08-2.32l-13.86-15.16A1.66,1.66,0,0,0,843.53,660.18Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M628.2,403.52l-11.82,12.07a3.53,3.53,0,0,0,0,5l33,32.67a3.54,3.54,0,0,0,4.91.06l12.32-11.59a3.54,3.54,0,0,0,.07-5.09l-33.5-33.14A3.53,3.53,0,0,0,628.2,403.52Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M844.21,616.86l-14.45,14.75a1.68,1.68,0,0,0,0,2.34l35.61,35.25a1.65,1.65,0,0,0,2.3,0l15.06-14.17a1.65,1.65,0,0,0,0-2.38l-36.23-35.84A1.65,1.65,0,0,0,844.21,616.86Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M694,511.4l-13.79,13.66a1.64,1.64,0,0,0,0,2.33l76.79,78.71a1.66,1.66,0,0,0,2.32,0l15-14.15a1.65,1.65,0,0,0,0-2.37l-78-78.21A1.66,1.66,0,0,0,694,511.4Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464a5f"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M639.83,521,579.2,581.23a9,9,0,0,0-.1,12.66L691.24,709.05a9,9,0,0,0,12.76.14l62.43-61.41a9,9,0,0,0,.05-12.77L652.54,521A9,9,0,0,0,639.83,521Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M639.83,518.53,579.2,578.81a9,9,0,0,0-.1,12.66L691.24,706.63a9,9,0,0,0,12.76.14l62.43-61.41a9,9,0,0,0,.05-12.77l-113.94-114A9,9,0,0,0,639.83,518.53Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#939498"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M698.07,202.46,682.72,309.78,967.14,593.29l14.48-106.38a18.8,18.8,0,0,0-5.35-15.83L704.38,200.34A3.72,3.72,0,0,0,698.07,202.46Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "295.09",
                cy: "682.36",
                rx: "23.11",
                ry: "3.17",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "206.55",
                cy: "691.34",
                rx: "23.11",
                ry: "3.17",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "102.27",
                cy: "679.19",
                rx: "23.11",
                ry: "3.17",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "241.99",
                cy: "716.9",
                rx: "16.43",
                ry: "2.26",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                cx: "150.1",
                cy: "714.64",
                rx: "16.43",
                ry: "2.26",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M249.16,727.77S281.57,621.51,244.08,579c-28-31.84-59.87-28-74.13-24.09a26.34,26.34,0,0,0-17,14.12c-5,10.76-4.08,28.21,31.1,48.58,58.92,34.11,62.58,80.9,62.58,80.9Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M175,569.93s95.56,29.87,74.14,157.84",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M230.83,580.64s-13.15,8.86-9,22.19",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M184.61,588.53s8-8.18,17.83-3.67",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M222.38,629.68s14.12-7.17,17.78,1.81",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M257.33,644.62s-10.61-.84-10.8,4.23",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M250.47,728.62s-38-77.23-48.4-75.54c-4.95.8-7.23,5.67-8.26,10.57a31.16,31.16,0,0,0,2.06,18.8C201.26,694.81,215.73,718.28,250.47,728.62Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M202.36,667.73s39.84,57.79,47.54,60.32",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "155.59",
                y1: "639.61",
                x2: "164.89",
                y2: "639.61",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "166.73",
                y1: "660.75",
                x2: "181.31",
                y2: "661.37",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "175.6",
                y1: "643.84",
                x2: "174.02",
                y2: "651.43",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "191.11",
                y1: "666.95",
                x2: "190.82",
                y2: "673.85",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M249.34,728.62s38-77.23,48.39-75.54c5,.8,7.24,5.67,8.27,10.57a31.08,31.08,0,0,1-2.07,18.8C298.55,694.81,284.08,718.28,249.34,728.62Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M297.45,667.73s-39.85,57.79-47.55,60.32",
                transform: "translate(-43.1 -37.14)",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "258.01",
                y1: "639.61",
                x2: "248.71",
                y2: "639.61",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "246.87",
                y1: "660.75",
                x2: "232.29",
                y2: "661.37",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "238",
                y1: "643.84",
                x2: "239.58",
                y2: "651.43",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "222.5",
                y1: "666.95",
                x2: "222.78",
                y2: "673.85",
                fill: "none",
                stroke: "#565987",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M184.15,746.65a6.55,6.55,0,0,1-2.16-3.26,2.9,2.9,0,0,1,1.51-3.32c1.39-.53,2.87.43,4,1.4s2.42,2.08,3.89,1.88a5.9,5.9,0,0,1-1.83-5.53,2.25,2.25,0,0,1,.51-1.13c.77-.82,2.16-.47,3.08.18,2.94,2.06,3.75,6,3.77,9.63a18.14,18.14,0,0,0,.05-4,4.09,4.09,0,0,1,1.49-3.51,4.55,4.55,0,0,1,2.27-.53,4.68,4.68,0,0,1,3.69,1c1.12,1.2.83,3.2-.15,4.52a14.22,14.22,0,0,1-3.81,3.06,8.38,8.38,0,0,0-2.73,2.6,2.77,2.77,0,0,0-.2.46h-8.26A23.05,23.05,0,0,1,184.15,746.65Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M328.82,715.55a6.61,6.61,0,0,1-2.17-3.26,2.91,2.91,0,0,1,1.51-3.32c1.39-.53,2.87.43,4,1.4s2.41,2.08,3.88,1.87a5.92,5.92,0,0,1-1.83-5.53,2.35,2.35,0,0,1,.51-1.12c.77-.83,2.16-.47,3.09.18,2.93,2.06,3.75,6,3.76,9.62a18.06,18.06,0,0,0,.06-4,4,4,0,0,1,1.49-3.51,4.4,4.4,0,0,1,2.27-.53,4.7,4.7,0,0,1,3.68,1c1.12,1.2.83,3.21-.14,4.53a14.23,14.23,0,0,1-3.82,3,8.66,8.66,0,0,0-2.72,2.6,2.22,2.22,0,0,0-.2.47h-8.27A23,23,0,0,1,328.82,715.55Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M280.6,746.65a6.55,6.55,0,0,1-2.16-3.26,2.9,2.9,0,0,1,1.51-3.32c1.39-.53,2.87.43,4,1.4s2.42,2.08,3.89,1.88a5.9,5.9,0,0,1-1.83-5.53,2.25,2.25,0,0,1,.51-1.13c.77-.82,2.16-.47,3.08.18,2.93,2.06,3.75,6,3.77,9.63a18.14,18.14,0,0,0,.05-4A4.09,4.09,0,0,1,294.9,739a4.55,4.55,0,0,1,2.27-.53,4.68,4.68,0,0,1,3.69,1c1.12,1.2.83,3.2-.15,4.52a14.22,14.22,0,0,1-3.81,3.06,8.38,8.38,0,0,0-2.73,2.6,2.77,2.77,0,0,0-.2.46h-8.26A23.05,23.05,0,0,1,280.6,746.65Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M143.87,683.78s-3.1,4.05,1.43,10.16,8.26,11.28,6.75,15.09c0,0-6.83-11.36-12.39-11.51S137.75,690.61,143.87,683.78Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M143.87,683.78a5.1,5.1,0,0,0-.63,1.27c-5.43,6.37-8.32,12.32-3.1,12.47,4.85.13,10.68,8.82,12.07,11a4.16,4.16,0,0,1-.16.5s-6.83-11.36-12.39-11.51S137.75,690.61,143.87,683.78Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M138.11,688.94c0,1.43.16,2.58.36,2.58s.36-1.15.36-2.58-.2-.75-.4-.75S138.11,687.51,138.11,688.94Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ffd037"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M136.14,690.64c1.25.68,2.34,1.1,2.43.92s-.84-.86-2.09-1.55-.76-.18-.85,0S134.89,690,136.14,690.64Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ffd037"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M160.23,683.78s3.09,4.05-1.43,10.16-8.26,11.28-6.75,15.09c0,0,6.83-11.36,12.39-11.51S166.34,690.61,160.23,683.78Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#1473fa"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M160.23,683.78a5.1,5.1,0,0,1,.63,1.27c5.42,6.37,8.31,12.32,3.1,12.47-4.86.13-10.68,8.82-12.08,11a4.2,4.2,0,0,0,.17.5s6.83-11.36,12.39-11.51S166.34,690.61,160.23,683.78Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M166,688.94c0,1.43-.16,2.58-.35,2.58s-.36-1.15-.36-2.58.2-.75.4-.75S166,687.51,166,688.94Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ffd037"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M168,690.64c-1.25.68-2.34,1.1-2.44.92s.85-.86,2.1-1.55.76-.18.85,0S169.21,690,168,690.64Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ffd037"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M165,708.5s-8.66-.27-11.27-2.12-13.32-4.08-14-1.1-13,14.82-3.23,14.9,22.71-1.52,25.32-3.11S165,708.5,165,708.5Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#a8a8a8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M136.35,719.14c9.78.08,22.72-1.52,25.32-3.11,2-1.21,2.77-5.54,3-7.54H165s-.55,7-3.15,8.57-15.55,3.19-25.32,3.11c-2.82,0-3.8-1-3.75-2.51C133.18,718.56,134.25,719.12,136.35,719.14Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M215.56,371.22C215.4,375.42,219,381,219,381c1.1,2.65,14.59,14.93,14.59,14.93l10,6.68a56,56,0,0,1-6.34,4.05c-4.87,2.49-7.53,10.73-7.53,10.73s-7.38,17.73,7.53,20.22l.28.05,1.34,1.45c3.3,3.56,7.33,7.81,8.73,8.76,2.51,1.71,10.2,14.62,10.2,14.62s8.15,13.38,19,14,10.82-11.82,10-12.6a5,5,0,0,1-.67-1.7c2.59,4.17,6.12,9.65,7.26,10.41,1.88,1.24,8,11,8,11s7.69,17.57,8.94,19.44,3.45,11.2,3.45,11.2,4.4,12.9,6.44,14.62,3.13,7.93,3.13,7.93,6.43,9.33,7.53,10.88a66.16,66.16,0,0,1,3.45,7s3.45,5.6,3.45,7.78,7.22,5.9,7.22,5.9,5.18,6.07,8.16,7.16,5.8,8.24,6.27,7.77a1.87,1.87,0,0,1,.89-.18l1.22,1.22c4.76,4.74,14.27,14.19,16.71,16.38,3.3,3,10.83,3.42,17.1,2.18,3.22-.64,7.14-3.69,10.19-6.51a7,7,0,0,0,.12-10.11c-3-2.89-6.47-6.06-8-6.55-2.82-.94-10.82-6.53-14.58-11.2-2-2.43-5.51-4.74-8.46-6.39l-.36-.21a31.21,31.21,0,0,1-.91-5.22s5.18-11.66,2.35-12.28-13.49-19.13-13.49-19.13c-.15-14-13-25.82-13-25.82s-6.43-15.24-8.31-18.5a5,5,0,0,1,0-5.6s-3.61-2.8-4.23-4.2-3.61-12-3.61-12-3.61-6.38-3.77-9.33-7.19-11.18-7.19-11.18-2.85-13.86-6-16.35c-.61-.48-.52-2.31,0-4.94l.15-.16.48-.47.14-.14a51.16,51.16,0,0,0,4.06-4.51l.06-.08c.2-.25.39-.49.57-.74,4.55-6.22,7.37-21,7.37-21s.9-.42,2.07-1.06a19.74,19.74,0,0,0,4.52-3.11,1,1,0,0,0,.16-.24.2.2,0,0,0,0-.08,1.54,1.54,0,0,0,.08-.19.52.52,0,0,0,0-.11,1.43,1.43,0,0,0,0-.22s0-.07,0-.11v-.36c0-.13,0-.26-.05-.4a.43.43,0,0,1,0-.05c0-.12-.05-.24-.08-.37l0-.12c0-.11-.06-.22-.1-.34a.93.93,0,0,0,0-.13l-.12-.37a.36.36,0,0,1,0-.09c-.19-.5-.42-1-.68-1.54v0l-.27-.51h0c-.49-.93-1-1.84-1.54-2.63l-.08-.12c1.1-3.1,3.23-8.56,5.21-10.52,2.82-2.8-1.57-17.73-1.57-17.73s-.94-10.57-2.2-13.68,0-3.56-1-6.22c-1.21-3-2.09-2.8-.53-9.64.59-2.58,1.5-5.42,2.32-8.07l1,.92c5.8,5.47,14.91,12.59,14.91,12.59s17.88,16.17,19.45,16.64,6.28,16.33,6.28,16.33-1.1,26.28,13.33,27.37c6.13.46,8.73-4.28,9.67-9.87a29.78,29.78,0,0,0-7.07-24.41L384,342l-7.69-13.68A139.34,139.34,0,0,1,364,303.88a68.09,68.09,0,0,0-15.08-22.29l-.62-.61.8-.74s-1.26-10.26-2.2-11.5-4.39-8.4-4.39-10-2.2-1.86-3.45-3.73c0,0-2.2-4.35-4.24-5a3,3,0,0,1-1-.64A22.52,22.52,0,0,0,321,243.82l-1.25-.12a70,70,0,0,0-8.34.12l-.07,0c-2.13-.64-3.74-2.3-5.39-3.78a42.39,42.39,0,0,0-8.77-6.05c-3.25-1.69-6.93-3-10.56-2.38-2.84.46-5.38,2-8.15,2.81-3.94,1.11-8.78.88-11.26,4.11-1.19,1.54-1.53,3.59-2.64,5.18-1.58,2.26-4.48,3.31-6.11,5.54a8.5,8.5,0,0,0-1.41,5.52,15.34,15.34,0,0,0,.56,4.67,24.34,24.34,0,0,1,.91,4,5,5,0,0,1-.11.66c-.22,1-.73,1.84-.93,2.81a5.07,5.07,0,0,0-.05,1.6c-.3,2.39,1.24,4.66,2.28,6.88a18.41,18.41,0,0,1,1.57,5.48,51.78,51.78,0,0,0-7.59,2.91c-3.27,1.58-6.56,3.72-8.44,6.46a42.75,42.75,0,0,1-11.3,10.91,88.86,88.86,0,0,0-3.45,10.24c-.94,4-1.88,10.57-4.7,14S221.68,339,221.68,339s-3.77,6.06-3.77,7.31-.47,7,0,8.7a5.09,5.09,0,0,0,1.09,1.42l-.28,1C217.42,362,215.66,368.59,215.56,371.22ZM304,301.17c-.08.35-.17.68-.28,1,0-.32.05-.63.07-.95ZM268.26,434.09l-.5-.46-.24-.22c0-.12.06-.24.09-.38Zm-26-63.65.2-.37.74-1.34,6-4.9.77.7s-.63,6.53-2.19,6.22c-.36-.07-.52,1.43-.56,3.78C244.39,372.11,242.23,370.44,242.23,370.44Z",
                transform: "translate(-43.1 -37.14)",
                fill: "url(#38c043cc-bff7-4144-86c9-76214eedfc2b)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M296.41,249.31s18.67-1.68,23.11-1.22l1.21.11a21.88,21.88,0,0,1,12.45,5.53,3,3,0,0,0,1,.63c2,.61,4.13,4.9,4.13,4.9s-4.74,37.49-4.74,37.95-9.8,17.44-9.8,17.44l-9.49,3.68-16.37,2.31-.46-7.06s7.88-4.32,7-13.25S296.41,249.31,296.41,249.31Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464353"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M305.59,293.84s-4,18.06,0,23.87-39.48-9.48-39.48-9.48l-8-14.39s3-2.13,6.38-4.88c4.76-3.83,10.46-8.85,10.46-11C275,274.25,305.59,293.84,305.59,293.84Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ecb4b6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M305.59,293.84s-4,18.06,0,23.87-39.48-9.48-39.48-9.48l-8-14.39s3-2.13,6.38-4.88c4.76-3.83,10.46-8.85,10.46-11C275,274.25,305.59,293.84,305.59,293.84Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "253.31",
                cy: "242.04",
                r: "26.63",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "253.31",
                cy: "240.81",
                r: "26.63",
                fill: "#ecb4b6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M330.84,311c.1,1,2,3.07,4.58,5.52,5.66,5.38,14.55,12.39,14.55,12.39s17.45,15.91,19,16.37,6.12,16.07,6.12,16.07-1.07,25.86,13,26.93c6,.45,8.52-4.2,9.44-9.71a29.49,29.49,0,0,0-6.89-24l-8.36-9.73-7.5-13.47a136.83,136.83,0,0,1-12.09-24A66.93,66.93,0,0,0,348,285.37c-1.57-1.56-2.58-2.39-2.58-2.39l-7,2.14S330.54,307.92,330.84,311Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ecb4b6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M357.62,580.63l2.68,2.69c4.64,4.67,13.92,14,16.3,16.12,3.21,2.91,10.56,3.37,16.68,2.14,3.14-.62,7-3.63,9.94-6.4a6.88,6.88,0,0,0,.11-9.95c-2.9-2.84-6.3-6-7.76-6.45-2.75-.92-10.56-6.42-14.23-11-1.91-2.39-5.37-4.66-8.24-6.29-2.64-1.49-4.77-2.43-4.77-2.43Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#c17174"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M361.4,580.63s.89.91,2.27,2.29c3.95,4,11.84,11.88,13.87,13.71,2.73,2.47,9,2.86,14.18,1.82,2.34-.47,5.13-2.48,7.49-4.56a6.89,6.89,0,0,0,.25-10.14c-2.26-2.17-4.68-4.32-5.79-4.69-2.34-.78-9-5.47-12.1-9.37a25.69,25.69,0,0,0-7-5.35c-2.24-1.27-4.05-2.07-4.05-2.07Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M236,435.24s2.1,2.37,4.65,5.15c3.21,3.51,7.15,7.69,8.51,8.62,2.45,1.69,9.95,14.39,9.95,14.39s8,13.16,18.52,13.77,10.56-11.63,9.79-12.39-1.83-7.66-3.36-12.71c-1.16-3.82-10.65-12.9-15.19-17.09-1.46-1.35-2.41-2.19-2.41-2.19Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#c17174"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M238.25,437s1.9,2.16,4.23,4.7c2.93,3.2,6.52,7,7.76,7.86,2.24,1.54,9.07,13.12,9.07,13.12s7.26,12,16.89,12.55,9.62-10.6,8.93-11.3-1.68-7-3.07-11.58c-1.06-3.48-9.71-11.76-13.85-15.58-1.33-1.23-2.2-2-2.2-2Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M236,435.24s2.1,2.37,4.65,5.15c13.44,2,19.69-.25,19.69-.25s6.27-2.76,7.65-2.91c.35,0,.6-.91.88-2.25-1.46-1.35-2.41-2.19-2.41-2.19Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M252.19,399.13S243.77,406,239,408.46,231.68,419,231.68,419s-7.19,17.45,7.34,19.89,21.28,0,21.28,0,6.27-2.75,7.65-2.9,1.37-13.32,6.42-17.3,16.68-13,16.68-13Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#5e5a6b"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M252.19,399.13S243.77,406,239,408.46,231.68,419,231.68,419s-7.19,17.45,7.34,19.89,21.28,0,21.28,0,6.27-2.75,7.65-2.9,1.37-13.32,6.42-17.3,16.68-13,16.68-13Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M330.83,378.16s6,8.17,4.14,10.13-6.42,4.1-6.42,4.1-2.76,14.54-7.2,20.66-13.15,12.86-13.15,12.86l6.11-34.13Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#5e5a6b"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M308.21,425.91a101,101,0,0,0,7.82-6.86,49,49,0,0,0,5.32-6c4.44-6.12,7.2-20.66,7.2-20.66s4.59-2.14,6.42-4.1c1.12-1.19-.65-4.66-2.21-7.21-1-1.66-1.92-2.92-1.92-2.92l-8.67,7.14-7.86,6.48L312,405Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M357.62,580.63l2.68,2.69c1.69,0,4.21.21,4.21.21s12.39-14.85,10.4-17.45a12.68,12.68,0,0,1-1.81-4.61c-2.64-1.49-4.77-2.43-4.77-2.43Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M263.05,423.92c0,2.6,20.81,34.43,20.81,34.43s8.11,13.77,9.95,15,7.8,10.86,7.8,10.86,7.5,17.29,8.73,19.13,3.36,11,3.36,11,4.29,12.7,6.28,14.38,3.06,7.81,3.06,7.81,6.27,9.18,7.34,10.71a65.8,65.8,0,0,1,3.37,6.88s3.37,5.51,3.37,7.66,7,5.81,7,5.81,5,6,7.95,7,5.67,8.11,6.12,7.65,5.67,0,5.67,0,12.39-14.84,10.4-17.44-2.45-8.73-2.45-8.73,5-11.47,2.3-12.08S361,525.22,361,525.22c-.15-13.77-12.7-25.4-12.7-25.4s-6.28-15-8.11-18.21a4.94,4.94,0,0,1,0-5.51s-3.52-2.75-4.13-4.13-3.52-11.78-3.52-11.78-3.52-6.28-3.68-9.19-7-11-7-11-2.78-13.63-5.84-16.08c-.6-.48-.5-2.27,0-4.87,1.41-6.85,5.9-19.23,9-27.34,1.77-4.64,3.08-7.89,3.08-7.89l-5.92,1.48-50.4,12.6s-2.73,7.33-5.13,14.24C264.74,417.58,263.05,422.77,263.05,423.92Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#5e5a6b"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M360.84,549.25s15.76-6.12,8,1.68-22.64,7.35-22.64,7.35Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M333.9,518s-8.87,4.9-7.19,9.64S333.9,518,333.9,518Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M325,480.08a9.28,9.28,0,0,1-8.73,4.74C309.88,484.67,325,480.08,325,480.08Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M241.78,412s3.37,10.41,0,11.17S241.78,412,241.78,412Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M330.84,311c.1,1,2,3.07,4.58,5.52,1.46-4.7,2.82-9,2-10.42-1.22-2.14,3.56-6.73,2.7-9.79-.66-2.34,5.1-8.27,7.84-10.92-1.57-1.56-2.58-2.39-2.58-2.39l-7,2.14S330.54,307.92,330.84,311Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M266.64,412.14c5.81-.32,19.36-4.52,19.36-4.52S301.71,407.1,312,405c5-1,8.64-2.43,8.64-4.32,0-2.53,2.07-5.92,4.42-9a71.7,71.7,0,0,1,5.14-5.83,9.29,9.29,0,0,0,2.13-3.45c.14-.41.31-.87.48-1.35-1-1.66-1.92-2.92-1.92-2.92l-8.67,7.14-50.4,12.6S269,405.23,266.64,412.14Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M249.89,402.19s11.32,6.73,14.69,7.95S286,405.78,286,405.78s34.59-1.14,34.59-7c0-4.49,6.56-11.71,9.56-14.77a9.25,9.25,0,0,0,2.13-3.46c1.05-3,3.17-8.57,5.14-10.54,2.76-2.75-1.53-17.44-1.53-17.44s-.92-10.41-2.14-13.47,0-3.51-1-6.12c-1.18-2.93-2-2.76-.51-9.49s5.2-15.3,4-17.45,3.56-6.73,2.7-9.79,9.23-12.24,9.23-12.24S346.91,274,346,272.72s-4.28-8.26-4.28-9.79-2.15-1.84-3.37-3.67S323,306.7,323,306.7l-20.59,4.64-1.14.25s-11.71.55-19.31-3.67c0,0-13.13-2.14-17.42-23.87a50.31,50.31,0,0,0-9.52,3.44c-3.19,1.55-6.39,3.66-8.23,6.35a41.66,41.66,0,0,1-11,10.74,89.13,89.13,0,0,0-3.37,10.07c-.91,4-1.83,10.41-4.59,13.78s-4,13.46-4,13.46L251.42,367s-.61,6.43-2.14,6.12S249.89,402.19,249.89,402.19Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464353"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M255.06,288.71l14.72,30.69s6.12,4,8.27,1.83,10.25-2.14,10.25-2.14l1.07,2.14,15.51-3.66-2.43-5-1.14.26s-11.71.55-19.31-3.67c0,0-13.13-2.15-17.42-23.88A50.31,50.31,0,0,0,255.06,288.71Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M255.06,287.49l14.72,30.68s6.12,4,8.27,1.84,10.25-2.14,10.25-2.14l1.07,2.14,15.51-3.67-2.43-5-1.14.25s-11.71.55-19.31-3.67c0,0-13.13-2.14-17.42-23.87A50.31,50.31,0,0,0,255.06,287.49Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464353"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M261.52,376.78S294,387,296.41,388.29,261.67,380.3,261.52,376.78Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M282,392.39s-8.54,4.75-11.6,3.06S282,392.39,282,392.39Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M308.81,335.63s8.22,43.91-3.93,56.76Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M322.32,269.52a9.2,9.2,0,0,0,.33-12.14c-1.06-1.2-2.45-2.11-3.32-3.46a14.87,14.87,0,0,0-1.62-2.66c-1.58-1.62-4.24-1.19-6.41-1.85s-3.64-2.26-5.25-3.71a41.25,41.25,0,0,0-8.55-6c-3.18-1.66-6.77-2.92-10.31-2.34-2.77.46-5.24,2-7.95,2.77-3.84,1.09-8.57.87-11,4.05-1.15,1.51-1.48,3.52-2.57,5.09-1.54,2.22-4.37,3.26-6,5.45-1.79,2.47-1.6,5.86-.83,8.81.51,1.91,1.23,3.87.78,5.79-.22.94-.71,1.81-.9,2.76-.5,2.48,1.1,4.83,2.17,7.13a18,18,0,0,1,1.66,7.95,3.57,3.57,0,0,0,.25,1.81,3.17,3.17,0,0,0,1.21,1.08l4.6,2.9a2,2,0,0,0,.72.32c.9.14,1.45-.89,2-1.58,1.54-1.84,4.47-1.7,6.64-.66s3.95,2.75,6.13,3.74c5.11,2.33,11,.26,16.53-.81a36.48,36.48,0,0,0,5.59-1.26,26,26,0,0,0,4.9-2.63,17.47,17.47,0,0,0,4.19-3.29,5.91,5.91,0,0,0,1.39-5.42c-.45-1.61-1.89-3.06-1.6-4.85C315.68,273.41,320.31,271.56,322.32,269.52Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M322.32,268.3a9.21,9.21,0,0,0,.33-12.15c-1.06-1.19-2.45-2.11-3.32-3.45a15.32,15.32,0,0,0-1.62-2.67c-1.58-1.61-4.24-1.18-6.41-1.84s-3.64-2.27-5.25-3.72a40.83,40.83,0,0,0-8.55-6c-3.18-1.66-6.77-2.92-10.31-2.34-2.77.46-5.24,2-7.95,2.77-3.84,1.09-8.57.86-11,4-1.15,1.52-1.48,3.53-2.57,5.1-1.54,2.22-4.37,3.26-6,5.45-1.79,2.47-1.6,5.86-.83,8.81.51,1.9,1.23,3.87.78,5.79-.22.94-.71,1.81-.9,2.76-.5,2.48,1.1,4.83,2.17,7.12A18,18,0,0,1,262.6,286a3.61,3.61,0,0,0,.25,1.82,3.34,3.34,0,0,0,1.21,1.08l4.6,2.89a2,2,0,0,0,.72.33c.9.13,1.45-.89,2-1.59,1.54-1.84,4.47-1.69,6.64-.66s3.95,2.75,6.13,3.74c5.11,2.33,11,.26,16.53-.8a37.73,37.73,0,0,0,5.59-1.27,26,26,0,0,0,4.9-2.62,17.51,17.51,0,0,0,4.19-3.3,5.89,5.89,0,0,0,1.39-5.41c-.45-1.62-1.89-3.07-1.6-4.85C315.68,272.18,320.31,270.33,322.32,268.3Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464353"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M217.91,373.57c-.16,4.13,3.36,9.64,3.36,9.64,1.07,2.6,14.23,14.69,14.23,14.69l10.41,7s13.93,8.57,17.22,10.1c1.65.77,3.42,4,4.79,7.16s2.32,6,2.32,6A13.69,13.69,0,0,0,281.87,416c.39-3.94.65-7.48.31-7.55-.77-.15-9.34-6.58-9.34-6.58s-9.94-6.43-13.16-12.85-15.76-16.22-15.76-16.22l.2-.37.72-1.32,1.53-5.05-24-10.71s-.59,1.95-1.35,4.62C219.72,364.47,218,371,217.91,373.57Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#ecb4b6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M221,360a133.11,133.11,0,0,0,14.51,12.37c1.49.87,6.71.33,8.62.09l.72-1.32,1.53-5.05-24-10.71S221.75,357.31,221,360Z",
                transform: "translate(-43.1 -37.14)",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M244.84,341.43s12.24,7.35,11.63,10.56-5.8,14.31-5.8,14.31l-5.83,4.82s-7.5,1.07-9.34,0-14.84-11.78-15.3-13.46,0-7.35,0-8.57,3.67-7.2,3.67-7.2l5.36-9.48Z",
                transform: "translate(-43.1 -37.14)",
                fill: "#464353"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                points: "242.9 370.45 246.5 380.12 240.43 385.86 240.15 387.59 226.68 395.34 222.4 384.53 242.9 370.45",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                points: "242.9 369.84 246.5 379.5 240.43 385.25 240.15 386.98 226.68 394.73 222.4 383.92 242.9 369.84",
                fill: "#5e5a6b"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                opacity: "0.1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M315.38,274.6a3.48,3.48,0,0,1-.2-1.73c.5-3.13,5.13-5,7.14-7a8.73,8.73,0,0,0,2.37-5,9.05,9.05,0,0,1-2.37,7.49C320.47,270.17,316.41,271.89,315.38,274.6Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M258.83,270.68a25.44,25.44,0,0,0,2.11,4.88,18,18,0,0,1,1.67,7.95,3.59,3.59,0,0,0,.24,1.82,3.32,3.32,0,0,0,1.21,1.08l4.6,2.89a1.85,1.85,0,0,0,.73.33c.89.13,1.44-.89,2-1.58,1.54-1.84,4.48-1.7,6.64-.67s3.95,2.75,6.13,3.75c5.12,2.32,11,.26,16.53-.81a36.51,36.51,0,0,0,5.59-1.27,25.65,25.65,0,0,0,4.9-2.62,17.5,17.5,0,0,0,4.2-3.3,6.66,6.66,0,0,0,1.42-2.77,5.94,5.94,0,0,1-1.42,5.22,17.76,17.76,0,0,1-4.2,3.3,25.65,25.65,0,0,1-4.9,2.62,37.73,37.73,0,0,1-5.59,1.27c-5.52,1.06-11.41,3.13-16.53.8-2.18-1-4-2.7-6.13-3.74s-5.1-1.18-6.64.66c-.58.7-1.13,1.72-2,1.59a2,2,0,0,1-.73-.33l-4.6-2.89a3.51,3.51,0,0,1-1.21-1.08,3.61,3.61,0,0,1-.24-1.82,18,18,0,0,0-1.67-7.95c-1.07-2.29-2.67-4.64-2.17-7.12A1.66,1.66,0,0,1,258.83,270.68Z",
                        transform: "translate(-43.1 -37.14)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M258.9,259.89c.49,1.86,1.19,3.79.8,5.67-.18-1.08-.52-2.16-.8-3.22a14.45,14.45,0,0,1-.5-5.18A16.43,16.43,0,0,0,258.9,259.89Z",
                        transform: "translate(-43.1 -37.14)"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "21.63",
                cy: "133.13",
                r: "21.63",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "608.74",
                cy: "41.99",
                r: "21.63",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "951.89",
                cy: "127.44",
                r: "21.63",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "64.88",
                cy: "252.46",
                r: "36.25",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "507.64",
                cy: "789.47",
                r: "36.25",
                fill: "#1473fa",
                opacity: "0.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "990.55",
                cy: "768.57",
                r: "36.25",
                fill: "#1473fa",
                opacity: "0.1"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./contexts/newsletter-modal.context.tsx
var newsletter_modal_context = __webpack_require__(3130);
;// CONCATENATED MODULE: external "react-tsparticles"
const external_react_tsparticles_namespaceObject = require("react-tsparticles");
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_namespaceObject);
;// CONCATENATED MODULE: external "tsparticles"
const external_tsparticles_namespaceObject = require("tsparticles");
;// CONCATENATED MODULE: ./components/ParticlesWrapper.tsx





function ParticlesWrapper() {
    const particlesInit = (0,external_react_.useCallback)(async (engine)=>{
        console.log(engine);
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await (0,external_tsparticles_namespaceObject.loadFull)(engine);
    }, []);
    const particlesLoaded = (0,external_react_.useCallback)(async (container)=>{
        await console.log(container);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "tsparticles",
        init: particlesInit,
        loaded: particlesLoaded,
        style: {
            position: "absolute"
        },
        options: {
            fullScreen: false,
            background: {},
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "##000000"
                },
                links: {
                    color: "#000000",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 0.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.2
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }
    }));
}
/* harmony default export */ const components_ParticlesWrapper = (ParticlesWrapper);

;// CONCATENATED MODULE: ./views/HomePage/BeforeHero.tsx






function BeforeHero() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ParticlesWrapper, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(HeroWrapper, {
                className: "flex items-center justify-center h-screen",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Contents, {
                    className: "mx-auto text-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                            children: "State of the Art"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading2, {
                            className: " sm:block ",
                            children: "Webseiten mieten"
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const HomePage_BeforeHero = (BeforeHero);
const Heading = external_styled_components_default().h1.withConfig({
    componentId: "sc-2e1f9302-0"
})`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const Heading2 = external_styled_components_default().h2.withConfig({
    componentId: "sc-2e1f9302-1"
})`
  font-size: 3.2rem;
  font-weight: bold;
  opacity: 0.8;
  margin-bottom: 4rem;

  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 2.6rem;
  }
`;
const HeroWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-2e1f9302-2"
})`
  padding-top: 5rem;
  ${(0,media/* media */.B)('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
const Contents = external_styled_components_default().div.withConfig({
    componentId: "sc-2e1f9302-3"
})`
  ${(0,media/* media */.B)('<=desktop')} {
    max-width: 100%;
    font-weight: bold;
  }
`;

;// CONCATENATED MODULE: ./views/HomePage/Hero.tsx









function Hero() {
    const { setIsModalOpened  } = (0,newsletter_modal_context/* useNewsletterModalContext */.rd)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HomePage_BeforeHero, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Hero_HeroWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Hero_Contents, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Hero_Heading, {
                                children: "Webseite mieten statt kaufen"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Hero_Description, {
                                children: "Mit unserer Idee des Webseiten mieten anstelle des kaufens ek\xf6nnen Sie die erheblichen Investitionskosten f\xfcr die Erstellung, Pflege und SEO-Optimierung einer Website vermeiden."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Hero_ImageContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeroIllustration, {})
                    })
                ]
            })
        ]
    }));
};
const Hero_HeroWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-ae5ae9f7-0"
})`
  display: flex;
  padding-top: 5rem;

  ${(0,media/* media */.B)('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
const Hero_Contents = external_styled_components_default().div.withConfig({
    componentId: "sc-ae5ae9f7-1"
})`
  flex: 1;
  max-width: 60rem;

  ${(0,media/* media */.B)('<=desktop')} {
    max-width: 100%;
  }
`;
const CustomButtonGroup = external_styled_components_default()(ButtonGroup/* default */.Z).withConfig({
    componentId: "sc-ae5ae9f7-2"
})`
  margin-top: 4rem;
`;
const Hero_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-ae5ae9f7-3"
})`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${(0,media/* media */.B)('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;
const Hero_Description = external_styled_components_default().p.withConfig({
    componentId: "sc-ae5ae9f7-4"
})`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${(0,media/* media */.B)('<=desktop')} {
    font-size: 1.5rem;
  }
`;
const Hero_CustomOverTitle = external_styled_components_default()(components_OverTitle).withConfig({
    componentId: "sc-ae5ae9f7-5"
})`
  margin-bottom: 2rem;
`;
const Hero_Heading = external_styled_components_default().h1.withConfig({
    componentId: "sc-ae5ae9f7-6"
})`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

;// CONCATENATED MODULE: ./pages/index.tsx









function Homepage({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: env/* EnvVars.SITE_NAME */.$.SITE_NAME
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Webseite mieten statt kaufen in der Schweiz"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HomepageWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WhiteBackgroundContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(BasicSection, {
                                imageUrl: "/demo-illustration-1.svg",
                                title: "Individuelles Angebot",
                                overTitle: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Nehmen Sie Kontakt mit uns auf, wenn Sie ein konkretes Angebot f\xfcr Ihre Wunsch-Homepage w\xfcnschen oder eine Beratung w\xfcnschen. Sie brauchen sich keine Sorgen zu machen, denn auch Ihre Homepage wird professionell gehostet, aktualisiert und abgesichert egal ob Privatperson, Verein oder KMU."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BasicSection, {
                                imageUrl: "/demo-illustration-2.svg",
                                title: "Schritte",
                                overTitle: "",
                                reversed: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Wie funktionierts:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Sie nennen uns Ihre Anforderungen an Design und Funktionalit\xe4t f\xfcr Ihre Homepage."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Sie erhalten von uns einen Vorschlag f\xfcr das Design und die passende Technik f\xfcr die Website."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Die Registrierung der Domain wird von uns \xfcbernommen"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Sie stellen Texte und Bilder zur Verf\xfcgung"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Die Webseite wird von uns programmiert"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Schliesslich wird die Webseite hochgeladen"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DarkerBackgroundContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(FeaturesGallery, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Features, {})
                        ]
                    })
                ]
            })
        ]
    }));
};
const HomepageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-2a26123f-0"
})`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
const DarkerBackgroundContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2a26123f-1"
})`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
const WhiteBackgroundContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2a26123f-2"
})`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
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

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,675,739,17,445,596], () => (__webpack_exec__(8903)));
module.exports = __webpack_exports__;

})();