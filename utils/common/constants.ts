export const URL_BASE = 'https://ergast.com/api/f1';

export enum ERGAST_API {
    SEASONS = 'seasons',
    SCHEDULE = 'schedule',
    RESULTS = 'results',
    LAPS = 'laps',
    RESULTSLAPS = 'results+laps',
    PITSTOPS = 'pitstops',
    DRIVERSTANDINGS = 'driver-standings',
    CONSTRUCTORSTANDINGS = 'constructor-standings'
};

//Static file array of constructor -> color is transformed to a Map to be used for inclusion in the data
export const CONSTRUCTOR_COLORS:Array<{constructorId:string, color:string}> = [
    {constructorId:'red_bull', color:'#0600ef'},
    {constructorId:'mercedes', color:'#00D2BE'},
    {constructorId:'ferrari',color:'#dc0000'},
    {constructorId:'alphatauri',color:'#2b4562'},
    {constructorId:'mclaren',color:'#FF9800'},
    {constructorId:'alpine',color:'#0090ff'},
    {constructorId:'aston_martin',color:'#006f62'},
    {constructorId:'alfa',color:'#900000'},
    {constructorId:'williams',color:'#005aff'},
    {constructorId:'haas',color:'#ffffff'},
    {constructorId:'racing_point', color:'#f196c6'},
    {constructorId:'force_india', color:'#f196c6'},
    {constructorId:'toro_rosso', color:'#2b4562'},
    {constructorId:'renault', color:'#fce903'},
    {constructorId:'manor', color:'#0079bf'},
    {constructorId:'sauber', color: '#d6201c'},
]
export const DEFAULT_CONSTRUCTOR_COLOR = '#898b8c';
export const CONSTRUCTOR_COLOR_MAP:Map<string,string> = new Map(CONSTRUCTOR_COLORS.map((i): [string, string] => [i.constructorId, i.color]));