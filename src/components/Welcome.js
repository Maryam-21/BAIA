import { Typography } from '@material-ui/core'
import React from 'react'
import img from '../Assets/BA Intelligent Assistant.png'
function Welcome() {
  return (
    <div className='center' style={{paddingTop: '30%'}}>

        <img src={img} style={{width:"50%", paddingLeft: '20%' }} />
    </div>
  )
}

export default Welcome