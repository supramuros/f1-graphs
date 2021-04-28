//Shared Types: Types for each function call are listed with the function
//Standard error is extended to include more details to swr
export default class swrError extends Error {
    status?:number;
    info?:string;
}