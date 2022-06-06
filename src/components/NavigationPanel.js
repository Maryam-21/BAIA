import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress'
import AddNewProjectPopUp from './AddNewProjectPopUp';
import InfoBox from './InfoBox'
import Logo from './Logo'
import { Project } from './Project';
 

const NavigationPanel = ({ handleServicesClick, handleOpenUS, handleProfile,
                          handleProjectdetails, handleOpenAsIs }) => {
  const [openAddProj, setOpenAddProj] = useState(false);
  const { projectsTitles, fullProjects } = useSelector((state) => state.projects)

  const handleClickOpenAddProject = () => {
    setOpenAddProj(true);
  };
  const handleClickCloseAddProject = () => {
    setOpenAddProj(false);
  };

  return (
    <Grid container spacing={1} style={{ width: '100%', display: 'block', padding: '1.7% 5%', minHeight: '100%' }}>
      <Grid item xs={false} sm={12} style={{ height: '15%' }}>
        <Logo />
      </Grid>
      <Grid item xs={false} sm={12} style={{ width: '100%', height: '15%' }}>
        <InfoBox handleProfile={handleProfile} />
      </Grid>
      <hr style={{ width: '100%', backgroundColor: 'black', height: '1px', border: 0 }} />

      <Grid item xs={false} sm={12} style={{
        width: '100%', alignItems: 'left',
        height: '100%', backgroundColor: '#B4B4B4', padding: '5px', borderRadius: 5
      }}>

        <ListItemButton>
          <ListItemIcon> 
            <FolderOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>

        <Collapse in={true} timeout="auto" unmountOnExit style={{ padding: '0% 0% 0% 4%' }}>
          {projectsTitles ? projectsTitles['$values'].map(project => (
            <Project title={project} handleProjectdetails={handleProjectdetails} 
            handleServicesClick={handleServicesClick}
            handleOpenUS={handleOpenUS}
            handleOpenAsIs= {handleOpenAsIs} ></Project>
          )) : <CircularProgress/>}
        </Collapse>

        <ListItemButton onClick={handleClickOpenAddProject}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Project" />
        </ListItemButton>
        <AddNewProjectPopUp open={openAddProj} handleClickClose={handleClickCloseAddProject} />
      </Grid>
    </Grid>
  )
}

export default NavigationPanel