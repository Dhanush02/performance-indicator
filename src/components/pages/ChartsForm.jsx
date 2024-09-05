import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChartList from '../layouts/ChartList';
import DropArea from '../layouts/DropArea';
import "../../Styles/chartForm.css";

// //Import Card Librarires
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ChartSettings from '../layouts/ChartSettings';


function ChartForm(props) {
  const {items, setItems, currentItem, setCurrentItem, openForm, setOpenForm, dashboardFlag, setDashboardFlag} = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <Card className="w-auto m-10 card-chart-form bg-neutral-50" 
          >
          <CardHeader>
          <CardDescription className="ml-auto">
          <button onClick={()=>{setDashboardFlag(true); setOpenForm(false); }} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Save & Apply
         </button>
          </CardDescription>
          </CardHeader>
          <CardContent className="items-center justify-center">
          
      <div style={{ display: 'flex', flexDirection: "row"}}>
        <DropArea 
        items={items}
        setItems={setItems}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        dashboardFlag={dashboardFlag}
        setDashboardFlag={setDashboardFlag}
        />
        <ChartSettings/>
        <ChartList />
      </div>
          </CardContent>
          <CardFooter className="flex justify-between">
           
          </CardFooter>
        </Card>
    </DndProvider>
  );
}

export default ChartForm;
