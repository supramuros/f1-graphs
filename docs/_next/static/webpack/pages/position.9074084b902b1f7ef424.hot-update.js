webpackHotUpdate_N_E("pages/position",{

/***/ "./pages/position.tsx":
/*!****************************!*\
  !*** ./pages/position.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
/* harmony import */ var C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks/useResultsLapsPitstops */ "./utils/hooks/useResultsLapsPitstops.ts");
/* harmony import */ var _components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DriverList/DriverList */ "./components/DriverList/DriverList.tsx");
/* harmony import */ var _components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DriverList/DriverListItem */ "./components/DriverList/DriverListItem.tsx");
/* harmony import */ var _components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/RangeSlider/RangeSlider */ "./components/common/RangeSlider/RangeSlider.tsx");
/* harmony import */ var _components_graphs_LapPositionGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/graphs/LapPositionGraph */ "./components/graphs/LapPositionGraph.tsx");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");
/* harmony import */ var _components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Loading/Loading */ "./components/common/Loading/Loading.tsx");



var _jsxFileName = "C:\\Users\\mobiledan\\Code\\f1-graphs\\pages\\position.tsx",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Position(props) {
  _s();

  var _this = this;

  var _useResultsLapsPitsto = Object(_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_3__["default"])(props.season, props.round),
      isLoading = _useResultsLapsPitsto.isLoading,
      error = _useResultsLapsPitsto.error,
      raceDetails = _useResultsLapsPitsto.raceDetails,
      driverMap = _useResultsLapsPitsto.driverMap;

  var hoveredDriver = props.driver && props.driverList && props.driverList.find(function (d) {
    return d.driverId === props.driver && d.enabled;
  }) ? true : false;

  if (isLoading || !props.driverList) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
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

  function sortDriverList(a, b) {
    if (props.lap !== undefined && props.lap > 0 && props.lap < raceDetails.numLaps) {
      var aDriver = driverMap.get(a.driverId);
      var bDriver = driverMap.get(b.driverId);
      var aCompare = aDriver.lapsCompleted >= props.lap ? aDriver.laps[props.lap].position : 1000 - aDriver.lapsCompleted;
      var bCompare = bDriver.lapsCompleted >= props.lap ? bDriver.laps[props.lap].position : 1000 - bDriver.lapsCompleted;
      return aCompare - bCompare;
    } else {
      return driverMap.get(a.driverId).endingPosition - driverMap.get(b.driverId).endingPosition;
    }
  }

  function getDriverTimeDisplay(driverId) {
    var driverData = driverMap.get(driverId);

    if (props.lap !== undefined && props.lap > 0 && props.lap < raceDetails.numLaps) {
      if (driverData.lapsCompleted >= props.lap) return driverData.laps[props.lap].gap === 0 ? 'Leader' : '+' + driverData.laps[props.lap].gap.toFixed(3);else {
        return 'OUT';
      }
    }

    return driverData.raceTimeDsp;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]) + " " + 'grid-container',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]) + " " + 'left-column',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          height: '100%',
          gridTemplateColumns: 'auto 0.75fr auto'
        },
        children: props.driverList && driverMap ? props.driverList.map(function (c) {
          return c;
        }).sort(function (a, b) {
          return driverMap.get(a.driverId).startingOrder - driverMap.get(b.driverId).startingOrder;
        }).map(function (d, index) {
          var driverData = driverMap.get(d.driverId);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
            id: d.driverId,
            textCenter: driverData.driver.driverCode,
            textRight: "",
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
          }, d.driverId + '_start', false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 45
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]) + " " + 'main-top',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
        options: lapsArray,
        value: props.lap,
        onChange: props.setLap
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "main-graph-title",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]),
      children: "POSITION BY LAP"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]) + " " + 'main',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_graphs_LapPositionGraph__WEBPACK_IMPORTED_MODULE_7__["LapPositionGraph"], {
        data: props.driverList && driverMap ? props.driverList.map(function (d) {
          return {
            seriesKey: d.driverId,
            disabled: !d.enabled,
            color: driverMap.get(d.driverId).driver.constructorColor,
            series: driverMap.get(d.driverId).laps.map(function (l) {
              return {
                x: l.lapNum,
                xLabel: l.lapNum.toString(),
                y: -1 * l.position,
                yLabel: (-1 * l.position).toString(),
                key: l.driverId
              };
            })
          };
        }) : null,
        xSelected: props.lap,
        seriesSelected: props.driver,
        onSeriesHover: function onSeriesHover(d) {
          return props.setDriver(d);
        },
        onSeriesBlur: function onSeriesBlur() {
          return props.setDriver(null);
        },
        hint: props.lap && props.lap > 0 && props.lap < raceDetails.numLaps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_8__["Hint"], {
          value: {
            x: props.lap,
            y: 0
          },
          align: {
            vertical: 'bottom',
            horizontal: props.lap < raceDetails.numLaps / 2 ? 'right' : 'left'
          },
          style: {
            height: '100%',
            display: 'flex',
            paddingTop: '15px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_4__["default"], {
            style: {
              height: '100%',
              gridTemplateColumns: 'auto 0.75fr auto',
              padding: '20px 0px 0px 0px',
              borderLeft: props.lap < raceDetails.numLaps / 2 ? 'solid 3px white' : null,
              borderRight: props.lap >= raceDetails.numLaps / 2 ? 'solid 3px white' : null
            },
            children: props.driverList.map(function (c) {
              return c;
            }).sort(sortDriverList).map(function (d, index) {
              var driverData = driverMap.get(d.driverId);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                id: d.driverId,
                textCenter: driverData.driver.driverCode,
                textRight: getDriverTimeDisplay(d.driverId),
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
              }, d.driverId + '_start', false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 45
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 27
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]) + " " + 'right-column',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          height: '100%',
          gridTemplateColumns: 'auto 0.75fr auto'
        },
        children: props.driverList && driverMap ? props.driverList.map(function (c) {
          return c;
        }).sort(function (a, b) {
          return driverMap.get(a.driverId).endingPosition - driverMap.get(b.driverId).endingPosition;
        }).map(function (d, index) {
          var driverData = driverMap.get(d.driverId);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_DriverList_DriverListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
          }, d.driverId + '_start', false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 45
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3151878320",
      dynamic: [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%'],
      children: ".grid-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr;height:100%;min-height:500px;}.left-column.__jsx-style-dynamic-selector{grid-column:1;grid-row:2;background-color:transparent;}.right-column.__jsx-style-dynamic-selector{grid-column:3;grid-row:2;background-color:transparent;}.main-top.__jsx-style-dynamic-selector{grid-column:2;grid-row:1;min-height:2rem;margin-left:0;margin-right:30px;background-color:transparent;padding-top:10px;padding-bottom:10px;}.main.__jsx-style-dynamic-selector{grid-column:2;grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;min-height:500px;position:relative;}#main-graph-title.__jsx-style-dynamic-selector{position:fixed;left:25%;top:50%;font-size:5rem;opacity:.15;z-index:2;}.lap-tip.__jsx-style-dynamic-selector{z-index:2;top:0;height:100%;position:absolute;}.lap-tip-left.__jsx-style-dynamic-selector{left:".concat(100 * (props.lap / raceDetails.numLaps) + '%', ";border-left:solid 2px white;}.lap-tip-right.__jsx-style-dynamic-selector{right:").concat(100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%', ";border-right:solid 2px white;}.hint-container.__jsx-style-dynamic-selector{list-style:none;padding-inline-start:0;margin:0;padding:17px 0px 17px 0px;margin-block-start:0;margin-block-end:0;display:grid;grid-template-columns:auto 0.75fr auto;height:100%;line-height:100%;font-size:0.75rem;justify-items:stretch;background-color:black;background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxwb3NpdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0tvQixBQUc2QixBQU9DLEFBS0EsQUFLQSxBQVVBLEFBVUUsQUFXTixBQU13QixBQUlHLEFBSXJCLFVBYlYsR0FoRDhCLENBT3pCLEFBS0EsQUFLQSxBQVVBLENBVUYsQ0FZRyxBQWFXLFFBeEJmLENBOUJxQixBQUtBLEFBS2IsQUFVUyxHQXNCUCxJQVhILEVBZWEsQ0FJRSxJQUtyQixFQTVDSyxLQWdDakIsQ0FYZSxDQXdCYyxDQS9ERyxDQTRCd1UsSUFwQnhXLEFBS0EsQ0FNcUIsSUFxQlIsR0FjWixFQUlBLEtBakJELElBckJpQyxDQTRDVCxHQS9EVCxZQUNLLE1BK0RFLE9BNUNGLElBbEJwQixRQStEZ0IsS0E1Q08sUUE2Q29CLFlBNUMzQywyQkE2Q2UsWUFDSyxpQkFDQyxrQkFDSSxzQkFDQyx1QkFDTSw0QkFDaEMsaUdBN0M4RCx1REFDSCxvREFDdkMsaUJBQ0Msa0JBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxwb3NpdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL0FwcFR5cGVzJztcclxuaW1wb3J0IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMgZnJvbSAnLi4vdXRpbHMvaG9va3MvdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyc7XHJcbmltcG9ydCBEcml2ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0JztcclxuaW1wb3J0IERyaXZlckxpc3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0SXRlbSc7XHJcbmltcG9ydCBSYW5nZVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9SYW5nZVNsaWRlci9SYW5nZVNsaWRlcic7XHJcbmltcG9ydCB7IExhcFBvc2l0aW9uR3JhcGggfSBmcm9tICcuLi9jb21wb25lbnRzL2dyYXBocy9MYXBQb3NpdGlvbkdyYXBoJztcclxuaW1wb3J0IHsgSGludH0gZnJvbSAncmVhY3QtdmlzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZy9Mb2FkaW5nJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3NpdGlvbihwcm9wczpBcHBTdGF0ZSl7XHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBlcnJvciwgcmFjZURldGFpbHMsIGRyaXZlck1hcH0gPSB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzKHByb3BzLnNlYXNvbiwgcHJvcHMucm91bmQpO1xyXG4gICAgY29uc3QgaG92ZXJlZERyaXZlciA9IHByb3BzLmRyaXZlciYmcHJvcHMuZHJpdmVyTGlzdCYmcHJvcHMuZHJpdmVyTGlzdC5maW5kKGQ9PmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIgJiYgZC5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID90cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZ3x8IXByb3BzLmRyaXZlckxpc3Qpe1xyXG4gICAgICAgIHJldHVybiA8TG9hZGluZy8+XHJcbiAgICB9IFxyXG4gICAgY29uc3QgbGFwc0FycmF5ID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPD1yYWNlRGV0YWlscy5udW1MYXBzOyBpKyspe1xyXG4gICAgICAgIGxhcHNBcnJheS5wdXNoKHt2YWx1ZTppLGxhYmVsOml9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNvcnREcml2ZXJMaXN0KGE6e2RyaXZlcklkOnN0cmluZyxlbmFibGVkOmJvb2xlYW59LGI6e2RyaXZlcklkOnN0cmluZyxlbmFibGVkOmJvb2xlYW59KXtcclxuICAgICAgICBpZihwcm9wcy5sYXAhPT11bmRlZmluZWQgJiYgcHJvcHMubGFwPjAgJiYgcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHMpe1xyXG4gICAgICAgICAgICBjb25zdCBhRHJpdmVyID0gZHJpdmVyTWFwLmdldChhLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgY29uc3QgYkRyaXZlciA9IGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgIGxldCBhQ29tcGFyZSA9IGFEcml2ZXIubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2FEcml2ZXIubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uOjEwMDAtYURyaXZlci5sYXBzQ29tcGxldGVkO1xyXG4gICAgICAgICAgICBsZXQgYkNvbXBhcmUgPSBiRHJpdmVyLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9iRHJpdmVyLmxhcHNbcHJvcHMubGFwXS5wb3NpdGlvbjoxMDAwLWJEcml2ZXIubGFwc0NvbXBsZXRlZDtcclxuICAgICAgICAgICAgcmV0dXJuIGFDb21wYXJlIC0gYkNvbXBhcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkcml2ZXJNYXAuZ2V0KGEuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uIC0gZHJpdmVyTWFwLmdldChiLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXREcml2ZXJUaW1lRGlzcGxheShkcml2ZXJJZDpzdHJpbmcpe1xyXG4gICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGRyaXZlcklkKTtcclxuICAgICAgICBpZihwcm9wcy5sYXAhPT11bmRlZmluZWQgJiYgcHJvcHMubGFwPjAgJiYgcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHMpe1xyXG4gICAgICAgICAgICBpZihkcml2ZXJEYXRhLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcClcclxuICAgICAgICAgICAgICAgIHJldHVybiBkcml2ZXJEYXRhLmxhcHNbcHJvcHMubGFwXS5nYXA9PT0wP1xyXG4gICAgICAgICAgICAgICAgJ0xlYWRlcidcclxuICAgICAgICAgICAgICAgIDonKycrZHJpdmVyRGF0YS5sYXBzW3Byb3BzLmxhcF0uZ2FwLnRvRml4ZWQoMyk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdPVVQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkcml2ZXJEYXRhLnJhY2VUaW1lRHNwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdC1jb2x1bW4nPiAgXHJcbiAgICAgICAgICAgICAgICA8RHJpdmVyTGlzdCBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgZ3JpZFRlbXBsYXRlQ29sdW1uczonYXV0byAwLjc1ZnIgYXV0byd9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmRyaXZlckxpc3QmJmRyaXZlck1hcD9wcm9wcy5kcml2ZXJMaXN0Lm1hcChjPT5jKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLGIpPT5kcml2ZXJNYXAuZ2V0KGEuZHJpdmVySWQpLnN0YXJ0aW5nT3JkZXIgLSBkcml2ZXJNYXAuZ2V0KGIuZHJpdmVySWQpLnN0YXJ0aW5nT3JkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZCxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxEcml2ZXJMaXN0SXRlbSBrZXk9e2QuZHJpdmVySWQrJ19zdGFydCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZC5kcml2ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENlbnRlcj17ZHJpdmVyRGF0YS5kcml2ZXIuZHJpdmVyQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFJpZ2h0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTnVtYmVyPXtpbmRleCsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZHJpdmVyRGF0YS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2QuZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hvdmVyZWREcml2ZXI/ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlcj97b3BhY2l0eToxfTp7b3BhY2l0eTowLjV9Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBwcm9wcy5zZXREcml2ZXJMaXN0KHByb3BzLmRyaXZlckxpc3QubWFwKGw9Pih7Li4ubCxlbmFibGVkOmQuZHJpdmVySWQ9PT1sLmRyaXZlcklkPyFsLmVuYWJsZWQ6bC5lbmFibGVkfSkpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSk9PmQuZW5hYmxlZD9wcm9wcy5zZXREcml2ZXIoZC5kcml2ZXJJZCk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSk9PnByb3BzLnNldERyaXZlcihudWxsKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk6bnVsbH1cclxuICAgICAgICAgICAgICAgIDwvRHJpdmVyTGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXRvcCc+XHJcbiAgICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXBzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmxhcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuc2V0TGFwfVxyXG4gICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluLWdyYXBoLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgIFBPU0lUSU9OIEJZIExBUFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgICAgICAgICAgPExhcFBvc2l0aW9uR3JhcGhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kcml2ZXJMaXN0JiZkcml2ZXJNYXA/cHJvcHMuZHJpdmVyTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGQ9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nlcmllc0tleTpkLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDohZC5lbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzLm1hcChsPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpsLmxhcE51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4TGFiZWw6bC5sYXBOdW0udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Oi0xKmwucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeUxhYmVsOigtMSpsLnBvc2l0aW9uKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpsLmRyaXZlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHhTZWxlY3RlZD17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllc1NlbGVjdGVkPXtwcm9wcy5kcml2ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3Zlcj17KGQpPT5wcm9wcy5zZXREcml2ZXIoZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpbnQ9e3Byb3BzLmxhcCYmKHByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyg8SGludFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3t4OnByb3BzLmxhcCx5OjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249e3t2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6cHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHMvMj8ncmlnaHQnOidsZWZ0J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDonMTAwJScsIGRpc3BsYXk6J2ZsZXgnLCBwYWRkaW5nVG9wOicxNXB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcml2ZXJMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczonYXV0byAwLjc1ZnIgYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzonMjBweCAwcHggMHB4IDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDpwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcy8yPydzb2xpZCAzcHggd2hpdGUnOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6cHJvcHMubGFwPj1yYWNlRGV0YWlscy5udW1MYXBzLzI/J3NvbGlkIDNweCB3aGl0ZSc6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyTGlzdC5tYXAoYz0+YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydChzb3J0RHJpdmVyTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPERyaXZlckxpc3RJdGVtIGtleT17ZC5kcml2ZXJJZCsnX3N0YXJ0J30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkLmRyaXZlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyPXtkcml2ZXJEYXRhLmRyaXZlci5kcml2ZXJDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UmlnaHQ9e2dldERyaXZlclRpbWVEaXNwbGF5KGQuZHJpdmVySWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17aW5kZXgrMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hpbnQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LWNvbHVtbic+XHJcbiAgICAgICAgICAgIDxEcml2ZXJMaXN0IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJ319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyTGlzdCYmZHJpdmVyTWFwP3Byb3BzLmRyaXZlckxpc3QubWFwKGM9PmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsYik9PmRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24gLSBkcml2ZXJNYXAuZ2V0KGIuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGQsaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJEYXRhID0gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RHJpdmVyTGlzdEl0ZW0ga2V5PXtkLmRyaXZlcklkKydfc3RhcnQnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2QuZHJpdmVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXI9e2RyaXZlckRhdGEuZHJpdmVyLmRyaXZlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRSaWdodD17ZHJpdmVyRGF0YS5yYWNlVGltZURzcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJOdW1iZXI9e2luZGV4KzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkcml2ZXJEYXRhLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZC5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aG92ZXJlZERyaXZlcj9kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyP3tvcGFjaXR5OjF9OntvcGFjaXR5OjAuNX06bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHByb3BzLnNldERyaXZlckxpc3QocHJvcHMuZHJpdmVyTGlzdC5tYXAobD0+KHsuLi5sLGVuYWJsZWQ6ZC5kcml2ZXJJZD09PWwuZHJpdmVySWQ/IWwuZW5hYmxlZDpsLmVuYWJsZWR9KSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+ZC5lbmFibGVkP3Byb3BzLnNldERyaXZlcihkLmRyaXZlcklkKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIDFmciBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGVmdC1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoxO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0LWNvbHVtbntcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOjM7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi10b3Age1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46MjtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OjE7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46MjtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNjFmMmQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkgMjAlLCByZ2JhKDAsMCwwLDApIDgwJSwgcmdiYSgwLDAsMCwxKSksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig4LCA4LCA4KSwgcmdiKDMyLCAzMiwgMzIpKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMHB4IDEwcHgsIDEwcHggMTBweCwgMTBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAwcHggMHB4LCA1cHggNXB4LCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtYWluLWdyYXBoLXRpdGxlIHsgXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgICAgICAgICAgICAgbGVmdDoyNSU7XHJcbiAgICAgICAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjVyZW07XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5Oi4xNTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFwLXNsaWRlcntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXAtdGlwe1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXAtdGlwLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgbGVmdDokeygxMDAqKHByb3BzLmxhcC8ocmFjZURldGFpbHMubnVtTGFwcykpKSsnJSd9O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6c29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLmxhcC10aXAtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgIHJpZ2h0OiAkeygxMDAqKChyYWNlRGV0YWlscy5udW1MYXBzLXByb3BzLmxhcCkvKHJhY2VEZXRhaWxzLm51bUxhcHMpKSkrJyUnfTtcclxuICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6c29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGludC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDowO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE3cHggMHB4IDE3cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOjA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMC43NWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\pages\\\\position.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

_s(Position, "QchUJ3b6TAz1ZAafeNysh74daUU=", false, function () {
  return [_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Position;

var _c;

$RefreshReg$(_c, "Position");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zaXRpb24udHN4Il0sIm5hbWVzIjpbIlBvc2l0aW9uIiwicHJvcHMiLCJ1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIiwic2Vhc29uIiwicm91bmQiLCJpc0xvYWRpbmciLCJlcnJvciIsInJhY2VEZXRhaWxzIiwiZHJpdmVyTWFwIiwiaG92ZXJlZERyaXZlciIsImRyaXZlciIsImRyaXZlckxpc3QiLCJmaW5kIiwiZCIsImRyaXZlcklkIiwiZW5hYmxlZCIsImxhcHNBcnJheSIsImkiLCJudW1MYXBzIiwicHVzaCIsInZhbHVlIiwibGFiZWwiLCJzb3J0RHJpdmVyTGlzdCIsImEiLCJiIiwibGFwIiwidW5kZWZpbmVkIiwiYURyaXZlciIsImdldCIsImJEcml2ZXIiLCJhQ29tcGFyZSIsImxhcHNDb21wbGV0ZWQiLCJsYXBzIiwicG9zaXRpb24iLCJiQ29tcGFyZSIsImVuZGluZ1Bvc2l0aW9uIiwiZ2V0RHJpdmVyVGltZURpc3BsYXkiLCJkcml2ZXJEYXRhIiwiZ2FwIiwidG9GaXhlZCIsInJhY2VUaW1lRHNwIiwiaGVpZ2h0IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcCIsImMiLCJzb3J0Iiwic3RhcnRpbmdPcmRlciIsImluZGV4IiwiZHJpdmVyQ29kZSIsImNvbnN0cnVjdG9yQ29sb3IiLCJvcGFjaXR5IiwiZSIsInNldERyaXZlckxpc3QiLCJsIiwic2V0RHJpdmVyIiwic2V0TGFwIiwic2VyaWVzS2V5IiwiZGlzYWJsZWQiLCJjb2xvciIsInNlcmllcyIsIngiLCJsYXBOdW0iLCJ4TGFiZWwiLCJ0b1N0cmluZyIsInkiLCJ5TGFiZWwiLCJrZXkiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJkaXNwbGF5IiwicGFkZGluZ1RvcCIsInBhZGRpbmciLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7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bEIsV0FBVyxDQUFDVyxPQUE1QixDQUFELEdBQXdDLEdBNUt2RCw2RkFnTG1CLE9BQUssQ0FBQ1gsV0FBVyxDQUFDVyxPQUFaLEdBQW9CakIsS0FBSyxDQUFDd0IsR0FBM0IsSUFBaUNsQixXQUFXLENBQUNXLE9BQWxELENBQUQsR0FBOEQsR0FoTGhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3TUg7O0dBL091QmxCLFE7VUFDK0JFLDJFOzs7S0FEL0JGLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zaXRpb24uOTA3NDA4NGI5MDJiMWY3ZWY0MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvQXBwVHlwZXMnO1xyXG5pbXBvcnQgdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyBmcm9tICcuLi91dGlscy9ob29rcy91c2VSZXN1bHRzTGFwc1BpdHN0b3BzJztcclxuaW1wb3J0IERyaXZlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJMaXN0L0RyaXZlckxpc3QnO1xyXG5pbXBvcnQgRHJpdmVyTGlzdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJMaXN0L0RyaXZlckxpc3RJdGVtJztcclxuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL1JhbmdlU2xpZGVyL1JhbmdlU2xpZGVyJztcclxuaW1wb3J0IHsgTGFwUG9zaXRpb25HcmFwaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ3JhcGhzL0xhcFBvc2l0aW9uR3JhcGgnO1xyXG5pbXBvcnQgeyBIaW50fSBmcm9tICdyZWFjdC12aXMnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nL0xvYWRpbmcnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc2l0aW9uKHByb3BzOkFwcFN0YXRlKXtcclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIGVycm9yLCByYWNlRGV0YWlscywgZHJpdmVyTWFwfSA9IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMocHJvcHMuc2Vhc29uLCBwcm9wcy5yb3VuZCk7XHJcbiAgICBjb25zdCBob3ZlcmVkRHJpdmVyID0gcHJvcHMuZHJpdmVyJiZwcm9wcy5kcml2ZXJMaXN0JiZwcm9wcy5kcml2ZXJMaXN0LmZpbmQoZD0+ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlciAmJiBkLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgP3RydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2U7XHJcblxyXG4gICAgaWYoaXNMb2FkaW5nfHwhcHJvcHMuZHJpdmVyTGlzdCl7XHJcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nLz5cclxuICAgIH0gXHJcbiAgICBjb25zdCBsYXBzQXJyYXkgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8PXJhY2VEZXRhaWxzLm51bUxhcHM7IGkrKyl7XHJcbiAgICAgICAgbGFwc0FycmF5LnB1c2goe3ZhbHVlOmksbGFiZWw6aX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc29ydERyaXZlckxpc3QoYTp7ZHJpdmVySWQ6c3RyaW5nLGVuYWJsZWQ6Ym9vbGVhbn0sYjp7ZHJpdmVySWQ6c3RyaW5nLGVuYWJsZWQ6Ym9vbGVhbn0pe1xyXG4gICAgICAgIGlmKHByb3BzLmxhcCE9PXVuZGVmaW5lZCAmJiBwcm9wcy5sYXA+MCAmJiBwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFEcml2ZXIgPSBkcml2ZXJNYXAuZ2V0KGEuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICBjb25zdCBiRHJpdmVyID0gZHJpdmVyTWFwLmdldChiLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgbGV0IGFDb21wYXJlID0gYURyaXZlci5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/YURyaXZlci5sYXBzW3Byb3BzLmxhcF0ucG9zaXRpb246MTAwMC1hRHJpdmVyLmxhcHNDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIGxldCBiQ29tcGFyZSA9IGJEcml2ZXIubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2JEcml2ZXIubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uOjEwMDAtYkRyaXZlci5sYXBzQ29tcGxldGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gYUNvbXBhcmUgLSBiQ29tcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24gLSBkcml2ZXJNYXAuZ2V0KGIuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldERyaXZlclRpbWVEaXNwbGF5KGRyaXZlcklkOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZHJpdmVySWQpO1xyXG4gICAgICAgIGlmKHByb3BzLmxhcCE9PXVuZGVmaW5lZCAmJiBwcm9wcy5sYXA+MCAmJiBwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcyl7XHJcbiAgICAgICAgICAgIGlmKGRyaXZlckRhdGEubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlckRhdGEubGFwc1twcm9wcy5sYXBdLmdhcD09PTA/XHJcbiAgICAgICAgICAgICAgICAnTGVhZGVyJ1xyXG4gICAgICAgICAgICAgICAgOicrJytkcml2ZXJEYXRhLmxhcHNbcHJvcHMubGFwXS5nYXAudG9GaXhlZCgzKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ09VVCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRyaXZlckRhdGEucmFjZVRpbWVEc3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LWNvbHVtbic+ICBcclxuICAgICAgICAgICAgICAgIDxEcml2ZXJMaXN0IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJ319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyTGlzdCYmZHJpdmVyTWFwP3Byb3BzLmRyaXZlckxpc3QubWFwKGM9PmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsYik9PmRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuc3RhcnRpbmdPcmRlciAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuc3RhcnRpbmdPcmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPERyaXZlckxpc3RJdGVtIGtleT17ZC5kcml2ZXJJZCsnX3N0YXJ0J30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkLmRyaXZlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyPXtkcml2ZXJEYXRhLmRyaXZlci5kcml2ZXJDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UmlnaHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJOdW1iZXI9e2luZGV4KzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkcml2ZXJEYXRhLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZC5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aG92ZXJlZERyaXZlcj9kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyP3tvcGFjaXR5OjF9OntvcGFjaXR5OjAuNX06bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHByb3BzLnNldERyaXZlckxpc3QocHJvcHMuZHJpdmVyTGlzdC5tYXAobD0+KHsuLi5sLGVuYWJsZWQ6ZC5kcml2ZXJJZD09PWwuZHJpdmVySWQ/IWwuZW5hYmxlZDpsLmVuYWJsZWR9KSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+ZC5lbmFibGVkP3Byb3BzLnNldERyaXZlcihkLmRyaXZlcklkKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tdG9wJz5cclxuICAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zZXRMYXB9XHJcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4tZ3JhcGgtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgUE9TSVRJT04gQlkgTEFQXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICA8TGFwUG9zaXRpb25HcmFwaFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QmJmRyaXZlck1hcD9wcm9wcy5kcml2ZXJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VyaWVzS2V5OmQuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHMubWFwKGw9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmwubGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpsLmxhcE51bS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6LTEqbC5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5TGFiZWw6KC0xKmwucG9zaXRpb24pLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OmwuZHJpdmVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgeFNlbGVjdGVkPXtwcm9wcy5sYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXI9eygpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaGludD17cHJvcHMubGFwJiYocHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/KDxIaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e3g6cHJvcHMubGFwLHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17e3ZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDpwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcy8yPydyaWdodCc6J2xlZnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgZGlzcGxheTonZmxleCcsIHBhZGRpbmdUb3A6JzE1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOicyMHB4IDBweCAwcHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzLzI/J3NvbGlkIDNweCB3aGl0ZSc6bnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDpwcm9wcy5sYXA+PXJhY2VEZXRhaWxzLm51bUxhcHMvMj8nc29saWQgM3B4IHdoaXRlJzpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0Lm1hcChjPT5jKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KHNvcnREcml2ZXJMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGQsaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJEYXRhID0gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RHJpdmVyTGlzdEl0ZW0ga2V5PXtkLmRyaXZlcklkKydfc3RhcnQnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2QuZHJpdmVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXI9e2RyaXZlckRhdGEuZHJpdmVyLmRyaXZlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRSaWdodD17Z2V0RHJpdmVyVGltZURpc3BsYXkoZC5kcml2ZXJJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTnVtYmVyPXtpbmRleCsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZHJpdmVyRGF0YS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2QuZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hvdmVyZWREcml2ZXI/ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlcj97b3BhY2l0eToxfTp7b3BhY2l0eTowLjV9Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBwcm9wcy5zZXREcml2ZXJMaXN0KHByb3BzLmRyaXZlckxpc3QubWFwKGw9Pih7Li4ubCxlbmFibGVkOmQuZHJpdmVySWQ9PT1sLmRyaXZlcklkPyFsLmVuYWJsZWQ6bC5lbmFibGVkfSkpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSk9PmQuZW5hYmxlZD9wcm9wcy5zZXREcml2ZXIoZC5kcml2ZXJJZCk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSk9PnByb3BzLnNldERyaXZlcihudWxsKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGludD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtY29sdW1uJz5cclxuICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDonMTAwJScsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6J2F1dG8gMC43NWZyIGF1dG8nfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0JiZkcml2ZXJNYXA/cHJvcHMuZHJpdmVyTGlzdC5tYXAoYz0+YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKT0+ZHJpdmVyTWFwLmdldChhLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbiAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZCxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxEcml2ZXJMaXN0SXRlbSBrZXk9e2QuZHJpdmVySWQrJ19zdGFydCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZC5kcml2ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENlbnRlcj17ZHJpdmVyRGF0YS5kcml2ZXIuZHJpdmVyQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFJpZ2h0PXtkcml2ZXJEYXRhLnJhY2VUaW1lRHNwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17aW5kZXgrMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdyaWQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZWZ0LWNvbHVtbntcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOjE7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQtY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46MztcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYWluLXRvcCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzE2MWYyZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSAyMCUsIHJnYmEoMCwwLDAsMCkgODAlLCByZ2JhKDAsMCwwLDEpKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgsIDgsIDgpLCByZ2IoMzIsIDMyLCAzMikpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwcHggMTBweCwgMTBweCAxMHB4LCAxMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDBweCAwcHgsIDVweCA1cHgsIDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21haW4tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OjI1JTtcclxuICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6LjE1O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXAtc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhcC10aXB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhcC10aXAtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiR7KDEwMCoocHJvcHMubGFwLyhyYWNlRGV0YWlscy5udW1MYXBzKSkpKyclJ307XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAubGFwLXRpcC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgcmlnaHQ6ICR7KDEwMCooKHJhY2VEZXRhaWxzLm51bUxhcHMtcHJvcHMubGFwKS8ocmFjZURldGFpbHMubnVtTGFwcykpKSsnJSd9O1xyXG4gICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oaW50LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTdweCAwcHggMTdweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6MDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAwLjc1ZnIgYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=