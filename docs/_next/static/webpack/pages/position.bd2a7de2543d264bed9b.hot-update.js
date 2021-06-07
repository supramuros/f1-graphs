webpackHotUpdate_N_E("pages/position",{

/***/ "./utils/fetchers/RaceCombined.ts":
/*!****************************************!*\
  !*** ./utils/fetchers/RaceCombined.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchRaceCombined; });
/*
*Function: Calls each of the 3 fetchers necessary to combine all API calls for a single race
*@Param: season: year
*@Param: round: race in season 1,2,3,etc.
*Intention is for this to be called via useSWR hook; Allows us to take advantage of the caching
*that the hook does automatically.
*Return: {race:Race, data:Map<driverId, Driver>}
*/
function fetchRaceCombined(raceData, lapData, pitData) {
  var driverMap = new Map();
  console.log(raceData);
  console.log(lapData);

  if (!raceData) {
    return {
      race: undefined,
      driverMap: undefined
    };
  }

  if (lapData) {
    raceData.results.forEach(function (r) {
      //by convention we will eventually set lap[0] to the below
      //allows us to have qualifying/starting row information in laps easily
      //makes querying a lap easy too since we can just do laps[lapNum]
      var startingPositionLap = {
        driverId: r.driver.driverId,
        lapNum: 0,
        position: r.startingOrder,
        timeDsp: '0:00',
        time: 0,
        totalTime: 0,
        gap: 0,
        positionGap: 0,
        pitStopTime: undefined,
        timeNetPitStop: undefined
      };
      var driverLaps = lapData.laps.filter(function (l) {
        return l.driverId === r.driver.driverId;
      }); //Pitstop data is added to the main data

      if (pitData) {
        var driverPitStops = pitData.pitStops.filter(function (p) {
          return p.driverId === r.driver.driverId;
        }); //Update driverLaps with pitstop details
        //driverLaps are sorted by lapnumber in that fetcher process

        driverPitStops.forEach(function (pit) {
          //Pitstop lap is when the car enters the pits but the time is added to the next lap
          //hence pit.lapNum is lap.lapNum-1; array index is 0 so we can just do pit.lapNum
          driverLaps[pit.lapNum].pitStopTime = pit.duration;
          driverLaps[pit.lapNum].timeNetPitStop = driverLaps[pit.lapNum].time - pit.duration;
        });
      }

      console.log('before cacl stats');
      console.log(driverLaps); //caclulate race statistics

      var _calculateDriverRaceS = calculateDriverRaceStatistics(driverLaps),
          slowestLapNum = _calculateDriverRaceS.slowestLapNum,
          slowestLapNetPit = _calculateDriverRaceS.slowestLapNetPit,
          slowestLapTime = _calculateDriverRaceS.slowestLapTime,
          slowestLapNetPitTime = _calculateDriverRaceS.slowestLapNetPitTime,
          avgLapTime = _calculateDriverRaceS.avgLapTime,
          avgLapNetPitTime = _calculateDriverRaceS.avgLapNetPitTime,
          varianceLapTime = _calculateDriverRaceS.varianceLapTime,
          varianceNetPitTime = _calculateDriverRaceS.varianceNetPitTime; //update Driver object statistics


      r.raceStats.slowestLapNumber = slowestLapNum;
      r.raceStats.slowestLapNetPit = slowestLapNetPit;
      r.raceStats.slowestLapTime = slowestLapTime;
      r.raceStats.slowestLapNetPitTime = slowestLapNetPitTime;
      r.raceStats.avgLapTime = avgLapTime;
      r.raceStats.avgLapNetPitTime = avgLapNetPitTime;
      r.raceStats.varianceLapTime = varianceLapTime;
      r.raceStats.varianceNetPitTime = varianceNetPitTime; //update Driver object with laps

      r.laps = [startingPositionLap].concat(driverLaps); //add to Map

      driverMap.set(r.driver.driverId, r);
      console.log('setting map');
      console.log(r.driver.driverId);
      console.log(r);
    });
    console.log('after loop');
    return {
      race: raceData.race,
      driverMap: driverMap
    };
  }

  return {
    race: raceData.race,
    driverMap: undefined
  };
}

function calculateDriverRaceStatistics(laps) {
  console.log('in calcstats');
  console.log(laps);
  var avgLapTime = 0;
  var avgLapNetPitTime = 0;
  var varianceLapTime = 0;
  var varianceNetPitTime = 0;
  var slowestLapTime = 0;
  var slowestLapNetPitTime = 0;
  var slowestLapNum = undefined;
  var slowestLapNetPit = undefined; //Calculate mean & slowest lap in first loop pass

  var lapTimeSum = 0;
  var lapTimeNetPitSum = 0;
  var lapSum = 0;
  laps.forEach(function (i, index) {
    //Set time net pit stop to time for each lap if not already defined
    if (!i.timeNetPitStop) {
      i.timeNetPitStop = i.time;
    }

    if (index > 0 && index < laps.length) {
      lapTimeSum += i.time;
      lapTimeNetPitSum += i.timeNetPitStop ? i.timeNetPitStop : i.time;
      lapSum++;

      if (i.time > slowestLapTime) {
        slowestLapTime = i.time;
        slowestLapNum = i.lapNum;
      }

      if (i.timeNetPitStop > slowestLapNetPitTime) {
        slowestLapNetPitTime = i.timeNetPitStop ? i.timeNetPitStop : i.time;
        slowestLapNetPit = i.lapNum;
      }
    }
  }); //explicitly set to 0 if number of laps is 0 and also avoid div by 0

  avgLapTime = lapSum > 0 ? lapTimeSum / lapSum : 0;
  avgLapNetPitTime = lapSum > 0 ? lapTimeNetPitSum / lapSum : 0; //Calculate variance in second pass

  var varianceSum = 0;
  var varianceNetPitSum = 0;
  laps.forEach(function (i, index) {
    if (index > 0 && index < laps.length) {
      varianceSum += Math.pow(i.time - avgLapTime, 2);
      varianceNetPitSum += Math.pow((i.timeNetPitStop ? i.timeNetPitStop : i.time) - avgLapNetPitTime, 2);
    }
  }); //explicitly set to 0 if number of laps is 0 and also avoid div by 0

  varianceLapTime = lapSum > 0 ? varianceSum / lapSum : 0;
  varianceNetPitTime = lapSum > 0 ? varianceNetPitSum / lapSum : 0;
  console.log(laps[0].driverId);
  return {
    slowestLapNum: slowestLapNum,
    slowestLapNetPit: slowestLapNetPit,
    slowestLapTime: slowestLapTime,
    slowestLapNetPitTime: slowestLapNetPitTime,
    avgLapTime: avgLapTime,
    avgLapNetPitTime: avgLapNetPitTime,
    varianceLapTime: varianceLapTime,
    varianceNetPitTime: varianceNetPitTime
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsImNvbnNvbGUiLCJsb2ciLCJyYWNlIiwidW5kZWZpbmVkIiwicmVzdWx0cyIsImZvckVhY2giLCJyIiwic3RhcnRpbmdQb3NpdGlvbkxhcCIsImRyaXZlcklkIiwiZHJpdmVyIiwibGFwTnVtIiwicG9zaXRpb24iLCJzdGFydGluZ09yZGVyIiwidGltZURzcCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJnYXAiLCJwb3NpdGlvbkdhcCIsInBpdFN0b3BUaW1lIiwidGltZU5ldFBpdFN0b3AiLCJkcml2ZXJMYXBzIiwibGFwcyIsImZpbHRlciIsImwiLCJkcml2ZXJQaXRTdG9wcyIsInBpdFN0b3BzIiwicCIsInBpdCIsImR1cmF0aW9uIiwiY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MiLCJzbG93ZXN0TGFwTnVtIiwic2xvd2VzdExhcE5ldFBpdCIsInNsb3dlc3RMYXBUaW1lIiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJhdmdMYXBUaW1lIiwiYXZnTGFwTmV0UGl0VGltZSIsInZhcmlhbmNlTGFwVGltZSIsInZhcmlhbmNlTmV0UGl0VGltZSIsInJhY2VTdGF0cyIsInNsb3dlc3RMYXBOdW1iZXIiLCJjb25jYXQiLCJzZXQiLCJsYXBUaW1lU3VtIiwibGFwVGltZU5ldFBpdFN1bSIsImxhcFN1bSIsImkiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhbmNlU3VtIiwidmFyaWFuY2VOZXRQaXRTdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhF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QjtBQUdJQyxrQkFBYyxFQUFDQSxjQUhuQjtBQUlJQyx3QkFBb0IsRUFBQ0Esb0JBSnpCO0FBS0lDLGNBQVUsRUFBQ0EsVUFMZjtBQU1JQyxvQkFBZ0IsRUFBQ0EsZ0JBTnJCO0FBT0lDLG1CQUFlLEVBQUNBLGVBUHBCO0FBUUlDLHNCQUFrQixFQUFDQTtBQVJ2QixHQURKO0FBWUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zaXRpb24uYmQyYTdkZTI1NDNkMjY0YmVkOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhcCwgUmFjZUxhcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvTGFwXCI7XHJcbmltcG9ydCB7IFJhY2VQaXRTdG9wcyB9IGZyb20gXCIuLi8uLi90eXBlcy9QaXRTdG9wXCI7XHJcbmltcG9ydCB7IERyaXZlclJhY2VSZXN1bHQsIFJhY2VEcml2ZXJNYXAsIFJhY2VSZXN1bHQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvUmFjZVJlc3VsdFwiO1xyXG5cclxuLypcclxuKkZ1bmN0aW9uOiBDYWxscyBlYWNoIG9mIHRoZSAzIGZldGNoZXJzIG5lY2Vzc2FyeSB0byBjb21iaW5lIGFsbCBBUEkgY2FsbHMgZm9yIGEgc2luZ2xlIHJhY2VcclxuKkBQYXJhbTogc2Vhc29uOiB5ZWFyXHJcbipAUGFyYW06IHJvdW5kOiByYWNlIGluIHNlYXNvbiAxLDIsMyxldGMuXHJcbipJbnRlbnRpb24gaXMgZm9yIHRoaXMgdG8gYmUgY2FsbGVkIHZpYSB1c2VTV1IgaG9vazsgQWxsb3dzIHVzIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoZSBjYWNoaW5nXHJcbip0aGF0IHRoZSBob29rIGRvZXMgYXV0b21hdGljYWxseS5cclxuKlJldHVybjoge3JhY2U6UmFjZSwgZGF0YTpNYXA8ZHJpdmVySWQsIERyaXZlcj59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaFJhY2VDb21iaW5lZChyYWNlRGF0YTpSYWNlUmVzdWx0LGxhcERhdGE6UmFjZUxhcHMscGl0RGF0YT86UmFjZVBpdFN0b3BzLCk6UmFjZURyaXZlck1hcHsgICAgXHJcbiAgICBjb25zdCBkcml2ZXJNYXAgPSBuZXcgTWFwPHN0cmluZyxEcml2ZXJSYWNlUmVzdWx0PigpOyAgICBcclxuICAgIGNvbnNvbGUubG9nKHJhY2VEYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGxhcERhdGEpO1xyXG4gICAgaWYoIXJhY2VEYXRhKXtcclxuICAgICAgICByZXR1cm4ge3JhY2U6dW5kZWZpbmVkLCBkcml2ZXJNYXA6dW5kZWZpbmVkfTtcclxuICAgIH1cclxuICAgIGlmKGxhcERhdGEpe1xyXG4gICAgICAgIHJhY2VEYXRhLnJlc3VsdHMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgIC8vYnkgY29udmVudGlvbiB3ZSB3aWxsIGV2ZW50dWFsbHkgc2V0IGxhcFswXSB0byB0aGUgYmVsb3dcclxuICAgICAgICAgICAgLy9hbGxvd3MgdXMgdG8gaGF2ZSBxdWFsaWZ5aW5nL3N0YXJ0aW5nIHJvdyBpbmZvcm1hdGlvbiBpbiBsYXBzIGVhc2lseVxyXG4gICAgICAgICAgICAvL21ha2VzIHF1ZXJ5aW5nIGEgbGFwIGVhc3kgdG9vIHNpbmNlIHdlIGNhbiBqdXN0IGRvIGxhcHNbbGFwTnVtXVxyXG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ1Bvc2l0aW9uTGFwOkxhcCA9IHtcclxuICAgICAgICAgICAgICAgIGRyaXZlcklkOiByLmRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgIGxhcE51bTowLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHIuc3RhcnRpbmdPcmRlcixcclxuICAgICAgICAgICAgICAgIHRpbWVEc3A6ICcwOjAwJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6MCxcclxuICAgICAgICAgICAgICAgIGdhcDowLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25HYXA6MCxcclxuICAgICAgICAgICAgICAgIHBpdFN0b3BUaW1lOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRpbWVOZXRQaXRTdG9wOnVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcml2ZXJMYXBzID0gbGFwRGF0YS5sYXBzLmZpbHRlcihsPT5sLmRyaXZlcklkPT09ci5kcml2ZXIuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAvL1BpdHN0b3AgZGF0YSBpcyBhZGRlZCB0byB0aGUgbWFpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmKHBpdERhdGEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyUGl0U3RvcHMgPSBwaXREYXRhLnBpdFN0b3BzLmZpbHRlcihwPT5wLmRyaXZlcklkPT09ci5kcml2ZXIuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgLy9VcGRhdGUgZHJpdmVyTGFwcyB3aXRoIHBpdHN0b3AgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgLy9kcml2ZXJMYXBzIGFyZSBzb3J0ZWQgYnkgbGFwbnVtYmVyIGluIHRoYXQgZmV0Y2hlciBwcm9jZXNzXHJcbiAgICAgICAgICAgICAgICBkcml2ZXJQaXRTdG9wcy5mb3JFYWNoKHBpdD0+e1xyXG4gICAgICAgICAgICAgICAgLy9QaXRzdG9wIGxhcCBpcyB3aGVuIHRoZSBjYXIgZW50ZXJzIHRoZSBwaXRzIGJ1dCB0aGUgdGltZSBpcyBhZGRlZCB0byB0aGUgbmV4dCBsYXBcclxuICAgICAgICAgICAgICAgIC8vaGVuY2UgcGl0LmxhcE51bSBpcyBsYXAubGFwTnVtLTE7IGFycmF5IGluZGV4IGlzIDAgc28gd2UgY2FuIGp1c3QgZG8gcGl0LmxhcE51bVxyXG4gICAgICAgICAgICAgICAgZHJpdmVyTGFwc1twaXQubGFwTnVtXS5waXRTdG9wVGltZSA9IHBpdC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0udGltZU5ldFBpdFN0b3AgPSBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWUgLSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgY2FjbCBzdGF0cycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy9jYWNsdWxhdGUgcmFjZSBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIGNvbnN0IHtzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdCwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgICAgIGF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lLCBcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZX0gPSBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOdW1iZXI9c2xvd2VzdExhcE51bTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdD1zbG93ZXN0TGFwTmV0UGl0O1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwVGltZT1zbG93ZXN0TGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWU9c2xvd2VzdExhcE5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcFRpbWU9YXZnTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZT1hdmdMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZUxhcFRpbWU9dmFyaWFuY2VMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWU9dmFyaWFuY2VOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICAvL3VwZGF0ZSBEcml2ZXIgb2JqZWN0IHdpdGggbGFwc1xyXG4gICAgICAgICAgICByLmxhcHMgPSBbc3RhcnRpbmdQb3NpdGlvbkxhcF0uY29uY2F0KGRyaXZlckxhcHMpO1xyXG4gICAgICAgICAgICAvL2FkZCB0byBNYXBcclxuICAgICAgICAgICAgZHJpdmVyTWFwLnNldChyLmRyaXZlci5kcml2ZXJJZCxyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgbWFwJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgIHJldHVybiB7cmFjZTpyYWNlRGF0YS5yYWNlLCBkcml2ZXJNYXA6ZHJpdmVyTWFwfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDp1bmRlZmluZWR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhsYXBzOkxhcFtdKXtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBjYWxjc3RhdHMnKTtcclxuICAgIGNvbnNvbGUubG9nKGxhcHMpO1xyXG4gICAgbGV0IGF2Z0xhcFRpbWUgPSAwO1xyXG4gICAgbGV0IGF2Z0xhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwVGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOdW0gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdCA9IHVuZGVmaW5lZDtcclxuICAgIC8vQ2FsY3VsYXRlIG1lYW4gJiBzbG93ZXN0IGxhcCBpbiBmaXJzdCBsb29wIHBhc3NcclxuICAgIGxldCBsYXBUaW1lU3VtPTA7XHJcbiAgICBsZXQgbGFwVGltZU5ldFBpdFN1bSA9IDA7XHJcbiAgICBsZXQgbGFwU3VtID0gMDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICAvL1NldCB0aW1lIG5ldCBwaXQgc3RvcCB0byB0aW1lIGZvciBlYWNoIGxhcCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICAgICAgaWYoIWkudGltZU5ldFBpdFN0b3Ape1xyXG4gICAgICAgICAgICBpLnRpbWVOZXRQaXRTdG9wPWkudGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXg+MCAmJiBpbmRleDxsYXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxhcFRpbWVTdW0rPSBpLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFRpbWVOZXRQaXRTdW0rPWkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFN1bSsrO1xyXG4gICAgICAgICAgICBpZihpLnRpbWU+c2xvd2VzdExhcFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUgPSBpLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTnVtID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaS50aW1lTmV0UGl0U3RvcD5zbG93ZXN0TGFwTmV0UGl0VGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0ID0gaS5sYXBOdW07ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgYXZnTGFwVGltZSA9IGxhcFN1bT4wP2xhcFRpbWVTdW0vbGFwU3VtOjA7XHJcbiAgICBhdmdMYXBOZXRQaXRUaW1lID0gbGFwU3VtPjA/bGFwVGltZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIC8vQ2FsY3VsYXRlIHZhcmlhbmNlIGluIHNlY29uZCBwYXNzXHJcbiAgICBsZXQgdmFyaWFuY2VTdW09MDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFN1bT0wO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXJpYW5jZVN1bSArPSAoKGkudGltZS1hdmdMYXBUaW1lKSoqMik7XHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpKioyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgY29uc29sZS5sb2cobGFwc1swXS5kcml2ZXJJZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvd2VzdExhcE51bTpzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0OnNsb3dlc3RMYXBOZXRQaXQsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwVGltZTpzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXRUaW1lOnNsb3dlc3RMYXBOZXRQaXRUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBUaW1lOmF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgIGF2Z0xhcE5ldFBpdFRpbWU6YXZnTGFwTmV0UGl0VGltZSwgXHJcbiAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZTp2YXJpYW5jZUxhcFRpbWUsXHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZTp2YXJpYW5jZU5ldFBpdFRpbWVcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==