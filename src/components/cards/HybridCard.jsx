import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
//Import React Grid Layout
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, WidthProvider } from "react-grid-layout";
import { useMemo, useState } from "react";

const HybridCard = () =>{
    const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);
    const [layoutConfig, setLayoutConfig] = useState([{ i: 'item1', x: 0, y: 0, w: 2, h: 1 }])
    const [items, setItems] = useState([{name: "item1", comp: null}]);
    return (
            <Card className="w-full h-full m-10" >
                <CardHeader>
                    <CardTitle>
                        Card Title
                    </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="dashboard-card">
                <ResponsiveGridLayout
                    className="layout"
                    // layouts={layoutConfig}
                    // onLayoutChange={handleLayoutChange}
                    compactType='horizontal'
                    
                    measureBeforeMount={false}
                    autoSize={true}
                    // preventCollision={true}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                >
                    { items.map((itm,idx)=>{
                    return( <div data-grid={layoutConfig[idx]} sx={{width: "100%", height: "100%", position: "absolute"}}className="rounded-2xl bg-neutral-100 flex justify-center" key={itm.name}>
                    {itm.comp}
                </div>         )
                })
                }
                </ResponsiveGridLayout>
                </div>
                </CardContent>
                </Card>
    )
}

export default HybridCard;