import { Box, Typography } from '@material-ui/core'
import { padding, spacing } from '@mui/system'
import image from "../../src/img_avatar.png";
import React from 'react'
import { useSelector } from 'react-redux';
import '../CSS/components.css';
import Button from '@mui/material/Button';

const InfoBox = ({handleProfile}) => {
  const { user } = useSelector((state)=>state.user)
  return (
    <Box sx={{bgcolor: "primary.main", display: "flex", p: "5px 5px 5px 5px", borderRadius: 5}}>
        <div>
        <Button onClick={handleProfile}> <img class="i" src={image} alt="Avatar" /> </Button>
        <div class='content'>
          <p class="user"> {user?user.name:"loading"} </p>
          <p class="userCompany"> {user?user.companyName:'loading'} </p>
        </div>
      </div>
    </Box>
  );
};

export default InfoBox;
