import swrError from '../common/swrError';
import {URL_BASE} from '../common/constants';
import {deserializeRace} from './SeasonSchedule';
import {timeStringToSeconds} from '../common/util';
import { Lap, RaceLaps } from '../../types/Lap';
/*
Function: fetchRaceLaps
@Param: season: year
@Param: round: race in season 1,2,3,etc.
URL: http://ergast.com/api/f1/<season>/<round>/laps.json?limit=2000
Return: LapResults type {raceDetails: <details of race>, lapResults[]: <array of driver results for each driver>}
*/
export async function fetchRaceLaps(season:string, round?:string):Promise<RaceLaps>{
    const URL_API = 'laps.json?limit=2000';
    //build the url
    let url = URL_BASE;
    url += '/'+season+'/';
    url +=round?round+'/'+URL_API:URL_API;
    //fetch results
    const res = await fetch(url);
    let data = undefined;
    if (!res.ok) {
        const error = new swrError('An error occurred while fetching the Race Results data.');
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }
    data = await res.json();
    const raceLaps = data.MRData.RaceTable.Races.map(r=>{
        const race = deserializeRace(r);
        const laps = r?deserializeLaps(r.Laps):undefined;
        
        return ({
            race:race,
            laps:laps
        })
    })  
    return raceLaps[0];
}

function deserializeLaps(data){
    const laps = [...data].sort((a,b)=>Number(a.number)-Number(b.number));
    const driverRunningLaptime = new Map<string,number>();
    let leaderTotalTime = 0;
    const returnArray = laps.flatMap(lap=>{
        const timings = lap.Timings.sort((a,b)=>Number(a.position)-Number(b.position));
        const laps =  timings.map((i,index,arr) => {
            let driverTotalTime = driverRunningLaptime.get(i.driverId);
            //Update driver's running time or set to first lap time if not yet set
            driverTotalTime?driverTotalTime+=timeStringToSeconds(i.time):driverTotalTime=timeStringToSeconds(i.time);
            driverTotalTime = Math.round(driverTotalTime*1000)/1000;
            //Get the driver in the position ahead of the current record's cumulative time
            //so we can also calculate gap to position ahead while we're doing this looping
            const prevDriverRunningLapTime = index===0?driverTotalTime:driverRunningLaptime.get(arr[index-1].driverId);
            //set the Map value for next lap
            driverRunningLaptime.set(i.driverId, driverTotalTime);
            
            if(Number(i.position)===1){
                leaderTotalTime = driverTotalTime;
            }
            const returnLap:Lap = {
                lapNum: Number(lap.number),
                position: Number(i.position),
                driverId: i.driverId,
                timeDsp: i.time,
                time: timeStringToSeconds(i.time),
                totalTime: driverTotalTime,
                gap: Math.round((driverTotalTime - leaderTotalTime)*1000)/1000,
                positionGap: index===0?0:Math.round((driverTotalTime-prevDriverRunningLapTime)*1000)/1000,
                pitStopTime:undefined,
                timeNetPitStop:undefined
            }
            return returnLap;
            });
        return(laps);
        });

        
    return returnArray;
}
