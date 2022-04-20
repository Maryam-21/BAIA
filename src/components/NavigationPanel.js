import { Box,Grid } from '@material-ui/core'
import React , {useEffect,useState} from 'react'
import InfoBox from './InfoBox'
import Logo from './Logo'
import NestedList from './NestedList'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import TaskIcon from '@mui/icons-material/Task';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

const NavigationPanel = ({user, projectsTitles,projects, meetings, handleMeetingClick,handleOpenProject}) => {
  const [test, setTest] = useState("loading");
  const [open, setOpen] = React.useState(false);
  

    const handleClick = () => {
        setOpen(!open);
    };
   
  const p = ["loading"];
  useEffect(async() => {
    setTest(await meetings)
  });

  return (
      <Grid container spacing={1} style={{width:'100%', display:'block', padding: '1.7% 5%', minHeight:'100%'}}>
        <Grid item xs={0} sm={12} style={{height:'15%'}}>
            <Logo/>
        </Grid>
        <Grid item xs={0} sm={12} style={{width:'100%', height:'15%'}}>
            <InfoBox user= {user}/>
        </Grid>
        <hr style={{width:'100%', backgroundColor:'black', height:'1px', border:0}}/>
        
        <Grid item xs={0} sm={12} style={{width:'100%', alignItems:'left',
         height: '100%', backgroundColor:'#B4B4B4', padding:'5px', borderRadius:5}}>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <TaskIcon />
            </ListItemIcon>
            <ListItemText primary = "Projects" />
                {open? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit style={{padding: '0% 0% 0% 4%'}}>
          {projectsTitles.map(project => (
              <NestedList project = {project?project:p} meetings = {meetings} handleMeetingClick={handleMeetingClick}
              handleOpenProject={handleOpenProject}/>
          ))}
         </Collapse>
         <ListItemButton >
            <ListItemIcon>
            <AddIcon/>
            </ListItemIcon>
            <ListItemText primary = "Add Project" />
        </ListItemButton>
        </Grid>
       </Grid>
     )
}

export default NavigationPanel