import { Typography } from '@material-ui/core'
import React from 'react'
import img from '../Assets/BA Intelligent Assistant.png'
const Logo = () => {
  return (
    //<Typography color='primary' align='center' variant='h1'>BAIA</Typography>
    <img src={img} style={{width:"60%", paddingLeft:"10%", paddingTop: "3%"}} />
  )
}

export default Logo