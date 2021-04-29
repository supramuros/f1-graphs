import swrError from '../common/swrError';
import {URL_BASE,CONSTRUCTOR_COLOR_MAP, DEFAULT_CONSTRUCTOR_COLOR} from '../common/constants';
import {deserializeRace} from './SeasonSchedule';
import {timeStringToSeconds} from '../common/util';
import { Race } from '../../types/Race';
import { Driver, DriverRaceResult, DriverRaceStats, RaceResult } from '../../types/RaceResult';

/*
Function: fetchRaceResults
@Param: season: year
@Param: round?: race in season 1,2,3,etc.; if omitted the API returns all races up to the limit
The API does not require either param but we do not want to pull that much data.
URL: http://ergast.com/api/f1/<season>/<round>/results
*/
export async function fetchSingleRaceResults(season:string, round:string):Promise<RaceResult>{
    const results = await fetchSeasonRaceResults(season, round);
    return results[0];
}

export async function fetchSeasonRaceResults(season:string, round?:string):Promise<RaceResult[]>{
    const URL_API = 'results.json?limit=1000';
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
    return data.MRData.RaceTable.Races.map(r=>{
        const race = deserializeRace(r);
        const results = r?r.Results.map(result=>deserializeResult(result)):[];
        
        return ({
            race:race,
            results:setStartingOrder(results).sort((a,b)=>a.endingPosition-b.endingPosition)
        })
    })  

}
//Pit Lane starts are coming across in the API as starting position 0
//Thus initial order is incorrect and there may be gaps
//For example, driver qualifies in position 4 and has an issue and starts from pit
//startingPosition will be 1,2,3,5...
//This function re-sorts and adds a new field called starting order
export function setStartingOrder(data){
    const results = [...data]
    results.sort((a,b)=>(a.startingPosition!=0?a.startingPosition:100)-(b.startingPosition!=0?b.startingPosition:100));
    results.forEach((i,index)=>{
                i.startingOrder = index+1;
            });
    return results;
}

export function deserializeResult(data):DriverRaceResult{
    return({
        driver:deserializeDriver(data),
        ...deserializeDriverResult(data),
        raceStats:deserializeRaceStats(data)
    });
}
export function deserializeDriverResult(data){
    return ({
        startingPosition:parseInt(data.grid),
        endingPosition:parseInt(data.position),
        points:parseInt(data.points),
        lapsCompleted:parseInt(data.laps),
        raceTime:data.Time?parseInt(data.Time.millis):null,
        raceTimeDsp:data.Time?data.Time.time:data.status,
        endingStatus:data.status,
    });
}
export function deserializeRaceStats(data):DriverRaceStats{
    return ({
        fastestLapRank:data.FastestLap?data.FastestLap.rank:-1,
        fastestLapNumber:data.FastestLap?parseInt(data.FastestLap.lap):-1,
        fastestLapTime:data.FastestLap?timeStringToSeconds(data.FastestLap.Time.time):null,
        fastestLapTimeDsp:data.FastestLap?data.FastestLap.Time.time:'N/A',
        fastestLapSpeed:data.FastestLap?Math.round(parseFloat(data.FastestLap.AverageSpeed.speed)*1000)/1000:0,
        fastestLapUnits:data.FastestLap?data.FastestLap.AverageSpeed.units:null
    })
}

export function deserializeDriver(data):Driver{
    return ({
        driverId:data.Driver.driverId,
        driverCode:data.Driver.code,
        driverNumber:data.Driver.permanentNumber?data.Driver.permanentNumber:data.number,
        driverName:data.Driver.givenName+' '+data.Driver.familyName,
        constructorId:data.Constructor.constructorId,
        constructorName:data.Constructor.name,
        constructorColor:CONSTRUCTOR_COLOR_MAP.get(data.Constructor.constructorId)
            ?CONSTRUCTOR_COLOR_MAP.get(data.Constructor.constructorId)
            :DEFAULT_CONSTRUCTOR_COLOR
    })
}
export function deserializeDriverFull(data):Driver{
    return ({
        driverId:data.Driver.driverId,
        driverCode:data.Driver.code,
        driverNumber:data.Driver.permanentNumber?data.Driver.permanentNumber:data.number,
        driverName:data.Driver.givenName+' '+data.Driver.familyName,
        driverUrl:data.Driver.url,
        driverNationality:data.Driver.nationality,
        constructorId:data.Constructor.constructorId,
        constructorName:data.Constructor.name,
        constructorUrl:data.Constructor.url,
        constructorNationality:data.Constructor.nationality,
        constructorColor:CONSTRUCTOR_COLOR_MAP.get(data.Constructor.constructorId)
            ?CONSTRUCTOR_COLOR_MAP.get(data.Constructor.constructorId)
            :DEFAULT_CONSTRUCTOR_COLOR
    })
}