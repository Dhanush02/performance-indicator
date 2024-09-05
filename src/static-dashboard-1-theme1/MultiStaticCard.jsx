import MetricCard from "./MetricStaticCard";
import "../Styles/Cards/multiCard.css";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const MultiStaticCard = ({sty}) =>{
    console.log("multi sty", sty)
    return(
        <Card sx={{width: "100%"}}>
            <CardHeader>
                <CardTitle className="mr-auto">Phising Test</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="dropArea-outer-div">
                    <MetricCard sty={sty=="dashboard"?sty:"multi"} title="Negative" value="5" unit="%" />
                    <MetricCard sty={sty=="dashboard"?sty:"multi"} title="Neutral" value="10" unit="%" />
                    <MetricCard sty={sty=="dashboard"?sty:"multi"} title="Positive" value="85" unit="%" />
                </div>
            </CardContent>
        </Card>
    )
}

export default MultiStaticCard;