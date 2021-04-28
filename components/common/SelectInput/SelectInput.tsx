import { CSSProperties, SyntheticEvent } from "react";

interface Props{
    label:string;
    value:string|number;
    optionList:{value:string|number, displayValue?:string|number}[];
    onChange:(event:SyntheticEvent)=>void;
    className?:string;
    style?:CSSProperties;
}

export default function SelectInput(props:Props){
    

    return (
        <div className='container'>
            <div className='select-container'>
                    <select 
                        name={props.label} 
                        id={props.label}
                        className={`select ${props.className}`}
                        style={props.style}
                        aria-label={props.label}
                        value={props.value} 
                        onChange={props.onChange}>
                        {props.optionList.map((o,index) => (
                            <option 
                                key={index} 
                                value={o.value}
                                className='select-option'
                            >
                                {o.displayValue?o.displayValue:o.value}
                            </option>
                        ))}
                    </select>
            </div>
                    <label htmlFor={props.label} style={props.style}>{props.label}</label>
                <style jsx>{`
                        .container {
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            justify-content:center;
                        }
                        .select-container {
                            display:grid;
                            grid-template-areas:"select";
                            align-items:center;
                            justify-items:center;
                        }
                        .select {
                            appearance:none;
                            background-color:rgb(32, 32, 32);
                            color:white;
                            border:none;
                            padding:0 1em 0 0;
                            margin:0;
                            width:100%;
                            grid-area:select;
                            font-size:1rem;
                            align-self:flex-end;
                            border-bottom: 2px solid rgb(32, 32, 32);
                            transition: border-bottom 0.3s ease-in-out;
                        }
                        label {
                            border-bottom: 2px solid rgb(32, 32, 32);
                        }
                        label::focus{
                            border-bottom: 2px solid white;
                        }
                        
                        .select:focus {
                            outline: 1px dotted rgb(32, 32, 32);
                            border-bottom: 2px solid white; 
                        }
                        .select:hover {
                            outline: 1px dotted rgb(32, 32, 32);
                            border-bottom: 2px solid white; 
                            color: gray;
                        }
                        .select-container::after {
                            content: "";
                            width: 1rem;
                            height: 0.5rem;
                            background-color: rgb(100,100,100);
                            border:1px solid white;
                            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
                            grid-area:select;
                            justify-self:end;                            
                            }
                        .select-option {
                            color:white;
                            background-color:rgb(32, 32, 32);
                            text-align:right;
                            font-size:1rem;
                            dir:rtl;
                        }
                        .visuallyhidden {
                            border: 0;
                            clip: rect(0 0 0 0);
                            height: 1px;
                            margin: -1px;
                            overflow: hidden;
                            padding: 0;
                            position: absolute;
                            width: 1px;
                            }
                    `}
                </style>
            </div>
    )
}