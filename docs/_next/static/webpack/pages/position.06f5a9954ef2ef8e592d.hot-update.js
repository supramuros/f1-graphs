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
  console.log('*lapdata');
  console.log(lapData);

  if (!raceData) {
    return {
      race: undefined,
      driverMap: undefined
    };
  }

  if (lapData) {
    raceData.results.forEach(function (r) {
      console.log(r.driver); //by convention we will eventually set lap[0] to the below
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
      });
      console.log('driverLaps');
      console.log(driverLaps); //Pitstop data is added to the main data

      if (pitData) {
        var driverPitStops = pitData.pitStops.filter(function (p) {
          return p.driverId === r.driver.driverId;
        });
        console.log('driverpitstops');
        console.log(driverPitStops); //Update driverLaps with pitstop details
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsImNvbnNvbGUiLCJsb2ciLCJyYWNlIiwidW5kZWZpbmVkIiwicmVzdWx0cyIsImZvckVhY2giLCJyIiwiZHJpdmVyIiwic3RhcnRpbmdQb3NpdGlvbkxhcCIsImRyaXZlcklkIiwibGFwTnVtIiwicG9zaXRpb24iLCJzdGFydGluZ09yZGVyIiwidGltZURzcCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJnYXAiLCJwb3NpdGlvbkdhcCIsInBpdFN0b3BUaW1lIiwidGltZU5ldFBpdFN0b3AiLCJkcml2ZXJMYXBzIiwibGFwcyIsImZpbHRlciIsImwiLCJkcml2ZXJQaXRTdG9wcyIsInBpdFN0b3BzIiwicCIsInBpdCIsImR1cmF0aW9uIiwiY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MiLCJzbG93ZXN0TGFwTnVtIiwic2xvd2VzdExhcE5ldFBpdCIsInNsb3dlc3RMYXBUaW1lIiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJhdmdMYXBUaW1lIiwiYXZnTGFwTmV0UGl0VGltZSIsInZhcmlhbmNlTGFwVGltZSIsInZhcmlhbmNlTmV0UGl0VGltZSIsInJhY2VTdGF0cyIsInNsb3dlc3RMYXBOdW1iZXIiLCJjb25jYXQiLCJzZXQiLCJsYXBUaW1lU3VtIiwibGFwVGltZU5ldFBpdFN1bSIsImxhcFN1bSIsImkiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhbmNlU3VtIiwidmFyaWFuY2VOZXRQaXRTdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhF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QUFrQixHQUFHTyxNQUFNLEdBQUMsQ0FBUCxHQUFTSyxpQkFBaUIsR0FBQ0wsTUFBM0IsR0FBa0MsQ0FBdkQ7QUFDQTVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWixRQUFwQjtBQUNBLFNBQ0k7QUFDSXFCLGlCQUFhLEVBQUNBLGFBRGxCO0FBRUlDLG9CQUFnQixFQUFDQSxnQkFGckI7QUFHSUMsa0JBQWMsRUFBQ0EsY0FIbkI7QUFJSUMsd0JBQW9CLEVBQUNBLG9CQUp6QjtBQUtJQyxjQUFVLEVBQUNBLFVBTGY7QUFNSUMsb0JBQWdCLEVBQUNBLGdCQU5yQjtBQU9JQyxtQkFBZSxFQUFDQSxlQVBwQjtBQVFJQyxzQkFBa0IsRUFBQ0E7QUFSdkIsR0FESjtBQVlIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc2l0aW9uLjA2ZjVhOTk1NGVmMmVmOGU1OTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXAsIFJhY2VMYXBzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL0xhcFwiO1xyXG5pbXBvcnQgeyBSYWNlUGl0U3RvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvUGl0U3RvcFwiO1xyXG5pbXBvcnQgeyBEcml2ZXJSYWNlUmVzdWx0LCBSYWNlRHJpdmVyTWFwLCBSYWNlUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3R5cGVzL1JhY2VSZXN1bHRcIjtcclxuXHJcbi8qXHJcbipGdW5jdGlvbjogQ2FsbHMgZWFjaCBvZiB0aGUgMyBmZXRjaGVycyBuZWNlc3NhcnkgdG8gY29tYmluZSBhbGwgQVBJIGNhbGxzIGZvciBhIHNpbmdsZSByYWNlXHJcbipAUGFyYW06IHNlYXNvbjogeWVhclxyXG4qQFBhcmFtOiByb3VuZDogcmFjZSBpbiBzZWFzb24gMSwyLDMsZXRjLlxyXG4qSW50ZW50aW9uIGlzIGZvciB0aGlzIHRvIGJlIGNhbGxlZCB2aWEgdXNlU1dSIGhvb2s7IEFsbG93cyB1cyB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgY2FjaGluZ1xyXG4qdGhhdCB0aGUgaG9vayBkb2VzIGF1dG9tYXRpY2FsbHkuXHJcbipSZXR1cm46IHtyYWNlOlJhY2UsIGRhdGE6TWFwPGRyaXZlcklkLCBEcml2ZXI+fVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hSYWNlQ29tYmluZWQocmFjZURhdGE6UmFjZVJlc3VsdCxsYXBEYXRhOlJhY2VMYXBzLHBpdERhdGE/OlJhY2VQaXRTdG9wcywpOlJhY2VEcml2ZXJNYXB7ICAgIFxyXG4gICAgY29uc3QgZHJpdmVyTWFwID0gbmV3IE1hcDxzdHJpbmcsRHJpdmVyUmFjZVJlc3VsdD4oKTsgICAgXHJcbiAgICBjb25zb2xlLmxvZygnKmxhcGRhdGEnKTtcclxuICAgIGNvbnNvbGUubG9nKGxhcERhdGEpO1xyXG4gICAgaWYoIXJhY2VEYXRhKXtcclxuICAgICAgICByZXR1cm4ge3JhY2U6dW5kZWZpbmVkLCBkcml2ZXJNYXA6dW5kZWZpbmVkfTtcclxuICAgIH1cclxuICAgIGlmKGxhcERhdGEpe1xyXG4gICAgICAgIHJhY2VEYXRhLnJlc3VsdHMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIuZHJpdmVyKTtcclxuICAgICAgICAgICAgLy9ieSBjb252ZW50aW9uIHdlIHdpbGwgZXZlbnR1YWxseSBzZXQgbGFwWzBdIHRvIHRoZSBiZWxvd1xyXG4gICAgICAgICAgICAvL2FsbG93cyB1cyB0byBoYXZlIHF1YWxpZnlpbmcvc3RhcnRpbmcgcm93IGluZm9ybWF0aW9uIGluIGxhcHMgZWFzaWx5XHJcbiAgICAgICAgICAgIC8vbWFrZXMgcXVlcnlpbmcgYSBsYXAgZWFzeSB0b28gc2luY2Ugd2UgY2FuIGp1c3QgZG8gbGFwc1tsYXBOdW1dXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25MYXA6TGFwID0ge1xyXG4gICAgICAgICAgICAgICAgZHJpdmVySWQ6IHIuZHJpdmVyLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgbGFwTnVtOjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogci5zdGFydGluZ09yZGVyLFxyXG4gICAgICAgICAgICAgICAgdGltZURzcDogJzA6MDAnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsVGltZTowLFxyXG4gICAgICAgICAgICAgICAgZ2FwOjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkdhcDowLFxyXG4gICAgICAgICAgICAgICAgcGl0U3RvcFRpbWU6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGltZU5ldFBpdFN0b3A6dW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlckxhcHMgPSBsYXBEYXRhLmxhcHMuZmlsdGVyKGw9PmwuZHJpdmVySWQ9PT1yLmRyaXZlci5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcml2ZXJMYXBzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRyaXZlckxhcHMpO1xyXG5cclxuICAgICAgICAgICAgLy9QaXRzdG9wIGRhdGEgaXMgYWRkZWQgdG8gdGhlIG1haW4gZGF0YVxyXG4gICAgICAgICAgICBpZihwaXREYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlclBpdFN0b3BzID0gcGl0RGF0YS5waXRTdG9wcy5maWx0ZXIocD0+cC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcml2ZXJwaXRzdG9wcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHJpdmVyUGl0U3RvcHMpO1xyXG4gICAgICAgICAgICAgICAgLy9VcGRhdGUgZHJpdmVyTGFwcyB3aXRoIHBpdHN0b3AgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgLy9kcml2ZXJMYXBzIGFyZSBzb3J0ZWQgYnkgbGFwbnVtYmVyIGluIHRoYXQgZmV0Y2hlciBwcm9jZXNzXHJcbiAgICAgICAgICAgICAgICBkcml2ZXJQaXRTdG9wcy5mb3JFYWNoKHBpdD0+e1xyXG4gICAgICAgICAgICAgICAgLy9QaXRzdG9wIGxhcCBpcyB3aGVuIHRoZSBjYXIgZW50ZXJzIHRoZSBwaXRzIGJ1dCB0aGUgdGltZSBpcyBhZGRlZCB0byB0aGUgbmV4dCBsYXBcclxuICAgICAgICAgICAgICAgIC8vaGVuY2UgcGl0LmxhcE51bSBpcyBsYXAubGFwTnVtLTE7IGFycmF5IGluZGV4IGlzIDAgc28gd2UgY2FuIGp1c3QgZG8gcGl0LmxhcE51bVxyXG4gICAgICAgICAgICAgICAgZHJpdmVyTGFwc1twaXQubGFwTnVtXS5waXRTdG9wVGltZSA9IHBpdC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0udGltZU5ldFBpdFN0b3AgPSBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWUgLSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgY2FjbCBzdGF0cycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy9jYWNsdWxhdGUgcmFjZSBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIGNvbnN0IHtzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdCwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgICAgIGF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lLCBcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZX0gPSBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOdW1iZXI9c2xvd2VzdExhcE51bTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdD1zbG93ZXN0TGFwTmV0UGl0O1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwVGltZT1zbG93ZXN0TGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWU9c2xvd2VzdExhcE5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcFRpbWU9YXZnTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZT1hdmdMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZUxhcFRpbWU9dmFyaWFuY2VMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWU9dmFyaWFuY2VOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICAvL3VwZGF0ZSBEcml2ZXIgb2JqZWN0IHdpdGggbGFwc1xyXG4gICAgICAgICAgICByLmxhcHMgPSBbc3RhcnRpbmdQb3NpdGlvbkxhcF0uY29uY2F0KGRyaXZlckxhcHMpO1xyXG4gICAgICAgICAgICAvL2FkZCB0byBNYXBcclxuICAgICAgICAgICAgZHJpdmVyTWFwLnNldChyLmRyaXZlci5kcml2ZXJJZCxyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgbWFwJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgIHJldHVybiB7cmFjZTpyYWNlRGF0YS5yYWNlLCBkcml2ZXJNYXA6ZHJpdmVyTWFwfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDp1bmRlZmluZWR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhsYXBzOkxhcFtdKXtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBjYWxjc3RhdHMnKTtcclxuICAgIGNvbnNvbGUubG9nKGxhcHMpO1xyXG4gICAgbGV0IGF2Z0xhcFRpbWUgPSAwO1xyXG4gICAgbGV0IGF2Z0xhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwVGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOdW0gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdCA9IHVuZGVmaW5lZDtcclxuICAgIC8vQ2FsY3VsYXRlIG1lYW4gJiBzbG93ZXN0IGxhcCBpbiBmaXJzdCBsb29wIHBhc3NcclxuICAgIGxldCBsYXBUaW1lU3VtPTA7XHJcbiAgICBsZXQgbGFwVGltZU5ldFBpdFN1bSA9IDA7XHJcbiAgICBsZXQgbGFwU3VtID0gMDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICAvL1NldCB0aW1lIG5ldCBwaXQgc3RvcCB0byB0aW1lIGZvciBlYWNoIGxhcCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICAgICAgaWYoIWkudGltZU5ldFBpdFN0b3Ape1xyXG4gICAgICAgICAgICBpLnRpbWVOZXRQaXRTdG9wPWkudGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXg+MCAmJiBpbmRleDxsYXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxhcFRpbWVTdW0rPSBpLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFRpbWVOZXRQaXRTdW0rPWkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFN1bSsrO1xyXG4gICAgICAgICAgICBpZihpLnRpbWU+c2xvd2VzdExhcFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUgPSBpLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTnVtID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaS50aW1lTmV0UGl0U3RvcD5zbG93ZXN0TGFwTmV0UGl0VGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0ID0gaS5sYXBOdW07ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgYXZnTGFwVGltZSA9IGxhcFN1bT4wP2xhcFRpbWVTdW0vbGFwU3VtOjA7XHJcbiAgICBhdmdMYXBOZXRQaXRUaW1lID0gbGFwU3VtPjA/bGFwVGltZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIC8vQ2FsY3VsYXRlIHZhcmlhbmNlIGluIHNlY29uZCBwYXNzXHJcbiAgICBsZXQgdmFyaWFuY2VTdW09MDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFN1bT0wO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXJpYW5jZVN1bSArPSAoKGkudGltZS1hdmdMYXBUaW1lKSoqMik7XHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpKioyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgY29uc29sZS5sb2cobGFwc1swXS5kcml2ZXJJZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvd2VzdExhcE51bTpzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0OnNsb3dlc3RMYXBOZXRQaXQsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwVGltZTpzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXRUaW1lOnNsb3dlc3RMYXBOZXRQaXRUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBUaW1lOmF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgIGF2Z0xhcE5ldFBpdFRpbWU6YXZnTGFwTmV0UGl0VGltZSwgXHJcbiAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZTp2YXJpYW5jZUxhcFRpbWUsXHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZTp2YXJpYW5jZU5ldFBpdFRpbWVcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==