/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/Services/prismic.ts":
/*!*********************************!*\
  !*** ./src/Services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvcHJpc21pYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLFNBQVVDLGdCQUFWLENBQTJCQyxHQUEzQixFQUEwQztBQUMvQyxRQUFNQyxPQUFPLEdBQUdILCtEQUFBLENBQ2RLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFERSxFQUVkO0FBQ0VMLElBQUFBLEdBREY7QUFFRU0sSUFBQUEsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGM0IsR0FGYyxDQUFoQjtBQVFBLFNBQU9OLE9BQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9TZXJ2aWNlcy9wcmlzbWljLnRzPzA3YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCxcbiAgICB7XG4gICAgICByZXEsXG4gICAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU5cbiAgICB9XG4gIClcblxuICByZXR1cm4gcHJpc21pYztcbn0iXSwibmFtZXMiOlsiUHJpc21pYyIsImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfRU5EUE9JTlQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Services_prismic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/prismic */ \"./src/Services/prismic.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/jackeline/Documentos/Ig.news/src/pages/posts/index.tsx\";\n\n\n\n\n\n\nfunction Posts() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Posts | Ignews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().posts),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"time\", {\n            children: \"01 de dezembro de 2021\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n            children: \"Mapas com React usando Leaflet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: \"Neste post vamos desenvolver uma p\\xE1gina web para demonstrar, na pr\\xE1tica, a integra\\xE7\\xE3o de Mapas em uma aplica\\xE7\\xE3o com React usando Leaflet.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"time\", {\n            children: \"01 de dezembro de 2021\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n            children: \"Mapas com React usando Leaflet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: \"Neste post vamos desenvolver uma p\\xE1gina web para demonstrar, na pr\\xE1tica, a integra\\xE7\\xE3o de Mapas em uma aplica\\xE7\\xE3o com React usando Leaflet.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"time\", {\n            children: \"01 de dezembro de 2021\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n            children: \"Mapas com React usando Leaflet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: \"Neste post vamos desenvolver uma p\\xE1gina web para demonstrar, na pr\\xE1tica, a integra\\xE7\\xE3o de Mapas em uma aplica\\xE7\\xE3o com React usando Leaflet.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const prismic = (0,_Services_prismic__WEBPACK_IMPORTED_MODULE_2__.getPrismicClient)();\n  const response = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_1___default().predicates.at('document.type', 'publication')], {\n    fetch: ['publication.title', 'publication.content'],\n    pageSize: 100\n  });\n  return {\n    props: {}\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFZSxTQUFTSSxLQUFULEdBQWlCO0FBQzlCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQU0sZUFBUyxFQUFFRixzRUFBakI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLGtFQUFoQjtBQUFBLGdDQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFXRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQTJCQztBQUVNLE1BQU1LLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNQyxPQUFPLEdBQUdMLG1FQUFnQixFQUFoQztBQUVBLFFBQU1NLFFBQVEsR0FBRyxNQUFNRCxPQUFPLENBQUNFLEtBQVIsQ0FBYyxDQUNuQ1Qsc0VBQUEsQ0FBc0IsZUFBdEIsRUFBdUMsYUFBdkMsQ0FEbUMsQ0FBZCxFQUVwQjtBQUNEWSxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixxQkFBdEIsQ0FETjtBQUVEQyxJQUFBQSxRQUFRLEVBQUU7QUFGVCxHQUZvQixDQUF2QjtBQU9BLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBREYsR0FBUDtBQUdELENBYk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4Pzc2OTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc30gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gJy4uLy4uL1NlcnZpY2VzL3ByaXNtaWMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UG9zdHMgfCBJZ25ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHRpbWU+MDEgZGUgZGV6ZW1icm8gZGUgMjAyMTwvdGltZT5cbiAgICAgICAgICAgIDxzdHJvbmc+TWFwYXMgY29tIFJlYWN0IHVzYW5kbyBMZWFmbGV0PC9zdHJvbmc+XG4gICAgICAgICAgICA8cD5OZXN0ZSBwb3N0IHZhbW9zIGRlc2Vudm9sdmVyIHVtYSBww6FnaW5hIHdlYiBwYXJhIGRlbW9uc3RyYXIsIG5hIHByw6F0aWNhLCBhIGludGVncmHDp8OjbyBkZSBNYXBhcyBlbSB1bWEgYXBsaWNhw6fDo28gY29tIFJlYWN0IHVzYW5kbyBMZWFmbGV0LjwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDx0aW1lPjAxIGRlIGRlemVtYnJvIGRlIDIwMjE8L3RpbWU+XG4gICAgICAgICAgICA8c3Ryb25nPk1hcGFzIGNvbSBSZWFjdCB1c2FuZG8gTGVhZmxldDwvc3Ryb25nPlxuICAgICAgICAgICAgPHA+TmVzdGUgcG9zdCB2YW1vcyBkZXNlbnZvbHZlciB1bWEgcMOhZ2luYSB3ZWIgcGFyYSBkZW1vbnN0cmFyLCBuYSBwcsOhdGljYSwgYSBpbnRlZ3Jhw6fDo28gZGUgTWFwYXMgZW0gdW1hIGFwbGljYcOnw6NvIGNvbSBSZWFjdCB1c2FuZG8gTGVhZmxldC48L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8dGltZT4wMSBkZSBkZXplbWJybyBkZSAyMDIxPC90aW1lPlxuICAgICAgICAgICAgPHN0cm9uZz5NYXBhcyBjb20gUmVhY3QgdXNhbmRvIExlYWZsZXQ8L3N0cm9uZz5cbiAgICAgICAgICAgIDxwPk5lc3RlIHBvc3QgdmFtb3MgZGVzZW52b2x2ZXIgdW1hIHDDoWdpbmEgd2ViIHBhcmEgZGVtb25zdHJhciwgbmEgcHLDoXRpY2EsIGEgaW50ZWdyYcOnw6NvIGRlIE1hcGFzIGVtIHVtYSBhcGxpY2HDp8OjbyBjb20gUmVhY3QgdXNhbmRvIExlYWZsZXQuPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFtcbiAgICAgIFByaXNtaWMucHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdwdWJsaWNhdGlvbicpXG4gICAgXSwge1xuICAgICAgZmV0Y2g6IFsncHVibGljYXRpb24udGl0bGUnLCAncHVibGljYXRpb24uY29udGVudCddLFxuICAgICAgcGFnZVNpemU6IDEwMCxcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge31cbiAgICB9XG4gIH0iXSwibmFtZXMiOlsiSGVhZCIsIlByaXNtaWMiLCJzdHlsZXMiLCJnZXRQcmlzbWljQ2xpZW50IiwiUG9zdHMiLCJjb250YWluZXIiLCJwb3N0cyIsImdldFN0YXRpY1Byb3BzIiwicHJpc21pYyIsInJlc3BvbnNlIiwicXVlcnkiLCJwcmVkaWNhdGVzIiwiYXQiLCJmZXRjaCIsInBhZ2VTaXplIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

/***/ }),

/***/ "./src/pages/posts/styles.module.scss":
/*!********************************************!*\
  !*** ./src/pages/posts/styles.module.scss ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__ly6-1\",\n\t\"posts\": \"styles_posts__165L0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzPzVhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fbHk2LTFcIixcblx0XCJwb3N0c1wiOiBcInN0eWxlc19wb3N0c19fMTY1TDBcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/styles.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/index.tsx"));
module.exports = __webpack_exports__;

})();