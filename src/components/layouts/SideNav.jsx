import {
CircleUser,
CodeIcon,
CompassIcon,
ComputerIcon,
Download,
FileChartColumn,
Home,
Lightbulb,
Lock,
Menu,
Moon,
Package,
Package2,
Palette,
Search,
Settings,
ShoppingCart,
Sun,
Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

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
import { useState } from "react"

export const description =
"A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."
const SideNav = (props) => {
    const {currentMode, setCurrentMode, currentTheme, setCurrentTheme} = props;
    return (
        <div className="navbar bg-base-100 flex fixed top-0 left-0 right-0 z-50" data-theme={currentMode}>
            <dialog id="customize_theme" data-theme={currentMode} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg" data-theme={currentMode}>Mode</h3>
                    <ul className="flex flex-row">
                        <li className="p-3" onClick={()=>{setCurrentMode("light")}}>
                            <Sun className={currentMode=="light"?"size-8 fill-orange-500 stroke-orange-500 hover:fill-orange-500 hover:stroke-orange-500":"size-8 fill-slate-400 stroke-slate-400 hover:fill-orange-500 hover:stroke-orange-500"} />
                        </li>
                        <li className="p-3" onClick={()=>{setCurrentMode("dark")}}>
                            <Moon className={currentMode=="dark"?"size-8 fill-cyan-600 stroke-cyan-600 hover:fill-cyan-600 hover:stroke-cyan-600":"size-8 fill-slate-50 stroke-slate-400 hover:fill-cyan-600 hover:stroke-cyan-600"}/>
                        </li>
                    </ul>
                    <h3 className="font-bold text-lg" data-theme={currentMode}>KPI Theme</h3>
                    <ul className="flex flex-row">
                        <li className="p-3">
                            <div className="grid grid-cols-2" style={{border: currentTheme=="theme1" && "2px solid", padding: currentTheme=="theme1"&& "2px"}} onClick={()=>setCurrentTheme("theme1")}>
                                <div className={currentMode=="dark"?"box-border h-2 w-2 p-2 border-3 bg-blue-600":"box-border h-2 w-2 p-2 border-3 bg-amber-600"}></div>
                                <div className={currentMode=="dark"?"box-border h-2 w-2 p-2 border-3 bg-pink-600":"box-border h-2 w-2 p-2 border-3 bg-teal-600"}></div>
                                <div className={currentMode=="dark"?"box-border h-2 w-2 p-2 border-3 bg-orange-500":"box-border h-2 w-2 p-2 border-3 bg-orange-300"}></div>
                                <div className={currentMode=="dark"?"box-border h-2 w-2 p-2 border-3 bg-fuchsia-600":"box-border h-2 w-2 p-2 border-3 bg-teal-950"}></div>
                            </div>
                        </li>
                        <li className="p-3">
                            <div className="grid grid-cols-2" style={{border: currentTheme=="theme2" && "2px solid", padding: currentTheme=="theme2"&& "2px"}} onClick={()=>setCurrentTheme("theme2")}>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-blue-500"></div>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-blue-300"></div>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-blue-600"></div>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-blue-400"></div>
                            </div>
                        </li>
                        <li className="p-3">
                            <div className="grid grid-cols-2" style={{border: currentTheme=="theme3" && "2px solid", padding: currentTheme=="theme3"&& "2px"}} onClick={()=>setCurrentTheme("theme3")}>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-rose-500"></div>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-rose-300"></div>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-rose-400"></div>
                                <div className="box-border h-2 w-2 p-2 border-3 bg-rose-200"></div>
                            </div>
                        </li>
                        <li className="p-3">
                        <div className="grid grid-cols-2 " style={{border: currentTheme=="theme4" && "2px solid", padding: currentTheme=="theme4"&& "2px"}} onClick={()=>setCurrentTheme("theme4")}>
                            <div className="box-border h-2 w-2 p-2 border-3 bg-emerald-500"></div>
                            <div className="box-border h-2 w-2 p-2 border-3 bg-emerald-300"></div>
                            <div className="box-border h-2 w-2 p-2 border-3 bg-emerald-400"></div>
                            <div className="box-border h-2 w-2 p-2 border-3 bg-emerald-200"></div>
                        </div>
                        </li>
                    </ul>
                    <div className="modal-action">
                    
                    </div>
                </div>
            </dialog>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a
                href="/"
                className=""
              >
                <ComputerIcon className="h-4 w-4" />
                Technical Services
              </a></li>
        <li>
        <a
                href="#"
                className=""
              >
                <CodeIcon className="h-4 w-4" />
                Corporate Application Development
              
              </a>
        </li>
        <li>
            <a
                href="#"
                className=""
              >
                <Users className="h-4 w-4" />
                Corporate Affairs
              </a>
        </li>
        <li>
        <a
                href="#"
                className=""
              >
                <CompassIcon className="h-4 w-4" />
                Technology and Innvoation
              </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
            <a href="/" className="flex items-center gap-2 font-semibold">
              {/* <DashboardIcon className="h-6 w-6" /> */}
              <FileChartColumn />
              <span className="">Performance Insight</span>
            </a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div >
       
       <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="bg-transparent m-1"><Settings width={20}/></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-xs text-semibold rounded-box z-[1] w-52 p-2 shadow">
            <li><a onClick={()=>{document.getElementById('customize_theme').showModal()}}><Palette/>Customize Theme</a></li>
            <li><a><Lock/>Lock Layout</a></li>
            <li><a><Download/>Export</a></li>
        </ul>
        </div>
      </div>
    </button>
  </div>
</div>
    )
}

export default SideNav;