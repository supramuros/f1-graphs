webpackHotUpdate_N_E("pages/position",{

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

  var _useSWR4 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(raceData && raceData.results && !raceError && lapData && !lapError ? [_common_constants__WEBPACK_IMPORTED_MODULE_1__["ERGAST_API"].RESULTSLAPS, season, round, lapData, pitData] : null, function (api, season, round, lapData, pitData) {
    return Object(_fetchers_RaceCombined__WEBPACK_IMPORTED_MODULE_4__["default"])(raceData, lapData, pitData);
  }, {
    revalidateOnFocus: false,
    dedupingInterval: 10000000
  }),
      data = _useSWR4.data,
      error = _useSWR4.error;

  console.log(raceData);
  console.log(pitData);
  console.log(lapData);
  console.log('*Data*');
  console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaG9va3MvdXNlUmVzdWx0c0xhcHNQaXRzdG9wcy50cyJdLCJuYW1lcyI6WyJ1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIiwic2Vhc29uIiwicm91bmQiLCJ1c2VTV1IiLCJFUkdBU1RfQVBJIiwiUkVTVUxUUyIsImFwaSIsImZldGNoU2luZ2xlUmFjZVJlc3VsdHMiLCJyZXZhbGlkYXRlT25Gb2N1cyIsImRlZHVwaW5nSW50ZXJ2YWwiLCJyYWNlRGF0YSIsImRhdGEiLCJyYWNlRXJyb3IiLCJlcnJvciIsInJlc3VsdHMiLCJQSVRTVE9QUyIsImZldGNoUGl0U3RvcFRpbWVzIiwicGl0RGF0YSIsInBpdEVycm9yIiwiTEFQUyIsImZldGNoUmFjZUxhcHMiLCJsYXBEYXRhIiwibGFwRXJyb3IiLCJSRVNVTFRTTEFQUyIsImZldGNoUmFjZUNvbWJpbmVkIiwiY29uc29sZSIsImxvZyIsImlzTG9hZGluZyIsInJhY2VEZXRhaWxzIiwicmFjZSIsInVuZGVmaW5lZCIsImRyaXZlck1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxzQkFBVCxDQUFnQ0MsTUFBaEMsRUFBOENDLEtBQTlDLEVBQTJEO0FBQUE7O0FBQUEsZ0JBQzdCQyxtREFBTSxDQUFDLENBQUNDLDREQUFVLENBQUNDLE9BQVosRUFBb0JKLE1BQXBCLEVBQTJCQyxLQUEzQixDQUFELEVBQzNDLFVBQUNJLEdBQUQsRUFBS0wsTUFBTCxFQUFZQyxLQUFaO0FBQUEsV0FDQUssb0ZBQXNCLENBQUNOLE1BQUQsRUFBUUMsS0FBUixDQUR0QjtBQUFBLEdBRDJDLEVBRU47QUFBQ00scUJBQWlCLEVBQUMsS0FBbkI7QUFBMEJDLG9CQUFnQixFQUFDO0FBQTNDLEdBRk0sQ0FEdUI7QUFBQSxNQUMxREMsUUFEMEQsV0FDL0RDLElBRCtEO0FBQUEsTUFDMUNDLFNBRDBDLFdBQ2hEQyxLQURnRDs7QUFBQSxpQkFLL0JWLG1EQUFNLENBQUVPLFFBQVEsSUFBRUEsUUFBUSxDQUFDSSxPQUFuQixJQUE0QixDQUFDRixTQUE5QixHQUNMLENBQUNSLDREQUFVLENBQUNXLFFBQVosRUFBcUJkLE1BQXJCLEVBQTRCQyxLQUE1QixDQURLLEdBQzhCLElBRC9CLEVBRXpDLFVBQUNJLEdBQUQsRUFBS0wsTUFBTCxFQUFZQyxLQUFaO0FBQUEsV0FDQWMsNEVBQWlCLENBQUNmLE1BQUQsRUFBUUMsS0FBUixDQURqQjtBQUFBLEdBRnlDLEVBR1Q7QUFBQ00scUJBQWlCLEVBQUMsS0FBbkI7QUFBMEJDLG9CQUFnQixFQUFDO0FBQTNDLEdBSFMsQ0FMeUI7QUFBQSxNQUsxRFEsT0FMMEQsWUFLL0ROLElBTCtEO0FBQUEsTUFLM0NPLFFBTDJDLFlBS2pETCxLQUxpRDs7QUFBQSxpQkFVL0JWLG1EQUFNLENBQUVPLFFBQVEsSUFBRUEsUUFBUSxDQUFDSSxPQUFuQixJQUE0QixDQUFDRixTQUE5QixHQUNMLENBQUNSLDREQUFVLENBQUNlLElBQVosRUFBaUJsQixNQUFqQixFQUF3QkMsS0FBeEIsQ0FESyxHQUMwQixJQUQzQixFQUV6QyxVQUFDSSxHQUFELEVBQUtMLE1BQUwsRUFBWUMsS0FBWjtBQUFBLFdBQ0FrQixvRUFBYSxDQUFDbkIsTUFBRCxFQUFRQyxLQUFSLENBRGI7QUFBQSxHQUZ5QyxFQUdiO0FBQUNNLHFCQUFpQixFQUFDLEtBQW5CO0FBQTBCQyxvQkFBZ0IsRUFBQztBQUEzQyxHQUhhLENBVnlCO0FBQUEsTUFVMURZLE9BVjBELFlBVS9EVixJQVYrRDtBQUFBLE1BVTNDVyxRQVYyQyxZQVVqRFQsS0FWaUQ7O0FBQUEsaUJBZWhEVixtREFBTSxDQUFFTyxRQUFRLElBQUVBLFFBQVEsQ0FBQ0ksT0FBbkIsSUFBNEIsQ0FBQ0YsU0FBN0IsSUFBd0NTLE9BQXhDLElBQWlELENBQUNDLFFBQW5ELEdBQ1ksQ0FBQ2xCLDREQUFVLENBQUNtQixXQUFaLEVBQXdCdEIsTUFBeEIsRUFBK0JDLEtBQS9CLEVBQXFDbUIsT0FBckMsRUFBNkNKLE9BQTdDLENBRFosR0FDa0UsSUFEbkUsRUFFeEIsVUFBQ1gsR0FBRCxFQUFLTCxNQUFMLEVBQVlDLEtBQVosRUFBa0JtQixPQUFsQixFQUEwQkosT0FBMUI7QUFBQSxXQUNBTyxzRUFBaUIsQ0FBQ2QsUUFBRCxFQUFVVyxPQUFWLEVBQWtCSixPQUFsQixDQURqQjtBQUFBLEdBRndCLEVBR29CO0FBQUNULHFCQUFpQixFQUFDLEtBQW5CO0FBQTBCQyxvQkFBZ0IsRUFBQztBQUEzQyxHQUhwQixDQWYwQztBQUFBLE1BZS9ERSxJQWYrRCxZQWUvREEsSUFmK0Q7QUFBQSxNQWV6REUsS0FmeUQsWUFlekRBLEtBZnlEOztBQW1CdEVZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBWjtBQUNBZSxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsT0FBWjtBQUNBUSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBWjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZZixJQUFaO0FBRUEsU0FBTztBQUNIZ0IsYUFBUyxFQUFDLENBQUNkLEtBQUQsSUFBVSxDQUFDRixJQURsQjtBQUVIRSxTQUFLLEVBQUNBLEtBRkg7QUFHSGUsZUFBVyxFQUFDakIsSUFBSSxHQUFDQSxJQUFJLENBQUNrQixJQUFOLEdBQVdDLFNBSHhCO0FBSUhDLGFBQVMsRUFBQ3BCLElBQUksR0FBQ0EsSUFBSSxDQUFDb0IsU0FBTixHQUFnQkQ7QUFKM0IsR0FBUDtBQU1IOztHQS9CdUI5QixzQjtVQUNxQkcsMkMsRUFJRkEsMkMsRUFLQUEsMkMsRUFLakJBLDJDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc2l0aW9uLmIxMGRjMDE1NjY0YzE2MjhhZWU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgRVJHQVNUX0FQSSB9IGZyb20gXCIuLi9jb21tb24vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGZldGNoUmFjZUxhcHMgfSBmcm9tIFwiLi4vZmV0Y2hlcnMvTGFwc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFBpdFN0b3BUaW1lcyB9IGZyb20gXCIuLi9mZXRjaGVycy9QaXRTdG9wc1wiO1xyXG5pbXBvcnQgZmV0Y2hSYWNlQ29tYmluZWQgZnJvbSBcIi4uL2ZldGNoZXJzL1JhY2VDb21iaW5lZFwiO1xyXG5pbXBvcnQgeyBmZXRjaFNpbmdsZVJhY2VSZXN1bHRzIH0gZnJvbSBcIi4uL2ZldGNoZXJzL1JhY2VSZXN1bHRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzKHNlYXNvbjpzdHJpbmcscm91bmQ6c3RyaW5nKXtcclxuICAgIGNvbnN0IHtkYXRhOnJhY2VEYXRhLCBlcnJvcjpyYWNlRXJyb3J9ID0gdXNlU1dSKFtFUkdBU1RfQVBJLlJFU1VMVFMsc2Vhc29uLHJvdW5kXSxcclxuICAgICAgICAoYXBpLHNlYXNvbixyb3VuZCkgPT4gXHJcbiAgICAgICAgZmV0Y2hTaW5nbGVSYWNlUmVzdWx0cyhzZWFzb24scm91bmQpLHtyZXZhbGlkYXRlT25Gb2N1czpmYWxzZSwgZGVkdXBpbmdJbnRlcnZhbDoxMDAwMDAwMH0pO1xyXG5cclxuICAgIGNvbnN0IHtkYXRhOnBpdERhdGEsIGVycm9yOnBpdEVycm9yfSA9IHVzZVNXUigocmFjZURhdGEmJnJhY2VEYXRhLnJlc3VsdHMmJiFyYWNlRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1tFUkdBU1RfQVBJLlBJVFNUT1BTLHNlYXNvbixyb3VuZF06bnVsbCxcclxuICAgICAgICAoYXBpLHNlYXNvbixyb3VuZCkgPT4gXHJcbiAgICAgICAgZmV0Y2hQaXRTdG9wVGltZXMoc2Vhc29uLHJvdW5kKSx7cmV2YWxpZGF0ZU9uRm9jdXM6ZmFsc2UsIGRlZHVwaW5nSW50ZXJ2YWw6MTAwMDAwMDB9KTsgIFxyXG4gICAgXHJcbiAgICBjb25zdCB7ZGF0YTpsYXBEYXRhLCBlcnJvcjpsYXBFcnJvcn0gPSB1c2VTV1IoKHJhY2VEYXRhJiZyYWNlRGF0YS5yZXN1bHRzJiYhcmFjZUVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9bRVJHQVNUX0FQSS5MQVBTLHNlYXNvbixyb3VuZF06bnVsbCxcclxuICAgICAgICAoYXBpLHNlYXNvbixyb3VuZCkgPT4gXHJcbiAgICAgICAgZmV0Y2hSYWNlTGFwcyhzZWFzb24scm91bmQpLHtyZXZhbGlkYXRlT25Gb2N1czpmYWxzZSwgZGVkdXBpbmdJbnRlcnZhbDoxMDAwMDAwMH0pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUigocmFjZURhdGEmJnJhY2VEYXRhLnJlc3VsdHMmJiFyYWNlRXJyb3ImJmxhcERhdGEmJiFsYXBFcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/W0VSR0FTVF9BUEkuUkVTVUxUU0xBUFMsc2Vhc29uLHJvdW5kLGxhcERhdGEscGl0RGF0YV06bnVsbCxcclxuICAgICAgICAoYXBpLHNlYXNvbixyb3VuZCxsYXBEYXRhLHBpdERhdGEpID0+IFxyXG4gICAgICAgIGZldGNoUmFjZUNvbWJpbmVkKHJhY2VEYXRhLGxhcERhdGEscGl0RGF0YSkse3JldmFsaWRhdGVPbkZvY3VzOmZhbHNlLCBkZWR1cGluZ0ludGVydmFsOjEwMDAwMDAwfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyYWNlRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhwaXREYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGxhcERhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJypEYXRhKicpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc0xvYWRpbmc6IWVycm9yICYmICFkYXRhLFxyXG4gICAgICAgIGVycm9yOmVycm9yLFxyXG4gICAgICAgIHJhY2VEZXRhaWxzOmRhdGE/ZGF0YS5yYWNlOnVuZGVmaW5lZCxcclxuICAgICAgICBkcml2ZXJNYXA6ZGF0YT9kYXRhLmRyaXZlck1hcDp1bmRlZmluZWRcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=