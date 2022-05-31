import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
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
          <FolderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={meeting['meetingTitle']} />
        {openMeeting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openMeeting} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }} onClick={handleServicesClick}>
            {/* to show services on the right when services is clicked */}
            <ListItemIcon>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Services"} onClick={handleServicesClick}/>
            <br></br>
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  )
}
