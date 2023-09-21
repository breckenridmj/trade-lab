import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Layout = () =>  {
  const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 100,
      textAlign: "center",
      color: "white",
      fontFamily: "Roboto"
    }
  }
  
  return(
    
    <div style={classes.root}>
      <Grid container spacing={1} paddingTop={11} paddingLeft={2} paddingRight={2}>
        {/*Create items with different breakpoints */}
        {/*For example,This item will be 12 units wide on extra small screens */}       
        <Grid item xs={12}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Dark Pool Orders</Paper>
        </Grid>
        {/*This item will be 12 units on extra small screens */}
        {/*But will be 6 units on small screens */}
        <Grid item xs={12} sm={6}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Time & Sales</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Top Market Orders</Paper>
        </Grid>
        <Grid item xs={9} sm={4}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Gamma Exposure</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Vanna Exposure</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Speed Exposure</Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className=" bg-[#353b50]" style={classes.paper}>Unusual Options</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default Layout;

