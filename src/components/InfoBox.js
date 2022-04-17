import { Box, Typography } from '@material-ui/core'
import { padding, spacing } from '@mui/system'
import React from 'react'
import './components.css';

const InfoBox = ({user}) => {
  return (
    <Box sx={{bgcolor:'primary.main', display:"flex",p:'5px 50px 5px 5px', borderRadius:5}}>
        <div>
        <p class="user">{user.userName}</p>
        <p>{user.companyName}</p>
        </div>
    </Box>
  )
}

export default InfoBox