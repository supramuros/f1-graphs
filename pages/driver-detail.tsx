import RangeSlider from '../components/common/RangeSlider/RangeSlider';
import DriverList from '../components/DriverList/DriverList';
import DriverListItem from '../components/DriverList/DriverListItem';
import DriverSummaryCard from '../components/DriverSummaryCard/DriverSummaryCard';
import SummaryCardSection from '../components/DriverSummaryCard/SummaryCardSection';
import BarGraph from '../components/graphs/BarGraph';
import ScatterGraph from '../components/graphs/ScatterGraph';
import { AppState } from '../types/AppTypes';
import useResultsLapsPitstops from '../utils/hooks/useResultsLapsPitstops';
import useHistogram from '../utils/hooks/useHistogram';
import Loading from '../components/common/Loading/Loading';

/*Detail for a single driver at a time
*/
export default function DriverDetail(props:AppState){
    const {isLoading, error, raceDetails, driverMap} = useResultsLapsPitstops(props.season, props.round);
    const hoveredDriver = props.driver&&props.driverList&&props.driverList.find(d=>d.driverId===props.driver && d.enabled)
                          ?true
                          :false;
    const histogram =useHistogram(props.season, props.round,props.driver,
                        props.driver?driverMap.get(props.driver).laps:undefined,
                        props.driver?driverMap.get(props.driver).driver.constructorColor:undefined);

    if(isLoading||!props.driverList){
        return <Loading/>
    } 
    const lapsArray = [];
    for(let i = 0; i<=raceDetails.numLaps; i++){
        lapsArray.push({value:i,label:i});
    }
    const singleLapData = props.driverList.map(d=>
        {return driverMap.get(d.driverId).laps
            .filter((ff,index,arr)=>
                props.lap&&props.lap>0?ff.lapNum===props.lap
                :(index===arr.length-1&&ff.lapNum>=raceDetails.numLaps-1))
            .map(l=>(
                {
                    driverId:l.driverId,
                    disabled:!d.enabled,
                    color:driverMap.get(d.driverId).driver.constructorColor,
                    lapsCompleted: driverMap.get(d.driverId).lapsCompleted,
                    lapNum:l.lapNum,
                    gap:l.gap,
                    positionGap:l.positionGap,
                    position:l.position,
                    time:l.time,
                    timeDsp:l.timeDsp,
                    totalTime:l.totalTime,
                    pitStopTime:l.pitStopTime,
                    timeNetPitStop:l.timeNetPitStop
                }))
            
        }    
        ).flat()
        .sort((a,b)=>a.position-b.position);
        
    const driverListDisplay = props.driverList.map(d=>({
        driverId:d.driverId,
        enabled:d.enabled,
        driverCode:driverMap.get(d.driverId),
        constructorColor:driverMap.get(d.driverId).driver.constructorColor,
        time:props.lap&&props.lap>0&&props.lap<raceDetails.numLaps
            ?driverMap.get(d.driverId).lapsCompleted>=props.lap?driverMap.get(d.driverId).laps[props.lap].time:'OUT'
            :driverMap.get(d.driverId).raceTime,
        timeDsp:props.lap&&props.lap>0&&props.lap<raceDetails.numLaps
            ?driverMap.get(d.driverId).lapsCompleted>=props.lap?driverMap.get(d.driverId).laps[props.lap].timeDsp:'OUT'
            :driverMap.get(d.driverId).raceTimeDsp,
        gap:props.lap&&props.lap>0&&props.lap<raceDetails.numLaps
            ?driverMap.get(d.driverId).lapsCompleted>=props.lap?driverMap.get(d.driverId).laps[props.lap].gap:'OUT'
            :driverMap.get(d.driverId).raceTimeDsp,
        positionGap:props.lap&&props.lap>0&&props.lap<raceDetails.numLaps
            ?driverMap.get(d.driverId).lapsCompleted>=props.lap?driverMap.get(d.driverId).laps[props.lap].positionGap:'OUT'
            :driverMap.get(d.driverId).raceTimeDsp,
        position:props.lap&&props.lap>0&&props.lap<raceDetails.numLaps
            ?driverMap.get(d.driverId).lapsCompleted>=props.lap?driverMap.get(d.driverId).laps[props.lap].position:driverMap.get(d.driverId).endingPosition
            :driverMap.get(d.driverId).endingPosition,
    })).sort((a,b)=>a.position-b.position);    

    return (
        <div className='grid-container'>
            <div className='left-column'>  
                <DriverList 
                //style={{height:'100%', gridTemplateColumns:'auto 0.75fr auto'}}
                style={{padding:0}}
                    title={!props.lap||props.lap===0||props.lap>=raceDetails.numLaps
                        ?<h1>Final Results</h1>
                    :<><h1>LAP</h1><h2>{props.lap}/{raceDetails.numLaps}</h2></>}
                >
                {driverListDisplay.map(d=>{
                                    const driverData = driverMap.get(d.driverId);
                                    return (<DriverListItem key={d.driverId} 
                                    id={d.driverId}
                                    textCenter={driverData.driver.driverCode}
                                    textRight={props.lap&&props.lap>0&&props.lap<raceDetails.numLaps
                                        ?d.gap===0?'Interval':typeof d.gap==='number'?d.gap.toFixed(3).toString():d.gap.toString()
                                        :d.timeDsp
                                    }
                                    orderNumber={d.position}
                                    color={driverData.driver.constructorColor} 
                                    checked={d.enabled}
                                    style={hoveredDriver?d.driverId===props.driver?{opacity:1}:{opacity:0.5}:null}
                                    onChange={(e)=> props.setDriverList(props.driverList.map(l=>({...l,enabled:d.driverId===l.driverId?!l.enabled:l.enabled})))}
                                    onMouseEnter={(e)=>d.enabled?props.setDriver(d.driverId):null}
                                    onMouseLeave={(e)=>props.setDriver(null)}/>
                                    )
                                })}
                </DriverList>
            </div>
            <div className='main-top'>
            <RangeSlider
                        options={lapsArray}
                        value={props.lap}
                        onChange={props.setLap}
                    />  
            </div>
            <div id='main-graph-title'>
                {props.driver?'LAP TIMES FOR '+driverMap.get(props.driver).driver.driverCode:'LAP TIMES'}
            </div>
            <div className='main'>
            {props.driver?
                <ScatterGraph
                    data={props.driverList.filter(f=>f.driverId===props.driver).map(d=>(
                        {
                            seriesKey:d.driverId,
                            series:driverMap.get(d.driverId).laps.filter(f=>f.lapNum>0).map(l=>({
                                key:l.driverId,
                                x:l.lapNum,
                                xLabel:l.lapNum.toString(),
                                y:l.time,
                                color:driverMap.get(d.driverId).driver.constructorColor,
                                opacity:props.driver?props.driver===d.driverId?1:0.5:1,
                                disabled:!d.enabled
                            })),
                            color:driverMap.get(d.driverId).driver.constructorColor,
                            disabled:!d.enabled
                        }
                    ))}
                    minY={driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime-5}
                    maxY={driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime*2}
                    xSelected={props.lap}
                    seriesSelected={props.driver}
                    onSeriesHover={(d)=>props.setDriver(d)}
                    onSeriesBlur={()=>props.setDriver(null)}
                />
            :<ScatterGraph
            data={props.driverList.map(d=>(
                {
                    seriesKey:d.driverId,
                    series:driverMap.get(d.driverId).laps.map(l=>({
                        key:l.driverId,
                        x:driverMap.get(d.driverId).endingPosition,
                        xLabel:driverMap.get(d.driverId).driver.driverCode,
                        y:l.time,
                        color:driverMap.get(d.driverId).driver.constructorColor,
                        opacity:props.driver?props.driver===d.driverId?1:0.5:1,
                        disabled:!d.enabled
                    })),
                    color:driverMap.get(d.driverId).driver.constructorColor,
                    disabled:!d.enabled
                }
            ))}
            minY={driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime-5}
            maxY={driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime*2}
            xSelected={props.lap}
            seriesSelected={props.driver}
            onSeriesHover={(d)=>props.setDriver(null)}
            onSeriesBlur={()=>props.setDriver(null)}
            />
            }
            </div>
            <div className='right-column'>
            <div className='right-top-column'>
                <DriverSummaryCard
                        data={props.driverList.find(d=>d.enabled&&d.driverId===props.driver)
                                ?driverMap.get(props.driver)
                                :null}
                    >
                        <SummaryCardSection 
                            key='fastest'
                            title='Fastest Lap'
                            rows={[
                                {label:'Rank',value:props.driver?driverMap.get(props.driver).raceStats.fastestLapRank:null},
                                {label:'Lap', value:props.driver?driverMap.get(props.driver).raceStats.fastestLapNumber:null},
                                {label:'Time', value:props.driver?driverMap.get(props.driver).raceStats.fastestLapTime:null},
                                {label: 'Speed', value:props.driver?driverMap.get(props.driver).raceStats.fastestLapSpeed
                                                +' '+driverMap.get(props.driver).raceStats.fastestLapUnits:null}
                            ]}
                        />
                        <SummaryCardSection
                            key='slowest'
                            title='Slowest Lap'
                            rows={[
                                {label:'Lap', value:props.driver?driverMap.get(props.driver).raceStats.slowestLapNetPit:null},
                                {label:'Time',value:props.driver?driverMap.get(props.driver).raceStats.slowestLapNetPitTime.toFixed(3):null}
                            ]}
                        />
                        <SummaryCardSection
                            key='pace'
                            title='Lap Pace'
                            rows={props.lap&&props.lap>0&&props.lap<raceDetails.numLaps?
                                [
                                    {label:'Lap '+props.lap, value:props.driver&&driverMap.get(props.driver).lapsCompleted>=props.lap?driverMap.get(props.driver).laps[props.lap].time.toFixed(3):null}
                                ]
                                :
                                [
                                    {label:'Avg', value:props.driver?driverMap.get(props.driver).raceStats.avgLapNetPitTime.toFixed(3):null},
                                    {label:'Std Dev',value:props.driver?Math.sqrt(driverMap.get(props.driver).raceStats.varianceNetPitTime).toFixed(3):null}
                                ]
                            }
                        />
                    </DriverSummaryCard>
                </div>
                <div id='right-bottom-graph-title'>
                    {histogram?'LAP TIME HISTOGRAM':''}
                </div>
                <div className='right-bottom-column'>
                    {histogram?
                        <BarGraph
                            data={histogram}
                            onSeriesHover={(d)=>props.setDriver(d)}
                            onSeriesBlur={()=>props.setDriver(null)}
                        />
                        
                    :null}
                </div>
            </div>
        <style jsx>{`
        .grid-container{
            display:grid;
            grid-template-columns:auto 2fr 1fr;
            grid-template-rows:1fr;
            height:100%;
            min-height:500px;
        }
        .left-column{
            grid-column:1;
            grid-row:1/3;
            background-color:transparent;
        }
        .right-column{
            grid-column:3;
            grid-row:1/3;
            background-color:transparent;
            display:grid;
            grid-template-rows:1fr 1fr;
        }
        .main-top {
            grid-column:2;
            grid-row:1;
            min-height:2rem;
            margin-left:35px;
            margin-right:70px;
            background-color: transparent;
            padding-top:15px;
        }
        #main-graph-title { 
            position: fixed; 
            left:15%;
            top:25%;
            font-size:3rem;
            opacity:.15;
            z-index:2;
        }
        .main{
            grid-column:2;
            grid-row:2;
            background-color:#161f2d;
            background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1)), linear-gradient(45deg, #161f2d 25%, transparent 25%, transparent 75%, #161f2d 75%, #161f2d), linear-gradient(45deg, #161f2d 25%, transparent 25%, transparent 75%, #161f2d 75%, #161f2d), linear-gradient(to bottom, rgb(8, 8, 8), rgb(32, 32, 32));
            background-size: 100% 100%, 10px 10px, 10px 10px, 10px 5px;
            background-position: 0px 0px, 0px 0px, 5px 5px, 0px 0px;
            min-height:500px;
            height:100%;
        }
        #right-bottom-graph-title { 
            position: fixed; 
            left:75%;
            top:58%;
            font-size:1rem;
            opacity:.15;
            z-index:2;
        }
        .right-top-column{
            grid-row:1;
            background-color:transparent;
        }
        .right-bottom-column{
            grid-row:2;
            background-color:transparent;
        }
        h1{
            margin:0;
            padding:0;
            font-size:1rem;
        }
        h2{
            margin:0;
            padding:0;
            font-size:0.75rem;
        }

        `}

        </style>
        </div>
    )
}