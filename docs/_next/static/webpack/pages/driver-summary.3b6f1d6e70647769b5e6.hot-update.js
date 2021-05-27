webpackHotUpdate_N_E("pages/driver-summary",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsInJhY2UiLCJ1bmRlZmluZWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInIiLCJzdGFydGluZ1Bvc2l0aW9uTGFwIiwiZHJpdmVySWQiLCJkcml2ZXIiLCJsYXBOdW0iLCJwb3NpdGlvbiIsInN0YXJ0aW5nT3JkZXIiLCJ0aW1lRHNwIiwidGltZSIsInRvdGFsVGltZSIsImdhcCIsInBvc2l0aW9uR2FwIiwicGl0U3RvcFRpbWUiLCJ0aW1lTmV0UGl0U3RvcCIsImRyaXZlckxhcHMiLCJsYXBzIiwiZmlsdGVyIiwibCIsImRyaXZlclBpdFN0b3BzIiwicGl0U3RvcHMiLCJwIiwicGl0IiwiZHVyYXRpb24iLCJjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyIsInNsb3dlc3RMYXBOdW0iLCJzbG93ZXN0TGFwTmV0UGl0Iiwic2xvd2VzdExhcFRpbWUiLCJzbG93ZXN0TGFwTmV0UGl0VGltZSIsImF2Z0xhcFRpbWUiLCJhdmdMYXBOZXRQaXRUaW1lIiwidmFyaWFuY2VMYXBUaW1lIiwidmFyaWFuY2VOZXRQaXRUaW1lIiwicmFjZVN0YXRzIiwic2xvd2VzdExhcE51bWJlciIsImNvbmNhdCIsInNldCIsImxhcFRpbWVTdW0iLCJsYXBUaW1lTmV0UGl0U3VtIiwibGFwU3VtIiwiaSIsImluZGV4IiwibGVuZ3RoIiwidmFyaWFuY2VTdW0iLCJ2YXJpYW5jZU5ldFBpdFN1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQStDQyxPQUEvQyxFQUFnRUMsT0FBaEUsRUFBcUc7QUFDaEgsTUFB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QyxDQUFOLElBQVdBLEtBQUssR0FBQ3pCLElBQUksQ0FBQzBCLE1BQXpCLEVBQWdDO0FBQzVCQyxpQkFBVyxhQUFNSCxDQUFDLENBQUMvQixJQUFGLEdBQU9vQixVQUFiLEVBQTBCLENBQTFCLENBQVg7QUFDQWUsdUJBQWlCLGFBQU0sQ0FBQ0osQ0FBQyxDQUFDMUIsY0FBRixHQUFpQjBCLENBQUMsQ0FBQzFCLGNBQW5CLEdBQWtDMEIsQ0FBQyxDQUFDL0IsSUFBckMsSUFBMkNxQixnQkFBakQsRUFBb0UsQ0FBcEUsQ0FBakI7QUFDSDtBQUVKLEdBTkQsRUF0QzhDLENBNkM5Qzs7QUFDQUMsaUJBQWUsR0FBR1EsTUFBTSxHQUFDLENBQVAsR0FBU0ksV0FBVyxHQUFDSixNQUFyQixHQUE0QixDQUE5QztBQUNBUCxvQkFBa0IsR0FBR08sTUFBTSxHQUFDLENBQVAsR0FBU0ssaUJBQWlCLEdBQUNMLE1BQTNCLEdBQWtDLENBQXZEO0FBQ0EsU0FDSTtBQUNJZCxpQkFBYSxFQUFDQSxhQURsQjtBQUVJQyxvQkFBZ0IsRUFBQ0EsZ0JBRnJCO0FBR0lDLGtCQUFjLEVBQUNBLGNBSG5CO0FBSUlDLHdCQUFvQixFQUFDQSxvQkFKekI7QUFLSUMsY0FBVSxFQUFDQSxVQUxmO0FBTUlDLG9CQUFnQixFQUFDQSxnQkFOckI7QUFPSUMsbUJBQWUsRUFBQ0EsZUFQcEI7QUFRSUMsc0JBQWtCLEVBQUNBO0FBUnZCLEdBREo7QUFZSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kcml2ZXItc3VtbWFyeS4zYjZmMWQ2ZTcwNjQ3NzY5YjVlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFwLCBSYWNlTGFwcyB9IGZyb20gXCIuLi8uLi90eXBlcy9MYXBcIjtcclxuaW1wb3J0IHsgUmFjZVBpdFN0b3BzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL1BpdFN0b3BcIjtcclxuaW1wb3J0IHsgRHJpdmVyUmFjZVJlc3VsdCwgUmFjZURyaXZlck1hcCwgUmFjZVJlc3VsdCB9IGZyb20gXCIuLi8uLi90eXBlcy9SYWNlUmVzdWx0XCI7XHJcblxyXG4vKlxyXG4qRnVuY3Rpb246IENhbGxzIGVhY2ggb2YgdGhlIDMgZmV0Y2hlcnMgbmVjZXNzYXJ5IHRvIGNvbWJpbmUgYWxsIEFQSSBjYWxscyBmb3IgYSBzaW5nbGUgcmFjZVxyXG4qQFBhcmFtOiBzZWFzb246IHllYXJcclxuKkBQYXJhbTogcm91bmQ6IHJhY2UgaW4gc2Vhc29uIDEsMiwzLGV0Yy5cclxuKkludGVudGlvbiBpcyBmb3IgdGhpcyB0byBiZSBjYWxsZWQgdmlhIHVzZVNXUiBob29rOyBBbGxvd3MgdXMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGNhY2hpbmdcclxuKnRoYXQgdGhlIGhvb2sgZG9lcyBhdXRvbWF0aWNhbGx5LlxyXG4qUmV0dXJuOiB7cmFjZTpSYWNlLCBkYXRhOk1hcDxkcml2ZXJJZCwgRHJpdmVyPn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUmFjZUNvbWJpbmVkKHJhY2VEYXRhOlJhY2VSZXN1bHQsbGFwRGF0YTpSYWNlTGFwcyxwaXREYXRhPzpSYWNlUGl0U3RvcHMsKTpSYWNlRHJpdmVyTWFweyAgICBcclxuICAgIGNvbnN0IGRyaXZlck1hcCA9IG5ldyBNYXA8c3RyaW5nLERyaXZlclJhY2VSZXN1bHQ+KCk7ICAgIFxyXG4gICAgaWYoIXJhY2VEYXRhKXtcclxuICAgICAgICByZXR1cm4ge3JhY2U6dW5kZWZpbmVkLCBkcml2ZXJNYXA6dW5kZWZpbmVkfTtcclxuICAgIH1cclxuICAgIGlmKGxhcERhdGEpe1xyXG4gICAgICAgIHJhY2VEYXRhLnJlc3VsdHMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgIC8vYnkgY29udmVudGlvbiB3ZSB3aWxsIGV2ZW50dWFsbHkgc2V0IGxhcFswXSB0byB0aGUgYmVsb3dcclxuICAgICAgICAgICAgLy9hbGxvd3MgdXMgdG8gaGF2ZSBxdWFsaWZ5aW5nL3N0YXJ0aW5nIHJvdyBpbmZvcm1hdGlvbiBpbiBsYXBzIGVhc2lseVxyXG4gICAgICAgICAgICAvL21ha2VzIHF1ZXJ5aW5nIGEgbGFwIGVhc3kgdG9vIHNpbmNlIHdlIGNhbiBqdXN0IGRvIGxhcHNbbGFwTnVtXVxyXG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ1Bvc2l0aW9uTGFwOkxhcCA9IHtcclxuICAgICAgICAgICAgICAgIGRyaXZlcklkOiByLmRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgIGxhcE51bTowLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHIuc3RhcnRpbmdPcmRlcixcclxuICAgICAgICAgICAgICAgIHRpbWVEc3A6ICcwOjAwJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6MCxcclxuICAgICAgICAgICAgICAgIGdhcDowLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25HYXA6MCxcclxuICAgICAgICAgICAgICAgIHBpdFN0b3BUaW1lOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRpbWVOZXRQaXRTdG9wOnVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcml2ZXJMYXBzID0gbGFwRGF0YS5sYXBzLmZpbHRlcihsPT5sLmRyaXZlcklkPT09ci5kcml2ZXIuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAvL1BpdHN0b3AgZGF0YSBpcyBhZGRlZCB0byB0aGUgbWFpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmKHBpdERhdGEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyUGl0U3RvcHMgPSBwaXREYXRhLnBpdFN0b3BzLmZpbHRlcihwPT5wLmRyaXZlcklkPT09ci5kcml2ZXIuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgLy9VcGRhdGUgZHJpdmVyTGFwcyB3aXRoIHBpdHN0b3AgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgLy9kcml2ZXJMYXBzIGFyZSBzb3J0ZWQgYnkgbGFwbnVtYmVyIGluIHRoYXQgZmV0Y2hlciBwcm9jZXNzXHJcbiAgICAgICAgICAgICAgICBkcml2ZXJQaXRTdG9wcy5mb3JFYWNoKHBpdD0+e1xyXG4gICAgICAgICAgICAgICAgLy9QaXRzdG9wIGxhcCBpcyB3aGVuIHRoZSBjYXIgZW50ZXJzIHRoZSBwaXRzIGJ1dCB0aGUgdGltZSBpcyBhZGRlZCB0byB0aGUgbmV4dCBsYXBcclxuICAgICAgICAgICAgICAgIC8vaGVuY2UgcGl0LmxhcE51bSBpcyBsYXAubGFwTnVtLTE7IGFycmF5IGluZGV4IGlzIDAgc28gd2UgY2FuIGp1c3QgZG8gcGl0LmxhcE51bVxyXG4gICAgICAgICAgICAgICAgZHJpdmVyTGFwc1twaXQubGFwTnVtXS5waXRTdG9wVGltZSA9IHBpdC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0udGltZU5ldFBpdFN0b3AgPSBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWUgLSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NhY2x1bGF0ZSByYWNlIHN0YXRpc3RpY3NcclxuICAgICAgICAgICAgY29uc3Qge3Nsb3dlc3RMYXBOdW0sXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBUaW1lLCBcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXRUaW1lLFxyXG4gICAgICAgICAgICAgICAgYXZnTGFwVGltZSxcclxuICAgICAgICAgICAgICAgIGF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICAgICAgdmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFuY2VOZXRQaXRUaW1lfSA9IGNhbGN1bGF0ZURyaXZlclJhY2VTdGF0aXN0aWNzKGRyaXZlckxhcHMpO1xyXG4gICAgICAgICAgICAvL3VwZGF0ZSBEcml2ZXIgb2JqZWN0IHN0YXRpc3RpY3NcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE51bWJlcj1zbG93ZXN0TGFwTnVtO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0PXNsb3dlc3RMYXBOZXRQaXQ7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBUaW1lPXNsb3dlc3RMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0VGltZT1zbG93ZXN0TGFwTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuYXZnTGFwVGltZT1hdmdMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5hdmdMYXBOZXRQaXRUaW1lPWF2Z0xhcE5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnZhcmlhbmNlTGFwVGltZT12YXJpYW5jZUxhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnZhcmlhbmNlTmV0UGl0VGltZT12YXJpYW5jZU5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIC8vdXBkYXRlIERyaXZlciBvYmplY3Qgd2l0aCBsYXBzXHJcbiAgICAgICAgICAgIHIubGFwcyA9IFtzdGFydGluZ1Bvc2l0aW9uTGFwXS5jb25jYXQoZHJpdmVyTGFwcyk7XHJcbiAgICAgICAgICAgIC8vYWRkIHRvIE1hcFxyXG4gICAgICAgICAgICBkcml2ZXJNYXAuc2V0KHIuZHJpdmVyLmRyaXZlcklkLHIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDpkcml2ZXJNYXB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge3JhY2U6cmFjZURhdGEucmFjZSwgZHJpdmVyTWFwOnVuZGVmaW5lZH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZURyaXZlclJhY2VTdGF0aXN0aWNzKGxhcHM6TGFwW10pe1xyXG4gICAgbGV0IGF2Z0xhcFRpbWUgPSAwO1xyXG4gICAgbGV0IGF2Z0xhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwVGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOdW0gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdCA9IHVuZGVmaW5lZDtcclxuICAgIC8vQ2FsY3VsYXRlIG1lYW4gJiBzbG93ZXN0IGxhcCBpbiBmaXJzdCBsb29wIHBhc3NcclxuICAgIGxldCBsYXBUaW1lU3VtPTA7XHJcbiAgICBsZXQgbGFwVGltZU5ldFBpdFN1bSA9IDA7XHJcbiAgICBsZXQgbGFwU3VtID0gMDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICAvL1NldCB0aW1lIG5ldCBwaXQgc3RvcCB0byB0aW1lIGZvciBlYWNoIGxhcCBpZiBub3QgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICAgICAgaWYoIWkudGltZU5ldFBpdFN0b3Ape1xyXG4gICAgICAgICAgICBpLnRpbWVOZXRQaXRTdG9wPWkudGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXg+MCAmJiBpbmRleDxsYXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxhcFRpbWVTdW0rPSBpLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFRpbWVOZXRQaXRTdW0rPWkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFN1bSsrO1xyXG4gICAgICAgICAgICBpZihpLnRpbWU+c2xvd2VzdExhcFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUgPSBpLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTnVtID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaS50aW1lTmV0UGl0U3RvcD5zbG93ZXN0TGFwTmV0UGl0VGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0ID0gaS5sYXBOdW07ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2V4cGxpY2l0bHkgc2V0IHRvIDAgaWYgbnVtYmVyIG9mIGxhcHMgaXMgMCBhbmQgYWxzbyBhdm9pZCBkaXYgYnkgMFxyXG4gICAgYXZnTGFwVGltZSA9IGxhcFN1bT4wP2xhcFRpbWVTdW0vbGFwU3VtOjA7XHJcbiAgICBhdmdMYXBOZXRQaXRUaW1lID0gbGFwU3VtPjA/bGFwVGltZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIC8vQ2FsY3VsYXRlIHZhcmlhbmNlIGluIHNlY29uZCBwYXNzXHJcbiAgICBsZXQgdmFyaWFuY2VTdW09MDtcclxuICAgIGxldCB2YXJpYW5jZU5ldFBpdFN1bT0wO1xyXG4gICAgbGFwcy5mb3JFYWNoKChpLGluZGV4KT0+e1xyXG4gICAgICAgIGlmKGluZGV4PjAgJiYgaW5kZXg8bGFwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXJpYW5jZVN1bSArPSAoKGkudGltZS1hdmdMYXBUaW1lKSoqMik7XHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpKioyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOdW06c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdDpzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgc2xvd2VzdExhcFRpbWU6c2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZTpzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgYXZnTGFwVGltZTphdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lOmF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWU6dmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWU6dmFyaWFuY2VOZXRQaXRUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=