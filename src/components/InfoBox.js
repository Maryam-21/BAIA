import { Box, Typography } from "@material-ui/core";
import { padding, spacing } from "@mui/system";
import React from "react";
import image from "../../src/img_avatar.png";
import "./components.css";

const InfoBox = ({ user }) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        p: "5px 5px 5px 5px",
        borderRadius: 5,
      }}
    >
      <div>
        <img class="i" src={image} alt="Avatar"></img>
        <div class='content'>
          <p class="user">{user.userName}</p>
          <p  class="userCompany">{user.companyName}</p>
        </div>
      </div>
    </Box>
  );
};

export default InfoBox;
