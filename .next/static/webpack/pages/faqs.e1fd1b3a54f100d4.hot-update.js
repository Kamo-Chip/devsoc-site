"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faqs",{

/***/ "./pages/faqs.js":
/*!***********************!*\
  !*** ./pages/faqs.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst questions = [\n    {\n        question: \"Can I join even if I’m not a WITS computer science student?\",\n        answer: \"Of course! As long as you are a registered student of WITS you can be a member of the WITS Developer Society, no matter the faculty.\"\n    },\n    {\n        question: \"Are there any membership fees?\",\n        answer: \"Nope! As long as you are a registered WITS student you can join free of charge!\"\n    },\n    {\n        question: \"How do I join your discord?\",\n        answer: \"Once you’ve filled out the membership registration form you will receive a link to join our discord.\"\n    },\n    {\n        question: \"Do I have to participate in events?\",\n        answer: \"Attendance at all WDS events is optional, but we’d really recommend you come along! We really try our best to make them as fun and interesting as possible.\"\n    },\n    {\n        question: \"Will you be able to find me an internship position?\",\n        answer: \"As much as the WDS encourages and supports student developer internships, we cannot promise to secure positions for members. Instead, regular open positions and internship opportunities will be shared in our discord server and mailing list.\"\n    },\n    {\n        question: \"I have an article that I’d publish on your blog - who do I get in contact with?\",\n        answer: \"Email your pitch to witsdevsoc@gmail.com and someone from our writing team will approve and edit your piece.\"\n    },\n    {\n        question: \"My organization would like to partner with your society, how do we go about doing it?\",\n        answer: \"Contact us at witsdevsoc@gmail.com and we will be sure to get back to you and the various sponsorship opportunities our society has to offer.\"\n    }\n];\nconst FAQPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        blog: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Frequently Asked Questions\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: \"2rem\",\n                        lineHeight: \"24px\",\n                        maxWidth: \"1000px\",\n                        width: \"100%\"\n                    },\n                    children: questions.map((question, idx)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FAQItem, {\n                            question: question\n                        }, \"\".concat(question).concat(idx), false, {\n                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                            lineNumber: 64,\n                            columnNumber: 20\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FAQPage;\nconst FAQItem = (param)=>{\n    let { question  } = param;\n    _s();\n    const [isAnswerVisible, setIsAnswerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            marginBottom: \"1rem\",\n            backgroundColor: \"#fff\",\n            borderRadius: \"10px\",\n            boxShadow: \"0 0 1px grey\",\n            padding: \"1rem\",\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontWeight: \"500\",\n                            fontSize: \"20px\"\n                        },\n                        children: question.question\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>setIsAnswerVisible(!isAnswerVisible),\n                        children: !isAnswerVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronDown, {}, void 0, false, {\n                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                            lineNumber: 100,\n                            columnNumber: 31\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronUp, {}, void 0, false, {\n                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                            lineNumber: 100,\n                            columnNumber: 51\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            isAnswerVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    fontSize: \"18px\",\n                    paddingRight: \"1rem\"\n                },\n                children: question.answer\n            }, void 0, false, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FAQItem, \"BC3HKZM9DXO1F04PW7J4RJoUqJ8=\");\n_c1 = FAQItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"FAQPage\");\n$RefreshReg$(_c1, \"FAQItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBNEQ7QUFDbEI7QUFDVDtBQUVqQyxNQUFNSSxZQUFZO0lBQ2hCO1FBQ0VDLFVBQVU7UUFDVkMsUUFDRTtJQUNKO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUNFO0lBQ0o7SUFDQTtRQUNFRCxVQUFVO1FBQ1ZDLFFBQ0U7SUFDSjtJQUNBO1FBQ0VELFVBQVU7UUFDVkMsUUFDRTtJQUNKO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUNFO0lBQ0o7SUFDQTtRQUNFRCxVQUNFO1FBQ0ZDLFFBQ0U7SUFDSjtJQUNBO1FBQ0VELFVBQ0U7UUFDRkMsUUFDRTtJQUNKO0NBQ0Q7QUFDRCxNQUFNQyxVQUFVLElBQU07SUFDcEIscUJBQ0UsOERBQUNMLDBEQUFNQTtRQUFDTSxNQUFNLEtBQUs7a0JBQ2pCLDRFQUFDQztZQUNDQyxPQUFPO2dCQUNMQyxTQUFTO2dCQUNUQyxlQUFlO2dCQUNmQyxZQUFZO1lBQ2Q7OzhCQUVBLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDTDtvQkFDQ0MsT0FBTzt3QkFDTEssY0FBYzt3QkFDZEMsWUFBWTt3QkFDWkMsVUFBVTt3QkFDVkMsT0FBTztvQkFDVDs4QkFFQ2QsVUFBVWUsR0FBRyxDQUFDLENBQUNkLFVBQVVlLE1BQVE7d0JBQ2hDLHFCQUFPLDhEQUFDQzs0QkFBa0NoQixVQUFVQTsyQkFBL0IsR0FBY2UsT0FBWGYsVUFBZSxPQUFKZTs7Ozs7b0JBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0tBMUJNYjtBQTRCTixNQUFNYyxVQUFVLFNBQWtCO1FBQWpCLEVBQUVoQixTQUFRLEVBQUU7O0lBQzNCLE1BQU0sQ0FBQ2lCLGlCQUFpQkMsbUJBQW1CLEdBQUdwQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVELHFCQUNFLDhEQUFDTTtRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZUFBZTtZQUNmRyxjQUFjO1lBQ2RTLGlCQUFpQjtZQUNqQkMsY0FBYztZQUNkQyxXQUFXO1lBQ1hDLFNBQVM7WUFDVFQsT0FBTztRQUNUOzswQkFFQSw4REFBQ1Q7Z0JBQ0NDLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7b0JBQ1plLGdCQUFnQjtnQkFDbEI7O2tDQUVBLDhEQUFDQzt3QkFBS25CLE9BQU87NEJBQUVvQixZQUFZOzRCQUFPQyxVQUFVO3dCQUFPO2tDQUNoRDFCLFNBQVNBLFFBQVE7Ozs7OztrQ0FFcEIsOERBQUN3Qjt3QkFBS0csU0FBUyxJQUFNVCxtQkFBbUIsQ0FBQ0Q7a0NBQ3RDLENBQUNBLGdDQUFrQiw4REFBQ3RCLHlEQUFhQTs7OztzREFBTSw4REFBQ0MsdURBQVdBOzs7O3FDQUFHOzs7Ozs7Ozs7Ozs7WUFHMURxQixnQ0FDQyw4REFBQ087Z0JBQUtuQixPQUFPO29CQUFFcUIsVUFBVTtvQkFBUUUsY0FBYztnQkFBTzswQkFDbkQ1QixTQUFTQyxNQUFNOzs7Ozs0QkFFaEIsSUFBSTs7Ozs7OztBQUdkO0dBdENNZTtNQUFBQTtBQXVDTiwrREFBZWQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXFzLmpzPzJlZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFDaGV2cm9uRG93biwgRmFDaGV2cm9uVXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBxdWVzdGlvbnMgPSBbXG4gIHtcbiAgICBxdWVzdGlvbjogXCJDYW4gSSBqb2luIGV2ZW4gaWYgSeKAmW0gbm90IGEgV0lUUyBjb21wdXRlciBzY2llbmNlIHN0dWRlbnQ/XCIsXG4gICAgYW5zd2VyOlxuICAgICAgXCJPZiBjb3Vyc2UhIEFzIGxvbmcgYXMgeW91IGFyZSBhIHJlZ2lzdGVyZWQgc3R1ZGVudCBvZiBXSVRTIHlvdSBjYW4gYmUgYSBtZW1iZXIgb2YgdGhlIFdJVFMgRGV2ZWxvcGVyIFNvY2lldHksIG5vIG1hdHRlciB0aGUgZmFjdWx0eS5cIixcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiBcIkFyZSB0aGVyZSBhbnkgbWVtYmVyc2hpcCBmZWVzP1wiLFxuICAgIGFuc3dlcjpcbiAgICAgIFwiTm9wZSEgQXMgbG9uZyBhcyB5b3UgYXJlIGEgcmVnaXN0ZXJlZCBXSVRTIHN0dWRlbnQgeW91IGNhbiBqb2luIGZyZWUgb2YgY2hhcmdlIVwiLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246IFwiSG93IGRvIEkgam9pbiB5b3VyIGRpc2NvcmQ/XCIsXG4gICAgYW5zd2VyOlxuICAgICAgXCJPbmNlIHlvdeKAmXZlIGZpbGxlZCBvdXQgdGhlIG1lbWJlcnNoaXAgcmVnaXN0cmF0aW9uIGZvcm0geW91IHdpbGwgcmVjZWl2ZSBhIGxpbmsgdG8gam9pbiBvdXIgZGlzY29yZC5cIixcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiBcIkRvIEkgaGF2ZSB0byBwYXJ0aWNpcGF0ZSBpbiBldmVudHM/XCIsXG4gICAgYW5zd2VyOlxuICAgICAgXCJBdHRlbmRhbmNlIGF0IGFsbCBXRFMgZXZlbnRzIGlzIG9wdGlvbmFsLCBidXQgd2XigJlkIHJlYWxseSByZWNvbW1lbmQgeW91IGNvbWUgYWxvbmchIFdlIHJlYWxseSB0cnkgb3VyIGJlc3QgdG8gbWFrZSB0aGVtIGFzIGZ1biBhbmQgaW50ZXJlc3RpbmcgYXMgcG9zc2libGUuXCIsXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogXCJXaWxsIHlvdSBiZSBhYmxlIHRvIGZpbmQgbWUgYW4gaW50ZXJuc2hpcCBwb3NpdGlvbj9cIixcbiAgICBhbnN3ZXI6XG4gICAgICBcIkFzIG11Y2ggYXMgdGhlIFdEUyBlbmNvdXJhZ2VzIGFuZCBzdXBwb3J0cyBzdHVkZW50IGRldmVsb3BlciBpbnRlcm5zaGlwcywgd2UgY2Fubm90IHByb21pc2UgdG8gc2VjdXJlIHBvc2l0aW9ucyBmb3IgbWVtYmVycy4gSW5zdGVhZCwgcmVndWxhciBvcGVuIHBvc2l0aW9ucyBhbmQgaW50ZXJuc2hpcCBvcHBvcnR1bml0aWVzIHdpbGwgYmUgc2hhcmVkIGluIG91ciBkaXNjb3JkIHNlcnZlciBhbmQgbWFpbGluZyBsaXN0LlwiLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246XG4gICAgICBcIkkgaGF2ZSBhbiBhcnRpY2xlIHRoYXQgSeKAmWQgcHVibGlzaCBvbiB5b3VyIGJsb2cgLSB3aG8gZG8gSSBnZXQgaW4gY29udGFjdCB3aXRoP1wiLFxuICAgIGFuc3dlcjpcbiAgICAgIFwiRW1haWwgeW91ciBwaXRjaCB0byB3aXRzZGV2c29jQGdtYWlsLmNvbSBhbmQgc29tZW9uZSBmcm9tIG91ciB3cml0aW5nIHRlYW0gd2lsbCBhcHByb3ZlIGFuZCBlZGl0IHlvdXIgcGllY2UuXCIsXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjpcbiAgICAgIFwiTXkgb3JnYW5pemF0aW9uIHdvdWxkIGxpa2UgdG8gcGFydG5lciB3aXRoIHlvdXIgc29jaWV0eSwgaG93IGRvIHdlIGdvIGFib3V0IGRvaW5nIGl0P1wiLFxuICAgIGFuc3dlcjpcbiAgICAgIFwiQ29udGFjdCB1cyBhdCB3aXRzZGV2c29jQGdtYWlsLmNvbSBhbmQgd2Ugd2lsbCBiZSBzdXJlIHRvIGdldCBiYWNrIHRvIHlvdSBhbmQgdGhlIHZhcmlvdXMgc3BvbnNvcnNoaXAgb3Bwb3J0dW5pdGllcyBvdXIgc29jaWV0eSBoYXMgdG8gb2ZmZXIuXCIsXG4gIH0sXG5dO1xuY29uc3QgRkFRUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGJsb2c9e2ZhbHNlfT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uczwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwMHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEZBUUl0ZW0ga2V5PXtgJHtxdWVzdGlvbn0ke2lkeH1gfSBxdWVzdGlvbj17cXVlc3Rpb259IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgRkFRSXRlbSA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW2lzQW5zd2VyVmlzaWJsZSwgc2V0SXNBbnN3ZXJWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCAwIDFweCBncmV5XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjUwMFwiLCBmb250U2l6ZTogXCIyMHB4XCIgfX0+XG4gICAgICAgICAge3F1ZXN0aW9uLnF1ZXN0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldElzQW5zd2VyVmlzaWJsZSghaXNBbnN3ZXJWaXNpYmxlKX0+XG4gICAgICAgICAgeyFpc0Fuc3dlclZpc2libGUgPyA8RmFDaGV2cm9uRG93biAvPiA6IDxGYUNoZXZyb25VcCAvPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNBbnN3ZXJWaXNpYmxlID8gKFxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIsIHBhZGRpbmdSaWdodDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAge3F1ZXN0aW9uLmFuc3dlcn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRkFRUGFnZTtcbiJdLCJuYW1lcyI6WyJGYUNoZXZyb25Eb3duIiwiRmFDaGV2cm9uVXAiLCJMYXlvdXQiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiRkFRUGFnZSIsImJsb2ciLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImgxIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXAiLCJpZHgiLCJGQVFJdGVtIiwiaXNBbnN3ZXJWaXNpYmxlIiwic2V0SXNBbnN3ZXJWaXNpYmxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50Iiwic3BhbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJwYWRkaW5nUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faqs.js\n"));

/***/ })

});