import { Box,Grid } from '@material-ui/core'
import React from 'react'
import MyProjects from './MyProjects'
import InfoBox from './InfoBox'
import Logo from './Logo'

const NavigationPanel = ({user}) => {
  return (
        <Box sx={{bgcolor:' #E5E5E5', display:"flex", width:"100%",height:'100%',p:'20px',
         borderRadius:5}}>
             <Grid container direction="column" item xs={12} spacing={2} style={{width:'100%'}} 
                alignItems='center'>
                <Grid item>
                    <Logo/>
                </Grid>
                <Grid item style={{width:'90%'}}>
                    <InfoBox user= {user}/>
                </Grid>
                <hr style={{width:'90%', backgroundColor:'black', height:'1px', border:0}}/>
                <Grid item style={{width:'90%', alignItems:'left'}}>
                    <MyProjects user= {user}/>
                </Grid>
            </Grid>
        </Box>
     )
}

export default NavigationPanel