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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst questions = [\n    {\n        question: \"Can I join even if I’m not a WITS computer science student?\",\n        answer: \"Of course! As long as you are a registered student of WITS you can be a member of the WITS Developer Society, no matter the faculty.\"\n    },\n    {\n        question: \"Are there any membership fees?\",\n        answer: \"Nope! As long as you are a registered WITS student you can join free of charge!\"\n    },\n    {\n        question: \"How do I join your discord?\",\n        answer: \"Once you’ve filled out the membership registration form you will receive a link to join our discord.\"\n    },\n    {\n        question: \"Do I have to participate in events?\",\n        answer: \"Attendance at all WDS events is optional, but we’d really recommend you come along! We really try our best to make them as fun and interesting as possible.\"\n    },\n    {\n        question: \"Will you be able to find me an internship position?\",\n        answer: \"As much as the WDS encourages and supports student developer internships, we cannot promise to secure positions for members. Instead, regular open positions and internship opportunities will be shared in our discord server and mailing list.\"\n    },\n    {\n        question: \"I have an article that I’d publish on your blog - who do I get in contact with?\",\n        answer: \"Email your pitch to witsdevsoc@gmail.com and someone from our writing team will approve and edit your piece.\"\n    },\n    {\n        question: \"My organization would like to partner with your society, how do we go about doing it?\",\n        answer: \"Contact us at witsdevsoc@gmail.com and we will be sure to get back to you and the various sponsorship opportunities our society has to offer.\"\n    }\n];\nconst FAQPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        blog: false,\n        isScrollLinksVisible: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\",\n                height: \"100vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Frequently Asked Questions\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: \"2rem\",\n                        lineHeight: \"24px\",\n                        maxWidth: \"1000px\",\n                        width: \"100%\"\n                    },\n                    children: questions.map((question, idx)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FAQItem, {\n                            question: question\n                        }, \"\".concat(question).concat(idx), false, {\n                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                            lineNumber: 65,\n                            columnNumber: 20\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FAQPage;\nconst FAQItem = (param)=>{\n    let { question  } = param;\n    _s();\n    const [isAnswerVisible, setIsAnswerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            marginBottom: \"1rem\",\n            backgroundColor: \"#fff\",\n            borderRadius: \"10px\",\n            boxShadow: \"0 0 1px grey\",\n            padding: \"1rem\",\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontWeight: \"500\",\n                            fontSize: \"20px\"\n                        },\n                        children: question.question\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>setIsAnswerVisible(!isAnswerVisible),\n                        style: {\n                            cursor: \"pointer\",\n                            backgroundColor: \"#000\",\n                            color: \"#fff\",\n                            borderRadius: \"50%\",\n                            width: \"50px\",\n                            height: \"50px\",\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\"\n                        },\n                        children: !isAnswerVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronDown, {}, void 0, false, {\n                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                            lineNumber: 115,\n                            columnNumber: 31\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronUp, {}, void 0, false, {\n                            fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                            lineNumber: 115,\n                            columnNumber: 51\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            isAnswerVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    fontSize: \"18px\",\n                    paddingLeft: \".5rem\",\n                    marginTop: \"1rem\"\n                },\n                children: question.answer\n            }, void 0, false, {\n                fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamogelokhumalo/Documents/projects/devsoc/pages/faqs.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FAQItem, \"BC3HKZM9DXO1F04PW7J4RJoUqJ8=\");\n_c1 = FAQItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"FAQPage\");\n$RefreshReg$(_c1, \"FAQItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBNEQ7QUFDbEI7QUFDVDtBQUVqQyxNQUFNSSxZQUFZO0lBQ2hCO1FBQ0VDLFVBQVU7UUFDVkMsUUFDRTtJQUNKO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUNFO0lBQ0o7SUFDQTtRQUNFRCxVQUFVO1FBQ1ZDLFFBQ0U7SUFDSjtJQUNBO1FBQ0VELFVBQVU7UUFDVkMsUUFDRTtJQUNKO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUNFO0lBQ0o7SUFDQTtRQUNFRCxVQUNFO1FBQ0ZDLFFBQ0U7SUFDSjtJQUNBO1FBQ0VELFVBQ0U7UUFDRkMsUUFDRTtJQUNKO0NBQ0Q7QUFDRCxNQUFNQyxVQUFVLElBQU07SUFDcEIscUJBQ0UsOERBQUNMLDBEQUFNQTtRQUFDTSxNQUFNLEtBQUs7UUFBRUMsc0JBQXNCLEtBQUs7a0JBQzlDLDRFQUFDQztZQUNDQyxPQUFPO2dCQUNMQyxTQUFTO2dCQUNUQyxlQUFlO2dCQUNmQyxZQUFZO2dCQUNaQyxRQUFRO1lBQ1Y7OzhCQUVBLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDTjtvQkFDQ0MsT0FBTzt3QkFDTE0sY0FBYzt3QkFDZEMsWUFBWTt3QkFDWkMsVUFBVTt3QkFDVkMsT0FBTztvQkFDVDs4QkFFQ2hCLFVBQVVpQixHQUFHLENBQUMsQ0FBQ2hCLFVBQVVpQixNQUFRO3dCQUNoQyxxQkFBTyw4REFBQ0M7NEJBQWtDbEIsVUFBVUE7MkJBQS9CLEdBQWNpQixPQUFYakIsVUFBZSxPQUFKaUI7Ozs7O29CQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtLQTNCTWY7QUE2Qk4sTUFBTWdCLFVBQVUsU0FBa0I7UUFBakIsRUFBRWxCLFNBQVEsRUFBRTs7SUFDM0IsTUFBTSxDQUFDbUIsaUJBQWlCQyxtQkFBbUIsR0FBR3RCLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUQscUJBQ0UsOERBQUNPO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZJLGNBQWM7WUFDZFMsaUJBQWlCO1lBQ2pCQyxjQUFjO1lBQ2RDLFdBQVc7WUFDWEMsU0FBUztZQUNUVCxPQUFPO1FBQ1Q7OzBCQUVBLDhEQUFDVjtnQkFDQ0MsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWmdCLGdCQUFnQjtnQkFDbEI7O2tDQUVBLDhEQUFDQzt3QkFBS3BCLE9BQU87NEJBQUVxQixZQUFZOzRCQUFPQyxVQUFVO3dCQUFPO2tDQUNoRDVCLFNBQVNBLFFBQVE7Ozs7OztrQ0FFcEIsOERBQUMwQjt3QkFDQ0csU0FBUyxJQUFNVCxtQkFBbUIsQ0FBQ0Q7d0JBQ25DYixPQUFPOzRCQUNMd0IsUUFBUTs0QkFDUlQsaUJBQWlCOzRCQUNqQlUsT0FBTzs0QkFDUFQsY0FBYzs0QkFDZFAsT0FBTzs0QkFDUEwsUUFBUTs0QkFDUkgsU0FBUzs0QkFDVEMsZUFBZTs0QkFDZkMsWUFBWTs0QkFDWmdCLGdCQUFnQjt3QkFDbEI7a0NBRUMsQ0FBQ04sZ0NBQWtCLDhEQUFDeEIseURBQWFBOzs7O3NEQUFNLDhEQUFDQyx1REFBV0E7Ozs7cUNBQUc7Ozs7Ozs7Ozs7OztZQUcxRHVCLGdDQUNDLDhEQUFDTztnQkFDQ3BCLE9BQU87b0JBQUVzQixVQUFVO29CQUFRSSxhQUFhO29CQUFTQyxXQUFXO2dCQUFPOzBCQUVsRWpDLFNBQVNDLE1BQU07Ozs7OzRCQUVoQixJQUFJOzs7Ozs7O0FBR2Q7R0F0RE1pQjtNQUFBQTtBQXVETiwrREFBZWhCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxcy5qcz8yZWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhQ2hldnJvbkRvd24sIEZhQ2hldnJvblVwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgcXVlc3Rpb246IFwiQ2FuIEkgam9pbiBldmVuIGlmIEnigJltIG5vdCBhIFdJVFMgY29tcHV0ZXIgc2NpZW5jZSBzdHVkZW50P1wiLFxuICAgIGFuc3dlcjpcbiAgICAgIFwiT2YgY291cnNlISBBcyBsb25nIGFzIHlvdSBhcmUgYSByZWdpc3RlcmVkIHN0dWRlbnQgb2YgV0lUUyB5b3UgY2FuIGJlIGEgbWVtYmVyIG9mIHRoZSBXSVRTIERldmVsb3BlciBTb2NpZXR5LCBubyBtYXR0ZXIgdGhlIGZhY3VsdHkuXCIsXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogXCJBcmUgdGhlcmUgYW55IG1lbWJlcnNoaXAgZmVlcz9cIixcbiAgICBhbnN3ZXI6XG4gICAgICBcIk5vcGUhIEFzIGxvbmcgYXMgeW91IGFyZSBhIHJlZ2lzdGVyZWQgV0lUUyBzdHVkZW50IHlvdSBjYW4gam9pbiBmcmVlIG9mIGNoYXJnZSFcIixcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiBcIkhvdyBkbyBJIGpvaW4geW91ciBkaXNjb3JkP1wiLFxuICAgIGFuc3dlcjpcbiAgICAgIFwiT25jZSB5b3XigJl2ZSBmaWxsZWQgb3V0IHRoZSBtZW1iZXJzaGlwIHJlZ2lzdHJhdGlvbiBmb3JtIHlvdSB3aWxsIHJlY2VpdmUgYSBsaW5rIHRvIGpvaW4gb3VyIGRpc2NvcmQuXCIsXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogXCJEbyBJIGhhdmUgdG8gcGFydGljaXBhdGUgaW4gZXZlbnRzP1wiLFxuICAgIGFuc3dlcjpcbiAgICAgIFwiQXR0ZW5kYW5jZSBhdCBhbGwgV0RTIGV2ZW50cyBpcyBvcHRpb25hbCwgYnV0IHdl4oCZZCByZWFsbHkgcmVjb21tZW5kIHlvdSBjb21lIGFsb25nISBXZSByZWFsbHkgdHJ5IG91ciBiZXN0IHRvIG1ha2UgdGhlbSBhcyBmdW4gYW5kIGludGVyZXN0aW5nIGFzIHBvc3NpYmxlLlwiLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246IFwiV2lsbCB5b3UgYmUgYWJsZSB0byBmaW5kIG1lIGFuIGludGVybnNoaXAgcG9zaXRpb24/XCIsXG4gICAgYW5zd2VyOlxuICAgICAgXCJBcyBtdWNoIGFzIHRoZSBXRFMgZW5jb3VyYWdlcyBhbmQgc3VwcG9ydHMgc3R1ZGVudCBkZXZlbG9wZXIgaW50ZXJuc2hpcHMsIHdlIGNhbm5vdCBwcm9taXNlIHRvIHNlY3VyZSBwb3NpdGlvbnMgZm9yIG1lbWJlcnMuIEluc3RlYWQsIHJlZ3VsYXIgb3BlbiBwb3NpdGlvbnMgYW5kIGludGVybnNoaXAgb3Bwb3J0dW5pdGllcyB3aWxsIGJlIHNoYXJlZCBpbiBvdXIgZGlzY29yZCBzZXJ2ZXIgYW5kIG1haWxpbmcgbGlzdC5cIixcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOlxuICAgICAgXCJJIGhhdmUgYW4gYXJ0aWNsZSB0aGF0IEnigJlkIHB1Ymxpc2ggb24geW91ciBibG9nIC0gd2hvIGRvIEkgZ2V0IGluIGNvbnRhY3Qgd2l0aD9cIixcbiAgICBhbnN3ZXI6XG4gICAgICBcIkVtYWlsIHlvdXIgcGl0Y2ggdG8gd2l0c2RldnNvY0BnbWFpbC5jb20gYW5kIHNvbWVvbmUgZnJvbSBvdXIgd3JpdGluZyB0ZWFtIHdpbGwgYXBwcm92ZSBhbmQgZWRpdCB5b3VyIHBpZWNlLlwiLFxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246XG4gICAgICBcIk15IG9yZ2FuaXphdGlvbiB3b3VsZCBsaWtlIHRvIHBhcnRuZXIgd2l0aCB5b3VyIHNvY2lldHksIGhvdyBkbyB3ZSBnbyBhYm91dCBkb2luZyBpdD9cIixcbiAgICBhbnN3ZXI6XG4gICAgICBcIkNvbnRhY3QgdXMgYXQgd2l0c2RldnNvY0BnbWFpbC5jb20gYW5kIHdlIHdpbGwgYmUgc3VyZSB0byBnZXQgYmFjayB0byB5b3UgYW5kIHRoZSB2YXJpb3VzIHNwb25zb3JzaGlwIG9wcG9ydHVuaXRpZXMgb3VyIHNvY2lldHkgaGFzIHRvIG9mZmVyLlwiLFxuICB9LFxuXTtcbmNvbnN0IEZBUVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBibG9nPXtmYWxzZX0gaXNTY3JvbGxMaW5rc1Zpc2libGU9e2ZhbHNlfT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uczwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwMHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEZBUUl0ZW0ga2V5PXtgJHtxdWVzdGlvbn0ke2lkeH1gfSBxdWVzdGlvbj17cXVlc3Rpb259IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgRkFRSXRlbSA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgW2lzQW5zd2VyVmlzaWJsZSwgc2V0SXNBbnN3ZXJWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCAwIDFweCBncmV5XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjUwMFwiLCBmb250U2l6ZTogXCIyMHB4XCIgfX0+XG4gICAgICAgICAge3F1ZXN0aW9uLnF1ZXN0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNBbnN3ZXJWaXNpYmxlKCFpc0Fuc3dlclZpc2libGUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHshaXNBbnN3ZXJWaXNpYmxlID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzQW5zd2VyVmlzaWJsZSA/IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIsIHBhZGRpbmdMZWZ0OiBcIi41cmVtXCIsIG1hcmdpblRvcDogXCIxcmVtXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtxdWVzdGlvbi5hbnN3ZXJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZBUVBhZ2U7XG4iXSwibmFtZXMiOlsiRmFDaGV2cm9uRG93biIsIkZhQ2hldnJvblVwIiwiTGF5b3V0IiwidXNlU3RhdGUiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlciIsIkZBUVBhZ2UiLCJibG9nIiwiaXNTY3JvbGxMaW5rc1Zpc2libGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImgxIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXAiLCJpZHgiLCJGQVFJdGVtIiwiaXNBbnN3ZXJWaXNpYmxlIiwic2V0SXNBbnN3ZXJWaXNpYmxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50Iiwic3BhbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJjdXJzb3IiLCJjb2xvciIsInBhZGRpbmdMZWZ0IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/faqs.js\n"));

/***/ })

});