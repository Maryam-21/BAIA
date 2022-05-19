import React, {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { getProjectsTitles, getFullProjects } from '../redux/slices/projects'
import { useSelector } from 'react-redux';
import { getServices } from '../redux/slices/services'

import HomePage from './HomePage';
export default function () {
const { user } = useSelector((state)=>state.user)
    
const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjectsTitles(user.userID));
      },[dispatch,user]);

    return (
    <HomePage />
  )
}
