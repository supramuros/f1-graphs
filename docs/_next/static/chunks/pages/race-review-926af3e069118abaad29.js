_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{CPlV:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var i=t("nKUr"),n=t("LmJ8");t("AebA");function a(e){if(!e.data)return Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"No Data"})});var r=e.data.filter((function(e){return!e.disabled})).flatMap((function(r){return r.series.sort((function(e,r){return e.y-r.y})).map((function(t,i){return{key:r.seriesKey,x:t.x,opacity:e.seriesSelected?e.seriesSelected===r.seriesKey?1:.5:1,color:t.color?t.color:r.color,y:t.y}})).filter((function(r){return r.y<2*e.yMax}))})),t=r.length+4,a=[{key:"index",angle0:0,angle:2*Math.PI,opacity:1,radius:t-r.length,radius0:0,color:"rgb(32, 32, 32)"}].concat(r.map((function(r,i){return{key:r.key,angle0:0,angle:2*Math.PI*(1-r.y/e.yMax),opacity:r.opacity,radius:t-i,radius0:t-i-1,color:r.color}})));return Object(i.jsxs)(n.c,{xDomain:[-t,t],yDomain:[-t,t],margin:{top:10,left:10,bottom:10,right:10},children:[Object(i.jsx)(n.a,{animation:!0,radiusDomain:[0,t],center:{x:0,y:0},data:a,colorType:"literal",onValueMouseOver:function(r){e.onSeriesHover&&e.onSeriesHover("index"===r.key?null:r.key)},onValueMouseOut:function(){e.onSeriesBlur&&e.onSeriesBlur()}}),Object(i.jsx)(n.f,{data:[{x:0,y:0,label:e.xSelected?e.xSelected.toString():"Final",style:{fontSize:"1rem",stroke:"white",fill:"white"}}],labelAnchorX:"middle",labelAnchorY:"middle"})]})}},Pp2w:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return v}));var i=t("rePB"),n=t("nKUr"),a=t("MX0m"),o=t.n(a),s=t("/k09"),l=t("gJb+"),d=t("IG1u"),c=t("XJ7J"),p=t("h3uB"),u=t("CPlV"),g=(t("q1tI"),t("LmJ8"));t("AebA");function f(e){var r=e.data,t=e.minY,i=e.maxY,a=e.yOrientation,s=(e.xSelected,e.seriesSelected),l=e.onSeriesHover,d=e.onSeriesBlur,c=e.hint;if(!r)return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"No Data"})});var p=r.filter((function(e){return!e.disabled})).reduce((function(e,r){return Math.min(e,r.series.reduce((function(e,r){return Math.min(e,r.y)}),1/0))}),1/0),u=r.filter((function(e){return!e.disabled})).reduce((function(e,r){return Math.max(e,r.series.reduce((function(e,r){return Math.max(e,r.y)}),-1/0))}),-1/0),f=void 0,m=void 0;"flipped"===a?(m=t&&t>p?t:p,f=i&&i<u?i:u):(f=t&&t>p?t:p,m=i&&i<u?i:u);Array.from(new Set(r.flatMap((function(e){return e.series.map((function(e){return{value:e.x,label:e.xLabel?e.xLabel:e.x}}))}))));return Object(n.jsxs)(g.c,{margin:{top:30,left:50,bottom:30,right:50},yDomain:[f-1,m+1],children:[Object(n.jsx)(g.e,{style:{stroke:"white"}}),r.filter((function(e){return!e.disabled})).map((function(e){return Object(n.jsx)(g.h,{id:e.seriesKey,color:e.color,strokeWidth:e.seriesKey===s?3:1,size:1,opacity:s?e.seriesKey===s?1:.5:1,data:e.series,onSeriesMouseOver:function(r){l(e.seriesKey)},onSeriesMouseOut:function(e){d()}},e.seriesKey)})),Object(n.jsx)(g.b,{style:{bottom:{fill:"#161f2d"},left:{fill:"#161f2d"},right:{fill:"#161f2d"},top:{fill:"#161f2d"}}}),Object(n.jsx)(g.m,{style:{stroke:"white"},orientation:"bottom"}),Object(n.jsx)(g.m,{style:{stroke:"white"},orientation:"top"}),Object(n.jsx)(g.n,{orientation:"left",style:{stroke:"white"}}),Object(n.jsx)(g.n,{orientation:"right",style:{stroke:"white"},tickFormat:function(e){return e}}),c||null,Object(n.jsx)(o.a,{id:"1345680363",children:[".list-container.jsx-1345680363{list-style:none;padding-inline-start:0;margin:0;padding:15px 0px 18px 0px;margin-block-start:0;margin-block-end:0;display:grid;grid-template-columns:auto 0.75fr auto;height:100%;line-height:100%;font-size:0.75rem;justify-items:stretch;background-color:black;background-clip:content-box;}"]})]})}var m=t("4+A4");function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){Object(i.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){var r=Object(m.a)(e.season,e.round),t=r.isLoading,i=(r.error,r.raceDetails),a=r.driverMap,g=!!(e.driver&&e.driverList&&e.driverList.find((function(r){return r.driverId===e.driver&&r.enabled})));if(t||!e.driverList)return Object(n.jsx)(s.a,{});for(var x=[],v=0;v<=i.numLaps;v++)x.push({value:v,label:v});var j=e.driverList.map((function(r){return a.get(r.driverId).laps.filter((function(r,t,n){return e.lap&&e.lap>0?r.lapNum===e.lap:t===n.length-1&&r.lapNum>=i.numLaps-1})).map((function(e){return{driverId:e.driverId,disabled:!r.enabled,color:a.get(r.driverId).driver.constructorColor,lapsCompleted:a.get(r.driverId).lapsCompleted,lapNum:e.lapNum,gap:e.gap,positionGap:e.positionGap,position:e.position,time:e.time,timeDsp:e.timeDsp,totalTime:e.totalTime,pitStopTime:e.pitStopTime,timeNetPitStop:e.timeNetPitStop}}))})).flat().sort((function(e,r){return e.position-r.position})),h=e.driverList.map((function(r){return{driverId:r.driverId,enabled:r.enabled,driverCode:a.get(r.driverId),constructorColor:a.get(r.driverId).driver.constructorColor,time:e.lap&&e.lap>0&&e.lap<i.numLaps?a.get(r.driverId).lapsCompleted>=e.lap?a.get(r.driverId).laps[e.lap].time:"OUT":a.get(r.driverId).raceTime,timeDsp:e.lap&&e.lap>0&&e.lap<i.numLaps?a.get(r.driverId).lapsCompleted>=e.lap?a.get(r.driverId).laps[e.lap].timeDsp:"OUT":a.get(r.driverId).raceTimeDsp,gap:e.lap&&e.lap>0&&e.lap<i.numLaps?a.get(r.driverId).lapsCompleted>=e.lap?a.get(r.driverId).laps[e.lap].gap:"OUT":a.get(r.driverId).raceTimeDsp,positionGap:e.lap&&e.lap>0&&e.lap<i.numLaps?a.get(r.driverId).lapsCompleted>=e.lap?a.get(r.driverId).laps[e.lap].positionGap:"OUT":a.get(r.driverId).raceTimeDsp,position:e.lap&&e.lap>0&&e.lap<i.numLaps&&a.get(r.driverId).lapsCompleted>=e.lap?a.get(r.driverId).laps[e.lap].position:a.get(r.driverId).endingPosition}})).sort((function(e,r){return e.position-r.position}));return Object(n.jsxs)("div",{className:"jsx-2113602246 grid-container",children:[Object(n.jsx)("div",{className:"jsx-2113602246 left-column",children:Object(n.jsx)(d.a,{style:{padding:0},title:!e.lap||0===e.lap||e.lap>=i.numLaps?Object(n.jsx)("h1",{className:"jsx-2113602246",children:"Final Results"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"jsx-2113602246",children:"LAP"}),Object(n.jsxs)("h2",{className:"jsx-2113602246",children:[e.lap,"/",i.numLaps]})]}),children:h.map((function(r){var t=a.get(r.driverId);return Object(n.jsx)(c.a,{id:r.driverId,textCenter:t.driver.driverCode,textRight:e.lap&&e.lap>0&&e.lap<i.numLaps?0===r.gap?"Interval":"number"===typeof r.gap?r.gap.toFixed(3).toString():r.gap.toString():r.timeDsp,orderNumber:r.position,color:t.driver.constructorColor,checked:r.enabled,style:g?r.driverId===e.driver?{opacity:1}:{opacity:.5}:null,onChange:function(t){return e.setDriverList(e.driverList.map((function(e){return b(b({},e),{},{enabled:r.driverId===e.driverId?!e.enabled:e.enabled})})))},onMouseEnter:function(t){return r.enabled?e.setDriver(r.driverId):null},onMouseLeave:function(r){return e.setDriver(null)}},r.driverId)}))})}),Object(n.jsx)("div",{className:"jsx-2113602246 main-top",children:Object(n.jsx)(l.a,{options:x,value:e.lap,onChange:e.setLap})}),Object(n.jsx)("div",{id:"main-graph-title",className:"jsx-2113602246",children:"GAP TO LEADER"}),Object(n.jsx)("div",{className:"jsx-2113602246 main",children:Object(n.jsx)(f,{data:e.driverList.map((function(r){return{seriesKey:r.driverId,series:a.get(r.driverId).laps.map((function(t){return{key:t.driverId,x:t.lapNum,xLabel:t.lapNum.toString(),y:t.gap,color:a.get(r.driverId).driver.constructorColor,opacity:e.driver?e.driver===r.driverId?1:.5:1,disabled:!r.enabled}})),color:a.get(r.driverId).driver.constructorColor,disabled:!r.enabled}})),minY:0,maxY:2*a.get(e.driverList[0].driverId).raceStats.fastestLapTime,yOrientation:"flipped",xSelected:e.lap,seriesSelected:e.driver,onSeriesHover:function(r){return e.setDriver(r)},onSeriesBlur:function(){return e.setDriver(null)}})}),Object(n.jsxs)("div",{className:"jsx-2113602246 right-column",children:[Object(n.jsx)("div",{id:"right-top-graph-title",className:"jsx-2113602246",children:"GAP TO LEADER"}),Object(n.jsx)("div",{className:"jsx-2113602246 right-top-column",children:Object(n.jsx)(u.a,{data:j.map((function(e){return{seriesKey:e.driverId,series:[{key:e.driverId,x:e.lapNum,xLabel:e.lapNum.toString(),y:e.gap,yLabel:e.gap.toString(),color:e.color}],disabled:e.disabled}})),yMax:j.reduce((function(e,r){return Math.max(e,r.time)}),-1/0),seriesSelected:e.driver,xSelected:e.lap,onSeriesHover:function(r){return e.setDriver(r)},onSeriesBlur:function(){return e.setDriver(null)}})}),Object(n.jsx)("div",{id:"right-bottom-graph-title",className:"jsx-2113602246",children:"LAP GAP TO LEADER"}),Object(n.jsx)("div",{className:"jsx-2113602246 right-bottom-column",children:Object(n.jsx)(p.a,{data:j.map((function(e){return{key:e.driverId,disabled:e.disabled,x:e.position,xLabel:a.get(e.driverId).driver.driverCode,color:a.get(e.driverId).driver.constructorColor,y:e.gap}})),maxY:2*a.get(e.driverList[0].driverId).raceStats.fastestLapTime,xSelected:e.lap,seriesSelected:e.driver,onSeriesHover:function(r){return e.setDriver(r)},onSeriesBlur:function(){return e.setDriver(null)}})})]}),Object(n.jsx)(o.a,{id:"2113602246",children:[".grid-container.jsx-2113602246{display:grid;grid-template-columns:auto 2fr 1fr;grid-template-rows:1fr;height:100%;min-height:500px;}",".left-column.jsx-2113602246{grid-column:1;grid-row:1/3;background-color:transparent;}",".right-column.jsx-2113602246{grid-column:3;grid-row:1/3;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;display:grid;grid-template-rows:1fr 1fr;}",".main-top.jsx-2113602246{grid-column:2;grid-row:1;min-height:2rem;margin-left:35px;margin-right:70px;background-color:transparent;padding-top:15px;}",".main.jsx-2113602246{grid-column:2;grid-row:2;background-color:#161f2d;background-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%,rgba(0,0,0,1)),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(45deg,#161f2d 25%,transparent 25%,transparent 75%,#161f2d 75%,#161f2d),linear-gradient(to bottom,rgb(8,8,8),rgb(32,32,32));background-size:100% 100%,10px 10px,10px 10px,10px 5px;background-position:0px 0px,0px 0px,5px 5px,0px 0px;min-height:500px;height:100%;}","#main-graph-title.jsx-2113602246{position:fixed;left:20%;top:75%;font-size:5rem;opacity:.15;z-index:2;}","#right-top-graph-title.jsx-2113602246{position:fixed;left:72%;top:15%;font-size:1rem;opacity:.15;z-index:2;}","#right-bottom-graph-title.jsx-2113602246{position:fixed;left:75%;top:58%;font-size:1rem;opacity:.15;z-index:2;}",".right-top-column.jsx-2113602246{grid-row:1;background-color:transparent;}",".right-bottom-column.jsx-2113602246{grid-row:2;background-color:transparent;}","h1.jsx-2113602246{margin:0;padding:0;font-size:1rem;}","h2.jsx-2113602246{margin:0;padding:0;font-size:0.75rem;}"]})]})}},Y0np:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/race-review",function(){return t("Pp2w")}])},h3uB:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var i=t("nKUr"),n=t("LmJ8");t("AebA");function a(e){var r=e.data,t=e.minY,a=e.maxY,o=(e.xSelected,e.seriesSelected),s=e.onSeriesHover,l=e.onSeriesBlur,d=e.stackBy;if(!r)return Object(i.jsx)("h1",{children:"No Data"});var c=r.filter((function(e){return!e.disabled})).reduce((function(e,r){return Math.min(e,r.y)}),1/0),p=r.filter((function(e){return!e.disabled})).reduce((function(e,r){return Math.max(e,r.y)}),-1/0),u=t&&t>c?t:c,g=a&&a<p?a:p,f=new Map;r.forEach((function(e){f.set(e.x,e.xLabel?e.xLabel:e.x)}));var m=Array.from(f.keys()).map((function(e){return{value:e,label:f.get(e)}}));return Object(i.jsxs)(n.c,{style:{stroke:"white"},stackBy:d,yDomain:[u-1,g+1],margin:{top:10,left:30,bottom:30,right:10},children:[Object(i.jsx)(n.e,{style:{stroke:"white"}}),Object(i.jsx)(n.j,{data:r.filter((function(e){return!e.disabled})).map((function(e){return{key:e.key,x:e.x,y:e.y>=u?e.y:u,color:e.color,opacity:o?o===e.key?1:.5:1}})),colorType:"literal",cluster:d,onValueMouseOver:function(e){s(e.key)},onValueMouseOut:function(){l()}}),Object(i.jsx)(n.b,{style:{bottom:{stroke:"#161f2d",fill:"#161f2d"},left:{stroke:"#161f2d",fill:"#161f2d"},right:{stroke:"#161f2d",fill:"#161f2d"},top:{stroke:"#161f2d",fill:"#161f2d"}}}),Object(i.jsx)(n.n,{style:{stroke:"white"},orientation:"left"}),Object(i.jsx)(n.m,{style:{stroke:"white"},tickTotal:m.length>30?m.length/2:m.length,tickValues:m.length>30?m.filter((function(e,r){return r%2==0})).map((function(e){return e.value})):m.map((function(e){return e.value})),tickFormat:function(e){return m[e-1].label}})]})}}},[["Y0np",0,1,2,3,4,5]]]);