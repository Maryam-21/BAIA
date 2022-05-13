import * as React from 'react';
import { useEffect } from 'react'
import List from '@mui/material/List';
import CollabsableListItem from './CollabsableListItem';

export default function NestedList({project,meetings,handleMeetingClick,handleOpenProject}) {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <CollabsableListItem title = {project} list = {meetings?meetings:'loading'}
       handleMeetingClick={handleMeetingClick} handleOpenProject={handleOpenProject}>
         </CollabsableListItem>                     
     
    </List>
  );
}
