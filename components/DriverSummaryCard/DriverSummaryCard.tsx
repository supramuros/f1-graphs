import React from 'react';
import { DriverRaceResult } from '../../types/RaceResult';
/*
*   Displays a card for the driver showing key race stats
*/


interface Props{
    data:DriverRaceResult,
    children?:React.ReactNode[]|React.ReactNode
}


export default function DriverSummaryCard({data,children}:Props){

    if(!data){
        return(
            <div className='card-container'>
            <style jsx>{`
                .card-container{
                    display:grid;
                    grid-template-rows:1fr 1fr;
                    grid-template-columns:1fr 1fr;
                    border:solid 2px transparent;
                    border-radius:10px;
                    height:100%;
                    width:100%;
                }
            `}

            </style>
        </div>
        );
    }
        const driverData = data;
        return(
            <div className='card-container'>
                <div className='card-header'>
                    <h1>{driverData.driver.driverName}</h1>
                    <h2>{driverData.driver.constructorName}</h2>
                </div>
                <div className='card-content'>
                    {children}
                </div>
            <style jsx>{`
                .card-container{
                    display:grid;
                    grid-template-rows:2.6rem 1fr;
                    border:solid 2px white;
                    border-radius:10px;
                    height:100%;
                    width:100%;
                    
                }
                .card-header{
                    grid-row:1;
                }
                .card-content{
                    grid-row:2;
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    grid-template-rows:auto;
                    gap: 0.5rem 1rem;
                    align-content:center;
                    justify-content:space-evenly;
                    width:90%;
                    height:100%;
                    margin:15px;
                }
                h1{
                    font-size:1.25rem;
                    margin:0.15rem;
                }
                h2{
                    font-size:1rem;
                    margin:0.15rem;
                }
                h3{
                    font-size:0.75rem;
                    border-bottom:solid 1px white;
                }
                h4{
                    font-size:0.75rem;
                    border-bottom:solid 1px white;
                }
            `}

            </style>
            </div>
        )

 
}