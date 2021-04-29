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
      lineNumber: 95,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["HorizontalGridLines"], {
      style: {
        stroke: 'white'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
        lineNumber: 102,
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
      lineNumber: 125,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
      style: {
        stroke: 'white'
      },
      orientation: "bottom",
      tickTotal: xTicksArray.length,
      tickFormat: function tickFormat(v) {
        return xTicksArray[v - 1].label;
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vis__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
      style: {
        stroke: 'white'
      },
      orientation: "top",
      tickTotal: xTicksArray.length,
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
      lineNumber: 143,
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
      lineNumber: 151,
      columnNumber: 13
    }, this), hint ? hint : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1345680363",
      children: ".list-container.jsx-1345680363{list-style:none;padding-inline-start:0;margin:0;padding:15px 0px 18px 0px;margin-block-start:0;margin-block-end:0;display:grid;grid-template-columns:auto 0.75fr auto;height:100%;line-height:100%;font-size:0.75rem;justify-items:stretch;background-color:black;background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXGNvbXBvbmVudHNcXGdyYXBoc1xcU2NhdHRlckdyYXBoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpS29CLEFBRzRCLGdCQUNPLHVCQUNkLFNBQ2lCLDBCQUNMLHFCQUNGLG1CQUNOLGFBQzJCLHVDQUM1QixZQUNLLGlCQUNDLGtCQUNJLHNCQUNDLHVCQUNNLDRCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXG1vYmlsZWRhblxcQ29kZVxcZjEtZ3JhcGhzXFxjb21wb25lbnRzXFxncmFwaHNcXFNjYXR0ZXJHcmFwaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIaW50LCBGbGV4aWJsZVhZUGxvdCwgWEF4aXMsIFlBeGlzLCBWZXJ0aWNhbEdyaWRMaW5lcywgSG9yaXpvbnRhbEdyaWRMaW5lcyxNYXJrU2VyaWVzLCBCb3JkZXJzfSBmcm9tICdyZWFjdC12aXMnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC12aXMvZGlzdC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBHcmFwaERhdGEgfSBmcm9tICcuLi8uLi90eXBlcy9HcmFwaFR5cGVzJztcclxuLypcclxuKiAgIERpc3BsYXlzIGEgc2NhdHRlciBncmFwaCB3aXRoIG1hcmtzIGZvciBlYWNoIHNlcmllc1xyXG4qL1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGRhdGE6R3JhcGhEYXRhW10sXHJcbiAgICBtaW5ZPzpudW1iZXIsXHJcbiAgICBtYXhZPzpudW1iZXIsXHJcbiAgICB5T3JpZW50YXRpb24/Oidub3JtYWwnfCdmbGlwcGVkJyxcclxuICAgIHhTZWxlY3RlZD86bnVtYmVyLFxyXG4gICAgc2VyaWVzU2VsZWN0ZWQ/OnN0cmluZyxcclxuICAgIG9uU2VyaWVzSG92ZXI6KGtleTpzdHJpbmcpPT52b2lkLFxyXG4gICAgb25TZXJpZXNCbHVyOigpPT52b2lkLFxyXG4gICAgaGludD86UmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjYXR0ZXJHcmFwaChcclxuICAgIHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIG1pblksXHJcbiAgICAgICAgbWF4WSxcclxuICAgICAgICB5T3JpZW50YXRpb24sXHJcbiAgICAgICAgeFNlbGVjdGVkLFxyXG4gICAgICAgIHNlcmllc1NlbGVjdGVkLFxyXG4gICAgICAgIG9uU2VyaWVzSG92ZXIsXHJcbiAgICAgICAgb25TZXJpZXNCbHVyLFxyXG4gICAgICAgIGhpbnRcclxuICAgIH06UHJvcHMpe1xyXG5cclxuICAgIGlmKCFkYXRhKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+Tm8gRGF0YTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb25zdCB2b3Jub2lOb2RlcyA9IGRhdGEuZmxhdE1hcChkPT5kLnNlcmllcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGk9Pih7eDppLngsIHk6aS55LCBrZXk6aS5rZXl9KSk7XHJcbiAgICAqL1xyXG4gICAgY29uc3QgZGF0YU1pbiA9IGRhdGEuZmlsdGVyKGY9PiFmLmRpc2FibGVkKS5yZWR1Y2UoKGEsYik9Pk1hdGgubWluKGEsXHJcbiAgICAgICAgYi5zZXJpZXMucmVkdWNlKChjLGQpPT5NYXRoLm1pbihjLGQueSksSW5maW5pdHkpKVxyXG4gICAgICAgICxJbmZpbml0eSk7XHJcbiAgICBjb25zdCBkYXRhTWF4ID0gZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLnJlZHVjZSgoYSxiKT0+TWF0aC5tYXgoYSxcclxuICAgICAgICBiLnNlcmllcy5yZWR1Y2UoKGMsZCk9Pk1hdGgubWF4KGMsZC55KSwtSW5maW5pdHkpKVxyXG4gICAgICAgICwtSW5maW5pdHkpO1xyXG4gICAgbGV0IHlNaW4gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgeU1heCA9IHVuZGVmaW5lZDtcclxuICAgIFxyXG5cclxuICAgIGlmKHlPcmllbnRhdGlvbj09PSdmbGlwcGVkJyl7XHJcbiAgICAgICAgeU1heCA9IG1pblkmJm1pblk+ZGF0YU1pbj9taW5ZOmRhdGFNaW47XHJcbiAgICAgICAgeU1pbiA9IG1heFkmJm1heFk8ZGF0YU1heD9tYXhZOmRhdGFNYXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB5TWluID0gbWluWSYmbWluWT5kYXRhTWluP21pblk6ZGF0YU1pbjtcclxuICAgICAgICB5TWF4ID0gbWF4WSYmbWF4WTxkYXRhTWF4P21heFk6ZGF0YU1heDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgeFRpY2tzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YS5mbGF0TWFwKHg9Pnguc2VyaWVzKS5mb3JFYWNoKHY9PntcclxuICAgICAgICB4VGlja3NNYXAuc2V0KHYueCx2LnhMYWJlbD92LnhMYWJlbDp2LngpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20oeFRpY2tzTWFwLmtleXMoKSkubWFwKG09Pih7dmFsdWU6bSxsYWJlbDp4VGlja3NNYXAuZ2V0KG0pfSkpO1xyXG4gICAgLypcclxuICAgIGNvbnN0IHhUaWNrc0FycmF5ID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGFcclxuICAgICAgICAuZmxhdE1hcCh4PT54LnNlcmllc1xyXG4gICAgICAgIC5tYXAodj0+KHt2YWx1ZTp2LngsbGFiZWw6di54TGFiZWw/di54TGFiZWw6di54fSkpKSkpO1xyXG4gICBcclxuICAgIGNvbnN0IHlUaWNrc0FycmF5ID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGFcclxuICAgICAgICAgICAgLmZsYXRNYXAoeT0+eS5zZXJpZXNcclxuICAgICAgICAgICAgLm1hcCh2PT4oe3ZhbHVlOnYueSxsYWJlbDp2LnlMYWJlbD92LnlMYWJlbDp2Lnl9KSkpKSk7XHJcbiAgICAqL1xyXG4gICAgLypjb25zdCBkcml2ZXJQb3NpdGlvbk9yZGVyID0gZGF0YS5tYXAoZD0+KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OmQuZHJpdmVyLmRyaXZlcklkLFxyXG4gICAgICAgICAgICBjb2xvcjpkLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICBjb2RlOmQuZHJpdmVyLmRyaXZlckNvZGUsXHJcbiAgICAgICAgICAgIHN0YXJ0T3JkZXI6ZC5kcml2ZXIuc3RhcnRpbmdPcmRlcixcclxuICAgICAgICAgICAgZW5kT3JkZXI6ZC5kcml2ZXIuZW5kaW5nUG9zaXRpb25cclxuICAgICAgICB9KVxyXG4gICAgKTsqL1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4aWJsZVhZUGxvdFxyXG4gICAgICAgIG1hcmdpbj17e3RvcDogMzAsIGxlZnQ6IDUwLCBib3R0b206IDMwLCByaWdodDogNTB9fVxyXG4gICAgICAgIHlEb21haW49e1t5TWluLTEseU1heCsxXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxWZXJ0aWNhbEdyaWRMaW5lcyBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SG9yaXpvbnRhbEdyaWRMaW5lc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtkYXRhLmZpbHRlcihmPT4hZi5kaXNhYmxlZCkubWFwKGQ9PihcclxuICAgICAgICAgICAgPE1hcmtTZXJpZXNcclxuICAgICAgICAgICAgICAgIGtleT17ZC5zZXJpZXNLZXl9XHJcbiAgICAgICAgICAgICAgICBpZD17ZC5zZXJpZXNLZXl9XHJcbiAgICAgICAgICAgICAgICAvL2N1cnZlPXsnY3VydmVNb25vdG9uZVgnfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2QuY29sb3J9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZC5zZXJpZXNLZXk9PT0gc2VyaWVzU2VsZWN0ZWQ/MzoxfSBcclxuICAgICAgICAgICAgICAgIHNpemU9ezN9XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXtzZXJpZXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgID9kLnNlcmllc0tleSA9PT0gc2VyaWVzU2VsZWN0ZWQ/MTowLjVcclxuICAgICAgICAgICAgICAgICAgICA6MX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2Quc2VyaWVzfVxyXG4gICAgICAgICAgICAgICAgb25TZXJpZXNNb3VzZU92ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3ZlcihkLnNlcmllc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25TZXJpZXNNb3VzZU91dD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL29uTmVhcmVzdFg9eyh2YWx1ZSk9PmNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Qm9yZGVycyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHtmaWxsOiAnIzE2MWYyZCd9LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHtmaWxsOiAnIzE2MWYyZCd9LFxyXG4gICAgICAgICAgICAgICAgdG9wOiB7ZmlsbDogJyMxNjFmMmQnfVxyXG4gICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj0nYm90dG9tJ1xyXG4gICAgICAgICAgICAgICAgdGlja1RvdGFsID0ge3hUaWNrc0FycmF5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3Y9PnhUaWNrc0FycmF5W3YtMV0ubGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj0ndG9wJ1xyXG4gICAgICAgICAgICAgICAgdGlja1RvdGFsID0ge3hUaWNrc0FycmF5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3Y9PnhUaWNrc0FycmF5W3YtMV0ubGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxZQXhpc1xyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVmFsdWVzPXtkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuc3RhcnRPcmRlci1iLnN0YXJ0T3JkZXIpLm1hcChsPT5sLnN0YXJ0T3JkZXIqLTEpfVxyXG4gICAgICAgICAgICAgICAgLy90aWNrRm9ybWF0PXt2PT57cmV0dXJuIGRyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5zdGFydE9yZGVyLWIuc3RhcnRPcmRlcilbKC0xKnYpLTFdLmNvZGU7fVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj17J3JpZ2h0J31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdD17dj0+dn1cclxuICAgICAgICAgICAgICAgIC8vdGlja1RvdGFsPXtkYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIC8vdGlja1ZhbHVlcz17ZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLmVuZE9yZGVyLWIuZW5kT3JkZXIpLm1hcChsPT5sLnN0YXJ0T3JkZXIqLTEpfVxyXG4gICAgICAgICAgICAgICAgLy90aWNrRm9ybWF0PXt2PT57cmV0dXJuIGRyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5lbmRPcmRlci1iLmVuZE9yZGVyKVsoLTEqdiktMV0uY29kZTt9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2hpbnQ/aGludDpudWxsfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGlzdC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweCAwcHggMThweCAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDowO1xyXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOjA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDAuNzVmciBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6c3RyZXRjaDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAgICAgICB9YH1cclxuICAgICAgICA8L3N0eWxlPiAgICBcclxuICAgICAgICA8L0ZsZXhpYmxlWFlQbG90PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\components\\\\graphs\\\\ScatterGraph.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmFwaHMvU2NhdHRlckdyYXBoLnRzeCJdLCJuYW1lcyI6WyJTY2F0dGVyR3JhcGgiLCJkYXRhIiwibWluWSIsIm1heFkiLCJ5T3JpZW50YXRpb24iLCJ4U2VsZWN0ZWQiLCJzZXJpZXNTZWxlY3RlZCIsIm9uU2VyaWVzSG92ZXIiLCJvblNlcmllc0JsdXIiLCJoaW50IiwiZGF0YU1pbiIsImZpbHRlciIsImYiLCJkaXNhYmxlZCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsIm1pbiIsInNlcmllcyIsImMiLCJkIiwieSIsIkluZmluaXR5IiwiZGF0YU1heCIsIm1heCIsInlNaW4iLCJ1bmRlZmluZWQiLCJ5TWF4IiwieFRpY2tzTWFwIiwiTWFwIiwiZmxhdE1hcCIsIngiLCJmb3JFYWNoIiwidiIsInNldCIsInhMYWJlbCIsInhUaWNrc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsIm0iLCJ2YWx1ZSIsImxhYmVsIiwiZ2V0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwic3Ryb2tlIiwic2VyaWVzS2V5IiwiY29sb3IiLCJlIiwiZmlsbCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBbUJlLFNBQVNBLFlBQVQsT0FXSDtBQUFBOztBQUFBLE1BVEpDLElBU0ksUUFUSkEsSUFTSTtBQUFBLE1BUkpDLElBUUksUUFSSkEsSUFRSTtBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLFlBTUksUUFOSkEsWUFNSTtBQUFBLE1BTEpDLFNBS0ksUUFMSkEsU0FLSTtBQUFBLE1BSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLE1BSEpDLGFBR0ksUUFISkEsYUFHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTs7QUFFUixNQUFHLENBQUNSLElBQUosRUFB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QUFFO0FBQUNNLGNBQU0sRUFBQztBQUFSLE9BRlgsQ0FHSTtBQUNBO0FBQ0E7QUFDQTs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcERKLGVBNERJLHFFQUFDLCtDQUFEO0FBQ0ksaUJBQVcsRUFBRSxPQURqQjtBQUVJLFdBQUssRUFBRTtBQUFDQSxjQUFNLEVBQUM7QUFBUixPQUZYO0FBR0ksZ0JBQVUsRUFBRSxvQkFBQWhCLENBQUM7QUFBQSxlQUFFQSxDQUFGO0FBQUEsT0FIakIsQ0FJSTtBQUNBO0FBQ0E7QUFDQTs7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNURKLEVBc0VLekIsSUFBSSxHQUFDQSxJQUFELEdBQU0sSUF0RWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Rkg7S0FoS3VCVCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RyaXZlci1kZXRhaWwuNDU0NDFlNTE1Njg3ZGMzM2RiNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhpbnQsIEZsZXhpYmxlWFlQbG90LCBYQXhpcywgWUF4aXMsIFZlcnRpY2FsR3JpZExpbmVzLCBIb3Jpem9udGFsR3JpZExpbmVzLE1hcmtTZXJpZXMsIEJvcmRlcnN9IGZyb20gJ3JlYWN0LXZpcyc7XHJcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXZpcy9kaXN0L3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEdyYXBoRGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzL0dyYXBoVHlwZXMnO1xyXG4vKlxyXG4qICAgRGlzcGxheXMgYSBzY2F0dGVyIGdyYXBoIHdpdGggbWFya3MgZm9yIGVhY2ggc2VyaWVzXHJcbiovXHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgZGF0YTpHcmFwaERhdGFbXSxcclxuICAgIG1pblk/Om51bWJlcixcclxuICAgIG1heFk/Om51bWJlcixcclxuICAgIHlPcmllbnRhdGlvbj86J25vcm1hbCd8J2ZsaXBwZWQnLFxyXG4gICAgeFNlbGVjdGVkPzpudW1iZXIsXHJcbiAgICBzZXJpZXNTZWxlY3RlZD86c3RyaW5nLFxyXG4gICAgb25TZXJpZXNIb3Zlcjooa2V5OnN0cmluZyk9PnZvaWQsXHJcbiAgICBvblNlcmllc0JsdXI6KCk9PnZvaWQsXHJcbiAgICBoaW50PzpSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NhdHRlckdyYXBoKFxyXG4gICAge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgbWluWSxcclxuICAgICAgICBtYXhZLFxyXG4gICAgICAgIHlPcmllbnRhdGlvbixcclxuICAgICAgICB4U2VsZWN0ZWQsXHJcbiAgICAgICAgc2VyaWVzU2VsZWN0ZWQsXHJcbiAgICAgICAgb25TZXJpZXNIb3ZlcixcclxuICAgICAgICBvblNlcmllc0JsdXIsXHJcbiAgICAgICAgaGludFxyXG4gICAgfTpQcm9wcyl7XHJcblxyXG4gICAgaWYoIWRhdGEpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMz5ObyBEYXRhPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbnN0IHZvcm5vaU5vZGVzID0gZGF0YS5mbGF0TWFwKGQ9PmQuc2VyaWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaT0+KHt4OmkueCwgeTppLnksIGtleTppLmtleX0pKTtcclxuICAgICovXHJcbiAgICBjb25zdCBkYXRhTWluID0gZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLnJlZHVjZSgoYSxiKT0+TWF0aC5taW4oYSxcclxuICAgICAgICBiLnNlcmllcy5yZWR1Y2UoKGMsZCk9Pk1hdGgubWluKGMsZC55KSxJbmZpbml0eSkpXHJcbiAgICAgICAgLEluZmluaXR5KTtcclxuICAgIGNvbnN0IGRhdGFNYXggPSBkYXRhLmZpbHRlcihmPT4hZi5kaXNhYmxlZCkucmVkdWNlKChhLGIpPT5NYXRoLm1heChhLFxyXG4gICAgICAgIGIuc2VyaWVzLnJlZHVjZSgoYyxkKT0+TWF0aC5tYXgoYyxkLnkpLC1JbmZpbml0eSkpXHJcbiAgICAgICAgLC1JbmZpbml0eSk7XHJcbiAgICBsZXQgeU1pbiA9IHVuZGVmaW5lZDtcclxuICAgIGxldCB5TWF4ID0gdW5kZWZpbmVkO1xyXG4gICAgXHJcblxyXG4gICAgaWYoeU9yaWVudGF0aW9uPT09J2ZsaXBwZWQnKXtcclxuICAgICAgICB5TWF4ID0gbWluWSYmbWluWT5kYXRhTWluP21pblk6ZGF0YU1pbjtcclxuICAgICAgICB5TWluID0gbWF4WSYmbWF4WTxkYXRhTWF4P21heFk6ZGF0YU1heDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHlNaW4gPSBtaW5ZJiZtaW5ZPmRhdGFNaW4/bWluWTpkYXRhTWluO1xyXG4gICAgICAgIHlNYXggPSBtYXhZJiZtYXhZPGRhdGFNYXg/bWF4WTpkYXRhTWF4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB4VGlja3NNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICBkYXRhLmZsYXRNYXAoeD0+eC5zZXJpZXMpLmZvckVhY2godj0+e1xyXG4gICAgICAgIHhUaWNrc01hcC5zZXQodi54LHYueExhYmVsP3YueExhYmVsOnYueCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHhUaWNrc0FycmF5ID0gQXJyYXkuZnJvbSh4VGlja3NNYXAua2V5cygpKS5tYXAobT0+KHt2YWx1ZTptLGxhYmVsOnhUaWNrc01hcC5nZXQobSl9KSk7XHJcbiAgICAvKlxyXG4gICAgY29uc3QgeFRpY2tzQXJyYXkgPSBBcnJheS5mcm9tKG5ldyBTZXQoZGF0YVxyXG4gICAgICAgIC5mbGF0TWFwKHg9Pnguc2VyaWVzXHJcbiAgICAgICAgLm1hcCh2PT4oe3ZhbHVlOnYueCxsYWJlbDp2LnhMYWJlbD92LnhMYWJlbDp2Lnh9KSkpKSk7XHJcbiAgIFxyXG4gICAgY29uc3QgeVRpY2tzQXJyYXkgPSBBcnJheS5mcm9tKG5ldyBTZXQoZGF0YVxyXG4gICAgICAgICAgICAuZmxhdE1hcCh5PT55LnNlcmllc1xyXG4gICAgICAgICAgICAubWFwKHY9Pih7dmFsdWU6di55LGxhYmVsOnYueUxhYmVsP3YueUxhYmVsOnYueX0pKSkpKTtcclxuICAgICovXHJcbiAgICAvKmNvbnN0IGRyaXZlclBvc2l0aW9uT3JkZXIgPSBkYXRhLm1hcChkPT4oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ZC5kcml2ZXIuZHJpdmVySWQsXHJcbiAgICAgICAgICAgIGNvbG9yOmQuZHJpdmVyLmNvbnN0cnVjdG9yQ29sb3IsXHJcbiAgICAgICAgICAgIGNvZGU6ZC5kcml2ZXIuZHJpdmVyQ29kZSxcclxuICAgICAgICAgICAgc3RhcnRPcmRlcjpkLmRyaXZlci5zdGFydGluZ09yZGVyLFxyXG4gICAgICAgICAgICBlbmRPcmRlcjpkLmRyaXZlci5lbmRpbmdQb3NpdGlvblxyXG4gICAgICAgIH0pXHJcbiAgICApOyovXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhpYmxlWFlQbG90XHJcbiAgICAgICAgbWFyZ2luPXt7dG9wOiAzMCwgbGVmdDogNTAsIGJvdHRvbTogMzAsIHJpZ2h0OiA1MH19XHJcbiAgICAgICAgeURvbWFpbj17W3lNaW4tMSx5TWF4KzFdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFZlcnRpY2FsR3JpZExpbmVzIFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JpZExpbmVzXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2RhdGEuZmlsdGVyKGY9PiFmLmRpc2FibGVkKS5tYXAoZD0+KFxyXG4gICAgICAgICAgICA8TWFya1Nlcmllc1xyXG4gICAgICAgICAgICAgICAga2V5PXtkLnNlcmllc0tleX1cclxuICAgICAgICAgICAgICAgIGlkPXtkLnNlcmllc0tleX1cclxuICAgICAgICAgICAgICAgIC8vY3VydmU9eydjdXJ2ZU1vbm90b25lWCd9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17ZC5jb2xvcn1cclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtkLnNlcmllc0tleT09PSBzZXJpZXNTZWxlY3RlZD8zOjF9IFxyXG4gICAgICAgICAgICAgICAgc2l6ZT17M31cclxuICAgICAgICAgICAgICAgIG9wYWNpdHk9e3Nlcmllc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgP2Quc2VyaWVzS2V5ID09PSBzZXJpZXNTZWxlY3RlZD8xOjAuNVxyXG4gICAgICAgICAgICAgICAgICAgIDoxfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZC5zZXJpZXN9XHJcbiAgICAgICAgICAgICAgICBvblNlcmllc01vdXNlT3Zlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0hvdmVyKGQuc2VyaWVzS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvblNlcmllc01vdXNlT3V0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzQmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vb25OZWFyZXN0WD17KHZhbHVlKT0+Y29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxCb3JkZXJzIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IHtmaWxsOiAnIzE2MWYyZCd9LFxyXG4gICAgICAgICAgICAgICAgbGVmdDoge2ZpbGw6ICcjMTYxZjJkJ30sXHJcbiAgICAgICAgICAgICAgICByaWdodDoge2ZpbGw6ICcjMTYxZjJkJ30sXHJcbiAgICAgICAgICAgICAgICB0b3A6IHtmaWxsOiAnIzE2MWYyZCd9XHJcbiAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgPFhBeGlzXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPSdib3R0b20nXHJcbiAgICAgICAgICAgICAgICB0aWNrVG90YWwgPSB7eFRpY2tzQXJyYXkubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdD17dj0+eFRpY2tzQXJyYXlbdi0xXS5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFhBeGlzXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPSd0b3AnXHJcbiAgICAgICAgICAgICAgICB0aWNrVG90YWwgPSB7eFRpY2tzQXJyYXkubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdD17dj0+eFRpY2tzQXJyYXlbdi0xXS5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tUb3RhbD17ZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tWYWx1ZXM9e2RyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5zdGFydE9yZGVyLWIuc3RhcnRPcmRlcikubWFwKGw9Pmwuc3RhcnRPcmRlciotMSl9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tGb3JtYXQ9e3Y9PntyZXR1cm4gZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLnN0YXJ0T3JkZXItYi5zdGFydE9yZGVyKVsoLTEqdiktMV0uY29kZTt9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8WUF4aXNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPXsncmlnaHQnfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0PXt2PT52fVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVmFsdWVzPXtkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuZW5kT3JkZXItYi5lbmRPcmRlcikubWFwKGw9Pmwuc3RhcnRPcmRlciotMSl9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tGb3JtYXQ9e3Y9PntyZXR1cm4gZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLmVuZE9yZGVyLWIuZW5kT3JkZXIpWygtMSp2KS0xXS5jb2RlO31cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7aGludD9oaW50Om51bGx9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saXN0LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDowO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4IDBweCAxOHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6MDtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMC43NWZyIGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+ICAgIFxyXG4gICAgICAgIDwvRmxleGlibGVYWVBsb3Q+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==