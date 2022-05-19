import React from 'react'
import { Button } from '@material-ui/core'

const Btn = ({color, text, size, variant, onclick}) => {
    return (
        <Button variant = {variant} color={color} size={size}
         style={{width: '100%', textTransform: 'none'}}
         onClick={onclick}>{text}
         </Button>
      )
}

export default Btn