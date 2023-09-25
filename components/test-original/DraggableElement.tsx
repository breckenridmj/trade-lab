// components/DraggableElement.tsx
import React from 'react';

const DraggableElement: React.FC = () => {
  return (
    <div className="border border-black p-4 draggable">
      Draggable Element
      {/* You can use a library like react-dnd for drag-and-drop functionality */}
    </div>
  );
};

export default DraggableElement;
