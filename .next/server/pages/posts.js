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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/prismic */ \"./src/Services/prismic.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/jackeline/Documentos/Ig.news/src/pages/posts/index.tsx\";\n\n\n //conversor do prismic para texto/html\n\n\n\n\n\n\nfunction Posts({\n  posts\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Posts | Ignews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().posts),\n        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"time\", {\n            children: post.updatedAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"strong\", {\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: post.excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this)]\n        }, post.slug, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n} //API PRISMIC\n\nconst getStaticProps = async () => {\n  const prismic = (0,_Services_prismic__WEBPACK_IMPORTED_MODULE_3__.getPrismicClient)();\n  const response = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_1___default().predicates.at('document.type', 'publication')], {\n    fetch: ['publication.title', 'publication.content'],\n    pageSize: 100\n  }); //Formatação dos dados\n\n  const posts = response.results.map(post => {\n    var _post$data$content$fi, _post$data$content$fi2;\n\n    return {\n      slug: post.uid,\n      title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(post.data.title),\n      excerpt: (_post$data$content$fi = (_post$data$content$fi2 = post.data.content.find(content => content.type === 'paragraph')) === null || _post$data$content$fi2 === void 0 ? void 0 : _post$data$content$fi2.text) !== null && _post$data$content$fi !== void 0 ? _post$data$content$fi : '',\n      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {\n        day: '2-digit',\n        month: 'long',\n        year: 'numeric'\n      })\n    };\n  });\n  return {\n    props: {\n      posts\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0NBQ3dDOztBQUV4QztBQUNBO0FBQ0E7OztBQWFlLFNBQVNNLEtBQVQsQ0FBZTtBQUFDQyxFQUFBQTtBQUFELENBQWYsRUFBb0M7QUFDakQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVKLHNFQUFqQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsa0VBQWhCO0FBQUEsa0JBQ0dJLEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxJQUFJLGlCQUNmO0FBQW1CLGNBQUksRUFBQyxHQUF4QjtBQUFBLGtDQUNFO0FBQUEsc0JBQU9BLElBQUksQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBU0QsSUFBSSxDQUFDRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBLHNCQUFJRixJQUFJLENBQUNHO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBLFdBQVFILElBQUksQ0FBQ0ksSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBbUJDLEVBQ0Q7O0FBRU8sTUFBTUMsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLE9BQU8sR0FBR1osbUVBQWdCLEVBQWhDO0FBRUEsUUFBTWEsUUFBUSxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsS0FBUixDQUFjLENBQ25DakIsc0VBQUEsQ0FBc0IsZUFBdEIsRUFBdUMsYUFBdkMsQ0FEbUMsQ0FBZCxFQUVwQjtBQUNEb0IsSUFBQUEsS0FBSyxFQUFFLENBQUMsbUJBQUQsRUFBc0IscUJBQXRCLENBRE47QUFFREMsSUFBQUEsUUFBUSxFQUFFO0FBRlQsR0FGb0IsQ0FBdkIsQ0FId0QsQ0FVeEQ7O0FBQ0EsUUFBTWYsS0FBSyxHQUFHVSxRQUFRLENBQUNNLE9BQVQsQ0FBaUJkLEdBQWpCLENBQXFCQyxJQUFJLElBQUc7QUFBQTs7QUFDeEMsV0FBTztBQUNMSSxNQUFBQSxJQUFJLEVBQUVKLElBQUksQ0FBQ2MsR0FETjtBQUVMWixNQUFBQSxLQUFLLEVBQUVWLHdEQUFBLENBQWdCUSxJQUFJLENBQUNnQixJQUFMLENBQVVkLEtBQTFCLENBRkY7QUFHTEMsTUFBQUEsT0FBTyxxREFBRUgsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVQyxPQUFWLENBQWtCQyxJQUFsQixDQUF1QkQsT0FBTyxJQUFJQSxPQUFPLENBQUNFLElBQVIsS0FBaUIsV0FBbkQsQ0FBRiwyREFBRSx1QkFBaUVDLElBQW5FLHlFQUEyRSxFQUg3RTtBQUlMbkIsTUFBQUEsU0FBUyxFQUFFLElBQUlvQixJQUFKLENBQVNyQixJQUFJLENBQUNzQixxQkFBZCxFQUFxQ0Msa0JBQXJDLENBQXdELE9BQXhELEVBQWlFO0FBQzFFQyxRQUFBQSxHQUFHLEVBQUUsU0FEcUU7QUFFMUVDLFFBQUFBLEtBQUssRUFBRSxNQUZtRTtBQUcxRUMsUUFBQUEsSUFBSSxFQUFFO0FBSG9FLE9BQWpFO0FBSk4sS0FBUDtBQVVELEdBWGEsQ0FBZDtBQVlBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0w5QixNQUFBQTtBQURLO0FBREYsR0FBUDtBQUtELENBNUJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL2luZGV4LnRzeD83Njk1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCdcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1kb20nICAvL2NvbnZlcnNvciBkbyBwcmlzbWljIHBhcmEgdGV4dG8vaHRtbFxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gJy4uLy4uL1NlcnZpY2VzL3ByaXNtaWMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUG9zdCA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFBvc3RzUHJvcHMge1xuICBwb3N0czogUG9zdFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyh7cG9zdHN9OiBQb3N0c1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Qb3N0cyB8IElnbmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxuICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPGEga2V5PXtwb3N0LnNsdWd9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxuICAgICAgICAgICAgPHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG4gIH1cbiAgLy9BUEkgUFJJU01JQ1xuXG4gIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFtcbiAgICAgIFByaXNtaWMucHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdwdWJsaWNhdGlvbicpXG4gICAgXSwge1xuICAgICAgZmV0Y2g6IFsncHVibGljYXRpb24udGl0bGUnLCAncHVibGljYXRpb24uY29udGVudCddLFxuICAgICAgcGFnZVNpemU6IDEwMCxcbiAgICB9KVxuICAgIFxuICAgIC8vRm9ybWF0YcOnw6NvIGRvcyBkYWRvc1xuICAgIGNvbnN0IHBvc3RzID0gcmVzcG9uc2UucmVzdWx0cy5tYXAocG9zdCA9PntcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNsdWc6IHBvc3QudWlkLFxuICAgICAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHBvc3QuZGF0YS50aXRsZSksXG4gICAgICAgIGV4Y2VycHQ6IHBvc3QuZGF0YS5jb250ZW50LmZpbmQoY29udGVudCA9PiBjb250ZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKT8udGV4dCA/PyAnJyxcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShwb3N0Lmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3N0c1xuICAgICAgfVxuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJIZWFkIiwiUHJpc21pYyIsIlJpY2hUZXh0Iiwic3R5bGVzIiwiZ2V0UHJpc21pY0NsaWVudCIsIlJlYWN0IiwiUG9zdHMiLCJwb3N0cyIsImNvbnRhaW5lciIsIm1hcCIsInBvc3QiLCJ1cGRhdGVkQXQiLCJ0aXRsZSIsImV4Y2VycHQiLCJzbHVnIiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWljIiwicmVzcG9uc2UiLCJxdWVyeSIsInByZWRpY2F0ZXMiLCJhdCIsImZldGNoIiwicGFnZVNpemUiLCJyZXN1bHRzIiwidWlkIiwiYXNUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJmaW5kIiwidHlwZSIsInRleHQiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

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

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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