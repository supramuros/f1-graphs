webpackHotUpdate_N_E("pages/driver-summary",{

/***/ "./utils/common/constants.ts":
/*!***********************************!*\
  !*** ./utils/common/constants.ts ***!
  \***********************************/
/*! exports provided: URL_BASE, ERGAST_API, CONSTRUCTOR_COLORS, DEFAULT_CONSTRUCTOR_COLOR, CONSTRUCTOR_COLOR_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_BASE", function() { return URL_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERGAST_API", function() { return ERGAST_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTOR_COLORS", function() { return CONSTRUCTOR_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONSTRUCTOR_COLOR", function() { return DEFAULT_CONSTRUCTOR_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTOR_COLOR_MAP", function() { return CONSTRUCTOR_COLOR_MAP; });
var URL_BASE = 'https://ergast.com/api/f1';
var ERGAST_API;

(function (ERGAST_API) {
  ERGAST_API["SEASONS"] = "seasons";
  ERGAST_API["SCHEDULE"] = "schedule";
  ERGAST_API["RESULTS"] = "results";
  ERGAST_API["LAPS"] = "laps";
  ERGAST_API["RESULTSLAPS"] = "results+laps";
  ERGAST_API["PITSTOPS"] = "pitstops";
  ERGAST_API["DRIVERSTANDINGS"] = "driver-standings";
  ERGAST_API["CONSTRUCTORSTANDINGS"] = "constructor-standings";
})(ERGAST_API || (ERGAST_API = {}));

; //Static file array of constructor -> color is transformed to a Map to be used for inclusion in the data

var CONSTRUCTOR_COLORS = [{
  constructorId: 'red_bull',
  color: '#0600ef'
}, {
  constructorId: 'mercedes',
  color: '#00D2BE'
}, {
  constructorId: 'ferrari',
  color: '#dc0000'
}, {
  constructorId: 'alphatauri',
  color: '#2b4562'
}, {
  constructorId: 'mclaren',
  color: '#FF9800'
}, {
  constructorId: 'alpine',
  color: '#0090ff'
}, {
  constructorId: 'aston_martin',
  color: '#006f62'
}, {
  constructorId: 'alfa',
  color: '#900000'
}, {
  constructorId: 'williams',
  color: '#005aff'
}, {
  constructorId: 'haas',
  color: '#ffffff'
}, {
  constructorId: 'racing_point',
  color: '#f196c6'
}, {
  constructorId: 'force_india',
  color: '#f196c6'
}, {
  constructorId: 'toro_rosso',
  color: '#2b4562'
}, {
  constructorId: 'renault',
  color: '#fce903'
}, {
  constructorId: 'manor',
  color: '#0079bf'
}, {
  constructorId: 'sauber',
  color: '#d6201c'
}];
var DEFAULT_CONSTRUCTOR_COLOR = '#898b8c';
var CONSTRUCTOR_COLOR_MAP = new Map(CONSTRUCTOR_COLORS.map(function (i) {
  return [i.constructorId, i.color];
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29tbW9uL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJVUkxfQkFTRSIsIkVSR0FTVF9BUEkiLCJDT05TVFJVQ1RPUl9DT0xPUlMiLCJjb25zdHJ1Y3RvcklkIiwiY29sb3IiLCJERUZBVUxUX0NPTlNUUlVDVE9SX0NPTE9SIiwiQ09OU1RSVUNUT1JfQ09MT1JfTUFQIiwiTWFwIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFFBQVEsR0FBRywyQkFBakI7QUFFQSxJQUFLQyxVQUFaOztXQUFZQSxVO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBU1gsQyxDQUVEOztBQUNPLElBQU1DLGtCQUE4RCxHQUFHLENBQzFFO0FBQUNDLGVBQWEsRUFBQyxVQUFmO0FBQTJCQyxPQUFLLEVBQUM7QUFBakMsQ0FEMEUsRUFFMUU7QUFBQ0QsZUFBYSxFQUFDLFVBQWY7QUFBMkJDLE9BQUssRUFBQztBQUFqQyxDQUYwRSxFQUcxRTtBQUFDRCxlQUFhLEVBQUMsU0FBZjtBQUF5QkMsT0FBSyxFQUFDO0FBQS9CLENBSDBFLEVBSTFFO0FBQUNELGVBQWEsRUFBQyxZQUFmO0FBQTRCQyxPQUFLLEVBQUM7QUFBbEMsQ0FKMEUsRUFLMUU7QUFBQ0QsZUFBYSxFQUFDLFNBQWY7QUFBeUJDLE9BQUssRUFBQztBQUEvQixDQUwwRSxFQU0xRTtBQUFDRCxlQUFhLEVBQUMsUUFBZjtBQUF3QkMsT0FBSyxFQUFDO0FBQTlCLENBTjBFLEVBTzFFO0FBQUNELGVBQWEsRUFBQyxjQUFmO0FBQThCQyxPQUFLLEVBQUM7QUFBcEMsQ0FQMEUsRUFRMUU7QUFBQ0QsZUFBYSxFQUFDLE1BQWY7QUFBc0JDLE9BQUssRUFBQztBQUE1QixDQVIwRSxFQVMxRTtBQUFDRCxlQUFhLEVBQUMsVUFBZjtBQUEwQkMsT0FBSyxFQUFDO0FBQWhDLENBVDBFLEVBVTFFO0FBQUNELGVBQWEsRUFBQyxNQUFmO0FBQXNCQyxPQUFLLEVBQUM7QUFBNUIsQ0FWMEUsRUFXMUU7QUFBQ0QsZUFBYSxFQUFDLGNBQWY7QUFBK0JDLE9BQUssRUFBQztBQUFyQyxDQVgwRSxFQVkxRTtBQUFDRCxlQUFhLEVBQUMsYUFBZjtBQUE4QkMsT0FBSyxFQUFDO0FBQXBDLENBWjBFLEVBYTFFO0FBQUNELGVBQWEsRUFBQyxZQUFmO0FBQTZCQyxPQUFLLEVBQUM7QUFBbkMsQ0FiMEUsRUFjMUU7QUFBQ0QsZUFBYSxFQUFDLFNBQWY7QUFBMEJDLE9BQUssRUFBQztBQUFoQyxDQWQwRSxFQWUxRTtBQUFDRCxlQUFhLEVBQUMsT0FBZjtBQUF3QkMsT0FBSyxFQUFDO0FBQTlCLENBZjBFLEVBZ0IxRTtBQUFDRCxlQUFhLEVBQUMsUUFBZjtBQUF5QkMsT0FBSyxFQUFFO0FBQWhDLENBaEIwRSxDQUF2RTtBQWtCQSxJQUFNQyx5QkFBeUIsR0FBRyxTQUFsQztBQUNBLElBQU1DLHFCQUF3QyxHQUFHLElBQUlDLEdBQUosQ0FBUUwsa0JBQWtCLENBQUNNLEdBQW5CLENBQXVCLFVBQUNDLENBQUQ7QUFBQSxTQUF5QixDQUFDQSxDQUFDLENBQUNOLGFBQUgsRUFBa0JNLENBQUMsQ0FBQ0wsS0FBcEIsQ0FBekI7QUFBQSxDQUF2QixDQUFSLENBQWpEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci1zdW1tYXJ5LmFkNDFkMzJmZmRkZGFiZTVjZWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVVJMX0JBU0UgPSAnaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMSc7XHJcblxyXG5leHBvcnQgZW51bSBFUkdBU1RfQVBJIHtcclxuICAgIFNFQVNPTlMgPSAnc2Vhc29ucycsXHJcbiAgICBTQ0hFRFVMRSA9ICdzY2hlZHVsZScsXHJcbiAgICBSRVNVTFRTID0gJ3Jlc3VsdHMnLFxyXG4gICAgTEFQUyA9ICdsYXBzJyxcclxuICAgIFJFU1VMVFNMQVBTID0gJ3Jlc3VsdHMrbGFwcycsXHJcbiAgICBQSVRTVE9QUyA9ICdwaXRzdG9wcycsXHJcbiAgICBEUklWRVJTVEFORElOR1MgPSAnZHJpdmVyLXN0YW5kaW5ncycsXHJcbiAgICBDT05TVFJVQ1RPUlNUQU5ESU5HUyA9ICdjb25zdHJ1Y3Rvci1zdGFuZGluZ3MnXHJcbn07XHJcblxyXG4vL1N0YXRpYyBmaWxlIGFycmF5IG9mIGNvbnN0cnVjdG9yIC0+IGNvbG9yIGlzIHRyYW5zZm9ybWVkIHRvIGEgTWFwIHRvIGJlIHVzZWQgZm9yIGluY2x1c2lvbiBpbiB0aGUgZGF0YVxyXG5leHBvcnQgY29uc3QgQ09OU1RSVUNUT1JfQ09MT1JTOkFycmF5PHtjb25zdHJ1Y3RvcklkOnN0cmluZywgY29sb3I6c3RyaW5nfT4gPSBbXHJcbiAgICB7Y29uc3RydWN0b3JJZDoncmVkX2J1bGwnLCBjb2xvcjonIzA2MDBlZid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J21lcmNlZGVzJywgY29sb3I6JyMwMEQyQkUnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidmZXJyYXJpJyxjb2xvcjonI2RjMDAwMCd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2FscGhhdGF1cmknLGNvbG9yOicjMmI0NTYyJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonbWNsYXJlbicsY29sb3I6JyNGRjk4MDAnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidhbHBpbmUnLGNvbG9yOicjMDA5MGZmJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonYXN0b25fbWFydGluJyxjb2xvcjonIzAwNmY2Mid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2FsZmEnLGNvbG9yOicjOTAwMDAwJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDond2lsbGlhbXMnLGNvbG9yOicjMDA1YWZmJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonaGFhcycsY29sb3I6JyNmZmZmZmYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidyYWNpbmdfcG9pbnQnLCBjb2xvcjonI2YxOTZjNid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2ZvcmNlX2luZGlhJywgY29sb3I6JyNmMTk2YzYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOid0b3JvX3Jvc3NvJywgY29sb3I6JyMyYjQ1NjInfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidyZW5hdWx0JywgY29sb3I6JyNmY2U5MDMnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidtYW5vcicsIGNvbG9yOicjMDA3OWJmJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonc2F1YmVyJywgY29sb3I6ICcjZDYyMDFjJ30sXHJcbl1cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09OU1RSVUNUT1JfQ09MT1IgPSAnIzg5OGI4Yyc7XHJcbmV4cG9ydCBjb25zdCBDT05TVFJVQ1RPUl9DT0xPUl9NQVA6TWFwPHN0cmluZyxzdHJpbmc+ID0gbmV3IE1hcChDT05TVFJVQ1RPUl9DT0xPUlMubWFwKChpKTogW3N0cmluZywgc3RyaW5nXSA9PiBbaS5jb25zdHJ1Y3RvcklkLCBpLmNvbG9yXSkpOyJdLCJzb3VyY2VSb290IjoiIn0=