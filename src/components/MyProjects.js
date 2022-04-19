import { Box, Grid } from '@material-ui/core'
import { InsertChart } from '@material-ui/icons'
import React from 'react'
import Btn from './Btn'
import './components.css'
import SpecificProject from './SpecificProject'

const MyProjects = ({user}) => {
    let projects = []
    let meetings = []
    let compBool = false
    
    const GetProjectsNamesAPI = async () => {
        try {
          const response = await fetch("https://localhost:44304/api/Projects", {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(user.userID)          
            })
            if (response.status == 200) {
                console.log('ok')
                const projectDate = await response.json()
                const projsNames = await projectDate.projectTitle
                for(var i = 0; i < projsNames.length; i++){
                    projects.push({
                        "projectName": projsNames[i]
                    })
                }
            }
            else {
                console.log('not ok')
            }
        }
        catch (e) {
          console.log(e)
        }
    }

    const DisplayDetails =() => {
        console.log("Hello!!! ►")
        return <SpecificProject proj={''}/>
    }
    
    const ToggleProjects = () => {
        const tmp = document.getElementsByClassName("projsDiv")
        if (compBool) {
            compBool = false;
            for(var i = 0; i < tmp.length; i++)
                tmp[i].style.display = 'none'
        }
        else {
            compBool = true;
            for(var i = 0; i < tmp.length; i++)
                tmp[i].style.display = 'flex'
        }
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
        {GetProjectsNamesAPI}
        <Btn color="" text={user.companyName} variant="text" onclick={ToggleProjects} />

        {projects.map(function(proj, i) {
           return (
               <div>
                    <div class='projsDiv' style={{display:'none'}}>
                        <Btn id={i} text={proj.projectName} size='small' variant="text" onclick={DisplayDetails}/>
                    </div>
                    {meetings.map(function(meeting, j){
                        return (
                            <div class='meetDiv' style={{display:'none'}}>
                                <Btn text={meeting} size='small' variant="text" onclick={DisplayDetails}/>
                            </div>
                        )
                    })}
                    <div class='projsDiv' style={{display:'none'}}>
                        <Btn text="Add New Meeting" size='small' variant="text" onclick={AddMeeting}/>
                    </div>
            </div>
            )
        })}
                       
        <Btn text="Add New Project" size='small' variant="text" onclick={AddProject}></Btn>
    </Box>
    )
}

export default MyProjects