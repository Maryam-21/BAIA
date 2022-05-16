import React, {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { getProjectsTitles, getFullProjects } from '../redux/slices/projects'
import { getServices } from '../redux/slices/services'

import HomePage from './HomePage';

export default function () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjectsTitles());
        dispatch(getFullProjects())
        dispatch(getServices())
      },[dispatch]);

    return (
    <HomePage />
  )
}
