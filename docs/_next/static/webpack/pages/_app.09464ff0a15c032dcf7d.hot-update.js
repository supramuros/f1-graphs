webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/fetchers/RaceResults.ts":
/*!***************************************!*\
  !*** ./utils/fetchers/RaceResults.ts ***!
  \***************************************/
/*! exports provided: fetchSingleRaceResults, fetchSeasonRaceResults, setStartingOrder, deserializeResult, deserializeDriverResult, deserializeRaceStats, deserializeDriver, deserializeDriverFull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleRaceResults", function() { return fetchSingleRaceResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSeasonRaceResults", function() { return fetchSeasonRaceResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStartingOrder", function() { return setStartingOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeResult", function() { return deserializeResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeDriverResult", function() { return deserializeDriverResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeRaceStats", function() { return deserializeRaceStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeDriver", function() { return deserializeDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeDriverFull", function() { return deserializeDriverFull; });
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _common_swrError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/swrError */ "./utils/common/swrError.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "./utils/common/constants.ts");
/* harmony import */ var _SeasonSchedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SeasonSchedule */ "./utils/fetchers/SeasonSchedule.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util */ "./utils/common/util.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/*
Function: fetchRaceResults
@Param: season: year
@Param: round?: race in season 1,2,3,etc.; if omitted the API returns all races up to the limit
The API does not require either param but we do not want to pull that much data.
URL: http://ergast.com/api/f1/<season>/<round>/results
*/
function fetchSingleRaceResults(_x, _x2) {
  return _fetchSingleRaceResults.apply(this, arguments);
}

