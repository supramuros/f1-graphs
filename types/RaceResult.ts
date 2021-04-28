import { Lap } from "./Lap";
import { PitStop } from "./PitStop";
import { Race } from "./Race";

export interface Driver {
    driverId:string;
    driverCode:string;
    driverNumber?:string;
    driverName:string;
    driverUrl?:string;
    driverNationality?:string;
    constructorId:string;
    constructorName:string;
    constructorUrl?:string;
    constructorNationality?:string;
    constructorColor?:string;
}

export interface DriverRaceStats {
    fastestLapRank?:number,
    fastestLapNumber?:number,
    fastestLapTime?:number,
    fastestLapTimeDsp?:string,
    fastestLapSpeed?:number,
    fastestLapUnits?:'kph'|'mph'|null,
    slowestLapNumber?: number,
    slowestLapNetPit?:number,
    slowestLapTime?:number,
    slowestLapNetPitTime?:number,
    avgLapTime?:number,
    avgLapNetPitTime?:number,
    varianceLapTime?:number,
    varianceNetPitTime?:number
}

export interface DriverRaceResult {
    driver:Driver;
    startingPosition:number;
    startingOrder?:number;
    endingPosition:number;
    points:number;
    lapsCompleted:number;
    endingStatus:string;
    raceTime:number;
    raceTimeDsp:string;
    raceStats?:DriverRaceStats;
    laps?:Lap[];
    pitStops?:PitStop[];
};

export interface RaceDriverMap {
    race:Race;
    driverMap:Map<string,DriverRaceResult>;
}

export interface RaceResult{
    race:Race;
    results:DriverRaceResult[];
}