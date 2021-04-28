import swrError from '../common/swrError';
import {URL_BASE,CONSTRUCTOR_COLOR_MAP} from '../common/constants';
import { Constructor, ConstructorStanding, DriverStanding } from '../../types/StandingsTypes';
import { Driver } from '../../types/RaceResult';
/*
Function: fetchDriverStandings
@Param: season: year
@Param: round?: race in season 1,2,3,etc.; if omitted the API returns the latest standings for that season
The API does not require either param but we do not want to pull that much data.
URL: http://ergast.com/api/f1/<season>/<round>/driverStandings
*/
export async function fetchDriverStandings(season:string, round?:string):Promise<DriverStanding[]>{
    const URL_API = 'driverStandings.json?limit=100';
    //build the url
    let url = URL_BASE;
    url += '/'+season+'/';
    url +=round?round+'/'+URL_API:URL_API;
    //fetch results
    const res = await fetch(url);
    let data = undefined;
    if (!res.ok) {
        const error = new swrError('An error occurred while fetching the Driver Standings data.');
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }
    data = await res.json();
    if(!data.MRData.StandingsTable.StandingsLists&&!data.MRData.StandingsTable.StandingsLists[0]){
        return undefined;
    }
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(r=>{
        return deserializeDriverStanding(r);
    })  

}

export function deserializeDriverStanding(data):DriverStanding{
    return ({
        driver:deserializeDriverStandingsDriver(data.Driver,data.Constructors),
        position:data.position,
        points:data.points?data.points:0,
        wins:data.wins?data.wins:0
    });
}
function deserializeDriverStandingsDriver(data,dataConstructor):Driver{
    const constructor:Constructor = dataConstructor[0]?deserializeConstructor(dataConstructor[0]):undefined;
    return ({
        driverId:data.driverId,
        driverCode:data.code,
        driverNumber:data.permanentNumber,
        driverName:data.givenName+' '+data.familyName,
        driverUrl:data.url,
        driverNationality:data.nationality,
        constructorId:constructor?constructor.constructorId:undefined,
        constructorName:constructor?constructor.constructorName:undefined,
        constructorUrl:constructor?constructor.constructorUrl:undefined,
        constructorNationality:constructor?constructor.constructorNationality:undefined,
        constructorColor:constructor?constructor.constructorColor:undefined
    })
}

/*
Function: fetchConstructorStandings
@Param: season: year
@Param: round?: race in season 1,2,3,etc.; if omitted the API returns the latest standings for that season
The API does not require either param but we do not want to pull that much data.
URL: http://ergast.com/api/f1/<season>/<round>/constructorStandings
*/
export async function fetchConstructorStandings(season:string, round?:string):Promise<ConstructorStanding[]>{
    const URL_API = 'constructorStandings.json?limit=100';
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
    if(!data.MRData.StandingsTable.StandingsLists&&!data.MRData.StandingsTable.StandingsLists[0]){
        return undefined;
    }
    return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(r=>{
        return deserializeConstructorStanding(r);
    })  

}

export function deserializeConstructorStanding(data):ConstructorStanding{
    return ({
        constructor:deserializeConstructor(data.Constructor),
        position:data.position,
        points:data.points?data.points:0,
        wins:data.wins?data.wins:0
    });
}

export function deserializeConstructor(data):Constructor{
    return ({
        constructorId:data.constructorId,
        constructorName:data.name,
        constructorUrl:data.url,
        constructorNationality:data.nationality,
        constructorColor:CONSTRUCTOR_COLOR_MAP.get(data.constructorId)
    });
}

/*API Format:
{
  MRData: {
    xmlns: string,
    series: string,
    url: string,
    limit: number,
    offset: number,
    total: number,
    StandingsTable: {
      season: string,
      StandingsList: [
        {
          season: string,
          round: string,
          DriverStandings:[
            {
              driverId:string,
              ...
              Constructors:[
                {
                  constructorId:string,
                  ...
                }
              ]
            }
          ]
          
        },
    */