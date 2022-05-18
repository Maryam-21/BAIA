import React, { useState } from 'react'
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'
import { useSelector } from 'react-redux';
import { Box, Grid} from "@material-ui/core";
import MyProfile from './MyProfile';


const HomePage = () => {
  const [openMeeting, setOpenMeeting] = useState(false);
  const [openUS, setOpenUS] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { fullProjects } = useSelector((state)=>state.projects)

  //onClick functions for buttons in CollapsableListItem
const handleMeetingClick = () => {
  setOpenMeeting(!openMeeting);
  setOpenUS(false);
  setOpenProfile(false);
};

const handleOpenUS = () => {
  setOpenMeeting(false);
  setOpenUS(!openUS);
  setOpenProfile(false);
};

const handleProfile = () => {
  setOpenProfile(!openProfile);
  setOpenMeeting(false);
  setOpenUS(false);
};
  
console.log(fullProjects)
  return (
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}}>
        
          {/* Navigation Panel */}
     <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={0} sm={3} class ="Grid1">
            <NavigationPanel
              handleMeetingClick={handleMeetingClick}
              handleOpenUS={handleOpenUS}
              handleProfile={handleProfile}/>
          </Grid>

          {/* el hetta el 3l ymeen */}
          {openProfile ? (   <MyProfile/>   ): (
          <Grid item xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
            <SpecificProject meetings = {fullProjects?fullProjects["meetings"]["$values"]:"loading"}
             openMeeting={openMeeting}
             openUS={openUS}
             openProfile={openProfile}/>
             
          </Grid>
           ) }
      </Grid>      
    </Box>
  );
};

export default HomePage