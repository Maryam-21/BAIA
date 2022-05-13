import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getProjectsTitles, getFullProjects } from '../redux/slices/projects'
import { getServices } from '../redux/slices/services'
import HomePage from './HomePage';

export default function () {
    const { name, compName, id } = useParams();

    const dispatch = useDispatch()
    const userInfo = {
        userID: id,
        userName: name,
        companyName: compName
    }
    useEffect(() => {
        dispatch(getProjectsTitles());
        dispatch(getFullProjects())
        dispatch(getServices())
        //GetServices()
      },[dispatch]);

     /* const GetServices = async () => {
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
    }*/

    return (
    <HomePage userInfo={userInfo}/>
  )
}
