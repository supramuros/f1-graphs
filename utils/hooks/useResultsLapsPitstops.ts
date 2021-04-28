import useSWR from "swr";
import { ERGAST_API } from "../common/constants";
import { fetchRaceLaps } from "../fetchers/Laps";
import { fetchPitStopTimes } from "../fetchers/PitStops";
import fetchRaceCombined from "../fetchers/RaceCombined";
import { fetchSingleRaceResults } from "../fetchers/RaceResults";

export default function useResultsLapsPitstops(season:string,round:string){
    const {data:raceData, error:raceError} = useSWR([ERGAST_API.RESULTS,season,round],
        (api,season,round) => 
        fetchSingleRaceResults(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});

    const {data:pitData, error:pitError} = useSWR((raceData&&raceData.results&&!raceError)
                                            ?[ERGAST_API.PITSTOPS,season,round]:null,
        (api,season,round) => 
        fetchPitStopTimes(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});  
    
    const {data:lapData, error:lapError} = useSWR((raceData&&raceData.results&&!raceError)
                                            ?[ERGAST_API.LAPS,season,round]:null,
        (api,season,round) => 
        fetchRaceLaps(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});
        
    const {data, error} = useSWR((raceData&&raceData.results&&!raceError&&pitData&&!pitError&&lapData&&!lapError)
                                            ?[ERGAST_API.RESULTSLAPS,season,round]:null,
        (api,season,round) => 
        fetchRaceCombined(raceData,pitData,lapData),{revalidateOnFocus:false, dedupingInterval:10000000});
    
    return {
        isLoading:!error && !data,
        error:error,
        raceDetails:data?data.race:undefined,
        driverMap:data?data.driverMap:undefined
    }
}