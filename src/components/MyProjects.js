import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Btn from './Btn'
import './components.css'

const MyProjects = ({user}) => {

    const DisplayDetails =() => {
        console.log("Hello!!! ►")
    }
    const AddMeeting = (projID) => {
        //TODO:
        //Pop up Meeting input
        //user.projects[projID].Add(new Meeting(projID))
    }
    const AddProject = () => {
        //TODO:
        //Pop up Project input
        //user.projects.Add(new Projrct(userID))
    }

  return (
        <Box sx={{bgColor:'#B4B4B4', minHeight:'100%',
          p:'5px', borderRadius:5, alignItems:'left'}}>
                <button class="button" type="button" onclick={DisplayDetails}>{user.companyName}</button>
               {user.projects.map(function(proj, i){
                   return (
                    <div>
                        <button class="button" type="button" onclick={DisplayDetails}>{proj.projectName}</button>
                   
                   {user.projects[i].meetings.map(function(meeting, j){
                        return (
                            <div>
                            <button class="button" type="button" onclick={DisplayDetails}>{meeting}</button>
                            <br/>
                            </div>
                        )
                    })}
                    <Btn text="Add New Meeting" size='small' variant="text" onclick={AddMeeting}/>
                   </div>
                   )
                   })}
                <Btn text="Add New Project" size='small' variant="text" onclick={AddProject}></Btn>
        </Box>
  )
}

export default MyProjects