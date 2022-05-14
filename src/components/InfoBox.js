import { Box, Typography } from '@material-ui/core'
import { padding, spacing } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux';
import '../CSS/components.css';

const InfoBox = () => {
  const { user } = useSelector((state)=>state.user)
  return (
    <Box sx={{bgcolor:'primary.main', display:"flex",p:'5px 50px 5px 5px', borderRadius:5}}>
        <div>
        <p class="user">{user?user.name:"loading"}</p>
        <p>{user?user.companyName:'loading'}</p>
        </div>
    </Box>
  )
}

export default InfoBox