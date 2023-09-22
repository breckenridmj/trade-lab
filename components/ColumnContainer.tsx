import { Column } from "@/types"
import DarkPool from "./Tables&Graphs/DarkPool";

import ToolItemMenu from "./ToolItemMenu";

import React, { useCallback, useEffect, useState } from 'react';

import { BiCog } from "react-icons/bi";
import ToggleSwitch from "./ToggleSwitch";
import Trash from "./icons/Trash";

interface Props {
    column: Column;
    deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
    const { column } = props;

    const [showToolMenu, setShowToolMenu] = useState(false);

    const toggleToolMenu = useCallback(() => {
        setShowToolMenu((current) => !current);
    }, []);

    return (
    <div
        className="
        bg-[#353b50]
        w-[650px]
        h-[300px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
        text-white
    "
    >
        {/* Container title */}
        
        <div className="bg-[#353b50] py-2 px-4 items-center flow-root rounded-md">
                <div className="float-left z-41">
                    <div className=" text-white font-bold flex text-lg flex-row items-center px-4 py-1 ">
                        <h2>Dark Pool</h2>          
                    </div>
                </div>

                <div className="float-right z-41">
                    <div className="text-gray-200 hover:text-gray-300 flex flex-row items-center gap-1 cursor-pointer relative">
                        

                    
                        <ToggleSwitch  />
                        <BiCog onClick={toggleToolMenu} className="transition cursor-pointer" size={'1.75em'}  />
                        <ToolItemMenu visible={showToolMenu} />
                        <Trash onClick={() => { FcDeleteColumn(column.id)}} />

                    </div>
                </div>
            </div>
        
        {/* Column Data container */}
        <div 
            className="
            flex 
            flex-grow
            items-center
            overflow-x-auto
            overflow-y-auto
            ">
                <DarkPool/>
            </div>
        {/* Column Footer */}
        <div>{column.title}</div>


    </div>
  )
}

export default ColumnContainer
