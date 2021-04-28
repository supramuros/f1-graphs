import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries, WhiskerSeries, MarkSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { Series, WhiskerSummaryData} from '../../types/GraphTypes';
/*
*   Displays a candlestick-like chart for every driver to compare drivers' performances
*   Graph applies to the entire race and does not have a specific lap component
*   x-axis: driver
*   y-axis: lap time
*   y-low-line: slowest lap time
*   y-high-line: fastest lap time
*   y-box: y0 = avergage lap time - sigma; y1=average lap time + sigma
*   order: static based on drivers list (end results)
*/


interface Props{
    data:WhiskerSummaryData[],
    markData?:Series[],
    seriesSelected?:string,
    onSeriesHover:(key:string)=>void,
    onSeriesBlur:()=>void,
}


export default function DriverSummaryGraph({
                                        data,
                                        markData,
                                        seriesSelected,
                                        onSeriesHover,
                                        onSeriesBlur
                                    }:Props){

    if(!data){
        return(
            <div>
                <h3>No Data</h3>
            </div>
        )
    }

    //For display purposes we invert the data so fastest lap time whisker is above the avg laptime and slowest below
    //const yMin = data.filter(f=>f.driver.avgLapTime!=0).reduce((a,b)=>Math.max(a,b.driver.slowestLapNetPitTime),-Infinity)*-1;
    //const yMax = data.filter(f=>f.driver.avgLapTime!=0).reduce((a,b)=>Math.min(a,b.driver.fastestLapTime),Infinity)*-1;
    const yMin = data.filter(f=>!f.disabled).reduce((a,b)=>Math.min(a,b.yLow),Infinity);
    const yMax = data.filter(f=>!f.disabled).reduce((a,b)=>Math.max(a,b.yHigh),-Infinity);
    //const xAxisTicks = data.filter(f=>f.driver.avgLapTime!=0).map((d,index)=>({value:index, label:d.driver.driverCode}));
    const xAxisTicks = data.map((d,index)=>({value:d.x, label:!d.disabled?(d.xLabel?d.xLabel:d.x.toString()):''}));


    return (
        <FlexibleXYPlot
             style={{stroke:'white'}}
             yDomain={[yMin-1,yMax+1]}
             margin={{top: 40, left: 40, bottom: 40, right: 40}}
        >
            <HorizontalGridLines/>
            
            <YAxis
                tickFormat={v=>-1*v}
                orientation='left'
            />
            <XAxis
                tickTotal={xAxisTicks.length}
                tickFormat={v=>xAxisTicks[v-1].label}
                orientation='top'
            />
            <XAxis
                tickTotal={xAxisTicks.length}
                tickFormat={v=>xAxisTicks[v-1].label}
                orientation='bottom'
            />
            <YAxis
                tickFormat={v=>-1*v}
                orientation='right'
            />
            <WhiskerSeries
            data={data.filter(f=>!f.disabled).map((d,index)=>(
                {
                    key:d.key,
                    x:d.x,
                    //y:-d.driver.avgLapNetPitTime + (d.driver.avgLapNetPitTime-d.driver.slowestLapNetPitTime)/2,
                    y:d.yLow+(d.yHigh-d.yLow)/2,
                    yVariance:(d.yHigh - d.yLow),
                    xVariance:0,
                    color:d.color,
                    opacity:seriesSelected?seriesSelected===d.key?1:0.5:1
                }))}
                colorType='literal'
                strokeWidth={2}
                />
            <VerticalBarSeries
                data={data.filter(f=>!f.disabled).map((d,index)=>(
                    {key:d.key, 
                    x:d.x, 
                    y0:d.yBoxLow,
                    y:d.yBoxHigh,
                    color:d.color,
                    opacity:seriesSelected?seriesSelected===d.key?1:0.5:1
                    }))}
                colorType='literal'
                //barWidth={0.6}
                onValueMouseOver={(value)=>{onSeriesHover(value.key)}}
                onValueMouseOut={()=>{onSeriesBlur()}}
                />
            <MarkSeries
                style={{stroke:'white'}}
                data={markData.filter(f=>!f.disabled).map(d=>({
                    key:d.key,
                    x:d.x,
                    y:d.y,
                    color:d.color,
                    opacity:seriesSelected?seriesSelected===d.key?1:0.5:1
                }))}
                colorType='literal'
                onValueMouseOver={(datapoint, event)=>onSeriesHover(datapoint.key)}
                onValueMouseOut={(datapoint,event)=>onSeriesBlur()}
            />
         </FlexibleXYPlot>
    )
}
