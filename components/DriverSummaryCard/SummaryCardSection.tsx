
type Props = {
    title?:string,
    rows:{label:string, value:string|number}[]
}
export default function SummaryCardSection(props:Props){


    return(
        <div className='card-section'>
            <h3>{props.title}</h3>
            <ul className='section-data'>
                {props.rows.map(r=>(
                    <li key={r.label}>
                        <span className='label'>
                            {r.label}
                        </span>
                        <span className='value'>
                            {r.value}
                        </span>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .section-data{
                    list-style:none;
                    padding-inline-start:0;
                    margin:0;
                    margin-block-start:0;
                    margin-block-end:0;
                    font-size:0.75rem;
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    grid-auto-rows:auto;
                    width:100%;
                    
                }
                li{
                    display:contents;
                }
                .label {
                    grid-column:1;
                }
                .value {
                    grid-column:2;
                    justify-self:end;
                }
                h3 {
                    font-size:0.75rem;
                    border-bottom:solid 1px white;
                }
                h4 {
                    font-size:0.75rem;
                    border-bottom:solid 1px white;
                }
            `}</style>
        </div>
    )
}