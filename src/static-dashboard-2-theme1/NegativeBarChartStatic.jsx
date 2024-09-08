import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ReferenceLine, XAxis, YAxis } from "recharts"

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
const chartData = [
  { month: "Material", visitors: -186 },
  { month: "Labor", visitors: 205 },
  { month: "Services", visitors: -207 },
  { month: "Support Services", visitors: 173 },
  { month: "Total", visitors: 209 },
]
const data = [
  { 
     name: "Material", 
     uv: 420, // uv is the part of the graph we want to show
     pv: 0 // pv is the floating part (transparent)
  },
  {
     name: "Labor", 
     uv: 210, 
     pv: 420 // to get this pv, we use 01/2020's uv + pv
  },
  {
     name: "Services",
     uv: -170,
     pv: 630 // use 02/2020's uv + pv, and so forth
  },
  { name: "Support Services", uv: -140, pv: 460 },
  { name: "Total", uv: 320, pv: 0 }
];
const chartConfig = {
  visitors: {
    label: "Controllable Cost",
  },
}
const labelFormatter = (value) => {
  return '$' + value + 'K';
};

export function NegativeBarChartStatic(props) {
    const {theme, setTheme, currentTheme, setCurrentTheme} = props;
  return (
    <Card>
      <CardHeader className="pt-3 pb-[1.125rem]">
        <CardTitle className="text-xl pb-2">Direct Controllable Cost ($MM)</CardTitle>
        {/* <CardDescription className="text-[0.8rem] pt-0 pb-0">(In $MM)</CardDescription> */}
      </CardHeader>
      <CardContent className="" >
        <ChartContainer className="" config={chartConfig}>
            
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <ReferenceLine
                  y={420}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                ></ReferenceLine>
                <YAxis width={35} tickCount={5} tickFormatter={(value) => value+"K"}>

                </YAxis>
            
            <XAxis dataKey={"name"} tickFormatter={(value) => value.slice(0,8)}></XAxis>
            <Bar dataKey="pv" stackId="a" fill="transparent" >
            <LabelList
                    position="insideRight"
                    dataKey="label"
                    fill="#fafafa"
                    offset={8}
                    fontSize={12}
                  />
              </Bar>
            <Bar dataKey="uv" stackId="a" fill="#82ca9d">
              {data.map((item, index) => {
                  if (item.uv < 0) return <Cell key={index} fill={theme.phising_test[currentTheme][0]} />;
                  if (item.name === "Total") return <Cell key={index} fill={theme.phising_test[currentTheme][2]} />;
                  return <Cell key={index} fill={theme.phising_test[currentTheme][1]} />;
              })}
              <LabelList
                    dataKey="uv"
                    fill="#fafafa"
                    offset={8}
                    fontSize={10}
                    formatter={labelFormatter}
                  />
            </Bar>
            {/* <Bar dataKey="visitors">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={
                    item.visitors > 0
                      ? theme.direct_controllable_cost[currentTheme][0]
                      : theme.direct_controllable_cost[currentTheme][1]
                  }
                />
              ))}
            </Bar> */}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
      <div className="flex items-center mt-0 text-base font-medium leading-none">
          Total Direct Controllable Cost is $320K <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
