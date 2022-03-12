import React from 'react'
import { Button } from '@material-ui/core'

const Btn = ({color, text}) => {
    return (
        <Button variant = "contained" color={color}>{text}</Button>
      )
}

export default Btn