"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ \"./components/layout/Navigation.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(props) {\n    _s();\n    var smallScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({\n        query: '(max-width: 499px)'\n    });\n    var bigScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({\n        query: '(min-width: 500px)'\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMenu = ref[0], setShowMenu = ref[1];\n    var menuTxt;\n    if (showMenu) {\n        menuTxt = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImMenu4, {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon),\n            __source: {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 16,\n                columnNumber: 15\n            },\n            __self: _this\n        });\n    } else {\n        menuTxt = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImMenu3, {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon),\n            __source: {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 18,\n                columnNumber: 15\n            },\n            __self: _this\n        });\n    }\n    var toggleMenuHandler = function(event) {\n        event.preventDefault();\n        setShowMenu(!showMenu);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            smallScreen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().menubtn),\n                        onClick: toggleMenuHandler,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: menuTxt\n                    }),\n                    showMenu && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 34,\n                            columnNumber: 24\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            bigScreen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: props.children\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"\\xa9\\xa0Copyright\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"https://www.linkedin.com/in/tereza-teresa-konstari-8b9594131/\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Tereza Konstari\"\n                    }),\n                    \"\\xa02021\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\React\\\\muscle-spasms\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    \"MIT License\"\n                ]\n            })\n        ]\n    }));\n};\n_s(Layout, \"BNqF5Etr9zy4hzKJ6mwlXS+2Aak=\", false, function() {\n    return [\n        react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery,\n        react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUztBQUNuQjtBQUNRO0FBQ1k7QUFDVDs7O0FBRXhDLEdBQUssQ0FBQ1EsTUFBTSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQ3pCLEdBQUssQ0FBQ0MsV0FBVyxHQUFHUiwrREFBYSxDQUFDLENBQUM7UUFBQ1MsS0FBSyxFQUFFLENBQW9CO0lBQUMsQ0FBQztJQUNqRSxHQUFLLENBQUNDLFNBQVMsR0FBR1YsK0RBQWEsQ0FBQyxDQUFDO1FBQUNTLEtBQUssRUFBRSxDQUFvQjtJQUFDLENBQUM7SUFFL0QsR0FBSyxDQUEyQlYsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBdkNZLFFBQVEsR0FBaUJaLEdBQWUsS0FBOUJhLFdBQVcsR0FBSWIsR0FBZTtJQUUvQyxHQUFHLENBQUNjLE9BQU87SUFDWCxFQUFFLEVBQUVGLFFBQVEsRUFBRSxDQUFDO1FBQ2JFLE9BQU8sd0VBQUlULG1EQUFPO1lBQUNVLFNBQVMsRUFBRVQsZ0VBQVc7Ozs7Ozs7O0lBQzNDLENBQUMsTUFBTSxDQUFDO1FBQ05RLE9BQU8sd0VBQUlWLG1EQUFPO1lBQUNXLFNBQVMsRUFBRVQsZ0VBQVc7Ozs7Ozs7O0lBQzNDLENBQUM7SUFFRCxHQUFLLENBQUNXLGlCQUFpQixHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDcENBLEtBQUssQ0FBQ0MsY0FBYztRQUNwQk4sV0FBVyxFQUFFRCxRQUFRO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLHVFQUNIUSxDQUFHOzs7Ozs7OztpRkFDRGxCLCtDQUFNOzs7Ozs7OztZQUNOTyxXQUFXLDBFQUNUVyxDQUFHOzs7Ozs7Ozt5RkFDREMsQ0FBTTt3QkFBQ04sU0FBUyxFQUFFVCxtRUFBYzt3QkFBRWlCLE9BQU8sRUFBRU4saUJBQWlCOzs7Ozs7O2tDQUMxREgsT0FBTzs7b0JBRVRGLFFBQVEseUVBQUtULG1EQUFVOzs7Ozs7Ozs7O1lBRzNCUSxTQUFTLHlFQUFLUixtREFBVTs7Ozs7Ozs7aUZBQ3hCcUIsQ0FBSTtnQkFBQ1QsU0FBUyxFQUFFVCxnRUFBVzs7Ozs7OzswQkFBR0UsS0FBSyxDQUFDaUIsUUFBUTs7a0ZBQzVDQyxDQUFNO2dCQUFDWCxTQUFTLEVBQUVULGtFQUFhOzs7Ozs7OztvQkFBRSxDQUVoQzt5RkFBQ3FCLENBQUM7d0JBQUNDLElBQUksRUFBQyxDQUErRDs7Ozs7OztrQ0FBQyxDQUV4RTs7b0JBQUksQ0FFSjt5RkFBQ0MsQ0FBRTs7Ozs7Ozs7b0JBQUcsQ0FFUjs7Ozs7QUFHTixDQUFDO0dBMUNLdEIsTUFBTTs7UUFDVU4sMkRBQWE7UUFDZkEsMkRBQWE7OztLQUYzQk0sTUFBTTtBQTRDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz9jMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IEltTWVudTMsIEltTWVudTQgfSBmcm9tICdyZWFjdC1pY29ucy9pbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc21hbGxTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6ICcobWF4LXdpZHRoOiA0OTlweCknIH0pO1xuICBjb25zdCBiaWdTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6ICcobWluLXdpZHRoOiA1MDBweCknIH0pO1xuXG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBtZW51VHh0O1xuICBpZiAoc2hvd01lbnUpIHtcbiAgICBtZW51VHh0ID0gPEltTWVudTQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz47XG4gIH0gZWxzZSB7XG4gICAgbWVudVR4dCA9IDxJbU1lbnUzIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+O1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlTWVudUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNob3dNZW51KCFzaG93TWVudSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3NtYWxsU2NyZWVuICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVidG59IG9uQ2xpY2s9e3RvZ2dsZU1lbnVIYW5kbGVyfT5cbiAgICAgICAgICAgIHttZW51VHh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtzaG93TWVudSAmJiA8TmF2aWdhdGlvbiAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2JpZ1NjcmVlbiAmJiA8TmF2aWdhdGlvbiAvPn1cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59Pntwcm9wcy5jaGlsZHJlbn08L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICZjb3B5OyZuYnNwO0NvcHlyaWdodCZuYnNwO1xuICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGVyZXphLXRlcmVzYS1rb25zdGFyaS04Yjk1OTQxMzEvJz5cbiAgICAgICAgICBUZXJlemEgS29uc3RhcmlcbiAgICAgICAgPC9hPlxuICAgICAgICAmbmJzcDsyMDIxXG4gICAgICAgIDxiciAvPlxuICAgICAgICBNSVQgTGljZW5zZVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU1lZGlhUXVlcnkiLCJIZWFkZXIiLCJOYXZpZ2F0aW9uIiwiSW1NZW51MyIsIkltTWVudTQiLCJzdHlsZXMiLCJMYXlvdXQiLCJwcm9wcyIsInNtYWxsU2NyZWVuIiwicXVlcnkiLCJiaWdTY3JlZW4iLCJzaG93TWVudSIsInNldFNob3dNZW51IiwibWVudVR4dCIsImNsYXNzTmFtZSIsImljb24iLCJ0b2dnbGVNZW51SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJidXR0b24iLCJtZW51YnRuIiwib25DbGljayIsIm1haW4iLCJjaGlsZHJlbiIsImZvb3RlciIsImEiLCJocmVmIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ })

});