import { Box,Grid } from '@material-ui/core'
import React from 'react'
import MyProjects from './MyProjects'
import InfoBox from './InfoBox'
import Logo from './Logo'

const NavigationPanel = ({user}) => {
  return (
      <Grid container spacing={1} style={{width:'100%', display:'block', padding: '1.7% 5%', minHeight:'100%'}}>
        <Grid item xs={0} sm={12} style={{height:'15%'}}>
            <Logo/>
        </Grid>
        <Grid item xs={0} sm={12} style={{width:'95%', height:'15%'}}>
            <InfoBox user= {user}/>
        </Grid>
        <hr style={{width:'100%', backgroundColor:'black', height:'1px', border:0}}/>
        <h2>My Projects</h2>
        <Grid item xs={0} sm={12} style={{width:'95%', alignItems:'left',
         height: '380px', backgroundColor:'#B4B4B4', padding:'5px', borderRadius:5}}>
            <MyProjects user= {user}/>
        </Grid>
       </Grid>
     )
}

export default NavigationPanel