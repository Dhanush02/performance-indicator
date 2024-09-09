
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  

import envLogo from '../../public/environment-safety.png';
import EcologyIcon from "@/icons/EcologyIcon";

const MultiCardStatic = (props) => {
    const {theme, setTheme, currentTheme, setCurrentTheme} = props;
    return(
        <Card className="w-full h-full">
            <CardHeader className="pt-3 pb-0">
                <CardTitle className="text-xl">
                    Environment, Health and Safety
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-1 p-3">
                        <div>
                            <p className="font-regular text-sm">TRC</p>
                            
                        </div>
                        
                        <div className="grid grid-cols-6 pt-3">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][0]} className="size-5">
                                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>

                            </div>
                            <p className="font-semibold text-sm ml-3">0.89</p>
                        </div>
                    </div>
                    <div>
                        
                    <svg id="Layer_2" className="size-8" style={{marginLeft: "auto", marginRight: "70px", marginTop: "25px"}} data-name="Layer 2" fill="#fafafa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.83 231.93">
                        <defs>
                            <style>
                                {`
                            .cls-1 {
                                stroke: #323232;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                                stroke-width: 18px;
                            }`}
                            </style>
                        </defs>
                        <path class="cls-1" d="M121.63,245.54c-9.64-15-16.57-32.24-16.57-51.52,0-48.15,38.4-87.18,85.76-87.18,24.7,0,47.8,10.28,63.44,27.26,0,0,29.43,25.75,26.92,75.15C280.87,264,309.24,310.6,309.24,310.6S169.77,320.39,121.63,245.54Z" transform="translate(-87.42 -88.08)" />
                        <path class="cls-1" d="M299.49,305.25S269.71,288.83,253.38,276c-18.63-14.63-39.08-42.24-57.64-79.37-24.39-48.77-62.08-63.85-62.08-63.85S106.06,113,96.42,97.08" transform="translate(-87.42 -88.08)" />
                        </svg>
                    </div>
                    
                    <div className="grid grid-cols-1 p-3 pt-1">
                        <div>
                        <p className="font-regular text-sm">Carbon Intensity</p>
                        </div>
                        <div className="grid grid-cols-6 pt-3">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                            </div>
                            <p className="font-semibold text-sm ml-3">1.20</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 p-3 ml-3 pt-1">
                        <div>
                        <p className="font-regular text-sm">SO2</p>
                        
                        </div>
                        <div className="grid grid-cols-6 pt-3">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                            </div>
                            <p className="font-semibold text-sm ml-3">1.20</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 pt-1 p-3">
                        <div>
                        <p className="font-regular text-sm">Fairing Intensity</p>
                        </div>
                        <div className="grid grid-cols-6 pt-3">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][1]} className="size-5">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                            </div>
                            <p className="font-semibold text-sm ml-3">1.20</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 p-3 pt-1 ml-3">
                        <div>
                        <p className="font-regular text-sm">HC Discharge</p>
                        </div>
                        <div className="grid grid-cols-6 pt-3">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={theme.phising_test[currentTheme][0]} className="size-5">
                                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>

                            </div>
                            <p className="font-semibold text-sm ml-3">0.89</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default MultiCardStatic;