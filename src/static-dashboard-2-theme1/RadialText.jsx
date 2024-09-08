"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"


export default function RadialText(props) {
    const {theme, setTheme, currentTheme, setCurrentTheme} = props;
    const chartData = [
        { browser: "safari", visitors: 2.8, fill: "var(--color-safari)" },
      ]
      
      const chartConfig = {
        visitors: {
          label: "Visitors",
        },
        safari: {
          label: "Safari",
          color: theme.phising_test[currentTheme][0]
        },
      }
  return (
    <Card className="flex flex-col w-[16rem] h-[14rem]">
      <CardHeader className="pt-3 pb-0">
        <CardTitle className="text-xl">Operational Excellence</CardTitle>
        <CardDescription className="text-[0.8rem]">Measured Index</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[10rem]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={"100%"}
            outerRadius={"60%"}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[65, 53]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          (Scale out of 5)
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
