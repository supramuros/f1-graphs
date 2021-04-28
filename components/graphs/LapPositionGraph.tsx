import React from 'react';
import { Hint, FlexibleXYPlot, XAxis, YAxis, VerticalGridLines, LineMarkSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { GraphData } from '../../types/GraphTypes';
/*
*   Displays a linemark chart for all laps
*   x-axis: lap
*   y-axis: position
*   left axis: starting order
*   right axis: finishing order
*/


interface Props{
    data:GraphData[],
    xSelected?:number,
    seriesSelected?:string,
    onSeriesHover:(key:string)=>void,
    onSeriesBlur:()=>void,
    hint?:React.ReactNode
}

export function LapPositionGraph(
    {
        data,
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
    
    const xTicksArray = Array.from(new Set(data
            .flatMap(x=>x.series
            .map(v=>({value:v.x,label:v.xLabel?v.xLabel:v.x})))));
    const yTicksArray = Array.from(new Set(data
            .flatMap(y=>y.series
            .map(v=>({value:v.y,label:v.yLabel?v.yLabel:v.y})))));
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
        margin={{top: 30, left: 10, bottom: 30, right: 10}}
        animation
        >
            <XAxis
                style={{stroke:'white'}}
                orientation='bottom'
            />
            <XAxis
                style={{stroke:'white'}}
                orientation='top'
            />
            <VerticalGridLines 
                style={{stroke:'white'}}
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
                //tickTotal={data.length}
                //tickValues={driverPositionOrder.sort((a,b)=>a.endOrder-b.endOrder).map(l=>l.startOrder*-1)}
                //tickFormat={v=>{return driverPositionOrder.sort((a,b)=>a.endOrder-b.endOrder)[(-1*v)-1].code;}
                //        }
            />
            {data.filter(f=>!f.disabled).map(d=>(
            <LineMarkSeries
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
//TODO: Checked vs unchecked driver has what meaning for this graph? change line opacity only? remove series?
/*Vornoi Hover
<Voronoi
                nodes={vornoiNodes}
                onHover={node => {console.log(node); onDriverHover(node.key);}}
                onBlur={() => {onDriverBlur();}}
                polygonStyle={{stroke: 'rgba(250, 250, 250, .2)'}}
            />
*/