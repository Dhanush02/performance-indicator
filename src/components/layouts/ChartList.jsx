import React from 'react';
import { useDrag } from 'react-dnd';
import "../../Styles/chartForm.css";

//Imports for Shad CN Cards
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

//Imports for Shad CN Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const charts = [
  { "id": 1, "name": "Bar/Column", "namespace": "barColumn", "type": "charts" },
  { "id": 2, "name": "Bubble", "namespace": "bubble", "type": "charts" },
  { "id": 3, "name": "Bullet", "namespace": "bullet", "type": "charts" },
  { "id": 4, "name": "Cluster Bubble", "namespace": "clusterBubble", "type": "charts" },
  { "id": 5, "name": "Container", "namespace": "container", "type": "charts" },
  { "id": 6, "name": "Donut", "namespace": "donut", "type": "charts" },
  { "id": 7, "name": "Gauge", "namespace": "gauge", "type": "charts" },
  { "id": 8, "name": "Geo Map", "namespace": "geoMap", "type": "charts" },
  { "id": 9, "name": "Heat Map", "namespace": "heatMap", "type": "charts" },
  { "id": 10, "name": "Histogram", "namespace": "histogram", "type": "charts" },
  { "id": 11, "name": "Line", "namespace": "line", "type": "charts" },
  { "id": 12, "name": "Numeric Points", "namespace": "numericPoints", "type": "charts" },
  { "id": 13, "name": "Pie", "namespace": "pie", "type": "charts" },
  { "id": 14, "name": "Scatterplot", "namespace": "scatterplot", "type": "charts" },
  { "id": 15, "name": "Scorecard", "namespace": "scorecard", "type": "charts" },
  { "id": 16, "name": "Stacked Area", "namespace": "stackedArea", "type": "charts" },
  { "id": 17, "name": "Stacked Bar/Column", "namespace": "stackedBarColumn", "type": "charts" },
  { "id": 18, "name": "Tab", "namespace": "tab", "type": "charts" },
  { "id": 19, "name": "Table", "namespace": "table", "type": "charts" },
  { "id": 20, "name": "Tile", "namespace": "tile", "type": "charts" },
  { "id": 21, "name": "Time Series", "namespace": "timeSeries", "type": "charts" },
  { "id": 22, "name": "Tree Map", "namespace": "treeMap", "type": "charts" },
  { "id": 23, "name": "Waterfall", "namespace": "waterfall", "type": "charts" }
]

const widgets = [
  {"id": 1, "name": "Metric Card", namespace: "metricCard", type: "widgets"},
  {"id": 2, "name": "Mutli Card", namespace: "multiCard", type: "widgets" },
  {"id": 3, "name": "Hybrid Card", namespace: "hybridCard", type: "widgets"}
]

const WidgetItem = ({ widget }) => {
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'WIDGET',
    item: { widget },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: '8px',
        marginBottom: '4px',
        border: "1px solid grey",
        // backgroundColor: '',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {widget.name}
    </div>
  );
};


const ChartItem = ({ chart }) => {
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CHART',
    item: { chart },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: '8px',
        marginBottom: '4px',
        border: "1px solid grey",
        // backgroundColor: '',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {chart.name}
    </div>
  );
};

const ChartList = () => {
  return (
    <Card className="chart-outer-list" style={{ width: '40vh', paddingTop: "2vh", paddingBottom: "2vh" }}>
    <CardContent className='chart-inner-list'>
      <Accordion type="single" collapsible>
        <AccordionItem value="charts">
          <AccordionTrigger>Charts</AccordionTrigger>
          <AccordionContent>      
            {charts.map((chart) => (
              <ChartItem key={chart.id} chart={chart} />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="widgets">
          <AccordionTrigger>Widgets</AccordionTrigger>
          <AccordionContent>      
          {widgets.map((widget) => (
              <WidgetItem key={widget.id} widget={widget} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </CardContent>
    </Card>
  );
};

export default ChartList;
