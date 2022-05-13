import { Box, Grid } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import  '../CSS/components.css';

const SpecificProject = ({projectTitle,fullProject,meetings,openMeeting,openProject}) => {  
  const [test, setTest] = useState("loading");
  const {projectsTitles, fullProjects} = useSelector((state)=>state.projects)
  const {services} = useSelector((state)=>state.services)

  useEffect(async() => {
    setTest(await meetings)
  });
    return (
      <Box>
        {openProject?
          <Grid container style={{width:'100%', display:'flex'}}>
          
          <Grid container direction='column' xs={6} sm={6} spacing={2} style={{padding: '2% 3% 2% 7%'}}>
            <Grid item style={{backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p className='textTitle'>Project</p>
              <p>{projectTitle}</p>
            </Grid>
            <br/>
            <Grid item style={{backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p className='textTitle'>System Actors</p>
              <p>{fullProject["systemActors"]}</p>
            </Grid>
          </Grid>
          <Grid container direction='column' xs={6} sm={6} spacing={2} style={{padding: '2% 7% 2% 3%'}}>
            <Grid item style={{height:'100%', backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p className='textTitle'>Description</p>
              <p>{fullProject["projectDescription"]}</p>
            </Grid>
          </Grid>
        </Grid>:<div></div>
        } 
        {openMeeting?
        <Grid style={{width:'95%', display:'flex', padding:'2% 7% 2% 4%'}}>
        <Grid container direction='column' xs={12} sm={12} spacing={2} style={{padding: '2% 7% 2% 3%'}}>
          <Grid item style={{height:'100%', backgroundColor:'#E9E9E9', borderRadius:10}}>
            <p className='textTitle'></p>
            <p>{test!="loading"?test[0]["meetingTitle"]:"loading test"}</p>
            {services?Array.from(services).forEach(service => {
              <p>{"Service: "+service}</p>
            })
            :"loading"}
          </Grid>
        </Grid>
      </Grid>:
      <div></div>}
        
      </Box>
  )
}

export default SpecificProject