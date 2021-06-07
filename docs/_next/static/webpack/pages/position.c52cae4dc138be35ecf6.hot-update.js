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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsImNvbnNvbGUiLCJsb2ciLCJyYWNlIiwidW5kZWZpbmVkIiwicmVzdWx0cyIsImZvckVhY2giLCJyIiwic3RhcnRpbmdQb3NpdGlvbkxhcCIsImRyaXZlcklkIiwiZHJpdmVyIiwibGFwTnVtIiwicG9zaXRpb24iLCJzdGFydGluZ09yZGVyIiwidGltZURzcCIsInRpbWUiLCJ0b3RhbFRpbWUiLCJnYXAiLCJwb3NpdGlvbkdhcCIsInBpdFN0b3BUaW1lIiwidGltZU5ldFBpdFN0b3AiLCJkcml2ZXJMYXBzIiwibGFwcyIsImZpbHRlciIsImwiLCJkcml2ZXJQaXRTdG9wcyIsInBpdFN0b3BzIiwicCIsInBpdCIsImR1cmF0aW9uIiwiY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MiLCJzbG93ZXN0TGFwTnVtIiwic2xvd2VzdExhcE5ldFBpdCIsInNsb3dlc3RMYXBUaW1lIiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJhdmdMYXBUaW1lIiwiYXZnTGFwTmV0UGl0VGltZSIsInZhcmlhbmNlTGFwVGltZSIsInZhcmlhbmNlTmV0UGl0VGltZSIsInJhY2VTdGF0cyIsInNsb3dlc3RMYXBOdW1iZXIiLCJjb25jYXQiLCJzZXQiLCJsYXBUaW1lU3VtIiwibGFwVGltZU5ldFBpdFN1bSIsImxhcFN1bSIsImkiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhbmNlU3VtIiwidmFyaWFuY2VOZXRQaXRTdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhF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QUFZSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3NpdGlvbi5jNTJjYWU0ZGMxMzhiZTM1ZWNmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFwLCBSYWNlTGFwcyB9IGZyb20gXCIuLi8uLi90eXBlcy9MYXBcIjtcclxuaW1wb3J0IHsgUmFjZVBpdFN0b3BzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL1BpdFN0b3BcIjtcclxuaW1wb3J0IHsgRHJpdmVyUmFjZVJlc3VsdCwgUmFjZURyaXZlck1hcCwgUmFjZVJlc3VsdCB9IGZyb20gXCIuLi8uLi90eXBlcy9SYWNlUmVzdWx0XCI7XHJcblxyXG4vKlxyXG4qRnVuY3Rpb246IENhbGxzIGVhY2ggb2YgdGhlIDMgZmV0Y2hlcnMgbmVjZXNzYXJ5IHRvIGNvbWJpbmUgYWxsIEFQSSBjYWxscyBmb3IgYSBzaW5nbGUgcmFjZVxyXG4qQFBhcmFtOiBzZWFzb246IHllYXJcclxuKkBQYXJhbTogcm91bmQ6IHJhY2UgaW4gc2Vhc29uIDEsMiwzLGV0Yy5cclxuKkludGVudGlvbiBpcyBmb3IgdGhpcyB0byBiZSBjYWxsZWQgdmlhIHVzZVNXUiBob29rOyBBbGxvd3MgdXMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGNhY2hpbmdcclxuKnRoYXQgdGhlIGhvb2sgZG9lcyBhdXRvbWF0aWNhbGx5LlxyXG4qUmV0dXJuOiB7cmFjZTpSYWNlLCBkYXRhOk1hcDxkcml2ZXJJZCwgRHJpdmVyPn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUmFjZUNvbWJpbmVkKHJhY2VEYXRhOlJhY2VSZXN1bHQsbGFwRGF0YTpSYWNlTGFwcyxwaXREYXRhPzpSYWNlUGl0U3RvcHMsKTpSYWNlRHJpdmVyTWFweyAgICBcclxuICAgIGNvbnN0IGRyaXZlck1hcCA9IG5ldyBNYXA8c3RyaW5nLERyaXZlclJhY2VSZXN1bHQ+KCk7ICAgIFxyXG4gICAgY29uc29sZS5sb2cocmFjZURhdGEpO1xyXG4gICAgY29uc29sZS5sb2cobGFwRGF0YSk7XHJcbiAgICBpZighcmFjZURhdGEpe1xyXG4gICAgICAgIHJldHVybiB7cmFjZTp1bmRlZmluZWQsIGRyaXZlck1hcDp1bmRlZmluZWR9O1xyXG4gICAgfVxyXG4gICAgaWYobGFwRGF0YSl7XHJcbiAgICAgICAgcmFjZURhdGEucmVzdWx0cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgLy9ieSBjb252ZW50aW9uIHdlIHdpbGwgZXZlbnR1YWxseSBzZXQgbGFwWzBdIHRvIHRoZSBiZWxvd1xyXG4gICAgICAgICAgICAvL2FsbG93cyB1cyB0byBoYXZlIHF1YWxpZnlpbmcvc3RhcnRpbmcgcm93IGluZm9ybWF0aW9uIGluIGxhcHMgZWFzaWx5XHJcbiAgICAgICAgICAgIC8vbWFrZXMgcXVlcnlpbmcgYSBsYXAgZWFzeSB0b28gc2luY2Ugd2UgY2FuIGp1c3QgZG8gbGFwc1tsYXBOdW1dXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25MYXA6TGFwID0ge1xyXG4gICAgICAgICAgICAgICAgZHJpdmVySWQ6IHIuZHJpdmVyLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgbGFwTnVtOjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogci5zdGFydGluZ09yZGVyLFxyXG4gICAgICAgICAgICAgICAgdGltZURzcDogJzA6MDAnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsVGltZTowLFxyXG4gICAgICAgICAgICAgICAgZ2FwOjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkdhcDowLFxyXG4gICAgICAgICAgICAgICAgcGl0U3RvcFRpbWU6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGltZU5ldFBpdFN0b3A6dW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlckxhcHMgPSBsYXBEYXRhLmxhcHMuZmlsdGVyKGw9PmwuZHJpdmVySWQ9PT1yLmRyaXZlci5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgIC8vUGl0c3RvcCBkYXRhIGlzIGFkZGVkIHRvIHRoZSBtYWluIGRhdGFcclxuICAgICAgICAgICAgaWYocGl0RGF0YSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJQaXRTdG9wcyA9IHBpdERhdGEucGl0U3RvcHMuZmlsdGVyKHA9PnAuZHJpdmVySWQ9PT1yLmRyaXZlci5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAvL1VwZGF0ZSBkcml2ZXJMYXBzIHdpdGggcGl0c3RvcCBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAvL2RyaXZlckxhcHMgYXJlIHNvcnRlZCBieSBsYXBudW1iZXIgaW4gdGhhdCBmZXRjaGVyIHByb2Nlc3NcclxuICAgICAgICAgICAgICAgIGRyaXZlclBpdFN0b3BzLmZvckVhY2gocGl0PT57XHJcbiAgICAgICAgICAgICAgICAvL1BpdHN0b3AgbGFwIGlzIHdoZW4gdGhlIGNhciBlbnRlcnMgdGhlIHBpdHMgYnV0IHRoZSB0aW1lIGlzIGFkZGVkIHRvIHRoZSBuZXh0IGxhcFxyXG4gICAgICAgICAgICAgICAgLy9oZW5jZSBwaXQubGFwTnVtIGlzIGxhcC5sYXBOdW0tMTsgYXJyYXkgaW5kZXggaXMgMCBzbyB3ZSBjYW4ganVzdCBkbyBwaXQubGFwTnVtXHJcbiAgICAgICAgICAgICAgICBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnBpdFN0b3BUaW1lID0gcGl0LmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgZHJpdmVyTGFwc1twaXQubGFwTnVtXS50aW1lTmV0UGl0U3RvcCA9IGRyaXZlckxhcHNbcGl0LmxhcE51bV0udGltZSAtIHBpdC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBjYWNsIHN0YXRzJyk7XHJcbiAgICAgICAgICAgIC8vY2FjbHVsYXRlIHJhY2Ugc3RhdGlzdGljc1xyXG4gICAgICAgICAgICBjb25zdCB7c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXQsIFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICAgICAgYXZnTGFwTmV0UGl0VGltZSwgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWV9ID0gY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MoZHJpdmVyTGFwcyk7XHJcbiAgICAgICAgICAgIC8vdXBkYXRlIERyaXZlciBvYmplY3Qgc3RhdGlzdGljc1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTnVtYmVyPXNsb3dlc3RMYXBOdW07XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXQ9c2xvd2VzdExhcE5ldFBpdDtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcFRpbWU9c2xvd2VzdExhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXRUaW1lPXNsb3dlc3RMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5hdmdMYXBUaW1lPWF2Z0xhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWU9YXZnTGFwTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMudmFyaWFuY2VMYXBUaW1lPXZhcmlhbmNlTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lPXZhcmlhbmNlTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCB3aXRoIGxhcHNcclxuICAgICAgICAgICAgci5sYXBzID0gW3N0YXJ0aW5nUG9zaXRpb25MYXBdLmNvbmNhdChkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy9hZGQgdG8gTWFwXHJcbiAgICAgICAgICAgIGRyaXZlck1hcC5zZXQoci5kcml2ZXIuZHJpdmVySWQscik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgIHJldHVybiB7cmFjZTpyYWNlRGF0YS5yYWNlLCBkcml2ZXJNYXA6ZHJpdmVyTWFwfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDp1bmRlZmluZWR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhsYXBzOkxhcFtdKXtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBjYWxjc3RhdHMnKTtcclxuICAgIGNvbnNvbGUubG9nKGxhcHMpO1xyXG4gICAgbGV0IGF2Z0xhcFRpbWUgPSAwO1xyXG4gICAgbGV0IGF2Z0xhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwVGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOdW0gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdCA9IHVuZGVmaW5lZDtcclxuICAgIC8vQ2FsY3VsYXRlIG1lYW4gJiBzbG93ZXN0IGxhcCBpbiBmaXJzdCBsb29wIHBhc3NcclxuICAgIGxldCBsYXBUaW1lU3VtPTA7XHJcbiAgICBsZXQgbGFwVGltZU5ldFBpdFN1bSA9IDA7XHJcbiAgICBsZXQgbGFwU3VtID0gMDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICAvL1NldCB0aW1lIG5ldCBwaXQgc3RvcCB0byB0aW1lIGZvciBlYWNoIGxhcCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICAgICAgaWYoIWkudGltZU5ldFBpdFN0b3Ape1xyXG4gICAgICAgICAgICBpLnRpbWVOZXRQaXRTdG9wPWkudGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXg+MCAmJiBpbmRleDxsYXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxhcFRpbWVTdW0rPSBpLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFRpbWVOZXRQaXRTdW0rPWkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFN1bSsrO1xyXG4gICAgICAgICAgICBpZihpLnRpbWU+c2xvd2VzdExhcFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUgPSBpLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTnVtID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaS50aW1lTmV0UGl0U3RvcD5zbG93ZXN0TGFwTmV0UGl0VGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0ID0gaS5sYXBOdW07ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgYXZnTGFwVGltZSA9IGxhcFN1bT4wP2xhcFRpbWVTdW0vbGFwU3VtOjA7XHJcbiAgICBhdmdMYXBOZXRQaXRUaW1lID0gbGFwU3VtPjA/bGFwVGltZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIC8vQ2FsY3VsYXRlIHZhcmlhbmNlIGluIHNlY29uZCBwYXNzXHJcbiAgICBsZXQgdmFyaWFuY2VTdW09MDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFN1bT0wO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXJpYW5jZVN1bSArPSAoKGkudGltZS1hdmdMYXBUaW1lKSoqMik7XHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpKioyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgY29uc29sZS5sb2cobGFwc1swXS5kcml2ZXJJZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2xvd2VzdExhcE51bTpzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0OnNsb3dlc3RMYXBOZXRQaXQsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwVGltZTpzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXRUaW1lOnNsb3dlc3RMYXBOZXRQaXRUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBUaW1lOmF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgIGF2Z0xhcE5ldFBpdFRpbWU6YXZnTGFwTmV0UGl0VGltZSwgXHJcbiAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZTp2YXJpYW5jZUxhcFRpbWUsXHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZTp2YXJpYW5jZU5ldFBpdFRpbWVcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==