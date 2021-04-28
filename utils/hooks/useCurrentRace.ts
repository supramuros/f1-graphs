import useSWR from "swr";
import { ERGAST_API } from "../common/constants";
import { fetchSeasonSchedule } from "../fetchers/SeasonSchedule";

export default function useCurrentRace(season:string,round:string){
    const {data:seasonSchedule, error} = useSWR([ERGAST_API.SCHEDULE,season],
        (api,season)=>fetchSeasonSchedule(season),{revalidateOnFocus:false, dedupingInterval:10000000}
    );

    if(seasonSchedule && (!round || round === 'last')){
        let i = 1;
        while(i<seasonSchedule.length && seasonSchedule[i-1].raceDate<new Date()){
            i++;
        }
        return (i-1).toString();
    }
    return round;
}