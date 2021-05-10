webpackHotUpdate_N_E("pages/driver-summary",{

/***/ "./pages/driver-summary.tsx":
/*!**********************************!*\
  !*** ./pages/driver-summary.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DriverSummary; });
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Loading/Loading */ "./components/common/Loading/Loading.tsx");
/* harmony import */ var _components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/RangeSlider/RangeSlider */ "./components/common/RangeSlider/RangeSlider.tsx");
/* harmony import */ var _components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DriverList/DriverList */ "./components/DriverList/DriverList.tsx");
/* harmony import */ var _components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DriverList/DriverListItem */ "./components/DriverList/DriverListItem.tsx");
/* harmony import */ var _components_DriverSummaryCard_DriverSummaryCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DriverSummaryCard/DriverSummaryCard */ "./components/DriverSummaryCard/DriverSummaryCard.tsx");
/* harmony import */ var _components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DriverSummaryCard/SummaryCardSection */ "./components/DriverSummaryCard/SummaryCardSection.tsx");
/* harmony import */ var _components_graphs_BarGraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/graphs/BarGraph */ "./components/graphs/BarGraph.tsx");
/* harmony import */ var _components_graphs_DriverSummaryGraph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/graphs/DriverSummaryGraph */ "./components/graphs/DriverSummaryGraph.tsx");
/* harmony import */ var _utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/hooks/useResultsLapsPitstops */ "./utils/hooks/useResultsLapsPitstops.ts");




