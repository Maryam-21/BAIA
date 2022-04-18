import { Box, Grid } from '@material-ui/core'
import React from 'react'
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'

const HomePage = () => {
    const UserInfo = {
        userName: 'Batoul Loulah',
        companyName: 'Dell',
        projects: [
            {
              projectID: 1,
              projectName: 'Project 1',
              meetings: [ 'M1', 'M2' ]
            },
            {
              projectID: 2,
              projectName: 'Project 2',
              meetings: [ 'M1', 'M2', 'M3' ]
            },
            {
              projectID: 3,
              projectName: 'Project 3',
              meetings: [ 'M1']
            }
        ]
    }

  return (
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}}>
        <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={0} sm={2} style={{minHeight:'100%', backgroundColor:'#E5E5E5'}}>
            <NavigationPanel user = {UserInfo}/>
          </Grid>
        
          <Grid item xs={12} sm={10} style={{alignContent:'center',height:'100%'}}>
            <SpecificProject user = {UserInfo}/>
          </Grid>
      </Grid>    
    </Box>
  )
}

export default HomePage