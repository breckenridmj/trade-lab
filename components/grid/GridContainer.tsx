// components/GridContainer.tsx
// components/GridContainer.tsx
import React, { ReactNode } from 'react';

interface GridContainerProps {
  children?: ReactNode; // Make children optional
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

export default GridContainer;