function _fetchSingleRaceResults() {
  _fetchSingleRaceResults = Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(season, round) {
    var results;
    return C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchSeasonRaceResults(season, round);

          case 2:
            results = _context.sent;
            return _context.abrupt("return", results[0]);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchSingleRaceResults.apply(this, arguments);
}

function fetchSeasonRaceResults(_x3, _x4) {
  return _fetchSeasonRaceResults.apply(this, arguments);
} //Pit Lane starts are coming across in the API as starting position 0
//Thus initial order is incorrect and there may be gaps
//For example, driver qualifies in position 4 and has an issue and starts from pit
//startingPosition will be 1,2,3,5...
//This function re-sorts and adds a new field called starting order

function _fetchSeasonRaceResults() {
  _fetchSeasonRaceResults = Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(season, round) {
    var URL_API, url, res, data, error;
    return C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            URL_API = 'results.json?limit=1000'; //build the url

            url = _common_constants__WEBPACK_IMPORTED_MODULE_5__["URL_BASE"];
            url += '/' + season + '/';
            url += round ? round + '/' + URL_API : URL_API; //fetch results

            _context2.next = 6;
            return fetch(url);

          case 6:
            res = _context2.sent;
            data = undefined;

            if (res.ok) {
              _context2.next = 15;
              break;
            }

            error = new _common_swrError__WEBPACK_IMPORTED_MODULE_4__["default"]('An error occurred while fetching the Race Results data.'); // Attach extra info to the error object.

            _context2.next = 12;
            return res.json();

          case 12:
            error.info = _context2.sent;
            error.status = res.status;
            throw error;

          case 15:
            _context2.next = 17;
            return res.json();

          case 17:
            data = _context2.sent;
            return _context2.abrupt("return", data.MRData.RaceTable.Races.map(function (r) {
              var race = Object(_SeasonSchedule__WEBPACK_IMPORTED_MODULE_6__["deserializeRace"])(r);
              var results = r ? r.Results.map(function (result) {
                return deserializeResult(result);
              }) : [];
              return {
                race: race,
                results: setStartingOrder(results).sort(function (a, b) {
                  return a.endingPosition - b.endingPosition;
                })
              };
            }));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchSeasonRaceResults.apply(this, arguments);
}

function setStartingOrder(data) {
  var results = Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(data);

  results.sort(function (a, b) {
    return (a.startingPosition != 0 ? a.startingPosition : 100) - (b.startingPosition != 0 ? b.startingPosition : 100);
  });
  results.forEach(function (i, index) {
    i.startingOrder = index + 1;
  });
  return results;
}
function deserializeResult(data) {
  return _objectSpread(_objectSpread({
    driver: deserializeDriver(data)
  }, deserializeDriverResult(data)), {}, {
    raceStats: deserializeRaceStats(data)
  });
}
function deserializeDriverResult(data) {
  return {
    startingPosition: parseInt(data.grid),
    endingPosition: parseInt(data.position),
    points: parseInt(data.points),
    lapsCompleted: parseInt(data.laps),
    raceTime: data.Time ? parseInt(data.Time.millis) : null,
    raceTimeDsp: data.Time ? data.Time.time : data.status,
    endingStatus: data.status
  };
}
function deserializeRaceStats(data) {
  return {
    fastestLapRank: data.FastestLap ? data.FastestLap.rank : -1,
    fastestLapNumber: data.FastestLap ? parseInt(data.FastestLap.lap) : -1,
    fastestLapTime: data.FastestLap ? Object(_common_util__WEBPACK_IMPORTED_MODULE_7__["timeStringToSeconds"])(data.FastestLap.Time.time) : null,
    fastestLapTimeDsp: data.FastestLap ? data.FastestLap.Time.time : 'N/A',
    fastestLapSpeed: data.FastestLap ? Math.round(parseFloat(data.FastestLap.AverageSpeed.speed) * 1000) / 1000 : 0,
    fastestLapUnits: data.FastestLap ? data.FastestLap.AverageSpeed.units : null
  };
}
function deserializeDriver(data) {
  return {
    driverId: data.Driver.driverId,
    driverCode: data.Driver.code,
    driverNumber: data.Driver.permanentNumber ? data.Driver.permanentNumber : data.number,
    driverName: data.Driver.givenName + ' ' + data.Driver.familyName,
    constructorId: data.Constructor.constructorId,
    constructorName: data.Constructor.name,
    constructorColor: _common_constants__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_COLOR_MAP"].get(data.Constructor.constructorId) ? _common_constants__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_COLOR_MAP"].get(data.Constructor.constructorId) : _common_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_CONSTRUCTOR_COLOR"]
  };
}
function deserializeDriverFull(data) {
  return {
    driverId: data.Driver.driverId,
    driverCode: data.Driver.code,
    driverNumber: data.Driver.permanentNumber ? data.Driver.permanentNumber : data.number,
    driverName: data.Driver.givenName + ' ' + data.Driver.familyName,
    driverUrl: data.Driver.url,
    driverNationality: data.Driver.nationality,
    constructorId: data.Constructor.constructorId,
    constructorName: data.Constructor.name,
    constructorUrl: data.Constructor.url,
    constructorNationality: data.Constructor.nationality,
    constructorColor: _common_constants__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_COLOR_MAP"].get(data.Constructor.constructorId) ? _common_constants__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_COLOR_MAP"].get(data.Constructor.constructorId) : _common_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_CONSTRUCTOR_COLOR"]
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZVJlc3VsdHMudHMiXSwibmFtZXMiOlsiZmV0Y2hTaW5nbGVSYWNlUmVzdWx0cyIsInNlYXNvbiIsInJvdW5kIiwiZmV0Y2hTZWFzb25SYWNlUmVzdWx0cyIsInJlc3VsdHMiLCJVUkxfQVBJIiwidXJsIiwiVVJMX0JBU0UiLCJmZXRjaCIsInJlcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJvayIsImVycm9yIiwic3dyRXJyb3IiLCJqc29uIiwiaW5mbyIsInN0YXR1cyIsIk1SRGF0YSIsIlJhY2VUYWJsZSIsIlJhY2VzIiwibWFwIiwiciIsInJhY2UiLCJkZXNlcmlhbGl6ZVJhY2UiLCJSZXN1bHRzIiwicmVzdWx0IiwiZGVzZXJpYWxpemVSZXN1bHQiLCJzZXRTdGFydGluZ09yZGVyIiwic29ydCIsImEiLCJiIiwiZW5kaW5nUG9zaXRpb24iLCJzdGFydGluZ1Bvc2l0aW9uIiwiZm9yRWFjaCIsImkiLCJpbmRleCIsInN0YXJ0aW5nT3JkZXIiLCJkcml2ZXIiLCJkZXNlcmlhbGl6ZURyaXZlciIsImRlc2VyaWFsaXplRHJpdmVyUmVzdWx0IiwicmFjZVN0YXRzIiwiZGVzZXJpYWxpemVSYWNlU3RhdHMiLCJwYXJzZUludCIsImdyaWQiLCJwb3NpdGlvbiIsInBvaW50cyIsImxhcHNDb21wbGV0ZWQiLCJsYXBzIiwicmFjZVRpbWUiLCJUaW1lIiwibWlsbGlzIiwicmFjZVRpbWVEc3AiLCJ0aW1lIiwiZW5kaW5nU3RhdHVzIiwiZmFzdGVzdExhcFJhbmsiLCJGYXN0ZXN0TGFwIiwicmFuayIsImZhc3Rlc3RMYXBOdW1iZXIiLCJsYXAiLCJmYXN0ZXN0TGFwVGltZSIsInRpbWVTdHJpbmdUb1NlY29uZHMiLCJmYXN0ZXN0TGFwVGltZURzcCIsImZhc3Rlc3RMYXBTcGVlZCIsIk1hdGgiLCJwYXJzZUZsb2F0IiwiQXZlcmFnZVNwZWVkIiwic3BlZWQiLCJmYXN0ZXN0TGFwVW5pdHMiLCJ1bml0cyIsImRyaXZlcklkIiwiRHJpdmVyIiwiZHJpdmVyQ29kZSIsImNvZGUiLCJkcml2ZXJOdW1iZXIiLCJwZXJtYW5lbnROdW1iZXIiLCJudW1iZXIiLCJkcml2ZXJOYW1lIiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsImNvbnN0cnVjdG9ySWQiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yTmFtZSIsIm5hbWUiLCJjb25zdHJ1Y3RvckNvbG9yIiwiQ09OU1RSVUNUT1JfQ09MT1JfTUFQIiwiZ2V0IiwiREVGQVVMVF9DT05TVFJVQ1RPUl9DT0xPUiIsImRlc2VyaWFsaXplRHJpdmVyRnVsbCIsImRyaXZlclVybCIsImRyaXZlck5hdGlvbmFsaXR5IiwibmF0aW9uYWxpdHkiLCJjb25zdHJ1Y3RvclVybCIsImNvbnN0cnVjdG9yTmF0aW9uYWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQWVBLHNCQUF0QjtBQUFBO0FBQUE7Ozt1U0FBTyxpQkFBc0NDLE1BQXRDLEVBQXFEQyxLQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNtQkMsc0JBQXNCLENBQUNGLE1BQUQsRUFBU0MsS0FBVCxDQUR6Qzs7QUFBQTtBQUNHRSxtQkFESDtBQUFBLDZDQUVJQSxPQUFPLENBQUMsQ0FBRCxDQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFLQSxTQUFlRCxzQkFBdEI7QUFBQTtBQUFBLEMsQ0E0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O3VTQWhDTyxrQkFBc0NGLE1BQXRDLEVBQXFEQyxLQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0csbUJBREgsR0FDYSx5QkFEYixFQUVIOztBQUNJQyxlQUhELEdBR09DLDBEQUhQO0FBSUhELGVBQUcsSUFBSSxNQUFJTCxNQUFKLEdB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LGdCQUFZLEVBQUNoRSxJQUFJLENBQUM2RCxNQUFMLENBQVlJLGVBQVosR0FBNEJqRSxJQUFJLENBQUM2RCxNQUFMLENBQVlJLGVBQXhDLEdBQXdEakUsSUFBSSxDQUFDa0UsTUFIdEU7QUFJSkMsY0FBVSxFQUFDbkUsSUFBSSxDQUFDNkQsTUFBTCxDQUFZTyxTQUFaLEdBQXNCLEdBQXRCLEdBQTBCcEUsSUFBSSxDQUFDNkQsTUFBTCxDQUFZUSxVQUo3QztBQUtKVSxhQUFTLEVBQUMvRSxJQUFJLENBQUM2RCxNQUFMLENBQVlqRSxHQUxsQjtBQU1Kb0YscUJBQWlCLEVBQUNoRixJQUFJLENBQUM2RCxNQUFMLENBQVlvQixXQU4xQjtBQU9KWCxpQkFBYSxFQUFDdEUsSUFBSSxDQUFDdUUsV0FBTCxDQUFpQkQsYUFQM0I7QUFRSkUsbUJBQWUsRUFBQ3hFLElBQUksQ0FBQ3VFLFdBQUwsQ0FBaUJFLElBUjdCO0FBU0pTLGtCQUFjLEVBQUNsRixJQUFJLENBQUN1RSxXQUFMLENBQWlCM0UsR0FUNUI7QUFVSnVGLDBCQUFzQixFQUFDbkYsSUFBSSxDQUFDdUUsV0FBTCxDQUFpQlUsV0FWcEM7QUFXSlAsb0JBQWdCLEVBQUNDLHVFQUFxQixDQUFDQyxHQUF0QixDQUEwQjVFLElBQUksQ0FBQ3VFLFdBQUwsQ0FBaUJELGFBQTNDLElBQ1pLLHVFQUFxQixDQUFDQyxHQUF0QixDQUEwQjVFLElBQUksQ0FBQ3VFLFdBQUwsQ0FBaUJELGFBQTNDLENBRFksR0FFWk8sMkVBQXlCQTtBQWIxQixHQUFSO0FBZUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wOTQ2NGZmMGExNWMwMzJkY2Y3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN3ckVycm9yIGZyb20gJy4uL2NvbW1vbi9zd3JFcnJvcic7XHJcbmltcG9ydCB7VVJMX0JBU0UsQ09OU1RSVUNUT1JfQ09MT1JfTUFQLCBERUZBVUxUX0NPTlNUUlVDVE9SX0NPTE9SfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuaW1wb3J0IHtkZXNlcmlhbGl6ZVJhY2V9IGZyb20gJy4vU2Vhc29uU2NoZWR1bGUnO1xyXG5pbXBvcnQge3RpbWVTdHJpbmdUb1NlY29uZHN9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcclxuaW1wb3J0IHsgUmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL1JhY2UnO1xyXG5pbXBvcnQgeyBEcml2ZXIsIERyaXZlclJhY2VSZXN1bHQsIERyaXZlclJhY2VTdGF0cywgUmFjZVJlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL1JhY2VSZXN1bHQnO1xyXG5cclxuLypcclxuRnVuY3Rpb246IGZldGNoUmFjZVJlc3VsdHNcclxuQFBhcmFtOiBzZWFzb246IHllYXJcclxuQFBhcmFtOiByb3VuZD86IHJhY2UgaW4gc2Vhc29uIDEsMiwzLGV0Yy47IGlmIG9taXR0ZWQgdGhlIEFQSSByZXR1cm5zIGFsbCByYWNlcyB1cCB0byB0aGUgbGltaXRcclxuVGhlIEFQSSBkb2VzIG5vdCByZXF1aXJlIGVpdGhlciBwYXJhbSBidXQgd2UgZG8gbm90IHdhbnQgdG8gcHVsbCB0aGF0IG11Y2ggZGF0YS5cclxuVVJMOiBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvPHNlYXNvbj4vPHJvdW5kPi9yZXN1bHRzXHJcbiovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNpbmdsZVJhY2VSZXN1bHRzKHNlYXNvbjpzdHJpbmcsIHJvdW5kOnN0cmluZyk6UHJvbWlzZTxSYWNlUmVzdWx0PntcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaFNlYXNvblJhY2VSZXN1bHRzKHNlYXNvbiwgcm91bmQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNlYXNvblJhY2VSZXN1bHRzKHNlYXNvbjpzdHJpbmcsIHJvdW5kPzpzdHJpbmcpOlByb21pc2U8UmFjZVJlc3VsdFtdPntcclxuICAgIGNvbnN0IFVSTF9BUEkgPSAncmVzdWx0cy5qc29uP2xpbWl0PTEwMDAnO1xyXG4gICAgLy9idWlsZCB0aGUgdXJsXHJcbiAgICBsZXQgdXJsID0gVVJMX0JBU0U7XHJcbiAgICB1cmwgKz0gJy8nK3NlYXNvbisnLyc7XHJcbiAgICB1cmwgKz1yb3VuZD9yb3VuZCsnLycrVVJMX0FQSTpVUkxfQVBJO1xyXG4gICAgLy9mZXRjaCByZXN1bHRzXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgbGV0IGRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IHN3ckVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgUmFjZSBSZXN1bHRzIGRhdGEuJyk7XHJcbiAgICAgICAgLy8gQXR0YWNoIGV4dHJhIGluZm8gdG8gdGhlIGVycm9yIG9iamVjdC5cclxuICAgICAgICBlcnJvci5pbmZvID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBlcnJvci5zdGF0dXMgPSByZXMuc3RhdHVzO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhLk1SRGF0YS5SYWNlVGFibGUuUmFjZXMubWFwKHI9PntcclxuICAgICAgICBjb25zdCByYWNlID0gZGVzZXJpYWxpemVSYWNlKHIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByP3IuUmVzdWx0cy5tYXAocmVzdWx0PT5kZXNlcmlhbGl6ZVJlc3VsdChyZXN1bHQpKTpbXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgcmFjZTpyYWNlLFxyXG4gICAgICAgICAgICByZXN1bHRzOnNldFN0YXJ0aW5nT3JkZXIocmVzdWx0cykuc29ydCgoYSxiKT0+YS5lbmRpbmdQb3NpdGlvbi1iLmVuZGluZ1Bvc2l0aW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KSAgXHJcblxyXG59XHJcbi8vUGl0IExhbmUgc3RhcnRzIGFyZSBjb21pbmcgYWNyb3NzIGluIHRoZSBBUEkgYXMgc3RhcnRpbmcgcG9zaXRpb24gMFxyXG4vL1RodXMgaW5pdGlhbCBvcmRlciBpcyBpbmNvcnJlY3QgYW5kIHRoZXJlIG1heSBiZSBnYXBzXHJcbi8vRm9yIGV4YW1wbGUsIGRyaXZlciBxdWFsaWZpZXMgaW4gcG9zaXRpb24gNCBhbmQgaGFzIGFuIGlzc3VlIGFuZCBzdGFydHMgZnJvbSBwaXRcclxuLy9zdGFydGluZ1Bvc2l0aW9uIHdpbGwgYmUgMSwyLDMsNS4uLlxyXG4vL1RoaXMgZnVuY3Rpb24gcmUtc29ydHMgYW5kIGFkZHMgYSBuZXcgZmllbGQgY2FsbGVkIHN0YXJ0aW5nIG9yZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGFydGluZ09yZGVyKGRhdGEpe1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFsuLi5kYXRhXVxyXG4gICAgcmVzdWx0cy5zb3J0KChhLGIpPT4oYS5zdGFydGluZ1Bvc2l0aW9uIT0wP2Euc3RhcnRpbmdQb3NpdGlvbjoxMDApLShiLnN0YXJ0aW5nUG9zaXRpb24hPTA/Yi5zdGFydGluZ1Bvc2l0aW9uOjEwMCkpO1xyXG4gICAgcmVzdWx0cy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgaS5zdGFydGluZ09yZGVyID0gaW5kZXgrMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplUmVzdWx0KGRhdGEpOkRyaXZlclJhY2VSZXN1bHR7XHJcbiAgICByZXR1cm4oe1xyXG4gICAgICAgIGRyaXZlcjpkZXNlcmlhbGl6ZURyaXZlcihkYXRhKSxcclxuICAgICAgICAuLi5kZXNlcmlhbGl6ZURyaXZlclJlc3VsdChkYXRhKSxcclxuICAgICAgICByYWNlU3RhdHM6ZGVzZXJpYWxpemVSYWNlU3RhdHMoZGF0YSlcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZURyaXZlclJlc3VsdChkYXRhKXtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIHN0YXJ0aW5nUG9zaXRpb246cGFyc2VJbnQoZGF0YS5ncmlkKSxcclxuICAgICAgICBlbmRpbmdQb3NpdGlvbjpwYXJzZUludChkYXRhLnBvc2l0aW9uKSxcclxuICAgICAgICBwb2ludHM6cGFyc2VJbnQoZGF0YS5wb2ludHMpLFxyXG4gICAgICAgIGxhcHNDb21wbGV0ZWQ6cGFyc2VJbnQoZGF0YS5sYXBzKSxcclxuICAgICAgICByYWNlVGltZTpkYXRhLlRpbWU/cGFyc2VJbnQoZGF0YS5UaW1lLm1pbGxpcyk6bnVsbCxcclxuICAgICAgICByYWNlVGltZURzcDpkYXRhLlRpbWU/ZGF0YS5UaW1lLnRpbWU6ZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgZW5kaW5nU3RhdHVzOmRhdGEuc3RhdHVzLFxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplUmFjZVN0YXRzKGRhdGEpOkRyaXZlclJhY2VTdGF0c3tcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIGZhc3Rlc3RMYXBSYW5rOmRhdGEuRmFzdGVzdExhcD9kYXRhLkZhc3Rlc3RMYXAucmFuazotMSxcclxuICAgICAgICBmYXN0ZXN0TGFwTnVtYmVyOmRhdGEuRmFzdGVzdExhcD9wYXJzZUludChkYXRhLkZhc3Rlc3RMYXAubGFwKTotMSxcclxuICAgICAgICBmYXN0ZXN0TGFwVGltZTpkYXRhLkZhc3Rlc3RMYXA/dGltZVN0cmluZ1RvU2Vjb25kcyhkYXRhLkZhc3Rlc3RMYXAuVGltZS50aW1lKTpudWxsLFxyXG4gICAgICAgIGZhc3Rlc3RMYXBUaW1lRHNwOmRhdGEuRmFzdGVzdExhcD9kYXRhLkZhc3Rlc3RMYXAuVGltZS50aW1lOidOL0EnLFxyXG4gICAgICAgIGZhc3Rlc3RMYXBTcGVlZDpkYXRhLkZhc3Rlc3RMYXA/TWF0aC5yb3VuZChwYXJzZUZsb2F0KGRhdGEuRmFzdGVzdExhcC5BdmVyYWdlU3BlZWQuc3BlZWQpKjEwMDApLzEwMDA6MCxcclxuICAgICAgICBmYXN0ZXN0TGFwVW5pdHM6ZGF0YS5GYXN0ZXN0TGFwP2RhdGEuRmFzdGVzdExhcC5BdmVyYWdlU3BlZWQudW5pdHM6bnVsbFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplRHJpdmVyKGRhdGEpOkRyaXZlcntcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIGRyaXZlcklkOmRhdGEuRHJpdmVyLmRyaXZlcklkLFxyXG4gICAgICAgIGRyaXZlckNvZGU6ZGF0YS5Ecml2ZXIuY29kZSxcclxuICAgICAgICBkcml2ZXJOdW1iZXI6ZGF0YS5Ecml2ZXIucGVybWFuZW50TnVtYmVyP2RhdGEuRHJpdmVyLnBlcm1hbmVudE51bWJlcjpkYXRhLm51bWJlcixcclxuICAgICAgICBkcml2ZXJOYW1lOmRhdGEuRHJpdmVyLmdpdmVuTmFtZSsnICcrZGF0YS5Ecml2ZXIuZmFtaWx5TmFtZSxcclxuICAgICAgICBjb25zdHJ1Y3RvcklkOmRhdGEuQ29uc3RydWN0b3IuY29uc3RydWN0b3JJZCxcclxuICAgICAgICBjb25zdHJ1Y3Rvck5hbWU6ZGF0YS5Db25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgIGNvbnN0cnVjdG9yQ29sb3I6Q09OU1RSVUNUT1JfQ09MT1JfTUFQLmdldChkYXRhLkNvbnN0cnVjdG9yLmNvbnN0cnVjdG9ySWQpXHJcbiAgICAgICAgICAgID9DT05TVFJVQ1RPUl9DT0xPUl9NQVAuZ2V0KGRhdGEuQ29uc3RydWN0b3IuY29uc3RydWN0b3JJZClcclxuICAgICAgICAgICAgOkRFRkFVTFRfQ09OU1RSVUNUT1JfQ09MT1JcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplRHJpdmVyRnVsbChkYXRhKTpEcml2ZXJ7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBkcml2ZXJJZDpkYXRhLkRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICBkcml2ZXJDb2RlOmRhdGEuRHJpdmVyLmNvZGUsXHJcbiAgICAgICAgZHJpdmVyTnVtYmVyOmRhdGEuRHJpdmVyLnBlcm1hbmVudE51bWJlcj9kYXRhLkRyaXZlci5wZXJtYW5lbnROdW1iZXI6ZGF0YS5udW1iZXIsXHJcbiAgICAgICAgZHJpdmVyTmFtZTpkYXRhLkRyaXZlci5naXZlbk5hbWUrJyAnK2RhdGEuRHJpdmVyLmZhbWlseU5hbWUsXHJcbiAgICAgICAgZHJpdmVyVXJsOmRhdGEuRHJpdmVyLnVybCxcclxuICAgICAgICBkcml2ZXJOYXRpb25hbGl0eTpkYXRhLkRyaXZlci5uYXRpb25hbGl0eSxcclxuICAgICAgICBjb25zdHJ1Y3RvcklkOmRhdGEuQ29uc3RydWN0b3IuY29uc3RydWN0b3JJZCxcclxuICAgICAgICBjb25zdHJ1Y3Rvck5hbWU6ZGF0YS5Db25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgIGNvbnN0cnVjdG9yVXJsOmRhdGEuQ29uc3RydWN0b3IudXJsLFxyXG4gICAgICAgIGNvbnN0cnVjdG9yTmF0aW9uYWxpdHk6ZGF0YS5Db25zdHJ1Y3Rvci5uYXRpb25hbGl0eSxcclxuICAgICAgICBjb25zdHJ1Y3RvckNvbG9yOkNPTlNUUlVDVE9SX0NPTE9SX01BUC5nZXQoZGF0YS5Db25zdHJ1Y3Rvci5jb25zdHJ1Y3RvcklkKVxyXG4gICAgICAgICAgICA/Q09OU1RSVUNUT1JfQ09MT1JfTUFQLmdldChkYXRhLkNvbnN0cnVjdG9yLmNvbnN0cnVjdG9ySWQpXHJcbiAgICAgICAgICAgIDpERUZBVUxUX0NPTlNUUlVDVE9SX0NPTE9SXHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==