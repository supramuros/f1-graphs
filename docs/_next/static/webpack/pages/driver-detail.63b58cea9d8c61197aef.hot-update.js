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
  console.log(xTicksArray);
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
      orientation: "bottom" //tickFormat={v=>xTicksArray[v-1].label}

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
      children: ".list-container.jsx-1345680363{list-style:none;padding-inline-start:0;margin:0;padding:15px 0px 18px 0px;margin-block-start:0;margin-block-end:0;display:grid;grid-template-columns:auto 0.75fr auto;height:100%;line-height:100%;font-size:0.75rem;justify-items:stretch;background-color:black;background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxmMS1ncmFwaHNcXGNvbXBvbmVudHNcXGdyYXBoc1xcU2NhdHRlckdyYXBoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnS29CLEFBRzRCLGdCQUNPLHVCQUNkLFNBQ2lCLDBCQUNMLHFCQUNGLG1CQUNOLGFBQzJCLHVDQUM1QixZQUNLLGlCQUNDLGtCQUNJLHNCQUNDLHVCQUNNLDRCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXG1vYmlsZWRhblxcQ29kZVxcZjEtZ3JhcGhzXFxjb21wb25lbnRzXFxncmFwaHNcXFNjYXR0ZXJHcmFwaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIaW50LCBGbGV4aWJsZVhZUGxvdCwgWEF4aXMsIFlBeGlzLCBWZXJ0aWNhbEdyaWRMaW5lcywgSG9yaXpvbnRhbEdyaWRMaW5lcyxNYXJrU2VyaWVzLCBCb3JkZXJzfSBmcm9tICdyZWFjdC12aXMnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC12aXMvZGlzdC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBHcmFwaERhdGEgfSBmcm9tICcuLi8uLi90eXBlcy9HcmFwaFR5cGVzJztcclxuLypcclxuKiAgIERpc3BsYXlzIGEgc2NhdHRlciBncmFwaCB3aXRoIG1hcmtzIGZvciBlYWNoIHNlcmllc1xyXG4qL1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGRhdGE6R3JhcGhEYXRhW10sXHJcbiAgICBtaW5ZPzpudW1iZXIsXHJcbiAgICBtYXhZPzpudW1iZXIsXHJcbiAgICB5T3JpZW50YXRpb24/Oidub3JtYWwnfCdmbGlwcGVkJyxcclxuICAgIHhTZWxlY3RlZD86bnVtYmVyLFxyXG4gICAgc2VyaWVzU2VsZWN0ZWQ/OnN0cmluZyxcclxuICAgIG9uU2VyaWVzSG92ZXI6KGtleTpzdHJpbmcpPT52b2lkLFxyXG4gICAgb25TZXJpZXNCbHVyOigpPT52b2lkLFxyXG4gICAgaGludD86UmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjYXR0ZXJHcmFwaChcclxuICAgIHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIG1pblksXHJcbiAgICAgICAgbWF4WSxcclxuICAgICAgICB5T3JpZW50YXRpb24sXHJcbiAgICAgICAgeFNlbGVjdGVkLFxyXG4gICAgICAgIHNlcmllc1NlbGVjdGVkLFxyXG4gICAgICAgIG9uU2VyaWVzSG92ZXIsXHJcbiAgICAgICAgb25TZXJpZXNCbHVyLFxyXG4gICAgICAgIGhpbnRcclxuICAgIH06UHJvcHMpe1xyXG5cclxuICAgIGlmKCFkYXRhKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+Tm8gRGF0YTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb25zdCB2b3Jub2lOb2RlcyA9IGRhdGEuZmxhdE1hcChkPT5kLnNlcmllcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGk9Pih7eDppLngsIHk6aS55LCBrZXk6aS5rZXl9KSk7XHJcbiAgICAqL1xyXG4gICAgY29uc3QgZGF0YU1pbiA9IGRhdGEuZmlsdGVyKGY9PiFmLmRpc2FibGVkKS5yZWR1Y2UoKGEsYik9Pk1hdGgubWluKGEsXHJcbiAgICAgICAgYi5zZXJpZXMucmVkdWNlKChjLGQpPT5NYXRoLm1pbihjLGQueSksSW5maW5pdHkpKVxyXG4gICAgICAgICxJbmZpbml0eSk7XHJcbiAgICBjb25zdCBkYXRhTWF4ID0gZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLnJlZHVjZSgoYSxiKT0+TWF0aC5tYXgoYSxcclxuICAgICAgICBiLnNlcmllcy5yZWR1Y2UoKGMsZCk9Pk1hdGgubWF4KGMsZC55KSwtSW5maW5pdHkpKVxyXG4gICAgICAgICwtSW5maW5pdHkpO1xyXG4gICAgbGV0IHlNaW4gPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgeU1heCA9IHVuZGVmaW5lZDtcclxuICAgIFxyXG5cclxuICAgIGlmKHlPcmllbnRhdGlvbj09PSdmbGlwcGVkJyl7XHJcbiAgICAgICAgeU1heCA9IG1pblkmJm1pblk+ZGF0YU1pbj9taW5ZOmRhdGFNaW47XHJcbiAgICAgICAgeU1pbiA9IG1heFkmJm1heFk8ZGF0YU1heD9tYXhZOmRhdGFNYXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB5TWluID0gbWluWSYmbWluWT5kYXRhTWluP21pblk6ZGF0YU1pbjtcclxuICAgICAgICB5TWF4ID0gbWF4WSYmbWF4WTxkYXRhTWF4P21heFk6ZGF0YU1heDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgeFRpY2tzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgZGF0YS5mbGF0TWFwKHg9Pnguc2VyaWVzKS5mb3JFYWNoKHY9PntcclxuICAgICAgICB4VGlja3NNYXAuc2V0KHYueCx2LnhMYWJlbD92LnhMYWJlbDp2LngpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20oeFRpY2tzTWFwLmtleXMoKSkubWFwKG09Pih7dmFsdWU6bSxsYWJlbDp4VGlja3NNYXAuZ2V0KG0pfSkpO1xyXG4gICAgY29uc29sZS5sb2coeFRpY2tzQXJyYXkpO1xyXG4gICAgLypcclxuICAgIGNvbnN0IHhUaWNrc0FycmF5ID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGFcclxuICAgICAgICAuZmxhdE1hcCh4PT54LnNlcmllc1xyXG4gICAgICAgIC5tYXAodj0+KHt2YWx1ZTp2LngsbGFiZWw6di54TGFiZWw/di54TGFiZWw6di54fSkpKSkpO1xyXG4gICBcclxuICAgIGNvbnN0IHlUaWNrc0FycmF5ID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGFcclxuICAgICAgICAgICAgLmZsYXRNYXAoeT0+eS5zZXJpZXNcclxuICAgICAgICAgICAgLm1hcCh2PT4oe3ZhbHVlOnYueSxsYWJlbDp2LnlMYWJlbD92LnlMYWJlbDp2Lnl9KSkpKSk7XHJcbiAgICAqL1xyXG4gICAgLypjb25zdCBkcml2ZXJQb3NpdGlvbk9yZGVyID0gZGF0YS5tYXAoZD0+KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OmQuZHJpdmVyLmRyaXZlcklkLFxyXG4gICAgICAgICAgICBjb2xvcjpkLmRyaXZlci5jb25zdHJ1Y3RvckNvbG9yLFxyXG4gICAgICAgICAgICBjb2RlOmQuZHJpdmVyLmRyaXZlckNvZGUsXHJcbiAgICAgICAgICAgIHN0YXJ0T3JkZXI6ZC5kcml2ZXIuc3RhcnRpbmdPcmRlcixcclxuICAgICAgICAgICAgZW5kT3JkZXI6ZC5kcml2ZXIuZW5kaW5nUG9zaXRpb25cclxuICAgICAgICB9KVxyXG4gICAgKTsqL1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4aWJsZVhZUGxvdFxyXG4gICAgICAgIG1hcmdpbj17e3RvcDogMzAsIGxlZnQ6IDUwLCBib3R0b206IDMwLCByaWdodDogNTB9fVxyXG4gICAgICAgIHlEb21haW49e1t5TWluLTEseU1heCsxXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxWZXJ0aWNhbEdyaWRMaW5lcyBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SG9yaXpvbnRhbEdyaWRMaW5lc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtkYXRhLmZpbHRlcihmPT4hZi5kaXNhYmxlZCkubWFwKGQ9PihcclxuICAgICAgICAgICAgPE1hcmtTZXJpZXNcclxuICAgICAgICAgICAgICAgIGtleT17ZC5zZXJpZXNLZXl9XHJcbiAgICAgICAgICAgICAgICBpZD17ZC5zZXJpZXNLZXl9XHJcbiAgICAgICAgICAgICAgICAvL2N1cnZlPXsnY3VydmVNb25vdG9uZVgnfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2QuY29sb3J9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZC5zZXJpZXNLZXk9PT0gc2VyaWVzU2VsZWN0ZWQ/MzoxfSBcclxuICAgICAgICAgICAgICAgIHNpemU9ezN9XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXtzZXJpZXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgID9kLnNlcmllc0tleSA9PT0gc2VyaWVzU2VsZWN0ZWQ/MTowLjVcclxuICAgICAgICAgICAgICAgICAgICA6MX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2Quc2VyaWVzfVxyXG4gICAgICAgICAgICAgICAgb25TZXJpZXNNb3VzZU92ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNIb3ZlcihkLnNlcmllc0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25TZXJpZXNNb3VzZU91dD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblNlcmllc0JsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL29uTmVhcmVzdFg9eyh2YWx1ZSk9PmNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Qm9yZGVycyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHtmaWxsOiAnIzE2MWYyZCd9LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHtmaWxsOiAnIzE2MWYyZCd9LFxyXG4gICAgICAgICAgICAgICAgdG9wOiB7ZmlsbDogJyMxNjFmMmQnfVxyXG4gICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2U6J3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj0nYm90dG9tJ1xyXG4gICAgICAgICAgICAgICAgLy90aWNrRm9ybWF0PXt2PT54VGlja3NBcnJheVt2LTFdLmxhYmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8WEF4aXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249J3RvcCdcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3Y9PnhUaWNrc0FycmF5W3YtMV0ubGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxZQXhpc1xyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgLy90aWNrVmFsdWVzPXtkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuc3RhcnRPcmRlci1iLnN0YXJ0T3JkZXIpLm1hcChsPT5sLnN0YXJ0T3JkZXIqLTEpfVxyXG4gICAgICAgICAgICAgICAgLy90aWNrRm9ybWF0PXt2PT57cmV0dXJuIGRyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5zdGFydE9yZGVyLWIuc3RhcnRPcmRlcilbKC0xKnYpLTFdLmNvZGU7fVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj17J3JpZ2h0J31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdD17dj0+dn1cclxuICAgICAgICAgICAgICAgIC8vdGlja1RvdGFsPXtkYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIC8vdGlja1ZhbHVlcz17ZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLmVuZE9yZGVyLWIuZW5kT3JkZXIpLm1hcChsPT5sLnN0YXJ0T3JkZXIqLTEpfVxyXG4gICAgICAgICAgICAgICAgLy90aWNrRm9ybWF0PXt2PT57cmV0dXJuIGRyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5lbmRPcmRlci1iLmVuZE9yZGVyKVsoLTEqdiktMV0uY29kZTt9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2hpbnQ/aGludDpudWxsfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGlzdC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweCAwcHggMThweCAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDowO1xyXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOjA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDAuNzVmciBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6c3RyZXRjaDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAgICAgICB9YH1cclxuICAgICAgICA8L3N0eWxlPiAgICBcclxuICAgICAgICA8L0ZsZXhpYmxlWFlQbG90PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\f1-graphs\\\\components\\\\graphs\\\\ScatterGraph.tsx */"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmFwaHMvU2NhdHRlckdyYXBoLnRzeCJdLCJuYW1lcyI6WyJTY2F0dGVyR3JhcGgiLCJkYXRhIiwibWluWSIsIm1heFkiLCJ5T3JpZW50YXRpb24iLCJ4U2VsZWN0ZWQiLCJzZXJpZXNTZWxlY3RlZCIsIm9uU2VyaWVzSG92ZXIiLCJvblNlcmllc0JsdXIiLCJoaW50IiwiZGF0YU1pbiIsImZpbHRlciIsImYiLCJkaXNhYmxlZCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsIm1pbiIsInNlcmllcyIsImMiLCJkIiwieSIsIkluZmluaXR5IiwiZGF0YU1heCIsIm1heCIsInlNaW4iLCJ1bmRlZmluZWQiLCJ5TWF4IiwieFRpY2tzTWFwIiwiTWFwIiwiZmxhdE1hcCIsIngiLCJmb3JFYWNoIiwidiIsInNldCIsInhMYWJlbCIsInhUaWNrc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsIm0iLCJ2YWx1ZSIsImxhYmVsIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInN0cm9rZSIsInNlcmllc0tleSIsImNvbG9yIiwiZSIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQW1CZSxTQUFTQSxZQUFULE9BV0g7QUFBQTs7QUFBQSxNQVRKQyxJQVNJLFFBVEpBLElBU0k7QUFBQSxNQVJKQyxJQVFJLFFBUkpBLElBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxZQU1JLFFBTkpBLFlBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxjQUlJLFFBSkpBLGNBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7O0FBRVIsTUFBRyxDQUFDUixJ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QUFFLE9BRGpCO0FBRUksV0FBSyxFQUFFO0FBQUNBLGNBQU0sRUFBQztBQUFSLE9BRlg7QUFHSSxnQkFBVSxFQUFFLG9CQUFBbEIsQ0FBQztBQUFBLGVBQUVBLENBQUY7QUFBQSxPQUhqQixDQUlJO0FBQ0E7QUFDQTtBQUNBOztBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExREosRUFvRUt6QixJQUFJLEdBQUNBLElBQUQsR0FBTSxJQXBFZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBGSDtLQS9KdUJULFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZHJpdmVyLWRldGFpbC42M2I1OGNlYTlkOGM2MTE5N2FlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGludCwgRmxleGlibGVYWVBsb3QsIFhBeGlzLCBZQXhpcywgVmVydGljYWxHcmlkTGluZXMsIEhvcml6b250YWxHcmlkTGluZXMsTWFya1NlcmllcywgQm9yZGVyc30gZnJvbSAncmVhY3QtdmlzJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzL2Rpc3Qvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgR3JhcGhEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMvR3JhcGhUeXBlcyc7XHJcbi8qXHJcbiogICBEaXNwbGF5cyBhIHNjYXR0ZXIgZ3JhcGggd2l0aCBtYXJrcyBmb3IgZWFjaCBzZXJpZXNcclxuKi9cclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgICBkYXRhOkdyYXBoRGF0YVtdLFxyXG4gICAgbWluWT86bnVtYmVyLFxyXG4gICAgbWF4WT86bnVtYmVyLFxyXG4gICAgeU9yaWVudGF0aW9uPzonbm9ybWFsJ3wnZmxpcHBlZCcsXHJcbiAgICB4U2VsZWN0ZWQ/Om51bWJlcixcclxuICAgIHNlcmllc1NlbGVjdGVkPzpzdHJpbmcsXHJcbiAgICBvblNlcmllc0hvdmVyOihrZXk6c3RyaW5nKT0+dm9pZCxcclxuICAgIG9uU2VyaWVzQmx1cjooKT0+dm9pZCxcclxuICAgIGhpbnQ/OlJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2F0dGVyR3JhcGgoXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBtaW5ZLFxyXG4gICAgICAgIG1heFksXHJcbiAgICAgICAgeU9yaWVudGF0aW9uLFxyXG4gICAgICAgIHhTZWxlY3RlZCxcclxuICAgICAgICBzZXJpZXNTZWxlY3RlZCxcclxuICAgICAgICBvblNlcmllc0hvdmVyLFxyXG4gICAgICAgIG9uU2VyaWVzQmx1cixcclxuICAgICAgICBoaW50XHJcbiAgICB9OlByb3BzKXtcclxuXHJcbiAgICBpZighZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPk5vIERhdGE8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgY29uc3Qgdm9ybm9pTm9kZXMgPSBkYXRhLmZsYXRNYXAoZD0+ZC5zZXJpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpPT4oe3g6aS54LCB5OmkueSwga2V5Omkua2V5fSkpO1xyXG4gICAgKi9cclxuICAgIGNvbnN0IGRhdGFNaW4gPSBkYXRhLmZpbHRlcihmPT4hZi5kaXNhYmxlZCkucmVkdWNlKChhLGIpPT5NYXRoLm1pbihhLFxyXG4gICAgICAgIGIuc2VyaWVzLnJlZHVjZSgoYyxkKT0+TWF0aC5taW4oYyxkLnkpLEluZmluaXR5KSlcclxuICAgICAgICAsSW5maW5pdHkpO1xyXG4gICAgY29uc3QgZGF0YU1heCA9IGRhdGEuZmlsdGVyKGY9PiFmLmRpc2FibGVkKS5yZWR1Y2UoKGEsYik9Pk1hdGgubWF4KGEsXHJcbiAgICAgICAgYi5zZXJpZXMucmVkdWNlKChjLGQpPT5NYXRoLm1heChjLGQueSksLUluZmluaXR5KSlcclxuICAgICAgICAsLUluZmluaXR5KTtcclxuICAgIGxldCB5TWluID0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IHlNYXggPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuXHJcbiAgICBpZih5T3JpZW50YXRpb249PT0nZmxpcHBlZCcpe1xyXG4gICAgICAgIHlNYXggPSBtaW5ZJiZtaW5ZPmRhdGFNaW4/bWluWTpkYXRhTWluO1xyXG4gICAgICAgIHlNaW4gPSBtYXhZJiZtYXhZPGRhdGFNYXg/bWF4WTpkYXRhTWF4O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgeU1pbiA9IG1pblkmJm1pblk+ZGF0YU1pbj9taW5ZOmRhdGFNaW47XHJcbiAgICAgICAgeU1heCA9IG1heFkmJm1heFk8ZGF0YU1heD9tYXhZOmRhdGFNYXg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHhUaWNrc01hcCA9IG5ldyBNYXAoKTtcclxuICAgIGRhdGEuZmxhdE1hcCh4PT54LnNlcmllcykuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgeFRpY2tzTWFwLnNldCh2Lngsdi54TGFiZWw/di54TGFiZWw6di54KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeFRpY2tzQXJyYXkgPSBBcnJheS5mcm9tKHhUaWNrc01hcC5rZXlzKCkpLm1hcChtPT4oe3ZhbHVlOm0sbGFiZWw6eFRpY2tzTWFwLmdldChtKX0pKTtcclxuICAgIGNvbnNvbGUubG9nKHhUaWNrc0FycmF5KTtcclxuICAgIC8qXHJcbiAgICBjb25zdCB4VGlja3NBcnJheSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhXHJcbiAgICAgICAgLmZsYXRNYXAoeD0+eC5zZXJpZXNcclxuICAgICAgICAubWFwKHY9Pih7dmFsdWU6di54LGxhYmVsOnYueExhYmVsP3YueExhYmVsOnYueH0pKSkpKTtcclxuICAgXHJcbiAgICBjb25zdCB5VGlja3NBcnJheSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhXHJcbiAgICAgICAgICAgIC5mbGF0TWFwKHk9Pnkuc2VyaWVzXHJcbiAgICAgICAgICAgIC5tYXAodj0+KHt2YWx1ZTp2LnksbGFiZWw6di55TGFiZWw/di55TGFiZWw6di55fSkpKSkpO1xyXG4gICAgKi9cclxuICAgIC8qY29uc3QgZHJpdmVyUG9zaXRpb25PcmRlciA9IGRhdGEubWFwKGQ9PihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTpkLmRyaXZlci5kcml2ZXJJZCxcclxuICAgICAgICAgICAgY29sb3I6ZC5kcml2ZXIuY29uc3RydWN0b3JDb2xvcixcclxuICAgICAgICAgICAgY29kZTpkLmRyaXZlci5kcml2ZXJDb2RlLFxyXG4gICAgICAgICAgICBzdGFydE9yZGVyOmQuZHJpdmVyLnN0YXJ0aW5nT3JkZXIsXHJcbiAgICAgICAgICAgIGVuZE9yZGVyOmQuZHJpdmVyLmVuZGluZ1Bvc2l0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICk7Ki9cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleGlibGVYWVBsb3RcclxuICAgICAgICBtYXJnaW49e3t0b3A6IDMwLCBsZWZ0OiA1MCwgYm90dG9tOiAzMCwgcmlnaHQ6IDUwfX1cclxuICAgICAgICB5RG9tYWluPXtbeU1pbi0xLHlNYXgrMV19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8VmVydGljYWxHcmlkTGluZXMgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEhvcml6b250YWxHcmlkTGluZXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZGF0YS5maWx0ZXIoZj0+IWYuZGlzYWJsZWQpLm1hcChkPT4oXHJcbiAgICAgICAgICAgIDxNYXJrU2VyaWVzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Quc2VyaWVzS2V5fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Quc2VyaWVzS2V5fVxyXG4gICAgICAgICAgICAgICAgLy9jdXJ2ZT17J2N1cnZlTW9ub3RvbmVYJ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtkLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2Quc2VyaWVzS2V5PT09IHNlcmllc1NlbGVjdGVkPzM6MX0gXHJcbiAgICAgICAgICAgICAgICBzaXplPXszfVxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eT17c2VyaWVzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/ZC5zZXJpZXNLZXkgPT09IHNlcmllc1NlbGVjdGVkPzE6MC41XHJcbiAgICAgICAgICAgICAgICAgICAgOjF9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkLnNlcmllc31cclxuICAgICAgICAgICAgICAgIG9uU2VyaWVzTW91c2VPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWVzSG92ZXIoZC5zZXJpZXNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uU2VyaWVzTW91c2VPdXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpZXNCbHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9vbk5lYXJlc3RYPXsodmFsdWUpPT5jb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEJvcmRlcnMgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvdHRvbToge2ZpbGw6ICcjMTYxZjJkJ30sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiB7ZmlsbDogJyMxNjFmMmQnfSxcclxuICAgICAgICAgICAgICAgIHRvcDoge2ZpbGw6ICcjMTYxZjJkJ31cclxuICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICA8WEF4aXNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOid3aGl0ZSd9fVxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249J2JvdHRvbSdcclxuICAgICAgICAgICAgICAgIC8vdGlja0Zvcm1hdD17dj0+eFRpY2tzQXJyYXlbdi0xXS5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFhBeGlzXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPSd0b3AnXHJcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0PXt2PT54VGlja3NBcnJheVt2LTFdLmxhYmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8WUF4aXNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPXsnbGVmdCd9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgICAgIC8vdGlja1RvdGFsPXtkYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIC8vdGlja1ZhbHVlcz17ZHJpdmVyUG9zaXRpb25PcmRlci5zb3J0KChhLGIpPT5hLnN0YXJ0T3JkZXItYi5zdGFydE9yZGVyKS5tYXAobD0+bC5zdGFydE9yZGVyKi0xKX1cclxuICAgICAgICAgICAgICAgIC8vdGlja0Zvcm1hdD17dj0+e3JldHVybiBkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuc3RhcnRPcmRlci1iLnN0YXJ0T3JkZXIpWygtMSp2KS0xXS5jb2RlO31cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxZQXhpc1xyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb249eydyaWdodCd9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZTond2hpdGUnfX1cclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ9e3Y9PnZ9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tUb3RhbD17ZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAvL3RpY2tWYWx1ZXM9e2RyaXZlclBvc2l0aW9uT3JkZXIuc29ydCgoYSxiKT0+YS5lbmRPcmRlci1iLmVuZE9yZGVyKS5tYXAobD0+bC5zdGFydE9yZGVyKi0xKX1cclxuICAgICAgICAgICAgICAgIC8vdGlja0Zvcm1hdD17dj0+e3JldHVybiBkcml2ZXJQb3NpdGlvbk9yZGVyLnNvcnQoKGEsYik9PmEuZW5kT3JkZXItYi5lbmRPcmRlcilbKC0xKnYpLTFdLmNvZGU7fVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtoaW50P2hpbnQ6bnVsbH1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxpc3QtY29udGFpbmVye1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjE1cHggMHB4IDE4cHggMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MDtcclxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDowO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAwLjc1ZnIgYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOnN0cmV0Y2g7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgPC9zdHlsZT4gICAgXHJcbiAgICAgICAgPC9GbGV4aWJsZVhZUGxvdD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9