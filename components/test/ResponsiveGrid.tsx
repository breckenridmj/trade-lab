import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import DarkPool from '../Tables&Graphs/DarkPool';
import ElementContainer from './ElementContainer';
import { ResizableBox, ResizeCallbackData, ResizeHandle } from 'react-resizable';
import { experimentalStyled as styled } from '@mui/material/styles';


import { Size, Position } from "@/types"
import { useState, useEffect, useRef } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Creates element
const element = () => {
    return <ElementContainer />;
  };



export default function ResponsiveGrid() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 300 });
  const gridItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gridItemRef.current) {
      // Get the dimensions of the grid item
      const width = gridItemRef.current.clientWidth;
      const height = gridItemRef.current.clientHeight;
      // Update the state with the dimensions
      setInitialDimensions({ width, height });
    }
  }, []);

  const [initialDimensions, setInitialDimensions] = useState<{ width?: number; height?: number }>({}); // Make width and height optional

  const handleResize = (event: React.SyntheticEvent, data: ResizeCallbackData) => {
    setDimensions({
      width: data.size.width,
      height: data.size.height,
    });
  };

   const borderSize = 2; // Border size in pixels (adjust as needed)
  const columnConfig = { xs: 4, sm: 8, md: 12 };
  const smallestColumnWidth = 100 / columnConfig.md; // Adjust based on the smallest column
  

  return (

    /* sx is a custom prop for styling using the @emotion/styled */
    <Box sx={{ flexGrow: 1, paddingTop: 20,}}>
        {/* 
            spacing prop
                xs: 2: Specifies the spacing for extra small screens (xs). On extra small screens, the spacing between grid items will be 2 units.
                md: 3: Specifies the spacing for medium screens (md). On medium screens, the spacing between grid items will be 3 units.
            columns prop
                xs={6}: On extra small screens, the item will occupy 6 grid columns.
                sm={4}: On small to medium screens, the item will occupy 4 grid columns.
                md={3}: On medium screens, the item will occupy 3 grid columns.
                lg={2}: On large screens, the item will occupy 2 grid columns.
                xl={1}: On extra-large screens, the item will occupy 1 grid column.
        */} 
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* 
            The md needs to be uniquely set for each graph element
            Dark Pool = 6
        */} 
        
          <Grid item xs={2} sm={4} md={6} lg={2} xl={1}>
            <ResizableBox
                width={dimensions.width ?? 1200}
                height={dimensions.height ?? 300}
                minConstraints={[1200, 200]}
                maxConstraints={[2400, 800]}
                onResize={(event: React.SyntheticEvent, data: ResizeCallbackData) => {
                  // Adjust the width to snap to columns, accounting for borders
        const snappedWidth = Math.round((data.size.width - borderSize * 2) / smallestColumnWidth) * smallestColumnWidth;
        const newWidth = Math.max(smallestColumnWidth * columnConfig.xs, snappedWidth) + borderSize * 2;
        data.size.width = newWidth;

        // Adjust the height to snap if needed
        const snappedHeight = Math.round((data.size.height - borderSize * 2) / smallestColumnWidth) * smallestColumnWidth;
        data.size.height = Math.max(150, snappedHeight) + borderSize * 2;
                }}
                resizeHandles={['se']} 
                style={{ border: '1px solid #000', boxSizing: 'border-box'}}
            >
              <div ref={gridItemRef} style={{ width: '100%', height: '100%', overflow: 'auto' }}>{element()}</div>
              </ResizableBox>
          </Grid>
        
      </Grid>
    </Box>
  );
}