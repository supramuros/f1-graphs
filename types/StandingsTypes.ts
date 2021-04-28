import { Driver } from "./RaceResult";

export interface Standing {
    position:number;
    points:number;
    wins:number;
}

export interface Constructor {
    constructorId:string;
    constructorName:string;
    constructorUrl?:string;
    constructorNationality?:string;
    constructorColor?:string;
}

export interface DriverStanding extends Standing{
    driver:Driver;
}
export interface ConstructorStanding extends Standing{
    constructor:Constructor;
}