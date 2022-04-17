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
        <h2>My Projects</h2>
        <Box sx={{bgcolor:'#B4B4B4', display:"flex", alignItems: 'left', p:'5px 50px 5px 5px', borderRadius:5}}>
            <Grid container>
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
        </Box>
    </div>
  )
}

export default MyProjects