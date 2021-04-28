import { Race } from "./Race";

export interface PitStop{
    driverId:string;
    lapNum:number;
    stop:number;
    time:number;
    duration: number;
}

export interface RacePitStops{
    race:Race;
    pitStops:PitStop[];
}