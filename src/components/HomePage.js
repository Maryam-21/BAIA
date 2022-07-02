import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Grid} from "@material-ui/core";
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'
import MyProfile from './MyProfile';
import { getServices, getValidatedServices, setValidatedServices } from '../redux/slices/services'
import Welcome from './Welcome';
import ProjectDetails from './ProjectDetails';

const HomePage = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openUS, setOpenUS] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openProjectDetails, setProjectDetails] = useState(false);
  const [openAsIs, setOpenAsIs] = useState(false);
  const [openWelcome, setOpenWelcome] = useState(false);

  const { meetingID } = useSelector((state)=>state.services);
  const { fullProjects } = useSelector((state)=>state.projects);

  const dispatch = useDispatch()
  
  //onClick functions  for buttons in CollapsableListItem

const handleOpenAsIs = () =>{
  setOpenAsIs(true);
  setOpenServices(false);
  setOpenUS(false);
  setOpenProfile(false);
  setProjectDetails(false);
  setOpenWelcome(false);

  if (fullProjects){
    dispatch(getValidatedServices(fullProjects["projectID"]));
  }
}

const handleOpenWelcome = () =>{
  setOpenWelcome(true);
  setOpenAsIs(false);
  setOpenServices(true);
  setOpenUS(false);
  setOpenProfile(false);
  setProjectDetails(false);
}

const handleServicesClick = () => {
  setOpenServices(true);
  setOpenUS(false);
  setOpenProfile(false);
  setProjectDetails(false);
  setOpenAsIs(false);
  setOpenWelcome(false);
  if (meetingID){
    dispatch(getServices(meetingID));
  }
};

const handleOpenUS = () => {
  setOpenUS(true);
  setOpenServices(false);
  setOpenProfile(false);
  setProjectDetails(false);
  setOpenAsIs(false);
  setOpenWelcome(false);
};

const handleProfile = () => {
  setOpenProfile(true);
  setOpenServices(false);
  setOpenUS(false);
  setProjectDetails(false);
  setOpenAsIs(false);
  setOpenWelcome(false);
};

const handleProjectdetails = () => {
  setProjectDetails(true);
  setOpenProfile(false);
  setOpenServices(false);
  setOpenUS(false);
  setOpenAsIs(false);
  setOpenWelcome(false);
};
  

  return (
    <Box position="absolute" sx={{top:1, bottom:145, left:0, right:180, alignItems:'center'}}>
        
          {/* Navigation Panel */}
     <Grid container spacing={1} style={{height:'200%'}}>
          <Grid item xs={false} sm={3} className ="Grid1">
            <NavigationPanel
              handleServicesClick={handleServicesClick}
              handleOpenUS={handleOpenUS}
              handleProfile={handleProfile}
              handleProjectdetails={handleProjectdetails}
              handleOpenAsIs = {handleOpenAsIs}
              />
          </Grid>




          {
            openWelcome? <Welcome/>: 
            openProfile? <MyProfile/>:
            openProjectDetails? <ProjectDetails/>:
            <Grid item xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
                <SpecificProject
                openAsIs={openAsIs}
                openMeeting={openServices}
                openUS={openUS}
                openProfile={openProfile}
                openProjectDetails={openProjectDetails}
                />
               
            </Grid>
             
          }

      </Grid>      
    </Box>
  );
};

export default HomePage