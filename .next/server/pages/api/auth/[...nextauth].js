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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/fauna */ \"./src/Services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: 'read:user'\n  })],\n  callbacks: {\n    async session(session) {\n      try {\n        const userActiveSubscription = await _Services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _Services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsaUVBQWVFLGdEQUFRLENBQUM7QUFDdEJHLEVBQUFBLFNBQVMsRUFBRSxDQUNURixpRUFBQSxDQUFpQjtBQUNmSSxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGWDtBQUdmQyxJQUFBQSxLQUFLLEVBQUU7QUFIUSxHQUFqQixDQURTLENBRFc7QUFRdEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNULFVBQU1DLE9BQU4sQ0FBY0EsT0FBZCxFQUF1QjtBQUNyQixVQUFJO0FBQ0YsY0FBTUMsc0JBQXNCLEdBQUcsTUFBTVosd0RBQUEsQ0FDbkNILDhDQUFBLENBQ0VBLHVEQUFBLENBQWUsQ0FDYkEsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSwwQkFBUixDQURGLEVBRUVBLGlEQUFBLENBQ0UsS0FERixFQUVFQSw4Q0FBQSxDQUNFQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLGVBQVIsQ0FERixFQUVFQSxtREFBQSxDQUFXYyxPQUFPLENBQUNRLElBQVIsQ0FBYUMsS0FBeEIsQ0FGRixDQURGLENBRkYsQ0FGRixDQURhLEVBYWJ2QixnREFBQSxDQUNFQSxnREFBQSxDQUFRLHdCQUFSLENBREYsRUFFRSxRQUZGLENBYmEsQ0FBZixDQURGLENBRG1DLENBQXJDO0FBdUJBLCtDQUNLYyxPQURMO0FBRUVVLFVBQUFBLGtCQUFrQixFQUFFVDtBQUZ0QjtBQUlELE9BNUJELENBNEJFLE1BQU07QUFDTiwrQ0FDS0QsT0FETDtBQUVFVSxVQUFBQSxrQkFBa0IsRUFBRTtBQUZ0QjtBQUlEO0FBQ0YsS0FwQ1E7O0FBcUNULFVBQU1DLE1BQU4sQ0FBYUgsSUFBYixFQUFtQkksT0FBbkIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQ25DLFlBQU07QUFBRUosUUFBQUE7QUFBRixVQUFZRCxJQUFsQjs7QUFFQSxVQUFJO0FBQ0YsY0FBTW5CLHdEQUFBLENBQ0pILDZDQUFBLENBQ0VBLDhDQUFBLENBQ0VBLGlEQUFBLENBQVNBLGdEQUFBLENBQVFBLGdEQUFBLENBQVEsZUFBUixDQUFSLEVBQWtDQSxtREFBQSxDQUFXdUIsS0FBWCxDQUFsQyxDQUFULENBREYsQ0FERixFQUlFdkIsaURBQUEsQ0FBU0EscURBQUEsQ0FBYSxPQUFiLENBQVQsRUFBZ0M7QUFBRWlDLFVBQUFBLElBQUksRUFBRTtBQUFFVixZQUFBQTtBQUFGO0FBQVIsU0FBaEMsQ0FKRixFQUtFdkIsOENBQUEsQ0FBTUEsZ0RBQUEsQ0FBUUEsZ0RBQUEsQ0FBUSxlQUFSLENBQVIsRUFBa0NBLG1EQUFBLENBQVd1QixLQUFYLENBQWxDLENBQU4sQ0FMRixDQURJLENBQU47QUFTQSxlQUFPLElBQVA7QUFDRCxPQVhELENBV0UsTUFBTTtBQUNOLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBdERRO0FBUlcsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzcyY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XG5cbmltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vLi4vU2VydmljZXMvZmF1bmEnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgc2NvcGU6ICdyZWFkOnVzZXInLFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgIHEuSW50ZXJzZWN0aW9uKFtcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfdXNlcl9yZWYnKSxcbiAgICAgICAgICAgICAgICBxLlNlbGVjdChcbiAgICAgICAgICAgICAgICAgIFwicmVmXCIsXG4gICAgICAgICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3N0YXR1cycpLFxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IHVzZXJBY3RpdmVTdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlcjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5JZihcbiAgICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgICBxLkV4aXN0cyhxLk1hdGNoKHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSwgcS5DYXNlZm9sZChlbWFpbCkpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuQ3JlYXRlKHEuQ29sbGVjdGlvbigndXNlcnMnKSwgeyBkYXRhOiB7IGVtYWlsIH0gfSksXG4gICAgICAgICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSwgcS5DYXNlZm9sZChlbWFpbCkpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KTsiXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJmYXVuYSIsInByb3ZpZGVycyIsIkdpdEh1YiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsInNjb3BlIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXJBY3RpdmVTdWJzY3JpcHRpb24iLCJHZXQiLCJJbnRlcnNlY3Rpb24iLCJNYXRjaCIsIkluZGV4IiwiU2VsZWN0IiwiQ2FzZWZvbGQiLCJ1c2VyIiwiZW1haWwiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsIklmIiwiTm90IiwiRXhpc3RzIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

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