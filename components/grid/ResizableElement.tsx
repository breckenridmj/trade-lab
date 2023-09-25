// components/ResizableElement.tsx
import React from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';

const ResizableElement: React.FC = () => {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);

  const onResize = (event: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      width={width}
      height={height}
      onResize={onResize}
      resizeHandles={['se']}
    >
      <div
        style={{
          border: '1px solid #ddd',
          backgroundColor: '#f0f0f0',
          padding: '16px',
          overflow: 'auto',
        }}
      >
        Resizable Element
      </div>
    </Resizable>
  );
};

export default ResizableElement;






