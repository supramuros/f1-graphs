import swrError from '../common/swrError';
import {URL_BASE} from '../common/constants';
import {deserializeRace} from './SeasonSchedule';
import {timeStringToSeconds} from '../common/util';
import {PitStop, RacePitStops} from '../../types/PitStop';

/*
Function: fetchPitStopTimes
@Param:season:year
@Param:round:race in season 1,2,3, etc.
URL: http://ergast.com/api/f1/<season>/<round>/pitstops.json?limit=100
*/
export async function fetchPitStopTimes(season, round):Promise<RacePitStops>{
    const URL_API = 'pitstops.json?limit=100';
    //build the url
    let url = URL_BASE;
    url += '/'+season+'/'+round+'/'+URL_API;

    const res = await fetch(url);
    let data = undefined;
    if (!res.ok) {
        const error = new swrError('An error occurred while fetching the Pitstop data.');
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }
    data = await res.json();

    const racePitStops = data.MRData.RaceTable.Races.map(r=>{
        const race = deserializeRace(r);
        const pitStops = r?r.PitStops.map(pit=>deserializePitStop(pit)):[];
        pitStops.sort((a,b)=>a.driverId.localeCompare(b.driverId)||a.stop-b.stop);
        return ({
            race:race,
            pitStops:pitStops
        })
    })
    
    return racePitStops[0];
    
}


function deserializePitStop(data):PitStop{
    return ({
        driverId:data.driverId,
        lapNum:parseInt(data.lap),
        stop:parseInt(data.stop),
        time:timeStringToSeconds(data.time),
        duration: timeStringToSeconds(data.duration)
    })
}