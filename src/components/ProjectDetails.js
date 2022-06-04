import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Grid, TextField } from "@material-ui/core";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BusinessIcon from '@mui/icons-material/Business';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { updateProject } from '../redux/slices/projects';
import Btn from './Btn'

const ProjectDetails = () => {
  const { fullProjects } = useSelector((state) => state.projects)
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [domain, setDomain] = useState("")
  const [actors, setActors] = useState("")
  const [projectDescription, setProjectDescription] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    setTitle("loading..")
    setCompany("loading..")
    setDomain("loading..")
    setActors("loading..")
    setProjectDescription("")
    if (fullProjects){
      setTitle(fullProjects['projectTitle']);
      setCompany(fullProjects['organizationName']);
      setDomain(fullProjects['domain']);
      setActors(fullProjects['systemActors'].slice(0, -2) );
      setProjectDescription(fullProjects['projectDescription']);
    }
      
  }, [fullProjects]);

  const onSaveChanges = () => {
    const payload = {
      'projectID': fullProjects.projectID,
      'projectTitle': title,
      'projectDescription': projectDescription,
      'domain': domain,
      'organizationName': company,
      'systemActors': actors
    }
    dispatch(updateProject(payload))
  }

  return (
    <Grid item xs={12} sm={7} style={{ alignContent: 'center', height: '100%' }}>
      <Grid style={{ padding: "1% 3% 0% 0%", marginLeft: "15%", marginTop: "5%" }}>
        <p className="textTitle"> Project Details </p> <hr style={{ width: "126%" }} />
      </Grid>
      <Card style={{ width: "70%", backgroundColor: "#E9E9E9", margin: "2% 15%", padding: "7% 17%" }}>

        <DriveFileRenameOutlineIcon className="icons" style={{ padding: "1% 2.5% 0% 0%" }} />
        <TextField id="1" label="Title" value={title} variant="standard" style={{ width: "93%" }}
          onChange={(e) => { setTitle(e.target.value) }} /> <br /><br />

        <BusinessIcon className="icons" style={{ padding: "0% 2.5% 1.2% 0%" }} />
        <TextField id="2" label="Company" value={company} variant="standard" style={{ width: "93%" }}
          onChange={(e) => { setCompany(e.target.value) }} /> <br /><br />

        <DomainVerificationIcon className="icons" style={{ padding: "0% 2.5% 1.2% 0%" }} />
        <TextField id="3" label="Domain" value={domain} variant="standard" style={{ width: "93%" }}
          onChange={(e) => { setDomain(e.target.value) }} /> <br /><br />

        <PeopleOutlineIcon className="icons" style={{ padding: "0% 2.5% 1.2% 0%" }} />
        <TextField id="4" label="Actors" value={actors} variant="standard" style={{ width: "93%" }}
          onChange={(e) => { setActors(e.target.value) }} /> <br /><br />

        <DescriptionOutlinedIcon className="icons" style={{ padding: "0% 2.5% 1.2% 0%" }} />
        <TextField id="5" label="Project Description" value={projectDescription} variant="standard" style={{ width: "93%" }}
          onChange={(e) => { setProjectDescription(e.target.value) }} /> <br /><br /><br />

        <Btn text="Save Changes" variant="contained" color2="#00A800" size="large" width="30%"
          margin="0% 38%" fontColor="white" onclick={onSaveChanges} />
      </Card>
    </Grid>

  );
};

export default ProjectDetails;