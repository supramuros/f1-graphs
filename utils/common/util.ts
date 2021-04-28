//Converts a lap time formatted as MI:SS.mmmm to seconds
export function timeStringToSeconds(input:string):number{
    const strSplit = input.split(':');
    const minutes = input.includes(':')?parseInt(strSplit[0]):0;
    const remainderSeconds = input.includes(':')?parseFloat(strSplit[1]):parseFloat(strSplit[0]);
    return Math.round(Number(minutes*60 + remainderSeconds)*1000)/1000;
}