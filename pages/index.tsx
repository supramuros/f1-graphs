import { useState } from 'react';
import useSWR from 'swr';
import Loading from '../components/common/Loading/Loading';
import StandingsListPosition from '../components/DriverList/StandingsListPosition';
import styles from '../styles/Home.module.css';
import { AppState } from '../types/AppTypes';
import { ERGAST_API } from '../utils/common/constants';
import { fetchSingleRaceResults } from '../utils/fetchers/RaceResults';
import useSeasonStandings from '../utils/hooks/useSeasonStandings';
import Position from './position';
//Toggle Driver points/standings and Constructor points/standing
//Loading... see if we can make a 5 red lights graphic
export default function Home(props:AppState) {
  const [standings,setStandings]=useState('Driver');
  const {season,round,isLoading,isError,error,drivers,constructors} = useSeasonStandings(props.season, props.round);
  const {data:raceData, error:raceError} = useSWR(props.round?[ERGAST_API.RESULTS,season,round]:null,
    (api,season,round) => 
    fetchSingleRaceResults(season,round),{revalidateOnFocus:false, dedupingInterval:10000000});


  if(!props.round||!props.driverList || !drivers || !constructors || !raceData||!raceData.results ){
    return <Loading/>
  }
  return (
    <div className={styles.container}>
      <div className='standings-header'>
        <h1>{standings} Standings</h1>
        <div className='radioContainer'>
          <input className='standings-radio' type='radio' 
                              id='Driver' 
                              key='Driver' 
                              name='Driver' 
                              value='Driver'  
                              checked={standings==='Driver'}
                              onChange={(e)=>setStandings('Driver')}/>
          <label className='standings-radio-label' htmlFor='Driver'>Driver</label>
          <input className='standings-radio' type='radio' 
                              id='Constructor' 
                              key='Constructor' 
                              name='Constructor' 
                              value='Constructor'  
                              checked={standings==='Constructor'}
                              onChange={(e)=>setStandings('Constructor')}/>
          <label className='standings-radio-label' htmlFor='Constructor'>Constructor</label>
        </div>
      </div>
      
      <div className='standings-table'>
      {standings==='Driver'?
      <table>
        <thead>
          <tr>
            <th className='rank-header'>Rank</th>
            <th className='code-header'></th>
            <th>Driver</th>
            <th className='numeric-header'>Race Points</th>
            <th className='numeric-header'>Total</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(d=>(
            <tr key={d.driver.driverId}>
              <td className='positionContainer'>
                <StandingsListPosition
                  position={d.position}
                  color={d.driver.constructorColor}
                />
              </td>
              <td className='driverCodeContainer'>
                <span>{d.driver.driverCode}</span>
              </td>
              <td className='detailsRow'>
                <div className='detailsContainer'>
                <span>{d.driver.driverName}</span>
                <span>{d.driver.constructorName}</span>
                </div>
              </td>
              <td className='numericContainer'>
                <span className='numeric'>
                  {raceData.results.find(f=>f.driver.driverId===d.driver.driverId)
                    ?raceData.results.find(f=>f.driver.driverId===d.driver.driverId).points
                    :'N/A'}
                </span>
              </td>
              <td className='numericContainer'>
                <span className='numeric'>{d.points}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      :null}
      {standings==='Constructor'?
      <table>
        <thead>
          <tr>
            <th className='rank-header'>Rank</th>
            <th>Constructor</th>
            <th className='numeric-header'>Race Points</th>
            <th className='numeric-header'>Total</th>
          </tr>
        </thead>
        <tbody>
          {constructors.map(c=>(
            <tr key={c.constructor.constructorId}>
              <td className='positionContainer'>
                <StandingsListPosition
                    position={c.position}
                    color={c.constructor.constructorColor}
                  />
              </td>
              <td className='detailsRow'>
                <div className='detailsContainer'>
                  <span>{c.constructor.constructorName}</span>
                </div>
              </td>
              <td className='numericContainer'>
              <span className='numeric'>{raceData.results.reduce((a,b)=>a+(b.driver.constructorId===c.constructor.constructorId?b.points:0),0)}</span>
              </td>
              <td className='numericContainer'> 
                <span className='numeric'>{c.points}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      :null}
    </div>
      <style jsx>{`
        .standings-header{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          width:80%;
          align-items:center;
        }
        .standings-table{
          width:80%;
        }
        table{
          border-spacing:0;
          border-collapse:collapse;
          border-color:white;
          margin:0;
          padding:0;
          border:0;
          width:100%;
          font-size:.75rem;
        }  
        thead{
          background-color:white;
          color:black;
          border-radius:10px;
        }
        th{
          text-align:start;
        }
        .numeric-header{
          text-align:end;
          width:10%;
        }
        .rank-header{
          text-align:center;
          width:5%;
        }
        .code-header{
          text-align:start;
          width:5%;
        }
        th{
          color:black;
        }
        tr{
          background-color:transparent;
          color:rgba(200,200,200,1);
        }
        tr:hover {
          color:white;
          font-weight:bold;
        }
        .positionContainer{
            background-color:black;
            color:white;
            display:flex;
            align-items:center;
            justify-content:space-around;
        }
        .position {
            background-color:white;
            color:black;
            margin:0.1rem;
            font-size: .75rem;
            height: 1rem;
            width: 1rem;
            border-radius:.25rem;
            text-align:center;
            position:relative;
        }
        .position::after {
          content:'';
          width:.3rem;
          height:100%;
          left:1.5rem;
          background-color:blue;
          margin-right:.5rem;
          position:absolute;
       }
        .driverCodeContainer{
          background-color:black;
        }
        .detailsRow{
          background-color:rgb(32, 32, 32);
          height:100%;
          border:none;
          border-style:hidden;
          padding:0;
          margin:0;
        }
        .detailsContainer{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          width:100%;
        }
        .numericContainer{
          background-color:rgba(32, 32, 32,.75)
        }
        .numeric {
          width:100%;
          display:flex;
          justify-content:flex-end;
          
        }
        .standings-radio {
          display:none;
        }
        .radioContainer {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            margin:0.25rem 0 0.25rem 0;
            
        }
        .radioContainer label{
            margin:0 1rem 0 1rem;
            padding:0 1rem 0 1rem;
            border:solid 2px rgb(32, 32, 32);
            background-color:transparent;
            opacity:0.5;
            height:2rem;
        }
        input:checked + label{
            background-color:rgb(32, 32, 32);
            color:white;
            opacity:1;
        }
      `}</style>
    </div>
  )
}
