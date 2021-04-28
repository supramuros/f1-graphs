import useSWR from "swr";
import { ERGAST_API } from "../common/constants";
import { fetchConstructorStandings, fetchDriverStandings } from "../fetchers/Standings";

export default function useSeasonStandings(season:string,round:string){
    const {data:driverStandings,error:driverError} = useSWR([ERGAST_API.DRIVERSTANDINGS,season,round],
        (api,season,round) => 
        fetchDriverStandings(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});
    const {data:constructorStandings,error:constructorError} = useSWR([ERGAST_API.CONSTRUCTORSTANDINGS,season,round],
        (api,season,round) => 
        fetchConstructorStandings(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});
    
    return ({
        season:season,
        round:round?round:'last',
        isLoading:!driverError && !driverError && !driverStandings && !constructorStandings,
        isError: driverError || constructorError,
        error: [driverError,constructorError],
        drivers:driverStandings,
        constructors:constructorStandings
    })
}
