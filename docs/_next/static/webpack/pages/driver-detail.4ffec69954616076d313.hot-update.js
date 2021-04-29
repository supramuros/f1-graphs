webpackHotUpdate_N_E("pages/driver-detail",{

/***/ "./components/graphs/ScatterGraph.tsx":
/*!********************************************!*\
  !*** ./components/graphs/ScatterGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScatterGraph; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");
/* harmony import */ var _node_modules_react_vis_dist_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/react-vis/dist/style.css */ "./node_modules/react-vis/dist/style.css");
/* harmony import */ var _node_modules_react_vis_dist_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_vis_dist_style_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\mobiledan\\Code\\f1-graphs\\components\\graphs\\ScatterGraph.tsx";




function ScatterGraph(_ref) {
  var _this = this;

  var data = _ref.data,
      minY = _ref.minY,
      maxY = _ref.maxY,
      yOrientation = _ref.yOrientation,
      xSelected = _ref.xSelected,
      seriesSelected = _ref.seriesSelected,
      onSeriesHover = _ref.onSeriesHover,
      onSeriesBlur = _ref.onSeriesBlur,
      hint = _ref.hint;

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "No Data"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this);
  }
  /*
  const vornoiNodes = data.flatMap(d=>d.series)
                              .map(i=>({x:i.x, y:i.y, key:i.key}));
  */


  var dataMin = data.filter(function (f) {
    return !f.disabled;
  }).reduce(function (a, b) {
    return Math.min(a, b.series.reduce(function (c, d) {
      return Math.min(c, d.y);
    }, Infinity));
  }, Infinity);
  var dataMax = data.filter(function (f) {
    return !f.disabled;
  }).reduce(function (a, b) {
    return Math.max(a, b.series.reduce(function (c, d) {
      return Math.max(c, d.y);
    }, -Infinity));
  }, -Infinity);
  var yMin = undefined;
  var yMax = undefined;

  if (yOrientation === 'flipped') {
    yMax = minY && minY > dataMin ? minY : dataMin;
    yMin = maxY && maxY < dataMax ? maxY : dataMax;
  } else {
    yMin = minY && minY > dataMin ? minY : dataMin;
    yMax = maxY && maxY < dataMax ? maxY : dataMax;
  }

  var xTicksMap = new Map();
  data.flatMap(function (x) {
    return x.series;
  }).forEach(function (v) {
    xTicksMap.set(v.x, v.xLabel ? v.xLabel : v.x);
  });
  var xTicksArray = Array.from(xTicksMap.keys()).map(function (m) {
    return {
      value: m,
      label: xTicksMap.get(m)
    };
  });
  /*
  const xTicksArray = Array.from(new Set(data
      .flatMap(x=>x.series
      .map(v=>({value:v.x,label:v.xLabel?v.xLabel:v.x})))));
  
  const yTicksArray = Array.from(new Set(data
          .flatMap(y=>y.series
          .map(v=>({value:v.y,label:v.yLabel?v.yLabel:v.y})))));
  */

  /*const driverPositionOrder = data.map(d=>(
      {
          key:d.driver.driverId,
          color:d.driver.constructorColor,
          code:d.driver.driverCode,
          startOrder:d.driver.startingOrder,
          endOrder:d.driver.endingPosition
      })
  );*/

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["FlexibleXYPlot"], {
    margin: {
      top: 30,
      left: 50,
      bottom: 30,
      right: 50
    },
    yDomain: [yMin - 1, yMax + 1],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["VerticalGridLines"], {
      style: {
        stroke: 'white'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["HorizontalGridLines"], {
      style: {
        stroke: 'white'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this), data.filter(function (f) {
      return !f.disabled;
    }).map(function (d) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["MarkSeries"], {
        id: d.seriesKey //curve={'curveMonotoneX'}
        ,
        color: d.color,
        strokeWidth: d.seriesKey === seriesSelected ? 3 : 1,
        size: 3,
        opacity: seriesSelected ? d.seriesKey === seriesSelected ? 1 : 0.5 : 1,
        data: d.series,
        onSeriesMouseOver: function onSeriesMouseOver(e) {
          onSeriesHover(d.seriesKey);
        },
        onSeriesMouseOut: function onSeriesMouseOut(e) {
          onSeriesBlur();
        } //onNearestX={(value)=>console.log(value)}

      }, d.seriesKey, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["Borders"], {
      style: {
        bottom: {
          fill: '#161f2d'
        },
        left: {
          fill: '#161f2d'
        },
        right: {
          fill: '#161f2d'
        },
        top: {
          fill: '#161f2d'
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
      style: {
        stroke: 'white'
      },
      orientation: "bottom",
      tickFormat: function tickFormat(v) {
        return xTicksArray[v - 1].label;
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
      style: {
        stroke: 'white'
      },
      orientation: "top",
      tickFormat: function tickFormat(v) {
        return xTicksArray[v - 1].label;
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
      orientation: 'left',
      style: {
        stroke: 'white'
      } //tickTotal={data.length}
      //tickValues={driverPositionOrder.sort((a,b)=>a.startOrder-b.startOrder).map(l=>l.startOrder*-1)}
      //tickFormat={v=>{return driverPositionOrder.sort((a,b)=>a.startOrder-b.startOrder)[(-1*v)-1].code;}
      //        }

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
      orientation: 'right',
      style: {
        stroke: 'white'
      },
      tickFormat: function tickFormat(v) {
        return v;
      } //tickTotal={data.length}
      //tickValues={driverPositionOrder.sort((a,b)=>a.endOrder-b.endOrder).map(l=>l.startOrder*-1)}
      //tickFormat={v=>{return driverPositionOrder.sort((a,b)=>a.endOrder-b.endOrder)[(-1*v)-1].code;}
      //        }

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, this), hint ? hint : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1345680363",
      children: ".list-container.jsx-1345680363{list-style:none;padding-inline-start:0;margin:0;padding:15px 0px 18px 0px;margin-block-start:0;margin-block-end:0;display:grid;grid-template-columns:auto 0.75fr auto;height:100%;line-height:100%;font-size:0.75rem;justify-items:stretch;background-color:black;background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXGNvbXBvbmVudHNcXGdyYXBoc1xcU2NhdHRlckdyYXBoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnS29CLEFBRzRCLGdCQUNPLHVCQUNkLFNBQ2lCLDBCQUNMLHFCQUNGLG1CQUNOLGFBQzJCLHVDQUM1QixZQUNLLGlCQUNDLGtCQUNJLHNCQUNDLHVCQUNNLDRCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXG1vYmlsZWRhblxcQ29kZVxcZjEtZ3JhcGhzXFxjb21wb25lbnRzXFxncmFwaHNcXFNjYXR0ZXJHcmFwaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIaW50LCBGbGV4aWJsZVhZUGxvdCwgWEF4aXMsIFlBeGlzLCBWZXJ0aWNhbEdyaWRMaW5lcywgSG9yaXpvbnRhbEdyaWRMaW5lcyxNYXJrU2VyaWVzLCBCb3JkZXJzfSBmcm9tICdyZWFjdC12aXMnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC12aXMvZGlzdC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBHcmFwaERhdGEgfSBmcm9tICcuLi8uLi90eXBlcy9HcmFwaFR5cGVzJztcclxuLypcclxuKiAgIERpc3BsYXlzIGEgc2NhdHRlciBncmFwaCB3aXRoIG1hcmtzIGZvciBlYWNoIHNlcmllc1xyXG4qL1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGRhdGE6R3JhcGhEYXRhW10sXHJcbiAgICBtaW5ZPzpudW1iZXIsXHJcbiAgICBtYXhZPzpudW1iZXIsXHJcbiAgICB5T3JpZW50YXRpb24/Oidub3JtYWwnfCdmbGlwcGVkJyxcclxuICAgIHhTZWxlY3RlZD86bnVtYmVyLFxyXG4gICAgc2VyaWVzU2VsZWN0ZWQ/OnN0cmluZyxcclxuICAgIG9uU2VyaWVzSG92ZXI6KGtleTpzdHJpbmcpPT52b2lkLFxyXG4gICAgb25TZXJpZXNCbHVyOigpPT52b2lkLFxyXG4gICAgaGludD86UmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjYXR0ZXJHcmFwaChcclxuICAgIHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIG1pblksXHJcbiAgICAgICAgbWF4WSxcclxuICAgICAgICB5T3JpZW50YXRpb24sXHJcbiAgICAgICAgeFNlbGVjdGVkLFxyXG4gICAgICAgIHNlcmllc1NlbGVjdGVkLFxyXG4gICAgICAgIG9uU2VyaWVzSG92ZXIsXHJcbiAgICAgICAgb25TZXJpZXNCbHVyLFxyXG4gICAgICAgIGhpbnRcclxuICAgIH06UHJvcHMpe1xyXG5cclxuICAgIGlmKCFkYXRhKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+Tm8gRGF0YTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb25zdCB2b3Jub2lOb2RlcyA9IGRhdGEuZmxhdE1hcChkPT5kLnNlcmllcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGk9Pih7eDppLngsIHk6aS55LCBrZXk6aS5rZXl9KSk7XHJcbiAgICAqL1xyXG4gICAgY29uc3QgZGF0YU1pbiA9IGRhdGEuZmlsdGVyKGY9PiFmLmRpc2FibGVkKS5yZWR1Y2UoKGEsYik9Pk1hdGgubWluKGEsXHJcbiAgICAgICAgYi5zZXJpZXMucmVkdWNlKChjLGQpPT5NYXRoLm1pbihjLGQueSksSW5maW5pdHkpKVxyXG4gICAgICAgICxJbmZpbml0eSk7XHJcbiAgICBjb25zdCBkYXRhTWF4ID0gZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLnJlZHVjZSgoYSxiKT0+TWF0aC5tYXgoYSxcclxuICAgICAgICBiLnNlcmllcy5yZWR1Y2UoKGMsZCk9Pk1hdGgubWF4KGMsZC55KSwtSW5maW5pdHkpKVxyXG4gICAgICAgICwtSW5maW5pdHkpO1xyXG4gICAgbGV0IHlNaW4gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgeU1heCA9IHVuZGVmaW5lZDtcclxuICAgIFxyXG5cclxuICAgIGlmKHlPcmllbnRhdGlvbj09PSdmbGlwcGVkJyl7XHJcbiAgICAgICAgeU1heCA9IG1pblkmJm1pblk+ZGF0YU1pbj9taW5ZOmRhdGFNaW47XHJcbiAgICAgICAgeU1pbiA9IG1heFkmJm1heFk8ZGF0YU1heD9tYXhZOmRhdGFNYXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB5TWluID0gbWluWSYmbWluWT5kYXRhTWluP21pblk6ZGF0YU1pbjtcclxuICAgICAgICB5TWF4ID0gbWF4WSYmbWF4WTxkYXRhTWF4P21heFk6ZGF0YU1heDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgeFRpY2tzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YS5mbGF0TWFwKHg9Pnguc2VyaWVzKS5mb3JFYWNoKHY9PntcclxuICAgICAgICB4VGlja3NNYXAuc2V0KHYueCx2LnhMYWJlbD92LnhMYWJlbDp2LngpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20oeFRpY2tzTWFwLmtleXMoKSkubWFwKG09Pih7dmFsdWU6bSxsYWJlbDp4VGlja3NNYXAuZ2V0KG0pfSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhXHJcbiAgICAgICAgLmZsYXRNYXAoeD0+eC5zZXJpZXNcclxuICAgICAgICAubWFwKHY9Pih7dmFsdWU6di54LGxhYmVsOnYueExhYmVsP3YueExhYmVsOnYueH0pKSkpKTtcclxuICAgXHJcbiAgICBjb25zdCB5VGlja3NBcnJheSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhXHJcbiAgICAgICAgICAgIC5mbGF0TWFwKHk9Pnkuc2VyaWVzXHJcbiAgICAgICAgICAgIC5tYXAodj0+KHt2YWx1ZTp2LnksbGFiZWw6di55TGFiZWw/di55TGFiZWw6di55fSkpKSkpO1xyXG4gICAgKi9cclxuICAgIC8qY29uc3QgZHJpdmVyUG9zaXRpb25PcmRlciA9IGRhdGEubWFwKGQ9PihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTpkLmRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICAgICAgY29sb3I6ZC5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICAgICAgY29kZTpkLmRyaXZlci5kcml2ZXJDb2RlLFxyXG4gICAgICAgICAgICBzdGFydE9yZGVyOmQuZHJpdmVyLnN0YXJ0aW5nT3JkZXIsXHJcbiAgICAgICAgICAgIGVuZE9yZGVyOmQuZHJpdmVyLmVuZGluZ1Bvc2l0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICk7Ki9cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleGlibGVYWVBsb3RcclxuICAgICAgICBtYXJnaW49e3t0b3A6IDMwLCBsZWZ0OiA1MCwgYm90dG9tOiAzMCwgcmlnaHQ6IDUwfX1cclxuICAgICAgICB5RG9tYWluPXtbeU1pbi0xLHlNYXgrMV19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8VmVydGljYWxHcmlkTGluZXMgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEhvcml6b250YWxHcmlkTGluZXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLm1hcChkPT4oXHJcbiAgICAgICAgICAgIDxNYXJrU2VyaWVzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Quc2VyaWVzS2V5fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Quc2VyaWVzS2V5fVxyXG4gICAgICAgICAgICAgICAgLy9jdXJ2ZT17J2N1cnZlTW9ub3RvbmVYJ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtkLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2Quc2VyaWVzS2V5PT09IHNlcmllc1NlbGVjdGVkPzM6MX0gXHJcbiAgICAgICAgICAgICAgICBzaXplPXszfVxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eT17c2VyaWVzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/ZC5zZXJpZXNLZXkgPT09IHNlcmllc1NlbGVjdGVkPzE6MC41XHJcbiAgICAgICAgICAgICAgICAgICAgOjF9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkLnNlcmllc31cclxuICAgICAgICAgICAgICAgIG9uU2VyaWVzTW91c2VPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzSG92ZXIoZC5zZXJpZXNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uU2VyaWVzTW91c2VPdXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9vbk5lYXJlc3RYPXsodmFsdWUpPT5jb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEJvcmRlcnMgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvdHRvbToge2ZpbGw6ICcjMTYxZjJkJ30sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIHRvcDoge2ZpbGw6ICcjMTYxZjJkJ31cclxuICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICA8WEF4aXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249J2JvdHRvbSdcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3Y9PnhUaWNrc0FycmF5W3YtMV0ubGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj0ndG9wJ1xyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdD17dj0+eFRpY2tzQXJyYXlbdi0xXS5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tUb3RhbD17ZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tWYWx1ZXM9e2RyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5zdGFydE9yZGVyLWIuc3RhcnRPcmRlcikubWFwKGw9Pmwuc3RhcnRPcmRlciotMSl9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tGb3JtYXQ9e3Y9PntyZXR1cm4gZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLnN0YXJ0T3JkZXItYi5zdGFydE9yZGVyKVsoLTEqdiktMV0uY29kZTt9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8WUF4aXNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPXsncmlnaHQnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0PXt2PT52fVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVmFsdWVzPXtkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuZW5kT3JkZXItYi5lbmRPcmRlcikubWFwKGw9Pmwuc3RhcnRPcmRlciotMSl9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tGb3JtYXQ9e3Y9PntyZXR1cm4gZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLmVuZE9yZGVyLWIuZW5kT3JkZXIpWygtMSp2KS0xXS5jb2RlO31cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7aGludD9oaW50Om51bGx9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saXN0LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDowO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4IDBweCAxOHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6MDtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMC43NWZyIGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+ICAgIFxyXG4gICAgICAgIDwvRmxleGlibGVYWVBsb3Q+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\components\\\\graphs\\\\ScatterGraph.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, this);
}
_c = ScatterGraph;

var _c;

$RefreshReg$(_c, "ScatterGraph");

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

/***/ }),

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
/* harmony import */ var _components_graphs_ScatterGraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/graphs/ScatterGraph */ "./components/graphs/ScatterGraph.tsx");
/* harmony import */ var _utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks/useResultsLapsPitstops */ "./utils/hooks/useResultsLapsPitstops.ts");
/* harmony import */ var _utils_hooks_useHistogram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/hooks/useHistogram */ "./utils/hooks/useHistogram.ts");
/* harmony import */ var _components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/common/Loading/Loading */ "./components/common/Loading/Loading.tsx");




var _jsxFileName = "C:\\Users\\mobiledan\\Code\\f1-graphs\\pages\\driver-detail.tsx",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_mobiledan_Code_f1_graphs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











/*Detail for a single driver at a time
*/

function DriverDetail(props) {
  _s();

  var _this = this;

  var _useResultsLapsPitsto = Object(_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_10__["default"])(props.season, props.round),
      isLoading = _useResultsLapsPitsto.isLoading,
      error = _useResultsLapsPitsto.error,
      raceDetails = _useResultsLapsPitsto.raceDetails,
      driverMap = _useResultsLapsPitsto.driverMap;

  var hoveredDriver = props.driver && props.driverList && props.driverList.find(function (d) {
    return d.driverId === props.driver && d.enabled;
  }) ? true : false;
  var histogram = Object(_utils_hooks_useHistogram__WEBPACK_IMPORTED_MODULE_11__["default"])(props.season, props.round, props.driver, props.driver ? driverMap.get(props.driver).laps : undefined, props.driver ? driverMap.get(props.driver).driver.constructorColor : undefined);

  if (isLoading || !props.driverList) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
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
      children: props.driver ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_graphs_ScatterGraph__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: props.driverList.filter(function (f) {
          return f.driverId === props.driver;
        }).map(function (d) {
          return {
            seriesKey: d.driverId,
            series: driverMap.get(d.driverId).laps.filter(function (f) {
              return f.lapNum > 0;
            }).map(function (l) {
              return {
                key: l.driverId,
                x: l.lapNum,
                xLabel: l.lapNum.toString(),
                y: l.time,
                color: driverMap.get(d.driverId).driver.constructorColor,
                opacity: props.driver ? props.driver === d.driverId ? 1 : 0.5 : 1,
                disabled: !d.enabled
              };
            }),
            color: driverMap.get(d.driverId).driver.constructorColor,
            disabled: !d.enabled
          };
        }),
        minY: driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime - 5,
        maxY: driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime * 2,
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
        lineNumber: 121,
        columnNumber: 17
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_graphs_ScatterGraph__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: props.driverList.map(function (d) {
          return {
            seriesKey: d.driverId,
            series: driverMap.get(d.driverId).laps.filter(function (f) {
              return f.lapNum > 0;
            }).map(function (l) {
              return {
                key: l.driverId,
                x: driverMap.get(d.driverId).endingPosition,
                xLabel: driverMap.get(d.driverId).driver.driverCode,
                y: l.time,
                color: driverMap.get(d.driverId).driver.constructorColor,
                opacity: props.driver ? props.driver === d.driverId ? 1 : 0.5 : 1,
                disabled: !d.enabled
              };
            }),
            color: driverMap.get(d.driverId).driver.constructorColor,
            disabled: !d.enabled
          };
        }),
        minY: driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime - 5,
        maxY: driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime * 2,
        xSelected: props.lap,
        seriesSelected: props.driver,
        onSeriesHover: function onSeriesHover(d) {
          return props.setDriver(null);
        },
        onSeriesBlur: function onSeriesBlur() {
          return props.setDriver(null);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 14
      }, this)
    }, void 0, false, {
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
            lineNumber: 178,
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
            lineNumber: 189,
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
            lineNumber: 197,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "right-bottom-graph-title",
        className: "jsx-2450613129",
        children: histogram ? 'LAP TIME HISTOGRAM' : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
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
          lineNumber: 218,
          columnNumber: 25
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2450613129",
      children: ".grid-container.jsx-2450613129{display:grid;grid-template-columns:auto 2fr 1fr;grid-template-rows:auto 1fr;height:100%;min-height:500px;}.left-column.jsx-2450613129{grid-column:1;grid-row:1/3;background-color:transparent;}.right-column.jsx-2450613129{grid-column:3;grid-row:1/3;background-color:transparent;display:grid;grid-template-rows:1fr 1fr;}.main-top.jsx-2450613129{grid-column:2;grid-row:1;min-height:2rem;margin-left:35px;margin-right:70px;background-color:transparent;padding-top:15px;}#main-graph-title.jsx-2450613129{position:fixed;left:15%;top:25%;font-size:3rem;opacity:.15;z-index:2;}.main.jsx-2450613129{grid-column:2;grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;min-height:500px;height:100%;}#right-bottom-graph-title.jsx-2450613129{position:fixed;left:75%;top:58%;font-size:1rem;opacity:.15;z-index:2;}.right-top-column.jsx-2450613129{grid-row:1;background-color:transparent;}.right-bottom-column.jsx-2450613129{grid-row:2;background-color:transparent;}h1.jsx-2450613129{margin:0;padding:0;font-size:1rem;}h2.jsx-2450613129{margin:0;padding:0;font-size:0.75rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXHBhZ2VzXFxkcml2ZXItZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrT29CLEFBR3lCLEFBT0MsQUFLQSxBQU9BLEFBU0UsQUFRRixBQVVFLEFBUUwsQUFJQSxBQUlGLEFBS0EsU0FKQyxBQUtBLEVBYm1CLEFBSUEsRUExRE0sQ0FPdEIsQUFLQSxBQU9GLEFBaUJBLENBUkYsQUFrQkEsSUFpQk0sQUFLRyxLQXZDVixBQWtCQSxDQTNCUSxBQWlCUyxFQTdCSSxBQUtBLEtBaUJkLEFBa0JBLEVBZ0JsQixHQUtBLEdBZEEsQUFJQSxDQXRDb0IsTUFVTCxBQWtCQSxDQWhEZ0IsRUFxQ3lVLE1BN0J4VyxBQUtnQixFQVFLLENBVVIsQUFrQkEsVUFuQ2lCLEFBa0I5QixBQWtCQSxPQWpEZSxBQXFCa0IsWUFwQmIsUUFhcEIsU0FaQSxBQW9Cb0IsaUJBQ3BCLHFRQWM4RCx1REFDSCxvREFDdkMsaUJBQ0wsWUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXG1vYmlsZWRhblxcQ29kZVxcZjEtZ3JhcGhzXFxwYWdlc1xcZHJpdmVyLWRldGFpbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vUmFuZ2VTbGlkZXIvUmFuZ2VTbGlkZXInO1xyXG5pbXBvcnQgRHJpdmVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlckxpc3QvRHJpdmVyTGlzdCc7XHJcbmltcG9ydCBEcml2ZXJMaXN0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0RyaXZlckxpc3QvRHJpdmVyTGlzdEl0ZW0nO1xyXG5pbXBvcnQgRHJpdmVyU3VtbWFyeUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJTdW1tYXJ5Q2FyZC9Ecml2ZXJTdW1tYXJ5Q2FyZCc7XHJcbmltcG9ydCBTdW1tYXJ5Q2FyZFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJTdW1tYXJ5Q2FyZC9TdW1tYXJ5Q2FyZFNlY3Rpb24nO1xyXG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9ncmFwaHMvQmFyR3JhcGgnO1xyXG5pbXBvcnQgU2NhdHRlckdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JhcGhzL1NjYXR0ZXJHcmFwaCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvQXBwVHlwZXMnO1xyXG5pbXBvcnQgdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyBmcm9tICcuLi91dGlscy9ob29rcy91c2VSZXN1bHRzTGFwc1BpdHN0b3BzJztcclxuaW1wb3J0IHVzZUhpc3RvZ3JhbSBmcm9tICcuLi91dGlscy9ob29rcy91c2VIaXN0b2dyYW0nO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nL0xvYWRpbmcnO1xyXG5cclxuLypEZXRhaWwgZm9yIGEgc2luZ2xlIGRyaXZlciBhdCBhIHRpbWVcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJpdmVyRGV0YWlsKHByb3BzOkFwcFN0YXRlKXtcclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIGVycm9yLCByYWNlRGV0YWlscywgZHJpdmVyTWFwfSA9IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMocHJvcHMuc2Vhc29uLCBwcm9wcy5yb3VuZCk7XHJcbiAgICBjb25zdCBob3ZlcmVkRHJpdmVyID0gcHJvcHMuZHJpdmVyJiZwcm9wcy5kcml2ZXJMaXN0JiZwcm9wcy5kcml2ZXJMaXN0LmZpbmQoZD0+ZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlciAmJiBkLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgP3RydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2U7XHJcbiAgICBjb25zdCBoaXN0b2dyYW0gPXVzZUhpc3RvZ3JhbShwcm9wcy5zZWFzb24sIHByb3BzLnJvdW5kLHByb3BzLmRyaXZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5sYXBzOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcjp1bmRlZmluZWQpO1xyXG5cclxuICAgIGlmKGlzTG9hZGluZ3x8IXByb3BzLmRyaXZlckxpc3Qpe1xyXG4gICAgICAgIHJldHVybiA8TG9hZGluZy8+XHJcbiAgICB9IFxyXG4gICAgY29uc3QgbGFwc0FycmF5ID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPD1yYWNlRGV0YWlscy5udW1MYXBzOyBpKyspe1xyXG4gICAgICAgIGxhcHNBcnJheS5wdXNoKHt2YWx1ZTppLGxhYmVsOml9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNpbmdsZUxhcERhdGEgPSBwcm9wcy5kcml2ZXJMaXN0Lm1hcChkPT5cclxuICAgICAgICB7cmV0dXJuIGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChmZixpbmRleCxhcnIpPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmxhcCYmcHJvcHMubGFwPjA/ZmYubGFwTnVtPT09cHJvcHMubGFwXHJcbiAgICAgICAgICAgICAgICA6KGluZGV4PT09YXJyLmxlbmd0aC0xJiZmZi5sYXBOdW0+PXJhY2VEZXRhaWxzLm51bUxhcHMtMSkpXHJcbiAgICAgICAgICAgIC5tYXAobD0+KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyaXZlcklkOmwuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhcHNDb21wbGV0ZWQ6IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgICAgICBsYXBOdW06bC5sYXBOdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOmwuZ2FwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uR2FwOmwucG9zaXRpb25HYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246bC5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOmwudGltZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lRHNwOmwudGltZURzcCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFRpbWU6bC50b3RhbFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGl0U3RvcFRpbWU6bC5waXRTdG9wVGltZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lTmV0UGl0U3RvcDpsLnRpbWVOZXRQaXRTdG9wXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICApLmZsYXQoKVxyXG4gICAgICAgIC5zb3J0KChhLGIpPT5hLnBvc2l0aW9uLWIucG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgZHJpdmVyTGlzdERpc3BsYXkgPSBwcm9wcy5kcml2ZXJMaXN0Lm1hcChkPT4oe1xyXG4gICAgICAgIGRyaXZlcklkOmQuZHJpdmVySWQsXHJcbiAgICAgICAgZW5hYmxlZDpkLmVuYWJsZWQsXHJcbiAgICAgICAgZHJpdmVyQ29kZTpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLFxyXG4gICAgICAgIGNvbnN0cnVjdG9yQ29sb3I6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICB0aW1lOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS50aW1lOidPVVQnXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VUaW1lLFxyXG4gICAgICAgIHRpbWVEc3A6cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnRpbWVEc3A6J09VVCdcclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVRpbWVEc3AsXHJcbiAgICAgICAgZ2FwOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS5nYXA6J09VVCdcclxuICAgICAgICAgICAgOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkucmFjZVRpbWVEc3AsXHJcbiAgICAgICAgcG9zaXRpb25HYXA6cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwc1twcm9wcy5sYXBdLnBvc2l0aW9uR2FwOidPVVQnXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VUaW1lRHNwLFxyXG4gICAgICAgIHBvc2l0aW9uOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS5wb3NpdGlvbjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uLFxyXG4gICAgfSkpLnNvcnQoKGEsYik9PmEucG9zaXRpb24tYi5wb3NpdGlvbik7ICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQtY29sdW1uJz4gIFxyXG4gICAgICAgICAgICAgICAgPERyaXZlckxpc3QgXHJcbiAgICAgICAgICAgICAgICAvL3N0eWxlPXt7aGVpZ2h0OicxMDAlJywgZ3JpZFRlbXBsYXRlQ29sdW1uczonYXV0byAwLjc1ZnIgYXV0byd9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOjB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXshcHJvcHMubGFwfHxwcm9wcy5sYXA9PT0wfHxwcm9wcy5sYXA+PXJhY2VEZXRhaWxzLm51bUxhcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPzxoMT5GaW5hbCBSZXN1bHRzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA6PD48aDE+TEFQPC9oMT48aDI+e3Byb3BzLmxhcH0ve3JhY2VEZXRhaWxzLm51bUxhcHN9PC9oMj48Lz59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZHJpdmVyTGlzdERpc3BsYXkubWFwKGQ9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVyRGF0YSA9IGRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPERyaXZlckxpc3RJdGVtIGtleT17ZC5kcml2ZXJJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkLmRyaXZlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyPXtkcml2ZXJEYXRhLmRyaXZlci5kcml2ZXJDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UmlnaHQ9e3Byb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ZC5nYXA9PT0wPydJbnRlcnZhbCc6dHlwZW9mIGQuZ2FwPT09J251bWJlcic/ZC5nYXAudG9GaXhlZCgzKS50b1N0cmluZygpOmQuZ2FwLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkLnRpbWVEc3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlck51bWJlcj17ZC5wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RyaXZlckRhdGEuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtob3ZlcmVkRHJpdmVyP2QuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXI/e29wYWNpdHk6MX06e29wYWNpdHk6MC41fTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gcHJvcHMuc2V0RHJpdmVyTGlzdChwcm9wcy5kcml2ZXJMaXN0Lm1hcChsPT4oey4uLmwsZW5hYmxlZDpkLmRyaXZlcklkPT09bC5kcml2ZXJJZD8hbC5lbmFibGVkOmwuZW5hYmxlZH0pKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5kLmVuYWJsZWQ/cHJvcHMuc2V0RHJpdmVyKGQuZHJpdmVySWQpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Ecml2ZXJMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tdG9wJz5cclxuICAgICAgICAgICAgPFJhbmdlU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmxhcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNldExhcH1cclxuICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluLWdyYXBoLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kcml2ZXI/J0xBUCBUSU1FUyBGT1IgJytkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikuZHJpdmVyLmRyaXZlckNvZGU6J0xBUCBUSU1FUyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kcml2ZXI/XHJcbiAgICAgICAgICAgICAgICA8U2NhdHRlckdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZHJpdmVyTGlzdC5maWx0ZXIoZj0+Zi5kcml2ZXJJZD09PXByb3BzLmRyaXZlcikubWFwKGQ9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzS2V5OmQuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzLmZpbHRlcihmPT5mLmxhcE51bT4wKS5tYXAobD0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6bC5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmwubGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpsLmxhcE51bS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6bC50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTpwcm9wcy5kcml2ZXI/cHJvcHMuZHJpdmVyPT09ZC5kcml2ZXJJZD8xOjAuNToxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDohZC5lbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBtaW5ZPXtkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlckxpc3RbMF0uZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZS01fVxyXG4gICAgICAgICAgICAgICAgICAgIG1heFk9e2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyTGlzdFswXS5kcml2ZXJJZCkucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lKjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeFNlbGVjdGVkPXtwcm9wcy5sYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzU2VsZWN0ZWQ9e3Byb3BzLmRyaXZlcn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXI9eygpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6PFNjYXR0ZXJHcmFwaFxyXG4gICAgICAgICAgICBkYXRhPXtwcm9wcy5kcml2ZXJMaXN0Lm1hcChkPT4oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzS2V5OmQuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwcy5maWx0ZXIoZj0+Zi5sYXBOdW0+MCkubWFwKGw9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTpsLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZW5kaW5nUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhMYWJlbDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5kcml2ZXJDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OmwudGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTpwcm9wcy5kcml2ZXI/cHJvcHMuZHJpdmVyPT09ZC5kcml2ZXJJZD8xOjAuNToxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDohZC5lbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgbWluWT17ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXJMaXN0WzBdLmRyaXZlcklkKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWUtNX1cclxuICAgICAgICAgICAgbWF4WT17ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXJMaXN0WzBdLmRyaXZlcklkKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWUqMn1cclxuICAgICAgICAgICAgeFNlbGVjdGVkPXtwcm9wcy5sYXB9XHJcbiAgICAgICAgICAgIHNlcmllc1NlbGVjdGVkPXtwcm9wcy5kcml2ZXJ9XHJcbiAgICAgICAgICAgIG9uU2VyaWVzSG92ZXI9eyhkKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICBvblNlcmllc0JsdXI9eygpPT5wcm9wcy5zZXREcml2ZXIobnVsbCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC1jb2x1bW4nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtdG9wLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICA8RHJpdmVyU3VtbWFyeUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZHJpdmVyTGlzdC5maW5kKGQ9PmQuZW5hYmxlZCYmZC5kcml2ZXJJZD09PXByb3BzLmRyaXZlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUNhcmRTZWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdmYXN0ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0Zhc3Rlc3QgTGFwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonUmFuaycsdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFJhbms6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidMYXAnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwTnVtYmVyOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonVGltZScsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1NwZWVkJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFNwZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsnICcrZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVW5pdHM6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5Q2FyZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0nc2xvd2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdTbG93ZXN0IExhcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0xhcCcsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLnNsb3dlc3RMYXBOZXRQaXQ6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidUaW1lJyx2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0VGltZS50b0ZpeGVkKDMpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUNhcmRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3BhY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nTGFwIFBhY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwcz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwICcrcHJvcHMubGFwLCB2YWx1ZTpwcm9wcy5kcml2ZXImJmRyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmxhcHNbcHJvcHMubGFwXS50aW1lLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidBdmcnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5hdmdMYXBOZXRQaXRUaW1lLnRvRml4ZWQoMyk6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonU3RkIERldicsdmFsdWU6cHJvcHMuZHJpdmVyP01hdGguc3FydChkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLnZhcmlhbmNlTmV0UGl0VGltZSkudG9GaXhlZCgzKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyaXZlclN1bW1hcnlDYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdyaWdodC1ib3R0b20tZ3JhcGgtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoaXN0b2dyYW0/J0xBUCBUSU1FIEhJU1RPR1JBTSc6Jyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC1ib3R0b20tY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICB7aGlzdG9ncmFtP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFyR3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2hpc3RvZ3JhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzSG92ZXI9eyhkKT0+cHJvcHMuc2V0RHJpdmVyKGQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmdyaWQtY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIDJmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcjtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0LWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MTtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MS8zO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjozO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxLzM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluLXRvcCB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjI7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjE7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjcwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbWFpbi1ncmFwaC10aXRsZSB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgICAgICAgICBsZWZ0OjE1JTtcclxuICAgICAgICAgICAgdG9wOjI1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6LjE1O1xyXG4gICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNjFmMmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSAyMCUsIHJnYmEoMCwwLDAsMCkgODAlLCByZ2JhKDAsMCwwLDEpKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTYxZjJkIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICMxNjFmMmQgNzUlLCAjMTYxZjJkKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgsIDgsIDgpLCByZ2IoMzIsIDMyLCAzMikpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSwgMTBweCAxMHB4LCAxMHB4IDEwcHgsIDEwcHggNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAwcHggMHB4LCA1cHggNXB4LCAwcHggMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3JpZ2h0LWJvdHRvbS1ncmFwaC10aXRsZSB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgICAgICAgICBsZWZ0Ojc1JTtcclxuICAgICAgICAgICAgdG9wOjU4JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6LjE1O1xyXG4gICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC10b3AtY29sdW1ue1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtYm90dG9tLWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG5cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\pages\\\\driver-detail.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, this);
}

_s(DriverDetail, "MBtuQ8Lkfy7GTywCfxbSy4sBzms=", false, function () {
  return [_utils_hooks_useResultsLapsPitstops__WEBPACK_IMPORTED_MODULE_10__["default"], _utils_hooks_useHistogram__WEBPACK_IMPORTED_MODULE_11__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmFwaHMvU2NhdHRlckdyYXBoLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJpdmVyLWRldGFpbC50c3giXSwibmFtZXMiOlsiU2NhdHRlckdyYXBoIiwiZGF0YSIsIm1pblkiLCJtYXhZIiwieU9yaWVudGF0aW9uIiwieFNlbGVjdGVkIiwic2VyaWVzU2VsZWN0ZWQiLCJvblNlcmllc0hvdmVyIiwib25TZXJpZXNCbHVyIiwiaGludCIsImRhdGFNaW4iLCJmaWx0ZXIiLCJmIiwiZGlzYWJsZWQiLCJyZWR1Y2UiLCJhIiwiYiIsIk1hdGgiLCJtaW4iLCJzZXJpZXMiLCJjIiwiZCIsInkiLCJJbmZpbml0eSIsImRhdGFNYXgiLCJtYXgiLCJ5TWluIiwidW5kZWZpbmVkIiwieU1heCIsInhUaWNrc01hcCIsIk1hcCIsImZsYXRNYXAiLCJ4IiwiZm9yRWFjaCIsInYiLCJzZXQiLCJ4TGFiZWwiLCJ4VGlja3NBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJtYXAiLCJtIiwidmFsdWUiLCJsYWJlbCIsImdldCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInN0cm9rZSIsInNlcmllc0tleSIsImNvbG9yIiwiZSIsImZpbGwiLCJEcml2ZXJEZXRhaWwiLCJwcm9wcyIsInVzZVJlc3VsdHNMYXBzUGl0c3RvcHMiLCJzZWFzb24iLCJyb3VuZCIsImlzTG9hZGluZyIsImVycm9yIiwicmFjZURldGFpbHMiLCJkcml2ZXJNYXAiLCJob3ZlcmVkRHJpdmVyIiwiZHJpdmVyIiwiZHJpdmVyTGlzdCIsImZpbmQiLCJkcml2ZXJJZCIsImVuYWJsZWQiLCJoaXN0b2dyYW0iLCJ1c2VIaXN0b2dyYW0iLCJsYXBzIiwiY29uc3RydWN0b3JDb2xvciIsImxhcHNBcnJheSIsImkiLCJudW1MYXBzIiwicHVzaCIsInNpbmdsZUxhcERhdGEiLCJmZiIsImluZGV4IiwiYXJyIiwibGFwIiwibGFwTnVtIiwibGVuZ3RoIiwibCIsImxhcHNDb21wbGV0ZWQiLCJnYXAiLCJwb3NpdGlvbkdhcCIsInBvc2l0aW9uIiwidGltZSIsInRpbWVEc3AiLCJ0b3RhbFRpbWUiLCJwaXRTdG9wVGltZSIsInRpbWVOZXRQaXRTdG9wIiwiZmxhdCIsInNvcnQiLCJkcml2ZXJMaXN0RGlzcGxheSIsImRyaXZlckNvZGUiLCJyYWNlVGltZSIsInJhY2VUaW1lRHNwIiwiZW5kaW5nUG9zaXRpb24iLCJwYWRkaW5nIiwiZHJpdmVyRGF0YSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsIm9wYWNpdHkiLCJzZXREcml2ZXJMaXN0Iiwic2V0RHJpdmVyIiwic2V0TGFwIiwia2V5IiwicmFjZVN0YXRzIiwiZmFzdGVzdExhcFRpbWUiLCJmYXN0ZXN0TGFwUmFuayIsImZhc3Rlc3RMYXBOdW1iZXIiLCJmYXN0ZXN0TGFwU3BlZWQiLCJmYXN0ZXN0TGFwVW5pdHMiLCJzbG93ZXN0TGFwTmV0UGl0Iiwic2xvd2VzdExhcE5ldFBpdFRpbWUiLCJhdmdMYXBOZXRQaXRUaW1lIiwic3FydCIsInZhcmlhbmNlTmV0UGl0VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBbUJlLFNBQVNBLFlBQVQsT0FXSDtBQUFBOztBQUFBLE1BVEpDLElBU0ksUUFUSkEsSUFTSTtBQUFBLE1BUkpDLElBUUksUUFSSkEsSUFRSTtBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLFlBTUksUUFOSkEsWUFNSTtBQUFBLE1BTEpDLFNBS0ksUUFMSkEsU0FLSTtBQUFBLE1BSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLE1BSEpDLGFBR0ksUUFISkEsYUFHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTs7QUFFUixNQUFHLENBQUNSLElBQUosRUFBUztBQUNMLHdCQUNJO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFE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RSw0RSxFQUlsQ2Msa0U7OztLQUxHaEIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kcml2ZXItZGV0YWlsLjRmZmVjNjk5NTQ2MTYwNzZkMzEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIaW50LCBGbGV4aWJsZVhZUGxvdCwgWEF4aXMsIFlBeGlzLCBWZXJ0aWNhbEdyaWRMaW5lcywgSG9yaXpvbnRhbEdyaWRMaW5lcyxNYXJrU2VyaWVzLCBCb3JkZXJzfSBmcm9tICdyZWFjdC12aXMnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC12aXMvZGlzdC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBHcmFwaERhdGEgfSBmcm9tICcuLi8uLi90eXBlcy9HcmFwaFR5cGVzJztcclxuLypcclxuKiAgIERpc3BsYXlzIGEgc2NhdHRlciBncmFwaCB3aXRoIG1hcmtzIGZvciBlYWNoIHNlcmllc1xyXG4qL1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGRhdGE6R3JhcGhEYXRhW10sXHJcbiAgICBtaW5ZPzpudW1iZXIsXHJcbiAgICBtYXhZPzpudW1iZXIsXHJcbiAgICB5T3JpZW50YXRpb24/Oidub3JtYWwnfCdmbGlwcGVkJyxcclxuICAgIHhTZWxlY3RlZD86bnVtYmVyLFxyXG4gICAgc2VyaWVzU2VsZWN0ZWQ/OnN0cmluZyxcclxuICAgIG9uU2VyaWVzSG92ZXI6KGtleTpzdHJpbmcpPT52b2lkLFxyXG4gICAgb25TZXJpZXNCbHVyOigpPT52b2lkLFxyXG4gICAgaGludD86UmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjYXR0ZXJHcmFwaChcclxuICAgIHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIG1pblksXHJcbiAgICAgICAgbWF4WSxcclxuICAgICAgICB5T3JpZW50YXRpb24sXHJcbiAgICAgICAgeFNlbGVjdGVkLFxyXG4gICAgICAgIHNlcmllc1NlbGVjdGVkLFxyXG4gICAgICAgIG9uU2VyaWVzSG92ZXIsXHJcbiAgICAgICAgb25TZXJpZXNCbHVyLFxyXG4gICAgICAgIGhpbnRcclxuICAgIH06UHJvcHMpe1xyXG5cclxuICAgIGlmKCFkYXRhKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+Tm8gRGF0YTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb25zdCB2b3Jub2lOb2RlcyA9IGRhdGEuZmxhdE1hcChkPT5kLnNlcmllcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGk9Pih7eDppLngsIHk6aS55LCBrZXk6aS5rZXl9KSk7XHJcbiAgICAqL1xyXG4gICAgY29uc3QgZGF0YU1pbiA9IGRhdGEuZmlsdGVyKGY9PiFmLmRpc2FibGVkKS5yZWR1Y2UoKGEsYik9Pk1hdGgubWluKGEsXHJcbiAgICAgICAgYi5zZXJpZXMucmVkdWNlKChjLGQpPT5NYXRoLm1pbihjLGQueSksSW5maW5pdHkpKVxyXG4gICAgICAgICxJbmZpbml0eSk7XHJcbiAgICBjb25zdCBkYXRhTWF4ID0gZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLnJlZHVjZSgoYSxiKT0+TWF0aC5tYXgoYSxcclxuICAgICAgICBiLnNlcmllcy5yZWR1Y2UoKGMsZCk9Pk1hdGgubWF4KGMsZC55KSwtSW5maW5pdHkpKVxyXG4gICAgICAgICwtSW5maW5pdHkpO1xyXG4gICAgbGV0IHlNaW4gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgeU1heCA9IHVuZGVmaW5lZDtcclxuICAgIFxyXG5cclxuICAgIGlmKHlPcmllbnRhdGlvbj09PSdmbGlwcGVkJyl7XHJcbiAgICAgICAgeU1heCA9IG1pblkmJm1pblk+ZGF0YU1pbj9taW5ZOmRhdGFNaW47XHJcbiAgICAgICAgeU1pbiA9IG1heFkmJm1heFk8ZGF0YU1heD9tYXhZOmRhdGFNYXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB5TWluID0gbWluWSYmbWluWT5kYXRhTWluP21pblk6ZGF0YU1pbjtcclxuICAgICAgICB5TWF4ID0gbWF4WSYmbWF4WTxkYXRhTWF4P21heFk6ZGF0YU1heDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgeFRpY2tzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YS5mbGF0TWFwKHg9Pnguc2VyaWVzKS5mb3JFYWNoKHY9PntcclxuICAgICAgICB4VGlja3NNYXAuc2V0KHYueCx2LnhMYWJlbD92LnhMYWJlbDp2LngpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20oeFRpY2tzTWFwLmtleXMoKSkubWFwKG09Pih7dmFsdWU6bSxsYWJlbDp4VGlja3NNYXAuZ2V0KG0pfSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhXHJcbiAgICAgICAgLmZsYXRNYXAoeD0+eC5zZXJpZXNcclxuICAgICAgICAubWFwKHY9Pih7dmFsdWU6di54LGxhYmVsOnYueExhYmVsP3YueExhYmVsOnYueH0pKSkpKTtcclxuICAgXHJcbiAgICBjb25zdCB5VGlja3NBcnJheSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhXHJcbiAgICAgICAgICAgIC5mbGF0TWFwKHk9Pnkuc2VyaWVzXHJcbiAgICAgICAgICAgIC5tYXAodj0+KHt2YWx1ZTp2LnksbGFiZWw6di55TGFiZWw/di55TGFiZWw6di55fSkpKSkpO1xyXG4gICAgKi9cclxuICAgIC8qY29uc3QgZHJpdmVyUG9zaXRpb25PcmRlciA9IGRhdGEubWFwKGQ9PihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTpkLmRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICAgICAgY29sb3I6ZC5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICAgICAgY29kZTpkLmRyaXZlci5kcml2ZXJDb2RlLFxyXG4gICAgICAgICAgICBzdGFydE9yZGVyOmQuZHJpdmVyLnN0YXJ0aW5nT3JkZXIsXHJcbiAgICAgICAgICAgIGVuZE9yZGVyOmQuZHJpdmVyLmVuZGluZ1Bvc2l0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICk7Ki9cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleGlibGVYWVBsb3RcclxuICAgICAgICBtYXJnaW49e3t0b3A6IDMwLCBsZWZ0OiA1MCwgYm90dG9tOiAzMCwgcmlnaHQ6IDUwfX1cclxuICAgICAgICB5RG9tYWluPXtbeU1pbi0xLHlNYXgrMV19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8VmVydGljYWxHcmlkTGluZXMgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEhvcml6b250YWxHcmlkTGluZXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLm1hcChkPT4oXHJcbiAgICAgICAgICAgIDxNYXJrU2VyaWVzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Quc2VyaWVzS2V5fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Quc2VyaWVzS2V5fVxyXG4gICAgICAgICAgICAgICAgLy9jdXJ2ZT17J2N1cnZlTW9ub3RvbmVYJ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtkLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2Quc2VyaWVzS2V5PT09IHNlcmllc1NlbGVjdGVkPzM6MX0gXHJcbiAgICAgICAgICAgICAgICBzaXplPXszfVxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eT17c2VyaWVzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/ZC5zZXJpZXNLZXkgPT09IHNlcmllc1NlbGVjdGVkPzE6MC41XHJcbiAgICAgICAgICAgICAgICAgICAgOjF9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkLnNlcmllc31cclxuICAgICAgICAgICAgICAgIG9uU2VyaWVzTW91c2VPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzSG92ZXIoZC5zZXJpZXNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uU2VyaWVzTW91c2VPdXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9vbk5lYXJlc3RYPXsodmFsdWUpPT5jb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEJvcmRlcnMgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvdHRvbToge2ZpbGw6ICcjMTYxZjJkJ30sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIHRvcDoge2ZpbGw6ICcjMTYxZjJkJ31cclxuICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICA8WEF4aXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249J2JvdHRvbSdcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3Y9PnhUaWNrc0FycmF5W3YtMV0ubGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj0ndG9wJ1xyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdD17dj0+eFRpY2tzQXJyYXlbdi0xXS5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tUb3RhbD17ZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tWYWx1ZXM9e2RyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5zdGFydE9yZGVyLWIuc3RhcnRPcmRlcikubWFwKGw9Pmwuc3RhcnRPcmRlciotMSl9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tGb3JtYXQ9e3Y9PntyZXR1cm4gZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLnN0YXJ0T3JkZXItYi5zdGFydE9yZGVyKVsoLTEqdiktMV0uY29kZTt9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8WUF4aXNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPXsncmlnaHQnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0PXt2PT52fVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVmFsdWVzPXtkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuZW5kT3JkZXItYi5lbmRPcmRlcikubWFwKGw9Pmwuc3RhcnRPcmRlciotMSl9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tGb3JtYXQ9e3Y9PntyZXR1cm4gZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLmVuZE9yZGVyLWIuZW5kT3JkZXIpWygtMSp2KS0xXS5jb2RlO31cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7aGludD9oaW50Om51bGx9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saXN0LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDowO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4IDBweCAxOHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6MDtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMC43NWZyIGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+ICAgIFxyXG4gICAgICAgIDwvRmxleGlibGVYWVBsb3Q+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL1JhbmdlU2xpZGVyL1JhbmdlU2xpZGVyJztcclxuaW1wb3J0IERyaXZlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJMaXN0L0RyaXZlckxpc3QnO1xyXG5pbXBvcnQgRHJpdmVyTGlzdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Ecml2ZXJMaXN0L0RyaXZlckxpc3RJdGVtJztcclxuaW1wb3J0IERyaXZlclN1bW1hcnlDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyU3VtbWFyeUNhcmQvRHJpdmVyU3VtbWFyeUNhcmQnO1xyXG5pbXBvcnQgU3VtbWFyeUNhcmRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyU3VtbWFyeUNhcmQvU3VtbWFyeUNhcmRTZWN0aW9uJztcclxuaW1wb3J0IEJhckdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JhcGhzL0JhckdyYXBoJztcclxuaW1wb3J0IFNjYXR0ZXJHcmFwaCBmcm9tICcuLi9jb21wb25lbnRzL2dyYXBocy9TY2F0dGVyR3JhcGgnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL0FwcFR5cGVzJztcclxuaW1wb3J0IHVzZVJlc3VsdHNMYXBzUGl0c3RvcHMgZnJvbSAnLi4vdXRpbHMvaG9va3MvdXNlUmVzdWx0c0xhcHNQaXRzdG9wcyc7XHJcbmltcG9ydCB1c2VIaXN0b2dyYW0gZnJvbSAnLi4vdXRpbHMvaG9va3MvdXNlSGlzdG9ncmFtJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZy9Mb2FkaW5nJztcclxuXHJcbi8qRGV0YWlsIGZvciBhIHNpbmdsZSBkcml2ZXIgYXQgYSB0aW1lXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyaXZlckRldGFpbChwcm9wczpBcHBTdGF0ZSl7XHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBlcnJvciwgcmFjZURldGFpbHMsIGRyaXZlck1hcH0gPSB1c2VSZXN1bHRzTGFwc1BpdHN0b3BzKHByb3BzLnNlYXNvbiwgcHJvcHMucm91bmQpO1xyXG4gICAgY29uc3QgaG92ZXJlZERyaXZlciA9IHByb3BzLmRyaXZlciYmcHJvcHMuZHJpdmVyTGlzdCYmcHJvcHMuZHJpdmVyTGlzdC5maW5kKGQ9PmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIgJiYgZC5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID90cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlO1xyXG4gICAgY29uc3QgaGlzdG9ncmFtID11c2VIaXN0b2dyYW0ocHJvcHMuc2Vhc29uLCBwcm9wcy5yb3VuZCxwcm9wcy5kcml2ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikubGFwczp1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3I6dW5kZWZpbmVkKTtcclxuXHJcbiAgICBpZihpc0xvYWRpbmd8fCFwcm9wcy5kcml2ZXJMaXN0KXtcclxuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxyXG4gICAgfSBcclxuICAgIGNvbnN0IGxhcHNBcnJheSA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTw9cmFjZURldGFpbHMubnVtTGFwczsgaSsrKXtcclxuICAgICAgICBsYXBzQXJyYXkucHVzaCh7dmFsdWU6aSxsYWJlbDppfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaW5nbGVMYXBEYXRhID0gcHJvcHMuZHJpdmVyTGlzdC5tYXAoZD0+XHJcbiAgICAgICAge3JldHVybiBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNcclxuICAgICAgICAgICAgLmZpbHRlcigoZmYsaW5kZXgsYXJyKT0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5sYXAmJnByb3BzLmxhcD4wP2ZmLmxhcE51bT09PXByb3BzLmxhcFxyXG4gICAgICAgICAgICAgICAgOihpbmRleD09PWFyci5sZW5ndGgtMSYmZmYubGFwTnVtPj1yYWNlRGV0YWlscy5udW1MYXBzLTEpKVxyXG4gICAgICAgICAgICAubWFwKGw9PihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkcml2ZXJJZDpsLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBsYXBzQ29tcGxldGVkOiBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFwTnVtOmwubGFwTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcDpsLmdhcCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkdhcDpsLnBvc2l0aW9uR2FwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmwucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTpsLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZURzcDpsLnRpbWVEc3AsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxUaW1lOmwudG90YWxUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpdFN0b3BUaW1lOmwucGl0U3RvcFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU5ldFBpdFN0b3A6bC50aW1lTmV0UGl0U3RvcFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgKS5mbGF0KClcclxuICAgICAgICAuc29ydCgoYSxiKT0+YS5wb3NpdGlvbi1iLnBvc2l0aW9uKTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IGRyaXZlckxpc3REaXNwbGF5ID0gcHJvcHMuZHJpdmVyTGlzdC5tYXAoZD0+KHtcclxuICAgICAgICBkcml2ZXJJZDpkLmRyaXZlcklkLFxyXG4gICAgICAgIGVuYWJsZWQ6ZC5lbmFibGVkLFxyXG4gICAgICAgIGRyaXZlckNvZGU6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKSxcclxuICAgICAgICBjb25zdHJ1Y3RvckNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgdGltZTpwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0udGltZTonT1VUJ1xyXG4gICAgICAgICAgICA6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlVGltZSxcclxuICAgICAgICB0aW1lRHNwOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS50aW1lRHNwOidPVVQnXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VUaW1lRHNwLFxyXG4gICAgICAgIGdhcDpwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0uZ2FwOidPVVQnXHJcbiAgICAgICAgICAgIDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLnJhY2VUaW1lRHNwLFxyXG4gICAgICAgIHBvc2l0aW9uR2FwOnByb3BzLmxhcCYmcHJvcHMubGFwPjAmJnByb3BzLmxhcDxyYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgID9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNDb21wbGV0ZWQ+PXByb3BzLmxhcD9kcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHNbcHJvcHMubGFwXS5wb3NpdGlvbkdhcDonT1VUJ1xyXG4gICAgICAgICAgICA6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5yYWNlVGltZURzcCxcclxuICAgICAgICBwb3NpdGlvbjpwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzQ29tcGxldGVkPj1wcm9wcy5sYXA/ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5sYXBzW3Byb3BzLmxhcF0ucG9zaXRpb246ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvblxyXG4gICAgICAgICAgICA6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5lbmRpbmdQb3NpdGlvbixcclxuICAgIH0pKS5zb3J0KChhLGIpPT5hLnBvc2l0aW9uLWIucG9zaXRpb24pOyAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LWNvbHVtbic+ICBcclxuICAgICAgICAgICAgICAgIDxEcml2ZXJMaXN0IFxyXG4gICAgICAgICAgICAgICAgLy9zdHlsZT17e2hlaWdodDonMTAwJScsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6J2F1dG8gMC43NWZyIGF1dG8nfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzowfX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17IXByb3BzLmxhcHx8cHJvcHMubGFwPT09MHx8cHJvcHMubGFwPj1yYWNlRGV0YWlscy5udW1MYXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID88aDE+RmluYWwgUmVzdWx0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgOjw+PGgxPkxBUDwvaDE+PGgyPntwcm9wcy5sYXB9L3tyYWNlRGV0YWlscy5udW1MYXBzfTwvaDI+PC8+fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RyaXZlckxpc3REaXNwbGF5Lm1hcChkPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckRhdGEgPSBkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxEcml2ZXJMaXN0SXRlbSBrZXk9e2QuZHJpdmVySWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZC5kcml2ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENlbnRlcj17ZHJpdmVyRGF0YS5kcml2ZXIuZHJpdmVyQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFJpZ2h0PXtwcm9wcy5sYXAmJnByb3BzLmxhcD4wJiZwcm9wcy5sYXA8cmFjZURldGFpbHMubnVtTGFwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2QuZ2FwPT09MD8nSW50ZXJ2YWwnOnR5cGVvZiBkLmdhcD09PSdudW1iZXInP2QuZ2FwLnRvRml4ZWQoMykudG9TdHJpbmcoKTpkLmdhcC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZC50aW1lRHNwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJOdW1iZXI9e2QucG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkcml2ZXJEYXRhLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZC5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aG92ZXJlZERyaXZlcj9kLmRyaXZlcklkPT09cHJvcHMuZHJpdmVyP3tvcGFjaXR5OjF9OntvcGFjaXR5OjAuNX06bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHByb3BzLnNldERyaXZlckxpc3QocHJvcHMuZHJpdmVyTGlzdC5tYXAobD0+KHsuLi5sLGVuYWJsZWQ6ZC5kcml2ZXJJZD09PWwuZHJpdmVySWQ/IWwuZW5hYmxlZDpsLmVuYWJsZWR9KSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+ZC5lbmFibGVkP3Byb3BzLnNldERyaXZlcihkLmRyaXZlcklkKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvRHJpdmVyTGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXRvcCc+XHJcbiAgICAgICAgICAgIDxSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXBzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5sYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zZXRMYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0nbWFpbi1ncmFwaC10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZHJpdmVyPydMQVAgVElNRVMgRk9SICcrZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLmRyaXZlci5kcml2ZXJDb2RlOidMQVAgVElNRVMnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgICAgICB7cHJvcHMuZHJpdmVyP1xyXG4gICAgICAgICAgICAgICAgPFNjYXR0ZXJHcmFwaFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QuZmlsdGVyKGY9PmYuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIpLm1hcChkPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc0tleTpkLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkubGFwcy5maWx0ZXIoZj0+Zi5sYXBOdW0+MCkubWFwKGw9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OmwuZHJpdmVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpsLmxhcE51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4TGFiZWw6bC5sYXBOdW0udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OmwudGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6cHJvcHMuZHJpdmVyP3Byb3BzLmRyaXZlcj09PWQuZHJpdmVySWQ/MTowLjU6MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDohZC5lbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbWluWT17ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXJMaXN0WzBdLmRyaXZlcklkKS5yYWNlU3RhdHMuZmFzdGVzdExhcFRpbWUtNX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhZPXtkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlckxpc3RbMF0uZHJpdmVySWQpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZSoyfVxyXG4gICAgICAgICAgICAgICAgICAgIHhTZWxlY3RlZD17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllc1NlbGVjdGVkPXtwcm9wcy5kcml2ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3Zlcj17KGQpPT5wcm9wcy5zZXREcml2ZXIoZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOjxTY2F0dGVyR3JhcGhcclxuICAgICAgICAgICAgZGF0YT17cHJvcHMuZHJpdmVyTGlzdC5tYXAoZD0+KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllc0tleTpkLmRyaXZlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllczpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmxhcHMuZmlsdGVyKGY9PmYubGFwTnVtPjApLm1hcChsPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6bC5kcml2ZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmVuZGluZ1Bvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4TGFiZWw6ZHJpdmVyTWFwLmdldChkLmRyaXZlcklkKS5kcml2ZXIuZHJpdmVyQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTpsLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRyaXZlck1hcC5nZXQoZC5kcml2ZXJJZCkuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6cHJvcHMuZHJpdmVyP3Byb3BzLmRyaXZlcj09PWQuZHJpdmVySWQ/MTowLjU6MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IWQuZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpkcml2ZXJNYXAuZ2V0KGQuZHJpdmVySWQpLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiFkLmVuYWJsZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIG1pblk9e2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyTGlzdFswXS5kcml2ZXJJZCkucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lLTV9XHJcbiAgICAgICAgICAgIG1heFk9e2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyTGlzdFswXS5kcml2ZXJJZCkucmFjZVN0YXRzLmZhc3Rlc3RMYXBUaW1lKjJ9XHJcbiAgICAgICAgICAgIHhTZWxlY3RlZD17cHJvcHMubGFwfVxyXG4gICAgICAgICAgICBzZXJpZXNTZWxlY3RlZD17cHJvcHMuZHJpdmVyfVxyXG4gICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgb25TZXJpZXNCbHVyPXsoKT0+cHJvcHMuc2V0RHJpdmVyKG51bGwpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtY29sdW1uJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LXRvcC1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgPERyaXZlclN1bW1hcnlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRyaXZlckxpc3QuZmluZChkPT5kLmVuYWJsZWQmJmQuZHJpdmVySWQ9PT1wcm9wcy5kcml2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0nZmFzdGVzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdGYXN0ZXN0IExhcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1JhbmsnLHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBSYW5rOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonTGFwJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcE51bWJlcjpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1RpbWUnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5mYXN0ZXN0TGFwVGltZTpudWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTcGVlZCcsIHZhbHVlOnByb3BzLmRyaXZlcj9kcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikucmFjZVN0YXRzLmZhc3Rlc3RMYXBTcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArJyAnK2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuZmFzdGVzdExhcFVuaXRzOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUNhcmRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3Nsb3dlc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nU2xvd2VzdCBMYXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOidMYXAnLCB2YWx1ZTpwcm9wcy5kcml2ZXI/ZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy5zbG93ZXN0TGFwTmV0UGl0Om51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonVGltZScsdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuc2xvd2VzdExhcE5ldFBpdFRpbWUudG9GaXhlZCgzKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlDYXJkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdwYWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0xhcCBQYWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17cHJvcHMubGFwJiZwcm9wcy5sYXA+MCYmcHJvcHMubGFwPHJhY2VEZXRhaWxzLm51bUxhcHM/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J0xhcCAnK3Byb3BzLmxhcCwgdmFsdWU6cHJvcHMuZHJpdmVyJiZkcml2ZXJNYXAuZ2V0KHByb3BzLmRyaXZlcikubGFwc0NvbXBsZXRlZD49cHJvcHMubGFwP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5sYXBzW3Byb3BzLmxhcF0udGltZS50b0ZpeGVkKDMpOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDonQXZnJywgdmFsdWU6cHJvcHMuZHJpdmVyP2RyaXZlck1hcC5nZXQocHJvcHMuZHJpdmVyKS5yYWNlU3RhdHMuYXZnTGFwTmV0UGl0VGltZS50b0ZpeGVkKDMpOm51bGx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6J1N0ZCBEZXYnLHZhbHVlOnByb3BzLmRyaXZlcj9NYXRoLnNxcnQoZHJpdmVyTWFwLmdldChwcm9wcy5kcml2ZXIpLnJhY2VTdGF0cy52YXJpYW5jZU5ldFBpdFRpbWUpLnRvRml4ZWQoMyk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecml2ZXJTdW1tYXJ5Q2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ncmlnaHQtYm90dG9tLWdyYXBoLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICB7aGlzdG9ncmFtPydMQVAgVElNRSBISVNUT0dSQU0nOicnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtYm90dG9tLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAge2hpc3RvZ3JhbT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhckdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtoaXN0b2dyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyPXsoZCk9PnByb3BzLnNldERyaXZlcihkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzQmx1cj17KCk9PnByb3BzLnNldERyaXZlcihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byAyZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxZnI7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdC1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOjE7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjEvMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MS8zO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi10b3Age1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjoyO1xyXG4gICAgICAgICAgICBncmlkLXJvdzoxO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo3MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI21haW4tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgICAgbGVmdDoxNSU7XHJcbiAgICAgICAgICAgIHRvcDoyNSU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtO1xyXG4gICAgICAgICAgICBvcGFjaXR5Oi4xNTtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46MjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMTYxZjJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkgMjAlLCByZ2JhKDAsMCwwLDApIDgwJSwgcmdiYSgwLDAsMCwxKSksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE2MWYyZCAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjMTYxZjJkIDc1JSwgIzE2MWYyZCksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig4LCA4LCA4KSwgcmdiKDMyLCAzMiwgMzIpKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUsIDEwcHggMTBweCwgMTBweCAxMHB4LCAxMHB4IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMHB4IDBweCwgNXB4IDVweCwgMHB4IDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNyaWdodC1ib3R0b20tZ3JhcGgtdGl0bGUgeyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgICAgbGVmdDo3NSU7XHJcbiAgICAgICAgICAgIHRvcDo1OCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICBvcGFjaXR5Oi4xNTtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtdG9wLWNvbHVtbntcclxuICAgICAgICAgICAgZ3JpZC1yb3c6MTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LWJvdHRvbS1jb2x1bW57XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYH1cclxuXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=