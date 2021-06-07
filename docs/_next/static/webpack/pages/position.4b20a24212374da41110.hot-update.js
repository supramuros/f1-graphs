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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsImNvbnNvbGUiLCJsb2ciLCJyYWNlIiwidW5kZWZpbmVkIiwicmVzdWx0cyIsImZvckVhY2giLCJyIiwic3RhcnRpbmdQb3NpdGlvbkxhcCIsImRyaXZlcklkIiwiZHJpdmVyIiwibGFwTnVtIiwicG9zaXRpb24iLCJzdGFydGluZ09yZGVyIiwidGltZURzcCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJnYXAiLCJwb3NpdGlvbkdhcCIsInBpdFN0b3BUaW1lIiwidGltZU5ldFBpdFN0b3AiLCJkcml2ZXJMYXBzIiwibGFwcyIsImZpbHRlciIsImwiLCJkcml2ZXJQaXRTdG9wcyIsInBpdFN0b3BzIiwicCIsInBpdCIsImR1cmF0aW9uIiwiY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MiLCJzbG93ZXN0TGFwTnVtIiwic2xvd2VzdExhcE5ldFBpdCIsInNsb3dlc3RMYXBUaW1lIiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJhdmdMYXBUaW1lIiwiYXZnTGFwTmV0UGl0VGltZSIsInZhcmlhbmNlTGFwVGltZSIsInZhcmlhbmNlTmV0UGl0VGltZSIsInJhY2VTdGF0cyIsInNsb3dlc3RMYXBOdW1iZXIiLCJjb25jYXQiLCJzZXQiLCJsYXBUaW1lU3VtIiwibGFwVGltZU5ldFBpdFN1bSIsImxhcFN1bSIsImkiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhbmNlU3VtIiwidmFyaWFuY2VOZXRQaXRTdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhF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O0FBR0lDLGtCQUFjLEVBQUNBLGNBSG5CO0FBSUlDLHdCQUFvQixFQUFDQSxvQkFKekI7QUFLSUMsY0FBVSxFQUFDQSxVQUxmO0FBTUlDLG9CQUFnQixFQUFDQSxnQkFOckI7QUFPSUMsbUJBQWUsRUFBQ0EsZUFQcEI7QUFRSUMsc0JBQWtCLEVBQUNBO0FBUnZCLEdBREo7QUFZSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3NpdGlvbi40YjIwYTI0MjEyMzc0ZGE0MTExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFwLCBSYWNlTGFwcyB9IGZyb20gXCIuLi8uLi90eXBlcy9MYXBcIjtcclxuaW1wb3J0IHsgUmFjZVBpdFN0b3BzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL1BpdFN0b3BcIjtcclxuaW1wb3J0IHsgRHJpdmVyUmFjZVJlc3VsdCwgUmFjZURyaXZlck1hcCwgUmFjZVJlc3VsdCB9IGZyb20gXCIuLi8uLi90eXBlcy9SYWNlUmVzdWx0XCI7XHJcblxyXG4vKlxyXG4qRnVuY3Rpb246IENhbGxzIGVhY2ggb2YgdGhlIDMgZmV0Y2hlcnMgbmVjZXNzYXJ5IHRvIGNvbWJpbmUgYWxsIEFQSSBjYWxscyBmb3IgYSBzaW5nbGUgcmFjZVxyXG4qQFBhcmFtOiBzZWFzb246IHllYXJcclxuKkBQYXJhbTogcm91bmQ6IHJhY2UgaW4gc2Vhc29uIDEsMiwzLGV0Yy5cclxuKkludGVudGlvbiBpcyBmb3IgdGhpcyB0byBiZSBjYWxsZWQgdmlhIHVzZVNXUiBob29rOyBBbGxvd3MgdXMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGNhY2hpbmdcclxuKnRoYXQgdGhlIGhvb2sgZG9lcyBhdXRvbWF0aWNhbGx5LlxyXG4qUmV0dXJuOiB7cmFjZTpSYWNlLCBkYXRhOk1hcDxkcml2ZXJJZCwgRHJpdmVyPn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUmFjZUNvbWJpbmVkKHJhY2VEYXRhOlJhY2VSZXN1bHQsbGFwRGF0YTpSYWNlTGFwcyxwaXREYXRhPzpSYWNlUGl0U3RvcHMsKTpSYWNlRHJpdmVyTWFweyAgICBcclxuICAgIGNvbnN0IGRyaXZlck1hcCA9IG5ldyBNYXA8c3RyaW5nLERyaXZlclJhY2VSZXN1bHQ+KCk7ICAgIFxyXG4gICAgY29uc29sZS5sb2coJypsYXBkYXRhJyk7XHJcbiAgICBjb25zb2xlLmxvZyhsYXBEYXRhKTtcclxuICAgIGlmKCFyYWNlRGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHtyYWNlOnVuZGVmaW5lZCwgZHJpdmVyTWFwOnVuZGVmaW5lZH07XHJcbiAgICB9XHJcbiAgICBpZihsYXBEYXRhKXtcclxuICAgICAgICByYWNlRGF0YS5yZXN1bHRzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAvL2J5IGNvbnZlbnRpb24gd2Ugd2lsbCBldmVudHVhbGx5IHNldCBsYXBbMF0gdG8gdGhlIGJlbG93XHJcbiAgICAgICAgICAgIC8vYWxsb3dzIHVzIHRvIGhhdmUgcXVhbGlmeWluZy9zdGFydGluZyByb3cgaW5mb3JtYXRpb24gaW4gbGFwcyBlYXNpbHlcclxuICAgICAgICAgICAgLy9tYWtlcyBxdWVyeWluZyBhIGxhcCBlYXN5IHRvbyBzaW5jZSB3ZSBjYW4ganVzdCBkbyBsYXBzW2xhcE51bV1cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbkxhcDpMYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBkcml2ZXJJZDogci5kcml2ZXIuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICBsYXBOdW06MCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByLnN0YXJ0aW5nT3JkZXIsXHJcbiAgICAgICAgICAgICAgICB0aW1lRHNwOiAnMDowMCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxUaW1lOjAsXHJcbiAgICAgICAgICAgICAgICBnYXA6MCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uR2FwOjAsXHJcbiAgICAgICAgICAgICAgICBwaXRTdG9wVGltZTp1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lTmV0UGl0U3RvcDp1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpdmVyTGFwcyA9IGxhcERhdGEubGFwcy5maWx0ZXIobD0+bC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgLy9QaXRzdG9wIGRhdGEgaXMgYWRkZWQgdG8gdGhlIG1haW4gZGF0YVxyXG4gICAgICAgICAgICBpZihwaXREYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlclBpdFN0b3BzID0gcGl0RGF0YS5waXRTdG9wcy5maWx0ZXIocD0+cC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgIC8vVXBkYXRlIGRyaXZlckxhcHMgd2l0aCBwaXRzdG9wIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIC8vZHJpdmVyTGFwcyBhcmUgc29ydGVkIGJ5IGxhcG51bWJlciBpbiB0aGF0IGZldGNoZXIgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgICAgZHJpdmVyUGl0U3RvcHMuZm9yRWFjaChwaXQ9PntcclxuICAgICAgICAgICAgICAgIC8vUGl0c3RvcCBsYXAgaXMgd2hlbiB0aGUgY2FyIGVudGVycyB0aGUgcGl0cyBidXQgdGhlIHRpbWUgaXMgYWRkZWQgdG8gdGhlIG5leHQgbGFwXHJcbiAgICAgICAgICAgICAgICAvL2hlbmNlIHBpdC5sYXBOdW0gaXMgbGFwLmxhcE51bS0xOyBhcnJheSBpbmRleCBpcyAwIHNvIHdlIGNhbiBqdXN0IGRvIHBpdC5sYXBOdW1cclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0ucGl0U3RvcFRpbWUgPSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWVOZXRQaXRTdG9wID0gZHJpdmVyTGFwc1twaXQubGFwTnVtXS50aW1lIC0gcGl0LmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlIGNhY2wgc3RhdHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZHJpdmVyTGFwcyk7XHJcbiAgICAgICAgICAgIC8vY2FjbHVsYXRlIHJhY2Ugc3RhdGlzdGljc1xyXG4gICAgICAgICAgICBjb25zdCB7c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXQsIFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICAgICAgYXZnTGFwTmV0UGl0VGltZSwgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWV9ID0gY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MoZHJpdmVyTGFwcyk7XHJcbiAgICAgICAgICAgIC8vdXBkYXRlIERyaXZlciBvYmplY3Qgc3RhdGlzdGljc1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTnVtYmVyPXNsb3dlc3RMYXBOdW07XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXQ9c2xvd2VzdExhcE5ldFBpdDtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcFRpbWU9c2xvd2VzdExhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXRUaW1lPXNsb3dlc3RMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5hdmdMYXBUaW1lPWF2Z0xhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWU9YXZnTGFwTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMudmFyaWFuY2VMYXBUaW1lPXZhcmlhbmNlTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lPXZhcmlhbmNlTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCB3aXRoIGxhcHNcclxuICAgICAgICAgICAgci5sYXBzID0gW3N0YXJ0aW5nUG9zaXRpb25MYXBdLmNvbmNhdChkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy9hZGQgdG8gTWFwXHJcbiAgICAgICAgICAgIGRyaXZlck1hcC5zZXQoci5kcml2ZXIuZHJpdmVySWQscik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIG1hcCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyLmRyaXZlci5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGxvb3AnKTtcclxuICAgICAgICByZXR1cm4ge3JhY2U6cmFjZURhdGEucmFjZSwgZHJpdmVyTWFwOmRyaXZlck1hcH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7cmFjZTpyYWNlRGF0YS5yYWNlLCBkcml2ZXJNYXA6dW5kZWZpbmVkfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MobGFwczpMYXBbXSl7XHJcbiAgICBjb25zb2xlLmxvZygnaW4gY2FsY3N0YXRzJyk7XHJcbiAgICBjb25zb2xlLmxvZyhsYXBzKTtcclxuICAgIGxldCBhdmdMYXBUaW1lID0gMDtcclxuICAgIGxldCBhdmdMYXBOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCB2YXJpYW5jZUxhcFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTmV0UGl0VGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwTnVtID0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOZXRQaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAvL0NhbGN1bGF0ZSBtZWFuICYgc2xvd2VzdCBsYXAgaW4gZmlyc3QgbG9vcCBwYXNzXHJcbiAgICBsZXQgbGFwVGltZVN1bT0wO1xyXG4gICAgbGV0IGxhcFRpbWVOZXRQaXRTdW0gPSAwO1xyXG4gICAgbGV0IGxhcFN1bSA9IDA7XHJcbiAgICBsYXBzLmZvckVhY2goKGksaW5kZXgpPT57XHJcbiAgICAgICAgLy9TZXQgdGltZSBuZXQgcGl0IHN0b3AgdG8gdGltZSBmb3IgZWFjaCBsYXAgaWYgbm90IGFscmVhZHkgZGVmaW5lZFxyXG4gICAgICAgIGlmKCFpLnRpbWVOZXRQaXRTdG9wKXtcclxuICAgICAgICAgICAgaS50aW1lTmV0UGl0U3RvcD1pLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBsYXBUaW1lU3VtKz0gaS50aW1lO1xyXG4gICAgICAgICAgICBsYXBUaW1lTmV0UGl0U3VtKz1pLnRpbWVOZXRQaXRTdG9wP2kudGltZU5ldFBpdFN0b3A6aS50aW1lO1xyXG4gICAgICAgICAgICBsYXBTdW0rKztcclxuICAgICAgICAgICAgaWYoaS50aW1lPnNsb3dlc3RMYXBUaW1lKXtcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBUaW1lID0gaS50aW1lO1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE51bSA9IGkubGFwTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGkudGltZU5ldFBpdFN0b3A+c2xvd2VzdExhcE5ldFBpdFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSBpLnRpbWVOZXRQaXRTdG9wP2kudGltZU5ldFBpdFN0b3A6aS50aW1lO1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdCA9IGkubGFwTnVtOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9leHBsaWNpdGx5IHNldCB0byAwIGlmIG51bWJlciBvZiBsYXBzIGlzIDAgYW5kIGFsc28gYXZvaWQgZGl2IGJ5IDBcclxuICAgIGF2Z0xhcFRpbWUgPSBsYXBTdW0+MD9sYXBUaW1lU3VtL2xhcFN1bTowO1xyXG4gICAgYXZnTGFwTmV0UGl0VGltZSA9IGxhcFN1bT4wP2xhcFRpbWVOZXRQaXRTdW0vbGFwU3VtOjA7XHJcbiAgICAvL0NhbGN1bGF0ZSB2YXJpYW5jZSBpbiBzZWNvbmQgcGFzc1xyXG4gICAgbGV0IHZhcmlhbmNlU3VtPTA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRTdW09MDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICBpZihpbmRleD4wICYmIGluZGV4PGxhcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgdmFyaWFuY2VTdW0gKz0gKChpLnRpbWUtYXZnTGFwVGltZSkqKjIpO1xyXG4gICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFN1bSArPSAoKChpLnRpbWVOZXRQaXRTdG9wP2kudGltZU5ldFBpdFN0b3A6aS50aW1lKS1hdmdMYXBOZXRQaXRUaW1lKSoqMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgdmFyaWFuY2VMYXBUaW1lID0gbGFwU3VtPjA/dmFyaWFuY2VTdW0vbGFwU3VtOjA7XHJcbiAgICB2YXJpYW5jZU5ldFBpdFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIGNvbnNvbGUubG9nKGxhcHNbMF0uZHJpdmVySWQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOdW06c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdDpzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgc2xvd2VzdExhcFRpbWU6c2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZTpzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgYXZnTGFwVGltZTphdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lOmF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWU6dmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWU6dmFyaWFuY2VOZXRQaXRUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=