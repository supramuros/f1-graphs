webpackHotUpdate_N_E("pages/relative-position",{

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
      } //caclulate race statistics


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
    if (index > 0 && index < laps.length) varianceSum += i.time - avgLapTime ^ 2;
    varianceNetPitSum += (i.timeNetPitStop ? i.timeNetPitStop : i.time) - avgLapNetPitTime ^ 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsInJhY2UiLCJ1bmRlZmluZWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInIiLCJzdGFydGluZ1Bvc2l0aW9uTGFwIiwiZHJpdmVySWQiLCJkcml2ZXIiLCJsYXBOdW0iLCJwb3NpdGlvbiIsInN0YXJ0aW5nT3JkZXIiLCJ0aW1lRHNwIiwidGltZSIsInRvdGFsVGltZSIsImdhcCIsInBvc2l0aW9uR2FwIiwicGl0U3RvcFRpbWUiLCJ0aW1lTmV0UGl0U3RvcCIsImRyaXZlckxhcHMiLCJsYXBzIiwiZmlsdGVyIiwibCIsImRyaXZlclBpdFN0b3BzIiwicGl0U3RvcHMiLCJwIiwicGl0IiwiZHVyYXRpb24iLCJjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyIsInNsb3dlc3RMYXBOdW0iLCJzbG93ZXN0TGFwTmV0UGl0Iiwic2xvd2VzdExhcFRpbWUiLCJzbG93ZXN0TGFwTmV0UGl0VGltZSIsImF2Z0xhcFRpbWUiLCJhdmdMYXBOZXRQaXRUaW1lIiwidmFyaWFuY2VMYXBUaW1lIiwidmFyaWFuY2VOZXRQaXRUaW1lIiwicmFjZVN0YXRzIiwic2xvd2VzdExhcE51bWJlciIsImNvbmNhdCIsInNldCIsImxhcFRpbWVTdW0iLCJsYXBUaW1lTmV0UGl0U3VtIiwibGFwU3VtIiwiaSIsImluZGV4IiwibGVuZ3RoIiwidmFyaWFuY2VTdW0iLCJ2YXJpYW5jZU5ldFBpdFN1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQStDQyxPQUEvQyxFQUFnRUMsT0FBaEUsRUFBcUc7QUFDaEgsTUFB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Q0FlLHFCQUFpQixJQUFNLENBQUNKLENBQUMsQ0FBQzFCLGNBQUYsR0FBaUIwQixDQUFDLENBQUMxQixjQUFuQixHQUFrQzBCLENBQUMsQ0FBQy9CLElBQXJDLElBQTJDcUIsZ0JBQTVDLEdBQThELENBQXBGO0FBQ0gsR0FKRCxFQWxDOEMsQ0F1QzlDOztBQUNBQyxpQkFBZSxHQUFHUSxNQUFNLEdBQUMsQ0FBUCxHQUFTSSxXQUFXLEdBQUNKLE1BQXJCLEdBQTRCLENBQTlDO0FBQ0FQLG9CQUFrQixHQUFHTyxNQUFNLEdBQUMsQ0FBUCxHQUFTSyxpQkFBaUIsR0FBQ0wsTUFBM0IsR0FBa0MsQ0FBdkQ7QUFDQSxTQUNJO0FBQ0lkLGlCQUFhLEVBQUNBLGFBRGxCO0FBRUlDLG9CQUFnQixFQUFDQSxnQkFGckI7QUFHSUMsa0JBQWMsRUFBQ0EsY0FIbkI7QUFJSUMsd0JBQW9CLEVBQUNBLG9CQUp6QjtBQUtJQyxjQUFVLEVBQUNBLFVBTGY7QUFNSUMsb0JBQWdCLEVBQUNBLGdCQU5yQjtBQU9JQyxtQkFBZSxFQUFDQSxlQVBwQjtBQVFJQyxzQkFBa0IsRUFBQ0E7QUFSdkIsR0FESjtBQVlIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbGF0aXZlLXBvc2l0aW9uLjRhYWQ2NzFkZjgyNGI2OWMxZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXAsIFJhY2VMYXBzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL0xhcFwiO1xyXG5pbXBvcnQgeyBSYWNlUGl0U3RvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvUGl0U3RvcFwiO1xyXG5pbXBvcnQgeyBEcml2ZXJSYWNlUmVzdWx0LCBSYWNlRHJpdmVyTWFwLCBSYWNlUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3R5cGVzL1JhY2VSZXN1bHRcIjtcclxuXHJcbi8qXHJcbipGdW5jdGlvbjogQ2FsbHMgZWFjaCBvZiB0aGUgMyBmZXRjaGVycyBuZWNlc3NhcnkgdG8gY29tYmluZSBhbGwgQVBJIGNhbGxzIGZvciBhIHNpbmdsZSByYWNlXHJcbipAUGFyYW06IHNlYXNvbjogeWVhclxyXG4qQFBhcmFtOiByb3VuZDogcmFjZSBpbiBzZWFzb24gMSwyLDMsZXRjLlxyXG4qSW50ZW50aW9uIGlzIGZvciB0aGlzIHRvIGJlIGNhbGxlZCB2aWEgdXNlU1dSIGhvb2s7IEFsbG93cyB1cyB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgY2FjaGluZ1xyXG4qdGhhdCB0aGUgaG9vayBkb2VzIGF1dG9tYXRpY2FsbHkuXHJcbipSZXR1cm46IHtyYWNlOlJhY2UsIGRhdGE6TWFwPGRyaXZlcklkLCBEcml2ZXI+fVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hSYWNlQ29tYmluZWQocmFjZURhdGE6UmFjZVJlc3VsdCxsYXBEYXRhOlJhY2VMYXBzLHBpdERhdGE/OlJhY2VQaXRTdG9wcywpOlJhY2VEcml2ZXJNYXB7ICAgIFxyXG4gICAgY29uc3QgZHJpdmVyTWFwID0gbmV3IE1hcDxzdHJpbmcsRHJpdmVyUmFjZVJlc3VsdD4oKTsgICAgXHJcbiAgICBpZighcmFjZURhdGEpe1xyXG4gICAgICAgIHJldHVybiB7cmFjZTp1bmRlZmluZWQsIGRyaXZlck1hcDp1bmRlZmluZWR9O1xyXG4gICAgfVxyXG4gICAgaWYobGFwRGF0YSl7XHJcbiAgICAgICAgcmFjZURhdGEucmVzdWx0cy5mb3JFYWNoKHI9PntcclxuICAgICAgICAgICAgLy9ieSBjb252ZW50aW9uIHdlIHdpbGwgZXZlbnR1YWxseSBzZXQgbGFwWzBdIHRvIHRoZSBiZWxvd1xyXG4gICAgICAgICAgICAvL2FsbG93cyB1cyB0byBoYXZlIHF1YWxpZnlpbmcvc3RhcnRpbmcgcm93IGluZm9ybWF0aW9uIGluIGxhcHMgZWFzaWx5XHJcbiAgICAgICAgICAgIC8vbWFrZXMgcXVlcnlpbmcgYSBsYXAgZWFzeSB0b28gc2luY2Ugd2UgY2FuIGp1c3QgZG8gbGFwc1tsYXBOdW1dXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25MYXA6TGFwID0ge1xyXG4gICAgICAgICAgICAgICAgZHJpdmVySWQ6IHIuZHJpdmVyLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgbGFwTnVtOjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogci5zdGFydGluZ09yZGVyLFxyXG4gICAgICAgICAgICAgICAgdGltZURzcDogJzA6MDAnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsVGltZTowLFxyXG4gICAgICAgICAgICAgICAgZ2FwOjAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkdhcDowLFxyXG4gICAgICAgICAgICAgICAgcGl0U3RvcFRpbWU6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGltZU5ldFBpdFN0b3A6dW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlckxhcHMgPSBsYXBEYXRhLmxhcHMuZmlsdGVyKGw9PmwuZHJpdmVySWQ9PT1yLmRyaXZlci5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgIC8vUGl0c3RvcCBkYXRhIGlzIGFkZGVkIHRvIHRoZSBtYWluIGRhdGFcclxuICAgICAgICAgICAgaWYocGl0RGF0YSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJQaXRTdG9wcyA9IHBpdERhdGEucGl0U3RvcHMuZmlsdGVyKHA9PnAuZHJpdmVySWQ9PT1yLmRyaXZlci5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAvL1VwZGF0ZSBkcml2ZXJMYXBzIHdpdGggcGl0c3RvcCBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAvL2RyaXZlckxhcHMgYXJlIHNvcnRlZCBieSBsYXBudW1iZXIgaW4gdGhhdCBmZXRjaGVyIHByb2Nlc3NcclxuICAgICAgICAgICAgICAgIGRyaXZlclBpdFN0b3BzLmZvckVhY2gocGl0PT57XHJcbiAgICAgICAgICAgICAgICAvL1BpdHN0b3AgbGFwIGlzIHdoZW4gdGhlIGNhciBlbnRlcnMgdGhlIHBpdHMgYnV0IHRoZSB0aW1lIGlzIGFkZGVkIHRvIHRoZSBuZXh0IGxhcFxyXG4gICAgICAgICAgICAgICAgLy9oZW5jZSBwaXQubGFwTnVtIGlzIGxhcC5sYXBOdW0tMTsgYXJyYXkgaW5kZXggaXMgMCBzbyB3ZSBjYW4ganVzdCBkbyBwaXQubGFwTnVtXHJcbiAgICAgICAgICAgICAgICBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnBpdFN0b3BUaW1lID0gcGl0LmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgZHJpdmVyTGFwc1twaXQubGFwTnVtXS50aW1lTmV0UGl0U3RvcCA9IGRyaXZlckxhcHNbcGl0LmxhcE51bV0udGltZSAtIHBpdC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY2FjbHVsYXRlIHJhY2Ugc3RhdGlzdGljc1xyXG4gICAgICAgICAgICBjb25zdCB7c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXQsIFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICAgICAgYXZnTGFwTmV0UGl0VGltZSwgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWV9ID0gY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MoZHJpdmVyTGFwcyk7XHJcbiAgICAgICAgICAgIC8vdXBkYXRlIERyaXZlciBvYmplY3Qgc3RhdGlzdGljc1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTnVtYmVyPXNsb3dlc3RMYXBOdW07XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXQ9c2xvd2VzdExhcE5ldFBpdDtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcFRpbWU9c2xvd2VzdExhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXRUaW1lPXNsb3dlc3RMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5hdmdMYXBUaW1lPWF2Z0xhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWU9YXZnTGFwTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMudmFyaWFuY2VMYXBUaW1lPXZhcmlhbmNlTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lPXZhcmlhbmNlTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCB3aXRoIGxhcHNcclxuICAgICAgICAgICAgci5sYXBzID0gW3N0YXJ0aW5nUG9zaXRpb25MYXBdLmNvbmNhdChkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy9hZGQgdG8gTWFwXHJcbiAgICAgICAgICAgIGRyaXZlck1hcC5zZXQoci5kcml2ZXIuZHJpdmVySWQscik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge3JhY2U6cmFjZURhdGEucmFjZSwgZHJpdmVyTWFwOmRyaXZlck1hcH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7cmFjZTpyYWNlRGF0YS5yYWNlLCBkcml2ZXJNYXA6dW5kZWZpbmVkfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlRHJpdmVyUmFjZVN0YXRpc3RpY3MobGFwczpMYXBbXSl7XHJcbiAgICBsZXQgYXZnTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgYXZnTGFwTmV0UGl0VGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VMYXBUaW1lID0gMDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE51bSA9IHVuZGVmaW5lZDtcclxuICAgIGxldCBzbG93ZXN0TGFwTmV0UGl0ID0gdW5kZWZpbmVkO1xyXG4gICAgLy9DYWxjdWxhdGUgbWVhbiAmIHNsb3dlc3QgbGFwIGluIGZpcnN0IGxvb3AgcGFzc1xyXG4gICAgbGV0IGxhcFRpbWVTdW09MDtcclxuICAgIGxldCBsYXBUaW1lTmV0UGl0U3VtID0gMDtcclxuICAgIGxldCBsYXBTdW0gPSAwO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBsYXBUaW1lU3VtKz0gaS50aW1lO1xyXG4gICAgICAgICAgICBsYXBUaW1lTmV0UGl0U3VtKz1pLnRpbWVOZXRQaXRTdG9wP2kudGltZU5ldFBpdFN0b3A6aS50aW1lO1xyXG4gICAgICAgICAgICBsYXBTdW0rKztcclxuICAgICAgICAgICAgaWYoaS50aW1lPnNsb3dlc3RMYXBUaW1lKXtcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBUaW1lID0gaS50aW1lO1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE51bSA9IGkubGFwTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGkudGltZU5ldFBpdFN0b3A+c2xvd2VzdExhcE5ldFBpdFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSBpLnRpbWVOZXRQaXRTdG9wP2kudGltZU5ldFBpdFN0b3A6aS50aW1lO1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdCA9IGkubGFwTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgYXZnTGFwVGltZSA9IGxhcFN1bT4wP2xhcFRpbWVTdW0vbGFwU3VtOjA7XHJcbiAgICBhdmdMYXBOZXRQaXRUaW1lID0gbGFwU3VtPjA/bGFwVGltZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIC8vQ2FsY3VsYXRlIHZhcmlhbmNlIGluIHNlY29uZCBwYXNzXHJcbiAgICBsZXQgdmFyaWFuY2VTdW09MDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFN1bT0wO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpXHJcbiAgICAgICAgdmFyaWFuY2VTdW0gKz0gKChpLnRpbWUtYXZnTGFwVGltZSleMik7XHJcbiAgICAgICAgdmFyaWFuY2VOZXRQaXRTdW0gKz0gKCgoaS50aW1lTmV0UGl0U3RvcD9pLnRpbWVOZXRQaXRTdG9wOmkudGltZSktYXZnTGFwTmV0UGl0VGltZSleMik7XHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOdW06c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdDpzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgc2xvd2VzdExhcFRpbWU6c2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZTpzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgYXZnTGFwVGltZTphdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lOmF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWU6dmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWU6dmFyaWFuY2VOZXRQaXRUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=