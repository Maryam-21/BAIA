import * as React from 'react';
import { useEffect } from 'react'
import List from '@mui/material/List';
import CollabsableListItem from './CollabsableListItem';

export default function NestedList({project,meetings,handleMeetingClick,handleOpenUS, handleProjectdetails}) {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <CollabsableListItem id ={project} title = {project} list = {meetings?meetings:'loading'}
       handleMeetingClick={handleMeetingClick} handleOpenUS={handleOpenUS} handleProjectdetails={handleProjectdetails} >
         </CollabsableListItem>                     
     
    </List>
  );
}
