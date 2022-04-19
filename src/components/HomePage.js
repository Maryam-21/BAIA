import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import NavigationPanel from './NavigationPanel'
import SpecificProject from './SpecificProject'

const HomePage = () => {
  const { name, compName, id } = useParams();

    const User = {
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

    const userInfo = {
      userID: id,
      userName: name,
      companyName: compName
    }


  return (
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}}>
        <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={0} sm={2} style={{minHeight:'100.6%', backgroundColor:'#E5E5E5',
           boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <NavigationPanel user = {userInfo}/>
          </Grid>
        
          <Grid item xs={12} sm={10} style={{alignContent:'center', height:'100%'}}>
            <h2>Nothing Selected Yet</h2>
          </Grid>
      </Grid>    
    </Box>
  )
}

export default HomePage