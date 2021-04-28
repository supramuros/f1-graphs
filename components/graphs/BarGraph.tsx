import { SyntheticEvent } from 'react';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries, Borders} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { BarGraphData } from '../../types/GraphTypes';
/*
*   Displays a bar chart 
*   Input data is flat across multiple series
*/

interface Props{
    data:BarGraphData[],
    minY?:number,
    maxY?:number,
    xSelected?:number,
    seriesSelected?:string,
    onSeriesHover:(key:string)=>void,
    onSeriesBlur:()=>void,
    stackBy?:string
}


export default function BarGraph({
                                        data,
                                        minY,
                                        maxY,
                                        xSelected,
                                        seriesSelected,
                                        onSeriesHover,
                                        onSeriesBlur,
                                        stackBy
                                    }:Props){

    if(!data){
        return(<h1>No Data</h1>)
    }
     /*
    const fastestLap = data.flatMap(d=>d.laps).filter(f=>f.time&&f.time>0).reduce((a,b)=>Math.min(a,b.time),Infinity);
    
    if(lapNum){
        driverLaps = data.filter(f=>f.driver.lapsCompleted>=lapNum)
                                   .flatMap(l=>(
                                       {
                                           key:l.driver.driverId,
                                           x:l.laps[lapNum].position,
                                           y:l.laps[lapNum].time,
                                           color:l.driver.constructorColor,
                                           opacity:driverHovered?driverHovered==l.driver.driverId?1:0.5:1,
                                           label:l.driver.driverCode
                                        })
                                        )
                                   .sort((a,b)=>a.x-b.x)
                                   .filter(f=>f.y<fastestLap*2);
    }else{
        driverLaps = data.filter(f=>f.driver.avgLapNetPitTime!=0)
                         .map(driver=>(
                            {
                                key:driver.driver.driverId,
                                x:driver.driver.endingPosition,
                                y:driver.driver.avgLapNetPitTime,
                                color:driver.driver.constructorColor,
                                opacity:driverHovered?driverHovered==driver.driver.driverId?1:0.5:1,
                                label:driver.driver.driverCode
                            }
                        )
                        )
                         .sort((a,b)=>a.x-b.x)
                         .filter(f=>f.y<fastestLap*2);
    }
    */

    const dataMin = data.filter(f=>!f.disabled).reduce((a,b)=>Math.min(a,b.y),Infinity);
    const dataMax = data.filter(f=>!f.disabled).reduce((a,b)=>Math.max(a,b.y),-Infinity);
    const yMin = minY&&minY>dataMin?minY:dataMin;
    const yMax = maxY&&maxY<dataMax?maxY:dataMax;
    
    const xTicksMap = new Map();
    data.forEach(v=>{
        xTicksMap.set(v.x,v.xLabel?v.xLabel:v.x);
    });
    const xAxisTicks = Array.from(xTicksMap.keys()).map(m=>({value:m,label:xTicksMap.get(m)}));

    //const xAxisTicks = data.map((d,index)=>({value:d.x, label:!d.disabled?(d.xLabel?d.xLabel:d.x.toString()):''}));
    
    return (
<FlexibleXYPlot
        style={{stroke:'white'}}
        stackBy={stackBy}
        yDomain={[yMin-1,yMax+1]}
        margin={{top: 10, left: 30, bottom: 30, right: 10}}
        >
        <HorizontalGridLines
            style={{stroke:'white'}}
        />
        <VerticalBarSeries 
            data={data.filter(f=>!f.disabled).map(d=>(
                {
                    key:d.key,
                    x:d.x,
                    y:d.y>=yMin?d.y:yMin,
                    color:d.color,
                    opacity:seriesSelected?seriesSelected===d.key?1:0.5:1
                }
            ))}
            colorType='literal'
            cluster={stackBy}
            //barWidth={0.6}
            onValueMouseOver={(value)=>{onSeriesHover(value.key)}}
            onValueMouseOut={()=>{onSeriesBlur()}}
        />
        <Borders style={{
                bottom: {stroke:'#161f2d', fill: '#161f2d'},
                left: {stroke:'#161f2d',fill: '#161f2d'},
                right: {stroke:'#161f2d',fill: '#161f2d'},
                top: {stroke:'#161f2d',fill: '#161f2d'}
        }}/>
        <YAxis
            style={{stroke:'white'}}
            orientation={'left'}
        />
        <XAxis
            style={{stroke:'white'}}
            tickTotal={xAxisTicks.length>30?xAxisTicks.length/2:xAxisTicks.length}
            tickValues={xAxisTicks.length>30
                        ?xAxisTicks.filter((f,index)=>index%2==0).map(i=>i.value)
                        :xAxisTicks.map(i=>i.value)}
            tickFormat={v=>xAxisTicks[v-1].label}
        />
    </FlexibleXYPlot>
    )
}
