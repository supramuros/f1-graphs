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

      console.log('before cacl stats'); //caclulate race statistics

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsImNvbnNvbGUiLCJsb2ciLCJyYWNlIiwidW5kZWZpbmVkIiwicmVzdWx0cyIsImZvckVhY2giLCJyIiwic3RhcnRpbmdQb3NpdGlvbkxhcCIsImRyaXZlcklkIiwiZHJpdmVyIiwibGFwTnVtIiwicG9zaXRpb24iLCJzdGFydGluZ09yZGVyIiwidGltZURzcCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJnYXAiLCJwb3NpdGlvbkdhcCIsInBpdFN0b3BUaW1lIiwidGltZU5ldFBpdFN0b3AiLCJkcml2ZXJMYXBzIiwibGFwcyIsImZpbHRlciIsImwiLCJkcml2ZXJQaXRTdG9wcyIsInBpdFN0b3BzIiwicCIsInBpdCIsImR1cmF0aW9uIiwiY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MiLCJzbG93ZXN0TGFwTnVtIiwic2xvd2VzdExhcE5ldFBpdCIsInNsb3dlc3RMYXBUaW1lIiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJhdmdMYXBUaW1lIiwiYXZnTGFwTmV0UGl0VGltZSIsInZhcmlhbmNlTGFwVGltZSIsInZhcmlhbmNlTmV0UGl0VGltZSIsInJhY2VTdGF0cyIsInNsb3dlc3RMYXBOdW1iZXIiLCJjb25jYXQiLCJzZXQiLCJsYXBUaW1lU3VtIiwibGFwVGltZU5ldFBpdFN1bSIsImxhcFN1bSIsImkiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhbmNlU3VtIiwidmFyaWFuY2VOZXRQaXRTdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhF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LENBbEM4QyxDQW1DOUM7O0FBQ0EsTUFBSUksV0FBVyxHQUFDLENBQWhCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUMsQ0FBdEI7QUFDQTVCLE1BQUksQ0FBQ2hCLE9BQUwsQ0FBYSxVQUFDd0MsQ0FBRCxFQUFHQyxLQUFILEVBQVc7QUFDcEIsUUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBV0EsS0FBSyxHQUFDekIsSUFBSSxDQUFDMEIsTUFBekIsRUFBZ0M7QUFDNUJDLGlCQUFXLGFBQU1ILENBQUMsQ0FBQy9CLElBQUYsR0FBT29CLFVBQWIsRUFBMEIsQ0FBMUIsQ0FBWDtBQUNBZSx1QkFBaUIsYUFBTSxDQUFDSixDQUFDLENBQUMxQixjQUFGLEdBQWlCMEIsQ0FBQyxDQUFDMUIsY0FBbkIsR0FBa0MwQixDQUFDLENBQUMvQixJQUFyQyxJQUEyQ3FCLGdCQUFqRCxFQUFvRSxDQUFwRSxDQUFqQjtBQUNIO0FBRUosR0FORCxFQXRDOEMsQ0E2QzlDOztBQUNBQyxpQkFBZSxHQUFHUSxNQUFNLEdBQUMsQ0FBUCxHQUFTSSxXQUFXLEdBQUNKLE1BQXJCLEdBQTRCLENBQTlDO0FBQ0FQLG9CQUFrQixHQUFHTyxNQUFNLEdBQUMsQ0FBUCxHQUFTSyxpQkFBaUIsR0FBQ0wsTUFBM0IsR0FBa0MsQ0FBdkQ7QUFDQSxTQUNJO0FBQ0lkLGlCQUFhLEVBQUNBLGFBRGxCO0FBRUlDLG9CQUFnQixFQUFDQSxnQkFGckI7QUFHSUMsa0JBQWMsRUFBQ0EsY0FIbkI7QUFJSUMsd0JBQW9CLEVBQUNBLG9CQUp6QjtBQUtJQyxjQUFVLEVBQUNBLFVBTGY7QUFNSUMsb0JBQWdCLEVBQUNBLGdCQU5yQjtBQU9JQyxtQkFBZSxFQUFDQSxlQVBwQjtBQVFJQyxzQkFBa0IsRUFBQ0E7QUFSdkIsR0FESjtBQVlIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc2l0aW9uLmM4YTE1NTc3ZjUzYTgwMDEyNzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXAsIFJhY2VMYXBzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL0xhcFwiO1xyXG5pbXBvcnQgeyBSYWNlUGl0U3RvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvUGl0U3RvcFwiO1xyXG5pbXBvcnQgeyBEcml2ZXJSYWNlUmVzdWx0LCBSYWNlRHJpdmVyTWFwLCBSYWNlUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3R5cGVzL1JhY2VSZXN1bHRcIjtcclxuXHJcbi8qXHJcbipGdW5jdGlvbjogQ2FsbHMgZWFjaCBvZiB0aGUgMyBmZXRjaGVycyBuZWNlc3NhcnkgdG8gY29tYmluZSBhbGwgQVBJIGNhbGxzIGZvciBhIHNpbmdsZSByYWNlXHJcbipAUGFyYW06IHNlYXNvbjogeWVhclxyXG4qQFBhcmFtOiByb3VuZDogcmFjZSBpbiBzZWFzb24gMSwyLDMsZXRjLlxyXG4qSW50ZW50aW9uIGlzIGZvciB0aGlzIHRvIGJlIGNhbGxlZCB2aWEgdXNlU1dSIGhvb2s7IEFsbG93cyB1cyB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgY2FjaGluZ1xyXG4qdGhhdCB0aGUgaG9vayBkb2VzIGF1dG9tYXRpY2FsbHkuXHJcbipSZXR1cm46IHtyYWNlOlJhY2UsIGRhdGE6TWFwPGRyaXZlcklkLCBEcml2ZXI+fVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hSYWNlQ29tYmluZWQocmFjZURhdGE6UmFjZVJlc3VsdCxsYXBEYXRhOlJhY2VMYXBzLHBpdERhdGE/OlJhY2VQaXRTdG9wcywpOlJhY2VEcml2ZXJNYXB7ICAgIFxyXG4gICAgY29uc3QgZHJpdmVyTWFwID0gbmV3IE1hcDxzdHJpbmcsRHJpdmVyUmFjZVJlc3VsdD4oKTsgICAgXHJcbiAgICBjb25zb2xlLmxvZyhyYWNlRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhsYXBEYXRhKTtcclxuICAgIGlmKCFyYWNlRGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHtyYWNlOnVuZGVmaW5lZCwgZHJpdmVyTWFwOnVuZGVmaW5lZH07XHJcbiAgICB9XHJcbiAgICBpZihsYXBEYXRhKXtcclxuICAgICAgICByYWNlRGF0YS5yZXN1bHRzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAvL2J5IGNvbnZlbnRpb24gd2Ugd2lsbCBldmVudHVhbGx5IHNldCBsYXBbMF0gdG8gdGhlIGJlbG93XHJcbiAgICAgICAgICAgIC8vYWxsb3dzIHVzIHRvIGhhdmUgcXVhbGlmeWluZy9zdGFydGluZyByb3cgaW5mb3JtYXRpb24gaW4gbGFwcyBlYXNpbHlcclxuICAgICAgICAgICAgLy9tYWtlcyBxdWVyeWluZyBhIGxhcCBlYXN5IHRvbyBzaW5jZSB3ZSBjYW4ganVzdCBkbyBsYXBzW2xhcE51bV1cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbkxhcDpMYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBkcml2ZXJJZDogci5kcml2ZXIuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICBsYXBOdW06MCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByLnN0YXJ0aW5nT3JkZXIsXHJcbiAgICAgICAgICAgICAgICB0aW1lRHNwOiAnMDowMCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxUaW1lOjAsXHJcbiAgICAgICAgICAgICAgICBnYXA6MCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uR2FwOjAsXHJcbiAgICAgICAgICAgICAgICBwaXRTdG9wVGltZTp1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lTmV0UGl0U3RvcDp1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpdmVyTGFwcyA9IGxhcERhdGEubGFwcy5maWx0ZXIobD0+bC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgLy9QaXRzdG9wIGRhdGEgaXMgYWRkZWQgdG8gdGhlIG1haW4gZGF0YVxyXG4gICAgICAgICAgICBpZihwaXREYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlclBpdFN0b3BzID0gcGl0RGF0YS5waXRTdG9wcy5maWx0ZXIocD0+cC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgIC8vVXBkYXRlIGRyaXZlckxhcHMgd2l0aCBwaXRzdG9wIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIC8vZHJpdmVyTGFwcyBhcmUgc29ydGVkIGJ5IGxhcG51bWJlciBpbiB0aGF0IGZldGNoZXIgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgICAgZHJpdmVyUGl0U3RvcHMuZm9yRWFjaChwaXQ9PntcclxuICAgICAgICAgICAgICAgIC8vUGl0c3RvcCBsYXAgaXMgd2hlbiB0aGUgY2FyIGVudGVycyB0aGUgcGl0cyBidXQgdGhlIHRpbWUgaXMgYWRkZWQgdG8gdGhlIG5leHQgbGFwXHJcbiAgICAgICAgICAgICAgICAvL2hlbmNlIHBpdC5sYXBOdW0gaXMgbGFwLmxhcE51bS0xOyBhcnJheSBpbmRleCBpcyAwIHNvIHdlIGNhbiBqdXN0IGRvIHBpdC5sYXBOdW1cclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0ucGl0U3RvcFRpbWUgPSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWVOZXRQaXRTdG9wID0gZHJpdmVyTGFwc1twaXQubGFwTnVtXS50aW1lIC0gcGl0LmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlIGNhY2wgc3RhdHMnKTtcclxuICAgICAgICAgICAgLy9jYWNsdWxhdGUgcmFjZSBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIGNvbnN0IHtzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdCwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgICAgIGF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lLCBcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZX0gPSBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOdW1iZXI9c2xvd2VzdExhcE51bTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdD1zbG93ZXN0TGFwTmV0UGl0O1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwVGltZT1zbG93ZXN0TGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWU9c2xvd2VzdExhcE5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcFRpbWU9YXZnTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZT1hdmdMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZUxhcFRpbWU9dmFyaWFuY2VMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWU9dmFyaWFuY2VOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICAvL3VwZGF0ZSBEcml2ZXIgb2JqZWN0IHdpdGggbGFwc1xyXG4gICAgICAgICAgICByLmxhcHMgPSBbc3RhcnRpbmdQb3NpdGlvbkxhcF0uY29uY2F0KGRyaXZlckxhcHMpO1xyXG4gICAgICAgICAgICAvL2FkZCB0byBNYXBcclxuICAgICAgICAgICAgZHJpdmVyTWFwLnNldChyLmRyaXZlci5kcml2ZXJJZCxyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBsb29wJyk7XHJcbiAgICAgICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDpkcml2ZXJNYXB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge3JhY2U6cmFjZURhdGEucmFjZSwgZHJpdmVyTWFwOnVuZGVmaW5lZH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZURyaXZlclJhY2VTdGF0aXN0aWNzKGxhcHM6TGFwW10pe1xyXG4gICAgbGV0IGF2Z0xhcFRpbWUgPSAwO1xyXG4gICAgbGV0IGF2Z0xhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwVGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOdW0gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdCA9IHVuZGVmaW5lZDtcclxuICAgIC8vQ2FsY3VsYXRlIG1lYW4gJiBzbG93ZXN0IGxhcCBpbiBmaXJzdCBsb29wIHBhc3NcclxuICAgIGxldCBsYXBUaW1lU3VtPTA7XHJcbiAgICBsZXQgbGFwVGltZU5ldFBpdFN1bSA9IDA7XHJcbiAgICBsZXQgbGFwU3VtID0gMDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICAvL1NldCB0aW1lIG5ldCBwaXQgc3RvcCB0byB0aW1lIGZvciBlYWNoIGxhcCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICAgICAgaWYoIWkudGltZU5ldFBpdFN0b3Ape1xyXG4gICAgICAgICAgICBpLnRpbWVOZXRQaXRTdG9wPWkudGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXg+MCAmJiBpbmRleDxsYXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxhcFRpbWVTdW0rPSBpLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFRpbWVOZXRQaXRTdW0rPWkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFN1bSsrO1xyXG4gICAgICAgICAgICBpZihpLnRpbWU+c2xvd2VzdExhcFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUgPSBpLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTnVtID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaS50aW1lTmV0UGl0U3RvcD5zbG93ZXN0TGFwTmV0UGl0VGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0ID0gaS5sYXBOdW07ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgYXZnTGFwVGltZSA9IGxhcFN1bT4wP2xhcFRpbWVTdW0vbGFwU3VtOjA7XHJcbiAgICBhdmdMYXBOZXRQaXRUaW1lID0gbGFwU3VtPjA/bGFwVGltZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIC8vQ2FsY3VsYXRlIHZhcmlhbmNlIGluIHNlY29uZCBwYXNzXHJcbiAgICBsZXQgdmFyaWFuY2VTdW09MDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFN1bT0wO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXJpYW5jZVN1bSArPSAoKGkudGltZS1hdmdMYXBUaW1lKSoqMik7XHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpKioyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOdW06c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdDpzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgc2xvd2VzdExhcFRpbWU6c2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZTpzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgYXZnTGFwVGltZTphdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lOmF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWU6dmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWU6dmFyaWFuY2VOZXRQaXRUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=