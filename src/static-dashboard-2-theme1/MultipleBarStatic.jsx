"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Legend } from "@amcharts/amcharts5"


export default function MultipleBarStatic(props) {
    const {theme, setTheme, currentTheme, setCurrentTheme} = props;
    const chartData = [
        { month: "Projects", desktop: 200, mobile: 300 },
        { month: "Drilling", desktop: 125, mobile: 200 },
      ]
      
      const chartConfig = {
        desktop: {
          label: "Planned",
          color: theme.inventory_quality[currentTheme][0],
        },
        mobile: {
          label: "Actual",
          color: theme.inventory_quality[currentTheme][1],
        },
      }
  return (
      <Card className="w-full">
      <CardHeader className="pt-3">
        <CardTitle className="text-xl">Inventory Quality</CardTitle>
        <CardDescription className="text-[0.8rem]">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[15rem] w-full" config={chartConfig}>
          <BarChart layout="horizontal" barSize={30} barGap={4} accessibilityLayer data={chartData} 
               >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
            //   tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <YAxis width={25}></YAxis>
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
