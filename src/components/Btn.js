import React from 'react'
import { Button } from '@material-ui/core'

const Btn = ({edge, color, text, size, variant, onclick, width, color2, fontColor, margin, fontSize, padding,borderRadius, borderBottomStyle}) => {

    return (
        <Button variant = {variant} color={color} size={size} edge={edge}
         style={{width: width, textTransform: 'none', backgroundColor:color2, color:fontColor, margin:margin, fontSize:fontSize, padding:padding,     borderTopLeftRadius: 0,
        }}
         onClick={onclick}>{text}
         </Button>
      )
}

export default Btn