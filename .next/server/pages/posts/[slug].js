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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/Services/prismic.ts":
/*!*********************************!*\
  !*** ./src/Services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvcHJpc21pYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLFNBQVVDLGdCQUFWLENBQTJCQyxHQUEzQixFQUEwQztBQUMvQyxRQUFNQyxPQUFPLEdBQUdILCtEQUFBLENBQ2RLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFERSxFQUVkO0FBQ0VMLElBQUFBLEdBREY7QUFFRU0sSUFBQUEsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGM0IsR0FGYyxDQUFoQjtBQVFBLFNBQU9OLE9BQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9TZXJ2aWNlcy9wcmlzbWljLnRzPzA3YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCxcbiAgICB7XG4gICAgICByZXEsXG4gICAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU5cbiAgICB9XG4gIClcblxuICByZXR1cm4gcHJpc21pYztcbn0iXSwibmFtZXMiOlsiUHJpc21pYyIsImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfRU5EUE9JTlQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/prismic */ \"./src/Services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/jackeline/Documentos/Ig.news/src/pages/posts/[slug].tsx\";\n\n\n\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: [post.title, \" | Ignews\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"article\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().post),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"time\", {\n          children: post.updatedAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postContent),\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  req,\n  params\n}) => {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n  const {\n    slug\n  } = params;\n\n  if (!(session !== null && session !== void 0 && session.activeSubscription)) {\n    return {\n      redirect: {\n        destination: `/posts/preview/${slug}`,\n        permanent: false\n      }\n    };\n  }\n\n  const prismic = (0,_Services_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)(req);\n  const response = await prismic.getByUID('publication', String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_1__.RichText.asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_1__.RichText.asHtml(response.data.content),\n    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {\n      day: '2-digit',\n      month: 'long',\n      year: 'numeric'\n    })\n  };\n  return {\n    props: {\n      post\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFXZSxTQUFTTSxJQUFULENBQWM7QUFBRUMsRUFBQUE7QUFBRixDQUFkLEVBQW1DO0FBRWhELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG1CQUFRQSxJQUFJLENBQUNDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVILG9FQUFqQjtBQUFBLDZCQUNFO0FBQVMsaUJBQVMsRUFBRUEsK0RBQXBCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0UsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFPRCxJQUFJLENBQUNHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQ0UsbUJBQVMsRUFBRUwsc0VBRGI7QUFFRSxpQ0FBdUIsRUFBRTtBQUFFTyxZQUFBQSxNQUFNLEVBQUVMLElBQUksQ0FBQ007QUFBZjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBa0JEO0FBRU0sTUFBTUMsa0JBQXNDLEdBQUcsT0FBTztBQUFFQyxFQUFBQSxHQUFGO0FBQU9DLEVBQUFBO0FBQVAsQ0FBUCxLQUEyQjtBQUMvRSxRQUFNQyxPQUFPLEdBQUksTUFBTWpCLDREQUFVLENBQUM7QUFBRWUsSUFBQUE7QUFBRixHQUFELENBQWpDO0FBQ0EsUUFBTTtBQUFFRyxJQUFBQTtBQUFGLE1BQVdGLE1BQWpCOztBQUVBLE1BQUcsRUFBQ0MsT0FBRCxhQUFDQSxPQUFELGVBQUNBLE9BQU8sQ0FBRUUsa0JBQVYsQ0FBSCxFQUFnQztBQUM5QixXQUFPO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxXQUFXLEVBQUcsa0JBQWlCSCxJQUFLLEVBRDVCO0FBRVJJLFFBQUFBLFNBQVMsRUFBRTtBQUZIO0FBREwsS0FBUDtBQU1EOztBQUVELFFBQU1DLE9BQU8sR0FBR25CLG1FQUFnQixDQUFDVyxHQUFELENBQWhDO0FBQ0EsUUFBTVMsUUFBUSxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsUUFBUixDQUFpQixhQUFqQixFQUFnQ0MsTUFBTSxDQUFDUixJQUFELENBQXRDLEVBQThDLEVBQTlDLENBQXZCO0FBRUEsUUFBTVgsSUFBSSxHQUFHO0FBQ1hXLElBQUFBLElBRFc7QUFFWFYsSUFBQUEsS0FBSyxFQUFFUCx3REFBQSxDQUFnQnVCLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjcEIsS0FBOUIsQ0FGSTtBQUdYSyxJQUFBQSxPQUFPLEVBQUVaLHdEQUFBLENBQWdCdUIsUUFBUSxDQUFDSSxJQUFULENBQWNmLE9BQTlCLENBSEU7QUFJWEgsSUFBQUEsU0FBUyxFQUFFLElBQUlvQixJQUFKLENBQVNOLFFBQVEsQ0FBQ08scUJBQWxCLEVBQXlDQyxrQkFBekMsQ0FBNEQsT0FBNUQsRUFBcUU7QUFDOUVDLE1BQUFBLEdBQUcsRUFBRSxTQUR5RTtBQUU5RUMsTUFBQUEsS0FBSyxFQUFFLE1BRnVFO0FBRzlFQyxNQUFBQSxJQUFJLEVBQUU7QUFId0UsS0FBckU7QUFKQSxHQUFiO0FBVUEsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTDdCLE1BQUFBO0FBREs7QUFERixHQUFQO0FBS0QsQ0EvQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD9kMDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc30gZnJvbSAnbmV4dCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9TZXJ2aWNlcy9wcmlzbWljJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDoge1xuICAgIHNsdWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQb3N0UHJvcHMpIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSB8IElnbmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb250ZW50fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtc1xuXG4gIGlmKCFzZXNzaW9uPy5hY3RpdmVTdWJzY3JpcHRpb24pe1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogYC9wb3N0cy9wcmV2aWV3LyR7c2x1Z31gLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudChyZXEpXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5nZXRCeVVJRCgncHVibGljYXRpb24nLCBTdHJpbmcoc2x1ZyksIHt9KVxuXG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgc2x1ZyxcbiAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHJlc3BvbnNlLmRhdGEudGl0bGUpLFxuICAgIGNvbnRlbnQ6IFJpY2hUZXh0LmFzSHRtbChyZXNwb25zZS5kYXRhLmNvbnRlbnQpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUocmVzcG9uc2UubGFzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIlJpY2hUZXh0IiwiUmVhY3QiLCJIZWFkIiwiZ2V0UHJpc21pY0NsaWVudCIsInN0eWxlcyIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJjb250YWluZXIiLCJ1cGRhdGVkQXQiLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwic2x1ZyIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcmlzbWljIiwicmVzcG9uc2UiLCJnZXRCeVVJRCIsIlN0cmluZyIsImFzVGV4dCIsImRhdGEiLCJhc0h0bWwiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2m5md\",\n\t\"post\": \"post_post__3quL2\",\n\t\"postContent\": \"post_postContent__B7qN9\",\n\t\"previewContent\": \"post_previewContent__oPpak\",\n\t\"continueReading\": \"post_continueReading__2RmZn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL3Bvc3QubW9kdWxlLnNjc3M/MzI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0X2NvbnRhaW5lcl9fMm01bWRcIixcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X18zcXVMMlwiLFxuXHRcInBvc3RDb250ZW50XCI6IFwicG9zdF9wb3N0Q29udGVudF9fQjdxTjlcIixcblx0XCJwcmV2aWV3Q29udGVudFwiOiBcInBvc3RfcHJldmlld0NvbnRlbnRfX29QcGFrXCIsXG5cdFwiY29udGludWVSZWFkaW5nXCI6IFwicG9zdF9jb250aW51ZVJlYWRpbmdfXzJSbVpuXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();