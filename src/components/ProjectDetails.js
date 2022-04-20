import React from 'react'
import { Box, Grid } from '@material-ui/core'
import SpecificProject from './SpecificProject'

export default function ProjectDetails() {
  return (
    <Box position="absolute" sx={{top:0, bottom:0, left:0, right:0, alignItems:'center'}}>
        <Grid container spacing={1} style={{height:'100%'}}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={10} style={{alignContent:'center', height:'100%'}}>
            <Grid item style={{height:'100%', backgroundColor:'#E9E9E9', borderRadius:10}}>
              <p class='textTitle'>Meeting Title</p>
              <p>test</p>
            </Grid>
          </Grid>
      </Grid>    
    </Box>
  )
}
