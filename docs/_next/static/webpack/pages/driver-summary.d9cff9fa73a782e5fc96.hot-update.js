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

    if (varianceSum < 0) {
      console.log('*neg');
      console.log(i.time - avgLapTime);
      console.log(i.time - avgLapTime ^ 2);
    }
  }); //explicitly set to 0 if number of laps is 0 and also avoid div by 0

  console.log(laps[0].driverId);
  console.log(varianceSum);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hlcnMvUmFjZUNvbWJpbmVkLnRzIl0sIm5hbWVzIjpbImZldGNoUmFjZUNvbWJpbmVkIiwicmFjZURhdGEiLCJsYXBEYXRhIiwicGl0RGF0YSIsImRyaXZlck1hcCIsIk1hcCIsInJhY2UiLCJ1bmRlZmluZWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInIiLCJzdGFydGluZ1Bvc2l0aW9uTGFwIiwiZHJpdmVySWQiLCJkcml2ZXIiLCJsYXBOdW0iLCJwb3NpdGlvbiIsInN0YXJ0aW5nT3JkZXIiLCJ0aW1lRHNwIiwidGltZSIsInRvdGFsVGltZSIsImdhcCIsInBvc2l0aW9uR2FwIiwicGl0U3RvcFRpbWUiLCJ0aW1lTmV0UGl0U3RvcCIsImRyaXZlckxhcHMiLCJsYXBzIiwiZmlsdGVyIiwibCIsImRyaXZlclBpdFN0b3BzIiwicGl0U3RvcHMiLCJwIiwicGl0IiwiZHVyYXRpb24iLCJjYWxjdWxhdGVEcml2ZXJSYWNlU3RhdGlzdGljcyIsInNsb3dlc3RMYXBOdW0iLCJzbG93ZXN0TGFwTmV0UGl0Iiwic2xvd2VzdExhcFRpbWUiLCJzbG93ZXN0TGFwTmV0UGl0VGltZSIsImF2Z0xhcFRpbWUiLCJhdmdMYXBOZXRQaXRUaW1lIiwidmFyaWFuY2VMYXBUaW1lIiwidmFyaWFuY2VOZXRQaXRUaW1lIiwicmFjZVN0YXRzIiwic2xvd2VzdExhcE51bWJlciIsImNvbmNhdCIsInNldCIsImxhcFRpbWVTdW0iLCJsYXBUaW1lTmV0UGl0U3VtIiwibGFwU3VtIiwiaSIsImluZGV4IiwibGVuZ3RoIiwidmFyaWFuY2VTdW0iLCJ2YXJpYW5jZU5ldFBpdFN1bSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUErQ0MsT0FBL0MsRUFBZ0VDLE9BQWhFLEVBQXFHO0FBQ2hILE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxHQUFKLEVBQWxCOztBQUNBLE1BQUcsQ0FBQ0osUUFBSixFQUFhO0FBQ1QsV0FBTztBQUFDSyxVQUFJLEVBQUNDLFNBQU47QUFBaUJILGVBQVMsRUFBQ0c7QUFBM0IsS0FBUDtBQUNIOztBQUNELE1BQUdMLE9BQUgsRUFBVztBQUNQRCxZQUFRLENBQUNPLE9BQVQsQ0FBaUJDLE9BQWpCLENBQXlCLFVBQUFDLENBQUMsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxtQkFBdUIsR0FBRztBQUM1QkMsZ0JBQVEsRUFBRUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNELFFBRFM7QUFFNUJFLGNBQU0sRUFBQyxDQUZxQjtBQUc1QkMsZ0JBQVEsRUFBRUwsQ0FBQyxDQUFDTSxhQUhnQjtBQUk1QkMsZUFBTyxFQUFFLE1BSm1CO0FBSzVCQyxZQUFJLEVBQUUsQ0FMc0I7QUFNNUJDLGlCQUFTLEVBQUMsQ0FOa0I7QUFPNUJDLFdBQUcsRUFBQyxDQVB3QjtBQVE1QkMsbUJBQVcsRUFBQyxDQVJnQjtBQVM1QkMsbUJBQVcsRUFBQ2YsU0FUZ0I7QUFVNUJnQixzQkFBYyxFQUFDaEI7QUFWYSxPQUFoQztBQWFBLFVBQU1pQixVQUFVLEdBQUd0QixPQUFPLENBQUN1QixJQUFSLENBQWFDLE1BQWIsQ0FBb0IsVUFBQUMsQ0FBQztBQUFBLGVBQUVBLENBQUMsQ0FBQ2YsUUFBRixLQUFhRixDQUFDLENBQUNHLE1BQUYsQ0FBU0QsUUFBeEI7QUFBQSxPQUFyQixDQUFuQixDQWpCd0IsQ0FrQnhCOztBQUNBLFVBQUdULE9BQUgsRUFBVztBQUNQLFlBQU15QixjQUFjLEdBQUd6QixPQUFPLENBQUMwQixRQUFSLENBQWlCSCxNQUFqQixDQUF3QixVQUFBSSxDQUFDO0FBQUEsaUJBQUVBLENBQUMsQ0FBQ2xCLFFBQUYsS0FBYUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNELFFBQXhCO0FBQUEsU0FBekIsQ0FBdkIsQ0FETyxDQUVQO0FBQ0E7O0FBQ0FnQixzQkFBYyxDQUFDbkIsT0FBZixDQUF1QixVQUFBc0IsR0FBRyxFQUFFO0FBQzVCO0FBQ0E7QUFDQVAsb0JBQVUsQ0FBQ08sR0FBRyxDQUFDakIsTUFBTCxDQUFWLENBQXVCUSxXQUF2QixHQUFxQ1MsR0FBRyxDQUFDQyxRQUF6QztBQUNBUixvQkFBVSxDQUFDTyxHQUFHLENBQUNqQixNQUFMLENBQVYsQ0FBdUJTLGNBQXZCLEdBQXdDQyxVQUFVLENBQUNPLEdBQUcsQ0FBQ2pCLE1BQUwsQ0FBVixDQUF1QkksSUFBdkIsR0FBOEJhLEdBQUcsQ0FBQ0MsUUFBMUU7QUFDSCxTQUxHO0FBTUgsT0E3QnVCLENBK0J4Qjs7O0FBL0J3QixrQ0F1Q0VDLDZCQUE2QixDQUFDVCxVQUFELENBdkMvQjtBQUFBLFVBZ0NqQlUsYUFoQ2lCLHlCQWdDakJBLGFBaENpQjtBQUFBLFVBaUNwQkMsZ0JBakNvQix5QkFpQ3BCQSxnQkFqQ29CO0FBQUEsVUFrQ3BCQyxjQWxDb0IseUJBa0NwQkEsY0FsQ29CO0FBQUEsVUFtQ3BCQyxvQkFuQ29CLHlCQW1DcEJBLG9CQW5Db0I7QUFBQSxVQW9DcEJDLFVBcENvQix5QkFvQ3BCQSxVQXBDb0I7QUFBQSxVQXFDcEJDLGdCQXJDb0IseUJBcUNwQkEsZ0JBckNvQjtBQUFBLFVBc0NwQkMsZUF0Q29CLHlCQXNDcEJBLGVBdENvQjtBQUFBLFVBdUNwQkMsa0JBdkNvQix5QkF1Q3BCQSxrQkF2Q29CLEVBd0N4Qjs7O0FBQ0EvQixPQUFDLENBQUNnQyxTQUFGLENBQVlDLGdCQUFaLEdBQTZCVCxhQUE3QjtBQUNBeEIsT0FBQyxDQUFDZ0MsU0FBRixDQUFZUCxnQkFBWixHQUE2QkEsZ0JBQTdCO0FBQ0F6QixPQUFDLENBQUNnQyxTQUFGLENBQVlOLGNBQVosR0FBMkJBLGNBQTNCO0FBQ0ExQixPQUFDLENBQUNnQyxTQUFGLENBQVlMLG9CQUFaLEdBQWlDQSxvQkFBakM7QUFDQTNCLE9BQUMsQ0FBQ2dDLFNBQUYsQ0FBWUosVUFBWixHQUF1QkEsVUFBdkI7QUFDQTVCLE9BQUMsQ0FBQ2dDLFNBQUYsQ0FBWUgsZ0JBQVosR0FBNkJBLGdCQUE3QjtBQUNBN0IsT0FBQyxDQUFDZ0MsU0FBRixDQUFZRixlQUFaLEdBQTRCQSxlQUE1QjtBQUNBOUIsT0FBQyxDQUFDZ0MsU0FBRixDQUFZRCxrQkFBWixHQUErQkEsa0JBQS9CLENBaER3QixDQWlEeEI7O0FBQ0EvQixPQUFDLENBQUNlLElBQUYsR0FBUyxDQUFDZCxtQkFBRCxFQUFzQmlDLE1BQXRCLENBQTZCcEIsVUFBN0IsQ0FBVCxDQWxEd0IsQ0FtRHhCOztBQUNBcEIsZUFBUyxDQUFDeUMsR0FBVixDQUFjbkMsQ0FBQyxDQUFDRyxNQUFGLENBQVNELFFBQXZCLEVBQWdDRixDQUFoQztBQUNILEtBckREO0FBc0RBLFdBQU87QUFBQ0osVUFBSSxFQUFDTCxRQUFRLENBQUNLLElBQWY7QUFBcUJGLGVBQVMsRUFBQ0E7QUFBL0IsS0FBUDtBQUNIOztBQUVELFNBQU87QUFBQ0UsUUFBSSxFQUFDTCxRQUFRLENBQUNLLElBQWY7QUFBcUJGLGFBQVMsRUFBQ0c7QUFBL0IsR0FBUDtBQUNIOztBQUVELFNBQVMwQiw2QkFBVCxDQUF1Q1IsSUFBdkMsRUFBa0Q7QUFDOUMsTUFBSWEsVUFBVSxHQUFHLENBQWpCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsQ0FBdkI7QUFDQSxNQUFJQyxlQUFlLEdBQUcsQ0FBdEI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLE1BQUlMLGNBQWMsR0FBRyxDQUFyQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLENBQTNCO0FBQ0EsTUFBSUgsYUFBYSxHQUFHM0IsU0FBcEI7QUFDQSxNQUFJNEIsZ0JBQWdCLEdBQUc1QixTQUF2QixDQVI4QyxDQVM5Qzs7QUFDQSxNQUFJdUMsVUFBVSxHQUFDLENBQWY7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBRyxDQUF2QjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0F2QixNQUFJLENBQUNoQixPQUFMLENBQWEsVUFBQ3dDLENBQUQsRUFBR0MsS0FBSCxFQUFXO0FBQ3BCLFFBQUdBLEtBQUssR0FBQyxDQUFOLElBQVdBLEtBQUssR0FBQ3pCLElBQUksQ0FBQzBCLE1BQXpCLEVBQWdDO0FBQzVCTCxnQkFBVSxJQUFHRyxDQUFDLENBQUMvQixJQUFmO0FBQ0E2QixzQkFBZ0IsSUFBRUUsQ0FBQyxDQUFDMUIsY0FBRixHQUFpQjBCLENBQUMsQ0FBQzFCLGNBQW5CLEdBQWtDMEIsQ0FBQyxDQUFDL0IsSUFBdEQ7QUFDQThCLFlBQU07O0FBQ04sVUFBR0MsQ0FBQyxDQUFDL0IsSUFBRixHQUFPa0IsY0FBVixFQUF5QjtBQUNyQkEsc0JBQWMsR0FBR2EsQ0FBQyxDQUFDL0IsSUFBbkI7QUFDQWdCLHFCQUFhLEdBQUdlLENBQUMsQ0FBQ25DLE1BQWxCO0FBQ0g7O0FBQ0QsVUFBR21DLENBQUMsQ0FBQzFCLGNBQUYsR0FBaUJjLG9CQUFwQixFQUF5QztBQUNyQ0EsNEJBQW9CLEdBQUdZLENBQUMsQ0FBQzFCLGNBQUYsR0FBaUIwQixDQUFDLENBQUMxQixjQUFuQixHQUFrQzBCLENBQUMsQ0FBQy9CLElBQTNEO0FBQ0FpQix3QkFBZ0IsR0FBR2MsQ0FBQyxDQUFDbkMsTUFBckI7QUFDSDtBQUNKO0FBQ0osR0FkRCxFQWI4QyxDQTRCOUM7O0FBQ0F3QixZQUFVLEdBQUdVLE1BQU0sR0FBQyxDQUFQLEdBQVNGLFVBQVUsR0FBQ0UsTUFBcEIsR0FBMkIsQ0FBeEM7QUFDQVQsa0JBQWdCLEdBQUdTLE1BQU0sR0FBQyxDQUFQLEdBQVNELGdCQUFnQixHQUFDQyxNQUExQixHQUFpQyxDQUFwRCxDQTlCOEMsQ0ErQjlDOztBQUNBLE1BQUlJLFdBQVcsR0FBQyxDQUFoQjtBQUNBLE1BQUlDLGlCQUFpQixHQUFDLENBQXRCO0FBQ0E1QixNQUFJLENBQUNoQixPQUFMLENBQWEsVUFBQ3dDLENBQUQsRUFBR0MsS0FBSCxFQUFXO0FBQ3BCLFFBQUdBLEtBQUssR0FBQyxDQUFOLElBQVdBLEtBQUssR0FBQ3pCLElBQUksQ0FBQzBCLE1BQXpCLEVBQ0FDLFdBQVcsSUFBTUgsQ0FBQyxDQUFDL0IsSUFBRixHQUFPb0IsVUFBUixHQUFvQixDQUFwQztBQUNBZSxxQkFBaUIsSUFBTSxDQUFDSixDQUFDLENBQUMxQixjQUFGLEdBQWlCMEIsQ0FBQyxDQUFDMUIsY0FBbkIsR0FBa0MwQixDQUFDLENBQUMvQixJQUFyQyxJQUEyQ3FCLGdCQUE1QyxHQUE4RCxDQUFwRjs7QUFDQSxRQUFHYSxXQUFXLEdBQUMsQ0FBZixFQUFpQjtBQUNiRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFhTixDQUFDLENBQUMvQixJQUFGLEdBQU9vQixVQUFwQjtBQUNBZ0IsYUFBTyxDQUFDQyxHQUFSLENBQWFOLENBQUMsQ0FBQy9CLElBQUYsR0FBT29CLFVBQVIsR0FBb0IsQ0FBaEM7QUFDSDtBQUNKLEdBVEQsRUFsQzhDLENBNEM5Qzs7QUFDQWdCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZOUIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRYixRQUFwQjtBQUNBMEMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7QUFDQVosaUJBQWUsR0FBR1EsTUFBTSxHQUFDLENBQVAsR0FBU0ksV0FBVyxHQUFDSixNQUFyQixHQUE0QixDQUE5QztBQUNBUCxvQkFBa0IsR0FBR08sTUFBTSxHQUFDLENBQVAsR0FBU0ssaUJBQWlCLEdBQUNMLE1BQTNCLEdBQWtDLENBQXZEO0FBQ0EsU0FDSTtBQUNJZCxpQkFBYSxFQUFDQSxhQURsQjtBQUVJQyxvQkFBZ0IsRUFBQ0EsZ0JBRnJCO0FBR0lDLGtCQUFjLEVBQUNBLGNBSG5CO0FBSUlDLHdCQUFvQixFQUFDQSxvQkFKekI7QUFLSUMsY0FBVSxFQUFDQSxVQUxmO0FBTUlDLG9CQUFnQixFQUFDQSxnQkFOckI7QUFPSUMsbUJBQWUsRUFBQ0EsZUFQcEI7QUFRSUMsc0JBQWtCLEVBQUNBO0FBUnZCLEdBREo7QUFZSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kcml2ZXItc3VtbWFyeS5kOWNmZjlmYTczYTc4MmU1ZmM5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFwLCBSYWNlTGFwcyB9IGZyb20gXCIuLi8uLi90eXBlcy9MYXBcIjtcclxuaW1wb3J0IHsgUmFjZVBpdFN0b3BzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL1BpdFN0b3BcIjtcclxuaW1wb3J0IHsgRHJpdmVyUmFjZVJlc3VsdCwgUmFjZURyaXZlck1hcCwgUmFjZVJlc3VsdCB9IGZyb20gXCIuLi8uLi90eXBlcy9SYWNlUmVzdWx0XCI7XHJcblxyXG4vKlxyXG4qRnVuY3Rpb246IENhbGxzIGVhY2ggb2YgdGhlIDMgZmV0Y2hlcnMgbmVjZXNzYXJ5IHRvIGNvbWJpbmUgYWxsIEFQSSBjYWxscyBmb3IgYSBzaW5nbGUgcmFjZVxyXG4qQFBhcmFtOiBzZWFzb246IHllYXJcclxuKkBQYXJhbTogcm91bmQ6IHJhY2UgaW4gc2Vhc29uIDEsMiwzLGV0Yy5cclxuKkludGVudGlvbiBpcyBmb3IgdGhpcyB0byBiZSBjYWxsZWQgdmlhIHVzZVNXUiBob29rOyBBbGxvd3MgdXMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGNhY2hpbmdcclxuKnRoYXQgdGhlIGhvb2sgZG9lcyBhdXRvbWF0aWNhbGx5LlxyXG4qUmV0dXJuOiB7cmFjZTpSYWNlLCBkYXRhOk1hcDxkcml2ZXJJZCwgRHJpdmVyPn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUmFjZUNvbWJpbmVkKHJhY2VEYXRhOlJhY2VSZXN1bHQsbGFwRGF0YTpSYWNlTGFwcyxwaXREYXRhPzpSYWNlUGl0U3RvcHMsKTpSYWNlRHJpdmVyTWFweyAgICBcclxuICAgIGNvbnN0IGRyaXZlck1hcCA9IG5ldyBNYXA8c3RyaW5nLERyaXZlclJhY2VSZXN1bHQ+KCk7ICAgIFxyXG4gICAgaWYoIXJhY2VEYXRhKXtcclxuICAgICAgICByZXR1cm4ge3JhY2U6dW5kZWZpbmVkLCBkcml2ZXJNYXA6dW5kZWZpbmVkfTtcclxuICAgIH1cclxuICAgIGlmKGxhcERhdGEpe1xyXG4gICAgICAgIHJhY2VEYXRhLnJlc3VsdHMuZm9yRWFjaChyPT57XHJcbiAgICAgICAgICAgIC8vYnkgY29udmVudGlvbiB3ZSB3aWxsIGV2ZW50dWFsbHkgc2V0IGxhcFswXSB0byB0aGUgYmVsb3dcclxuICAgICAgICAgICAgLy9hbGxvd3MgdXMgdG8gaGF2ZSBxdWFsaWZ5aW5nL3N0YXJ0aW5nIHJvdyBpbmZvcm1hdGlvbiBpbiBsYXBzIGVhc2lseVxyXG4gICAgICAgICAgICAvL21ha2VzIHF1ZXJ5aW5nIGEgbGFwIGVhc3kgdG9vIHNpbmNlIHdlIGNhbiBqdXN0IGRvIGxhcHNbbGFwTnVtXVxyXG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ1Bvc2l0aW9uTGFwOkxhcCA9IHtcclxuICAgICAgICAgICAgICAgIGRyaXZlcklkOiByLmRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgIGxhcE51bTowLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHIuc3RhcnRpbmdPcmRlcixcclxuICAgICAgICAgICAgICAgIHRpbWVEc3A6ICcwOjAwJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6MCxcclxuICAgICAgICAgICAgICAgIGdhcDowLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25HYXA6MCxcclxuICAgICAgICAgICAgICAgIHBpdFN0b3BUaW1lOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRpbWVOZXRQaXRTdG9wOnVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcml2ZXJMYXBzID0gbGFwRGF0YS5sYXBzLmZpbHRlcihsPT5sLmRyaXZlcklkPT09ci5kcml2ZXIuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAvL1BpdHN0b3AgZGF0YSBpcyBhZGRlZCB0byB0aGUgbWFpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmKHBpdERhdGEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyUGl0U3RvcHMgPSBwaXREYXRhLnBpdFN0b3BzLmZpbHRlcihwPT5wLmRyaXZlcklkPT09ci5kcml2ZXIuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgLy9VcGRhdGUgZHJpdmVyTGFwcyB3aXRoIHBpdHN0b3AgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgLy9kcml2ZXJMYXBzIGFyZSBzb3J0ZWQgYnkgbGFwbnVtYmVyIGluIHRoYXQgZmV0Y2hlciBwcm9jZXNzXHJcbiAgICAgICAgICAgICAgICBkcml2ZXJQaXRTdG9wcy5mb3JFYWNoKHBpdD0+e1xyXG4gICAgICAgICAgICAgICAgLy9QaXRzdG9wIGxhcCBpcyB3aGVuIHRoZSBjYXIgZW50ZXJzIHRoZSBwaXRzIGJ1dCB0aGUgdGltZSBpcyBhZGRlZCB0byB0aGUgbmV4dCBsYXBcclxuICAgICAgICAgICAgICAgIC8vaGVuY2UgcGl0LmxhcE51bSBpcyBsYXAubGFwTnVtLTE7IGFycmF5IGluZGV4IGlzIDAgc28gd2UgY2FuIGp1c3QgZG8gcGl0LmxhcE51bVxyXG4gICAgICAgICAgICAgICAgZHJpdmVyTGFwc1twaXQubGFwTnVtXS5waXRTdG9wVGltZSA9IHBpdC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIGRyaXZlckxhcHNbcGl0LmxhcE51bV0udGltZU5ldFBpdFN0b3AgPSBkcml2ZXJMYXBzW3BpdC5sYXBOdW1dLnRpbWUgLSBwaXQuZHVyYXRpb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NhY2x1bGF0ZSByYWNlIHN0YXRpc3RpY3NcclxuICAgICAgICAgICAgY29uc3Qge3Nsb3dlc3RMYXBOdW0sXHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwTmV0UGl0LCBcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBUaW1lLCBcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXRUaW1lLFxyXG4gICAgICAgICAgICAgICAgYXZnTGFwVGltZSxcclxuICAgICAgICAgICAgICAgIGF2Z0xhcE5ldFBpdFRpbWUsIFxyXG4gICAgICAgICAgICAgICAgdmFyaWFuY2VMYXBUaW1lLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFuY2VOZXRQaXRUaW1lfSA9IGNhbGN1bGF0ZURyaXZlclJhY2VTdGF0aXN0aWNzKGRyaXZlckxhcHMpO1xyXG4gICAgICAgICAgICAvL3VwZGF0ZSBEcml2ZXIgb2JqZWN0IHN0YXRpc3RpY3NcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuc2xvd2VzdExhcE51bWJlcj1zbG93ZXN0TGFwTnVtO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0PXNsb3dlc3RMYXBOZXRQaXQ7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnNsb3dlc3RMYXBUaW1lPXNsb3dlc3RMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0VGltZT1zbG93ZXN0TGFwTmV0UGl0VGltZTtcclxuICAgICAgICAgICAgci5yYWNlU3RhdHMuYXZnTGFwVGltZT1hdmdMYXBUaW1lO1xyXG4gICAgICAgICAgICByLnJhY2VTdGF0cy5hdmdMYXBOZXRQaXRUaW1lPWF2Z0xhcE5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnZhcmlhbmNlTGFwVGltZT12YXJpYW5jZUxhcFRpbWU7XHJcbiAgICAgICAgICAgIHIucmFjZVN0YXRzLnZhcmlhbmNlTmV0UGl0VGltZT12YXJpYW5jZU5ldFBpdFRpbWU7XHJcbiAgICAgICAgICAgIC8vdXBkYXRlIERyaXZlciBvYmplY3Qgd2l0aCBsYXBzXHJcbiAgICAgICAgICAgIHIubGFwcyA9IFtzdGFydGluZ1Bvc2l0aW9uTGFwXS5jb25jYXQoZHJpdmVyTGFwcyk7XHJcbiAgICAgICAgICAgIC8vYWRkIHRvIE1hcFxyXG4gICAgICAgICAgICBkcml2ZXJNYXAuc2V0KHIuZHJpdmVyLmRyaXZlcklkLHIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtyYWNlOnJhY2VEYXRhLnJhY2UsIGRyaXZlck1hcDpkcml2ZXJNYXB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge3JhY2U6cmFjZURhdGEucmFjZSwgZHJpdmVyTWFwOnVuZGVmaW5lZH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZURyaXZlclJhY2VTdGF0aXN0aWNzKGxhcHM6TGFwW10pe1xyXG4gICAgbGV0IGF2Z0xhcFRpbWUgPSAwO1xyXG4gICAgbGV0IGF2Z0xhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHZhcmlhbmNlTGFwVGltZSA9IDA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRUaW1lID0gMDtcclxuICAgIGxldCBzbG93ZXN0TGFwVGltZSA9IDA7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdFRpbWUgPSAwO1xyXG4gICAgbGV0IHNsb3dlc3RMYXBOdW0gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgc2xvd2VzdExhcE5ldFBpdCA9IHVuZGVmaW5lZDtcclxuICAgIC8vQ2FsY3VsYXRlIG1lYW4gJiBzbG93ZXN0IGxhcCBpbiBmaXJzdCBsb29wIHBhc3NcclxuICAgIGxldCBsYXBUaW1lU3VtPTA7XHJcbiAgICBsZXQgbGFwVGltZU5ldFBpdFN1bSA9IDA7XHJcbiAgICBsZXQgbGFwU3VtID0gMDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICBpZihpbmRleD4wICYmIGluZGV4PGxhcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgbGFwVGltZVN1bSs9IGkudGltZTtcclxuICAgICAgICAgICAgbGFwVGltZU5ldFBpdFN1bSs9aS50aW1lTmV0UGl0U3RvcD9pLnRpbWVOZXRQaXRTdG9wOmkudGltZTtcclxuICAgICAgICAgICAgbGFwU3VtKys7XHJcbiAgICAgICAgICAgIGlmKGkudGltZT5zbG93ZXN0TGFwVGltZSl7XHJcbiAgICAgICAgICAgICAgICBzbG93ZXN0TGFwVGltZSA9IGkudGltZTtcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOdW0gPSBpLmxhcE51bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpLnRpbWVOZXRQaXRTdG9wPnNsb3dlc3RMYXBOZXRQaXRUaW1lKXtcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXRUaW1lID0gaS50aW1lTmV0UGl0U3RvcD9pLnRpbWVOZXRQaXRTdG9wOmkudGltZTtcclxuICAgICAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXQgPSBpLmxhcE51bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9leHBsaWNpdGx5IHNldCB0byAwIGlmIG51bWJlciBvZiBsYXBzIGlzIDAgYW5kIGFsc28gYXZvaWQgZGl2IGJ5IDBcclxuICAgIGF2Z0xhcFRpbWUgPSBsYXBTdW0+MD9sYXBUaW1lU3VtL2xhcFN1bTowO1xyXG4gICAgYXZnTGFwTmV0UGl0VGltZSA9IGxhcFN1bT4wP2xhcFRpbWVOZXRQaXRTdW0vbGFwU3VtOjA7XHJcbiAgICAvL0NhbGN1bGF0ZSB2YXJpYW5jZSBpbiBzZWNvbmQgcGFzc1xyXG4gICAgbGV0IHZhcmlhbmNlU3VtPTA7XHJcbiAgICBsZXQgdmFyaWFuY2VOZXRQaXRTdW09MDtcclxuICAgIGxhcHMuZm9yRWFjaCgoaSxpbmRleCk9PntcclxuICAgICAgICBpZihpbmRleD4wICYmIGluZGV4PGxhcHMubGVuZ3RoKVxyXG4gICAgICAgIHZhcmlhbmNlU3VtICs9ICgoaS50aW1lLWF2Z0xhcFRpbWUpXjIpO1xyXG4gICAgICAgIHZhcmlhbmNlTmV0UGl0U3VtICs9ICgoKGkudGltZU5ldFBpdFN0b3A/aS50aW1lTmV0UGl0U3RvcDppLnRpbWUpLWF2Z0xhcE5ldFBpdFRpbWUpXjIpO1xyXG4gICAgICAgIGlmKHZhcmlhbmNlU3VtPDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKm5lZycpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKChpLnRpbWUtYXZnTGFwVGltZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygoaS50aW1lLWF2Z0xhcFRpbWUpXjIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9leHBsaWNpdGx5IHNldCB0byAwIGlmIG51bWJlciBvZiBsYXBzIGlzIDAgYW5kIGFsc28gYXZvaWQgZGl2IGJ5IDBcclxuICAgIGNvbnNvbGUubG9nKGxhcHNbMF0uZHJpdmVySWQpO1xyXG4gICAgY29uc29sZS5sb2codmFyaWFuY2VTdW0pO1xyXG4gICAgdmFyaWFuY2VMYXBUaW1lID0gbGFwU3VtPjA/dmFyaWFuY2VTdW0vbGFwU3VtOjA7XHJcbiAgICB2YXJpYW5jZU5ldFBpdFRpbWUgPSBsYXBTdW0+MD92YXJpYW5jZU5ldFBpdFN1bS9sYXBTdW06MDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzbG93ZXN0TGFwTnVtOnNsb3dlc3RMYXBOdW0sXHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBOZXRQaXQ6c2xvd2VzdExhcE5ldFBpdCwgXHJcbiAgICAgICAgICAgIHNsb3dlc3RMYXBUaW1lOnNsb3dlc3RMYXBUaW1lLCBcclxuICAgICAgICAgICAgc2xvd2VzdExhcE5ldFBpdFRpbWU6c2xvd2VzdExhcE5ldFBpdFRpbWUsXHJcbiAgICAgICAgICAgIGF2Z0xhcFRpbWU6YXZnTGFwVGltZSxcclxuICAgICAgICAgICAgYXZnTGFwTmV0UGl0VGltZTphdmdMYXBOZXRQaXRUaW1lLCBcclxuICAgICAgICAgICAgdmFyaWFuY2VMYXBUaW1lOnZhcmlhbmNlTGFwVGltZSxcclxuICAgICAgICAgICAgdmFyaWFuY2VOZXRQaXRUaW1lOnZhcmlhbmNlTmV0UGl0VGltZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9