import React, { useState } from 'react';
import '../Styles/performanceMetriCustomPaner.css'

import {
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ReferenceLine,
    XAxis,
    YAxis,
    Bar, Cell, LabelList,
    RadialBarChart,
    PolarRadiusAxis,
    RadialBar,
    PolarGrid,
    Label,
    PieChart,
    Pie,
    Rectangle,
} from "recharts"

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components//ui/chart"
import { Badge } from '@/components/ui/badge';
import { Check, Dock, TrendingDown, TrendingUp, TriangleAlert } from 'lucide-react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import GaugeCharts1 from '@/utils/GuageCharts1';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Separator } from '@/components/ui/separator';
import MultilineLabel from '@/utils/MultilineLabel';

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

const PerformanceDashboardCustomPanel = (props) => {
    const { theme, setTheme, currentTheme, setCurrentTheme, currentMode, setCurrentMode } = props;

    const chartData = [
        { browser: "safari", visitors: 2.8, fill: "var(--color-safari)" },
    ]

    const chartConfigGuage = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: theme.phising_test[currentTheme][0]
        },
    }

    const invoices = [
        {
            yearActual: "84",
            name: "Project Cost Compliance",
            actual: "92",
            plan: "90",
            variance: "0.6",
            status: "Reject",
        },
        {
            yearActual: "90",
            name: "Project Quality Index",
            actual: "92",
            plan: "108",
            variance: "0.4",
            status: "Success",
        },
        {
            yearActual: "63",
            name: "Project Contracts Cycle-Time",
            actual: "92",
            plan: "87",
            variance: "0.8",
            status: "Reject",
        },
        {
            yearActual: "94",
            name: "Operation Contracts Cycle-Time",
            actual: "0.2",
            plan: "45",
            variance: "0.3",
            status: "Success",
        }
    ]

    const chartDataBar = [
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

    const desktopData = [
        { id: "Product1", month: "Enginnering Services", desktop: 186, fill: theme.patents[currentTheme][0] },
        { id: "Product2", month: "Procurement & Supply Chain Management", desktop: 305, fill: theme.patents[currentTheme][1] },
        { id: "Product3", month: "Upstream Project Management", desktop: 237, fill: theme.patents[currentTheme][2] },
        { id: "Product4", month: "Downstream Project Management", desktop: 178, fill: theme.patents[currentTheme][3] },
        { id: "Product5", month: "Infrastructure Project Management", desktop: 219, fill: theme.patents[currentTheme][4] },
    ]

    const chartConfigPie = {
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

    const chartDataFinal = [
        { indicator: "IKTVA", actual: 186, planned: 80 },
        { indicator: "Energy Intensity", actual: 305, planned: 200 },
    ]

    const chartConfigFinal = {
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
        <React.Fragment>
            <div className="container px-20 py-5 mt-12" style={{ background: '#f7f9fb' }}>
                <div className='flex flex-row items-center justify-between mb-3'>
                    <div>
                        <div className="text-sm text-center breadcrumbs">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a href="/">Technical Services</a></li>
                                <li>QTR_TS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <Select>
                            <SelectTrigger className="w-[250px] h-[30px] mr-3" style={{ border: '1px solid #ccc' }}>
                                <SelectValue placeholder="Organization" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Org</SelectLabel>
                                    <SelectItem value="positive">Organisation 1</SelectItem>
                                    <SelectItem value="negative">Organisation 2</SelectItem>
                                    <SelectItem value="neutral">Organisation 3</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <input placeholder='Choose Year' type="month" style={{ border: '1px solid #ccc', borderRadius: '6px' }} className='px-3' />
                    </div>
                </div>
                {/* Category 1 */}
                <div className="grid grid-cols-2 gap-4">
                    <div class="performance-card p-5">
                        <div className='perfomance-card-header flex flex-col pb-2' style={{ borderBottom: '1px solid #fff' }}>
                            <span className='controllable-cost-text'>Controllable Cost</span>
                            <div className='flex flex-row items-center'>
                                <Badge>Finance</Badge>
                                <span className='process-desc px-2'>Expenses directly influenced by management and operational decisions.</span>
                            </div>
                        </div>
                        <div className='controllable-chart pb-3'>
                            <div className='flex flex-row'>
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
                                    className="w-[60%] h-[250px]"
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
                                <div className='controllable-highlight flex flex-col items-center justify-center h-[250px] w-[40%]'>
                                    <div className='flex flex-col items-center'>
                                        <span className='control-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>$MM504</span>
                                        <span className='control-this'>This Quater</span>
                                    </div>
                                    <div className='flex flex-col items-center py-2'>
                                        <span className='control-this-quater' style={{ color: theme.inventory_quality[currentTheme][1] }}>$MM104</span>
                                        <span className='control-this'>This Quater</span>
                                    </div>
                                    <div className='flex flex-row py-2 gap-6'>
                                        <div className="control-current flex flex-col">
                                            <span className='control-this'>Plan</span>
                                            <span className='control-this-quater'>500</span>
                                        </div>
                                        <div className='flex flex-row items-center gap-8'>
                                            <span className='control-curr-percent flex items-center justify-center'>5.6%</span>
                                            <TrendingDown style={{ color: 'red' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="performance-card p-5">
                        <div className='perfomance-card-header flex flex-col pb-3' style={{ borderBottom: '1px solid #ccc' }}>
                            <div className='flex flex-row items-center justify-between'>
                                <div>
                                    <span className='controllable-cost-text'>Direct Controllable Cost </span>
                                    <div className='flex flex-row items-center'>
                                        <Badge>Finance</Badge>
                                        <span className='process-desc px-2'>Managed directly by a specific department's actions.</span>
                                    </div>
                                </div>
                                <Select>
                                    <SelectTrigger className="w-[150px] h-[30px]" style={{ border: '1px solid #ccc' }}>
                                        <SelectValue placeholder="Range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select range</SelectLabel>
                                            <SelectItem value="Less than $500">Less than $500K</SelectItem>
                                            <SelectItem value="$500 - $1,000">$500 - $1,000</SelectItem>
                                            <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                                            <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                                            <SelectItem value="Greater than $10,000">Greater than $10,000</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>

                        </div>
                        <ChartContainer className="h-[250px] w-full pt-5" config={chartConfig}>
                            <BarChart accessibilityLayer data={data} barSize={70}>
                                <CartesianGrid vertical={false} />
                                <ReferenceLine
                                    y={420}
                                    stroke="hsl(var(--muted-foreground))"
                                    strokeDasharray="3 3"
                                    strokeWidth={1}
                                ></ReferenceLine>
                                <YAxis width={35} tickCount={6} tickFormatter={(value) => value + "K"}>
                                </YAxis>

                                <XAxis dataKey={"name"} tickFormatter={(value) => value.slice(0, 8)}></XAxis>
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

                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
                {/* End of Category 1 */}

                {/* Category 2 */}
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className='finance-cards p-5 flex flex-col'>
                        <div className='perfomance-card-header flex flex-row items-center justify-between pb-2 w-full' style={{ borderBottom: '1px solid #ccc' }}>
                            <span className='controllable-cost-text1'>Expenditure Forcast</span>
                            <Badge>Operation</Badge>
                        </div>
                        <div class="percent-overview flex flex-row items-center py-4">
                            <div className='w-[50%]'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col justify-center my-2'>
                                        <span className='percent-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>63%</span>
                                        <span className='control-this'>Last Year</span>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <span className='percent-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>72%</span>
                                        <span className='control-this'>Plan</span>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <span className='control-this'>Var</span>
                                    <span className='flex items-center justify-center' style={{ color: 'green', fontWeight: 500 }}>13.6%</span>
                                    <TrendingUp style={{ color: 'green' }} />
                                </div>
                            </div>
                            <div className='w-[50%] flex items-center justify-center'>
                                <GaugeCharts1 percent={70} strokeColor="#7455EF" backgroundColor="#F1EEFD" />
                                <span className='text-center' style={{ position: 'absolute', color: '#aaa' }}>70 <br />Percent</span>
                            </div>
                        </div>

                    </div>
                    <div className='finance-cards p-5 flex flex-col'>
                        <div className='perfomance-card-header flex flex-row items-center justify-between pb-2 w-full' style={{ borderBottom: '1px solid #ccc' }}>
                            <span className='controllable-cost-text1'>Project Schedule Controls
                            </span>
                            <Badge>Operation</Badge>
                        </div>
                        <div class="percent-overview flex flex-row items-center py-4">
                            <div className='w-[50%]'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col justify-center my-2'>
                                        <span className='percent-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>63%</span>
                                        <span className='control-this'>Last Year</span>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <span className='percent-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>72%</span>
                                        <span className='control-this'>Plan</span>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <span className='control-this'>Var</span>
                                    <span className='flex items-center justify-center' style={{ color: 'red', fontWeight: 500 }}>5.6%</span>
                                    <TrendingDown style={{ color: 'red' }} />
                                </div>
                            </div>
                            <div className='w-[50%] flex items-center justify-center'>
                                <GaugeCharts1 percent={85} strokeColor="#23B681" backgroundColor="#E9F8F2" />
                                <span className='text-center' style={{ position: 'absolute', color: '#aaa' }}>85 <br />Percent</span>
                            </div>
                        </div>

                    </div>
                    <div className='finance-cards p-5 flex flex-col'>
                        <div className='perfomance-card-header flex flex-row items-center justify-between pb-2 w-full' style={{ borderBottom: '1px solid #ccc' }}>
                            <span className='controllable-cost-text1'>Alignment to Industry Standards
                            </span>
                            <Badge>Operation</Badge>
                        </div>
                        <div class="percent-overview flex flex-row items-center py-4">
                            <div className='w-[50%]'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col justify-center my-2'>
                                        <span className='percent-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>70%</span>
                                        <span className='control-this'>Last Year</span>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <span className='percent-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>63%</span>
                                        <span className='control-this'>Plan</span>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <span className='control-this'>Var</span>
                                    <span className='flex items-center justify-center' style={{ color: 'green', fontWeight: 500 }}>13.0</span>
                                    <TrendingUp style={{ color: 'green' }} />
                                </div>
                            </div>
                            <div className='w-[50%] flex items-center justify-center'>
                                <GaugeCharts1 percent={20} strokeColor="#FF9B3D" backgroundColor="#FFF5EC" />
                                <span className='text-center' style={{ position: 'absolute', color: '#aaa' }}>70 <br />Percent</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* End of Category 2 */}

                {/* Category 3 */}
                <div className="grid grid-cols-1 gap-4 mt-5">
                    <div class="flex gap-4">
                        <div class="flex-none w-1/4 operation-cards p-5">
                            <div className='perfomance-card-header flex flex-col  pb-2'>
                                <div className='flex flex-row items-center justify-between'>
                                    <span className='controllable-cost-text1'>Operational Excellence</span>
                                    <Badge className='mt-1' style={{ width: 'fit-content' }}>Org</Badge>
                                </div>
                                <span className='control-this'>Efficiency, quality, improvement.</span>
                            </div>
                            <ChartContainer
                                config={chartConfigGuage}
                                className="mx-auto aspect-square max-h-[10rem] mt-3"
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
                                                            {/* <tspan
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                className="fill-foreground text-2xl font-bold"
                                                            >
                                                                {chartData[0].visitors.toLocaleString()}
                                                            </tspan> */}
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 4}
                                                                className="fill-muted-foreground"
                                                                style={{ fontSize: 14 }}
                                                            >
                                                                Totol Forcast
                                                            </tspan>
                                                        </text>
                                                    )
                                                }
                                            }}
                                        />
                                    </PolarRadiusAxis>
                                </RadialBarChart>
                            </ChartContainer>

                            <div className='flex flex-col items-center pt-4'>
                                <span className='control-this-quater font-bold' style={{ color: 'green', fontSize: '22px' }}>
                                    {chartData[0].visitors.toLocaleString()}
                                </span>
                                <span className='control-this'>(Scale out of 5)</span>
                            </div>
                        </div>
                        <div class="grow operation-cards p-5">
                            <div className='perfomance-card-header flex flex-row items-center justify-between pb-3' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='flex flex-col'>
                                    <span className='controllable-cost-text1'>Project Management & Contracting</span>
                                    <span className='process-desc'>Effective planning, execution, compliance, and stakeholder collaboration.</span>
                                </div>
                                <Badge className='mt-1' style={{ width: 'fit-content' }}>Org</Badge>
                            </div>
                            <Table >
                                <TableHeader>
                                    <TableRow >
                                        <TableHead className="w-[240px]" style={{ fontSize: '12px' }}>Name</TableHead>
                                        <TableHead className="text-center" style={{ fontSize: '12px' }}>Year ~ Actual</TableHead>
                                        <TableHead className="text-center" style={{ fontSize: '12px' }}>Plan</TableHead>
                                        <TableHead className="text-center" style={{ fontSize: '12px' }}>Var. with Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice, i) => (
                                        <TableRow key={i}>
                                            <TableCell>
                                                <div className='flex flex-row'>
                                                    <span class="font-medium" style={{ fontSize: '12px' }}>{invoice.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center" style={{ fontSize: '12px' }}>{invoice.yearActual} - <span className='font-bold'>{invoice.actual}</span></TableCell>
                                            <TableCell className="text-center" style={{ fontSize: '12px' }}>{invoice.plan}</TableCell>
                                            <TableCell className="font-semibold flex justify-center" style={{ fontSize: '12px', color: Number(invoice.variance) > 0.5 ? 'rgba(72, 204, 45, 0.646)' : 'rgba(255, 0, 0, 0.646)' }}><span className='pr-2'>{invoice.variance}</span> {Number(invoice.variance) > 0.5 ? <TrendingUp /> : <TrendingDown />}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div class="flex-none w-1/4 operation-cards p-5">
                            <div className='perfomance-card-header flex flex-col  pb-2'>
                                <div className='flex flex-row items-center justify-between'>
                                    <span className='controllable-cost-text1'>Expenditure Forcast</span>
                                    <Badge className='mt-1' style={{ width: 'fit-content' }}>Org</Badge>
                                </div>
                                <span className='control-this'>Budget prediction analysis</span>
                            </div>

                            <ChartContainer className="h-[80%] w-full pt-3" config={chartConfig}>
                                <BarChart layout="horizontal" barSize={30} barGap={4} accessibilityLayer data={chartDataBar}
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
                            </ChartContainer></div>
                    </div>
                </div>
                {/* End of Category 3 */}

                {/* Category 4 */}
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div className='risk-cards p-5'>
                        <div className='perfomance-card-header flex flex-col pb-2' style={{ borderBottom: '1px solid #fff' }}>
                            <span className='controllable-cost-text'>Environment, Health Safety</span>
                            <div className='flex flex-row items-center'>
                                <Badge>Risk</Badge>
                                <span className='process-desc px-2'>Protecting people, ensuring safety, promoting sustainability</span>
                            </div>
                        </div>
                        <div className='control-success pt-3'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <div className='control-sucess-item flex items-center justify-center'>
                                        <Check style={{ color: 'green' }} />
                                    </div>

                                    <div className="flex h-8 mx-5 items-center space-x-8 text-sm">
                                        <div className='flex flex-col'>
                                            <span className='control-this'>Carbon Intensity</span>
                                            <span className='control-this-quater'>500</span>
                                        </div>
                                        <Separator orientation="vertical" />
                                        <div className='flex flex-col'>
                                            <span className='control-this'>SO2</span>
                                            <span className='control-this-quater'>500</span>
                                        </div>
                                        <Separator orientation="vertical" />
                                        <div className='flex flex-col'>
                                            <span className='control-this'>Fairing Intensity</span>
                                            <span className='control-this-quater'>500</span>
                                        </div>
                                    </div>
                                </div>
                                <Separator className="my-5 flex flex-col" />
                                <div className="flex flex-row">
                                    <div className='control-danger-item flex items-center justify-center'>
                                        <TriangleAlert style={{ color: 'red' }} />
                                    </div>
                                    <div className="flex h-8 mx-5 items-center space-x-8 text-sm">
                                        <div className='flex flex-col'>
                                            <span className='control-this'>TRC</span>
                                            <span className='control-this-quater'>500</span>
                                        </div>
                                        <Separator orientation="vertical" />
                                        <div className='flex flex-col'>
                                            <span className='control-this'>HC Discharge To Marine</span>
                                            <span className='control-this-quater'>500</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='risk-cards p-5'>
                        <div className='perfomance-card-header flex flex-row items-center justify-between pb-3' style={{ borderBottom: '1px solid #ccc' }}>
                            <div>
                                <span className='controllable-cost-text'>Phishing Test</span>
                                <div className='flex flex-row items-center'>
                                    <Badge>Risk</Badge>
                                    <span className='process-desc px-2'>Simulated attacks to enhance awareness</span>
                                </div>
                            </div>
                            <Select>
                                <SelectTrigger className="w-[150px] h-[30px]" style={{ border: '1px solid #ccc' }}>
                                    <SelectValue placeholder="Test Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select Test</SelectLabel>
                                        <SelectItem value="positive">Positive</SelectItem>
                                        <SelectItem value="negative">Negative</SelectItem>
                                        <SelectItem value="neutral">Neutral</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
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
                            className="h-[140px] w-full pt-3"
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
                    </div>
                </div>
                {/* End of Category 4 */}

                {/* Category 5 */}
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className='hr-cards flex flex-col p-5'>
                        <div className='perfomance-card-header flex flex-col pb-3' style={{ borderBottom: '1px solid #ccc' }}>
                            <div className='flex flex-row items-center justify-between'>
                                <div>
                                    <span className='controllable-cost-text1'>Patents Granted</span>
                                    <div className='flex flex-row items-center'>
                                        <Badge>Health</Badge>
                                        {/* <span className='process-desc px-2'>Expenses managed directly by a specific department's actions.</span> */}
                                    </div>
                                </div>
                                <Select>
                                    <SelectTrigger className="w-[150px] h-[30px]" style={{ border: '1px solid #ccc' }}>
                                        <SelectValue placeholder="Patents" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select range</SelectLabel>
                                            <SelectItem value="Less than 500">Less than 500</SelectItem>
                                            <SelectItem value="500 - 1,000">500 - 1,000</SelectItem>
                                            <SelectItem value="1,000 - 5,000">1,000 - 5,000</SelectItem>
                                            <SelectItem value="5,000 - 10,000">5,000 - 10,000</SelectItem>
                                            <SelectItem value="Greater than 10,000">Greater than 10,000</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>

                        </div>
                        <ChartContainer
                            config={chartConfigPie}
                            className="mx-auto aspect-square pb-0 [&_.recharts-pie-label-text]:fill-foreground h-[15rem] w-full"
                        >
                            <PieChart >
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Pie innerRadius={"30%"} outerRadius={"50%"} data={desktopData} dataKey="desktop" label nameKey="month" >
                                    <LabelList
                                        dataKey="id"
                                        content={<MultilineLabel />}
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
                                                            y={(viewBox.cy || 0) + 1}
                                                            className="fill-muted-foreground text-[0.8rem]"
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

                        <div className='flex flex-col items-center'>
                            <span className='control-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>
                                {desktopData.map(e => e.desktop).reduce((a, b) => (a + b))}
                            </span>
                            <span className='control-this'>Patents Granted</span>
                        </div>
                    </div>
                    <div className='hr-cards flex flex-col p-5'>
                        <div className='perfomance-card-header flex flex-col pb-3' style={{ borderBottom: '1px solid #ccc' }}>
                            <div className='flex flex-row items-center justify-between'>
                                <div>
                                    <span className='controllable-cost-text1'>Top Performers Retention</span>
                                    <div className='flex flex-row items-center'>
                                        <Badge>Health</Badge>
                                        {/* <span className='process-desc px-2'>Expenses managed directly by a specific department's actions.</span> */}
                                    </div>
                                </div>
                                <Select>
                                    <SelectTrigger className="w-[120px] h-[30px]" style={{ border: '1px solid #ccc' }}>
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select range</SelectLabel>
                                            <SelectItem value="2021">2021</SelectItem>
                                            <SelectItem value="2022">2022</SelectItem>
                                            <SelectItem value="2023">2023</SelectItem>
                                            <SelectItem value="2024">2024</SelectItem>
                                            <SelectItem value="2025">2025</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>

                        </div>
                        <ChartContainer
                            config={{
                                steps: {
                                    label: "Total Retention",
                                    color: theme.performers_retention[currentTheme],
                                },
                            }}
                            className="h-[15rem] w-full pt-3"
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

                        <div class="flex flex-row items-center space-x-4">
                            <div className='flex flex-col items-center'>
                                <span className='control-this-quater font-bold' style={{ color: 'green' }}>
                                    {desktopData.map(e => e.desktop).reduce((a, b) => (a + b)) / 100}%
                                </span>
                                <span className='control-this'>Top Performers</span>
                            </div>
                            <Separator orientation='vertical' />
                            <div className='flex flex-col items-center'>
                                <span className='control-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>
                                    {'20'}
                                </span>
                                <span className='control-this'>Separated Employees</span>
                            </div>
                            <Separator orientation='vertical' />
                            <div className='flex flex-col items-center'>
                                <span className='control-this-quater' style={{ color: theme.inventory_quality[currentTheme][0] }}>
                                    {desktopData.map(e => e.desktop).reduce((a, b) => (a + b))}
                                </span>
                                <span className='control-this'>Out. of</span>
                            </div>
                        </div>
                    </div>
                    <div className='hr-cards flex flex-col p-5'>
                        <div className='perfomance-card-header flex flex-col pb-3' style={{ borderBottom: '1px solid #ccc' }}>
                            <div className='flex flex-row items-center justify-between'>
                                <div>
                                    <span className='controllable-cost-text1'>Business Sustainablity</span>
                                    <div className='flex flex-row items-center'>
                                        <Badge>Health</Badge>
                                        {/* <span className='process-desc px-2'>Expenses managed directly by a specific department's actions.</span> */}
                                    </div>
                                </div>
                                <Select>
                                    <SelectTrigger className="w-[150px] h-[30px]" style={{ border: '1px solid #ccc' }}>
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select range</SelectLabel>
                                            <SelectItem value="Actual">Actual</SelectItem>
                                            <SelectItem value="Planned">Planned</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>

                        </div>
                        <ChartContainer className="h-[90%] w-full" config={chartConfigFinal}>
                            <BarChart margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }} accessibilityLayer
                                height={"15px"}
                                layout="vertical" data={chartDataFinal}>
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
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <ChartLegend content={<ChartLegendContent />} />

                                <Bar dataKey="actual" fill="var(--color-actual)" barSize={12} radius={4} />
                                <Bar dataKey="planned" fill="var(--color-planned)" barSize={12} radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
                {/* End of Category 5 */}
            </div >
        </React.Fragment >
    )
}

export default PerformanceDashboardCustomPanel
