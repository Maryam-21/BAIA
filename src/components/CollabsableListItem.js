import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import TaskIcon from '@mui/icons-material/Task';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';


function CollabsableListItem({title,list,handleMeetingClick,handleOpenProject}) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        //list.map(item => console.log(item))
        handleOpenProject()
        setOpen(!open);
    };
 return (
    <div>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <TaskIcon />
            </ListItemIcon>
            <ListItemText primary = {title} />
                {open? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {list.map(item => (
                <ListItemButton sx={{ pl: 4 } } onClick={handleMeetingClick} >
                    <ListItemIcon>
                    <MeetingRoomIcon/>
                    </ListItemIcon>
                    <ListItemText primary={item["meetingTitle"]} />  
                </ListItemButton>
                ))
            }
            </List>
                <ListItemButton sx={{ pl: 4 } } >
                    <ListItemIcon>
                    <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary = "Add Meeting" />
                </ListItemButton>
            </Collapse>
         
    </div>
  )
}

export default CollabsableListItem