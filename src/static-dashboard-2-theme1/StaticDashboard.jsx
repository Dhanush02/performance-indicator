
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
} from "@/components//ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components//ui/chart"
import { Separator } from "@/components//ui/separator"
import { NegativeBarChartStatic } from "./NegativeBarChartStatic"
import RadialText from "./RadialText"
import MultipleBarStatic from "./MultipleBarStatic"
import { StackedBarChartStatic } from "./StackedBarChartStatic"
import MultiCardStatic from "./MultiCardStatic"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import PieChartStatic from "./PieChartStatic"
import MultiTableStatic from "./MultiTableStatic"
import { ArrowUp, Icon, TrendingUp } from "lucide-react"
import { color } from "@amcharts/amcharts5"

export default function StaticDashboard(props) {

  const { theme, setTheme, currentTheme, setCurrentTheme, currentMode, setCurrentMode } = props;

  const renderCustomizedLabel = (props) => {
    const {
      x, y, width, height, value,
    } = props;

    const fireOffset = value.toString().length < 5;
    const offset = fireOffset ? -40 : 5;
    return (
      <text x={x + width - offset} y={y + height - 5} fill={fireOffset ? "#285A64" : "#fff"} textAnchor="end">
        {value}
      </text>
    );
  };
  return (
    <Card className="px-20 pt-20" style={{ backgroundColor: currentMode == "dark" ? "" : "rgb(246 248 248)", borderRadius: "0px" }}>
      <CardContent>
        {/* <div style={{marginTop: "29px"}}>
                <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={currentMode=="light"}
                moonColor="black"
                sunColor="white"
                onChange={()=>{setCurrentMode(currentMode=="dark"?"light":"dark")}}
                size={30}
                />
            </div> */}
        <div className="breadcrumbs text-sm text-center">
          <ul>
            <li><a>Home</a></li>
            <li><a href="/">Technical Services</a></li>
            <li>QTR_TS</li>
          </ul>
        </div>
        {/* First Row */}

        <div class="grid grid-cols-2 gap-4">
          <Card
            className="flex flex-col w-full" x-chunk="charts-01-chunk-1"
          >
            <CardHeader className="pt-3 pb-2">
              <CardTitle className="text-xl">Controllable Cost ($MM)</CardTitle>
            </CardHeader>
            <CardHeader className="flex flex-row border-b pt-0 pb-2 ">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-1 pl-3">
                  <div className="text-xs text-muted-foreground">Actual</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    504
                    <span className="text-sm font-normal text-muted-foreground">

                    </span>
                  </div>
                </div>
                <div className="grid flex-1 auto-rows-min pl-28 gap-0.5">
                  <div className="text-xs text-muted-foreground">Plan</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    500
                    <span className="text-sm font-normal text-muted-foreground">

                    </span>
                  </div>
                </div>

              </div>
            </CardHeader>

            <CardContent className="items-center pt-2">
              <ChartContainer
                config={{
                  Plan: {
                    label: "Plan ",
                    color: theme.inventory_quality[currentTheme][0],
                  },
                  Actual: {
                    label: "Actual ",
                    color: theme.inventory_quality[currentTheme][1]
                  }
                }}
                className="w-full"
              >
                <LineChart
                  accessibilityLayer
                  margin={{
                    left: 14,
                    right: 14,
                    top: 10,
                  }}
                  data={[
                    {
                      date: "2024-01-01",
                      "Plan": 62,
                      "Actual": 34,
                    },
                    {
                      date: "2024-02-02",
                      "Plan": 72,
                      "Actual": 45,
                    },
                    {
                      date: "2024-03-03",
                      "Plan": 35,
                      "Actual": 29,
                    },
                    {
                      date: "2024-04-04",
                      "Plan": 62,
                      "Actual": 30,
                    },
                    {
                      date: "2024-05-05",
                      "Plan": 52,
                      "Actual": 74,
                    },
                    {
                      date: "2024-06-06",
                      "Plan": 62,
                      "Actual": 4,
                    },
                    {
                      date: "2024-07-07",
                      "Plan": 70,
                      "Actual": 54,
                    },
                  ]}

                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="hsl(var(--muted-foreground))"
                    strokeOpacity={0.5}
                  />
                  <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                  <ChartLegend height={"0.5rem"} content={<ChartLegendContent />} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "long",
                      }).slice(0, 3)
                    }}
                  />
                  <Line
                    dataKey="Actual"
                    type="natural"
                    fill={theme.inventory_quality[currentTheme][1]}
                    stroke={theme.inventory_quality[currentTheme][1]}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      fill: theme.inventory_quality[currentTheme][1],
                      stroke: theme.inventory_quality[currentTheme][1],
                      r: 4,
                    }}
                  />

                  <Line
                    dataKey="Plan"
                    type="natural"
                    fill={theme.inventory_quality[currentTheme][0]}
                    stroke={theme.inventory_quality[currentTheme][0]}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      fill: theme.inventory_quality[currentTheme][0],
                      stroke: theme.inventory_quality[currentTheme][0],
                      r: 4,
                    }}
                  />


                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "long",
                          })
                        }}
                      />
                    }
                    cursor={false}
                  />
                </LineChart>
                {/* <LineChart
              style={{position : "relative" , top : "-155px"}}
                accessibilityLayer
                margin={{
                  left: 14,
                  right: 14,
                  top: 10,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    resting: 22,
                  },
                  {
                    date: "2024-02-02",
                    resting: 32,
                  },
                  {
                    date: "2024-03-03",
                    resting: 55,
                  },
                  {
                    date: "2024-04-04",
                    resting: 12,
                  },
                  {
                    date: "2024-05-05",
                    resting: 56,
                  },
                  {
                    date: "2024-06-06",
                    resting: 22,
                  },
                  {
                    date: "2024-07-07",
                    resting: 90,
                  },
                ]}
                
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground))"
                  strokeOpacity={0.5}
                />
                <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
            
                <Line
                  dataKey="resting"
                  type="natural"
                  fill="var(--color-resting)"
                  stroke="var(--color-resting)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    fill: "var(--color-resting)",
                    stroke: "var(--color-resting)",
                    r: 4,
                  }}
                />
                
                 
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "long",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
              </LineChart> */}
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-row border-t h-[3.5rem] p-6">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">This Month</div>
                  <div className="flex items-baseline gap-1 text-xl font-semibold tabular-nums leading-none">
                    150
                    <span className="text-sm font-normal text-muted-foreground">

                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">This Qtr</div>
                  <div className="flex items-baseline gap-1 text-xl font-semibold tabular-nums leading-none">
                    504
                    <span className="text-sm font-normal text-muted-foreground">

                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Var.</div>
                  <div style={{ color: theme.phising_test[currentTheme][0] }} className="flex items-baseline gap-1 text-xl font-semibold tabular-nums leading-none">
                    -5.6
                    <span style={{ color: theme.phising_test[currentTheme][0] }} className="text-sm font-normal text-muted-foreground">
                      %
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][0]} className="size-5">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
          <NegativeBarChartStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </div>

        {/* //* First Row --------------------------------------------------------------- */}
        {/* <div className="flex gap-3 flex-row mt-5 justify-center">
          <div className="flex flex-col">
            <Card
              className="flex flex-col w-[21rem]" x-chunk="charts-01-chunk-1"
            >
              <CardHeader className="pt-3 pb-2">
                <CardTitle className="text-xl">Controllable Cost ($MM)</CardTitle>
              </CardHeader>
              <CardHeader className="flex flex-row border-b pt-0 pb-2 ">
                <div className="flex w-full items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-1 pl-3">
                    <div className="text-xs text-muted-foreground">Actual</div>
                    <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      504
                      <span className="text-sm font-normal text-muted-foreground">

                      </span>
                    </div>
                  </div>
                  <div className="grid flex-1 auto-rows-min pl-28 gap-0.5">
                    <div className="text-xs text-muted-foreground">Plan</div>
                    <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      500
                      <span className="text-sm font-normal text-muted-foreground">

                      </span>
                    </div>
                  </div>

                </div>
              </CardHeader>

              <CardContent className="items-center pt-2">
                <ChartContainer
                  config={{
                    Plan: {
                      label: "Plan ",
                      color: theme.inventory_quality[currentTheme][0],
                    },
                    Actual: {
                      label: "Actual ",
                      color: theme.inventory_quality[currentTheme][1]
                    }
                  }}
                  className="w-full"
                >
                  <LineChart
                    accessibilityLayer
                    margin={{
                      left: 14,
                      right: 14,
                      top: 10,
                    }}
                    data={[
                      {
                        date: "2024-01-01",
                        "Plan": 62,
                        "Actual": 34,
                      },
                      {
                        date: "2024-02-02",
                        "Plan": 72,
                        "Actual": 45,
                      },
                      {
                        date: "2024-03-03",
                        "Plan": 35,
                        "Actual": 29,
                      },
                      {
                        date: "2024-04-04",
                        "Plan": 62,
                        "Actual": 30,
                      },
                      {
                        date: "2024-05-05",
                        "Plan": 52,
                        "Actual": 74,
                      },
                      {
                        date: "2024-06-06",
                        "Plan": 62,
                        "Actual": 4,
                      },
                      {
                        date: "2024-07-07",
                        "Plan": 70,
                        "Actual": 54,
                      },
                    ]}

                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      vertical={false}
                      stroke="hsl(var(--muted-foreground))"
                      strokeOpacity={0.5}
                    />
                    <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                    <ChartLegend height={"0.5rem"} content={<ChartLegendContent />} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "long",
                        }).slice(0, 3)
                      }}
                    />
                    <Line
                      dataKey="Actual"
                      type="natural"
                      fill={theme.inventory_quality[currentTheme][1]}
                      stroke={theme.inventory_quality[currentTheme][1]}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{
                        fill: theme.inventory_quality[currentTheme][1],
                        stroke: theme.inventory_quality[currentTheme][1],
                        r: 4,
                      }}
                    />

                    <Line
                      dataKey="Plan"
                      type="natural"
                      fill={theme.inventory_quality[currentTheme][0]}
                      stroke={theme.inventory_quality[currentTheme][0]}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{
                        fill: theme.inventory_quality[currentTheme][0],
                        stroke: theme.inventory_quality[currentTheme][0],
                        r: 4,
                      }}
                    />


                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          indicator="line"
                          labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                              month: "long",
                            })
                          }}
                        />
                      }
                      cursor={false}
                    />
                  </LineChart>

                </ChartContainer>
              </CardContent>
              <CardFooter className="flex flex-row border-t h-[3.5rem] p-6">
                <div className="flex w-full items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">This Month</div>
                    <div className="flex items-baseline gap-1 text-xl font-semibold tabular-nums leading-none">
                      150
                      <span className="text-sm font-normal text-muted-foreground">

                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">This Qtr</div>
                    <div className="flex items-baseline gap-1 text-xl font-semibold tabular-nums leading-none">
                      504
                      <span className="text-sm font-normal text-muted-foreground">

                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">Var.</div>
                    <div style={{ color: theme.phising_test[currentTheme][0] }} className="flex items-baseline gap-1 text-xl font-semibold tabular-nums leading-none">
                      -5.6
                      <span style={{ color: theme.phising_test[currentTheme][0] }} className="text-sm font-normal text-muted-foreground">
                        %
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][0]} className="size-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="w-[27.2rem]">
            <NegativeBarChartStatic
              theme={theme}
              setTheme={setTheme}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
          </div>
        </div> */}
        {/* //* First Row End ----------------------------------------------------------- */}

        {/* Second Row */}

        {/* //* Second Row --------------------------------------------------------------- */}
        <div class="grid grid-cols-3 gap-4 mt-3">
          <Card className="w-full">
            <CardHeader className="pt-3">
              <CardTitle className="text-left text-xl">
                Expenditure Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardTitle style={{ color: theme.phising_test[currentTheme][1] }} className="text-center text-5xl p-1">70%</CardTitle>
            </CardContent>
            <CardFooter className="flex flex-row border-t p-4 h-[3.5rem]">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-[0.7rem] text-muted-foreground">Last Year</div>
                  <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                    63
                    <span className="text-[0.7rem] font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Plan</div>
                  <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                    72
                    <span className="text-[0.7rem] font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Var.</div>
                  <div style={{ color: theme.phising_test[currentTheme][1] }} className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                    13
                    <span style={{ color: theme.phising_test[currentTheme][1] }} className="text-[0.7rem] font-normal text-muted-foreground">
                      %
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </CardFooter>

          </Card>
          <Card className="w-full">
            <CardHeader className="pt-3">
              <CardTitle className="text-left text-[1.20rem]">
                Project Schedule Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardTitle style={{ color: theme.phising_test[currentTheme][0] }} className="text-center text-5xl p-1]">85%</CardTitle>
            </CardContent>
            <CardFooter className="flex flex-row border-t p-4 h-[3.5rem]">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-[0.7rem] text-muted-foreground">Last Year</div>
                  <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                    63
                    <span className="text-[0.7rem] font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-[0.7rem] text-muted-foreground">Plan</div>
                  <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                    72
                    <span className="text-[0.7rem] font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-[0.7rem] text-muted-foreground">Var.</div>
                  <div style={{ color: theme.phising_test[currentTheme][0] }} className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                    -5.6
                    <span style={{ color: theme.phising_test[currentTheme][0] }} className="text-[0.7rem] font-normal text-muted-foreground">
                      %
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][0]} className="size-5">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </CardFooter>

          </Card>
          <Card className="w-full">
            <CardHeader className="pt-3">
              <CardTitle className="text-left text-xl">
                Alignment to Industry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardTitle style={{ color: theme.phising_test[currentTheme][1] }} className="text-center text-5xl p-1">70%</CardTitle>
            </CardContent>
            <CardFooter className="flex flex-row border-t p-4 h-[3.5rem]">
              <div className="flex flex-col w-full">
                <div className="flex w-full items-center">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Last Year</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      63
                      <span className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Plan</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      72
                      <span className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Var.</div>
                    <div style={{ color: theme.phising_test[currentTheme][1] }} className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      13
                      <span style={{ color: theme.phising_test[currentTheme][1] }} className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>


        {/* <div className="flex flex-row mt-3 gap-3 justify-center">
          <div className="flex flex-col">
            <Card className="w-[15.8rem]">
              <CardHeader className="pt-3">
                <CardTitle className="text-left text-xl">
                  Expenditure Forecast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle style={{ color: theme.phising_test[currentTheme][1] }} className="text-center text-5xl p-1">70%</CardTitle>
              </CardContent>
              <CardFooter className="flex flex-row border-t p-4 h-[3.5rem]">
                <div className="flex w-full items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Last Year</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      63
                      <span className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">Plan</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      72
                      <span className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">Var.</div>
                    <div style={{ color: theme.phising_test[currentTheme][1] }} className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      13
                      <span style={{ color: theme.phising_test[currentTheme][1] }} className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardFooter>

            </Card>
          </div>
          <div className="flex flex-col">
            <Card className="w-[16.5rem]">
              <CardHeader className="pt-3">
                <CardTitle className="text-left text-[1.20rem]">
                  Project Schedule Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle style={{ color: theme.phising_test[currentTheme][0] }} className="text-center text-5xl p-1]">85%</CardTitle>
              </CardContent>
              <CardFooter className="flex flex-row border-t p-4 h-[3.5rem]">
                <div className="flex w-full items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Last Year</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      63
                      <span className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Plan</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      72
                      <span className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-[0.7rem] text-muted-foreground">Var.</div>
                    <div style={{ color: theme.phising_test[currentTheme][0] }} className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      -5.6
                      <span style={{ color: theme.phising_test[currentTheme][0] }} className="text-[0.7rem] font-normal text-muted-foreground">
                        %
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][0]} className="size-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardFooter>

            </Card>
          </div>
          <div className="flex flex-col">
            <Card className="w-[15.8rem]">
              <CardHeader className="pt-3">
                <CardTitle className="text-left text-xl">
                  Alignment to Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle style={{ color: theme.phising_test[currentTheme][1] }} className="text-center text-5xl p-1">70%</CardTitle>
              </CardContent>
              <CardFooter className="flex flex-row border-t p-4 h-[3.5rem]">
                <div className="flex flex-col w-full">
                  <div className="flex w-full items-center">
                    <div className="grid flex-1 auto-rows-min gap-0.5">
                      <div className="text-[0.7rem] text-muted-foreground">Last Year</div>
                      <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                        63
                        <span className="text-[0.7rem] font-normal text-muted-foreground">
                          %
                        </span>
                      </div>
                    </div>
                    <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                    <div className="grid flex-1 auto-rows-min gap-0.5">
                      <div className="text-[0.7rem] text-muted-foreground">Plan</div>
                      <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                        72
                        <span className="text-[0.7rem] font-normal text-muted-foreground">
                          %
                        </span>
                      </div>
                    </div>
                    <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                    <div className="grid flex-1 auto-rows-min gap-0.5">
                      <div className="text-[0.7rem] text-muted-foreground">Var.</div>
                      <div style={{ color: theme.phising_test[currentTheme][1] }} className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                        13
                        <span style={{ color: theme.phising_test[currentTheme][1] }} className="text-[0.7rem] font-normal text-muted-foreground">
                          %
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div> */}

        {/* //* Second Row End ----------------------------------------------------------- */}

        {/* //* Trird Row Start ----------------------------------------------------------- */}

        <div class="grid grid-cols-3 gap-4 mt-3">
          <div className="">
            <RadialText
              theme={theme}
              setTheme={setTheme}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <div className="mt-3">
              <MultipleBarStatic
                theme={theme}
                setTheme={setTheme}
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
            </div>
          </div>
          <div class="col-span-2">
            <MultiTableStatic
              theme={theme}
              setTheme={setTheme}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
          </div>
          {/* </div> */}
          {/* <MultiTableStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          /> */}
        </div>

        {/* //* Trird Row End ----------------------------------------------------------- */}

        {/* Third Row */}
        {/* <div className="flex flex-row gap-3 mt-3 justify-center">
          <div className="flex flex-col gap-3">
            <RadialText
              theme={theme}
              setTheme={setTheme}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <MultipleBarStatic
              theme={theme}
              setTheme={setTheme}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
          </div>
          <MultiTableStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </div> */}

        {/* Fourth Row  */}
        <div className="grid grid-cols-2 gap-4 mt-3">
          <MultiCardStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <Card
            className="w-full" x-chunk="charts-01-chunk-4"
          >
            <CardHeader className="pt-3" style={{ marginBottom: "0px", paddingBottom: "0px" }}>
              <CardTitle className="text-xl">
                <div className="flex flex-row">
                  Phising Test
                </div>
              </CardTitle>
              <CardDescription className="text-[0.8rem]">January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 p-4 pb-2">
              <ChartContainer
                config={{
                  move: {
                    label: "Positive",
                    color: theme.phising_test[currentTheme][0],
                  },
                  stand: {
                    label: "Neutral",
                    color: theme.phising_test[currentTheme][1],
                  },
                  exercise: {
                    label: "Negative",
                    color: theme.phising_test[currentTheme][2],
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
                      activity: "Positive",
                      value: (30 / 100) * 100,
                      label: "60",
                      fill: "var(--color-stand)",
                    },
                    {
                      activity: "Neutral",
                      value: (40 / 100) * 100,
                      label: "80",
                      fill: "var(--color-exercise)",
                    },
                    {
                      activity: "Negative",
                      value: (30 / 100) * 100,
                      label: "60",
                      fill: "var(--color-move)",
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
                      position="insideRight"
                      dataKey="label"
                      fill="#fafafa"
                      offset={8}
                      fontSize={12}
                    />

                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-row border-t p-4 h-[3.6rem]">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Positive</div>
                  <div style={{ color: theme.phising_test[currentTheme][1] }} className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    30
                    <span style={{ color: theme.phising_test[currentTheme][1] }} className="text-sm font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Neutral</div>
                  <div style={{ color: theme.phising_test[currentTheme][2] }} className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    40
                    <span style={{ color: theme.phising_test[currentTheme][2] }} className="text-sm font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Negative</div>
                  <div style={{ color: theme.phising_test[currentTheme][0] }} className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    30
                    <span style={{ color: theme.phising_test[currentTheme][0] }} className="text-sm font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        {/* <div className="flex flex-row gap-3 mt-3 justify-center">

          <MultiCardStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />


          <div className="flex flex-col gap-4">
            <Card
              className="w-[29rem]" x-chunk="charts-01-chunk-4"
            >
              <CardHeader className="pt-3" style={{ marginBottom: "0px", paddingBottom: "0px" }}>
                <CardTitle className="text-xl">
                  <div className="flex flex-row">
                    Phising Test
                  </div>
                </CardTitle>
                <CardDescription className="text-[0.8rem]">January - June 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4 p-4 pb-2">
                <ChartContainer
                  config={{
                    move: {
                      label: "Positive",
                      color: theme.phising_test[currentTheme][0],
                    },
                    stand: {
                      label: "Neutral",
                      color: theme.phising_test[currentTheme][1],
                    },
                    exercise: {
                      label: "Negative",
                      color: theme.phising_test[currentTheme][2],
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
                        activity: "Positive",
                        value: (30 / 100) * 100,
                        label: "60",
                        fill: "var(--color-stand)",
                      },
                      {
                        activity: "Neutral",
                        value: (40 / 100) * 100,
                        label: "80",
                        fill: "var(--color-exercise)",
                      },
                      {
                        activity: "Negative",
                        value: (30 / 100) * 100,
                        label: "60",
                        fill: "var(--color-move)",
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
                        position="insideRight"
                        dataKey="label"
                        fill="#fafafa"
                        offset={8}
                        fontSize={12}
                      />

                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex flex-row border-t p-4 h-[3.6rem]">
                <div className="flex w-full items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">Positive</div>
                    <div style={{ color: theme.phising_test[currentTheme][1] }} className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      30
                      <span style={{ color: theme.phising_test[currentTheme][1] }} className="text-sm font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">Neutral</div>
                    <div style={{ color: theme.phising_test[currentTheme][2] }} className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      40
                      <span style={{ color: theme.phising_test[currentTheme][2] }} className="text-sm font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-xs text-muted-foreground">Negative</div>
                    <div style={{ color: theme.phising_test[currentTheme][0] }} className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      30
                      <span style={{ color: theme.phising_test[currentTheme][0] }} className="text-sm font-normal text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div> */}

        {/* Fifth Row  */}
        <div className="grid grid-cols-3 gap-4 mt-3">
          <PieChartStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <Card
            className="w-full" x-chunk="charts-01-chunk-0"
          >
            <CardHeader className="space-y-0 pt-3">
              <CardTitle className="text-xl">Top Performers Retention</CardTitle>
              <CardTitle style={{ color: theme.phising_test[currentTheme][1] }} className="text-2xl pt-1 tabular-nums">
                98.7%{" "}
                <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">

                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  steps: {
                    label: "Total Retention",
                    color: theme.performers_retention[currentTheme],
                  },
                }}
                className="h-[15rem] w-full"
              >
                <BarChart
                  accessibilityLayer
                  margin={{
                    left: -4,
                    right: -4,
                  }}
                  data={[
                    {
                      date: "2020",
                      steps: 60,
                    },
                    {
                      date: "2021",
                      steps: 83,
                    },
                    {
                      date: "2022",
                      steps: 60,
                    },
                    {
                      date: "2023",
                      steps: 85,
                    },
                    {
                      date: "2024",
                      steps: 98.7,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="var(--color-steps)"
                    radius={5}
                    fillOpacity={0.8}
                    activeBar={<Rectangle fillOpacity={1} />}
                  />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={4}
                  />
                  <YAxis width={40} tickFormatter={(value) => value + "%"}></YAxis>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        hideIndicator
                        tickFormatter={(value) => value + "%"}
                      />
                    }
                    cursor={false}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1">
              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                Retention is increased by 13.7% <TrendingUp className="h-4 w-4" />
              </div>
              <CardDescription className="text-xs">
                Seperated Employees{" "}
                <span className="font-medium text-sm text-foreground">13</span>
                {" "} out of {" "}
                <span className="font-medium text-sm text-foreground">2,412</span>
              </CardDescription>

            </CardFooter>
          </Card>
          <StackedBarChartStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </div>
        {/* <div className="flex flex-row gap-3 mt-3 justify-center">
          <PieChartStatic
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <Card
            className="w-[17rem]" x-chunk="charts-01-chunk-0"
          >
            <CardHeader className="space-y-0 pt-3">
              <CardTitle className="text-xl">Top Performers Retention</CardTitle>
              <CardTitle style={{ color: theme.phising_test[currentTheme][1] }} className="text-2xl pt-1 tabular-nums">
                98.7%{" "}
                <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">

                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  steps: {
                    label: "Total Retention",
                    color: theme.performers_retention[currentTheme],
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
                      date: "2020",
                      steps: 60,
                    },
                    {
                      date: "2021",
                      steps: 83,
                    },
                    {
                      date: "2022",
                      steps: 60,
                    },
                    {
                      date: "2023",
                      steps: 85,
                    },
                    {
                      date: "2024",
                      steps: 98.7,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="var(--color-steps)"
                    radius={5}
                    fillOpacity={0.8}
                    activeBar={<Rectangle fillOpacity={1} />}
                  />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={4}
                  />
                  <YAxis width={40} tickFormatter={(value) => value + "%"}></YAxis>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        hideIndicator
                        tickFormatter={(value) => value + "%"}
                      />
                    }
                    cursor={false}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1">
              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                Retention is increased by 13.7% <TrendingUp className="h-4 w-4" />
              </div>
              <CardDescription className="text-xs">
                Seperated Employees{" "}
                <span className="font-medium text-sm text-foreground">13</span>
                {" "} out of {" "}
                <span className="font-medium text-sm text-foreground">2,412</span>
              </CardDescription>

            </CardFooter>
          </Card>
          <div className="flex flex-col">
            <StackedBarChartStatic
              theme={theme}
              setTheme={setTheme}
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
          </div>
        </div> */}
      </CardContent>
    </Card>
  )
}
