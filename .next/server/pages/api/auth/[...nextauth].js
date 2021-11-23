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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/Services/fauna.ts":
/*!*******************************!*\
  !*** ./src/Services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY,\n  domain: 'db.us.fauna.com'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQUosQ0FBVztBQUM5QkUsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FEVTtBQUU5QkMsRUFBQUEsTUFBTSxFQUFFO0FBRnNCLENBQVgsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9TZXJ2aWNlcy9mYXVuYS50cz9kNTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxuICBkb21haW46ICdkYi51cy5mYXVuYS5jb20nLFxufSkiXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiLCJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/fauna.ts\n");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/fauna */ \"./src/Services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: 'read:user'\n  }) // ...add more providers here\n  ],\n  callbacks: {\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _Services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('user'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUVBQWVFLGdEQUFRLENBQUM7QUFDdEI7QUFDQUcsRUFBQUEsU0FBUyxFQUFFLENBQ1RGLGlFQUFBLENBQWlCO0FBQ2ZJLElBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURQO0FBRWZDLElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUZYO0FBR2ZDLElBQUFBLEtBQUssRUFBRTtBQUhRLEdBQWpCLENBRFMsQ0FNVDtBQU5TLEdBRlc7QUFXdEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNULFVBQU1DLE1BQU4sQ0FBYUMsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQ25DLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFZSCxJQUFsQjs7QUFFRCxVQUFHO0FBQ0YsY0FBTVosd0RBQUEsQ0FDSkgsNkNBQUEsQ0FDRUEsOENBQUEsQ0FDRUEsaURBQUEsQ0FDRUEsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSxlQUFSLENBREYsRUFFRUEsbURBQUEsQ0FBV2UsSUFBSSxDQUFDRyxLQUFoQixDQUZGLENBREYsQ0FERixDQURGLEVBU0VsQixpREFBQSxDQUNFQSxxREFBQSxDQUFhLE1BQWIsQ0FERixFQUVFO0FBQUMyQixVQUFBQSxJQUFJLEVBQUU7QUFBRVQsWUFBQUE7QUFBRjtBQUFQLFNBRkYsQ0FURixFQWFJbEIsOENBQUEsQ0FDRUEsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSxlQUFSLENBREYsRUFFSUEsbURBQUEsQ0FBV2UsSUFBSSxDQUFDRyxLQUFoQixDQUZKLENBREYsQ0FiSixDQURJLENBQU47QUFzQkEsZUFBTyxJQUFQO0FBQ0EsT0F4QkQsQ0F3QkMsTUFBTTtBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Q7O0FBL0JRO0FBWFcsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzcyY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCJcbmltcG9ydCB7ZmF1bmF9IGZyb20gJy4uLy4uLy4uL1NlcnZpY2VzL2ZhdW5hJ1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBzY29wZTogJ3JlYWQ6dXNlcicsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlclxuXG4gICAgIHRyeXtcbiAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICBxLklmKFxuICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgcS5DcmVhdGUoXG4gICAgICAgICAgICBxLkNvbGxlY3Rpb24oJ3VzZXInKSxcbiAgICAgICAgICAgIHtkYXRhOiB7IGVtYWlsIH19XG4gICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICAgfWNhdGNoIHtcbiAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgfVxuICAgIH0sICBcbiAgfVxufSkiXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJmYXVuYSIsInByb3ZpZGVycyIsIkdpdEh1YiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsInNjb3BlIiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiR2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();