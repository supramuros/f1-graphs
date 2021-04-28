import { Race } from "./Race";

export interface Lap{
    driverId: string;
    lapNum:number;
    position: number;
    timeDsp: string;
    time: number;
    totalTime?:number;
    gap?:number;
    positionGap?:number;
    pitStopTime?:number;
    timeNetPitStop?:number;
}

export interface RaceLaps{
    race:Race;
    laps:Lap[];
}