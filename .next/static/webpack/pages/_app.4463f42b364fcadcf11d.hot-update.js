/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./src/components/Header/styles.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./src/components/Header/styles.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_headerContainer__3jyUX {\\n  height: 5rem;\\n  border-bottom: 1px solid var(--gray-800);\\n}\\n\\n.styles_headerContent__2P--I {\\n  max-width: 1120px;\\n  height: 5rem;\\n  margin: 0 auto;\\n  padding: 0 2rem;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.styles_headerContent__2P--I nav {\\n  margin-left: 5rem;\\n  height: 5rem;\\n}\\n.styles_headerContent__2P--I nav a {\\n  display: inline-block;\\n  position: relative;\\n  padding: 0 0.5rem;\\n  height: 5rem;\\n  line-height: 5rem;\\n  color: var(--gray-300);\\n  -webkit-transition: color 0.2s;\\n  transition: color 0.2s;\\n}\\n.styles_headerContent__2P--I nav a + a {\\n  color: var(--white);\\n  margin-left: 2rem;\\n}\\n.styles_headerContent__2P--I nav a:hover {\\n  color: var(--white);\\n}\\n.styles_headerContent__2P--I nav a.styles_active__3zqNB {\\n  color: var(--white);\\n  font-weight: bold;\\n}\\n.styles_headerContent__2P--I nav a.styles_active__3zqNB::after {\\n  content: \\\"\\\";\\n  height: 3px;\\n  border-radius: 3px 3px 0 0;\\n  width: 100%;\\n  position: absolute;\\n  bottom: 1px;\\n  left: 0;\\n  background: var(--yellow-500);\\n}\\n.styles_headerContent__2P--I button {\\n  margin-left: auto;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,YAAA;EACA,wCAAA;AACF;;AAEA;EACE,iBAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AAAF;AAEE;EACE,iBAAA;EACA,YAAA;AAAJ;AAEI;EACE,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EAEA,8BAAA;EAAA,sBAAA;AADN;AAGM;EAEE,mBAAA;EACA,iBAAA;AAFR;AAKM;EACE,mBAAA;AAHR;AAMM;EACE,mBAAA;EACA,iBAAA;AAJR;AAOM;EACE,WAAA;EACA,WAAA;EACA,0BAAA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;EACA,OAAA;EACA,6BAAA;AALR;AAUE;EACE,iBAAA;AARJ\",\"sourcesContent\":[\".headerContainer {\\n  height: 5rem;\\n  border-bottom: 1px solid var(--gray-800);\\n}\\n\\n.headerContent {\\n  max-width: 1120px;\\n  height: 5rem;\\n  margin: 0 auto;\\n  padding: 0 2rem;\\n\\n  display: flex;\\n  align-items: center;\\n\\n  nav {\\n    margin-left: 5rem;\\n    height: 5rem;\\n\\n    a {\\n      display: inline-block;\\n      position: relative;\\n      padding: 0 0.5rem;\\n      height: 5rem;\\n      line-height: 5rem;\\n      color: var(--gray-300);\\n\\n      transition: color 0.2s;\\n\\n      & + a {\\n        // espacamento dos itens apartir do segundo\\n        color: var(--white);\\n        margin-left: 2rem;\\n      }\\n\\n      &:hover {\\n        color: var(--white);\\n      }\\n\\n      &.active {\\n        color: var(--white);\\n        font-weight: bold;\\n      }\\n\\n      &.active::after {\\n        content: '';\\n        height: 3px;\\n        border-radius: 3px 3px 0 0;\\n        width: 100%;\\n        position: absolute;\\n        bottom: 1px;\\n        left: 0;\\n        background: var(--yellow-500);\\n      }\\n    }\\n  }\\n\\n  button {\\n    margin-left: auto;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"headerContainer\": \"styles_headerContainer__3jyUX\",\n\t\"headerContent\": \"styles_headerContent__2P--I\",\n\t\"active\": \"styles_active__3zqNB\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDBFQUEwRSxpQkFBaUIsNkNBQTZDLEdBQUcsa0NBQWtDLHNCQUFzQixpQkFBaUIsbUJBQW1CLG9CQUFvQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsR0FBRyxvQ0FBb0Msc0JBQXNCLGlCQUFpQixHQUFHLHNDQUFzQywwQkFBMEIsdUJBQXVCLHNCQUFzQixpQkFBaUIsc0JBQXNCLDJCQUEyQixtQ0FBbUMsMkJBQTJCLEdBQUcsMENBQTBDLHdCQUF3QixzQkFBc0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcsMkRBQTJELHdCQUF3QixzQkFBc0IsR0FBRyxrRUFBa0Usa0JBQWtCLGdCQUFnQiwrQkFBK0IsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsWUFBWSxrQ0FBa0MsR0FBRyx1Q0FBdUMsc0JBQXNCLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLDJDQUEyQyxpQkFBaUIsNkNBQTZDLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsbUJBQW1CLG9CQUFvQixvQkFBb0Isd0JBQXdCLFdBQVcsd0JBQXdCLG1CQUFtQixXQUFXLDhCQUE4QiwyQkFBMkIsMEJBQTBCLHFCQUFxQiwwQkFBMEIsK0JBQStCLGlDQUFpQyxpQkFBaUIsbUZBQW1GLDRCQUE0QixTQUFTLG1CQUFtQiw4QkFBOEIsU0FBUyxvQkFBb0IsOEJBQThCLDRCQUE0QixTQUFTLDJCQUEyQixzQkFBc0Isc0JBQXNCLHFDQUFxQyxzQkFBc0IsNkJBQTZCLHNCQUFzQixrQkFBa0Isd0NBQXdDLFNBQVMsT0FBTyxLQUFLLGNBQWMsd0JBQXdCLEtBQUssR0FBRyxxQkFBcUI7QUFDeDBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3M/ZjNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX2hlYWRlckNvbnRhaW5lcl9fM2p5VVgge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktODAwKTtcXG59XFxuXFxuLnN0eWxlc19oZWFkZXJDb250ZW50X18yUC0tSSB7XFxuICBtYXgtd2lkdGg6IDExMjBweDtcXG4gIGhlaWdodDogNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0eWxlc19oZWFkZXJDb250ZW50X18yUC0tSSBuYXYge1xcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcbi5zdHlsZXNfaGVhZGVyQ29udGVudF9fMlAtLUkgbmF2IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICBsaW5lLWhlaWdodDogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcbn1cXG4uc3R5bGVzX2hlYWRlckNvbnRlbnRfXzJQLS1JIG5hdiBhICsgYSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi5zdHlsZXNfaGVhZGVyQ29udGVudF9fMlAtLUkgbmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLnN0eWxlc19oZWFkZXJDb250ZW50X18yUC0tSSBuYXYgYS5zdHlsZXNfYWN0aXZlX18zenFOQiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zdHlsZXNfaGVhZGVyQ29udGVudF9fMlAtLUkgbmF2IGEuc3R5bGVzX2FjdGl2ZV9fM3pxTkI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTUwMCk7XFxufVxcbi5zdHlsZXNfaGVhZGVyQ29udGVudF9fMlAtLUkgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsOEJBQUE7RUFBQSxzQkFBQTtBQUROO0FBR007RUFFRSxtQkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFNTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9NO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7QUFMUjtBQVVFO0VBQ0UsaUJBQUE7QUFSSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTgwMCk7XFxufVxcblxcbi5oZWFkZXJDb250ZW50IHtcXG4gIG1heC13aWR0aDogMTEyMHB4O1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIG5hdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuXFxuICAgIGEge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgcGFkZGluZzogMCAwLjVyZW07XFxuICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxuXFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcXG5cXG4gICAgICAmICsgYSB7XFxuICAgICAgICAvLyBlc3BhY2FtZW50byBkb3MgaXRlbnMgYXBhcnRpciBkbyBzZWd1bmRvXFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICB9XFxuXFxuICAgICAgJi5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIH1cXG5cXG4gICAgICAmLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDFweDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctNTAwKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyQ29udGFpbmVyX18zanlVWFwiLFxuXHRcImhlYWRlckNvbnRlbnRcIjogXCJzdHlsZXNfaGVhZGVyQ29udGVudF9fMlAtLUlcIixcblx0XCJhY3RpdmVcIjogXCJzdHlsZXNfYWN0aXZlX18zenFOQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./src/components/Header/styles.module.scss\n");

/***/ })

});