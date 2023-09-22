import { Column } from "@/types"
import DarkPool from "./Tables&Graphs/DarkPool";
import ToolNavbar from "./ToolNavbar";


interface Props {
    column: Column;
}

function ColumnContainer(props: Props) {
    const { column } = props;

    return (
    <div
        className="
        bg-[#353b50]
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
        text-white
    "
    >
        {/* Container title */}
        <ToolNavbar/>
        
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
        <div>Footer</div>


    </div>
  )
}

export default ColumnContainer
