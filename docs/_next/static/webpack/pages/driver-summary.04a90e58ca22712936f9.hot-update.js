webpackHotUpdate_N_E("pages/driver-summary",{

/***/ "./utils/common/constants.ts":
/*!***********************************!*\
  !*** ./utils/common/constants.ts ***!
  \***********************************/
/*! exports provided: URL_BASE, ERGAST_API, CONSTRUCTOR_COLORS, DEFAULT_COLOR, CONSTRUCTOR_COLOR_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_BASE", function() { return URL_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERGAST_API", function() { return ERGAST_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTOR_COLORS", function() { return CONSTRUCTOR_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLOR", function() { return DEFAULT_COLOR; });
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
  color: 'rgb(255, 153, 51)'
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
var DEFAULT_COLOR = '#898b8c';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29tbW9uL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJVUkxfQkFTRSIsIkVSR0FTVF9BUEkiLCJDT05TVFJVQ1RPUl9DT0xPUlMiLCJjb25zdHJ1Y3RvcklkIiwiY29sb3IiLCJERUZBVUxUX0NPTE9SIiwiQ09OU1RSVUNUT1JfQ09MT1JfTUFQIiwiTWFwIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFFBQVEsR0FBRywyQkFBakI7QUFFQSxJQUFLQyxVQUFaOztXQUFZQSxVO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBU1gsQyxDQUVEOztBQUNPLElBQU1DLGtCQUE4RCxHQUFHLENBQzFFO0FBQUNDLGVBQWEsRUFBQyxVQUFmO0FBQTJCQyxPQUFLLEVBQUM7QUFBakMsQ0FEMEUsRUFFMUU7QUFBQ0QsZUFBYSxFQUFDLFVBQWY7QUFBMkJDLE9BQUssRUFBQztBQUFqQyxDQUYwRSxFQUcxRTtBQUFDRCxlQUFhLEVBQUMsU0FBZjtBQUF5QkMsT0FBSyxFQUFDO0FBQS9CLENBSDBFLEVBSTFFO0FBQUNELGVBQWEsRUFBQyxZQUFmO0FBQTRCQyxPQUFLLEVBQUM7QUFBbEMsQ0FKMEUsRUFLMUU7QUFBQ0QsZUFBYSxFQUFDLFNBQWY7QUFBeUJDLE9BQUssRUFBQztBQUEvQixDQUwwRSxFQU0xRTtBQUFDRCxlQUFhLEVBQUMsUUFBZjtBQUF3QkMsT0FBSyxFQUFDO0FBQTlCLENBTjBFLEVBTzFFO0FBQUNELGVBQWEsRUFBQyxjQUFmO0FBQThCQyxPQUFLLEVBQUM7QUFBcEMsQ0FQMEUsRUFRMUU7QUFBQ0QsZUFBYSxFQUFDLE1BQWY7QUFBc0JDLE9BQUssRUFBQztBQUE1QixDQVIwRSxFQVMxRTtBQUFDRCxlQUFhLEVBQUMsVUFBZjtBQUEwQkMsT0FBSyxFQUFDO0FBQWhDLENBVDBFLEVBVTFFO0FBQUNELGVBQWEsRUFBQyxNQUFmO0FBQXNCQyxPQUFLLEVBQUM7QUFBNUIsQ0FWMEUsRUFXMUU7QUFBQ0QsZUFBYSxFQUFDLGNBQWY7QUFBK0JDLE9BQUssRUFBQztBQUFyQyxDQVgwRSxFQVkxRTtBQUFDRCxlQUFhLEVBQUMsYUFBZjtBQUE4QkMsT0FBSyxFQUFDO0FBQXBDLENBWjBFLEVBYTFFO0FBQUNELGVBQWEsRUFBQyxZQUFmO0FBQTZCQyxPQUFLLEVBQUM7QUFBbkMsQ0FiMEUsRUFjMUU7QUFBQ0QsZUFBYSxFQUFDLFNBQWY7QUFBMEJDLE9BQUssRUFBQztBQUFoQyxDQWQwRSxFQWUxRTtBQUFDRCxlQUFhLEVBQUMsT0FBZjtBQUF3QkMsT0FBSyxFQUFDO0FBQTlCLENBZjBFLEVBZ0IxRTtBQUFDRCxlQUFhLEVBQUMsUUFBZjtBQUF5QkMsT0FBSyxFQUFFO0FBQWhDLENBaEIwRSxDQUF2RTtBQWtCQSxJQUFNQyxhQUFhLEdBQUcsU0FBdEI7QUFDQSxJQUFNQyxxQkFBd0MsR0FBRyxJQUFJQyxHQUFKLENBQVFMLGtCQUFrQixDQUFDTSxHQUFuQixDQUF1QixVQUFDQyxDQUFEO0FBQUEsU0FBeUIsQ0FBQ0EsQ0FBQyxDQUFDTixhQUFILEVBQWtCTSxDQUFDLENBQUNMLEtBQXBCLENBQXpCO0FBQUEsQ0FBdkIsQ0FBUixDQUFqRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kcml2ZXItc3VtbWFyeS4wNGE5MGU1OGNhMjI3MTI5MzZmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVSTF9CQVNFID0gJ2h0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEnO1xyXG5cclxuZXhwb3J0IGVudW0gRVJHQVNUX0FQSSB7XHJcbiAgICBTRUFTT05TID0gJ3NlYXNvbnMnLFxyXG4gICAgU0NIRURVTEUgPSAnc2NoZWR1bGUnLFxyXG4gICAgUkVTVUxUUyA9ICdyZXN1bHRzJyxcclxuICAgIExBUFMgPSAnbGFwcycsXHJcbiAgICBSRVNVTFRTTEFQUyA9ICdyZXN1bHRzK2xhcHMnLFxyXG4gICAgUElUU1RPUFMgPSAncGl0c3RvcHMnLFxyXG4gICAgRFJJVkVSU1RBTkRJTkdTID0gJ2RyaXZlci1zdGFuZGluZ3MnLFxyXG4gICAgQ09OU1RSVUNUT1JTVEFORElOR1MgPSAnY29uc3RydWN0b3Itc3RhbmRpbmdzJ1xyXG59O1xyXG5cclxuLy9TdGF0aWMgZmlsZSBhcnJheSBvZiBjb25zdHJ1Y3RvciAtPiBjb2xvciBpcyB0cmFuc2Zvcm1lZCB0byBhIE1hcCB0byBiZSB1c2VkIGZvciBpbmNsdXNpb24gaW4gdGhlIGRhdGFcclxuZXhwb3J0IGNvbnN0IENPTlNUUlVDVE9SX0NPTE9SUzpBcnJheTx7Y29uc3RydWN0b3JJZDpzdHJpbmcsIGNvbG9yOnN0cmluZ30+ID0gW1xyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3JlZF9idWxsJywgY29sb3I6JyMwNjAwZWYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidtZXJjZWRlcycsIGNvbG9yOicjMDBEMkJFJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonZmVycmFyaScsY29sb3I6JyNkYzAwMDAnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidhbHBoYXRhdXJpJyxjb2xvcjonIzJiNDU2Mid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J21jbGFyZW4nLGNvbG9yOicjRkY5ODAwJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDonYWxwaW5lJyxjb2xvcjonIzAwOTBmZid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2FzdG9uX21hcnRpbicsY29sb3I6JyMwMDZmNjInfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidhbGZhJyxjb2xvcjonIzkwMDAwMCd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3dpbGxpYW1zJyxjb2xvcjonIzAwNWFmZid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J2hhYXMnLGNvbG9yOicjZmZmZmZmJ30sXHJcbiAgICB7Y29uc3RydWN0b3JJZDoncmFjaW5nX3BvaW50JywgY29sb3I6JyNmMTk2YzYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidmb3JjZV9pbmRpYScsIGNvbG9yOidyZ2IoMjU1LCAxNTMsIDUxKSd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3Rvcm9fcm9zc28nLCBjb2xvcjonIzJiNDU2Mid9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J3JlbmF1bHQnLCBjb2xvcjonI2ZjZTkwMyd9LFxyXG4gICAge2NvbnN0cnVjdG9ySWQ6J21hbm9yJywgY29sb3I6JyMwMDc5YmYnfSxcclxuICAgIHtjb25zdHJ1Y3RvcklkOidzYXViZXInLCBjb2xvcjogJyNkNjIwMWMnfSxcclxuXVxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjODk4YjhjJztcclxuZXhwb3J0IGNvbnN0IENPTlNUUlVDVE9SX0NPTE9SX01BUDpNYXA8c3RyaW5nLHN0cmluZz4gPSBuZXcgTWFwKENPTlNUUlVDVE9SX0NPTE9SUy5tYXAoKGkpOiBbc3RyaW5nLCBzdHJpbmddID0+IFtpLmNvbnN0cnVjdG9ySWQsIGkuY29sb3JdKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==