import { useEffect } from "react";
import useSWR from "swr";
import { ERGAST_API } from "../../../utils/common/constants";
import { fetchSeasonSchedule } from "../../../utils/fetchers/SeasonSchedule";
import HeaderNav from "../HeaderNav/HeaderNav";
import PodiumDisplay from "../../PodiumDisplay/PodiumDisplay";
import SelectInput from "../SelectInput/SelectInput";

type Props={
    season:string,
    round:string,
    onSeasonChange:(season:string)=>void,
    onRoundChange:(round:string)=>void,
}

export default function Header(props:Props){
    //Build array of seasons from 1950-present
    const seasons:string[] = [];
    const initialSeason = '1950';
    const currentYear = new Date().getFullYear().toString();
    for(let i = parseInt(currentYear); i>=parseInt(initialSeason); i--){
        seasons.push(i.toString());
    }
    //Query API for the schedule for the season; serves as input list for the Round select input list
    const {data:seasonSchedule, error} = useSWR([ERGAST_API.SCHEDULE,props.season],
        (api,season)=>fetchSeasonSchedule(season),{revalidateOnFocus:false, dedupingInterval:10000000}
    );
    
    //set round to last round of the season when season changes
    useEffect(()=>{
        if(seasonSchedule && (!props.round || props.round === 'last')){
            let i = 1;
            while(i<seasonSchedule.length+1 && seasonSchedule[i-1].raceDate<new Date()){
                i++;
            }
            props.onRoundChange((i-1).toString());
        }
    },[seasonSchedule,props.season]);
   
    
    return (
        <div className='header'>
            <div className='header-main'>
                <div className='header-left'>
                    <SelectInput
                    label='Season'
                    value={props.season}
                    style={{fontSize:'2rem'}}
                    optionList={seasons.map(s=>({value:s, displayValue:s}))}
                    onChange={(e)=>props.onSeasonChange((e.target as HTMLInputElement).value)}
                    />
                    
                </div>
                <div className='header-middle'>
                    <PodiumDisplay
                        season={props.season}
                        round={props.round}
                    />
                </div>
                   
                <div className='header-right'>
                    <SelectInput
                    label='Race'
                    value={props.round?props.round:'last'}
                    optionList={seasonSchedule?seasonSchedule.map(r=>({value:r.round, displayValue:r.round+'-'+r.raceName}))
                                            :[{value:'last', displayValue:'Loading...'}]
                    }
                    onChange={(e)=>props.onRoundChange((e.target as HTMLInputElement).value)}
                    />
                </div>
                
                
            </div>
            <div className='header-nav'>
                <HeaderNav/>
            </div>
            <style jsx>{`
                        .header{
                            display:grid;
                            grid-template-rows:auto auto;
                            grid-auto-columns;
                        }
                        .header-main {
                            grid-row:1;
                            display:grid;
                            grid-template-columns:1fr 1.5fr 1fr;
                            margin:0;
                            padding:0;
                            min-height:3em;
                        }
                        .header-left {
                            grid-column:1;
                            display:flex;
                        }
                        .header-middle{
                            grid-column:2;
                        }
                        .header-right {
                            grid-column:3;
                            display:flex;
                            justify-content:space-evenly;
                        }
                        .header-nav{
                            grid-row:2;
                        }
                        svg{
                            height:75px;
                            fill:white;
                            stroke:white;
                            stroke-width:0.5rem;
                        }
                        `}
            </style>
        </div>
    )
}