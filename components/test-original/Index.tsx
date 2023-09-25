// pages/index.tsx
import React, { useState } from 'react';
import GridContainer from '@/components/test-original/GridContainer';
import AddElementButton from '@/components/test-original/AddElementButton';
import ResizableElement from '@/components/test-original/ResizableElement';
import DraggableElement from '@/components/test-original/DraggableElement';


const Home: React.FC = () => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const handleAddElement = () => {
    setElements((prevElements) => [
      ...prevElements,
      <ResizableElement key={prevElements.length} />,
    ]);
  };

  return (
    <div>
      <AddElementButton onClick={handleAddElement} />
      <GridContainer>
        {elements.map((element, index) => (
          <div key={index} className="m-4">
            {element}
          </div>
        ))}
      </GridContainer>
    </div>
  );
};

export default Home;