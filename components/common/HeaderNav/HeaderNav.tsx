import Link from "next/link";
import useSWR from 'swr';
import {ERGAST_API} from '../../../utils/common/constants';
import {fetchSeasonSchedule} from '../../../utils/fetchers/SeasonSchedule';
import {fetchSingleRaceResults} from '../../../utils/fetchers/RaceResults';
import { fetchPitStopTimes } from "../../../utils/fetchers/PitStops";
import { fetchRaceLaps } from "../../../utils/fetchers/Laps";
import fetchRaceCombined from "../../../utils/fetchers/RaceCombined";
import useResultsLapsPitstops from "../../../utils/hooks/useResultsLapsPitstops";
import { useRouter } from "next/dist/client/router";


export default function HeaderNav(){
    const season='2021';
    const round='2';
    const router = useRouter();
    const path = router.pathname;
    /*const {data, error} = useSWR([ERGAST_API.SCHEDULE,'2021'],
        (api,season)=>fetchSeasonSchedule(season),{revalidateOnFocus:false, dedupingInterval:10000000}
    );*/

    /*
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
                                            ?[ERGAST_API.RESULTSLAPS,'2021','2']:null,
        (api,season,round) => 
        fetchRaceCombined(raceData,pitData,lapData),{revalidateOnFocus:false, dedupingInterval:10000000});
    */
   //const hookdata = useResultsLapsPitstops('2021','2');

    
    return(
        <nav className='subnav'>
            <ul className='nav-list'>
                <li className={router.pathname === '/'?'nav-active':'nav-item'}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={router.pathname === '/race-review'?'nav-active':'nav-item'}>
                    <Link href="/race-review">
                        <a>Race Review</a>
                    </Link>
                </li>
                <li className={router.pathname === '/position'?'nav-active':'nav-item'}>
                    <Link href="/position">
                        <a>Position Graph</a>
                    </Link>
                </li>
                <li className={router.pathname === '/driver-summary'?'nav-active':'nav-item'}>
                    <Link href="/driver-summary">
                        <a>Driver Summary</a>
                    </Link>
                </li>
                <li className={router.pathname === '/driver-detail'?'nav-active':'nav-item'}>
                    <Link href="/driver-detail">
                        <a>Driver Detail</a>
                    </Link>
                </li>
                <li className={router.pathname === '/lap-times'?'nav-active':'nav-item'}>
                    <Link href="/lap-times">
                        <a>Lap Times</a>
                    </Link>
                </li>
                <li className={router.pathname === '/relative-position'?'nav-active':'nav-item'}>
                    <Link href="/relative-position">
                        <a>Relative Position</a>
                    </Link>
                </li>
        </ul>
        <style jsx>{`
            .subnav{
                display:flex;
                flex-direction:row;
                width:100%;
                justify-content:center;
                background-color:white;
                color:black;
            }
            .nav-list{
                display:flex;
                flex-direction:row;
                list-style-type: none;
                margin-block-start: 0;
                margin-block-end: 0;
                margin-inline-start: 0;
                margin-inline-end: 0;
                padding-inline-start: 0;
                justify-content:space-around;
                margin-top:0;
                margin-bottom:0;
                width:100%;
            }
            .nav-item {
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:center;
                margin:0 1rem 0 1rem;
                padding:0 1rem 0 1rem;
                height:2rem;              
            }
            .nav-active {
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:center;
                margin:0 1rem 0 1rem;
                padding:0 1rem 0 1rem;
                height:2rem;
            }
            .nav-active a{
                border-bottom:solid 2px rgb(32, 32, 32);
                text-transform:none;
            }
            .nav-item:hover{
                background-color: rgb(32, 32, 32);
                color:white;
            }
            .nav-item:focus{
                outline:none;
                border-bottom:solid 2px rgb(32, 32, 32);
            }
            .nav-item a:focus-visible{
                outline:none;
                border-bottom:solid 2px rgb(32, 32, 32);
            }
            a{
                outline:none;
            }
        `}</style>
        </nav>


    )
}