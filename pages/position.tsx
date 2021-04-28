import { AppState } from '../types/AppTypes';
import useResultsLapsPitstops from '../utils/hooks/useResultsLapsPitstops';
import DriverList from '../components/DriverList/DriverList';
import DriverListItem from '../components/DriverList/DriverListItem';
import RangeSlider from '../components/common/RangeSlider/RangeSlider';
import { LapPositionGraph } from '../components/graphs/LapPositionGraph';
import { Hint} from 'react-vis';
import Loading from '../components/common/Loading/Loading';


export default function Position(props:AppState){
    const {isLoading, error, raceDetails, driverMap} = useResultsLapsPitstops(props.season, props.round);
    const hoveredDriver = props.driver&&props.driverList&&props.driverList.find(d=>d.driverId===props.driver && d.enabled)
                          ?true
                          :false;

    if(isLoading||!props.driverList){
        return <Loading/>
    } 
    const lapsArray = [];
    for(let i = 0; i<=raceDetails.numLaps; i++){
        lapsArray.push({value:i,label:i});
    }
    function sortDriverList(a:{driverId:string,enabled:boolean},b:{driverId:string,enabled:boolean}){
        if(props.lap!==undefined && props.lap>0 && props.lap<raceDetails.numLaps){
            const aDriver = driverMap.get(a.driverId);
            const bDriver = driverMap.get(b.driverId);
            let aCompare = aDriver.lapsCompleted>=props.lap?aDriver.laps[props.lap].position:1000-aDriver.lapsCompleted;
            let bCompare = bDriver.lapsCompleted>=props.lap?bDriver.laps[props.lap].position:1000-bDriver.lapsCompleted;
            return aCompare - bCompare;
        }
        else{
            return driverMap.get(a.driverId).endingPosition - driverMap.get(b.driverId).endingPosition;
        }
        
    }
    function getDriverTimeDisplay(driverId:string){
        const driverData = driverMap.get(driverId);
        if(props.lap!==undefined && props.lap>0 && props.lap<raceDetails.numLaps){
            if(driverData.lapsCompleted>=props.lap)
                return driverData.laps[props.lap].gap===0?
                'Leader'
                :'+'+driverData.laps[props.lap].gap.toFixed(3);
            else {
                return 'OUT';
            }
        }
        return driverData.raceTimeDsp;
    }
    return (
        <div className='grid-container'>
            <div className='left-column'>  
                <DriverList 
                style={{height:'100%', gridTemplateColumns:'auto 0.75fr auto'}}
                >
                {props.driverList&&driverMap?props.driverList.map(c=>c)
                                .sort((a,b)=>driverMap.get(a.driverId).startingOrder - driverMap.get(b.driverId).startingOrder)
                                .map((d,index)=> {
                                    const driverData = driverMap.get(d.driverId);
                                    return (<DriverListItem key={d.driverId+'_start'} 
                                    id={d.driverId}
                                    textCenter={driverData.driver.driverCode}
                                    textRight=''
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
            <div id='main-graph-title'>
                POSITION BY LAP
            </div>
            <div className='main'>
                <LapPositionGraph
                    data={props.driverList&&driverMap?props.driverList
                        .map(d=>(
                        {seriesKey:d.driverId,
                        disabled:!d.enabled,
                        color:driverMap.get(d.driverId).driver.constructorColor,
                        series:driverMap.get(d.driverId).laps.map(l=>(
                            {
                                x:l.lapNum,
                                xLabel:l.lapNum.toString(),
                                y:-1*l.position,
                                yLabel:(-1*l.position).toString(),
                                key:l.driverId
                            })
                        )}
                        ))
                    :null}
                    xSelected={props.lap}
                    seriesSelected={props.driver}
                    onSeriesHover={(d)=>props.setDriver(d)}
                    onSeriesBlur={()=>props.setDriver(null)}
                    hint={props.lap&&(props.lap>0&&props.lap<raceDetails.numLaps)
                        ?(<Hint
                            value={{x:props.lap,y:0}}
                            align={{vertical: 'bottom', horizontal:props.lap<raceDetails.numLaps/2?'right':'left'}}
                            style={{height:'100%', display:'flex', paddingTop:'15px'}}
                        >
                            <DriverList 
                                style={{height:'100%', 
                                gridTemplateColumns:'auto 0.75fr auto',
                                padding:'20px 0px 0px 0px',
                                borderLeft:props.lap<raceDetails.numLaps/2?'solid 3px white':null,
                                borderRight:props.lap>=raceDetails.numLaps/2?'solid 3px white':null
                            }}
                            >
                                {props.driverList.map(c=>c)
                                .sort(sortDriverList)
                                .map((d,index)=> {
                                    const driverData = driverMap.get(d.driverId);
                                    return (<DriverListItem key={d.driverId+'_start'} 
                                    id={d.driverId}
                                    textCenter={driverData.driver.driverCode}
                                    textRight={getDriverTimeDisplay(d.driverId)}
                                    orderNumber={index+1}
                                    color={driverData.driver.constructorColor} 
                                    checked={d.enabled}
                                    style={hoveredDriver?d.driverId===props.driver?{opacity:1}:{opacity:0.5}:null}
                                    onChange={(e)=> props.setDriverList(props.driverList.map(l=>({...l,enabled:d.driverId===l.driverId?!l.enabled:l.enabled})))}
                                    onMouseEnter={(e)=>d.enabled?props.setDriver(d.driverId):null}
                                    onMouseLeave={(e)=>props.setDriver(null)}/>
                                    )
                                })}
                            </DriverList>
                        </Hint>)
                        :null}
                />
            </div>
            
            <div className='right-column'>
            <DriverList 
                style={{height:'100%', gridTemplateColumns:'auto 0.75fr auto'}}
                >
                {props.driverList&&driverMap?props.driverList.map(c=>c)
                                .sort((a,b)=>driverMap.get(a.driverId).endingPosition - driverMap.get(b.driverId).endingPosition)
                                .map((d,index)=> {
                                    const driverData = driverMap.get(d.driverId);
                                    return (<DriverListItem key={d.driverId+'_start'} 
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
        <style jsx>{`
            .grid-container{
                display:grid;
                grid-template-columns:auto 1fr auto;
                grid-template-rows: auto 1fr;
                height:100%;
                min-height:500px;
            }
            .left-column{
                grid-column:1;
                grid-row:2;
                background-color:transparent;
            }
            .right-column{
                grid-column:3;
                grid-row:2;
                background-color:transparent;
            }
            .main-top {
                grid-column:2;
                grid-row:1;
                min-height:2rem;
                margin-left:0;
                margin-right:30px;
                background-color: transparent;
                padding-top:10px;
                padding-bottom:10px;
            }
            .main{
                grid-column:2;
                grid-row:2;
                background-color:#161f2d;
                background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1)), linear-gradient(45deg, #161f2d 25%, transparent 25%, transparent 75%, #161f2d 75%, #161f2d), linear-gradient(45deg, #161f2d 25%, transparent 25%, transparent 75%, #161f2d 75%, #161f2d), linear-gradient(to bottom, rgb(8, 8, 8), rgb(32, 32, 32));
                background-size: 100% 100%, 10px 10px, 10px 10px, 10px 5px;
                background-position: 0px 0px, 0px 0px, 5px 5px, 0px 0px;
                min-height:500px;
                position:relative;
            }
            #main-graph-title { 
                position: fixed; 
                left:25%;
                top:50%;
                font-size:5rem;
                opacity:.15;
                z-index:2;
            }
            .lap-slider{
                
            }
            .lap-tip{
                z-index:2;
                top:0;
                height:100%;
                position:absolute;
            }
            .lap-tip-left {
                left:${(100*(props.lap/(raceDetails.numLaps)))+'%'};
                border-left:solid 2px white;
             }
             .lap-tip-right {
                 right: ${(100*((raceDetails.numLaps-props.lap)/(raceDetails.numLaps)))+'%'};
                 border-right:solid 2px white;
             }
            .hint-container{
                list-style:none;
                padding-inline-start:0;
                margin:0;
                padding:17px 0px 17px 0px;
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
            }
                   `}
        </style>
        </div>
    )
}