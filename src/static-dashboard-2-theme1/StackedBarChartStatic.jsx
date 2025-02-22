import { Flower, TrendingUp } from "lucide-react"
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


export function StackedBarChartStatic(props) {
    const {theme, setTheme, currentTheme, setCurrentTheme} = props;
    const chartData = [
        { indicator: "IKTVA", actual: 186, planned: 80 },
        { indicator: "Energy Intensity", actual: 305, planned: 200 },
      ]
      
      const chartConfig = {
        actual: {
          label: "Actual",
          color: theme.inventory_quality[currentTheme][1],
        },
        planned: {
          label: "Planned",
          color: theme.inventory_quality[currentTheme][0],
        },
      }
  return (
    <Card className="w-full">
      <CardHeader className="pt-3">
        <CardTitle className="text-xl">
          <div className="flex flex-row">
            
          Business Sustainablity
          {/* <Flower/> */}
          </div>
          </CardTitle>
        <CardDescription className="text-[0.8rem]">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[15rem] w-full" config={chartConfig}>
          <BarChart margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom:0,
                }} accessibilityLayer 
                height={"15px"}
                layout="vertical" data={chartData}>
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis type="number" className="mt-2" dataKey="actual" />
            <YAxis
                  dataKey="indicator"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  minTickGap={4}
                  axisLine={false}
                />
            {/* <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            
            <Bar dataKey="actual" fill="var(--color-actual)" barSize={12} radius={4} />
            <Bar dataKey="planned" fill="var(--color-planned)" barSize={12} radius={4} />
          </BarChart>
        </ChartContainer>
    
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-1">
          <div className="flex items-center gap-2 font-medium leading-none">
          Actual is increased by 13.7% <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter> */}
    </Card>
  )
}
