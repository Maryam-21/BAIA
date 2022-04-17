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
              projectName: 'Spotify',
              Meetings: [ 1, 2 ]
            }
        ]
    }

  return (
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}} >
        <Grid container spacing={1} style={{height:'100%'}} alignItems='center'>
        <Grid item xs={0} sm={2} style={{height:'100%'}}>
            <NavigationPanel user = {UserInfo}/>
        </Grid>
        
        <Grid item xs={12} sm={10} style={{alignContent:'center',height:'100%'}}>
          <Box sx={{border:1}}>
              <SpecificProject user = {UserInfo}/>
          </Box>
        </Grid>
      </Grid>
    
    </Box>
  )
}

export default HomePage