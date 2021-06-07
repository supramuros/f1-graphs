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
  console.log(isLoading);
  console.log(props.driverList);
  console.log(raceDetails);

  if (isLoading || !props.driverList || !raceDetails) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
            lineNumber: 63,
            columnNumber: 45
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]) + " " + 'main-top',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
        options: lapsArray,
        value: props.lap,
        onChange: props.setLap
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "main-graph-title",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3151878320", [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%']]]),
      children: "POSITION BY LAP"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
                lineNumber: 128,
                columnNumber: 45
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 27
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
            lineNumber: 155,
            columnNumber: 45
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3151878320",
      dynamic: [100 * (props.lap / raceDetails.numLaps) + '%', 100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%'],
      children: ".grid-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr;height:100%;min-height:500px;}.left-column.__jsx-style-dynamic-selector{grid-column:1;grid-row:2;background-color:transparent;}.right-column.__jsx-style-dynamic-selector{grid-column:3;grid-row:2;background-color:transparent;}.main-top.__jsx-style-dynamic-selector{grid-column:2;grid-row:1;min-height:2rem;margin-left:0;margin-right:30px;background-color:transparent;padding-top:10px;padding-bottom:10px;}.main.__jsx-style-dynamic-selector{grid-column:2;grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;min-height:500px;position:relative;}#main-graph-title.__jsx-style-dynamic-selector{position:fixed;left:25%;top:50%;font-size:5rem;opacity:.15;z-index:2;}.lap-tip.__jsx-style-dynamic-selector{z-index:2;top:0;height:100%;position:absolute;}.lap-tip-left.__jsx-style-dynamic-selector{left:".concat(100 * (props.lap / raceDetails.numLaps) + '%', ";border-left:solid 2px white;}.lap-tip-right.__jsx-style-dynamic-selector{right:").concat(100 * ((raceDetails.numLaps - props.lap) / raceDetails.numLaps) + '%', ";border-right:solid 2px white;}.hint-container.__jsx-style-dynamic-selector{list-style:none;padding-inline-start:0;margin:0;padding:17px 0px 17px 0px;margin-block-start:0;margin-block-end:0;display:grid;grid-template-columns:auto 0.75fr auto;height:100%;line-height:100%;font-size:0.75rem;justify-items:stretch;background-color:black;background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxwb3NpdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtvQixBQUc2QixBQU9DLEFBS0EsQUFLQSxBQVVBLEFBVUUsQUFXTixBQU13QixBQUlHLEFBSXJCLFVBYlYsR0FoRDhCLENBT3pCLEFBS0EsQUFLQSxBQVVBLENBVUYsQ0FZRyxBQWFXLFFBeEJmLENBOUJxQixBQUtBLEFBS2IsQUFVUyxHQXNCUCxJQVhILEVBZWEsQ0FJRSxJQUtyQixFQTVDSyxLQWdDakIsQ0FYZSxDQXdCYyxDQS9ERyxDQTRCd1UsSUFwQnhXLEFBS0EsQ0FNcUIsSUFxQlIsR0FjWixFQUlBLEtBakJELElBckJpQyxDQTRDVCxHQS9EVCxZQUNLLE1BK0RFLE9BNUNGLElBbEJwQixRQStEZ0IsS0E1Q08sUUE2Q29CLFlBNUMzQywyQkE2Q2UsWUFDSyxpQkFDQyxrQkFDSSxzQkFDQyx1QkFDTSw0QkFDaEMsaUdBN0M4RCx1REFDSCxvREFDdkMsaUJBQ0Msa0JBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxwb3NpdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL0FwcFR5cGVzJztcclxuaW1wb3J0IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMgZnJvbSAnLi4vdXRpbHMvaG9va3MvdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyc7XHJcbmltcG9ydCBEcml2ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0JztcclxuaW1wb3J0IERyaXZlckxpc3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0SXRlbSc7XHJcbmltcG9ydCBSYW5nZVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9SYW5nZVNsaWRlci9SYW5nZVNsaWRlcic7XHJcbmltcG9ydCB7IExhcFBvc2l0aW9uR3JhcGggfSBmcm9tICcuLi9jb21wb25lbnRzL2dyYXBocy9MYXBQb3NpdGlvbkdyYXBoJztcclxuaW1wb3J0IHsgSGludH0gZnJvbSAncmVhY3QtdmlzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZy9Mb2FkaW5nJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3NpdGlvbihwcm9wczpBcHBTdGF0ZSl7XHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBlcnJvciwgcmFjZURldGFpbHMsIGRyaXZlck1hcH0gPSB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzKHByb3BzLnNlYXNvbiwgcHJvcHMucm91bmQpO1xyXG4gICAgY29uc3QgaG92ZXJlZERyaXZlciA9IHByb3BzLmRyaXZlciYmcHJvcHMuZHJpdmVyTGlzdCYmcHJvcHMuZHJpdmVyTGlzdC5maW5kKGQ9PmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIgJiYgZC5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID90cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmRyaXZlckxpc3QpO1xyXG4gICAgY29uc29sZS5sb2cocmFjZURldGFpbHMpO1xyXG4gICAgaWYoaXNMb2FkaW5nfHwhcHJvcHMuZHJpdmVyTGlzdHx8IXJhY2VEZXRhaWxzKXtcclxuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBsYXBzQXJyYXkgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8PXJhY2VEZXRhaWxzLm51bUxhcHM7IGkrKyl7XHJcbiAgICAgICAgbGFwc0FycmF5LnB1c2goe3ZhbHVlOmksbGFiZWw6aX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc29ydERyaXZlckxpc3QoYTp7ZHJpdmVySWQ6c3RyaW5nLGVuYWJsZWQ6Ym9vbGVhbn0sYjp7ZHJpdmVySWQ6c3RyaW5nLGVuYWJsZWQ6Ym9vbGVhbn0pe1xyXG4gICAgICAgIGlmKHByb3BzLmxhcCE9PXVuZGVmaW5lZCAmJiBwcm9wcy5sYXA+MCAmJiBwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFEcml2ZXIgPSBkcml2ZXJNYXAuZ2V0KGEuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICBjb25zdCBiRHJpdmVyID0gZHJpdmVyTWFwLmdldChiLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgbGV0IGFDb21wYXJlID0gYURyaXZlci5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/YURyaXZlci5sYXBzW3Byb3BzLmxhcF0ucG9zaXRpb246MTAwMC1hRHJpdmVyLmxhcHNDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIGxldCBiQ29tcGFyZSA9IGJEcml2ZXIubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2JEcml2ZXIubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uOjEwMDAtYkRyaXZlci5sYXBzQ29tcGxldGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gYUNvbXBhcmUgLSBiQ29tcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24gLSBkcml2ZXJNYXAuZ2V0KGIuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldERyaXZlclRpbWVEaXNwbGF5KGRyaXZlcklkOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZHJpdmVySWQpO1xyXG4gICAgICAgIGlmKHByb3BzLmxhcCE9PXVuZGVmaW5lZCAmJiBwcm9wcy5sYXA+MCAmJiBwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcyl7XHJcbiAgICAgICAgICAgIGlmKGRyaXZlckRhdGEubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlckRhdGEubGFwc1twcm9wcy5sYXBdLmdhcD09PTA/XHJcbiAgICAgICAgICAgICAgICAnTGVhZGVyJ1xyXG4gICAgICAgICAgICAgICAgOicrJytkcml2ZXJEYXRhLmxhcHNbcHJvcHMubGFwXS5nYXAudG9GaXhlZCgzKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ09VVCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRyaXZlckRhdGEucmFjZVRpbWVEc3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LWNvbHVtbic+ICBcclxuICAgICAgICAgICAgICAgIDxEcml2ZXJMaXN0IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJ319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyTGlzdCYmZHJpdmVyTWFwP3Byb3BzLmRyaXZlckxpc3QubWFwKGM9PmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsYik9PmRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuc3RhcnRpbmdPcmRlciAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuc3RhcnRpbmdPcmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPERyaXZlckxpc3RJdGVtIGtleT17ZC5kcml2ZXJJZCsnX3N0YXJ0J30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkLmRyaXZlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyPXtkcml2ZXJEYXRhLmRyaXZlci5kcml2ZXJDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UmlnaHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJOdW1iZXI9e2luZGV4KzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkcml2ZXJEYXRhLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZC5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aG92ZXJlZERyaXZlcj9kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyP3tvcGFjaXR5OjF9OntvcGFjaXR5OjAuNX06bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHByb3BzLnNldERyaXZlckxpc3QocHJvcHMuZHJpdmVyTGlzdC5tYXAobD0+KHsuLi5sLGVuYWJsZWQ6ZC5kcml2ZXJJZD09PWwuZHJpdmVySWQ/IWwuZW5hYmxlZDpsLmVuYWJsZWR9KSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+ZC5lbmFibGVkP3Byb3BzLnNldERyaXZlcihkLmRyaXZlcklkKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tdG9wJz5cclxuICAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zZXRMYXB9XHJcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4tZ3JhcGgtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgUE9TSVRJT04gQlkgTEFQXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICA8TGFwUG9zaXRpb25HcmFwaFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QmJmRyaXZlck1hcD9wcm9wcy5kcml2ZXJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VyaWVzS2V5OmQuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHMubWFwKGw9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmwubGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpsLmxhcE51bS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6LTEqbC5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5TGFiZWw6KC0xKmwucG9zaXRpb24pLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OmwuZHJpdmVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgeFNlbGVjdGVkPXtwcm9wcy5sYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXI9eygpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaGludD17cHJvcHMubGFwJiYocHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/KDxIaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e3g6cHJvcHMubGFwLHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17e3ZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDpwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcy8yPydyaWdodCc6J2xlZnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgZGlzcGxheTonZmxleCcsIHBhZGRpbmdUb3A6JzE1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOicyMHB4IDBweCAwcHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzLzI/J3NvbGlkIDNweCB3aGl0ZSc6bnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDpwcm9wcy5sYXA+PXJhY2VEZXRhaWxzLm51bUxhcHMvMj8nc29saWQgM3B4IHdoaXRlJzpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0Lm1hcChjPT5jKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KHNvcnREcml2ZXJMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGQsaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJEYXRhID0gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RHJpdmVyTGlzdEl0ZW0ga2V5PXtkLmRyaXZlcklkKydfc3RhcnQnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2QuZHJpdmVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXI9e2RyaXZlckRhdGEuZHJpdmVyLmRyaXZlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRSaWdodD17Z2V0RHJpdmVyVGltZURpc3BsYXkoZC5kcml2ZXJJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTnVtYmVyPXtpbmRleCsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZHJpdmVyRGF0YS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2QuZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hvdmVyZWREcml2ZXI/ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlcj97b3BhY2l0eToxfTp7b3BhY2l0eTowLjV9Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBwcm9wcy5zZXREcml2ZXJMaXN0KHByb3BzLmRyaXZlckxpc3QubWFwKGw9Pih7Li4ubCxlbmFibGVkOmQuZHJpdmVySWQ9PT1sLmRyaXZlcklkPyFsLmVuYWJsZWQ6bC5lbmFibGVkfSkpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSk9PmQuZW5hYmxlZD9wcm9wcy5zZXREcml2ZXIoZC5kcml2ZXJJZCk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSk9PnByb3BzLnNldERyaXZlcihudWxsKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGludD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtY29sdW1uJz5cclxuICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDonMTAwJScsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6J2F1dG8gMC43NWZyIGF1dG8nfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0JiZkcml2ZXJNYXA/cHJvcHMuZHJpdmVyTGlzdC5tYXAoYz0+YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKT0+ZHJpdmVyTWFwLmdldChhLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbiAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZCxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxEcml2ZXJMaXN0SXRlbSBrZXk9e2QuZHJpdmVySWQrJ19zdGFydCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZC5kcml2ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENlbnRlcj17ZHJpdmVyRGF0YS5kcml2ZXIuZHJpdmVyQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFJpZ2h0PXtkcml2ZXJEYXRhLnJhY2VUaW1lRHNwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17aW5kZXgrMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdyaWQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZWZ0LWNvbHVtbntcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOjE7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQtY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46MztcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYWluLXRvcCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzE2MWYyZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSAyMCUsIHJnYmEoMCwwLDAsMCkgODAlLCByZ2JhKDAsMCwwLDEpKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgsIDgsIDgpLCByZ2IoMzIsIDMyLCAzMikpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwcHggMTBweCwgMTBweCAxMHB4LCAxMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDBweCAwcHgsIDVweCA1cHgsIDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21haW4tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OjI1JTtcclxuICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6LjE1O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXAtc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhcC10aXB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhcC10aXAtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiR7KDEwMCoocHJvcHMubGFwLyhyYWNlRGV0YWlscy5udW1MYXBzKSkpKyclJ307XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAubGFwLXRpcC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgcmlnaHQ6ICR7KDEwMCooKHJhY2VEZXRhaWxzLm51bUxhcHMtcHJvcHMubGFwKS8ocmFjZURldGFpbHMubnVtTGFwcykpKSsnJSd9O1xyXG4gICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oaW50LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTdweCAwcHggMTdweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6MDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAwLjc1ZnIgYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\pages\\\\position.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zaXRpb24udHN4Il0sIm5hbWVzIjpbIlBvc2l0aW9uIiwicHJvcHMiLCJ1c2VSZXN1bHRzTGFwc1BpdHN0b3BzIiwic2Vhc29uIiwicm91bmQiLCJpc0xvYWRpbmciLCJlcnJvciIsInJhY2VEZXRhaWxzIiwiZHJpdmVyTWFwIiwiaG92ZXJlZERyaXZlciIsImRyaXZlciIsImRyaXZlckxpc3QiLCJmaW5kIiwiZCIsImRyaXZlcklkIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJsYXBzQXJyYXkiLCJpIiwibnVtTGFwcyIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwic29ydERyaXZlckxpc3QiLCJhIiwiYiIsImxhcCIsInVuZGVmaW5lZCIsImFEcml2ZXIiLCJnZXQiLCJiRHJpdmVyIiwiYUNvbXBhcmUiLCJsYXBzQ29tcGxldGVkIiwibGFwcyIsInBvc2l0aW9uIiwiYkNvbXBhcmUiLCJlbmRpbmdQb3NpdGlvbiIsImdldERyaXZlclRpbWVEaXNwbGF5IiwiZHJpdmVyRGF0YSIsImdhcCIsInRvRml4ZWQiLCJyYWNlVGltZURzcCIsImhlaWdodCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXAiLCJjIiwic29ydCIsInN0YXJ0aW5nT3JkZXIiLCJpbmRleCIsImRyaXZlckNvZGUiLCJjb25zdHJ1Y3RvckNvbG9yIiwib3BhY2l0eSIsImUiLCJzZXREcml2ZXJMaXN0IiwibCIsInNldERyaXZlciIsInNldExhcCIsInNlcmllc0tleSIsImRpc2FibGVkIiwiY29sb3IiLCJzZXJpZXMiLCJ4IiwibGFwTnVtIiwieExhYmVsIiwidG9TdHJpbmciLCJ5IiwieUxhYmVsIiwia2V5IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiZGlzcGxheSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QyxHQTVLdkQsRUFnTG1CLE9BQUssQ0FBQ2IsV0FBVyxDQUFDYSxPQUFaLEdBQW9CbkIsS0FBSyxDQUFDMEIsR0FBM0IsSUFBaUNwQixXQUFXLENBQUNhLE9BQWxELENBQUQsR0FBOEQsR0FoTGhGO0FBQUEsbTFDQTRLZ0IsT0FBS25CLEtBQUssQ0FBQzBCLEdBQU4sR0FBV3BCLFdBQVcsQ0FBQ2EsT0FBNUIsQ0FBRCxHQUF3QyxHQTVLdkQsNkZBZ0xtQixPQUFLLENBQUNiLFdBQVcsQ0FBQ2EsT0FBWixHQUFvQm5CLEtBQUssQ0FBQzBCLEdBQTNCLElBQWlDcEIsV0FBVyxDQUFDYSxPQUFsRCxDQUFELEdBQThELEdBaExoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd01IOztHQWxQdUJwQixRO1VBQytCRSwyRTs7O0tBRC9CRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc2l0aW9uLjE1NmFhMmZhMWI3OTQ1ZWQ3YmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL0FwcFR5cGVzJztcclxuaW1wb3J0IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMgZnJvbSAnLi4vdXRpbHMvaG9va3MvdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyc7XHJcbmltcG9ydCBEcml2ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0JztcclxuaW1wb3J0IERyaXZlckxpc3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyTGlzdC9Ecml2ZXJMaXN0SXRlbSc7XHJcbmltcG9ydCBSYW5nZVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9SYW5nZVNsaWRlci9SYW5nZVNsaWRlcic7XHJcbmltcG9ydCB7IExhcFBvc2l0aW9uR3JhcGggfSBmcm9tICcuLi9jb21wb25lbnRzL2dyYXBocy9MYXBQb3NpdGlvbkdyYXBoJztcclxuaW1wb3J0IHsgSGludH0gZnJvbSAncmVhY3QtdmlzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZy9Mb2FkaW5nJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3NpdGlvbihwcm9wczpBcHBTdGF0ZSl7XHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBlcnJvciwgcmFjZURldGFpbHMsIGRyaXZlck1hcH0gPSB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzKHByb3BzLnNlYXNvbiwgcHJvcHMucm91bmQpO1xyXG4gICAgY29uc3QgaG92ZXJlZERyaXZlciA9IHByb3BzLmRyaXZlciYmcHJvcHMuZHJpdmVyTGlzdCYmcHJvcHMuZHJpdmVyTGlzdC5maW5kKGQ9PmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIgJiYgZC5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID90cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmRyaXZlckxpc3QpO1xyXG4gICAgY29uc29sZS5sb2cocmFjZURldGFpbHMpO1xyXG4gICAgaWYoaXNMb2FkaW5nfHwhcHJvcHMuZHJpdmVyTGlzdHx8IXJhY2VEZXRhaWxzKXtcclxuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBsYXBzQXJyYXkgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8PXJhY2VEZXRhaWxzLm51bUxhcHM7IGkrKyl7XHJcbiAgICAgICAgbGFwc0FycmF5LnB1c2goe3ZhbHVlOmksbGFiZWw6aX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc29ydERyaXZlckxpc3QoYTp7ZHJpdmVySWQ6c3RyaW5nLGVuYWJsZWQ6Ym9vbGVhbn0sYjp7ZHJpdmVySWQ6c3RyaW5nLGVuYWJsZWQ6Ym9vbGVhbn0pe1xyXG4gICAgICAgIGlmKHByb3BzLmxhcCE9PXVuZGVmaW5lZCAmJiBwcm9wcy5sYXA+MCAmJiBwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFEcml2ZXIgPSBkcml2ZXJNYXAuZ2V0KGEuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICBjb25zdCBiRHJpdmVyID0gZHJpdmVyTWFwLmdldChiLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgbGV0IGFDb21wYXJlID0gYURyaXZlci5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/YURyaXZlci5sYXBzW3Byb3BzLmxhcF0ucG9zaXRpb246MTAwMC1hRHJpdmVyLmxhcHNDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIGxldCBiQ29tcGFyZSA9IGJEcml2ZXIubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2JEcml2ZXIubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uOjEwMDAtYkRyaXZlci5sYXBzQ29tcGxldGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gYUNvbXBhcmUgLSBiQ29tcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24gLSBkcml2ZXJNYXAuZ2V0KGIuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldERyaXZlclRpbWVEaXNwbGF5KGRyaXZlcklkOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZHJpdmVySWQpO1xyXG4gICAgICAgIGlmKHByb3BzLmxhcCE9PXVuZGVmaW5lZCAmJiBwcm9wcy5sYXA+MCAmJiBwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcyl7XHJcbiAgICAgICAgICAgIGlmKGRyaXZlckRhdGEubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlckRhdGEubGFwc1twcm9wcy5sYXBdLmdhcD09PTA/XHJcbiAgICAgICAgICAgICAgICAnTGVhZGVyJ1xyXG4gICAgICAgICAgICAgICAgOicrJytkcml2ZXJEYXRhLmxhcHNbcHJvcHMubGFwXS5nYXAudG9GaXhlZCgzKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ09VVCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRyaXZlckRhdGEucmFjZVRpbWVEc3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LWNvbHVtbic+ICBcclxuICAgICAgICAgICAgICAgIDxEcml2ZXJMaXN0IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJ319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyTGlzdCYmZHJpdmVyTWFwP3Byb3BzLmRyaXZlckxpc3QubWFwKGM9PmMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsYik9PmRyaXZlck1hcC5nZXQoYS5kcml2ZXJJZCkuc3RhcnRpbmdPcmRlciAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuc3RhcnRpbmdPcmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkLGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPERyaXZlckxpc3RJdGVtIGtleT17ZC5kcml2ZXJJZCsnX3N0YXJ0J30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkLmRyaXZlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyPXtkcml2ZXJEYXRhLmRyaXZlci5kcml2ZXJDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UmlnaHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJOdW1iZXI9e2luZGV4KzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkcml2ZXJEYXRhLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZC5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aG92ZXJlZERyaXZlcj9kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyP3tvcGFjaXR5OjF9OntvcGFjaXR5OjAuNX06bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHByb3BzLnNldERyaXZlckxpc3QocHJvcHMuZHJpdmVyTGlzdC5tYXAobD0+KHsuLi5sLGVuYWJsZWQ6ZC5kcml2ZXJJZD09PWwuZHJpdmVySWQ/IWwuZW5hYmxlZDpsLmVuYWJsZWR9KSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+ZC5lbmFibGVkP3Byb3BzLnNldERyaXZlcihkLmRyaXZlcklkKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTpudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tdG9wJz5cclxuICAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zZXRMYXB9XHJcbiAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4tZ3JhcGgtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgUE9TSVRJT04gQlkgTEFQXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICA8TGFwUG9zaXRpb25HcmFwaFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QmJmRyaXZlck1hcD9wcm9wcy5kcml2ZXJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VyaWVzS2V5OmQuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHMubWFwKGw9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmwubGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpsLmxhcE51bS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6LTEqbC5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5TGFiZWw6KC0xKmwucG9zaXRpb24pLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OmwuZHJpdmVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgeFNlbGVjdGVkPXtwcm9wcy5sYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXI9eygpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaGludD17cHJvcHMubGFwJiYocHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/KDxIaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e3g6cHJvcHMubGFwLHk6MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17e3ZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDpwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcy8yPydyaWdodCc6J2xlZnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OicxMDAlJywgZGlzcGxheTonZmxleCcsIHBhZGRpbmdUb3A6JzE1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOidhdXRvIDAuNzVmciBhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOicyMHB4IDBweCAwcHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzLzI/J3NvbGlkIDNweCB3aGl0ZSc6bnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDpwcm9wcy5sYXA+PXJhY2VEZXRhaWxzLm51bUxhcHMvMj8nc29saWQgM3B4IHdoaXRlJzpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0Lm1hcChjPT5jKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KHNvcnREcml2ZXJMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGQsaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJEYXRhID0gZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8RHJpdmVyTGlzdEl0ZW0ga2V5PXtkLmRyaXZlcklkKydfc3RhcnQnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2QuZHJpdmVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXI9e2RyaXZlckRhdGEuZHJpdmVyLmRyaXZlckNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRSaWdodD17Z2V0RHJpdmVyVGltZURpc3BsYXkoZC5kcml2ZXJJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTnVtYmVyPXtpbmRleCsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZHJpdmVyRGF0YS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2QuZW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hvdmVyZWREcml2ZXI/ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlcj97b3BhY2l0eToxfTp7b3BhY2l0eTowLjV9Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBwcm9wcy5zZXREcml2ZXJMaXN0KHByb3BzLmRyaXZlckxpc3QubWFwKGw9Pih7Li4ubCxlbmFibGVkOmQuZHJpdmVySWQ9PT1sLmRyaXZlcklkPyFsLmVuYWJsZWQ6bC5lbmFibGVkfSkpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSk9PmQuZW5hYmxlZD9wcm9wcy5zZXREcml2ZXIoZC5kcml2ZXJJZCk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSk9PnByb3BzLnNldERyaXZlcihudWxsKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGludD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtY29sdW1uJz5cclxuICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDonMTAwJScsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6J2F1dG8gMC43NWZyIGF1dG8nfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXJMaXN0JiZkcml2ZXJNYXA/cHJvcHMuZHJpdmVyTGlzdC5tYXAoYz0+YylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKT0+ZHJpdmVyTWFwLmdldChhLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbiAtIGRyaXZlck1hcC5nZXQoYi5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZCxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxEcml2ZXJMaXN0SXRlbSBrZXk9e2QuZHJpdmVySWQrJ19zdGFydCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZC5kcml2ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENlbnRlcj17ZHJpdmVyRGF0YS5kcml2ZXIuZHJpdmVyQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFJpZ2h0PXtkcml2ZXJEYXRhLnJhY2VUaW1lRHNwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17aW5kZXgrMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0RyaXZlckxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdyaWQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZWZ0LWNvbHVtbntcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOjE7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQtY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46MztcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYWluLXRvcCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzE2MWYyZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSAyMCUsIHJnYmEoMCwwLDAsMCkgODAlLCByZ2JhKDAsMCwwLDEpKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgsIDgsIDgpLCByZ2IoMzIsIDMyLCAzMikpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwcHggMTBweCwgMTBweCAxMHB4LCAxMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDBweCAwcHgsIDVweCA1cHgsIDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21haW4tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OjI1JTtcclxuICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6LjE1O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXAtc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhcC10aXB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhcC10aXAtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiR7KDEwMCoocHJvcHMubGFwLyhyYWNlRGV0YWlscy5udW1MYXBzKSkpKyclJ307XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAubGFwLXRpcC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgcmlnaHQ6ICR7KDEwMCooKHJhY2VEZXRhaWxzLm51bUxhcHMtcHJvcHMubGFwKS8ocmFjZURldGFpbHMubnVtTGFwcykpKSsnJSd9O1xyXG4gICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oaW50LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTdweCAwcHggMTdweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6MDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAwLjc1ZnIgYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=