webpackHotUpdate_N_E("pages/driver-detail",{

/***/ "./components/graphs/ScatterGraph.tsx":
false,

/***/ "./pages/driver-detail.tsx":
/*!*********************************!*\
  !*** ./pages/driver-detail.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DriverDetail; });
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/RangeSlider/RangeSlider */ "./components/common/RangeSlider/RangeSlider.tsx");
/* harmony import */ var _components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DriverList/DriverList */ "./components/DriverList/DriverList.tsx");
/* harmony import */ var _components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DriverList/DriverListItem */ "./components/DriverList/DriverListItem.tsx");
/* harmony import */ var _components_DriverSummaryCard_DriverSummaryCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DriverSummaryCard/DriverSummaryCard */ "./components/DriverSummaryCard/DriverSummaryCard.tsx");
/* harmony import */ var _components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DriverSummaryCard/SummaryCardSection */ "./components/DriverSummaryCard/SummaryCardSection.tsx");
/* harmony import */ var _components_graphs_BarGraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/graphs/BarGraph */ "./components/graphs/BarGraph.tsx");
/* harmony import */ var _utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/hooks/useResultsLapsPitstops */ "./utils/hooks/useResultsLapsPitstops.ts");
/* harmony import */ var _utils_hooks_useHistogram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks/useHistogram */ "./utils/hooks/useHistogram.ts");
/* harmony import */ var _components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/Loading/Loading */ "./components/common/Loading/Loading.tsx");




var _jsxFileName = "C:\\Users\\mobiledan\\Code\\f1-graphs\\pages\\driver-detail.tsx",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/*Detail for a single driver at a time
*/

