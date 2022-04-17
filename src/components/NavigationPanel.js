import { Box,Grid } from '@material-ui/core'
import React from 'react'
import MyProjects from './MyProjects'
import InfoBox from './InfoBox'
import Logo from './Logo'

const NavigationPanel = ({user}) => {
  return (
        <Box sx={{bgcolor:' #E5E5E5', display:"flex", width:"100%", height:'100%', p:'1.6% 7%'}}>
             <Grid container spacing={1} style={{width:'100%'}}>
                <Grid item xs={0} sm={12} style={{height:'15%'}}>
                    <Logo/>
                </Grid>
                <Grid item xs={0} sm={12} style={{width:'90%', height:'20%'}}>
                    <InfoBox user= {user}/>
                </Grid>
                <hr style={{width:'90%', backgroundColor:'black', height:'1px', border:0}}/>
                <h2>My Projects</h2>
                <Grid item xs={0} sm={12} style={{width:'90%', alignItems:'left', 
                 height:'50%', backgroundColor:'#B4B4B4', padding:'5px 50px 5px 5px', borderRadius:5}}>
                    <MyProjects user= {user}/>
                </Grid>
            </Grid>
        </Box>
     )
}

export default NavigationPanel