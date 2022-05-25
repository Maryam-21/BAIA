import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const Meeting = ({ meeting, handleServicesClick }) => {
  const [openMeeting, setOpenMeeting] = React.useState(false);
  //drop down when meeting name is clicked
  const handleClickMeeting = () => {
    setOpenMeeting(!openMeeting);
  };
  return (
    <div>
      <ListItemButton sx={{ pl: 4 }} onClick={handleClickMeeting}>
        <ListItemIcon>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary={meeting['meetingTitle']} />
        {openMeeting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openMeeting} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }} onClick={handleServicesClick}>
            {/* to show services on the right when services is clicked */}
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary={"Services"} onClick={handleServicesClick}/>
            <br></br>
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  )
}
