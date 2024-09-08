import Dashboard from "./components/pages/Dashboard";
import ChartForm from "./components/pages/ChartsForm";
import { useEffect, useState } from "react";
import Dashboard1 from "./static-dashboard-1-theme1/Dashboard1";
import StaticDashboard from "./static-dashboard-2-theme1/StaticDashboard";
import {changeTheme} from "./utils/helper";
import DarkmodeCharts from "./metadata/darkmode-chart.json";
import LightmodeCharts from "./metadata/lightmode-chart.json";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
import ThemeDrawer from "./utils/ThemeDrawer";
import { Theme } from "@amcharts/amcharts5";
import SideNav from "./components/layouts/SideNav";
import TechnicalServices from "./static-dashboard-2-theme1/TechnicalServices";

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
  const [theme, setTheme] = useState(LightmodeCharts);
  const [isOpenTheme, setIsOpenTheme] = useState(false);
  
  const router = createBrowserRouter([
    {
      path: "/technical services report",
      element: <div className={currentMode=="dark"?"dark":"light"}>
      <SideNav
      currentMode={currentMode}
      setCurrentMode={setCurrentMode}
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
      />
        <StaticDashboard
    theme={theme}
    setTheme={setTheme}
    currentTheme={currentTheme}
    setCurrentTheme={setCurrentTheme}
    currentMode={currentMode}
    setCurrentMode={setCurrentMode}
    />
      </div>
    },
    {
      path: "",
      element: <TechnicalServices  
            theme={theme}
            setTheme={setTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
            currentMode={currentMode}
            setCurrentMode={setCurrentMode}
      />
    }
  ]);

  useEffect(()=>{
    setTheme(currentMode=="dark"?DarkmodeCharts:LightmodeCharts);
  }, [currentMode])
  return (
    <RouterProvider router={router} />
  );
}
export default App;
