import MetricCard from "./MetricCard";
import "../../Styles/Cards/multiCard.css";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const MultiCard = ({sty}) =>{
    console.log("multi sty", sty)
    return(
        <Card>
            <CardHeader>
                <CardTitle className="mr-auto">Sales Report</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="dropArea-outer-div">
                    <MetricCard sty={sty=="dashboard"?sty:"multi"} title="Total Sales" value="1,234" unit="USD" />
                    <MetricCard sty={sty=="dashboard"?sty:"multi"} title="Total Sales" value="1,234" unit="USD" />
                    <MetricCard sty={sty=="dashboard"?sty:"multi"} title="Total Sales" value="1,234" unit="USD" />
                </div>
            </CardContent>
        </Card>
    )
}

export default MultiCard;