function DriverDetail(props) {
  _s();

  var _this = this;

  var _useResultsLapsPitsto = Object(_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_9__["default"])(props.season, props.round),
      isLoading = _useResultsLapsPitsto.isLoading,
      error = _useResultsLapsPitsto.error,
      raceDetails = _useResultsLapsPitsto.raceDetails,
      driverMap = _useResultsLapsPitsto.driverMap;

  var hoveredDriver = props.driver && props.driverList && props.driverList.find(function (d) {
    return d.driverId === props.driver && d.enabled;
  }) ? true : false;
  var histogram = Object(_utils_hooks_useHistogram__WEBPACK_IMPORTED_MODULE_10__["default"])(props.season, props.round, props.driver, props.driver ? driverMap.get(props.driver).laps : undefined, props.driver ? driverMap.get(props.driver).driver.constructorColor : undefined);

  if (isLoading || !props.driverList) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }, this);
  }

  var lapsArray = [];

  for (var i = 0; i <= raceDetails.numLaps; i++) {
    lapsArray.push({
      value: i,
      label: i
    });
  }

  var singleLapData = props.driverList.map(function (d) {
    return driverMap.get(d.driverId).laps.filter(function (ff, index, arr) {
      return props.lap && props.lap > 0 ? ff.lapNum === props.lap : index === arr.length - 1 && ff.lapNum >= raceDetails.numLaps - 1;
    }).map(function (l) {
      return {
        driverId: l.driverId,
        disabled: !d.enabled,
        color: driverMap.get(d.driverId).driver.constructorColor,
        lapsCompleted: driverMap.get(d.driverId).lapsCompleted,
        lapNum: l.lapNum,
        gap: l.gap,
        positionGap: l.positionGap,
        position: l.position,
        time: l.time,
        timeDsp: l.timeDsp,
        totalTime: l.totalTime,
        pitStopTime: l.pitStopTime,
        timeNetPitStop: l.timeNetPitStop
      };
    });
  }).flat().sort(function (a, b) {
    return a.position - b.position;
  });
  var driverListDisplay = props.driverList.map(function (d) {
    return {
      driverId: d.driverId,
      enabled: d.enabled,
      driverCode: driverMap.get(d.driverId),
      constructorColor: driverMap.get(d.driverId).driver.constructorColor,
      time: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].time : 'OUT' : driverMap.get(d.driverId).raceTime,
      timeDsp: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].timeDsp : 'OUT' : driverMap.get(d.driverId).raceTimeDsp,
      gap: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].gap : 'OUT' : driverMap.get(d.driverId).raceTimeDsp,
      positionGap: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].positionGap : 'OUT' : driverMap.get(d.driverId).raceTimeDsp,
      position: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].position : driverMap.get(d.driverId).endingPosition : driverMap.get(d.driverId).endingPosition
    };
  }).sort(function (a, b) {
    return a.position - b.position;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "jsx-2450613129" + " " + 'grid-container',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-2450613129" + " " + 'left-column',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_4__["default"] //style={{height:'100%', gridTemplateColumns:'auto 0.75fr auto'}}
      , {
        style: {
          padding: 0
        },
        title: !props.lap || props.lap === 0 || props.lap >= raceDetails.numLaps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "jsx-2450613129",
          children: "Final Results"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 26
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            className: "jsx-2450613129",
            children: "LAP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 24
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
            className: "jsx-2450613129",
            children: [props.lap, "/", raceDetails.numLaps]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 36
          }, this)]
        }, void 0, true),
        children: driverListDisplay.map(function (d) {
          var driverData = driverMap.get(d.driverId);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
            id: d.driverId,
            textCenter: driverData.driver.driverCode,
            textRight: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? d.gap === 0 ? 'Interval' : typeof d.gap === 'number' ? d.gap.toFixed(3).toString() : d.gap.toString() : d.timeDsp,
            orderNumber: d.position,
            color: driverData.driver.constructorColor,
            checked: d.enabled,
            style: hoveredDriver ? d.driverId === props.driver ? {
              opacity: 1
            } : {
              opacity: 0.5
            } : null,
            onChange: function onChange(e) {
              return props.setDriverList(props.driverList.map(function (l) {
                return _objectSpread(_objectSpread({}, l), {}, {
                  enabled: d.driverId === l.driverId ? !l.enabled : l.enabled
                });
              }));
            },
            onMouseEnter: function onMouseEnter(e) {
              return d.enabled ? props.setDriver(d.driverId) : null;
            },
            onMouseLeave: function onMouseLeave(e) {
              return props.setDriver(null);
            }
          }, d.driverId, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 45
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-2450613129" + " " + 'main-top',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
        options: lapsArray,
        value: props.lap,
        onChange: props.setLap
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "main-graph-title",
      className: "jsx-2450613129",
      children: props.driver ? 'LAP TIMES FOR ' + driverMap.get(props.driver).driver.driverCode : 'LAP TIMES'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-2450613129" + " " + 'main',
      children: ["minY=", driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime - 5, "maxY=", driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime * 2, "xSelected=", props.lap, "seriesSelected=", props.driver, "onSeriesHover=", function (d) {
        return props.setDriver(null);
      }, "onSeriesBlur=", function () {
        return props.setDriver(null);
      }, "/> }"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-2450613129" + " " + 'right-column',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "jsx-2450613129" + " " + 'right-top-column',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_DriverSummaryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          data: props.driverList.find(function (d) {
            return d.enabled && d.driverId === props.driver;
          }) ? driverMap.get(props.driver) : null,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: "Fastest Lap",
            rows: [{
              label: 'Rank',
              value: props.driver ? driverMap.get(props.driver).raceStats.fastestLapRank : null
            }, {
              label: 'Lap',
              value: props.driver ? driverMap.get(props.driver).raceStats.fastestLapNumber : null
            }, {
              label: 'Time',
              value: props.driver ? driverMap.get(props.driver).raceStats.fastestLapTime : null
            }, {
              label: 'Speed',
              value: props.driver ? driverMap.get(props.driver).raceStats.fastestLapSpeed + ' ' + driverMap.get(props.driver).raceStats.fastestLapUnits : null
            }]
          }, 'fastest', false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: "Slowest Lap",
            rows: [{
              label: 'Lap',
              value: props.driver ? driverMap.get(props.driver).raceStats.slowestLapNetPit : null
            }, {
              label: 'Time',
              value: props.driver ? driverMap.get(props.driver).raceStats.slowestLapNetPitTime.toFixed(3) : null
            }]
          }, 'slowest', false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: "Lap Pace",
            rows: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? [{
              label: 'Lap ' + props.lap,
              value: props.driver && driverMap.get(props.driver).lapsCompleted >= props.lap ? driverMap.get(props.driver).laps[props.lap].time.toFixed(3) : null
            }] : [{
              label: 'Avg',
              value: props.driver ? driverMap.get(props.driver).raceStats.avgLapNetPitTime.toFixed(3) : null
            }, {
              label: 'Std Dev',
              value: props.driver ? Math.sqrt(driverMap.get(props.driver).raceStats.varianceNetPitTime).toFixed(3) : null
            }]
          }, 'pace', false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "right-bottom-graph-title",
        className: "jsx-2450613129",
        children: histogram ? 'LAP TIME HISTOGRAM' : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "jsx-2450613129" + " " + 'right-bottom-column',
        children: histogram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_graphs_BarGraph__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: histogram,
          onSeriesHover: function onSeriesHover(d) {
            return props.setDriver(d);
          },
          onSeriesBlur: function onSeriesBlur() {
            return props.setDriver(null);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2450613129",
      children: ".grid-container.jsx-2450613129{display:grid;grid-template-columns:auto 2fr 1fr;grid-template-rows:auto 1fr;height:100%;min-height:500px;}.left-column.jsx-2450613129{grid-column:1;grid-row:1/3;background-color:transparent;}.right-column.jsx-2450613129{grid-column:3;grid-row:1/3;background-color:transparent;display:grid;grid-template-rows:1fr 1fr;}.main-top.jsx-2450613129{grid-column:2;grid-row:1;min-height:2rem;margin-left:35px;margin-right:70px;background-color:transparent;padding-top:15px;}#main-graph-title.jsx-2450613129{position:fixed;left:15%;top:25%;font-size:3rem;opacity:.15;z-index:2;}.main.jsx-2450613129{grid-column:2;grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;min-height:500px;height:100%;}#right-bottom-graph-title.jsx-2450613129{position:fixed;left:75%;top:58%;font-size:1rem;opacity:.15;z-index:2;}.right-top-column.jsx-2450613129{grid-row:1;background-color:transparent;}.right-bottom-column.jsx-2450613129{grid-row:2;background-color:transparent;}h1.jsx-2450613129{margin:0;padding:0;font-size:1rem;}h2.jsx-2450613129{margin:0;padding:0;font-size:0.75rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxkcml2ZXItZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TG9CLEFBR3lCLEFBT0MsQUFLQSxBQU9BLEFBU0UsQUFRRixBQVVFLEFBUUwsQUFJQSxBQUlGLEFBS0EsU0FKQyxBQUtBLEVBYm1CLEFBSUEsRUExRE0sQ0FPdEIsQUFLQSxBQU9GLEFBaUJBLENBUkYsQUFrQkEsSUFpQk0sQUFLRyxLQXZDVixBQWtCQSxDQTNCUSxBQWlCUyxFQTdCSSxBQUtBLEtBaUJkLEFBa0JBLEVBZ0JsQixHQUtBLEdBZEEsQUFJQSxDQXRDb0IsTUFVTCxBQWtCQSxDQWhEZ0IsRUFxQ3lVLE1BN0J4VyxBQUtnQixFQVFLLENBVVIsQUFrQkEsVUFuQ2lCLEFBa0I5QixBQWtCQSxPQWpEZSxBQXFCa0IsWUFwQmIsUUFhcEIsU0FaQSxBQW9Cb0IsaUJBQ3BCLHFRQWM4RCx1REFDSCxvREFDdkMsaUJBQ0wsWUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXG1vYmlsZWRhblxcQ29kZVxcZjEtZ3JhcGhzXFxwYWdlc1xcZHJpdmVyLWRldGFpbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vUmFuZ2VTbGlkZXIvUmFuZ2VTbGlkZXInO1xyXG5pbXBvcnQgRHJpdmVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlckxpc3QvRHJpdmVyTGlzdCc7XHJcbmltcG9ydCBEcml2ZXJMaXN0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlckxpc3QvRHJpdmVyTGlzdEl0ZW0nO1xyXG5pbXBvcnQgRHJpdmVyU3VtbWFyeUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJTdW1tYXJ5Q2FyZC9Ecml2ZXJTdW1tYXJ5Q2FyZCc7XHJcbmltcG9ydCBTdW1tYXJ5Q2FyZFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJTdW1tYXJ5Q2FyZC9TdW1tYXJ5Q2FyZFNlY3Rpb24nO1xyXG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9ncmFwaHMvQmFyR3JhcGgnO1xyXG5pbXBvcnQgU2NhdHRlckdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JhcGhzL1NjYXR0ZXJHcmFwaCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvQXBwVHlwZXMnO1xyXG5pbXBvcnQgdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyBmcm9tICcuLi91dGlscy9ob29rcy91c2VSZXN1bHRzTGFwc1BpdHN0b3BzJztcclxuaW1wb3J0IHVzZUhpc3RvZ3JhbSBmcm9tICcuLi91dGlscy9ob29rcy91c2VIaXN0b2dyYW0nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nL0xvYWRpbmcnO1xyXG5cclxuLypEZXRhaWwgZm9yIGEgc2luZ2xlIGRyaXZlciBhdCBhIHRpbWVcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJpdmVyRGV0YWlsKHByb3BzOkFwcFN0YXRlKXtcclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIGVycm9yLCByYWNlRGV0YWlscywgZHJpdmVyTWFwfSA9IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMocHJvcHMuc2Vhc29uLCBwcm9wcy5yb3VuZCk7XHJcbiAgICBjb25zdCBob3ZlcmVkRHJpdmVyID0gcHJvcHMuZHJpdmVyJiZwcm9wcy5kcml2ZXJMaXN0JiZwcm9wcy5kcml2ZXJMaXN0LmZpbmQoZD0+ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlciAmJiBkLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgP3RydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2U7XHJcbiAgICBjb25zdCBoaXN0b2dyYW0gPXVzZUhpc3RvZ3JhbShwcm9wcy5zZWFzb24sIHByb3BzLnJvdW5kLHByb3BzLmRyaXZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5sYXBzOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcjp1bmRlZmluZWQpO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZ3x8IXByb3BzLmRyaXZlckxpc3Qpe1xyXG4gICAgICAgIHJldHVybiA8TG9hZGluZy8+XHJcbiAgICB9IFxyXG4gICAgY29uc3QgbGFwc0FycmF5ID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPD1yYWNlRGV0YWlscy5udW1MYXBzOyBpKyspe1xyXG4gICAgICAgIGxhcHNBcnJheS5wdXNoKHt2YWx1ZTppLGxhYmVsOml9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNpbmdsZUxhcERhdGEgPSBwcm9wcy5kcml2ZXJMaXN0Lm1hcChkPT5cclxuICAgICAgICB7cmV0dXJuIGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChmZixpbmRleCxhcnIpPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmxhcCYmcHJvcHMubGFwPjA/ZmYubGFwTnVtPT09cHJvcHMubGFwXHJcbiAgICAgICAgICAgICAgICA6KGluZGV4PT09YXJyLmxlbmd0aC0xJiZmZi5sYXBOdW0+PXJhY2VEZXRhaWxzLm51bUxhcHMtMSkpXHJcbiAgICAgICAgICAgIC5tYXAobD0+KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyaXZlcklkOmwuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhcHNDb21wbGV0ZWQ6IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgICAgICBsYXBOdW06bC5sYXBOdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOmwuZ2FwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uR2FwOmwucG9zaXRpb25HYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246bC5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOmwudGltZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lRHNwOmwudGltZURzcCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFRpbWU6bC50b3RhbFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGl0U3RvcFRpbWU6bC5waXRTdG9wVGltZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lTmV0UGl0U3RvcDpsLnRpbWVOZXRQaXRTdG9wXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICApLmZsYXQoKVxyXG4gICAgICAgIC5zb3J0KChhLGIpPT5hLnBvc2l0aW9uLWIucG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgZHJpdmVyTGlzdERpc3BsYXkgPSBwcm9wcy5kcml2ZXJMaXN0Lm1hcChkPT4oe1xyXG4gICAgICAgIGRyaXZlcklkOmQuZHJpdmVySWQsXHJcbiAgICAgICAgZW5hYmxlZDpkLmVuYWJsZWQsXHJcbiAgICAgICAgZHJpdmVyQ29kZTpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLFxyXG4gICAgICAgIGNvbnN0cnVjdG9yQ29sb3I6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICB0aW1lOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS50aW1lOidPVVQnXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VUaW1lLFxyXG4gICAgICAgIHRpbWVEc3A6cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnRpbWVEc3A6J09VVCdcclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVRpbWVEc3AsXHJcbiAgICAgICAgZ2FwOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS5nYXA6J09VVCdcclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVRpbWVEc3AsXHJcbiAgICAgICAgcG9zaXRpb25HYXA6cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uR2FwOidPVVQnXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VUaW1lRHNwLFxyXG4gICAgICAgIHBvc2l0aW9uOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS5wb3NpdGlvbjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uLFxyXG4gICAgfSkpLnNvcnQoKGEsYik9PmEucG9zaXRpb24tYi5wb3NpdGlvbik7ICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQtY29sdW1uJz4gIFxyXG4gICAgICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICAvL3N0eWxlPXt7aGVpZ2h0OicxMDAlJywgZ3JpZFRlbXBsYXRlQ29sdW1uczonYXV0byAwLjc1ZnIgYXV0byd9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOjB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXshcHJvcHMubGFwfHxwcm9wcy5sYXA9PT0wfHxwcm9wcy5sYXA+PXJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPzxoMT5GaW5hbCBSZXN1bHRzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA6PD48aDE+TEFQPC9oMT48aDI+e3Byb3BzLmxhcH0ve3JhY2VEZXRhaWxzLm51bUxhcHN9PC9oMj48Lz59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZHJpdmVyTGlzdERpc3BsYXkubWFwKGQ9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPERyaXZlckxpc3RJdGVtIGtleT17ZC5kcml2ZXJJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkLmRyaXZlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyPXtkcml2ZXJEYXRhLmRyaXZlci5kcml2ZXJDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UmlnaHQ9e3Byb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ZC5nYXA9PT0wPydJbnRlcnZhbCc6dHlwZW9mIGQuZ2FwPT09J251bWJlcic/ZC5nYXAudG9GaXhlZCgzKS50b1N0cmluZygpOmQuZ2FwLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkLnRpbWVEc3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17ZC5wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tdG9wJz5cclxuICAgICAgICAgICAgPFJhbmdlU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmxhcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNldExhcH1cclxuICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluLWdyYXBoLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXI/J0xBUCBUSU1FUyBGT1IgJytkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikuZHJpdmVyLmRyaXZlckNvZGU6J0xBUCBUSU1FUyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtaW5ZPXtkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlckxpc3RbMF0uZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZS01fVxyXG4gICAgICAgICAgICBtYXhZPXtkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlckxpc3RbMF0uZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZSoyfVxyXG4gICAgICAgICAgICB4U2VsZWN0ZWQ9e3Byb3BzLmxhcH1cclxuICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgb25TZXJpZXNIb3Zlcj17KGQpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgIG9uU2VyaWVzQmx1cj17KCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LWNvbHVtbic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC10b3AtY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxEcml2ZXJTdW1tYXJ5Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kcml2ZXJMaXN0LmZpbmQoZD0+ZC5lbmFibGVkJiZkLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5Q2FyZFNlY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2Zhc3Rlc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nRmFzdGVzdCBMYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidSYW5rJyx2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwUmFuazpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0xhcCcsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBOdW1iZXI6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidUaW1lJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWU6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU3BlZWQnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwU3BlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKycgJytkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBVbml0czpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdzbG93ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J1Nsb3dlc3QgTGFwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdDpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1RpbWUnLHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXRUaW1lLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5Q2FyZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ncGFjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdMYXAgUGFjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e3Byb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidMYXAgJytwcm9wcy5sYXAsIHZhbHVlOnByb3BzLmRyaXZlciYmZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikubGFwc1twcm9wcy5sYXBdLnRpbWUudG9GaXhlZCgzKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0F2ZycsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWUudG9GaXhlZCgzKTpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidTdGQgRGV2Jyx2YWx1ZTpwcm9wcy5kcml2ZXI/TWF0aC5zcXJ0KGRyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lKS50b0ZpeGVkKDMpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJpdmVyU3VtbWFyeUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3JpZ2h0LWJvdHRvbS1ncmFwaC10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2hpc3RvZ3JhbT8nTEFQIFRJTUUgSElTVE9HUkFNJzonJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LWJvdHRvbS1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoaXN0b2dyYW0/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJHcmFwaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aGlzdG9ncmFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3Zlcj17KGQpPT5wcm9wcy5zZXREcml2ZXIoZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXI9eygpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZ3JpZC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMmZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gMWZyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnQtY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoxO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxLzM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjEvMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tdG9wIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNtYWluLWdyYXBoLXRpdGxlIHsgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgICAgIGxlZnQ6MTUlO1xyXG4gICAgICAgICAgICB0b3A6MjUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6M3JlbTtcclxuICAgICAgICAgICAgb3BhY2l0eTouMTU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjI7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzE2MWYyZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApIDIwJSwgcmdiYSgwLDAsMCwwKSA4MCUsIHJnYmEoMCwwLDAsMSkpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxNjFmMmQgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgIzE2MWYyZCA3NSUsICMxNjFmMmQpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxNjFmMmQgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgIzE2MWYyZCA3NSUsICMxNjFmMmQpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoOCwgOCwgOCksIHJnYigzMiwgMzIsIDMyKSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMHB4IDEwcHgsIDEwcHggMTBweCwgMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDBweCAwcHgsIDVweCA1cHgsIDBweCAwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjcmlnaHQtYm90dG9tLWdyYXBoLXRpdGxlIHsgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgICAgIGxlZnQ6NzUlO1xyXG4gICAgICAgICAgICB0b3A6NTglO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgb3BhY2l0eTouMTU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LXRvcC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC1ib3R0b20tY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcblxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\pages\\\\driver-detail.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, this);
}

