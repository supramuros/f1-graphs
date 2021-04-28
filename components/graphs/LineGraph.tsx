import React from 'react';
import { Hint, FlexibleXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines,LineSeries, Borders} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { GraphData } from '../../types/GraphTypes';
/*
*   Displays a line chart for all laps
*   x-axis: lap
*   y-axis: position
*   left axis: starting order
*   right axis: finishing order
*/


interface Props{
    data:GraphData[],
    minY?:number,
    maxY?:number,
    yOrientation?:'normal'|'flipped',
    xSelected?:number,
    seriesSelected?:string,
    onSeriesHover:(key:string)=>void,
    onSeriesBlur:()=>void,
    hint?:React.ReactNode
}

export function LineGraph(
    {
        data,
        minY,
        maxY,
        yOrientation,
        xSelected,
        seriesSelected,
        onSeriesHover,
        onSeriesBlur,
        hint
    }:Props){

    if(!data){
        return(
            <div>
                <h3>No Data</h3>
            </div>
        )
    }    
    
    /*
    const vornoiNodes = data.flatMap(d=>d.series)
                                .map(i=>({x:i.x, y:i.y, key:i.key}));
    */
    const dataMin = data.filter(f=>!f.disabled).reduce((a,b)=>Math.min(a,
        b.series.reduce((c,d)=>Math.min(c,d.y),Infinity))
        ,Infinity);
    const dataMax = data.filter(f=>!f.disabled).reduce((a,b)=>Math.max(a,
        b.series.reduce((c,d)=>Math.max(c,d.y),-Infinity))
        ,-Infinity);
    let yMin = undefined;
    let yMax = undefined;
    

    if(yOrientation==='flipped'){
        yMax = minY&&minY>dataMin?minY:dataMin;
        yMin = maxY&&maxY<dataMax?maxY:dataMax;
    }
    else {
        yMin = minY&&minY>dataMin?minY:dataMin;
        yMax = maxY&&maxY<dataMax?maxY:dataMax;
    }
    
    const xTicksArray = Array.from(new Set(data
            .flatMap(x=>x.series
            .map(v=>({value:v.x,label:v.xLabel?v.xLabel:v.x})))));
    /*const yTicksArray = Array.from(new Set(data
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
    
    return (
        <FlexibleXYPlot
        margin={{top: 30, left: 50, bottom: 30, right: 50}}
        yDomain={[yMin-1,yMax+1]}
        >
            
            <HorizontalGridLines
                style={{stroke:'white'}}
            />
            {data.filter(f=>!f.disabled).map(d=>(
            <LineSeries
                key={d.seriesKey}
                id={d.seriesKey}
                //curve={'curveMonotoneX'}
                color={d.color}
                strokeWidth={d.seriesKey=== seriesSelected?3:1} 
                size={1}
                opacity={seriesSelected
                    ?d.seriesKey === seriesSelected?1:0.5
                    :1}
                data={d.series}
                onSeriesMouseOver={(e) => {
                    onSeriesHover(d.seriesKey);
                    }
                }
                onSeriesMouseOut={(e) => {
                    onSeriesBlur();
                    }
                }
                //onNearestX={(value)=>console.log(value)}
            />
            ))
            }
            <Borders style={{
                bottom: {fill: '#161f2d'},
                left: {fill: '#161f2d'},
                right: {fill: '#161f2d'},
                top: {fill: '#161f2d'}
            }}/>
            <XAxis
                style={{stroke:'white'}}
                orientation='bottom'
            />
            <XAxis
                style={{stroke:'white'}}
                orientation='top'
            />
            <YAxis
                orientation={'left'}
                style={{stroke:'white'}}
                //tickTotal={data.length}
                //tickValues={driverPositionOrder.sort((a,b)=>a.startOrder-b.startOrder).map(l=>l.startOrder*-1)}
                //tickFormat={v=>{return driverPositionOrder.sort((a,b)=>a.startOrder-b.startOrder)[(-1*v)-1].code;}
                //        }
            />
            <YAxis
                orientation={'right'}
                style={{stroke:'white'}}
                tickFormat={v=>v}
                //tickTotal={data.length}
                //tickValues={driverPositionOrder.sort((a,b)=>a.endOrder-b.endOrder).map(l=>l.startOrder*-1)}
                //tickFormat={v=>{return driverPositionOrder.sort((a,b)=>a.endOrder-b.endOrder)[(-1*v)-1].code;}
                //        }
            />
            
            {hint?hint:null}
        <style jsx>{`
        .list-container{
            list-style:none;
            padding-inline-start:0;
            margin:0;
            padding:15px 0px 18px 0px;
            margin-block-start:0;
            margin-block-end:0;
            display:grid;
            grid-template-columns: auto 0.75fr auto;
            height:100%;
            line-height:100%;
            font-size:0.75rem;
            justify-items:stretch;
            background-color:black;
            background-clip: content-box;
        }`}
        </style>    
        </FlexibleXYPlot>
    )
}
