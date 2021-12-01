"use strict";
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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/Services/fauna.ts":
/*!*******************************!*\
  !*** ./src/Services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY,\n  domain: 'db.us.fauna.com'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQUosQ0FBVztBQUM5QkUsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FEVTtBQUU5QkMsRUFBQUEsTUFBTSxFQUFFO0FBRnNCLENBQVgsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9TZXJ2aWNlcy9mYXVuYS50cz9kNTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxuICBkb21haW46ICdkYi51cy5mYXVuYS5jb20nLFxufSkiXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiLCJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/fauna.ts\n");

/***/ }),

/***/ "./src/Services/stripe.ts":
/*!********************************!*\
  !*** ./src/Services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFKLENBQ3BCRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsY0FEUSxFQUVwQjtBQUNFQyxFQUFBQSxVQUFVLEVBQUUsWUFEZDtBQUVFQyxFQUFBQSxPQUFPLEVBQUM7QUFDTkMsSUFBQUEsSUFBSSxFQUFFLFFBREE7QUFFTlAsSUFBQUEsT0FBT0Esb0RBQUFBO0FBRkQ7QUFGVixDQUZvQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL1NlcnZpY2VzL3N0cmlwZS50cz9lN2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlIChcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gIHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgYXBwSW5mbzp7XG4gICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgIHZlcnNpb24sXG4gICAgfSxcbiAgfVxuKSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Services/stripe.ts\n");

/***/ }),

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/fauna */ \"./src/Services/fauna.ts\");\n/* harmony import */ var _Services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/stripe */ \"./src/Services/stripe.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'POST') {\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n      req\n    });\n    const user = await _Services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustomer = await _Services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n        email: session.user.email\n      });\n      await _Services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), user.ref.id), {\n        data: {\n          stripe_costumer_id: stripeCustomer.id\n        }\n      }));\n      customerId = stripeCustomer.id;\n    }\n\n    const stripeCheckoutSession = await _Services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n      customer: customerId,\n      payment_method_types: ['card'],\n      billing_address_collection: 'required',\n      line_items: [{\n        price: 'price_1JaW9BFIfzOXuVXhP4eYnclU',\n        quantity: 1\n      }],\n      mode: 'subscription',\n      allow_promotion_codes: true,\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      cancel_url: process.env.STRIPE_CANCEL_URL\n    });\n    return res.status(200).json({\n      sessionId: stripeCheckoutSession.id\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQSxpRUFBZSxPQUFPSyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFsQixFQUEwQjtBQUN4QixVQUFNQyxPQUFPLEdBQUcsTUFBTU4sNERBQVUsQ0FBQztBQUFFRyxNQUFBQTtBQUFGLEtBQUQsQ0FBaEM7QUFFQSxVQUFNSSxJQUFJLEdBQUcsTUFBTU4sd0RBQUEsQ0FDakJGLDhDQUFBLENBQ0VBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsZUFBUixDQURGLEVBRUdBLG1EQUFBLENBQVdPLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSyxLQUF4QixDQUZILENBREYsQ0FEaUIsQ0FBbkI7QUFRQSxRQUFJQyxVQUFVLEdBQUdOLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxrQkFBM0I7O0FBRUEsUUFBSSxDQUFDRixVQUFMLEVBQWlCO0FBRWYsWUFBTUcsY0FBYyxHQUFHLE1BQU1kLHFFQUFBLENBQXdCO0FBQ25EVSxRQUFBQSxLQUFLLEVBQUVOLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSztBQUQrQixPQUF4QixDQUE3QjtBQUlGLFlBQU1YLHdEQUFBLENBQ0pGLGlEQUFBLENBQ0VBLDhDQUFBLENBQU1BLHFEQUFBLENBQWEsT0FBYixDQUFOLEVBQTZCUSxJQUFJLENBQUNlLEdBQUwsQ0FBU0MsRUFBdEMsQ0FERixFQUVFO0FBQ0VULFFBQUFBLElBQUksRUFBRTtBQUNKVSxVQUFBQSxrQkFBa0IsRUFBRVIsY0FBYyxDQUFDTztBQUQvQjtBQURSLE9BRkYsQ0FESSxDQUFOO0FBVUFWLE1BQUFBLFVBQVUsR0FBRUcsY0FBYyxDQUFDTyxFQUEzQjtBQUNGOztBQUVFLFVBQU1FLHFCQUFxQixHQUFHLE1BQU12Qiw2RUFBQSxDQUFnQztBQUNsRTBCLE1BQUFBLFFBQVEsRUFBRWYsVUFEd0Q7QUFFbEVnQixNQUFBQSxvQkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FGNEM7QUFHbEVDLE1BQUFBLDBCQUEwQixFQUFFLFVBSHNDO0FBSWxFQyxNQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUFDQyxRQUFBQSxLQUFLLEVBQUUsZ0NBQVI7QUFBMENDLFFBQUFBLFFBQVEsRUFBQztBQUFuRCxPQURVLENBSnNEO0FBT2xFQyxNQUFBQSxJQUFJLEVBQUUsY0FQNEQ7QUFRbEVDLE1BQUFBLHFCQUFxQixFQUFFLElBUjJDO0FBU2xFQyxNQUFBQSxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFUeUM7QUFVbEVDLE1BQUFBLFVBQVUsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBVjBDLEtBQWhDLENBQXBDO0FBYUYsV0FBT3JDLEdBQUcsQ0FBQ3NDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxTQUFTLEVBQUVuQixxQkFBcUIsQ0FBQ0Y7QUFBbkMsS0FBckIsQ0FBUDtBQUNELEdBOUNDLE1BOENLO0FBQ0xuQixJQUFBQSxHQUFHLENBQUN5QyxTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBekMsSUFBQUEsR0FBRyxDQUFDc0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNEO0FBQ0EsQ0FuREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz81NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi9TZXJ2aWNlcy9mYXVuYVwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vLi4vU2VydmljZXMvc3RyaXBlJ1xuXG50eXBlIFVzZXIgPSB7XG4gIHJlZjoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH1cbiAgZGF0YTogeyBcbiAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmluZ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxuICAgICAgcS5HZXQoXG4gICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWRcbiAgICBcbiAgICBpZiAoIWN1c3RvbWVySWQpIHtcblxuICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgICAgIFxuICAgIH0pXG4gICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICBxLlVwZGF0ZShcbiAgICAgICAgcS5SZWYocS5Db2xsZWN0aW9uKCd1c2VycycpLCB1c2VyLnJlZi5pZCksXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiB7IFxuICAgICAgICAgICAgc3RyaXBlX2Nvc3R1bWVyX2lkOiBzdHJpcGVDdXN0b21lci5pZCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApXG4gICAgY3VzdG9tZXJJZD0gc3RyaXBlQ3VzdG9tZXIuaWRcbiB9XG5cbiAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxuICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxuICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdyZXF1aXJlZCcsXG4gICAgICBsaW5lX2l0ZW1zOiBbXG4gICAgICAgIHtwcmljZTogJ3ByaWNlXzFKYVc5QkZJZnpPWHVWWGhQNGVZbmNsVScsIHF1YW50aXR5OjF9XG4gICAgICBdLFxuICAgICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsIFxuICAgICAgc3VjY2Vzc191cmw6IHByb2Nlc3MuZW52LlNUUklQRV9TVUNDRVNTX1VSTCxcbiAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMXG4gIH0pXG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSk7XG59IGVsc2Uge1xuICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJylcbiAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJylcbn1cbn0iXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiZ2V0U2Vzc2lvbiIsImZhdW5hIiwic3RyaXBlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsInVzZXIiLCJHZXQiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJlbWFpbCIsImN1c3RvbWVySWQiLCJkYXRhIiwic3RyaXBlX2N1c3RvbWVyX2lkIiwic3RyaXBlQ3VzdG9tZXIiLCJjdXN0b21lcnMiLCJjcmVhdGUiLCJVcGRhdGUiLCJSZWYiLCJDb2xsZWN0aW9uIiwicmVmIiwiaWQiLCJzdHJpcGVfY29zdHVtZXJfaWQiLCJzdHJpcGVDaGVja291dFNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.21.1","axios":"^0.24.0","faunadb":"^4.4.1","next":"11.1.2","next-auth":"3.13.2","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.41.0","stripe":"^8.176.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^16.9.1","@types/react":"^17.0.21","eslint":"7.32.0","eslint-config-next":"11.1.2","typescript":"^4.4.3"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();