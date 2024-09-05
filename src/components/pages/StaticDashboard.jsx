import React, { useCallback, useMemo, useState } from 'react';

//Import React Grid Layout
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, WidthProvider } from "react-grid-layout";


import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from "highcharts/highcharts-3d";


//Import Card from ShadCN
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';


import ChartsForm from './ChartsForm';

import "../../Styles/dashboard.css";

const StaticDashboard = (props) => {
  const {openForm, setOpenForm, items, setItems, currentItem, setCurrentItem} = props;
  // Define the layout configuration for each grid item
  const [kpiCount, setKPICount] = useState(1);
  
const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);
const [layoutConfig, setLayoutConfig] = useState(
    [
      {
          "w": 5,
          "h": 2,
          "x": 0,
          "y": 0,
          "i": "item1",
          "moved": false,
          "static": false
      },
      {
          "w": 6,
          "h": 2,
          "x": 0,
          "y": 2,
          "i": "item2",
          "moved": false,
          "static": false
      },
      {
          "w": 7,
          "h": 2,
          "x": 5,
          "y": 0,
          "i": "item3",
          "moved": false,
          "static": false
      },
      {
          "w": 4,
          "h": 2,
          "x": 6,
          "y": 2,
          "i": "item4",
          "moved": false,
          "static": false
      },
      {
          "w": 2,
          "h": 2,
          "x": 10,
          "y": 2,
          "i": "item5",
          "moved": false,
          "static": false
      }
  ]
  )
  
  const addGrid = () =>{
    var count = kpiCount+1;
    setKPICount(count);
    setItems([...items, {name: "item"+count, comp: <p>{"Click to add KPI"}</p>}]);
    setLayoutConfig([...layoutConfig, { i: 'item'+count, x:0, y: count}])
  }
  const handleLayoutChange = (event) =>{
    setLayoutConfig(event);
    console.log("event", event);
  }
//   const handleChartSwitch = (name) => {
//     setOpenForm(true);
//     setCurrentItem(name);
//   }
highcharts3d(Highcharts);
  
  return (
    <>
    <Card className="w-auto h-screen m-10 bg-[#F1F1F1]" >
    {/* <Card className="w-auto h-screen m-10" onClick={handleChartSwitch}> */}
      <CardHeader>
        <CardTitle className="m-auto">Performance Insights Dashboard</CardTitle>
        {/* <CardDescription className="m-auto">Create your custom Dashboard</CardDescription> */}
        {/* <CardDescription className="ml-auto"><button onClick={addGrid} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Card
    </button></CardDescription> */}
      </CardHeader>
      <CardContent>
    <div className="dashboard-card">
    {/* <GridLayout className="example-layout" layout={layoutConfig} cols={12} rowHeight={30} width={1200}>
      { items.map((itm,idx)=>{
        return(        <div key={itm} style={{background: "#666666"}}>Click to Add</div>);
      })
      }
    </GridLayout> */}
    <ResponsiveGridLayout
        className="layout"
        // layout={layoutConfig}
        onLayoutChange={handleLayoutChange}
        // compactType='horizontal'
        autoSize={true}
        measureBeforeMount={false}
        // preventCollision={true}
        // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        { items.map((itm,idx)=>{
        return(
        <div data-grid={layoutConfig[idx]} className="rounded-2xl flex justify-center bg-[#fff]" key={itm.name} onDoubleClick={()=>{handleChartSwitch(itm.name)}}>
            {itm.comp}
        </div>    
    );
      })
      }
      </ResponsiveGridLayout>
    </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <button variant="outline">Cancel</button>
        <button>Deploy</button> */}
      </CardFooter>
    </Card>
    </>
  );
};

export default StaticDashboard;
