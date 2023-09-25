import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

interface LayoutItem {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;  // Change the type of 'i' to string
}

const MinMaxLayout: React.FC = () => {
  const [layout, setLayout] = useState<LayoutItem[]>([
    { x: 0, y: 0, w: 3, h: 3, i: "1" },
  ]);

  function addNewItem() {
    const rowWidth = 12;
    let totalWidth = 0;

    for (const item of layout) {
      if (item.y === 0) {
        totalWidth += item.w;
      }
    }

    let newItem: LayoutItem;

    if (totalWidth < rowWidth) {
      newItem = {
        x: totalWidth,
        y: 0,
        w: 3,
        h: 3,
        i: (layout.length + 1).toString(),
      };
    } else {
      let newRowX = 0;
      let newRowY = 0;

      while (layout.some((item) => item.x === newRowX && item.y === newRowY)) {
        newRowX += 3;
        if (newRowX >= rowWidth) {
          newRowX = 0;
          newRowY += 3;
        }
      }

      newItem = {
        x: newRowX,
        y: newRowY,
        w: 3,
        h: 3,
        i: (layout.length + 1).toString(),
      };
    }

    setLayout((prevLayout) => prevLayout.concat(newItem));
  }

  const handleRemoveItem = (itemId: string) => {
    console.log("Deleting item with ID:", itemId);
    setLayout((prevLayout) => {
      const updatedLayout = prevLayout.filter((item) => item.i !== itemId);
      console.log("Updated Layout:", updatedLayout);
      return updatedLayout;
    });
  };

  return (
    <React.Fragment>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-24 py-2 px-4 rounded"
        onClick={addNewItem}
      >
        Add item
      </button>

      <ReactGridLayout onLayoutChange={(layout) => setLayout(layout)}>
        {layout.map((item) => (
          <div
            key={item.i}
            data-grid={item}
            className="bg-[#353b50] text-center relative"
          >
            <span className="inline-block p-4">{item.i}</span>
            <button
              onClick={() => {
                console.log("Delete button clicked for item:", item.i);
                handleRemoveItem(item.i);
              }}
              className="absolute top-0 right-0 m-2 text-red-500"
            >
              Delete {item.i}
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5">DATA</div>
            </div>
          </div>
        ))}
      </ReactGridLayout>
    </React.Fragment>
  );
};

export default MinMaxLayout;
