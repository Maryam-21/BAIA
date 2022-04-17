import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Btn from './Btn'
import './components.css'

const MyProjects = ({user}) => {

    const DisplayDetails =() => {
        console.log("Hello!!!")
    }

  return (
      <div>
        <Grid container style={{backgroundColor:'#B4B4B4', height:'100%',
         alignItems:'left', padding:'5px 50px 5px 5px', borderRadius:5}}>
           <Grid item>
               <Btn text={user.projects[0].projectName + " ►"} size='small' variant="text" onclick={DisplayDetails}></Btn>
            </Grid>
            <Grid item>
                <Btn text="Add New Meeting" size='small' variant="text"></Btn>
            </Grid>
            <Grid item>
                <Btn text="Add New Project" size='small' variant="text"></Btn>
            </Grid>
        </Grid>
    </div>
  )
}

export default MyProjects