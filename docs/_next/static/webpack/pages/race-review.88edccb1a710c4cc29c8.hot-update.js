webpackHotUpdate_N_E("pages/race-review",{

/***/ "./utils/hooks/useResultsLapsPitstops.ts":
/*!***********************************************!*\
  !*** ./utils/hooks/useResultsLapsPitstops.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useResultsLapsPitstops; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./utils/common/constants.ts");
/* harmony import */ var _fetchers_Laps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchers/Laps */ "./utils/fetchers/Laps.ts");
/* harmony import */ var _fetchers_PitStops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetchers/PitStops */ "./utils/fetchers/PitStops.ts");
/* harmony import */ var _fetchers_RaceCombined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetchers/RaceCombined */ "./utils/fetchers/RaceCombined.ts");
/* harmony import */ var _fetchers_RaceResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetchers/RaceResults */ "./utils/fetchers/RaceResults.ts");
var _s = $RefreshSig$();







function useResultsLapsPitstops(season, round) {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])([_common_constants__WEBPACK_IMPORTED_MODULE_1__["ERGAST_API"].RESULTS, season, round], function (api, season, round) {
    return Object(_fetchers_RaceResults__WEBPACK_IMPORTED_MODULE_5__["fetchSingleRaceResults"])(season, round);
  }, {
    revalidateOnFocus: false,
    dedupingInterval: 10000000
  }),
      raceData = _useSWR.data,
      raceError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(raceData && raceData.results && !raceError ? [_common_constants__WEBPACK_IMPORTED_MODULE_1__["ERGAST_API"].PITSTOPS, season, round] : null, function (api, season, round) {
    return Object(_fetchers_PitStops__WEBPACK_IMPORTED_MODULE_3__["fetchPitStopTimes"])(season, round);
  }, {
    revalidateOnFocus: false,
    dedupingInterval: 10000000
  }),
      pitData = _useSWR2.data,
      pitError = _useSWR2.error;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(raceData && raceData.results && !raceError ? [_common_constants__WEBPACK_IMPORTED_MODULE_1__["ERGAST_API"].LAPS, season, round] : null, function (api, season, round) {
    return Object(_fetchers_Laps__WEBPACK_IMPORTED_MODULE_2__["fetchRaceLaps"])(season, round);
  }, {
    revalidateOnFocus: false,
    dedupingInterval: 10000000
  }),
      lapData = _useSWR3.data,
      lapError = _useSWR3.error;

  var _useSWR4 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(raceData && raceData.results && !raceError && lapData && !lapError ? [_common_constants__WEBPACK_IMPORTED_MODULE_1__["ERGAST_API"].RESULTSLAPS, season, round] : null, function (api, season, round) {
    return Object(_fetchers_RaceCombined__WEBPACK_IMPORTED_MODULE_4__["default"])(raceData, lapData, pitData);
  }, {
    revalidateOnFocus: false,
    dedupingInterval: 10000000
  }),
      data = _useSWR4.data,
      error = _useSWR4.error;

  return {
    isLoading: !error && !data,
    error: error,
    raceDetails: data ? data.race : undefined,
    driverMap: data ? data.driverMap : undefined
  };
}

