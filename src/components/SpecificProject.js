import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import './components.css';

const SpecificProject = ({user}) => {
    return (
      <Box>
        <h2>{"Project ID: " + user.projects[0].projectID}</h2>
        <Grid container spacing={2} style={{width:'100%'}}>
          
          <Grid container item direction='column' xs={6} spacing={2} style={{width:'100%', padding: '2% 10%'}}>
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
          <Grid container item direction='column' xs={6} spacing={2} style={{width:'100%', padding: '2% 10%'}}>
            <Grid item style={{backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p class='textTitle'>Description</p>
              <p>{user.projects[0].projectName}</p>
            </Grid>
          </Grid>
        </Grid>
        </Box>
  )
}

export default SpecificProject