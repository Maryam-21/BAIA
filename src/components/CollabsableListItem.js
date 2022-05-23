import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import TaskIcon from "@mui/icons-material/Task";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { getFullProjects } from '../redux/slices/projects'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddNewMeetingPopUp from './AddNewMeetingPopUp';

function CollabsableListItem({
  title, //project name
  handleMeetingClick,
  handleOpenUS,
  handleProjectdetails,
}) 
{
  const dispatch = useDispatch()
  const [openProject, setOpenProject] = React.useState(false);
  const [openMeeting, setOpenMeeting] = React.useState(false);
  const [openAddMeeting, setOpenAddMeeting] = React.useState(false);
  const {fullProjects} = useSelector((state)=>state.projects)


  //drop down when project name is clicked
  const handleClick = () => {
    //getfullproject
    dispatch(getFullProjects(title));
    setOpenProject(!openProject);
  };
  //drop down when meeting name is clicked
  const handleClickk = () => {
    setOpenMeeting(!openMeeting);
  };
  
  const handleClickOpen = () => {
    setOpenAddMeeting(true);
  };
  const handleClickClose = () => {
    setOpenAddMeeting(false);
  };
  const reverseArray = (array) =>{
    let arr = [...array]
    return arr.reverse()
  };

  return (
    <div>
      <ListItemButton onClick={function(event){handleClick(); handleProjectdetails()}}>
        <ListItemIcon>
          <TaskIcon />
        </ListItemIcon>
        <ListItemText primary={title} /> {/* Project Name*/}
        {openProject ? <ExpandLess /> : <ExpandMore />} {/*up & down arrow*/}
      </ListItemButton>

      <Collapse in={openProject} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} onClick={handleProjectdetails}>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary={"Project Details"} />
          </ListItemButton>
         
          {
            fullProjects?reverseArray(fullProjects['meetings']['$values']).map(meeting=>(
            <ListItemButton sx={{ pl: 4 }} onClick={handleClickk}>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary={meeting['meetingTitle']} />
              {openMeeting ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            )):"loading"
          }

        </List>
        <Collapse in={openMeeting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6 }} onClick={handleMeetingClick}>
              {" "}
              {/* to show services on the right when services is clicked */}
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <ListItemText primary={"Services"} />
              <br></br>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }} onClick={handleOpenUS}>
              {" "}
              {/* to show the project name when US is clicked */}
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <ListItemText primary={"User Stories"} />
              <br></br>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton sx={{ pl: 4 }} onClick={handleClickOpen}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Meeting" />
        </ListItemButton>
        <AddNewMeetingPopUp open = {openAddMeeting} handleClickClose={handleClickClose} />
      </Collapse>
    </div>
  );
}

export default CollabsableListItem;
