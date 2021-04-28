import { CSSProperties } from "react"

type Props = {
    options:{value:number, label?:string}[],
    value:number,
    onChange:(v:string|number)=>void,
    enabled?:boolean,
    style?:CSSProperties
}

export default function RangeSlider(props:Props){

    const min = props.options.reduce((a,b)=>Math.min(a,b.value),Infinity);
    const max = props.options.reduce((a,b)=>Math.max(a,b.value),-Infinity);
    const initialValue = max;

    return (
        <div className='slider'>
            <input type='range' id='sliderselect' name='sliderselect'
                disabled={props.enabled!=undefined?!props.enabled:false}
                min={min} max={max} step={1} list='lapselect' 
                value={props.value!=undefined?props.value:initialValue}
                onChange={(e)=>{props.onChange(e.target.valueAsNumber)}}
            />
            <datalist id='sliderselect' style={props.style}>
                {props.options.map((i,index)=>(
                    <option key={index} value={i.value} label={i.label?i.label:i.value.toString()}/>
                ))}
            </datalist>
            <span className="range-value" style={{left:(100*(props.value/(max-min))).toString()+'%'}}>{props.value}</span>
            <style jsx>{`
                input[type=range] {
                    -webkit-appearance:none;
                    width:100%;
                }
                .slider{
                    position:relative;
                }
                .range-value{
                    top:-.35rem;
                    background-color:#3D567E;
                    color:white;
                    font-size:0.75rem;
                    position:absolute;
                    height:2rem;
                    width:2rem;
                    border-radius:10px;
                    align-items:center;
                    display:flex;
                    justify-items:center;
                    justify-content:space-around;
                }
                input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 1rem;
                height: 1rem;
                background: white;
                cursor: pointer;
                border-radius:5px;
                }
                input[type=range]::-moz-range-thumb {
                -webkit-appearance:none;
                width: 1rem;
                height: 1rem;
                background: black;
                cursor: pointer;
                border-radius:5px;
                }
            `}</style>
        </div>
    )
}