import { Box, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [openMeeting, setOpenMeeting] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const { fullProjects } = useSelector((state)=>state.projects)


  const handleMeetingClick = () => {
    setOpenMeeting(!openMeeting);
  };
  const handleOpenProject = () => {
    setOpenProject(!openProject);
    setOpenMeeting(false);
  };
  
  return (
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}}>
        <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={0} sm={3} style={{minHeight:'125%', backgroundColor:'#E5E5E5',
            boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <NavigationPanel
              handleMeetingClick={handleMeetingClick}
              handleOpenProject={handleOpenProject}/>
          </Grid>
        
          <Grid item xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
            <SpecificProject meetings = {fullProjects?fullProjects["meetings"]["$values"]:"loading"}
             openMeeting={openMeeting}
             openProject={openProject}/>
          </Grid>
      </Grid>    
    </Box>
  )
}

export default HomePage