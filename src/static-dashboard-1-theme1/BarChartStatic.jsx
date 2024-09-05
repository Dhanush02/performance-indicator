"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
const chartData = [
  { month: "IKTVA", desktop: 186, mobile: 80 },
  { month: "Energy Intensity", desktop: 305, mobile: 200 },
  { month: "IYUVA", desktop: 237, mobile: 120 },
  { month: "R&D", desktop: 73, mobile: 190 },
  { month: "AEC", desktop: 209, mobile: 130 },
]

const chartConfig = {
  desktop: {
    label: "Resource Efficienty",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Energy Consumption",
    color: "hsl(var(--chart-2))",
  },
}

export default function BarChartStatic() {
  return (
    <Card className="w-[650px] h-[300px]">
      <CardHeader>
        <CardTitle>Business Sustainability</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[220px] m-auto">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="#00A3E0"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="#83BD01"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
