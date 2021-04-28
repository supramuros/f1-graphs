import { CSSProperties, SyntheticEvent} from 'react';
import styles from '../DriverList/DriverListItem.module.css';


type Props = {
    id:string,
    textCenter?:string,
    textRight?:string,
    checked:boolean,
    orderNumber?:string|number,
    color?:string,
    onChange:(event: SyntheticEvent) => void,
    onMouseEnter?:(event: SyntheticEvent)=>void,
    onMouseLeave?:(event: SyntheticEvent)=>void,
    style?:CSSProperties
}

export default function DriverListItem(props:Props){
    function checkedColor(){
        if(!props.checked){
            return '#857c85';
        }else
        return '#FFFFFF';
    }
    
    return (
        <li className={styles.listItem} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <label htmlFor={props.id} className={styles.listItem} style={props.style}>
            <input id={props.id} type='checkbox' className={styles.checkbox}
                checked={props.checked} 
                onChange={props.onChange}
                />
            <span className={styles.numberContainer}>
                <span className={styles.number} style={{backgroundColor:checkedColor()}}>{props.orderNumber}</span>
            </span>
            <span className={`textColor ${styles.text}`} style={{...props.style,color:checkedColor()}}>{props.textCenter}</span>
            {props.textRight?<span className={styles.textRight} style={{color:!props.checked?'#857c85':null}}>
                    {props.textRight}
            </span>:null}
            </label>
            <style jsx>{`
            .textColor::before {
               background-color:${props.color?props.color:'black'};
               opacity:${props.checked?1:0.5}
            }
           `}</style>
        </li>
    )

}