import DarkPool from "./Tables&Graphs/DarkPool"
import Paper from '@mui/material/Paper';
import ToolNavbar from "./ToolNavbar";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

const ToolItems = () =>  {
    return(
        <div>
        <div>
        <Stack direction="row" spacing={}>
            <DemoPaper square={false} elevation={3}>
                <div>
                    <ToolNavbar />
                </div>
                <div>
                    <DarkPool />
                </div>
            </DemoPaper>
        </Stack>
        </div>
        <div className="MuiPaper-root" >
            <DemoPaper square={false} elevation={3}>
                <div>
                    <ToolNavbar />
                </div>
                <div>
                    <DarkPool />
                </div>
            </DemoPaper>
        </div>
        </div>
    )
}
export default ToolItems;

