import { Lap, RaceLaps } from "../../types/Lap";
import { RacePitStops } from "../../types/PitStop";
import { DriverRaceResult, RaceDriverMap, RaceResult } from "../../types/RaceResult";

/*
*Function: Calls each of the 3 fetchers necessary to combine all API calls for a single race
*@Param: season: year
*@Param: round: race in season 1,2,3,etc.
*Intention is for this to be called via useSWR hook; Allows us to take advantage of the caching
*that the hook does automatically.
*Return: {race:Race, data:Map<driverId, Driver>}
*/

export default function fetchRaceCombined(raceData:RaceResult,lapData:RaceLaps,pitData?:RacePitStops,):RaceDriverMap{    
    const driverMap = new Map<string,DriverRaceResult>();    
    if(!raceData){
        return {race:undefined, driverMap:undefined};
    }
    if(lapData){
        raceData.results.forEach(r=>{
            //by convention we will eventually set lap[0] to the below
            //allows us to have qualifying/starting row information in laps easily
            //makes querying a lap easy too since we can just do laps[lapNum]
            const startingPositionLap:Lap = {
                driverId: r.driver.driverId,
                lapNum:0,
                position: r.startingOrder,
                timeDsp: '0:00',
                time: 0,
                totalTime:0,
                gap:0,
                positionGap:0,
                pitStopTime:undefined,
                timeNetPitStop:undefined
            }

            const driverLaps = lapData.laps.filter(l=>l.driverId===r.driver.driverId);

            //Pitstop data is added to the main data
            if(pitData){
                const driverPitStops = pitData.pitStops.filter(p=>p.driverId===r.driver.driverId);
                //Update driverLaps with pitstop details
                //driverLaps are sorted by lapnumber in that fetcher process
                driverPitStops.forEach(pit=>{
                //Pitstop lap is when the car enters the pits but the time is added to the next lap
                //hence pit.lapNum is lap.lapNum-1; array index is 0 so we can just do pit.lapNum
                if(driverLaps.length>pit.lapNum){
                    driverLaps[pit.lapNum].pitStopTime = pit.duration;
                    driverLaps[pit.lapNum].timeNetPitStop = driverLaps[pit.lapNum].time - pit.duration;
                }
                
            });
            }
            //caclulate race statistics
            const {slowestLapNum,
                slowestLapNetPit, 
                slowestLapTime, 
                slowestLapNetPitTime,
                avgLapTime,
                avgLapNetPitTime, 
                varianceLapTime,
                varianceNetPitTime} = calculateDriverRaceStatistics(driverLaps);
            //update Driver object statistics
            r.raceStats.slowestLapNumber=slowestLapNum;
            r.raceStats.slowestLapNetPit=slowestLapNetPit;
            r.raceStats.slowestLapTime=slowestLapTime;
            r.raceStats.slowestLapNetPitTime=slowestLapNetPitTime;
            r.raceStats.avgLapTime=avgLapTime;
            r.raceStats.avgLapNetPitTime=avgLapNetPitTime;
            r.raceStats.varianceLapTime=varianceLapTime;
            r.raceStats.varianceNetPitTime=varianceNetPitTime;
            //update Driver object with laps
            r.laps = [startingPositionLap].concat(driverLaps);
            //add to Map
            driverMap.set(r.driver.driverId,r);
        })
        return {race:raceData.race, driverMap:driverMap};
    }
    
    return {race:raceData.race, driverMap:undefined};
}

function calculateDriverRaceStatistics(laps:Lap[]){
    let avgLapTime = 0;
    let avgLapNetPitTime = 0;
    let varianceLapTime = 0;
    let varianceNetPitTime = 0;
    let slowestLapTime = 0;
    let slowestLapNetPitTime = 0;
    let slowestLapNum = undefined;
    let slowestLapNetPit = undefined;
    //Calculate mean & slowest lap in first loop pass
    let lapTimeSum=0;
    let lapTimeNetPitSum = 0;
    let lapSum = 0;
    laps.forEach((i,index)=>{
        //Set time net pit stop to time for each lap if not already defined
        if(!i.timeNetPitStop){
            i.timeNetPitStop=i.time;
        }
        if(index>0 && index<laps.length){
            lapTimeSum+= i.time;
            lapTimeNetPitSum+=i.timeNetPitStop?i.timeNetPitStop:i.time;
            lapSum++;
            if(i.time>slowestLapTime){
                slowestLapTime = i.time;
                slowestLapNum = i.lapNum;
            }
            if(i.timeNetPitStop>slowestLapNetPitTime){
                slowestLapNetPitTime = i.timeNetPitStop?i.timeNetPitStop:i.time;
                slowestLapNetPit = i.lapNum;                
            }
        }
    });
    //explicitly set to 0 if number of laps is 0 and also avoid div by 0
    avgLapTime = lapSum>0?lapTimeSum/lapSum:0;
    avgLapNetPitTime = lapSum>0?lapTimeNetPitSum/lapSum:0;
    //Calculate variance in second pass
    let varianceSum=0;
    let varianceNetPitSum=0;
    laps.forEach((i,index)=>{
        if(index>0 && index<laps.length){
            varianceSum += ((i.time-avgLapTime)**2);
            varianceNetPitSum += (((i.timeNetPitStop?i.timeNetPitStop:i.time)-avgLapNetPitTime)**2);
        }
        
    });
    //explicitly set to 0 if number of laps is 0 and also avoid div by 0
    varianceLapTime = lapSum>0?varianceSum/lapSum:0;
    varianceNetPitTime = lapSum>0?varianceNetPitSum/lapSum:0;
    return (
        {
            slowestLapNum:slowestLapNum,
            slowestLapNetPit:slowestLapNetPit, 
            slowestLapTime:slowestLapTime, 
            slowestLapNetPitTime:slowestLapNetPitTime,
            avgLapTime:avgLapTime,
            avgLapNetPitTime:avgLapNetPitTime, 
            varianceLapTime:varianceLapTime,
            varianceNetPitTime:varianceNetPitTime
        }
    );
}