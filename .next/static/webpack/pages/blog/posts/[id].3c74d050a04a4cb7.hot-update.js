"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/posts/[id]",{

/***/ "./pages/blog/posts/[id].js":
/*!**********************************!*\
  !*** ./pages/blog/posts/[id].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Alert */ \"./components/Alert.jsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { postData  } = param;\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const copyTextToClipboard = async (text)=>{\n        if (\"clipboard\" in navigator) {\n            return await navigator.clipboard.writeText(text);\n        } else {\n            return document.execCommand(\"copy\", true, text);\n        }\n    };\n    const handleCopyClick = (copyText)=>{\n        copyTextToClipboard(copyText).then(()=>{\n            document.querySelector(\".alert\").style.display = \"flex\";\n            setTimeout(()=>{\n                document.querySelector(\".alert\").style.display = \"none\";\n            }, 2500);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        setLocation(window.location.href);\n        aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n            duration: 3000\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        blog: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: postData.description\n                    }, \"desc\", false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: postData.keywords\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: postData.description\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"/\".concat(postData.image)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/blog\",\n                className: \"blogLink\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosArrowBack, {\n                    className: \"blogBack\",\n                    size: \"2.5rem\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"blogPost\",\n                \"data-aos\": \"fade-in\",\n                \"data-aos-easing\": \"ease\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            justifyContent: \"space-between\",\n                            marginTop: \"1rem\",\n                            fontSize: \"1rem\",\n                            width: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    flexDirection: \"column\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"grey\",\n                                            fontSize: \"14px\"\n                                        },\n                                        children: [\n                                            \"Updated \",\n                                            (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(new Date(postData.date), \"dd MMM yyyy\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            padding: \".5rem 1rem\",\n                                            backgroundColor: \"#000\",\n                                            color: \"#fff\",\n                                            borderRadius: \"30px\",\n                                            marginTop: \"1rem\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: postData.tag\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsFillShareFill, {\n                                size: \"2rem\",\n                                onClick: ()=>handleCopyClick(location),\n                                className: \"shareBtn\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            marginBottom: \"0.5rem\"\n                        },\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontSize: \"14px\"\n                        },\n                        children: [\n                            \"Written by \",\n                            postData.author\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        priority: true,\n                        src: \"/postImages/\".concat(postData.image),\n                        alt: postData.imageAlt,\n                        width: 517,\n                        height: 506,\n                        className: \"postHeroImg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: postData.contentHtml\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/blog/posts/[id].js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"uYjSqoyfw2FApiWGOS7tBpGU5mQ=\");\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JUO2dDQUMvQmlDLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ3FCO3dCQUFHekMsT0FBTzs0QkFBRTBDLGNBQWM7d0JBQVM7a0NBQUl4RCxTQUFTMEIsS0FBSzs7Ozs7O2tDQUN0RCw4REFBQ21CO3dCQUFLL0IsT0FBTzs0QkFBRTZCLFVBQVU7d0JBQU87OzRCQUFHOzRCQUFZM0MsU0FBU3lELE1BQU07Ozs7Ozs7a0NBRTlELDhEQUFDbkUsbURBQUtBO3dCQUNKb0UsUUFBUTt3QkFDUkMsS0FBSyxlQUE4QixPQUFmM0QsU0FBU2lDLEtBQUs7d0JBQ2xDMkIsS0FBSzVELFNBQVM2RCxRQUFRO3dCQUN0QmpCLE9BQU87d0JBQ1BrQixRQUFRO3dCQUNSNUIsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSzt3QkFBSXdCLHlCQUF5Qjs0QkFBRUMsUUFBUWhFLFNBQVNpRSxXQUFXO3dCQUFDOzs7Ozs7Ozs7Ozs7MEJBRS9ELDhEQUFDckUseURBQUtBOzs7Ozs7Ozs7OztBQUdaLENBQUM7R0EvRnVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL3Bvc3RzL1tpZF0uanM/NzY4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW9zIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNGaWxsU2hhcmVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBJb0lvc0Fycm93QmFjayB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FsZXJ0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Bvc3RzXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29weVRleHRUb0NsaXBib2FyZCA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gICAgaWYgKFwiY2xpcGJvYXJkXCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgICByZXR1cm4gYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiwgdHJ1ZSwgdGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlDbGljayA9IChjb3B5VGV4dCkgPT4ge1xuICAgIGNvcHlUZXh0VG9DbGlwYm9hcmQoY29weVRleHQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9jYXRpb24od2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIEFvcy5pbml0KHsgZHVyYXRpb246IDMwMDAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgYmxvZz17dHJ1ZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0RGF0YS5kZXNjcmlwdGlvbn0ga2V5PVwiZGVzY1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3Bvc3REYXRhLmtleXdvcmRzfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdERhdGEuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgLyR7cG9zdERhdGEuaW1hZ2V9YH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIGNsYXNzTmFtZT1cImJsb2dMaW5rXCI+XG4gICAgICAgIDxJb0lvc0Fycm93QmFjayBjbGFzc05hbWU9XCJibG9nQmFja1wiIHNpemU9XCIyLjVyZW1cIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYmxvZ1Bvc3RcIiBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1lYXNpbmc9XCJlYXNlXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiwgZm9udFNpemU6IFwiMTRweFwiIH19PlxuICAgICAgICAgICAgICBVcGRhdGVkIHtmb3JtYXQobmV3IERhdGUocG9zdERhdGEuZGF0ZSksIFwiZGQgTU1NIHl5eXlcIil9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiLjVyZW0gMXJlbVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGI+e3Bvc3REYXRhLnRhZ308L2I+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJzRmlsbFNoYXJlRmlsbFxuICAgICAgICAgICAgc2l6ZT1cIjJyZW1cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29weUNsaWNrKGxvY2F0aW9uKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlQnRuXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwLjVyZW1cIiB9fT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PldyaXR0ZW4gYnkge3Bvc3REYXRhLmF1dGhvcn08L3NwYW4+XG5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICBzcmM9e2AvcG9zdEltYWdlcy8ke3Bvc3REYXRhLmltYWdlfWB9XG4gICAgICAgICAgYWx0PXtwb3N0RGF0YS5pbWFnZUFsdH1cbiAgICAgICAgICB3aWR0aD17NTE3fVxuICAgICAgICAgIGhlaWdodD17NTA2fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RIZXJvSW1nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19IC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8QWxlcnQgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBb3MiLCJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCc0ZpbGxTaGFyZUZpbGwiLCJJb0lvc0Fycm93QmFjayIsIkFsZXJ0IiwiTGF5b3V0IiwiZm9ybWF0IiwiUG9zdCIsInBvc3REYXRhIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImNvcHlUZXh0VG9DbGlwYm9hcmQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImhhbmRsZUNvcHlDbGljayIsImNvcHlUZXh0IiwidGhlbiIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiaHJlZiIsImluaXQiLCJkdXJhdGlvbiIsImJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJwcm9wZXJ0eSIsImltYWdlIiwiY2xhc3NOYW1lIiwic2l6ZSIsImFydGljbGUiLCJkYXRhLWFvcyIsImRhdGEtYW9zLWVhc2luZyIsImRpdiIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwid2lkdGgiLCJzcGFuIiwiY29sb3IiLCJEYXRlIiwiZGF0ZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJiIiwidGFnIiwib25DbGljayIsImgxIiwibWFyZ2luQm90dG9tIiwiYXV0aG9yIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJpbWFnZUFsdCIsImhlaWdodCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/posts/[id].js\n"));

/***/ })

});