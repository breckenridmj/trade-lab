import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import ToolItems from "./ToolItems";


const Layout = () =>  {
  
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(12),
    textAlign: 'center',
    color: "white",
    background: '#353b50',
    fontFamily: "Roboto",
  }));
  
  return(
    <div className = "flex-grow-1 overflow-hidden h-full w-full">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container paddingTop={14} paddingLeft={2} paddingRight={2} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid xs={1} sm={4} md={4} key={index}>
                {/* <Item>xs=2</Item> */}
                <ToolItems />
              </Grid>
            ))}
          </Grid>
        </Box>
    </div>
  )
}
export default Layout;

/*className=" bg-[#353b50]"*/