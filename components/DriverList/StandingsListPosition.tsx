
type Props = {
    position:number,
    color?:string,
    
}

export default function StandingsListPosition(props:Props){

    return (
        <span className='position'>
            {props.position}
        <style jsx>{`
            .position {
                background-color:white;
                color:black;
                margin:0.1rem;
                font-size: .75rem;
                height: 1rem;
                width: 1rem;
                border-radius:.25rem;
                text-align:center;
                position:relative;
            }
            .position::after {
            content:'';
            width:.3rem;
            height:100%;
            left:1.5rem;
            background-color:${props.color?props.color:'white'};
            margin-right:.5rem;
            position:absolute;
        }
        `}</style>
        </span>
    )

    }