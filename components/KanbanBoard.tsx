
import { Column, Id } from "../types";
import PlusIcon from "./icons/PlusIcon"
import { useState } from "react";
import ColumnContainer from "./ColumnContainer";
import { DndContext } from "@dnd-kit/core";


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
            <DndContext>
            <div className="m-auto flex gap-2">
                <div className="flex gap-3">
                    {columns.map(col => (
                    // eslint-disable-next-line react/jsx-key
                    <ColumnContainer 
                        key={col.id}
                        column={col} 
                        deleteColumn={deleteColumn} 
                    />
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
            </DndContext>
        </div>
    );

    function createNewColumn() {
        const columnToAdd: Column = {
            id: generateId(),
            title: `Column ${columns.length + 1}`,
        };

        setColumns([...columns, columnToAdd]);
    }

    function deleteColumn(id: Id) {
        const filteredColumns = columns.filter((col) => col.id !== id);
        setColumns(filteredColumns);
    }
}

function generateId() {
    /* Generate a random number between 0 and 10000 */
    return Math.floor(Math.random()*100001)
}

export default KanbanBoard
