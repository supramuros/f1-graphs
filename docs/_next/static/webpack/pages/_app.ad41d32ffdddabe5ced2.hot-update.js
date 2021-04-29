webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29tbW9uL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJVUkxfQkFTRSIsIkVSR0FTVF9BUEkiLCJDT05TVFJVQ1RPUl9DT0xPUlMiLCJjb25zdHJ1Y3RvcklkIiwiY29sb3IiLCJERUZBVUxUX0NPTlNUUlVDVE9SX0NPTE9SIiwiQ09OU1RSVUNUT1JfQ09MT1JfTUFQIiwiTWFwIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFFBQVEsR0FBRywyQkFBakI7QUFFQSxJQUFLQyxVQUFaOztXQUFZQSxVO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBU1gsQyxDQUVEOztBQUNPLElBQU1DLGtCQUE4RCxHQUFHLENBQzFFO0FBQUNDLGVBQWEsRUFBQyxVQUFmO0FBQTJCQyxPQUFLLEVBQUM7QUFBakMsQ0FEMEUsRUFFMUU7QUFBQ0QsZUFBYSxFQUFDLFVBQWY7QUFBMkJDLE9BQUssRUFBQztBQUFqQyxDQUYwRSxFQUcxRTtBQUFDRCxlQUFhLEVBQUMsU0FBZjtBQUF5QkMsT0FBSyxFQUFDO0FBQS9CLENBSDBFLEVBSTFFO0FBQUNELGVBQWEsRUFBQyxZQUFmO0FBQTRCQyxPQUFLLEVBQUM7QUFBbEMsQ0FKMEUsRUFLMUU7QUFBQ0QsZUFBYSxFQUFDLFNBQWY7QUFBeUJDLE9BQUssRUFBQztBQUEvQixDQUwwRSxFQU0xRTtBQUFDRCxlQUFhLEVBQUMsUUFBZjtBQUF3QkMsT0FBSyxFQUFDO0FBQTlCLENBTjBFLEVBTzFFO0FBQUNELGVBQWEsRUFBQyxjQUFmO0FBQThCQyxPQUFLLEVBQUM7QUFBcEMsQ0FQMEUsRUFRMUU7QUFBQ0QsZUFBYSxFQUFDLE1BQWY7QUFBc0JDLE9BQUssRUFBQztBQUE1QixDQVIwRSxFQVMxRTtBQUFDRCxlQUFhLEVBQUMsVUFBZjtBQUEwQkMsT0FBSyxFQUFDO0FBQWhDLENBVDBFLEVBVTFFO0FBQUNELGVBQWEsRUFBQyxNQUFmO0FBQXNCQyxPQUFLLEVBQUM7QUFBNUIsQ0FWMEUsRUFXMUU7QUFBQ0QsZUFBYSxFQUFDLGNBQWY7QUFBK0JDLE9BQUssRUFBQztBQUFyQyxDQVgwRSxFQVkxRTtBQUFDRCxlQUFhLEVBQUMsYUFBZjtBQUE4QkMsT0FBSyxFQUFDO0FBQXBDLENBWjBFLEVBYTFFO0FBQUNELGVBQWEsRUFBQyxZQUFmO0FBQTZCQyxPQUFLLEVBQUM7QUFBbkMsQ0FiMEUsRUFjMUU7QUFBQ0QsZUFBYSxFQUFDLFNBQWY7QUFBMEJDLE9BQUssRUFBQztBQUFoQyxDQWQwRSxFQWUxRTtBQUFDRCxlQUFhLEVBQUMsT0FBZjtBQUF3QkMsT0FBSyxFQUFDO0FBQTlCLENBZjBFLEVBZ0IxRTtBQUFDRCxlQUFhLEVBQUMsUUFBZjtBQUF5QkMsT0FBSyxFQUFFO0FBQWhDLENBaEIwRSxDQUF2RTtBQWtCQSxJQUFNQyx5QkFBeUIsR0FBRyxTQUFsQztBQUNBLElBQU1DLHFCQUF3QyxHQUFHLElBQUlDLEdBQUosQ0FBUUwsa0JBQWtCLENBQUNNLEdBQW5CLENBQXVCLFVBQUNDLENBQUQ7QUFBQSxTQUF5QixDQUFDQSxDQUFDLENBQUNOLGFBQUgsRUFBa0JNLENBQUMsQ0FBQ0wsS0FBcEIsQ0FBekI7QUFBQSxDQUF2QixDQUFSLENBQWpEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWQ0MWQzMmZmZGRkYWJlNWNlZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVUkxfQkFTRSA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxJztcclxuXHJcbmV4cG9ydCBlbnVtIEVSR0FTVF9BUEkge1xyXG4gICAgU0VBU09OUyA9ICdzZWFzb25zJyxcclxuICAgIFNDSEVEVUxFID0gJ3NjaGVkdWxlJyxcclxuICAgIFJFU1VMVFMgPSAncmVzdWx0cycsXHJcbiAgICBMQVBTID0gJ2xhcHMnLFxyXG4gICAgUkVTVUxUU0xBUFMgPSAncmVzdWx0cytsYXBzJyxcclxuICAgIFBJVFNUT1BTID0gJ3BpdHN0b3BzJyxcclxuICAgIERSSVZFUlNUQU5ESU5HUyA9ICdkcml2ZXItc3RhbmRpbmdzJyxcclxuICAgIENPTlNUUlVDVE9SU1RBTkRJTkdTID0gJ2NvbnN0cnVjdG9yLXN0YW5kaW5ncydcclxufTtcclxuXHJcbi8vU3RhdGljIGZpbGUgYXJyYXkgb2YgY29uc3RydWN0b3IgLT4gY29sb3IgaXMgdHJhbnNmb3JtZWQgdG8gYSBNYXAgdG8gYmUgdXNlZCBmb3IgaW5jbHVzaW9uIGluIHRoZSBkYXRhXHJcbmV4cG9ydCBjb25zdCBDT05TVFJVQ1RPUl9DT0xPUlM6QXJyYXk8e2NvbnN0cnVjdG9ySWQ6c3RyaW5nLCBjb2xvcjpzdHJpbmd9PiA9IFtcclxuICAgIHtjb25zdHJ1Y3RvcklkOidyZWRfYnVsbCcsIGNvbG9yOicjMDYwMGVmJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonbWVyY2VkZXMnLCBjb2xvcjonIzAwRDJCRSd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2ZlcnJhcmknLGNvbG9yOicjZGMwMDAwJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonYWxwaGF0YXVyaScsY29sb3I6JyMyYjQ1NjInfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidtY2xhcmVuJyxjb2xvcjonI0ZGOTgwMCd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2FscGluZScsY29sb3I6JyMwMDkwZmYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidhc3Rvbl9tYXJ0aW4nLGNvbG9yOicjMDA2ZjYyJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonYWxmYScsY29sb3I6JyM5MDAwMDAnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOid3aWxsaWFtcycsY29sb3I6JyMwMDVhZmYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidoYWFzJyxjb2xvcjonI2ZmZmZmZid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3JhY2luZ19wb2ludCcsIGNvbG9yOicjZjE5NmM2J30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonZm9yY2VfaW5kaWEnLCBjb2xvcjonI2YxOTZjNid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3Rvcm9fcm9zc28nLCBjb2xvcjonIzJiNDU2Mid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3JlbmF1bHQnLCBjb2xvcjonI2ZjZTkwMyd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J21hbm9yJywgY29sb3I6JyMwMDc5YmYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidzYXViZXInLCBjb2xvcjogJyNkNjIwMWMnfSxcclxuXVxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05TVFJVQ1RPUl9DT0xPUiA9ICcjODk4YjhjJztcclxuZXhwb3J0IGNvbnN0IENPTlNUUlVDVE9SX0NPTE9SX01BUDpNYXA8c3RyaW5nLHN0cmluZz4gPSBuZXcgTWFwKENPTlNUUlVDVE9SX0NPTE9SUy5tYXAoKGkpOiBbc3RyaW5nLCBzdHJpbmddID0+IFtpLmNvbnN0cnVjdG9ySWQsIGkuY29sb3JdKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==