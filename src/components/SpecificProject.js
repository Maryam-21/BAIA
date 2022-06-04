import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import  '../CSS/components.css';
import Services from "./Services";
import UserStories from "./UserStories";

const SpecificProject = ({meetings,openMeeting, openUS}) => {
  const [test, setTest] = useState("loading");
  const {projectsTitles, fullProjects} = useSelector((state)=>state.projects)
  const {services} = useSelector((state)=>state.services)

  useEffect(async() => {
    setTest(await meetings)
  });
  return (
    <div>
      {openUS ? (
        <UserStories/>
      ) : (
        <div></div>
      )}
{/*//////// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      {openMeeting ? (
        <Services></Services>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SpecificProject;