_s(DriverDetail, "MBtuQ8Lkfy7GTywCfxbSy4sBzms=", false, function () {
  return [_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_9__["default"], _utils_hooks_useHistogram__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = DriverDetail;

var _c;

$RefreshReg$(_c, "DriverDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLWRldGFpbC50c3giXSwibmFtZXMiOlsiRHJpdmVyRGV0YWlsIiwicHJvcHMiLCJ1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIiwic2Vhc29uIiwicm91bmQiLCJpc0xvYWRpbmciLCJlcnJvciIsInJhY2VEZXRhaWxzIiwiZHJpdmVyTWFwIiwiaG92ZXJlZERyaXZlciIsImRyaXZlciIsImRyaXZlckxpc3QiLCJmaW5kIiwiZCIsImRyaXZlcklkIiwiZW5hYmxlZCIsImhpc3RvZ3JhbSIsInVzZUhpc3RvZ3JhbSIsImdldCIsImxhcHMiLCJ1bmRlZmluZWQiLCJjb25zdHJ1Y3RvckNvbG9yIiwibGFwc0FycmF5IiwiaSIsIm51bUxhcHMiLCJwdXNoIiwidmFsdWUiLCJsYWJlbCIsInNpbmdsZUxhcERhdGEiLCJtYXAiLCJmaWx0ZXIiLCJmZiIsImluZGV4IiwiYXJyIiwibGFwIiwibGFwTnVtIiwibGVuZ3RoIiwibCIsImRpc2FibGVkIiwiY29sb3IiLCJsYXBzQ29tcGxldGVkIiwiZ2FwIiwicG9zaXRpb25HYXAiLCJwb3NpdGlvbiIsInRpbWUiLCJ0aW1lRHNwIiwidG90YWxUaW1lIiwicGl0U3RvcFRpbWUiLCJ0aW1lTmV0UGl0U3RvcCIsImZsYXQiLCJzb3J0IiwiYSIsImIiLCJkcml2ZXJMaXN0RGlzcGxheSIsImRyaXZlckNvZGUiLCJyYWNlVGltZSIsInJhY2VUaW1lRHNwIiwiZW5kaW5nUG9zaXRpb24iLCJwYWRkaW5nIiwiZHJpdmVyRGF0YSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsIm9wYWNpdHkiLCJlIiwic2V0RHJpdmVyTGlzdCIsInNldERyaXZlciIsInNldExhcCIsInJhY2VTdGF0cyIsImZhc3Rlc3RMYXBUaW1lIiwiZmFzdGVzdExhcFJhbmsiLCJmYXN0ZXN0TGFwTnVtYmVyIiwiZmFzdGVzdExhcFNwZWVkIiwiZmFzdGVzdExhcFVuaXRzIiwic2xvd2VzdExhcE5ldFBpdCIsInNsb3dlc3RMYXBOZXRQaXRUaW1lIiwiYXZnTGFwTmV0UGl0VGltZSIsIk1hdGgiLCJzcXJ0IiwidmFyaWFuY2VOZXRQaXRUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQXFDO0FBQUE7O0FBQUE7O0FBQUEsOEJBQ0dDLG1GQUFzQixDQUFDRCxLQUFLLENBQUNFLE1BQVAsRUFBZUYsS0FBSyxDQUFDRyxLQUFyQixDQUR6QjtBQUFBLE1BQ3pDQyxTQUR5Qyx5QkFDekNBLFNBRHlDO0FBQUEsTUFDOUJDLEtBRDhCLHlCQUM5QkEsS0FEOEI7QUFBQSxNQUN2QkMsV0FEdUIseUJBQ3ZCQSxXQUR1QjtBQUFBLE1BQ1ZDLFNBRFUseUJBQ1ZBLFNBRFU7O0FBRWhELE1BQU1DLGFBQWEsR0FBR1IsS0FBSyxDQUFDUyxNQUFOLElBQWNULEtBQUssQ0FBQ1UsVUFBcEIsSUFBZ0NWLEtBQUssQ0FBQ1UsVUFBTixDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLFdBQUVBLENBQUMsQ0FBQ0MsUUFBRixLQUFhYixLQUFLLENBQUNTLE1BQW5CLElBQTZCRyxDQUFDLENBQUNFLE9BQWpDO0FBQUEsR0FBdkIsQ0FBaEMsR0FDQyxJQURELEdBRUMsS0FGdkI7QUFHQSxNQUFNQyxTQUFTLEdBQUVDLDBFQUFZLENBQUNoQixLQUFLLENBQUNFLE1BQVAsRUFBZUYsS0FBSyxDQUFDRyxLQUFyQixFQUEyQkgsS0FBSyxDQUFDUyxNQUFqQyxFQUNUVCxLQUFLLENBQUNTLE1BQU4sR0FBYUYsU0FBUyxDQUFDVSxHQUFWLENBQWNqQixLQUFLLENBQUNTLE1BQXBCLEVBQTRCUyxJQUF6QyxHQUE4Q0MsU0FEckMsRUFFVG5CLEtBQUssQ0FBQ1MsTUFBTixHQUFhRixTQUFTLENBQUNVLEdBQVYsQ0FBY2pCLEtBQUss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b0VsQixPQUFwRSxDQUE0RSxDQUE1RSxDQUFiLEdBQTRGO0FBQW5ILGFBRko7QUFSUixhQUNRLE1BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBMENJO0FBQUssVUFBRSxFQUFDLDBCQUFSO0FBQUE7QUFBQSxrQkFDSzVDLFNBQVMsR0FBQyxvQkFBRCxHQUFzQjtBQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNKLGVBNkNJO0FBQUEsNENBQWUscUJBQWY7QUFBQSxrQkFDS0EsU0FBUyxnQkFDTixxRUFBQyxtRUFBRDtBQUNJLGNBQUksRUFBRUEsU0FEVjtBQUVJLHVCQUFhLEVBQUUsdUJBQUNILENBQUQ7QUFBQSxtQkFBS1osS0FBSyxDQUFDZ0UsU0FBTixDQUFnQnBELENBQWhCLENBQUw7QUFBQSxXQUZuQjtBQUdJLHNCQUFZLEVBQUU7QUFBQSxtQkFBSVosS0FBSyxDQUFDZ0UsU0FBTixDQUFnQixJQUFoQixDQUFKO0FBQUE7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETSxHQU9UO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwTEg7O0dBMVB1QmpFLFk7VUFDK0JFLDJFLEVBSWxDZSxrRTs7O0tBTEdqQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci1kZXRhaWwuOTBlNGFhYjM0NWM0YzQ5MjdiNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYW5nZVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9SYW5nZVNsaWRlci9SYW5nZVNsaWRlcic7XHJcbmltcG9ydCBEcml2ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0JztcclxuaW1wb3J0IERyaXZlckxpc3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0SXRlbSc7XHJcbmltcG9ydCBEcml2ZXJTdW1tYXJ5Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlclN1bW1hcnlDYXJkL0RyaXZlclN1bW1hcnlDYXJkJztcclxuaW1wb3J0IFN1bW1hcnlDYXJkU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlclN1bW1hcnlDYXJkL1N1bW1hcnlDYXJkU2VjdGlvbic7XHJcbmltcG9ydCBCYXJHcmFwaCBmcm9tICcuLi9jb21wb25lbnRzL2dyYXBocy9CYXJHcmFwaCc7XHJcbmltcG9ydCBTY2F0dGVyR3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9ncmFwaHMvU2NhdHRlckdyYXBoJztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi90eXBlcy9BcHBUeXBlcyc7XHJcbmltcG9ydCB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIGZyb20gJy4uL3V0aWxzL2hvb2tzL3VzZVJlc3VsdHNMYXBzUGl0c3RvcHMnO1xyXG5pbXBvcnQgdXNlSGlzdG9ncmFtIGZyb20gJy4uL3V0aWxzL2hvb2tzL3VzZUhpc3RvZ3JhbSc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmcvTG9hZGluZyc7XHJcblxyXG4vKkRldGFpbCBmb3IgYSBzaW5nbGUgZHJpdmVyIGF0IGEgdGltZVxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcml2ZXJEZXRhaWwocHJvcHM6QXBwU3RhdGUpe1xyXG4gICAgY29uc3Qge2lzTG9hZGluZywgZXJyb3IsIHJhY2VEZXRhaWxzLCBkcml2ZXJNYXB9ID0gdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyhwcm9wcy5zZWFzb24sIHByb3BzLnJvdW5kKTtcclxuICAgIGNvbnN0IGhvdmVyZWREcml2ZXIgPSBwcm9wcy5kcml2ZXImJnByb3BzLmRyaXZlckxpc3QmJnByb3BzLmRyaXZlckxpc3QuZmluZChkPT5kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyICYmIGQuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpmYWxzZTtcclxuICAgIGNvbnN0IGhpc3RvZ3JhbSA9dXNlSGlzdG9ncmFtKHByb3BzLnNlYXNvbiwgcHJvcHMucm91bmQscHJvcHMuZHJpdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmxhcHM6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yOnVuZGVmaW5lZCk7XHJcblxyXG4gICAgaWYoaXNMb2FkaW5nfHwhcHJvcHMuZHJpdmVyTGlzdCl7XHJcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nLz5cclxuICAgIH0gXHJcbiAgICBjb25zdCBsYXBzQXJyYXkgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8PXJhY2VEZXRhaWxzLm51bUxhcHM7IGkrKyl7XHJcbiAgICAgICAgbGFwc0FycmF5LnB1c2goe3ZhbHVlOmksbGFiZWw6aX0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2luZ2xlTGFwRGF0YSA9IHByb3BzLmRyaXZlckxpc3QubWFwKGQ9PlxyXG4gICAgICAgIHtyZXR1cm4gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGZmLGluZGV4LGFycik9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMubGFwJiZwcm9wcy5sYXA+MD9mZi5sYXBOdW09PT1wcm9wcy5sYXBcclxuICAgICAgICAgICAgICAgIDooaW5kZXg9PT1hcnIubGVuZ3RoLTEmJmZmLmxhcE51bT49cmFjZURldGFpbHMubnVtTGFwcy0xKSlcclxuICAgICAgICAgICAgLm1hcChsPT4oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJpdmVySWQ6bC5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDohZC5lbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFwc0NvbXBsZXRlZDogZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhcE51bTpsLmxhcE51bSxcclxuICAgICAgICAgICAgICAgICAgICBnYXA6bC5nYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25HYXA6bC5wb3NpdGlvbkdhcCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpsLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6bC50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVEc3A6bC50aW1lRHNwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsVGltZTpsLnRvdGFsVGltZSxcclxuICAgICAgICAgICAgICAgICAgICBwaXRTdG9wVGltZTpsLnBpdFN0b3BUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVOZXRQaXRTdG9wOmwudGltZU5ldFBpdFN0b3BcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgICkuZmxhdCgpXHJcbiAgICAgICAgLnNvcnQoKGEsYik9PmEucG9zaXRpb24tYi5wb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBkcml2ZXJMaXN0RGlzcGxheSA9IHByb3BzLmRyaXZlckxpc3QubWFwKGQ9Pih7XHJcbiAgICAgICAgZHJpdmVySWQ6ZC5kcml2ZXJJZCxcclxuICAgICAgICBlbmFibGVkOmQuZW5hYmxlZCxcclxuICAgICAgICBkcml2ZXJDb2RlOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCksXHJcbiAgICAgICAgY29uc3RydWN0b3JDb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgIHRpbWU6cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnRpbWU6J09VVCdcclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVRpbWUsXHJcbiAgICAgICAgdGltZURzcDpwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0udGltZURzcDonT1VUJ1xyXG4gICAgICAgICAgICA6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlVGltZURzcCxcclxuICAgICAgICBnYXA6cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLmdhcDonT1VUJ1xyXG4gICAgICAgICAgICA6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlVGltZURzcCxcclxuICAgICAgICBwb3NpdGlvbkdhcDpwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0ucG9zaXRpb25HYXA6J09VVCdcclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVRpbWVEc3AsXHJcbiAgICAgICAgcG9zaXRpb246cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb25cclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24sXHJcbiAgICB9KSkuc29ydCgoYSxiKT0+YS5wb3NpdGlvbi1iLnBvc2l0aW9uKTsgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdC1jb2x1bW4nPiAgXHJcbiAgICAgICAgICAgICAgICA8RHJpdmVyTGlzdCBcclxuICAgICAgICAgICAgICAgIC8vc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJ319XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyFwcm9wcy5sYXB8fHByb3BzLmxhcD09PTB8fHByb3BzLmxhcD49cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/PGgxPkZpbmFsIFJlc3VsdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDo8PjxoMT5MQVA8L2gxPjxoMj57cHJvcHMubGFwfS97cmFjZURldGFpbHMubnVtTGFwc308L2gyPjwvPn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkcml2ZXJMaXN0RGlzcGxheS5tYXAoZD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJEYXRhID0gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RHJpdmVyTGlzdEl0ZW0ga2V5PXtkLmRyaXZlcklkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2QuZHJpdmVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXI9e2RyaXZlckRhdGEuZHJpdmVyLmRyaXZlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRSaWdodD17cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kLmdhcD09PTA/J0ludGVydmFsJzp0eXBlb2YgZC5nYXA9PT0nbnVtYmVyJz9kLmdhcC50b0ZpeGVkKDMpLnRvU3RyaW5nKCk6ZC5nYXAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmQudGltZURzcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTnVtYmVyPXtkLnBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZHJpdmVyRGF0YS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2QuZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hvdmVyZWREcml2ZXI/ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlcj97b3BhY2l0eToxfTp7b3BhY2l0eTowLjV9Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBwcm9wcy5zZXREcml2ZXJMaXN0KHByb3BzLmRyaXZlckxpc3QubWFwKGw9Pih7Li4ubCxlbmFibGVkOmQuZHJpdmVySWQ9PT1sLmRyaXZlcklkPyFsLmVuYWJsZWQ6bC5lbmFibGVkfSkpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSk9PmQuZW5hYmxlZD9wcm9wcy5zZXREcml2ZXIoZC5kcml2ZXJJZCk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSk9PnByb3BzLnNldERyaXZlcihudWxsKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi10b3AnPlxyXG4gICAgICAgICAgICA8UmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGFwc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuc2V0TGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4tZ3JhcGgtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmRyaXZlcj8nTEFQIFRJTUVTIEZPUiAnK2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5kcml2ZXIuZHJpdmVyQ29kZTonTEFQIFRJTUVTJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1pblk9e2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyTGlzdFswXS5kcml2ZXJJZCkucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lLTV9XHJcbiAgICAgICAgICAgIG1heFk9e2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyTGlzdFswXS5kcml2ZXJJZCkucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lKjJ9XHJcbiAgICAgICAgICAgIHhTZWxlY3RlZD17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICBzZXJpZXNTZWxlY3RlZD17cHJvcHMuZHJpdmVyfVxyXG4gICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtY29sdW1uJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LXRvcC1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPERyaXZlclN1bW1hcnlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QuZmluZChkPT5kLmVuYWJsZWQmJmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0nZmFzdGVzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdGYXN0ZXN0IExhcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1JhbmsnLHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBSYW5rOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcE51bWJlcjpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1RpbWUnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZTpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTcGVlZCcsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBTcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArJyAnK2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFVuaXRzOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUNhcmRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3Nsb3dlc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nU2xvd2VzdCBMYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidMYXAnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0Om51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonVGltZScsdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWUudG9GaXhlZCgzKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdwYWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0xhcCBQYWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHM/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0xhcCAnK3Byb3BzLmxhcCwgdmFsdWU6cHJvcHMuZHJpdmVyJiZkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5sYXBzW3Byb3BzLmxhcF0udGltZS50b0ZpeGVkKDMpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonQXZnJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZS50b0ZpeGVkKDMpOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1N0ZCBEZXYnLHZhbHVlOnByb3BzLmRyaXZlcj9NYXRoLnNxcnQoZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWUpLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecml2ZXJTdW1tYXJ5Q2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ncmlnaHQtYm90dG9tLWdyYXBoLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICB7aGlzdG9ncmFtPydMQVAgVElNRSBISVNUT0dSQU0nOicnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtYm90dG9tLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAge2hpc3RvZ3JhbT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhckdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtoaXN0b2dyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzQmx1cj17KCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byAyZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxZnI7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjE7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjEvMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MS8zO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi10b3Age1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo3MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI21haW4tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgICAgbGVmdDoxNSU7XHJcbiAgICAgICAgICAgIHRvcDoyNSU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtO1xyXG4gICAgICAgICAgICBvcGFjaXR5Oi4xNTtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMTYxZjJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkgMjAlLCByZ2JhKDAsMCwwLDApIDgwJSwgcmdiYSgwLDAsMCwxKSksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig4LCA4LCA4KSwgcmdiKDMyLCAzMiwgMzIpKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwcHggMTBweCwgMTBweCAxMHB4LCAxMHB4IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMHB4IDBweCwgNXB4IDVweCwgMHB4IDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNyaWdodC1ib3R0b20tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgICAgbGVmdDo3NSU7XHJcbiAgICAgICAgICAgIHRvcDo1OCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICBvcGFjaXR5Oi4xNTtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtdG9wLWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LWJvdHRvbS1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYH1cclxuXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=