import Dashboard from "./components/pages/Dashboard";
import ChartForm from "./components/pages/ChartsForm";
import { useEffect, useState } from "react";
import Dashboard1 from "./static-dashboard-1-theme1/Dashboard1";
import StaticDashboard from "./static-dashboard-2-theme1/StaticDashboard";
import {changeTheme} from "./utils/helper";
import DarkmodeCharts from "./metadata/darkmode-chart.json";
import LightmodeCharts from "./metadata/lightmode-chart.json";

import { Separator } from "@/components//ui/separator"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components//ui/chart"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  Rectangle,
  ReferenceLine,
  XAxis,
YAxis,
} from "recharts"
import {
CircleUser,
CodeIcon,
CompassIcon,
ComputerIcon,
Home,
Menu,
Package,
Package2,
Search,
ShoppingCart,
Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components//ui/card"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardIcon } from "@radix-ui/react-icons"

export const description =
"A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [currentMode, setCurrentMode] = useState("light");
  const [layoutConfig, setLayoutConfig] = useState([{ i: 'item1', x: 0, y: 0, w: 3, h: 1.5 }])
  const [dashboardFlag, setDashboardFlag] = useState(true);
  const [items, setItems] = useState([{name: "item1", comp: null}]);
  const [currentItem, setCurrentItem] = useState("");
  const [kpiCount, setKPICount] = useState(1);
  const [currentTheme, setCurrentTheme] = useState("theme1");
  const [theme, setTheme] = useState(LightmodeCharts)

  
  useEffect(()=>{
    setTheme(currentMode=="dark"?DarkmodeCharts:LightmodeCharts);
  }, [currentMode])
  return (
    <div className={currentMode=="dark"?"dark":"light"}>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <DashboardIcon className="h-6 w-6" />
              <span className="">Performance Insight</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="/"
                className="flex items-center gap-3 rounded-lg font-black text-[#000] px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ComputerIcon className="h-4 w-4" />
                Technical Services
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <CodeIcon className="h-4 w-4" />
                Corporate Application Development
              
              </a>
        
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Corporate Affairs
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <CompassIcon className="h-4 w-4" />
                Technology and Innvoation
              </a>
            </nav>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </a>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Customize Theme</DropdownMenuItem>
              <DropdownMenuItem> Submit Feedback</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Documentation</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <StaticDashboard
    theme={theme}
    setTheme={setTheme}
    currentTheme={currentTheme}
    setCurrentTheme={setCurrentTheme}
    currentMode={currentMode}
    setCurrentMode={setCurrentMode}
    />
      </div>
    </div>
    
    </div>
    // <Dashboard1/>
    // <>
    // { openForm ? (<ChartForm
    //   items={items}
    //   setItems={setItems}
    //   currentItem={currentItem}
    //   setCurrentItem={setCurrentItem}
    //   openForm={openForm}
    //   setOpenForm={setOpenForm}
    //   dashboardFlag={dashboardFlag}
    //   setDashboardFlag={setDashboardFlag}
    // ></ChartForm>) :
    //   (<Dashboard
    //   openForm={openForm}
    //   setOpenForm={setOpenForm}
    //   items={items}
    //   setItems={setItems}
    //   currentItem={currentItem}
    //   setCurrentItem={setCurrentItem}
    //   layoutConfig={layoutConfig}
    //   setLayoutConfig={setLayoutConfig}
    //   dashboardFlag={dashboardFlag}
    //   setDashboardFlag={setDashboardFlag}
    //   kpiCount={kpiCount}
    //   setKPICount={setKPICount}
    //   ></Dashboard>)
    // }
    // </>
  );
}
export default App;
