import Loading from '../components/common/Loading/Loading';
import RangeSlider from '../components/common/RangeSlider/RangeSlider';
import DriverList from '../components/DriverList/DriverList';
import DriverListItem from '../components/DriverList/DriverListItem';
import DriverSummaryCard from '../components/DriverSummaryCard/DriverSummaryCard';
import SummaryCardSection from '../components/DriverSummaryCard/SummaryCardSection';
import BarGraph from '../components/graphs/BarGraph';
import DriverSummaryGraph from '../components/graphs/DriverSummaryGraph';
import { AppState } from '../types/AppTypes';
import useResultsLapsPitstops from '../utils/hooks/useResultsLapsPitstops';
export default function DriverSummary(props:AppState){
    const {isLoading, error, raceDetails, driverMap} = useResultsLapsPitstops(props.season, props.round);
    const hoveredDriver = props.driver&&props.driverList&&props.driverList.find(d=>d.driverId===props.driver && d.enabled)
                          ?true
                          :false;

    if(isLoading||!props.driverList||!raceDetails){
        return <Loading/>
    } 
    const lapsArray = [];
    for(let i = 0; i<=raceDetails.numLaps; i++){
        lapsArray.push({value:i,label:i});
    }

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
                {props.driverList&&driverMap?props.driverList.map(c=>c)
                                .sort((a,b)=>driverMap.get(a.driverId).endingPosition - driverMap.get(b.driverId).endingPosition)
                                .map((d,index)=> {
                                    const driverData = driverMap.get(d.driverId);
                                    return (<DriverListItem key={d.driverId} 
                                    id={d.driverId}
                                    textCenter={driverData.driver.driverCode}
                                    textRight={driverData.raceTimeDsp}
                                    orderNumber={index+1}
                                    color={driverData.driver.constructorColor} 
                                    checked={d.enabled}
                                    style={hoveredDriver?d.driverId===props.driver?{opacity:1}:{opacity:0.5}:null}
                                    onChange={(e)=> props.setDriverList(props.driverList.map(l=>({...l,enabled:d.driverId===l.driverId?!l.enabled:l.enabled})))}
                                    onMouseEnter={(e)=>d.enabled?props.setDriver(d.driverId):null}
                                    onMouseLeave={(e)=>props.setDriver(null)}/>
                                    )
                                }):null}
                </DriverList>
            </div>
            <div className='main-top'>
            <RangeSlider
                        options={lapsArray}
                        value={props.lap}
                        onChange={props.setLap}
                    />  
            </div>
            <div className='main'>
                                  
                    <DriverSummaryGraph
                        data={props.driverList.map(d=>({
                            key:d.driverId,
                            disabled:!d.enabled,
                            x:driverMap.get(d.driverId).endingPosition,
                            xLabel:driverMap.get(d.driverId).driver.driverCode,
                            yLow:driverMap.get(d.driverId).raceStats.slowestLapNetPitTime?-1*driverMap.get(d.driverId).raceStats.slowestLapNetPitTime:-1*driverMap.get(d.driverId).raceStats.slowestLapTime,
                            yHigh:-1*driverMap.get(d.driverId).raceStats.fastestLapTime,
                            yBoxLow:-1*(driverMap.get(d.driverId).raceStats.avgLapNetPitTime+Math.sqrt(driverMap.get(d.driverId).raceStats.varianceNetPitTime*2)/5),
                            yBoxHigh:-1*(driverMap.get(d.driverId).raceStats.avgLapNetPitTime-Math.sqrt(driverMap.get(d.driverId).raceStats.varianceNetPitTime*2)/5),
                            color:driverMap.get(d.driverId).driver.constructorColor
                        })).filter(f=>f.yBoxLow<0)}
                        markData={props.driverList.map(d=>({
                            key:d.driverId,
                            x:driverMap.get(d.driverId).endingPosition,
                            y:props.lap&&props.lap>0
                                ?driverMap.get(d.driverId).lapsCompleted>=props.lap
                                    ?driverMap.get(d.driverId).laps[props.lap].time*-1:0
                                :driverMap.get(d.driverId).raceStats.avgLapNetPitTime*-1,
                            xLabel:driverMap.get(d.driverId).driver.driverCode,
                            color:driverMap.get(d.driverId).driver.constructorColor,
                            disabled:!d.enabled
                        })).filter(f=>f.y<0)}
                        seriesSelected={props.driver}
                        onSeriesHover={(d)=>props.setDriver(d)}
                        onSeriesBlur={()=>props.setDriver(null)}
                    />
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
                                {label:'Lap', value:props.driver?driverMap.get(props.driver).raceStats.slowestLapNetPit?driverMap.get(props.driver).raceStats.slowestLapNetPit:driverMap.get(props.driver).raceStats.slowestLapNumber:null},
                                {label:'Time',value:props.driver?driverMap.get(props.driver).raceStats.slowestLapNetPitTime===0?driverMap.get(props.driver).raceStats.slowestLapTime.toFixed(3):driverMap.get(props.driver).raceStats.slowestLapNetPitTime.toFixed(3):null}
                            ]}
                        />
                        <SummaryCardSection
                            key='racepace'
                            title='Race Pace'
                            rows={[
                                    {label:'Avg', value:props.driver?driverMap.get(props.driver).raceStats.avgLapNetPitTime.toFixed(3):null},
                                    {label:'Std Dev',value:props.driver?Math.sqrt(driverMap.get(props.driver).raceStats.varianceNetPitTime).toFixed(3):null}
                                ]}
                                
                        />
                        {props.lap&&props.lap>0&&props.lap<raceDetails.numLaps?
                        <SummaryCardSection
                            key='pace'
                            title='Lap Pace'
                            rows={[
                                    {label:'Lap '+props.lap, value:props.driver&&driverMap.get(props.driver).lapsCompleted>=props.lap?driverMap.get(props.driver).laps[props.lap].time.toFixed(3):null}
                                ]}
                        />
                        :null}
                    </DriverSummaryCard>
                </div>
                <div id='right-bottom-graph-title'>
                    {props.lap&&props.lap>0&&props.lap<raceDetails.numLaps?'LAP TIME':'AVG LAP TIME'}
                </div>
                <div className='right-bottom-column'>
                    <BarGraph
                        data={props.driverList.map(d=>({
                            key:d.driverId,
                            x:driverMap.get(d.driverId).endingPosition,
                            y:props.lap&&props.lap>0
                                ?driverMap.get(d.driverId).lapsCompleted>=props.lap
                                    ?driverMap.get(d.driverId).laps[props.lap].time:0
                                :driverMap.get(d.driverId).raceStats.avgLapNetPitTime,
                            xLabel:driverMap.get(d.driverId).driver.driverCode,
                            color:driverMap.get(d.driverId).driver.constructorColor,
                            disabled:props.lap&&props.lap>0
                                    ?driverMap.get(d.driverId).lapsCompleted>=props.lap
                                        ?!d.enabled
                                        :true
                                    :!d.enabled
                        }))}
                        minY={driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime-3}
                        maxY={driverMap.get(props.driverList[0].driverId).raceStats.fastestLapTime*1.5}
                        xSelected={props.lap}
                        seriesSelected={props.driver}
                        onSeriesHover={(d)=>props.setDriver(d)}
                        onSeriesBlur={()=>props.setDriver(null)}
                    />
                </div>
            </div>
        <style jsx>{`
        .grid-container{
            display:grid;
            grid-template-columns:auto 2fr 1fr;
            grid-template-rows:auto 1fr;
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
            margin-right:50px;
            background-color: transparent;
            padding-top:15px;
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
            background:transparent;
        }
        .right-bottom-column{
            grid-row:2;
            background-color:#161f2d;
            background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1)), linear-gradient(45deg, #161f2d 25%, transparent 25%, transparent 75%, #161f2d 75%, #161f2d), linear-gradient(45deg, #161f2d 25%, transparent 25%, transparent 75%, #161f2d 75%, #161f2d), linear-gradient(to bottom, rgb(8, 8, 8), rgb(32, 32, 32));
            background-size: 100% 100%, 10px 10px, 10px 10px, 10px 5px;
            background-position: 0px 0px, 0px 0px, 5px 5px, 0px 0px;
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