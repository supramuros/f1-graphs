export interface Race{
    season:string;
    round:string;
    raceName:string;
    circuitId:string;
    circuitName:string;
    raceDate:Date;
    circuitUrl?:string;
    lat?:number;
    long?:number;
    locality?:string;
    country?:string;
    numLaps?:number;
}