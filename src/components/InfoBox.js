import { Box } from '@material-ui/core'
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
        <Button onClick={handleProfile}> <img className="i" src={image} alt="Avatar" /> </Button>
        <div className='content'>
          <p className="user"> {user?user.name:"retrieving data..."} </p>
          <p className="userCompany"> {user?user.companyName:'retrieving data...'} </p>
        </div>
      </div>
    </Box>
  );
};

export default InfoBox;
