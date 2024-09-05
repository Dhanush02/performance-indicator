import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

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
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import ShadBlocks from "./ShadBlocks";
import PieChartStatic from "./PieChartStatic";
import BarChartStatic from "./BarChartStatic";
import RadicalChartStatic from "./RadicalChartStatic";
import MultiCardStatic from "./MultiCardStatic";

const Dashboard1 = () =>{
    return (
        <Card className="w-auto h-auto m-10 bg-[#f1f5f9]">
            <CardContent>
                <div className="grid grid-cols-2 w-full gap-6 p-6">
                <MultiCardStatic></MultiCardStatic>
                                <div>
        <Card
          className="w-[303px] ml-64" x-chunk="charts-01-chunk-5"
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
                <div className="grid grid-cols-2  pl-6 w-full">

      
                <BarChartStatic></BarChartStatic> 
                <PieChartStatic></PieChartStatic>
     
                </div>
                <div className="grid grid-cols-4 ml-6 mt-5">
                <RadicalChartStatic></RadicalChartStatic>
                    <Card
              className="w-[550px] ml-[69px] h-[250px]" x-chunk="charts-01-chunk-0"
            >
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-2xl tabular-nums">
                  Five Year Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                className="h-[170px] m-auto"
                  config={{
                    steps: {
                      label: "Retention Rate",
                      color: "#FFC846",
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
                      fill="#EC8D7A"
                      radius={8}
                      fillOpacity={1}
                      activeBar={<Rectangle fillOpacity={0.8} />}
                    />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={4}
                      
                    />
                    <ChartTooltip
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
                      fill="#800000"
                    >
                    </ReferenceLine>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
                    </div>
                
                
            </CardContent>
        </Card>
    )
}
export default Dashboard1;