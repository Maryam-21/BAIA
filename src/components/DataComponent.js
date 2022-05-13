import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsTitles, getFullProjects } from '../redux/slices/projects'
import HomePage from './HomePage';

export default function () {
    const { name, compName, id } = useParams();
    //const [projectsTitles, setProjectsTitles] = useState([]);
    //const [fullProjects, setFullProjects] = React.useState([]);
    const [services, setServices] = React.useState([]);

    const {projectsTitles, fullProjects} = useSelector((state)=>state.projects)
  
    const dispatch = useDispatch()
    const userInfo = {
        userID: id,
        userName: name,
        companyName: compName
    }
    useEffect(() => {
        //GetProjectsNamesAPI()
        //GetProjectsMeetingsAPI()
        dispatch(getProjectsTitles());
        dispatch(getFullProjects())
        GetServices()
      },[dispatch]);
  

      const GetServices = async () => {
        try {
          const response = await fetch("http://127.0.0.1:5000/services", {
            method: 'Get',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            }).then(async(response)=>{
              if (response.ok) {
                //console.log('ok')
                const svs = await response.json()
                setServices(svs)
                console.log(svs)
                  
            }
            else {
                console.log('not ok svs')
            }
            })
            
        }
        catch (e) {
          console.log(e)
        }
    }
      /*const GetProjectsNamesAPI = async () => {
        try {
          const response = await fetch("https://localhost:44304/api/Users/GetProjectNames/"+ userInfo.userID, {
            method: 'GET',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            }).then(async(response)=>{
              if (response.status == 200) {
                //console.log('ok')
                const projectDate = await response.json()
                const vals = await projectDate["$values"]
                setProjectsTitles(vals)
                //console.log(projectDate)
                  
            }
            else {
                console.log('not ok data comp')
            }
            })
            
        }
        catch (e) {
          console.log(e)
        }
    }*/

   /* const GetProjectsMeetingsAPI = async () => {
      try {
        const response = await fetch("https://localhost:44304/api/Projects/GetProject/Conference Room Reservation System", {
          method: 'GET',
          mode: 'cors',
          headers:{
              'Accept': 'application/json',
              'Content-Type' : 'application/json; charset=UTF-8',
          },
          }).then(async(response)=>{
            if (response.status == 200) {
            //console.log('ok home page')
            const projectDate = await response.json()
            setFullProjects(projectDate)
            console.log(projectDate)
        }
        else {
            console.log('not ok home page')
        }}
            )
          
      }
      catch (e) {
        console.log(e)  
      }
    }*/
  return (
    <HomePage userInfo={userInfo} projectsTitles={projectsTitles} fullProjects={fullProjects} services = {services}/>
  )
}
