
import { Column, Id } from "../types";
import PlusIcon from "./icons/PlusIcon"
import { useMemo, useState } from "react";
import ColumnContainer from "./ColumnContainer";
import { 
    DndContext, 
    DragEndEvent,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors, 
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";


function KanbanBoard() {
    const [ columns, setColumns ] = useState<Column[]>([]);
    console.log(columns);

    const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

    const [activeColumn, setActiveColumn] = useState<Column | null>(null);

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
            <DndContext onDragStart={onDragStart}>
                <div className="m-auto flex gap-2">
                    <div className="flex gap-3">
                        <SortableContext items={columnsId}>
                            {columns.map(col => (
                            // eslint-disable-next-line react/jsx-key
                            <ColumnContainer 
                                key={col.id}
                                column={col} 
                                deleteColumn={deleteColumn} 
                            />
                            
                            ))}
                        </SortableContext>
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

    function onDragStart(event: DragStartEvent) {
        console.log("Drag Start", event);
        if (event.active.data.current?.type === "Column") {
            setActiveColumn(event.active.data.current.column);
            return;
        }
    }
}

function generateId() {
    /* Generate a random number between 0 and 10000 */
    return Math.floor(Math.random()*100001)
}

export default KanbanBoard