_s(useResultsLapsPitstops, "n7OqfASzdHQACotQ8/p4FKc/G6U=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_0__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaG9va3MvdXNlUmVzdWx0c0xhcHNQaXRzdG9wcy50cyJdLCJuYW1lcyI6WyJ1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIiwic2Vhc29uIiwicm91bmQiLCJ1c2VTV1IiLCJFUkdBU1RfQVBJIiwiUkVTVUxUUyIsImFwaSIsImZldGNoU2luZ2xlUmFjZVJlc3VsdHMiLCJyZXZhbGlkYXRlT25Gb2N1cyIsImRlZHVwaW5nSW50ZXJ2YWwiLCJyYWNlRGF0YSIsImRhdGEiLCJyYWNlRXJyb3IiLCJlcnJvciIsInJlc3VsdHMiLCJQSVRTVE9QUyIsImZldGNoUGl0U3RvcFRpbWVzIiwicGl0RGF0YSIsInBpdEVycm9yIiwiTEFQUyIsImZldGNoUmFjZUxhcHMiLCJsYXBEYXRhIiwibGFwRXJyb3IiLCJSRVNVTFRTTEFQUyIsImZldGNoUmFjZUNvbWJpbmVkIiwiaXNMb2FkaW5nIiwicmFjZURldGFpbHMiLCJyYWNlIiwidW5kZWZpbmVkIiwiZHJpdmVyTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLHNCQUFULENBQWdDQyxNQUFoQyxFQUE4Q0MsS0FBOUMsRUFBMkQ7QUFBQTs7QUFBQSxnQkFDN0JDLG1EQUFNLENBQUMsQ0FBQ0MsNERBQVUsQ0FBQ0MsT0FBWixFQUFvQkosTUFBcEIsRUFBMkJDLEtBQTNCLENBQUQsRUFDM0MsVUFBQ0ksR0FBRCxFQUFLTCxNQUFMLEVBQVlDLEtBQVo7QUFBQSxXQUNBSyxvRkFBc0IsQ0FBQ04sTUFBRCxFQUFRQyxLQUFSLENBRHRCO0FBQUEsR0FEMkMsRUFFTjtBQUFDTSxxQkFBaUIsRUFBQyxLQUFuQjtBQUEwQkMsb0JBQWdCLEVBQUM7QUFBM0MsR0FGTSxDQUR1QjtBQUFBLE1BQzFEQyxRQUQwRCxXQUMvREMsSUFEK0Q7QUFBQSxNQUMxQ0MsU0FEMEMsV0FDaERDLEtBRGdEOztBQUFBLGlCQUsvQlYsbURBQU0sQ0FBRU8sUUFBUSxJQUFFQSxRQUFRLENBQUNJLE9BQW5CLElBQTRCLENBQUNGLFNBQTlCLEdBQ0wsQ0FBQ1IsNERBQVUsQ0FBQ1csUUFBWixFQUFxQmQsTUFBckIsRUFBNEJDLEtBQTVCLENBREssR0FDOEIsSUFEL0IsRUFFekMsVUFBQ0ksR0FBRCxFQUFLTCxNQUFMLEVBQVlDLEtBQVo7QUFBQSxXQUNBYyw0RUFBaUIsQ0FBQ2YsTUFBRCxFQUFRQyxLQUFSLENBRGpCO0FBQUEsR0FGeUMsRUFHVDtBQUFDTSxxQkFBaUIsRUFBQyxLQUFuQjtBQUEwQkMsb0JBQWdCLEVBQUM7QUFBM0MsR0FIUyxDQUx5QjtBQUFBLE1BSzFEUSxPQUwwRCxZQUsvRE4sSUFMK0Q7QUFBQSxNQUszQ08sUUFMMkMsWUFLakRMLEtBTGlEOztBQUFBLGlCQVUvQlYsbURBQU0sQ0FBRU8sUUFBUSxJQUFFQSxRQUFRLENBQUNJLE9BQW5CLElBQTRCLENBQUNGLFNBQTlCLEdBQ0wsQ0FBQ1IsNERBQVUsQ0FBQ2UsSUFBWixFQUFpQmxCLE1BQWpCLEVBQXdCQyxLQUF4QixDQURLLEdBQzBCLElBRDNCLEVBRXpDLFVBQUNJLEdBQUQsRUFBS0wsTUFBTCxFQUFZQyxLQUFaO0FBQUEsV0FDQWtCLG9FQUFhLENBQUNuQixNQUFELEVBQVFDLEtBQVIsQ0FEYjtBQUFBLEdBRnlDLEVBR2I7QUFBQ00scUJBQWlCLEVBQUMsS0FBbkI7QUFBMEJDLG9CQUFnQixFQUFDO0FBQTNDLEdBSGEsQ0FWeUI7QUFBQSxNQVUxRFksT0FWMEQsWUFVL0RWLElBVitEO0FBQUEsTUFVM0NXLFFBVjJDLFlBVWpEVCxLQVZpRDs7QUFBQSxpQkFlaERWLG1EQUFNLENBQUVPLFFBQVEsSUFBRUEsUUFBUSxDQUFDSSxPQUFuQixJQUE0QixDQUFDRixTQUE3QixJQUF3Q1MsT0FBeEMsSUFBaUQsQ0FBQ0MsUUFBbkQsR0FDWSxDQUFDbEIsNERBQVUsQ0FBQ21CLFdBQVosRUFBd0J0QixNQUF4QixFQUErQkMsS0FBL0IsQ0FEWixHQUNrRCxJQURuRCxFQUV4QixVQUFDSSxHQUFELEVBQUtMLE1BQUwsRUFBWUMsS0FBWjtBQUFBLFdBQ0FzQixzRUFBaUIsQ0FBQ2QsUUFBRCxFQUFVVyxPQUFWLEVBQWtCSixPQUFsQixDQURqQjtBQUFBLEdBRndCLEVBR29CO0FBQUNULHFCQUFpQixFQUFDLEtBQW5CO0FBQTBCQyxvQkFBZ0IsRUFBQztBQUEzQyxHQUhwQixDQWYwQztBQUFBLE1BZS9ERSxJQWYrRCxZQWUvREEsSUFmK0Q7QUFBQSxNQWV6REUsS0FmeUQsWUFlekRBLEtBZnlEOztBQW1CdEUsU0FBTztBQUNIWSxhQUFTLEVBQUMsQ0FBQ1osS0FBRCxJQUFVLENBQUNGLElBRGxCO0FBRUhFLFNBQUssRUFBQ0EsS0FGSDtBQUdIYSxlQUFXLEVBQUNmLElBQUksR0FBQ0EsSUFBSSxDQUFDZ0IsSUFBTixHQUFXQyxTQUh4QjtBQUlIQyxhQUFTLEVBQUNsQixJQUFJLEdBQUNBLElBQUksQ0FBQ2tCLFNBQU4sR0FBZ0JEO0FBSjNCLEdBQVA7QUFNSDs7R0F6QnVCNUIsc0I7VUFDcUJHLDJDLEVBSUZBLDJDLEVBS0FBLDJDLEVBS2pCQSwyQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYWNlLXJldmlldy44OGVkY2NiMWE3MTBjNGNjMjljOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IEVSR0FTVF9BUEkgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBmZXRjaFJhY2VMYXBzIH0gZnJvbSBcIi4uL2ZldGNoZXJzL0xhcHNcIjtcclxuaW1wb3J0IHsgZmV0Y2hQaXRTdG9wVGltZXMgfSBmcm9tIFwiLi4vZmV0Y2hlcnMvUGl0U3RvcHNcIjtcclxuaW1wb3J0IGZldGNoUmFjZUNvbWJpbmVkIGZyb20gXCIuLi9mZXRjaGVycy9SYWNlQ29tYmluZWRcIjtcclxuaW1wb3J0IHsgZmV0Y2hTaW5nbGVSYWNlUmVzdWx0cyB9IGZyb20gXCIuLi9mZXRjaGVycy9SYWNlUmVzdWx0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyhzZWFzb246c3RyaW5nLHJvdW5kOnN0cmluZyl7XHJcbiAgICBjb25zdCB7ZGF0YTpyYWNlRGF0YSwgZXJyb3I6cmFjZUVycm9yfSA9IHVzZVNXUihbRVJHQVNUX0FQSS5SRVNVTFRTLHNlYXNvbixyb3VuZF0sXHJcbiAgICAgICAgKGFwaSxzZWFzb24scm91bmQpID0+IFxyXG4gICAgICAgIGZldGNoU2luZ2xlUmFjZVJlc3VsdHMoc2Vhc29uLHJvdW5kKSx7cmV2YWxpZGF0ZU9uRm9jdXM6ZmFsc2UsIGRlZHVwaW5nSW50ZXJ2YWw6MTAwMDAwMDB9KTtcclxuXHJcbiAgICBjb25zdCB7ZGF0YTpwaXREYXRhLCBlcnJvcjpwaXRFcnJvcn0gPSB1c2VTV1IoKHJhY2VEYXRhJiZyYWNlRGF0YS5yZXN1bHRzJiYhcmFjZUVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9bRVJHQVNUX0FQSS5QSVRTVE9QUyxzZWFzb24scm91bmRdOm51bGwsXHJcbiAgICAgICAgKGFwaSxzZWFzb24scm91bmQpID0+IFxyXG4gICAgICAgIGZldGNoUGl0U3RvcFRpbWVzKHNlYXNvbixyb3VuZCkse3JldmFsaWRhdGVPbkZvY3VzOmZhbHNlLCBkZWR1cGluZ0ludGVydmFsOjEwMDAwMDAwfSk7ICBcclxuICAgIFxyXG4gICAgY29uc3Qge2RhdGE6bGFwRGF0YSwgZXJyb3I6bGFwRXJyb3J9ID0gdXNlU1dSKChyYWNlRGF0YSYmcmFjZURhdGEucmVzdWx0cyYmIXJhY2VFcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/W0VSR0FTVF9BUEkuTEFQUyxzZWFzb24scm91bmRdOm51bGwsXHJcbiAgICAgICAgKGFwaSxzZWFzb24scm91bmQpID0+IFxyXG4gICAgICAgIGZldGNoUmFjZUxhcHMoc2Vhc29uLHJvdW5kKSx7cmV2YWxpZGF0ZU9uRm9jdXM6ZmFsc2UsIGRlZHVwaW5nSW50ZXJ2YWw6MTAwMDAwMDB9KTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoKHJhY2VEYXRhJiZyYWNlRGF0YS5yZXN1bHRzJiYhcmFjZUVycm9yJiZsYXBEYXRhJiYhbGFwRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1tFUkdBU1RfQVBJLlJFU1VMVFNMQVBTLHNlYXNvbixyb3VuZF06bnVsbCxcclxuICAgICAgICAoYXBpLHNlYXNvbixyb3VuZCkgPT4gXHJcbiAgICAgICAgZmV0Y2hSYWNlQ29tYmluZWQocmFjZURhdGEsbGFwRGF0YSxwaXREYXRhKSx7cmV2YWxpZGF0ZU9uRm9jdXM6ZmFsc2UsIGRlZHVwaW5nSW50ZXJ2YWw6MTAwMDAwMDB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNMb2FkaW5nOiFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgICBlcnJvcjplcnJvcixcclxuICAgICAgICByYWNlRGV0YWlsczpkYXRhP2RhdGEucmFjZTp1bmRlZmluZWQsXHJcbiAgICAgICAgZHJpdmVyTWFwOmRhdGE/ZGF0YS5kcml2ZXJNYXA6dW5kZWZpbmVkXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9