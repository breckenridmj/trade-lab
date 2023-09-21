import DarkPool from "./Tables&Graphs/DarkPool"
import Paper from '@mui/material/Paper';
import ToolNavbar from "./ToolNavbar";



const ToolItems = () =>  {
    return(
        <div className="MuiPaper-root" >
            <Paper className="resize rounded-md" elevation={3}>
                <div>
                    <ToolNavbar />
                </div>
                <div>
                    <DarkPool />
                </div>
            </Paper>
        </div>
    )
}
export default ToolItems;

