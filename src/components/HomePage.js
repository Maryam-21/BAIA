import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Grid} from "@material-ui/core";
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'
import MyProfile from './MyProfile';
import ProjectDetails from './ProjectDetails';
import { getServices } from '../redux/slices/services'
import AsIsPage from './AsIsPage';

const HomePage = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openUS, setOpenUS] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openProjectDetails, setProjectDetails] = useState(false);
  const { fullProjects } = useSelector((state)=>state.projects);
  const { meetingID } = useSelector((state)=>state.services);
  const dispatch = useDispatch()
  
  //onClick functions  for buttons in CollapsableListItem
const handleServicesClick = () => {
  setOpenServices(true);
  setOpenUS(false);
  setOpenProfile(false);
  setProjectDetails(false);
  if (meetingID){
    dispatch(getServices(meetingID));
    console.log("meetingID")
  }
};

const handleOpenUS = () => {
  setOpenUS(true);
  setOpenServices(false);
  setOpenProfile(false);
  setProjectDetails(false);
};

const handleProfile = () => {
  setOpenProfile(true);
  setOpenServices(false);
  setOpenUS(false);
  setProjectDetails(false);
};

const handleProjectdetails = () => {
  setProjectDetails(true);
  setOpenProfile(false);
  setOpenServices(false);
  setOpenUS(false);
};
  

  return (
    <Box position="absolute" sx={{top:1, bottom:145, left:0, right:180, alignItems:'center'}}>
        
          {/* Navigation Panel */}
     <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={false} sm={3} className ="Grid1">
            <NavigationPanel
              handleServicesClick={handleServicesClick}
              handleOpenUS={handleOpenUS}
              handleProfile={handleProfile}
              handleProjectdetails={handleProjectdetails}
              />
          </Grid>

          {/* el hetta el 3l ymeen */}
          {openProfile ? (   <MyProfile/>   ): (
             openProjectDetails ? (   <ProjectDetails/>   ): (
              
              <Grid item xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
                <SpecificProject meetings = {fullProjects?fullProjects["meetings"]["$values"]:"loading"}
                openMeeting={openServices}
                openUS={openUS}
                openProfile={openProfile}
                openProjectDetails={openProjectDetails}
                />
                <AsIsPage meetings = {fullProjects?fullProjects["meetings"]["$values"]:"loading"}
                openMeeting={openServices}
                openUS={openUS}
                openProfile={openProfile}
                openProjectDetails={openProjectDetails}
                />
              </Grid>
            )
           ) }
      </Grid>      
    </Box>
  );
};

export default HomePage