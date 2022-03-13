import { Box, TextField } from '@material-ui/core'
import React from 'react'

const TextBox = ({text, required, type}) => {
  return (
    <Box sx={{m:3}}>
      <TextField fullWidth id="outlined-basic" label={text} variant="outlined" required = {required} type = {type}/>
    </Box>
  )
}

export default TextBox