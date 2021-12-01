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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/Services/api.ts":
/*!*****************************!*\
  !*** ./src/Services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: '/api'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsR0FBRyxHQUFHRCxtREFBQSxDQUFjO0FBQy9CRyxFQUFBQSxPQUFPLEVBQUU7QUFEc0IsQ0FBZCxDQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL1NlcnZpY2VzL2FwaS50cz85YTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUgKHtcbiAgYmFzZVVSTDogJy9hcGknLFxufSkiXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Services/api.ts\n");

/***/ }),

/***/ "./src/Services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/Services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n  const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51JaW3KFIfzOXuVXhdWelfxphzz1OiGzmhu1BmXnts2MuOn6a3oDEPPMo7P5Nn2cqP3wp4k2tgAPmxK7BfnBd3aNT001hRS9cvz\");\n  return stripeJs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sZUFBZUMsV0FBZixHQUE2QjtBQUNsQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUYsNkRBQVUsQ0FBQ0csNkdBQUQsQ0FBakM7QUFFQSxTQUFPRCxRQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvc3RyaXBlLWpzLnRzPzQ2MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCkge1xuICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpO1xuXG4gIHJldHVybiBzdHJpcGVKcztcbn0iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFN0cmlwZUpzIiwic3RyaXBlSnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/stripe-js.ts\n");

/***/ }),