var _jsxFileName = "C:\\Users\\mobiledan\\Code\\f1-graphs\\pages\\driver-summary.tsx",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function DriverSummary(props) {
  _s();

  var _this = this;

  var _useResultsLapsPitsto = Object(_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_11__["default"])(props.season, props.round),
      isLoading = _useResultsLapsPitsto.isLoading,
      error = _useResultsLapsPitsto.error,
      raceDetails = _useResultsLapsPitsto.raceDetails,
      driverMap = _useResultsLapsPitsto.driverMap;

  var hoveredDriver = props.driver && props.driverList && props.driverList.find(function (d) {
    return d.driverId === props.driver && d.enabled;
  }) ? true : false;

  if (isLoading || !props.driverList || !raceDetails) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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

  console.log(driverMap);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "jsx-82831607" + " " + 'grid-container',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-82831607" + " " + 'left-column',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_5__["default"] //style={{height:'100%', gridTemplateColumns:'auto 0.75fr auto'}}
      , {
        style: {
          padding: 0
        },
        title: !props.lap || props.lap === 0 || props.lap >= raceDetails.numLaps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "jsx-82831607",
          children: "Final Results"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 26
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            className: "jsx-82831607",
            children: "LAP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 24
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
            className: "jsx-82831607",
            children: [props.lap, "/", raceDetails.numLaps]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 36
          }, this)]
        }, void 0, true),
        children: props.driverList && driverMap ? props.driverList.map(function (c) {
          return c;
        }).sort(function (a, b) {
          return driverMap.get(a.driverId).endingPosition - driverMap.get(b.driverId).endingPosition;
        }).map(function (d, index) {
          var driverData = driverMap.get(d.driverId);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: d.driverId,
            textCenter: driverData.driver.driverCode,
            textRight: driverData.raceTimeDsp,
            orderNumber: index + 1,
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
            lineNumber: 39,
            columnNumber: 45
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-82831607" + " " + 'main-top',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        options: lapsArray,
        value: props.lap,
        onChange: props.setLap
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-82831607" + " " + 'main',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_graphs_DriverSummaryGraph__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: props.driverList.map(function (d) {
          return {
            key: d.driverId,
            disabled: !d.enabled,
            x: driverMap.get(d.driverId).endingPosition,
            xLabel: driverMap.get(d.driverId).driver.driverCode,
            yLow: driverMap.get(d.driverId).raceStats.slowestLapNetPitTime ? -1 * driverMap.get(d.driverId).raceStats.slowestLapNetPitTime : -1 * driverMap.get(d.driverId).raceStats.slowestLapTime,
            yHigh: -1 * driverMap.get(d.driverId).raceStats.fastestLapTime,
            yBoxLow: -1 * (driverMap.get(d.driverId).raceStats.avgLapNetPitTime + Math.sqrt(driverMap.get(d.driverId).raceStats.varianceNetPitTime * 2)),
            yBoxHigh: -1 * (driverMap.get(d.driverId).raceStats.avgLapNetPitTime - Math.sqrt(driverMap.get(d.driverId).raceStats.varianceNetPitTime * 2)),
            color: driverMap.get(d.driverId).driver.constructorColor
          };
        }).filter(function (f) {
          return f.yBoxLow < 0;
        }),
        markData: props.driverList.map(function (d) {
          return {
            key: d.driverId,
            x: driverMap.get(d.driverId).endingPosition,
            y: props.lap && props.lap > 0 ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].time * -1 : 0 : driverMap.get(d.driverId).raceStats.avgLapNetPitTime * -1,
            xLabel: driverMap.get(d.driverId).driver.driverCode,
            color: driverMap.get(d.driverId).driver.constructorColor,
            disabled: !d.enabled
          };
        }).filter(function (f) {
          return f.y < 0;
        }),
        seriesSelected: props.driver,
        onSeriesHover: function onSeriesHover(d) {
          return props.setDriver(d);
        },
        onSeriesBlur: function onSeriesBlur() {
          return props.setDriver(null);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-82831607" + " " + 'right-column',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "jsx-82831607" + " " + 'right-top-column',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_DriverSummaryCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          data: props.driverList.find(function (d) {
            return d.enabled && d.driverId === props.driver;
          }) ? driverMap.get(props.driver) : null,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
            lineNumber: 98,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
            lineNumber: 109,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "Race Pace",
            rows: [{
              label: 'Avg',
              value: props.driver ? driverMap.get(props.driver).raceStats.avgLapNetPitTime.toFixed(3) : null
            }, {
              label: 'Std Dev',
              value: props.driver ? Math.sqrt(driverMap.get(props.driver).raceStats.varianceNetPitTime).toFixed(3) : null
            }]
          }, 'racepace', false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this), props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverSummaryCard_SummaryCardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "Lap Pace",
            rows: [{
              label: 'Lap ' + props.lap,
              value: props.driver && driverMap.get(props.driver).lapsCompleted >= props.lap ? driverMap.get(props.driver).laps[props.lap].time.toFixed(3) : null
            }]
          }, 'pace', false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "right-bottom-graph-title",
        className: "jsx-82831607",
        children: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? 'LAP TIME' : 'AVG LAP TIME'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "jsx-82831607" + " " + 'right-bottom-column',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_graphs_BarGraph__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: props.driverList.map(function (d) {
            return {
              key: d.driverId,
              x: driverMap.get(d.driverId).endingPosition,
              y: props.lap && props.lap > 0 ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? driverMap.get(d.driverId).laps[props.lap].time : 0 : driverMap.get(d.driverId).raceStats.avgLapNetPitTime,
              xLabel: driverMap.get(d.driverId).driver.driverCode,
              color: driverMap.get(d.driverId).driver.constructorColor,
              disabled: props.lap && props.lap > 0 ? driverMap.get(d.driverId).lapsCompleted >= props.lap ? !d.enabled : true : !d.enabled
            };
          }),
          minY: driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime - 3,
          maxY: driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime * 1.5,
          xSelected: props.lap,
          seriesSelected: props.driver,
          onSeriesHover: function onSeriesHover(d) {
            return props.setDriver(d);
          },
          onSeriesBlur: function onSeriesBlur() {
            return props.setDriver(null);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "82831607",
      children: ".grid-container.jsx-82831607{display:grid;grid-template-columns:auto 2fr 1fr;grid-template-rows:auto 1fr;height:100%;min-height:500px;}.left-column.jsx-82831607{grid-column:1;grid-row:1/3;background-color:transparent;}.right-column.jsx-82831607{grid-column:3;grid-row:1/3;background-color:transparent;display:grid;grid-template-rows:1fr 1fr;}.main-top.jsx-82831607{grid-column:2;grid-row:1;min-height:2rem;margin-left:35px;margin-right:50px;background-color:transparent;padding-top:15px;}.main.jsx-82831607{grid-column:2;grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;min-height:500px;height:100%;}#right-bottom-graph-title.jsx-82831607{position:fixed;left:75%;top:58%;font-size:1rem;opacity:.15;z-index:2;}.right-top-column.jsx-82831607{grid-row:1;background:transparent;}.right-bottom-column.jsx-82831607{grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;}h1.jsx-82831607{margin:0;padding:0;font-size:1rem;}h2.jsx-82831607{margin:0;padding:0;font-size:0.75rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxkcml2ZXItc3VtbWFyeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtvQixBQUd5QixBQU9DLEFBS0EsQUFPQSxBQVNBLEFBVUUsQUFRTCxBQUlBLEFBT0YsQUFLQSxTQUpDLEFBS0EsRUFoQmEsQUFJRSxFQWxEVSxDQU90QixBQUtBLEFBT0YsQUFTQSxDQVVGLElBb0JNLEFBS0csS0F4QlYsQ0FuQlEsQUFTUyxFQXJCSSxBQUtBLEtBMkJkLEVBT2xCLEFBWUEsRUFSd1csQ0FheFcsSUEzQ29CLE1Bb0JMLENBeENnQixFQTZCeVUsTUFyQnhXLEFBS2dCLEVBUUssQ0FvQlIsVUEzQmlCLEFBNEI5QixPQXpDZSxBQXFCa0IsWUFwQmIsUUFhcEIsU0FaQSxBQW9Cb0IsaUJBQ3BCLHVQQTJCOEQsY0FyQkEseUNBc0JILGNBckJBLHNDQXNCM0QsY0FyQm9CLGlCQUNMLFlBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxtb2JpbGVkYW5cXENvZGVcXGYxLWdyYXBoc1xccGFnZXNcXGRyaXZlci1zdW1tYXJ5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmcvTG9hZGluZyc7XHJcbmltcG9ydCBSYW5nZVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9SYW5nZVNsaWRlci9SYW5nZVNsaWRlcic7XHJcbmltcG9ydCBEcml2ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0JztcclxuaW1wb3J0IERyaXZlckxpc3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0SXRlbSc7XHJcbmltcG9ydCBEcml2ZXJTdW1tYXJ5Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlclN1bW1hcnlDYXJkL0RyaXZlclN1bW1hcnlDYXJkJztcclxuaW1wb3J0IFN1bW1hcnlDYXJkU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlclN1bW1hcnlDYXJkL1N1bW1hcnlDYXJkU2VjdGlvbic7XHJcbmltcG9ydCBCYXJHcmFwaCBmcm9tICcuLi9jb21wb25lbnRzL2dyYXBocy9CYXJHcmFwaCc7XHJcbmltcG9ydCBEcml2ZXJTdW1tYXJ5R3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9ncmFwaHMvRHJpdmVyU3VtbWFyeUdyYXBoJztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi90eXBlcy9BcHBUeXBlcyc7XHJcbmltcG9ydCB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIGZyb20gJy4uL3V0aWxzL2hvb2tzL3VzZVJlc3VsdHNMYXBzUGl0c3RvcHMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcml2ZXJTdW1tYXJ5KHByb3BzOkFwcFN0YXRlKXtcclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIGVycm9yLCByYWNlRGV0YWlscywgZHJpdmVyTWFwfSA9IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMocHJvcHMuc2Vhc29uLCBwcm9wcy5yb3VuZCk7XHJcbiAgICBjb25zdCBob3ZlcmVkRHJpdmVyID0gcHJvcHMuZHJpdmVyJiZwcm9wcy5kcml2ZXJMaXN0JiZwcm9wcy5kcml2ZXJMaXN0LmZpbmQoZD0+ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlciAmJiBkLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgP3RydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2U7XHJcblxyXG4gICAgaWYoaXNMb2FkaW5nfHwhcHJvcHMuZHJpdmVyTGlzdHx8IXJhY2VEZXRhaWxzKXtcclxuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxyXG4gICAgfSBcclxuICAgIGNvbnN0IGxhcHNBcnJheSA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTw9cmFjZURldGFpbHMubnVtTGFwczsgaSsrKXtcclxuICAgICAgICBsYXBzQXJyYXkucHVzaCh7dmFsdWU6aSxsYWJlbDppfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkcml2ZXJNYXApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdC1jb2x1bW4nPiAgXHJcbiAgICAgICAgICAgICAgICA8RHJpdmVyTGlzdCBcclxuICAgICAgICAgICAgICAgIC8vc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJ319XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyFwcm9wcy5sYXB8fHByb3BzLmxhcD09PTB8fHByb3BzLmxhcD49cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/PGgxPkZpbmFsIFJlc3VsdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDo8PjxoMT5MQVA8L2gxPjxoMj57cHJvcHMubGFwfS97cmFjZURldGFpbHMubnVtTGFwc308L2gyPjwvPn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0JiZkcml2ZXJNYXA/cHJvcHMuZHJpdmVyTGlzdC5tYXAoYz0+YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKT0+ZHJpdmVyTWFwLmdldChhLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbiAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZCxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxEcml2ZXJMaXN0SXRlbSBrZXk9e2QuZHJpdmVySWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZC5kcml2ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENlbnRlcj17ZHJpdmVyRGF0YS5kcml2ZXIuZHJpdmVyQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFJpZ2h0PXtkcml2ZXJEYXRhLnJhY2VUaW1lRHNwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17aW5kZXgrMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi10b3AnPlxyXG4gICAgICAgICAgICA8UmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGFwc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuc2V0TGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxEcml2ZXJTdW1tYXJ5R3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZHJpdmVyTGlzdC5tYXAoZD0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpkLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5kcml2ZXJDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUxvdzpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0VGltZT8tMSpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0VGltZTotMSpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy5zbG93ZXN0TGFwVGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlIaWdoOi0xKmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUJveExvdzotMSooZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZStNYXRoLnNxcnQoZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lKjIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlCb3hIaWdoOi0xKihkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy5hdmdMYXBOZXRQaXRUaW1lLU1hdGguc3FydChkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWUqMikpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkuZmlsdGVyKGY9PmYueUJveExvdzwwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya0RhdGE9e3Byb3BzLmRyaXZlckxpc3QubWFwKGQ9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ZC5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6cHJvcHMubGFwJiZwcm9wcy5sYXA+MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0udGltZSotMTowXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWUqLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4TGFiZWw6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuZHJpdmVyQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDohZC5lbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5maWx0ZXIoZj0+Zi55PDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNTZWxlY3RlZD17cHJvcHMuZHJpdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtY29sdW1uJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LXRvcC1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPERyaXZlclN1bW1hcnlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QuZmluZChkPT5kLmVuYWJsZWQmJmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0nZmFzdGVzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdGYXN0ZXN0IExhcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1JhbmsnLHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBSYW5rOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcE51bWJlcjpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1RpbWUnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZTpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTcGVlZCcsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBTcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArJyAnK2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFVuaXRzOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUNhcmRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3Nsb3dlc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nU2xvd2VzdCBMYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidMYXAnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0Om51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonVGltZScsdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWUudG9GaXhlZCgzKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdyYWNlcGFjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdSYWNlIFBhY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonQXZnJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZS50b0ZpeGVkKDMpOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1N0ZCBEZXYnLHZhbHVlOnByb3BzLmRyaXZlcj9NYXRoLnNxcnQoZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWUpLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHM/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5Q2FyZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ncGFjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdMYXAgUGFjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidMYXAgJytwcm9wcy5sYXAsIHZhbHVlOnByb3BzLmRyaXZlciYmZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikubGFwc1twcm9wcy5sYXBdLnRpbWUudG9GaXhlZCgzKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJpdmVyU3VtbWFyeUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3JpZ2h0LWJvdHRvbS1ncmFwaC10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzPydMQVAgVElNRSc6J0FWRyBMQVAgVElNRSd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC1ib3R0b20tY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICA8QmFyR3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZHJpdmVyTGlzdC5tYXAoZD0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpkLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTpwcm9wcy5sYXAmJnByb3BzLmxhcD4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS50aW1lOjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5kcml2ZXJDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOnByb3BzLmxhcCYmcHJvcHMubGFwPjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IWQuZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiFkLmVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5ZPXtkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlckxpc3RbMF0uZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZS0zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhZPXtkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlckxpc3RbMF0uZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZSoxLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhTZWxlY3RlZD17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNTZWxlY3RlZD17cHJvcHMuZHJpdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byAyZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxZnI7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjE7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjEvMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MS8zO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi10b3Age1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjI7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzE2MWYyZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApIDIwJSwgcmdiYSgwLDAsMCwwKSA4MCUsIHJnYmEoMCwwLDAsMSkpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxNjFmMmQgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgIzE2MWYyZCA3NSUsICMxNjFmMmQpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxNjFmMmQgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgIzE2MWYyZCA3NSUsICMxNjFmMmQpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoOCwgOCwgOCksIHJnYigzMiwgMzIsIDMyKSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMHB4IDEwcHgsIDEwcHggMTBweCwgMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDBweCAwcHgsIDVweCA1cHgsIDBweCAwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjcmlnaHQtYm90dG9tLWdyYXBoLXRpdGxlIHsgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgICAgIGxlZnQ6NzUlO1xyXG4gICAgICAgICAgICB0b3A6NTglO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgb3BhY2l0eTouMTU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LXRvcC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC1ib3R0b20tY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNjFmMmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSAyMCUsIHJnYmEoMCwwLDAsMCkgODAlLCByZ2JhKDAsMCwwLDEpKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgsIDgsIDgpLCByZ2IoMzIsIDMyLCAzMikpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSwgMTBweCAxMHB4LCAxMHB4IDEwcHgsIDEwcHggNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAwcHggMHB4LCA1cHggNXB4LCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcblxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\pages\\\\driver-summary.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

_s(DriverSummary, "QchUJ3b6TAz1ZAafeNysh74daUU=", false, function () {
  return [_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = DriverSummary;

var _c;

$RefreshReg$(_c, "DriverSummary");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLXN1bW1hcnkudHN4Il0sIm5hbWVzIjpbIkRyaXZlclN1bW1hcnkiLCJwcm9wcyIsInVzZVJlc3VsdHNMYXBzUGl0c3RvcHMiLCJzZWFzb24iLCJyb3VuZCIsImlzTG9hZGluZyIsImVycm9yIiwicmFjZURldGFpbHMiLCJkcml2ZXJNYXAiLCJob3ZlcmVkRHJpdmVyIiwiZHJpdmVyIiwiZHJpdmVyTGlzdCIsImZpbmQiLCJkIiwiZHJpdmVySWQiLCJlbmFibGVkIiwibGFwc0FycmF5IiwiaSIsIm51bUxhcHMiLCJwdXNoIiwidmFsdWUiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwibGFwIiwibWFwIiwiYyIsInNvcnQiLCJhIiwiYiIsImdldCIsImVuZGluZ1Bvc2l0aW9uIiwiaW5kZXgiLCJkcml2ZXJEYXRhIiwiZHJpdmVyQ29kZSIsInJhY2VUaW1lRHNwIiwiY29uc3RydWN0b3JDb2xvciIsIm9wYWNpdHkiLCJlIiwic2V0RHJpdmVyTGlzdCIsImwiLCJzZXREcml2ZXIiLCJzZXRMYXAiLCJrZXkiLCJkaXNhYmxlZCIsIngiLCJ4TGFiZWwiLCJ5TG93IiwicmFjZVN0YXRzIiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJzbG93ZXN0TGFwVGltZSIsInlIaWdoIiwiZmFzdGVzdExhcFRpbWUiLCJ5Qm94TG93IiwiYXZnTGFwTmV0UGl0VGltZSIsIk1hdGgiLCJzcXJ0IiwidmFyaWFuY2VOZXRQaXRUaW1lIiwieUJveEhpZ2giLCJjb2xvciIsImZpbHRlciIsImYiLCJ5IiwibGFwc0NvbXBsZXRlZCIsImxhcHMiLCJ0aW1lIiwiZmFzdGVzdExhcFJhbmsiLCJmYXN0ZXN0TGFwTnVtYmVyIiwiZmFzdGVzdExhcFNwZWVkIiwiZmFzdGVzdExhcFVuaXRzIiwic2xvd2VzdExhcE5ldFBpdCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQSxVQURKO0FBdU5IOztHQXJPdUIxQyxhO1VBQytCRSw0RTs7O0tBRC9CRixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci1zdW1tYXJ5LjVmNjA2ODJiZGQwY2RiMmYwMTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nL0xvYWRpbmcnO1xyXG5pbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vUmFuZ2VTbGlkZXIvUmFuZ2VTbGlkZXInO1xyXG5pbXBvcnQgRHJpdmVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlckxpc3QvRHJpdmVyTGlzdCc7XHJcbmltcG9ydCBEcml2ZXJMaXN0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlckxpc3QvRHJpdmVyTGlzdEl0ZW0nO1xyXG5pbXBvcnQgRHJpdmVyU3VtbWFyeUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJTdW1tYXJ5Q2FyZC9Ecml2ZXJTdW1tYXJ5Q2FyZCc7XHJcbmltcG9ydCBTdW1tYXJ5Q2FyZFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJTdW1tYXJ5Q2FyZC9TdW1tYXJ5Q2FyZFNlY3Rpb24nO1xyXG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9ncmFwaHMvQmFyR3JhcGgnO1xyXG5pbXBvcnQgRHJpdmVyU3VtbWFyeUdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JhcGhzL0RyaXZlclN1bW1hcnlHcmFwaCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvQXBwVHlwZXMnO1xyXG5pbXBvcnQgdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyBmcm9tICcuLi91dGlscy9ob29rcy91c2VSZXN1bHRzTGFwc1BpdHN0b3BzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJpdmVyU3VtbWFyeShwcm9wczpBcHBTdGF0ZSl7XHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBlcnJvciwgcmFjZURldGFpbHMsIGRyaXZlck1hcH0gPSB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzKHByb3BzLnNlYXNvbiwgcHJvcHMucm91bmQpO1xyXG4gICAgY29uc3QgaG92ZXJlZERyaXZlciA9IHByb3BzLmRyaXZlciYmcHJvcHMuZHJpdmVyTGlzdCYmcHJvcHMuZHJpdmVyTGlzdC5maW5kKGQ9PmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIgJiYgZC5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID90cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZ3x8IXByb3BzLmRyaXZlckxpc3R8fCFyYWNlRGV0YWlscyl7XHJcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nLz5cclxuICAgIH0gXHJcbiAgICBjb25zdCBsYXBzQXJyYXkgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8PXJhY2VEZXRhaWxzLm51bUxhcHM7IGkrKyl7XHJcbiAgICAgICAgbGFwc0FycmF5LnB1c2goe3ZhbHVlOmksbGFiZWw6aX0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZHJpdmVyTWFwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQtY29sdW1uJz4gIFxyXG4gICAgICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICAvL3N0eWxlPXt7aGVpZ2h0OicxMDAlJywgZ3JpZFRlbXBsYXRlQ29sdW1uczonYXV0byAwLjc1ZnIgYXV0byd9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOjB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXshcHJvcHMubGFwfHxwcm9wcy5sYXA9PT0wfHxwcm9wcy5sYXA+PXJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPzxoMT5GaW5hbCBSZXN1bHRzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA6PD48aDE+TEFQPC9oMT48aDI+e3Byb3BzLmxhcH0ve3JhY2VEZXRhaWxzLm51bUxhcHN9PC9oMj48Lz59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyTGlzdCYmZHJpdmVyTWFwP3Byb3BzLmRyaXZlckxpc3QubWFwKGM9PmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsYik9PmRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24gLSBkcml2ZXJNYXAuZ2V0KGIuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGQsaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJEYXRhID0gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RHJpdmVyTGlzdEl0ZW0ga2V5PXtkLmRyaXZlcklkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2QuZHJpdmVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXI9e2RyaXZlckRhdGEuZHJpdmVyLmRyaXZlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRSaWdodD17ZHJpdmVyRGF0YS5yYWNlVGltZURzcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJOdW1iZXI9e2luZGV4KzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkcml2ZXJEYXRhLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZC5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aG92ZXJlZERyaXZlcj9kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyP3tvcGFjaXR5OjF9OntvcGFjaXR5OjAuNX06bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHByb3BzLnNldERyaXZlckxpc3QocHJvcHMuZHJpdmVyTGlzdC5tYXAobD0+KHsuLi5sLGVuYWJsZWQ6ZC5kcml2ZXJJZD09PWwuZHJpdmVySWQ/IWwuZW5hYmxlZDpsLmVuYWJsZWR9KSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+ZC5lbmFibGVkP3Byb3BzLnNldERyaXZlcihkLmRyaXZlcklkKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tdG9wJz5cclxuICAgICAgICAgICAgPFJhbmdlU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmxhcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNldExhcH1cclxuICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8RHJpdmVyU3VtbWFyeUdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QubWFwKGQ9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ZC5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4TGFiZWw6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuZHJpdmVyQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlMb3c6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWU/LTEqZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWU6LTEqZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMuc2xvd2VzdExhcFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5SGlnaDotMSpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlCb3hMb3c6LTEqKGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWUrTWF0aC5zcXJ0KGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVN0YXRzLnZhcmlhbmNlTmV0UGl0VGltZSoyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Qm94SGlnaDotMSooZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZS1NYXRoLnNxcnQoZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lKjIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmZpbHRlcihmPT5mLnlCb3hMb3c8MCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtEYXRhPXtwcm9wcy5kcml2ZXJMaXN0Lm1hcChkPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OmQuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OnByb3BzLmxhcCYmcHJvcHMubGFwPjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnRpbWUqLTE6MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VTdGF0cy5hdmdMYXBOZXRQaXRUaW1lKi0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeExhYmVsOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmRyaXZlckNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkuZmlsdGVyKGY9PmYueTwwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3Zlcj17KGQpPT5wcm9wcy5zZXREcml2ZXIoZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzQmx1cj17KCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LWNvbHVtbic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC10b3AtY29sdW1uJz5cclxuICAgICAgICAgICAgICAgIDxEcml2ZXJTdW1tYXJ5Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kcml2ZXJMaXN0LmZpbmQoZD0+ZC5lbmFibGVkJiZkLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5Q2FyZFNlY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2Zhc3Rlc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nRmFzdGVzdCBMYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidSYW5rJyx2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwUmFuazpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0xhcCcsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBOdW1iZXI6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidUaW1lJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWU6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU3BlZWQnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwU3BlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKycgJytkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBVbml0czpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdzbG93ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J1Nsb3dlc3QgTGFwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdDpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1RpbWUnLHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXRUaW1lLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5Q2FyZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ncmFjZXBhY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nUmFjZSBQYWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0F2ZycsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWUudG9GaXhlZCgzKTpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidTdGQgRGV2Jyx2YWx1ZTpwcm9wcy5kcml2ZXI/TWF0aC5zcXJ0KGRyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMudmFyaWFuY2VOZXRQaXRUaW1lKS50b0ZpeGVkKDMpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUNhcmRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3BhY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nTGFwIFBhY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwICcrcHJvcHMubGFwLCB2YWx1ZTpwcm9wcy5kcml2ZXImJmRyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmxhcHNbcHJvcHMubGFwXS50aW1lLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0RyaXZlclN1bW1hcnlDYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdyaWdodC1ib3R0b20tZ3JhcGgtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcz8nTEFQIFRJTUUnOidBVkcgTEFQIFRJTUUnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtYm90dG9tLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhckdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QubWFwKGQ9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ZC5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6cHJvcHMubGFwJiZwcm9wcy5sYXA+MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0udGltZTowXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVN0YXRzLmF2Z0xhcE5ldFBpdFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4TGFiZWw6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuZHJpdmVyQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpwcm9wcy5sYXAmJnByb3BzLmxhcD4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyFkLmVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDohZC5lbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluWT17ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXJMaXN0WzBdLmRyaXZlcklkKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWUtM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4WT17ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXJMaXN0WzBdLmRyaXZlcklkKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWUqMS41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4U2VsZWN0ZWQ9e3Byb3BzLmxhcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3Zlcj17KGQpPT5wcm9wcy5zZXREcml2ZXIoZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzQmx1cj17KCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZ3JpZC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMmZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gMWZyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnQtY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoxO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxLzM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjEvMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tdG9wIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNjFmMmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSAyMCUsIHJnYmEoMCwwLDAsMCkgODAlLCByZ2JhKDAsMCwwLDEpKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgsIDgsIDgpLCByZ2IoMzIsIDMyLCAzMikpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSwgMTBweCAxMHB4LCAxMHB4IDEwcHgsIDEwcHggNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAwcHggMHB4LCA1cHggNXB4LCAwcHggMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3JpZ2h0LWJvdHRvbS1ncmFwaC10aXRsZSB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgICAgICAgICBsZWZ0Ojc1JTtcclxuICAgICAgICAgICAgdG9wOjU4JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6LjE1O1xyXG4gICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC10b3AtY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtYm90dG9tLWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMTYxZjJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkgMjAlLCByZ2JhKDAsMCwwLDApIDgwJSwgcmdiYSgwLDAsMCwxKSksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig4LCA4LCA4KSwgcmdiKDMyLCAzMiwgMzIpKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwcHggMTBweCwgMTBweCAxMHB4LCAxMHB4IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMHB4IDBweCwgNXB4IDVweCwgMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG5cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==