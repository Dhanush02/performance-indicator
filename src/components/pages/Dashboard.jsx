import React, { useCallback, useEffect, useMemo, useState } from 'react';

//Import React Grid Layout
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, WidthProvider } from "react-grid-layout";


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

const Dashboard = (props) => {
  const {openForm, setOpenForm, items, setItems, currentItem, setCurrentItem, layoutConfig, setLayoutConfig, dashboardFlag, setDashboardFlag, kpiCount, setKPICount} = props;
  // Define the layout configuration for each grid item
  
  
const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);
  
  
  const addGrid = () =>{
    var count = kpiCount+1;
    console.log("count", count);
    setKPICount(count);
    setItems([...items, {name: "item"+count, comp: null}]);
    setLayoutConfig([...layoutConfig, { i: 'item'+count, x:0, y:0, w:3, h:1.5}])
  }
  const handleLayoutChange = (event) =>{
    setLayoutConfig(event);
    console.log("event", event);
  }
  const handleChartSwitch = (item) => {
    setOpenForm(true);
    setDashboardFlag(false);
    setCurrentItem(item.name);
  }
  
  return (
    <>
    <Card className="w-auto" >
    {/* <Card className="w-auto h-screen m-10" onClick={handleChartSwitch}> */}
      <CardHeader>
        <CardTitle className="m-auto">Performance Insights Dashboard</CardTitle>
        <CardDescription className="m-auto">Create your custom Dashboard</CardDescription>
        <CardDescription className="ml-auto"><button onClick={addGrid} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Card
    </button></CardDescription>
      </CardHeader>
      <CardContent className="h-auto">
    <div className="dashboard-card">
    {/* <GridLayout className="example-layout" layout={layoutConfig} cols={12} rowHeight={30} width={1200}>
      { items.map((itm,idx)=>{
        return(        <div key={itm} style={{background: "#666666"}}>Click to Add</div>);
      })
      }
    </GridLayout> */}
    <ResponsiveGridLayout
        className="layout"
        // layouts={layoutConfig}
        onLayoutChange={handleLayoutChange}
        compactType='horizontal'
        
        measureBeforeMount={false}
        autoSize={true}
        // preventCollision={true}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        { items.map((itm,idx)=>{
        return( <div data-grid={layoutConfig[idx]} sx={{width: "100%", height: "100%", position: "absolute"}}className="rounded-2xl bg-neutral-100 flex justify-center" key={itm.name} onDoubleClick={()=>{handleChartSwitch(itm)}}>
        {itm.comp}
    </div>         )
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

export default Dashboard;
