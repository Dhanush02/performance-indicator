"use client"

import { TrendingUp } from "lucide-react"
import { Label, LabelList, Legend, Pie, PieChart } from "recharts"

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
import customPieLegend from "./customPieLegend"
import MultilineLabel from "@/utils/MultilineLabel"

export const description = "A pie chart with a label"
export default function PieChartStatic(props) {
    const {theme, setTheme, currentTheme, setCurrentTheme} = props;
    let renderLabel = function(entry) {
        return entry.month.slice(0,7)+"...";
    }
    const desktopData = [
            { id: "Product1", month: "Enginnering Services", desktop: 186, fill: theme.patents[currentTheme][0] },
            { id: "Product2", month: "Procurement & Supply Chain Management", desktop: 305, fill: theme.patents[currentTheme][1] },
            { id: "Product3", month: "Upstream Project Management", desktop: 237, fill: theme.patents[currentTheme][2] },
            { id: "Product4", month: "Downstream Project Management", desktop: 178, fill: theme.patents[currentTheme][3] },
            { id: "Product5", month: "Infrastructure Project Management", desktop: 219, fill: theme.patents[currentTheme][4] },
          ]
          
          const chartConfig = {
            visitors: {
              label: "Visitors",
            },
            desktop: {
              label: "Desktop",
            },
            mobile: {
              label: "Mobile",
            },
            Product1: {
              label: "Enginnering Services",
              color: theme.patents[currentTheme][0],
            },
            Product2: {
              label: "Procurement & Supply Chain Management",
              color: theme.patents[currentTheme][1],
            },
            Product3: {
              label: "Upstream Project Management",
              color: theme.patents[currentTheme][2],
            },
            Product4: {
              label: "Downstream Project Management",
              color: theme.patents[currentTheme][3],
            },
            Product5: {
              label: "Infrastructure Project Management",
              color: theme.patents[currentTheme][4],
            },
          }
  return (
    <Card className="flex flex-col">
      <CardHeader className=" pb-0">
        <CardTitle>Patents Granted</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart >
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            {/* label={renderLabel} */}
            <Pie innerRadius={"30%"} outerRadius={"50%"} data={desktopData} dataKey="desktop" label nameKey="month" >
            <LabelList
                dataKey="id"
                content={<MultilineLabel/>}
              />
            <Label
                content={({ viewBox }) => {
                  if (true) {
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
                          className="fill-foreground text-2xl font-bold"
                        >
                          {desktopData.map(e=>e.desktop).reduce((a,b)=>(a+b))}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground" 
                        >
                          Patents
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
</Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total Patents: 1125
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total patents received this year
        </div>
      </CardFooter>
    </Card>
  )
}

// "use client"

// import * as React from "react"
// import { Label, Pie, PieChart, Sector } from "recharts"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartContainer,
//   ChartStyle,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";


// export default function PieChartStatic(props) {
//   const {theme, setTheme, currentTheme, setCurrentTheme} = props;
//   const id = "pie-interactive"
  
// const desktopData = [
//   { month: "Product1", desktop: 186, fill: "var(--color-Product1)" },
//   { month: "Product2", desktop: 305, fill: "var(--color-Product2)" },
//   { month: "Product3", desktop: 237, fill: "var(--color-Product3)" },
//   { month: "Product4", desktop: 173, fill: "var(--color-Product4)" },
//   { month: "Product5", desktop: 209, fill: "var(--color-Product5)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   desktop: {
//     label: "Desktop",
//   },
//   mobile: {
//     label: "Mobile",
//   },
//   Product1: {
//     label: "Enginnering Services",
//     color: theme.patents[currentTheme][0] ,
//   },
//   Product2: {
//     label: "Procurement & Supply Chain Management",
//     color: theme.patents[currentTheme][1],
//   },
//   Product3: {
//     label: "Upstream Project Management",
//     color: theme.patents[currentTheme][2],
//   },
//   Product4: {
//     label: "Downstream Project Management",
//     color: theme.patents[currentTheme][3],
//   },
//   Product5: {
//     label: "Infrastructure Project Management",
//     color: theme.patents[currentTheme][4],
//   },
// }
//   const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month)
//   const activeIndex = React.useMemo(
//     () => desktopData.findIndex((item) => item.month === activeMonth),
//     [activeMonth]
//   )
//   const months = React.useMemo(() => desktopData.map((item) => item.month), [])

//   return (
//     <Card data-chart={id} className="flex flex-col ">
//       <ChartStyle id={id} config={chartConfig} />
//       <CardHeader className="flex-row items-start space-y-0 pb-0">
//         <div className="grid gap-1">
//           <CardTitle>Patents Granted</CardTitle>
//         </div>
        
//       </CardHeader>
//       <CardHeader>
//       <Select value={activeMonth} onValueChange={setActiveMonth}>
//           <SelectTrigger
//             className="mr-auto h-7 w-auto rounded-lg pl-2.5"
//             aria-label="Select a value"
//           >
//             <SelectValue placeholder="Select month" />
//           </SelectTrigger>
//           <SelectContent align="end" className="rounded-xl">
//             {months.map((key) => {
//               const config = chartConfig[key]

//               if (!config) {
//                 return null
//               }

//               return (
//                 <SelectItem
//                   key={key}
//                   value={key}
//                   className="rounded-lg [&_span]:flex"
//                 >
//                   <div className="flex items-center gap-2 text-xs">
//                     <span
//                       className="flex h-3 w-3 shrink-0 rounded-sm"
//                       style={{
//                         backgroundColor: `var(--color-${key})`,
//                       }}
//                     />
//                     {config?.label}
//                   </div>
//                 </SelectItem>
//               )
//             })}
//           </SelectContent>
//         </Select>
//       </CardHeader>
//       <CardContent className="flex flex-1 justify-center pb-0">
//         <ChartContainer
//           id={id}
//           config={chartConfig}
//           className="mx-auto aspect-square w-full h-[250px] max-w-[300px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={desktopData}
//               dataKey="desktop"
//               nameKey="month"
//               innerRadius={60}
//               strokeWidth={5}
//               activeIndex={activeIndex}
//               activeShape={({
//                 outerRadius = 0,
//                 ...props
//               }) => (
//                 <g>
//                   <Sector {...props} outerRadius={outerRadius + 10} />
//                   <Sector
//                     {...props}
//                     outerRadius={outerRadius + 25}
//                     innerRadius={outerRadius + 12}
//                   />
//                 </g>
//               )}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-3xl font-bold"
//                         >
//                           {desktopData[activeIndex].desktop.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >
//                           Patents 
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Total Patents: 1125
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total patents received this year
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }
