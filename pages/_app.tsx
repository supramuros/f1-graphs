import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Header from '../components/common/Header/Header';
import Layout from '../components/common/Layout/Layout';
import '../styles/globals.css';
import { ERGAST_API } from '../utils/common/constants';
import { fetchSingleRaceResults } from '../utils/fetchers/RaceResults';

function App({ Component, pageProps }: AppProps) {
  const [season,setSeason]=useState<string>(new Date().getFullYear().toString());
  const [round,setRound]=useState<string>(null);
  const [lap,setLap]=useState<number>(null);
  const [driver, setDriver]=useState<number>(null);
  const [driverList, setDriverList]=useState<{driverId:string, enabled:boolean}[]>([]);
  //Query API for raceData for setting the driver list initially for a round
  const {data:raceData, error:raceError} = useSWR(round?[ERGAST_API.RESULTS,season,round]:null,
    (api,season,round) => 
    fetchSingleRaceResults(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});
  //Initialize the drivers list when round changes
  useEffect(()=>{
    if(!driverList && round){
      setDriverList(raceData?raceData.results.map(r=>({driverId:r.driver.driverId, enabled:true})):null);
    }
  },[round,raceData]);
  
  return (
    <Layout title='F1 Graphs' 
      header={<Header
                season={season}
                round={round}
                onSeasonChange={(s:string)=>{setSeason(s); setRound(null); setDriverList(null);}}
                onRoundChange={(r:string)=>{setRound(r); setDriverList(null);}}
              />}
                >
      <Component 
        {...pageProps}
        season={season}
        round={round}
        lap={lap}
        setLap={setLap}
        driver={driver}
        setDriver={setDriver}
        driverList={driverList}
        setDriverList={setDriverList} />
    </Layout>)
}

export default App;