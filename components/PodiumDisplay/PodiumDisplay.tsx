import useSWR from "swr";
import { ERGAST_API } from "../../utils/common/constants";
import { fetchSingleRaceResults } from "../../utils/fetchers/RaceResults";
import { fetchSeasonSchedule } from "../../utils/fetchers/SeasonSchedule";

interface Props{
    season:string;
    round:string;
}

export default function PodiumDisplay(props:Props){
    const {data:seasonSchedule, error} = useSWR([ERGAST_API.SCHEDULE,props.season],
        (api,season)=>fetchSeasonSchedule(season),{revalidateOnFocus:false, dedupingInterval:10000000}
    );

    const {data:raceData, error:raceError} = useSWR((props.round&&!(props.round==='last'))
                                            ?[ERGAST_API.RESULTS,props.season,props.round]:null,
        (api,season,round) => 
        fetchSingleRaceResults(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});

    if(!props.round||props.round==='last'){
        return(
            <></>
        )
    }
        
    if(!raceData){
        return (
            <div>
                <h1>Race Date</h1>
                <h2>{seasonSchedule[parseInt(props.round)-1].raceDate.toLocaleString()}</h2>
                <style jsx>{`
                    div{
                        display:flex;
                        flex-direction:column;
                        min-width:15em;
                    }
                    h1 {
                        text-align:center;
                        padding:0;
                        margin:0;
                        font-size:1em;
                    }
                    h2 {
                        text-align:center;
                        padding:0;
                        margin:.25em 0 .25em 0;
                        font-size:.75em;
                        height:2em;
                    }
                `}</style>
            </div>
        )
    }
    if(raceData&&!raceData.results){
        return (
            <div>
                <h2>Race Date:{seasonSchedule[parseInt(props.round)-1].raceDate.toLocaleString()}</h2>
            </div>
        )
    }
    return (
        <div className='podium'>
                <div className='second'>
                    <h1>{raceData.results[1].driver.driverCode}</h1>
                    <h2>{raceData.results[1].endingPosition}</h2>
                </div>
                <div className='first'>
                    <h1>{raceData.results[0].driver.driverCode}</h1>
                    <h2>{raceData.results[0].endingPosition}</h2>
                </div>
                <div className='third'>
                    <h1>{raceData.results[2].driver.driverCode}</h1>
                    <h2>{raceData.results[2].endingPosition}</h2>
                </div>
                <style jsx>{`
                        .podium {
                            display:grid;
                            grid-template-columns:1fr 1fr 1fr;
                            align-items:end;
                        }
                        h1 {
                            text-align:center;
                            padding:0;
                            margin:0;
                            font-size:1em;
                        }
                        h2 {
                            text-align:center;
                            padding:0;
                            margin:.25em 0 .25em 0;
                            font-size:.75em;
                        }
                        .first {
                            min-width:5em;
                        }
                        .second {
                            min-width:5em;
                        }
                        .third {
                            min-width:5em;
                        }
                        .first > h2{
                            border-top:solid 3px white;
                            border-left:solid 3px white;
                            border-right:solid 3px white;
                            height:2em;
                            text-align:center;
                        }
                        .second > h2{
                            border-top:solid 3px white;
                            border-left:solid 3px white;
                            height:1.5em;
                            text-align:center;
                        }
                        .third > h2{
                            border-top:solid 3px white;
                            border-right:solid 3px white;
                            height:1.25em;
                            text-align:center;
                        }
                        .loading {
                            height:2em;
                        }
                        
                        `}
            </style>
        </div>
    )
}