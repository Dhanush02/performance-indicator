
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import EcologyIcon from "@/icons/EcologyIcon";
import envLogo from '../../public/environment-safety.png';

const MultiCardStatic = () => {
    return(
        <Card className="w-[800px] h-[300px]">
            <CardHeader>
                <CardTitle>
                    Environment, Health and Safety
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3">
                    <div className="grid grid-cols-1 p-4">
                        <div>
                            <p className="font-bold text-[#000]">TRC</p>
                        </div>
                        <div className="grid grid-cols-6 pt-4">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F05F41" className="size-6">
                                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>

                            </div>
                            <p className="font-bold text-[#666]">0.89</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 p-4">
                        <div>
                        <p className="font-bold text-[#000]">Carbon Intensity</p>
                        </div>
                        <div className="grid grid-cols-6 pt-4">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                            </div>
                            <p className="font-bold text-[#666]">1.20</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 pl-16">
                    <img  src={envLogo} height="90" width="90"/>
                    </div>
                    <div className="grid grid-cols-1 p-4">
                        <div>
                        <p className="font-bold text-[#000]">Fairing Intensity</p>
                        </div>
                        <div className="grid grid-cols-6 pt-4">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                            </div>
                            <p className="font-bold text-[#666]">1.20</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 w-[215px] p-4">
                        <div>
                        <p className="font-bold text-[#000]">HC Discharge to Marine</p>
                        </div>
                        <div className="grid grid-cols-6 pt-4">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F05F41" className="size-6">
                                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>

                            </div>
                            <p className="font-bold text-[#666]">0.89</p>
                        </div>
                    </div>
                    <div>
                        <EcologyIcon></EcologyIcon>
                    </div>
                    <div className="grid grid-cols-1 p-4 pl-16">
                        <div>
                        <p className="font-bold text-[#000]">SO2</p>
                        </div>
                        <div className="grid grid-cols-6 pt-4">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#83BD01" className="size-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                            </div>
                            <p className="font-bold text-[#666]">1.20</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default MultiCardStatic;