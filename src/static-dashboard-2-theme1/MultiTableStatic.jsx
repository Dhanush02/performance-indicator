
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components//ui/card";

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { BadgeDollarSign, CalendarClock, CalendarDays, ShieldCheck, TrendingDown, TrendingUp } from "lucide-react";
  
const MultiTableStatic = () =>{
    return(
        <Card className="w-[35rem]">
            <CardHeader>
                <CardTitle>
                    Project Management & Contracting
                </CardTitle>
                <CardDescription>
                    Comparing Financial Indices
                </CardDescription>
            </CardHeader>
            <CardContent>
            <Table className="w-full">
  <TableHeader>
    <TableRow>
      <TableHead></TableHead>
      <TableHead>Last Year</TableHead>
      <TableHead>Actual</TableHead>
      <TableHead>Plan</TableHead>
      <TableHead>Variance</TableHead>
      <TableCell></TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
        <TableCell>
            <div className="flex flex-row place-items-start">
                <BadgeDollarSign width={35}/>
                <div className="">
                <p className="pl-2">Project Cost Compliance(%)</p>
                </div>
            </div>
        </TableCell>
        <TableCell>84</TableCell>
        <TableCell>92</TableCell>
        <TableCell>92</TableCell>
        <TableCell>0.2</TableCell>
        <TableCell>        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell>
            <div className="flex flex-row">
                <ShieldCheck width={35}/>
                <p className="pl-2">Project Quality Index(%)</p>
            </div>
        </TableCell>
        <TableCell>90</TableCell>
        <TableCell>92</TableCell>
        <TableCell>91</TableCell>
        <TableCell>0.9</TableCell>
        <TableCell>        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell>
            <div className="flex flex-row">
                <CalendarDays width={35}/>
                <p className="pl-2">Project Contracts Cycle-Time(Days)</p>
            </div>
            
        </TableCell>
        <TableCell>63</TableCell>
        <TableCell>69</TableCell>
        <TableCell>72</TableCell>
        <TableCell>3</TableCell>
        <TableCell>        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
        </TableCell>
    </TableRow>
    <TableRow>
        <TableCell>
            <div className="flex flex-row">
            <CalendarClock width={35}/>
            <p className="pl-2">Operation Contracts Cycle-Time(Days)</p>
            </div>
        </TableCell>
        <TableCell>94</TableCell>
        <TableCell>93</TableCell>
        <TableCell>89</TableCell>
        <TableCell>4.4</TableCell>
        <TableCell>        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
        </TableCell>
    </TableRow>
  </TableBody>
</Table>

            </CardContent>
            <CardFooter>
      <div className="flex items-center gap-2 font-medium leading-none">
          Project Contracts Cycle-Time was completed 3 days before plan<TrendingDown className="h-4 w-4" />
        </div>
      </CardFooter>
        </Card>
    )
}

export default MultiTableStatic;