/***/ "./src/Services/stripe.ts":
/*!********************************!*\
  !*** ./src/Services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFKLENBQ3BCRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsY0FEUSxFQUVwQjtBQUNFQyxFQUFBQSxVQUFVLEVBQUUsWUFEZDtBQUVFQyxFQUFBQSxPQUFPLEVBQUM7QUFDTkMsSUFBQUEsSUFBSSxFQUFFLFFBREE7QUFFTlAsSUFBQUEsT0FBT0Esb0RBQUFBO0FBRkQ7QUFGVixDQUZvQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL1NlcnZpY2VzL3N0cmlwZS50cz9lN2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlIChcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gIHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgYXBwSW5mbzp7XG4gICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgIHZlcnNpb24sXG4gICAgfSxcbiAgfVxuKSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Services/stripe.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/api */ \"./src/Services/api.ts\");\n/* harmony import */ var _Services_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/stripe-js */ \"./src/Services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/jackeline/Documentos/Ig.news/src/components/SubscribeButton/index.tsx\";\n\n\n\n\n\nfunction SubscribeButton({\n  priceId\n}) {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.useSession)();\n\n  async function handleSubscribe() {\n    if (!session) {\n      (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.signIn)('github');\n      return;\n    }\n\n    try {\n      const response = await _Services_api__WEBPACK_IMPORTED_MODULE_1__.api.post('/subscribe');\n      const {\n        sessionId\n      } = response.data;\n      const stripe = await (0,_Services_stripe_js__WEBPACK_IMPORTED_MODULE_2__.getStripeJs)();\n      await stripe.redirectToCheckout({\n        sessionId\n      });\n    } catch (err) {\n      alert(err.message);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n    onClick: handleSubscribe,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFNTyxTQUFTSyxlQUFULENBQXlCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBekIsRUFBNEQ7QUFDakUsUUFBTSxDQUFDQyxPQUFELElBQVlOLDREQUFVLEVBQTVCOztBQUVBLGlCQUFlTyxlQUFmLEdBQWlDO0FBQy9CLFFBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1pQLE1BQUFBLHdEQUFNLENBQUMsUUFBRCxDQUFOO0FBQ0E7QUFDRDs7QUFFRCxRQUFJO0FBQ0YsWUFBTVMsUUFBUSxHQUFHLE1BQU1QLG1EQUFBLENBQVMsWUFBVCxDQUF2QjtBQUVBLFlBQU07QUFBRVMsUUFBQUE7QUFBRixVQUFnQkYsUUFBUSxDQUFDRyxJQUEvQjtBQUVBLFlBQU1DLE1BQU0sR0FBRyxNQUFNVixnRUFBVyxFQUFoQztBQUVBLFlBQU1VLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEI7QUFDOUJILFFBQUFBO0FBRDhCLE9BQTFCLENBQU47QUFHRCxLQVZELENBVUUsT0FBT0ksR0FBUCxFQUFZO0FBQ1pDLE1BQUFBLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQUw7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUViLDRFQUZiO0FBR0UsV0FBTyxFQUFFSSxlQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/ZWYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL1NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gJy4uLy4uL1NlcnZpY2VzL3N0cmlwZS1qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcbiAgcHJpY2VJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b25Qcm9wcykge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgc2lnbkluKCdnaXRodWInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3N1YnNjcmliZScpO1xuXG4gICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlSnMoKTtcblxuICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7XG4gICAgICAgIHNlc3Npb25JZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XG4gICAgPlxuICAgICAgU3Vic2NyaWJlIG5vd1xuICAgIDwvYnV0dG9uPlxuICApO1xufSJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiYXBpIiwiZ2V0U3RyaXBlSnMiLCJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJwcmljZUlkIiwic2Vzc2lvbiIsImhhbmRsZVN1YnNjcmliZSIsInJlc3BvbnNlIiwicG9zdCIsInNlc3Npb25JZCIsImRhdGEiLCJzdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJzdWJzY3JpYmVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _Services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/stripe */ \"./src/Services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/jackeline/Documentos/Ig.news/src/pages/index.tsx\";\n\n\n\n //client-side - \n//server-side - dinamico\n//static site generation  - estatico\n\n\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Home | ig.news\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n          children: \"\\uD83D\\uDC4F Hey, welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          children: [\"News about the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 28\n          }, this), \" world\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: [\"Get acess to all the publications \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 45\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__.SubscribeButton, {\n          priceId: product.priceId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"girl coding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _Services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve('price_1JaW9BFIfzOXuVXhP4eYnclU');\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 //24 hours\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBOzs7O0FBU2UsU0FBU0ksSUFBVCxDQUFjO0FBQUNDLEVBQUFBO0FBQUQsQ0FBZCxFQUFxQztBQUNsRCxzQkFDRTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFJQTtBQUFNLGVBQVMsRUFBRUYsMkVBQWpCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEscURBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLHdFQUNvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURwQyxlQUVFO0FBQUEsK0JBQVdFLE9BQU8sQ0FBQ0csTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU9FLDhEQUFDLHdFQUFEO0FBQWlCLGlCQUFPLEVBQUVILE9BQU8sQ0FBQ0k7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFO0FBQUssV0FBRyxFQUFDLG9CQUFUO0FBQThCLFdBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQSxrQkFERjtBQW1CRDtBQUVNLE1BQU1DLGNBQStCLEdBQUcsWUFBWTtBQUMxRCxRQUFNQyxLQUFLLEdBQUcsTUFBTVQsb0VBQUEsQ0FBdUIsZ0NBQXZCLENBQXBCO0FBRUEsUUFBTUcsT0FBTyxHQUFHO0FBQ2RJLElBQUFBLE9BQU8sRUFBRUUsS0FBSyxDQUFDRyxFQUREO0FBRWROLElBQUFBLE1BQU0sRUFBRSxJQUFJTyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDckNDLE1BQUFBLEtBQUssRUFBRSxVQUQ4QjtBQUVyQ0MsTUFBQUEsUUFBUSxFQUFFO0FBRjJCLEtBQS9CLEVBR0xDLE1BSEssQ0FHRVIsS0FBSyxDQUFDUyxXQUFOLEdBQW9CLEdBSHRCO0FBRk0sR0FBaEI7QUFPQyxTQUFPO0FBQ1BDLElBQUFBLEtBQUssRUFBRTtBQUNMaEIsTUFBQUE7QUFESyxLQURBO0FBSVBpQixJQUFBQSxVQUFVLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFKZixDQUlvQjs7QUFKcEIsR0FBUDtBQU1ELENBaEJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbidcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL1NlcnZpY2VzL3N0cmlwZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJ1xuXG4vL2NsaWVudC1zaWRlIC0gXG4vL3NlcnZlci1zaWRlIC0gZGluYW1pY29cbi8vc3RhdGljIHNpdGUgZ2VuZXJhdGlvbiAgLSBlc3RhdGljb1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZHVjdDoge1xuICAgIHByaWNlSWQ6IHN0cmluZztcbiAgICBhbW91bnQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwcm9kdWN0fTogSG9tZVByb3BzICkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lciB9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICA8aDE+TmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR2V0IGFjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zIDxiciAvPlxuICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJnaXJsIGNvZGluZ1wiIC8+XG4gICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUphVzlCRklmek9YdVZYaFA0ZVluY2xVJylcbiBcbiBjb25zdCBwcm9kdWN0ID0ge1xuICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuIH1cbiAgcmV0dXJuIHtcbiAgcHJvcHM6IHtcbiAgICBwcm9kdWN0LFxuICB9LFxuICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsICAvLzI0IGhvdXJzXG59XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJTdWJzY3JpYmVCdXR0b24iLCJzdHJpcGUiLCJzdHlsZXMiLCJIb21lIiwicHJvZHVjdCIsImNvbnRlbnRDb250YWluZXIiLCJoZXJvIiwiYW1vdW50IiwicHJpY2VJZCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__1uQAs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz81YmVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzF1UUFzXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__21EWl\",\n\t\"hero\": \"home_hero__3Za5I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NTM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX18yMUVXbFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fXzNaYTVJXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.21.1","axios":"^0.24.0","faunadb":"^4.4.1","next":"11.1.2","next-auth":"3.13.2","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.41.0","stripe":"^8.176.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^16.9.1","@types/react":"^17.0.21","eslint":"7.32.0","eslint-config-next":"11.1.2","typescript":"^4.4.3"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();