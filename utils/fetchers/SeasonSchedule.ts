import swrError from '../common/swrError';
import {URL_BASE} from '../common/constants';
import {Race} from '../../types/Race';

/*
Function: fetchSeasonSchedule
URL: http://ergast.com/api/f1/<seasons>.json
@Param: Season; if not included then all seasons are returned, but subject to server return limits
Return: Race array
*/
export async function fetchSeasonSchedule(season:string):Promise<Race[]>{
    const res = await fetch(URL_BASE+'/'+season+'.json');
    let data = undefined;
    let error = undefined;
    if (!res.ok) {
        const error = new swrError('An error occurred while fetching the Season Schedule data.');
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }
    data = await res.json();
    return !error && data 
            ? data.MRData.RaceTable.Races.map(r=> deserializeRace(r))
                                         .sort((a,b)=>a.round-b.round)
            :undefined;
}
/*API Return format:
{
  MRData: {
    xmlns: string,
    series: string,
    url: string,
    limit: number,
    offset: number,
    total: number,
    RaceTable: {
      season: string,
      Races: [
        {
          season: string,
          round: string,
          url: string,
          raceName: string,
          date: string,
          time: string,
          Circuit: {
            circuitId: string,
            url: string,
            circuitName: string,
            Location: {
              lat: number,
              long: number,
              locality: string,
              country: string
            }
          }
        },
*/
export function deserializeRace(data):Race{
    return {
        season:data.season,
        round:data.round,
        raceName:data.raceName,
        circuitId:data.Circuit.circuitId,
        circuitName:data.Circuit.circuitName,
        raceDate:new Date(''+data.date+'T'+data.time),
        numLaps: data.Results?data.Results.reduce((a,b)=>Math.max(a,parseInt(b.laps)),0):undefined
    };
}

export function deserializeRaceFull(data):Race{
    return {
        season:data.season,
        round:data.round,
        raceName:data.raceName,
        circuitId:data.Circuit.circuitId,
        circuitName:data.Circuit.circuitName,
        raceDate:new Date(data.date+'T'+data.time),
        circuitUrl:data.Circuit.url,
        lat:data.Circuit.Location.lat,
        long:data.Circuit.Location.long,
        locality:data.Circuit.Location.locality,
        country:data.Circuit.Location.country
    };    
}