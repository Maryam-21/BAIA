import React, {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { getProjectsTitles, getFullProjects } from '../redux/slices/projects'
import { useSelector } from 'react-redux';
import { getServices } from '../redux/slices/services'

import HomePage from './HomePage';
export default function () {
const { user, success } = useSelector((state)=>state.user)
    
const dispatch = useDispatch()

    useEffect(() => {
      if(user)  
        dispatch(getProjectsTitles(user.userID))
      },[dispatch, success]);

    return (
    <HomePage />
  )
}
