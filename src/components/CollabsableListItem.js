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

function CollabsableListItem({
  title, //project name
  list=["meeting 1"],
  handleMeetingClick,
  handleOpenUS,
  handleProjectdetails,
}) 
{
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);

  //drop down when project name is clicked
  const handleClick = () => {
    //getfullproject
    dispatch(getFullProjects(title));
    setOpen(!open);
  };
  //drop down when meeting name is clicked
  const handleClickk = () => {
    //list.map(item => console.log(item))
    setOpenn(!openn);
  };
  return (
    <div>
      <ListItemButton onClick={function(event){handleClick(); handleProjectdetails()}}>
        <ListItemIcon>
          <TaskIcon />
        </ListItemIcon>
        <ListItemText primary={title} /> {/* Project Name*/}
        {open ? <ExpandLess /> : <ExpandMore />} {/*up & down arrow*/}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>



          <ListItemButton  sx={{ pl: 4 }} onClick={handleProjectdetails}>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary={"Project Details"} />
          </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} onClick={handleClickk}>
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <ListItemText primary={"First Meeting"} />
              {openn ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          
        </List>
        <Collapse in={openn} timeout="auto" unmountOnExit>
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
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Meeting" />
        </ListItemButton>
      </Collapse>
    </div>
  );
}

export default CollabsableListItem;
