"use client";


import { Column, Id } from "../types";
import PlusIcon from "./icons/PlusIcon"
import { useMemo, useState,useEffect } from "react";
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
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import ReactDOM from 'react-dom';



function KanbanBoard() {

    
    
    const [ columns, setColumns ] = useState<Column[]>([]);
    console.log(columns);

    const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

    const [activeColumn, setActiveColumn] = useState<Column | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 3, //300px
            },
        })
    );

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

if (!mounted)return null;

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
        100vw
        "
        >
            <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
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
                {createPortal(
                <DragOverlay>
                    {activeColumn && (
                        <ColumnContainer
                            column={activeColumn}
                            deleteColumn={deleteColumn}
                        />
                    )}
                </DragOverlay>,
                document.body
                )}
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

    function onDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        if (!over) return;

        const activeColumnId = active.id;
        const overColumnId = over.id;

        if (activeColumnId === overColumnId) return;

        setColumns( (columns) => {
            const activeColumnIndex = columns.findIndex(
                (col) => col.id === activeColumnId
            );
            const overColumnIndex = columns.findIndex(
                    (col) => col.id === overColumnId
            );  
            
            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
    }
}

function generateId() {
    /* Generate a random number between 0 and 10000 */
    return Math.floor(Math.random()*100001)
}

export default KanbanBoard
