import React from 'react'
import { Button } from '@material-ui/core'

const Btn = ({color, text, size, variant, onclick, width, color2, fontColor}) => {

    return (
        <Button variant = {variant} color={color} size={size}
         style={{width: width, textTransform: 'none', backgroundColor:color2, color:fontColor}}
         onClick={onclick}>{text}
         </Button>
      )
}

export default Btn