import { title } from "process";
import { Column } from "../types";
import PlusIcon from "./icons/PlusIcon"
import { useState } from "react";
import ColumnContainer from "./ColumnContainer";


function KanbanBoard() {
    const [ columns, setColumns ] = useState<Column[]>([]);
    console.log(columns);

    return (
        <div className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-x-auto
        overflow-y-auto
        px-[40px]
        "
        >
            <div className="m-auto">
                <div className="flex gap-3">
                    {columns.map(col => (
                    // eslint-disable-next-line react/jsx-key
                    <ColumnContainer column={col} />
                ))}
                </div>
                <button
                    onClick={() => {
                        createNewColumn();
                    }}
                    className="
                h-[60px]
                w-[650px]
                min-w-[350px]
                cursor-pointer
                rounded-lg
                bg-[#353b50]
                border-2
                p-4
                text-white
                ring-white
                hover:ring-1
                flex
                gap-2
                "
                >
                    <PlusIcon />
                    Add Column
                </button>
            </div>
        </div>
    );

    function createNewColumn() {
        const columnToAdd: Column = {
            id: generateId(),
            title: `Column ${columns.length + 1}`,
        };

        setColumns([...columns, columnToAdd]);
    }
}

function generateId() {
    /* Generate a random number between 0 and 10000 */
    return Math.floor(Math.random()*100001)
}

export default KanbanBoard
