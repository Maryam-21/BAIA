import { Grid } from '@material-ui/core'
import React , {useState} from 'react'
import { useSelector } from 'react-redux';
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
import AddNewProjectPopUp from './AddNewProjectPopUp';


const NavigationPanel = ({ handleMeetingClick, handleOpenUS, handleProfile,handleProjectdetails}) => {
  const [open, setOpen] = useState(false);
  const [openAddProj, setOpenAddProj] = useState(false);
  const {projectsTitles, fullProjects} = useSelector((state)=>state.projects)

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickOpen = () => {
      setOpenAddProj(true);
    };
    const handleClickClose = () => {
      setOpenAddProj(false);
    };
    
  return (
      <Grid container spacing={1} style={{width:'100%', display:'block', padding: '1.7% 5%', minHeight:'100%'}}>
        <Grid item xs={false} sm={12} style={{height:'15%'}}>
            <Logo/>
        </Grid>
        <Grid item xs={false} sm={12} style={{width:'100%', height:'15%'}}>
            <InfoBox handleProfile={handleProfile}/>
        </Grid>
        <hr style={{width:'100%', backgroundColor:'black', height:'1px', border:0}}/>
          
        <Grid item xs={false} sm={12} style={{width:'100%', alignItems:'left',
         height: '100%', backgroundColor:'#B4B4B4', padding:'5px', borderRadius:5}}>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <TaskIcon />
            </ListItemIcon>
            <ListItemText primary = "Projects" />
                {open? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit style={{padding: '0% 0% 0% 4%'}}>
          {projectsTitles? projectsTitles['$values'].map(project => (
              <NestedList project = {project?project:"loading"} meetings = {fullProjects?fullProjects["meetings"]["$values"]:"loading"} handleMeetingClick={handleMeetingClick}
              handleOpenUS={handleOpenUS} handleProjectdetails={handleProjectdetails} handleClickOpen={handleClick}/>
          )):'loading'}

         </Collapse>
         <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
            <AddIcon/>
            </ListItemIcon>
            <ListItemText primary = "Add Project" />
        </ListItemButton>
        <AddNewProjectPopUp open = {openAddProj} handleClickClose={handleClickClose}/>
        </Grid>
       </Grid>
     )
}

export default NavigationPanel