import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import './components.css';

const SpecificProject = ({user}) => {
    return (
      <Box>
        <h2>{"Project ID: " + user.projects[0].projectID}</h2>
        <Grid container style={{width:'100%', display:'flex'}}>
          
          <Grid container direction='column' xs={6} sm={6} spacing={2} style={{padding: '2% 3% 2% 7%'}}>
            <Grid item style={{backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p class='textTitle'>Project Name</p>
              <p>{user.projects[0].projectName}</p>
            </Grid>
            <br/>
            <Grid item style={{backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p class='textTitle'>Project Name</p>
              <p>{user.projects[0].projectName}</p>
            </Grid>
            <br/>
            <Grid item style={{backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p class='textTitle'>Project Name</p>
              <p>{user.projects[0].projectName}</p>
            </Grid>
          </Grid>
          <Grid container direction='column' xs={6} sm={6} spacing={2} style={{padding: '2% 7% 2% 3%'}}>
            <Grid item style={{height:'100%', backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p class='textTitle'>Description</p>
              <p>{user.projects[0].projectName}</p>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          
          
        </Grid>
      </Box>
  )
}

export default SpecificProject