import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import  '../CSS/components.css';
import AsIsPage from "./AsIsPage";
import ProjectDetails from "./ProjectDetails";
import Services from "./Services";
import UserStories from "./UserStories";
import Welcome from "./Welcome";

const SpecificProject = ({openMeeting, openUS, openAsIs, openProjectDetails}) => {
  
  return (
    <div>

      {
        openMeeting? <Services/>:
        openUS? <UserStories/>:
        openAsIs? <AsIsPage/>: <Welcome/>
      }

    </div>
  );
};

export default SpecificProject;
