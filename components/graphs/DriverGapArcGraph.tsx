import {ArcSeries, FlexibleXYPlot, LabelSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { GraphData } from '../../types/GraphTypes';

//Incoming assumed to be filtered by x
//yMax is used to derive arcs; 360 is yMax
  type Props = {
    data:GraphData[],
    yMax:number,
    seriesSelected?:string,
    xSelected?:number,
    onSeriesHover:(key:string)=>void,
    onSeriesBlur:()=>void,
  }

  export function DriverGapArcGraph(props:Props) {
    if(!props.data){
        return(
            <div>
                <h3>No Data</h3>
            </div>
        )
    }
    const flatData = props.data.filter(f=>!f.disabled).flatMap(d=>d.series
        .sort((a,b)=>a.y-b.y)
        .map((s,index)=>({
            key:d.seriesKey,
            x:s.x,
            opacity:props.seriesSelected?props.seriesSelected===d.seriesKey?1:0.5:1,
            color:s.color?s.color:d.color,
            y:s.y
        }))
        .filter(m=>m.y<props.yMax*2)
    );

    const maxRadius=flatData.length+4;

    const arcArray = [{
        key:'index',
        angle0:0,
        angle:Math.PI*2,
        opacity:1,
        radius: maxRadius-flatData.length,
        radius0:0,
        color:'rgb(32, 32, 32)'
      }].concat(flatData.map((d,index)=>({
            key:d.key,
            angle0:0,
            angle:(Math.PI*2)*(1-d.y/props.yMax),
            opacity:d.opacity,
            radius:maxRadius-index,
            radius0:maxRadius-index-1,
            color:d.color
      })));
      
    return (
      <FlexibleXYPlot
        xDomain={[-maxRadius, maxRadius]}
        yDomain={[-maxRadius, maxRadius]}
        margin={{top: 10, left: 10, bottom: 10, right: 10}}
      >
      <ArcSeries
          animation
          radiusDomain={[0,maxRadius]}
          center={{x: 0, y:0}}
          data={arcArray}
          colorType={'literal'}
          onValueMouseOver={row => {
                                    props.onSeriesHover?props.onSeriesHover(row.key==='index'?null:row.key):null; 
                                  }}
          onValueMouseOut={()=>{
                                props.onSeriesBlur?props.onSeriesBlur():null;
                              }}
      />
      <LabelSeries
      data={[{x:0,y:0,
          label:props.xSelected?props.xSelected.toString():'Final', 
          style:{fontSize:'1rem',stroke:'white',fill:'white'}
          }]}
      labelAnchorX='middle'
      labelAnchorY='middle'/>
      
    </FlexibleXYPlot>
    );
      
}
//TODO: Cleanup
//TODO: Center text and styling
/*
left: 0px;
    top: 0px;
    width: 500px;
    height: 500px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    */