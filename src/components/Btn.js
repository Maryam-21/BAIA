import React from 'react'
import { Button } from '@material-ui/core'

const Btn = ({color, text,size,onclick}) => {
    return (
        <Button variant = "contained" color={color} size={size} style={{width:'100%'}} onClick={onclick}>{text}</Button>
      )
}

export default Btn