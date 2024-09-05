"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

export default function ShadBlocks() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card
          className="lg:max-w-md" x-chunk="charts-01-chunk-0"
        >
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-2xl tabular-nums">
              Five Year Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                steps: {
                  label: "Retention Rate",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2016",
                    steps: 120,
                  },
                  {
                    date: "2017",
                    steps: 120,
                  },
                  {
                    date: "2018",
                    steps: 152,
                  },
                  {
                    date: "2019",
                    steps: 150,
                  },
                  {
                    date: "2020",
                    steps: 120,
                  }
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="#00A3E0"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={121}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
       
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        
        {/* <Card
          className="max-w-xs" x-chunk="charts-01-chunk-4"
        >
            <CardHeader className="p-4 pb-0">
                <CardTitle>Phising Test</CardTitle>
            </CardHeader>
          <CardContent className="flex gap-4 p-4 pb-2">
            <ChartContainer
              config={{
                move: {
                  label: "Negative",
                  color: "hsl(var(--chart-1))",
                },
                stand: {
                  label: "Neutral",
                  color: "hsl(var(--chart-2))",
                },
                exercise: {
                  label: "Positive",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  
                    {
                        activity: "positive",
                        value: (70 / 100) * 100,
                        label: "",
                        fill: "#83BD01",
                      },
                  {
                    activity: "neutral",
                    value: (20 / 100) * 100,
                    label: "",
                    fill: "#FFC846",
                  },
                  {
                    activity: "negative",
                    value: (10 / 100) * 100,
                    label: "",
                    fill: "#F05F41",
                  },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="activity"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-4">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs font-bold text-[#000] text-muted-foreground">Positive</div>
                <div className="flex text-[#83BD01] items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  70
                  <span className="text-sm text-[#83BD01] font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">Neutral</div>
                <div className="flex items-baseline text-[#FFC846] gap-1 text-2xl font-bold tabular-nums leading-none">
                  20
                  <span className="text-sm font-normal text-[#FFC846] text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">Negative</div>
                <div className="flex items-baseline text-[#F05F41] gap-1 text-2xl font-bold tabular-nums leading-none">
                  10
                  <span className="text-sm text-[#F05F41] font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card> */}
      </div>
      <div className="grid w-full flex-1 gap-6">
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-5"
        >
            <CardHeader>
                <CardTitle>
                    Phising Test
                </CardTitle>
            </CardHeader>
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm font-bold text-muted-foreground">Positive</div>
                <div className="flex items-baseline text-[#83BD01] gap-1 text-3xl font-bold tabular-nums leading-none">
                  55
                  <span className="text-sm text-[#83BD01] font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm font-bold text-muted-foreground">Neutral</div>
                <div className="flex items-baseline text-[#FFC846] gap-1 text-3xl font-bold tabular-nums leading-none">
                  25
                  <span className="text-sm font-normal text-[#FFC846] text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm font-bold text-muted-foreground">Negative</div>
                <div className="flex items-baseline gap-1 text-[#F05F41] text-3xl font-bold tabular-nums leading-none">
                  20
                  <span className="text-sm font-normal text-[#F05F41] text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              
            </div>
            
            <ChartContainer
              config={{
                move: {
                  label: "Positive",
                  color: "hsl(var(--chart-1))",
                },
                exercise: {
                  label: "Neutral",
                  color: "hsl(var(--chart-2))",
                },
                stand: {
                  label: "Negative",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[80%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    activity: "negative",
                    value: (20 / 100) * 100,
                    fill: "#F05F41",
                  },
                  {
                    activity: "neutral",
                    value: (25 / 100) * 100,
                    fill: "#FFC846",
                  },
                  {
                    activity: "positive",
                    value: (55 / 100) * 100,
                    fill: "#83BD01",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
