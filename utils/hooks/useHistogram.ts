import useSWR from "swr";
import { Series } from "../../types/GraphTypes";
import { Lap } from "../../types/Lap";

export default function useCurrentRace(season:string, round:string, key:string, laps:Lap[], color:string){
    //using useSWR so that it caches the result for us
    const {data, error} = useSWR([season,round,key],
        (season,round,key)=>buildHistogram(key,laps,color),{revalidateOnFocus:false, dedupingInterval:10000000}
    );
    return data;
}

async function buildHistogram(key:string,laps:Lap[],color:string):Promise<Series[]>{
    if(!laps||!key){
        return undefined;
    }
    const fastestLap:number = laps.filter(f=>f.time&&f.time>0).reduce((a,b)=>Math.min(a,b.time),Infinity);
    const driverLaps:Lap[] = laps.filter(n=>n.lapNum>0)
                                .sort((a,b)=>a.time-b.time)
                                .filter(l=>l.time<fastestLap*1.5);
    const timeMin = driverLaps.reduce((a,b)=>Math.min(a,b.time),Infinity);
    const timeMax = driverLaps.reduce((a,b)=>Math.max(a,b.time),-Infinity);

    const bucketSize = (timeMax - timeMin)/50;

    const buckets = [];
    const bucketData = [];
    for(let i = timeMin-.001; i<=timeMax; i+=bucketSize){
        buckets.push(i);
        bucketData.push(driverLaps.filter(f=>f.time>i&&f.time<=i+bucketSize));
    }
    const graphData:Series[] = bucketData.flatMap((i,index)=>(
        {
            key:key, 
            x:index+1,
            xLabel:buckets[index].toString(),
            y:i.length,
            color:color
        }
    ));
    return graphData;
}
