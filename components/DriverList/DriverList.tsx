import React, { CSSProperties } from "react";

type Props = {
    title?:React.ReactNode,
    listItems?:React.ReactNode[],
    children:React.ReactNode,
    style?:CSSProperties
}

export default function DriverList(props:Props){

    return (
        <div className='driver-list'>
            {props.title?<div className='list-title'>
                    {props.title}
            </div>:null}
            <ol className='list-container' style={props.style}>
                {props.listItems}
                {props.children}  
            </ol>
            <style jsx>{`
                .driver-list{
                    display:flex;
                    height:100%;
                    align-items:flex-start;
                    flex-direction:column;
                }
                .list-container{
                    list-style:none;
                    padding-inline-start:0;
                    margin:0;
                    padding:15px 0px 18px 0px;
                    margin-block-start:0;
                    margin-block-end:0;
                    display:grid;
                    grid-template-columns: auto 0.75fr 4rem;
                    font-size:0.75rem;
                    justify-items:stretch;
                    width:100%;
                }
                .list-title {
                    margin:0;
                    padding:0;
                    text-align:center;
                    width:100%;
                    min-height:2.5rem;
                    
                }
                .list-title h1 {
                    margin:0;
                    padding:0;
                }
            `}
            </style>
        </div>
    )
}