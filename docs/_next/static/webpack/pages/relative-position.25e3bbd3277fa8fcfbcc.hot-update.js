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
  console.log(laps[0].driverId);
  laps.forEach(function (i, index) {
    if (index > 0 && index < laps.length) {
      varianceSum = Math.pow(i.time - avgLapTime, 2);
      varianceNetPitSum += Math.pow((i.timeNetPitStop ? i.timeNetPitStop : i.time) - avgLapNetPitTime, 2);
    }
    /*
    if(i.driverId='hamilton'){
        console.log('*****');
        console.log(i);
        console.log((i.time-avgLapTime));
        console.log(varianceSum);
        console.log(((i.timeNetPitStop?i.timeNetPitStop:i.time)-avgLapNetPitTime));
        console.log(varianceNetPitSum);
    }*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsInJhY2UiLCJ1bmRlZmluZWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInIiLCJzdGFydGluZ1Bvc2l0aW9uTGFwIiwiZHJpdmVySWQiLCJkcml2ZXIiLCJsYXBOdW0iLCJwb3NpdGlvbiIsInN0YXJ0aW5nT3JkZXIiLCJ0aW1lRHNwIiwidGltZSIsInRvdGFsVGltZSIsImdhcCIsInBvc2l0aW9uR2FwIiwicGl0U3RvcFRpbWUiLCJ0aW1lTmV0UGl0U3RvcCIsImRyaXZlckxhcHMiLCJsYXBzIiwiZmlsdGVyIiwibCIsImRyaXZlclBpdFN0b3BzIiwicGl0U3RvcHMiLCJwIiwicGl0IiwiZHVyYXRpb24iLCJjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyIsInNsb3dlc3RMYXBOdW0iLCJzbG93ZXN0TGFwTmV0UGl0Iiwic2xvd2VzdExhcFRpbWUiLCJzbG93ZXN0TGFwTmV0UGl0VGltZSIsImF2Z0xhcFRpbWUiLCJhdmdMYXBOZXRQaXRUaW1lIiwidmFyaWFuY2VMYXBUaW1lIiwidmFyaWFuY2VOZXRQaXRUaW1lIiwicmFjZVN0YXRzIiwic2xvd2VzdExhcE51bWJlciIsImNvbmNhdCIsInNldCIsImxhcFRpbWVTdW0iLCJsYXBUaW1lTmV0UGl0U3VtIiwibGFwU3VtIiwiaSIsImluZGV4IiwibGVuZ3RoIiwidmFyaWFuY2VTdW0iLCJ2YXJpYW5jZU5ldFBpdFN1bSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhF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QUksQ0FBQzBCLE1BQXpCLEVBQWdDO0FBQzVCQyxpQkFBVyxZQUFLSCxDQUFDLENBQUMvQixJQUFGLEdBQU9vQixVQUFaLEVBQXlCLENBQXpCLENBQVg7QUFDQWUsdUJBQWlCLGFBQU0sQ0FBQ0osQ0FBQyxDQUFDMUIsY0FBRixHQUFpQjBCLENBQUMsQ0FBQzFCLGNBQW5CLEdBQWtDMEIsQ0FBQyxDQUFDL0IsSUFBckMsSUFBMkNxQixnQkFBakQsRUFBb0UsQ0FBcEUsQ0FBakI7QUFDSDtBQUNEO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSyxHQWZELEVBbkM4QyxDQW1EOUM7O0FBQ0FDLGlCQUFlLEdBQUdRLE1BQU0sR0FBQyxDQUFQLEdBQVNJLFdBQVcsR0FBQ0osTUFBckIsR0FBNEIsQ0FBOUM7QUFDQVAsb0JBQWtCLEdBQUdPLE1BQU0sR0FBQyxDQUFQLEdBQVNLLGlCQUFpQixHQUFDTCxNQUEzQixHQUFrQyxDQUF2RDtBQUNBLFNBQ0k7QUFDSWQsaUJBQWEsRUFBQ0EsYUFEbEI7QUFFSUMsb0JBQWdCLEVBQUNBLGdCQUZyQjtBQUdJQyxrQkFBYyxFQUFDQSxjQUhuQjtBQUlJQyx3QkFBb0IsRUFBQ0Esb0JBSnpCO0FBS0lDLGNBQVUsRUFBQ0EsVUFMZjtBQU1JQyxvQkFBZ0IsRUFBQ0EsZ0JBTnJCO0FBT0lDLG1CQUFlLEVBQUNBLGVBUHBCO0FBUUlDLHNCQUFrQixFQUFDQTtBQVJ2QixHQURKO0FBWUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVsYXRpdmUtcG9zaXRpb24uMjVlM2JiZDMyNzdmYThmY2ZiY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhcCwgUmFjZUxhcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvTGFwXCI7XHJcbmltcG9ydCB7IFJhY2VQaXRTdG9wcyB9IGZyb20gXCIuLi8uLi90eXBlcy9QaXRTdG9wXCI7XHJcbmltcG9ydCB7IERyaXZlclJhY2VSZXN1bHQsIFJhY2VEcml2ZXJNYXAsIFJhY2VSZXN1bHQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvUmFjZVJlc3VsdFwiO1xyXG5cclxuLypcclxuKkZ1bmN0aW9uOiBDYWxscyBlYWNoIG9mIHRoZSAzIGZldGNoZXJzIG5lY2Vzc2FyeSB0byBjb21iaW5lIGFsbCBBUEkgY2FsbHMgZm9yIGEgc2luZ2xlIHJhY2VcclxuKkBQYXJhbTogc2Vhc29uOiB5ZWFyXHJcbipAUGFyYW06IHJvdW5kOiByYWNlIGluIHNlYXNvbiAxLDIsMyxldGMuXHJcbipJbnRlbnRpb24gaXMgZm9yIHRoaXMgdG8gYmUgY2FsbGVkIHZpYSB1c2VTV1IgaG9vazsgQWxsb3dzIHVzIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoZSBjYWNoaW5nXHJcbip0aGF0IHRoZSBob29rIGRvZXMgYXV0b21hdGljYWxseS5cclxuKlJldHVybjoge3JhY2U6UmFjZSwgZGF0YTpNYXA8ZHJpdmVySWQsIERyaXZlcj59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaFJhY2VDb21iaW5lZChyYWNlRGF0YTpSYWNlUmVzdWx0LGxhcERhdGE6UmFjZUxhcHMscGl0RGF0YT86UmFjZVBpdFN0b3BzLCk6UmFjZURyaXZlck1hcHsgICAgXHJcbiAgICBjb25zdCBkcml2ZXJNYXAgPSBuZXcgTWFwPHN0cmluZyxEcml2ZXJSYWNlUmVzdWx0PigpOyAgICBcclxuICAgIGlmKCFyYWNlRGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHtyYWNlOnVuZGVmaW5lZCwgZHJpdmVyTWFwOnVuZGVmaW5lZH07XHJcbiAgICB9XHJcbiAgICBpZihsYXBEYXRhKXtcclxuICAgICAgICByYWNlRGF0YS5yZXN1bHRzLmZvckVhY2gocj0+e1xyXG4gICAgICAgICAgICAvL2J5IGNvbnZlbnRpb24gd2Ugd2lsbCBldmVudHVhbGx5IHNldCBsYXBbMF0gdG8gdGhlIGJlbG93XHJcbiAgICAgICAgICAgIC8vYWxsb3dzIHVzIHRvIGhhdmUgcXVhbGlmeWluZy9zdGFydGluZyByb3cgaW5mb3JtYXRpb24gaW4gbGFwcyBlYXNpbHlcclxuICAgICAgICAgICAgLy9tYWtlcyBxdWVyeWluZyBhIGxhcCBlYXN5IHRvbyBzaW5jZSB3ZSBjYW4ganVzdCBkbyBsYXBzW2xhcE51bV1cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbkxhcDpMYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBkcml2ZXJJZDogci5kcml2ZXIuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICBsYXBOdW06MCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByLnN0YXJ0aW5nT3JkZXIsXHJcbiAgICAgICAgICAgICAgICB0aW1lRHNwOiAnMDowMCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxUaW1lOjAsXHJcbiAgICAgICAgICAgICAgICBnYXA6MCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uR2FwOjAsXHJcbiAgICAgICAgICAgICAgICBwaXRTdG9wVGltZTp1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lTmV0UGl0U3RvcDp1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpdmVyTGFwcyA9IGxhcERhdGEubGFwcy5maWx0ZXIobD0+bC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgLy9QaXRzdG9wIGRhdGEgaXMgYWRkZWQgdG8gdGhlIG1haW4gZGF0YVxyXG4gICAgICAgICAgICBpZihwaXREYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlclBpdFN0b3BzID0gcGl0RGF0YS5waXRTdG9wcy5maWx0ZXIocD0+cC5kcml2ZXJJZD09PXIuZHJpdmVyLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgIC8vVXBkYXRlIGRyaXZlckxhcHMgd2l0aCBwaXRzdG9wIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIC8vZHJpdmVyTGFwcyBhcmUgc29ydGVkIGJ5IGxhcG51bWJlciBpbiB0aGF0IGZldGNoZXIgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgICAgZHJpdmVyUGl0U3RvcHMuZm9yRWFjaChwaXQ9PntcclxuICAgICAgICAgICAgICAgIC8vUGl0c3RvcCBsYXAgaXMgd2hlbiB0aGUgY2FyIGVudGVycyB0aGUgcGl0cyBidXQgdGhlIHRpbWUgaXMgYWRkZWQgdG8gdGhlIG5leHQgbGFwXHJcbiAgICAgICAgICAgICAgICAvL2hlbmNlIHBpdC5sYXBOdW0gaXMgbGFwLmxhcE51bS0xOyBhcnJheSBpbmRleCBpcyAwIHNvIHdlIGNhbiBqdXN0IGRvIHBpdC5sYXBOdW1cclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0ucGl0U3RvcFRpbWUgPSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWVOZXRQaXRTdG9wID0gZHJpdmVyTGFwc1twaXQubGFwTnVtXS50aW1lIC0gcGl0LmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jYWNsdWxhdGUgcmFjZSBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIGNvbnN0IHtzbG93ZXN0TGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdCwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwVGltZSwgXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgICAgIGF2Z0xhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lLCBcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTGFwVGltZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0VGltZX0gPSBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhkcml2ZXJMYXBzKTtcclxuICAgICAgICAgICAgLy91cGRhdGUgRHJpdmVyIG9iamVjdCBzdGF0aXN0aWNzXHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBOdW1iZXI9c2xvd2VzdExhcE51bTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdD1zbG93ZXN0TGFwTmV0UGl0O1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwVGltZT1zbG93ZXN0TGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWU9c2xvd2VzdExhcE5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLmF2Z0xhcFRpbWU9YXZnTGFwVGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZT1hdmdMYXBOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZUxhcFRpbWU9dmFyaWFuY2VMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWU9dmFyaWFuY2VOZXRQaXRUaW1lO1xyXG4gICAgICAgICAgICAvL3VwZGF0ZSBEcml2ZXIgb2JqZWN0IHdpdGggbGFwc1xyXG4gICAgICAgICAgICByLmxhcHMgPSBbc3RhcnRpbmdQb3NpdGlvbkxhcF0uY29uY2F0KGRyaXZlckxhcHMpO1xyXG4gICAgICAgICAgICAvL2FkZCB0byBNYXBcclxuICAgICAgICAgICAgZHJpdmVyTWFwLnNldChyLmRyaXZlci5kcml2ZXJJZCxyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7cmFjZTpyYWNlRGF0YS5yYWNlLCBkcml2ZXJNYXA6ZHJpdmVyTWFwfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDp1bmRlZmluZWR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyhsYXBzOkxhcFtdKXtcclxuICAgIGxldCBhdmdMYXBUaW1lID0gMDtcclxuICAgIGxldCBhdmdMYXBOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCB2YXJpYW5jZUxhcFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTmV0UGl0VGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwTnVtID0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOZXRQaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAvL0NhbGN1bGF0ZSBtZWFuICYgc2xvd2VzdCBsYXAgaW4gZmlyc3QgbG9vcCBwYXNzXHJcbiAgICBsZXQgbGFwVGltZVN1bT0wO1xyXG4gICAgbGV0IGxhcFRpbWVOZXRQaXRTdW0gPSAwO1xyXG4gICAgbGV0IGxhcFN1bSA9IDA7XHJcbiAgICBsYXBzLmZvckVhY2goKGksaW5kZXgpPT57XHJcbiAgICAgICAgaWYoaW5kZXg+MCAmJiBpbmRleDxsYXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxhcFRpbWVTdW0rPSBpLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFRpbWVOZXRQaXRTdW0rPWkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgIGxhcFN1bSsrO1xyXG4gICAgICAgICAgICBpZihpLnRpbWU+c2xvd2VzdExhcFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgc2xvd2VzdExhcFRpbWUgPSBpLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTnVtID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaS50aW1lTmV0UGl0U3RvcD5zbG93ZXN0TGFwTmV0UGl0VGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZSA9IGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWU7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0ID0gaS5sYXBOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICBhdmdMYXBUaW1lID0gbGFwU3VtPjA/bGFwVGltZVN1bS9sYXBTdW06MDtcclxuICAgIGF2Z0xhcE5ldFBpdFRpbWUgPSBsYXBTdW0+MD9sYXBUaW1lTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgLy9DYWxjdWxhdGUgdmFyaWFuY2UgaW4gc2Vjb25kIHBhc3NcclxuICAgIGxldCB2YXJpYW5jZVN1bT0wO1xyXG4gICAgbGV0IHZhcmlhbmNlTmV0UGl0U3VtPTA7XHJcbiAgICBjb25zb2xlLmxvZyhsYXBzWzBdLmRyaXZlcklkKTtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICBpZihpbmRleD4wICYmIGluZGV4PGxhcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgdmFyaWFuY2VTdW0gPSAoKGkudGltZS1hdmdMYXBUaW1lKSoqMik7XHJcbiAgICAgICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpKioyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBpZihpLmRyaXZlcklkPSdoYW1pbHRvbicpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKionKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKChpLnRpbWUtYXZnTGFwVGltZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW5jZVN1bSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCgoaS50aW1lTmV0UGl0U3RvcD9pLnRpbWVOZXRQaXRTdG9wOmkudGltZSktYXZnTGFwTmV0UGl0VGltZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW5jZU5ldFBpdFN1bSk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vZXhwbGljaXRseSBzZXQgdG8gMCBpZiBudW1iZXIgb2YgbGFwcyBpcyAwIGFuZCBhbHNvIGF2b2lkIGRpdiBieSAwXHJcbiAgICB2YXJpYW5jZUxhcFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZVN1bS9sYXBTdW06MDtcclxuICAgIHZhcmlhbmNlTmV0UGl0VGltZSA9IGxhcFN1bT4wP3ZhcmlhbmNlTmV0UGl0U3VtL2xhcFN1bTowO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOdW06c2xvd2VzdExhcE51bSxcclxuICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdDpzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgc2xvd2VzdExhcFRpbWU6c2xvd2VzdExhcFRpbWUsIFxyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0VGltZTpzbG93ZXN0TGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgYXZnTGFwVGltZTphdmdMYXBUaW1lLFxyXG4gICAgICAgICAgICBhdmdMYXBOZXRQaXRUaW1lOmF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICB2YXJpYW5jZUxhcFRpbWU6dmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICB2YXJpYW5jZU5ldFBpdFRpbWU6dmFyaWFuY2VOZXRQaXRUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=