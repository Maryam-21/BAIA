import { Box, Grid } from '@material-ui/core'
import { FamilyRestroomRounded } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import InfoBox from './InfoBox'
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'

const HomePage = ({userInfo,projectsTitles, fullProjects, services}) => {
  const [meetings, setMeetings] = useState(["loading"]);
  const [openMeeting, setOpenMeeting] = React.useState(false);
  const [openUS, setOpenUS] = React.useState(false);

  const handleMeetingClick = () => {
    setOpenMeeting(!openMeeting);
    setOpenUS(false);
};

  const handleOpenUS = () => {
    setOpenMeeting(false);
    setOpenUS(!openUS);
};
  /*useEffect(async() => {
    //console.log("home")
    setMeetings(await fullProjects["meetings"]["$values"])
    //console.log(m)
  });*/

  return ( // navigation panel and services & US page
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}}>
        <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={0} sm={3} style={{minHeight:'125%', backgroundColor:'#E5E5E5',
            boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <NavigationPanel user = {userInfo} projectsTitles = {projectsTitles?projectsTitles:["loading..."]} 
            projects={fullProjects} meetings = {meetings?meetings:"loading"} handleMeetingClick={handleMeetingClick}
            handleOpenUS={handleOpenUS}/>
          </Grid>
        
          <Grid item xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
            <SpecificProject user={userInfo} projectTitle={projectsTitles[0]} fullProject={fullProjects}
             meetings = {meetings?meetings:"loading"} services={services} openMeeting={openMeeting}
             openUS={openUS}/>
          </Grid>
      </Grid>    
    </Box>
  )
}

export default HomePage