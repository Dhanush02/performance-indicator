import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Moon, Sun } from "lucide-react"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export default function ThemeDrawer(props) {
    const {isOpen, setIsOpen} = props;
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">"Open"</Button>
      </DrawerTrigger>
      <DrawerContent >
        <div className="justify-center">
            <DrawerHeader>
                Select Display Mode
            </DrawerHeader>
            <div className="flex flex-row">
                <Sun></Sun>
                <Moon></Moon>
            </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
