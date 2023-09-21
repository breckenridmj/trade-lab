
import ToolItemMenu from "./ToolItemMenu";

import React, { useCallback, useEffect, useState } from 'react';

import { BiCog } from "react-icons/bi";

import ToggleSwitch from "./ToggleSwitch";


const ToolNavbar = () => {
    
    const [showToolMenu, setShowToolMenu] = useState(false);

    const toggleToolMenu = useCallback(() => {
        setShowToolMenu((current) => !current);
    }, []);

    
    
    

    return (
        <div className="">
            <div className="bg-[#353b50] py-2 px-4 items-center flow-root">
                <div className="float-left z-41">
                    <div className=" text-gray-200 flex flex-row items-center px-4 py-2 ">
                        <h2>Dark Pool</h2>          
                    </div>
                </div>

                <div className="float-right z-41">
                    <div className="text-gray-200 hover:text-gray-300 flex flex-row items-center gap-1 cursor-pointer relative">
                        

                    
                        <ToggleSwitch  />
                        <BiCog onClick={toggleToolMenu} className="transition cursor-pointer" size={'1.75em'}  />
                        <ToolItemMenu visible={showToolMenu} />
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default ToolNavbar;