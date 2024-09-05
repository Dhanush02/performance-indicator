import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import Chart from './Chart';
import BarChart from '../charts/BarChart';

import "../../Styles/dropArea.css";


// //Import Dashboard Card
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import BubbleChart from '../charts/BubbleChart';
import BulletChart from '../charts/BulletChart';
import DonutChart from '../charts/DonutChart';
import GaugeChart from '../charts/GaugeChart';
import GeoMap from '../charts/GeoMap';
import HeatMap from '../charts/HeatMap';
import HistogramChart from '../charts/HistogramChart';
import MetricCard from '../cards/MetricCard';
import MultiCard from '../cards/MultiCard';
import HybridCard from '../cards/HybridCard';

const DropArea = (props) => {
  const {items, setItems, currentItem, setCurrentItem, dashboardFlag, setDashboardFlag} = props;
  const [droppedChart, setDroppedChart] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['CHART', 'WIDGET'],
    drop: (item) => item.widget?setDroppedChart(item.widget):setDroppedChart(item.chart),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const chartMapper = (namespace, page) => {
    return (namespace=="barColumn") ? (<BarChart sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />) 
         : (namespace=="bubble") ? (<BubbleChart sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />) 
         : (namespace=="bullet") ? (<BulletChart sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />) 
         : (namespace=="donut") ? (<DonutChart sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />) 
         : (namespace=="gauge") ? (<GaugeChart sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />)
         : (namespace=="geoMap") ? (<GeoMap sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />)
         : (namespace=="heatMap") ? (<HeatMap sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />)
         : (namespace=="histogram")?(<HistogramChart sty={page=="dashboard"?{height: "100%", width: "100%", position: "absolute"}:{height: "60vh", width: "100%"}} />)
         : (<Chart/>)
  }

  const widgetMapper = (namespace, page) => {
    return (namespace=="metricCard" ? (<MetricCard sty={page} title="Total Sales" value="1,234" unit="USD" />)
           :namespace=="multiCard" ? (<MultiCard sty={page}></MultiCard>)
           :namespace=="hybridCard" && (<HybridCard></HybridCard>)
  )
  }
  
  useEffect(()=>{
    if(droppedChart){
      if(droppedChart.type == "charts"){
        let temp = items;
        temp.map((itm, idx)=>{
          if(itm.name === currentItem){
            temp[idx].comp = chartMapper(droppedChart.namespace, "dashboard");
          }
        })
        setItems(temp);
      }
      else{
        let temp = items;
        temp.map((itm, idx)=>{
          if(itm.name === currentItem){
            temp[idx].comp = widgetMapper(droppedChart.namespace, "dashboard");
          }
        })
        setItems(temp);

      }
    }
  }, [droppedChart])

  return (
    <Card
      ref={drop}
      style={{
        width: '90%',
        height: '77vh',
        // border: '2px dashed black',
        padding: '10px',
        backgroundColor: isOver ? '#FFF' : 'white',
        textAlign: 'center',
      }}
    >
      <CardContent>
      {droppedChart ? (
        droppedChart.type=="charts"?<div>
          {/* <h3>{}</h3> */}
          <input placeholder={droppedChart.name}></input>
          {chartMapper(droppedChart.namespace, "dropArea")}
          {/* Display your chart here. For example, you might render a Chart component */}
        </div>:<div>
          <div className='widget-div'>
          {widgetMapper(droppedChart.namespace, "dropArea")}
          </div>
        </div>
      ) : (
        <p>Drag a chart here to display it.</p>
      )}
      </CardContent>
    </Card>
  );
};

export default DropArea;
