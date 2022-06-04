import React, { useState } from 'react'
import { getFullProjects, setFullProjects } from '../redux/slices/projects'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import List from "@mui/material/List";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import {Meeting} from './Meeting';
import AddNewMeetingPopup from './AddNewMeetingPopUp'
 
export const Project = ({ title, handleProjectdetails, handleServicesClick, handleOpenUS }) => {
  const [openProject, setOpenProject] = useState(false);
  const [openMeetings, setOpenMeetings] = useState(false);
  const [openAddMeeting, setOpenAddMeeting] = useState(false);

  const { fullProjects } = useSelector((state) => state.projects)

  const dispatch = useDispatch()

  const handleClickOpenAddMeeting = () => {
    setOpenAddMeeting(true);
  };
  const handleClickCloseAddMeeting = () => {
    setOpenAddMeeting(false);
  };
  const handleClick = () => {
    setOpenProject(!openProject);
    dispatch(getFullProjects(title));
  };
  const handleOpenMeetings = () => {
    setOpenMeetings(!openMeetings);
  }
  const reverseArray = (array) => {
    let arr = [...array]
    return arr.reverse()
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FolderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={title} />
        {openProject ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openProject} timeout="auto" unmountOnExit style={{ padding: '0% 0% 0% 4%' }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleProjectdetails}>
            <ListItemIcon>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Project Details"} />
          </ListItemButton>
          {/*Meetings should be rendered here*/}
          <ListItemButton sx={{ pl: 4 }} onClick={handleOpenMeetings}>
            <ListItemIcon>
              <FolderOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Meetings" />
            {openMeetings ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openMeetings} timeout="auto" unmountOnExit style={{ padding: '0% 0% 0% 4%' }}>
            {
              fullProjects ? reverseArray(fullProjects['meetings']['$values']).map(meeting => (
                <Meeting meeting={meeting} handleServicesClick={handleServicesClick}></Meeting>
              )) : "loading"
            }
          </Collapse>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="As - Is Document" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="User Stories" onClick={handleOpenUS}/>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={handleClickOpenAddMeeting}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Meeting" />
          </ListItemButton>
        </List>
        <AddNewMeetingPopup open={openAddMeeting} handleClickClose={handleClickCloseAddMeeting}></AddNewMeetingPopup>
      </Collapse>
    </div>
  )
}
