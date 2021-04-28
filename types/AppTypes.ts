//DriverList type
export interface DriverList{
    driverId:string;
    enabled:boolean;
}

//AppState is passed as props to all pages
export interface AppState{
    season:string;
    setSeason:(season:string)=>void;
    round:string;
    setRound:(round:string)=>void;
    lap:number;
    setLap:(lap:number)=>void;
    driver:string;
    setDriver:(driver:string)=>void;
    driverList:DriverList[];
    setDriverList:(list:{driverId:string,enabled:boolean}[])=>void;
}


//Enum of different pages; used for displaying the Nav links
export enum GraphPages {
    POSITION = 'Race Position',
    GAP = 'Lap Gaps',
    DRIVERSUMMARY = 'Driver Summary',
    GAP_BAR = 'Lap Gap Bar',
    TIME = 'Lap Times',
    DRIVERDETAIL = 'Driver Details'
}