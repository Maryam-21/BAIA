import {TextField } from '@material-ui/core'
import React, {useState } from 'react'

const TextBox = ({text, required, type, onchange, errormsg}) => {

  const changeState =(e)=>{
    const val = e.target.value
    onchange(val)
    console.log(val)
  }
  return (
      <TextField 
      error = {errormsg.length === 0 ? false:true}
      helperText={errormsg}
      margin="normal" 
      fullWidth 
      id="outlined-basic" 
      label={text} 
      variant="outlined"
      required = {required} 
      type = {type} 
      onChange={changeState}/>
  )
}

export default TextBox