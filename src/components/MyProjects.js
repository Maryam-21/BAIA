import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import Btn from './Btn'
import './components.css'
import SpecificProject from './SpecificProject'
import { useSelector } from 'react-redux';

const MyProjects = ({user}) => {
    let projects = []
    let meetings = []
    let compBool = false
    let nodes = []
    
    useEffect(() => {
        GetProjectsNamesAPI()
    }, []);

    const GetProjectsNamesAPI = async () => {
        try {
          const response = await fetch("https://localhost:44304/api/Users/GetProjectNames/"+ user.userID, {
            method: 'GET',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            })
            if (response.status == 200) {
                console.log('ok')
                const projectDate = await response.json()
                const vals = await projectDate["$values"]
                for(var i = 0; i < vals.length; i++){
                    projects.push({
                        "projectName": vals[i]
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
                continue
               // tmp[i].style.display = 'none'
        }
        else {
            compBool = true;
            for(var i = 0; i < tmp.length; i++)
            {    tmp[i].style.display = 'flex'
            }
            
            for(var i = 0; i < projects.length; i++)
            {
                nodes.push(projects[i]['projectName']);
            }
            
          console.log(nodes)

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
        <Btn color="" text={user.companyName} variant="text" onclick={ToggleProjects} />
        <div id='projsDiv'>
            {projects.map(node => (
            <Btn text={projects[0]['projectName']} size='small' variant="text" onclick={AddProject}></Btn>
            ))}
        </div>
                       
        <Btn text="Add New Project" size='small' variant="text" onclick={AddProject}></Btn>
    </Box>
    )
}

export default MyProjects