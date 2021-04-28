export type Series = {
    key:string,
    x:number,
    xLabel?:string,
    y:number,
    yLabel?:string,
    color?:string,
    opacity?:number,
    disabled?:boolean
}

export type GraphData = {
    seriesKey:string,
    series:Series[],
    color?:string,
    disabled?:boolean
}

export type BarGraphData = {
    key:string,
    disabled?:boolean,
    x:number,
    xLabel?:string,
    y:number,
    yLabel?:string,
    color?:string,
    cluster?:string
}

export type WhiskerSummaryData = {
    key:string,
    disabled?:boolean,
    x:number,
    xLabel?:string,
    yLow:number,
    yHigh:number,
    yBoxLow:number,
    yBoxHigh:number,
    yLabel?:string,
    color?:string
}