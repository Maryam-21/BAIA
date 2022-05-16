import {
  Box,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  CardHeader,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import  '../CSS/components.css';

const SpecificProject = ({meetings,openMeeting,openProject, openUS}) => {
  const [test, setTest] = useState("loading");
  const {projectsTitles, fullProjects} = useSelector((state)=>state.projects)
  const {services} = useSelector((state)=>state.services)

  useEffect(async() => {
    setTest(await meetings)
  });
  return (
    <Box>
      {openUS ? (
        <div>
          <Grid container style={{ width: "100%", display: "flex" }}>
          <Grid container direction="column" xs={6} sm={6} spacing={2} style={{ padding: "2% 3% 2% 5%" }}>
              <Grid item style={{ marginTop: "5%" }}>
                <p className="textTitle"> {projectsTitles} </p>
              </Grid>
              <br />
            </Grid>
          </Grid>
          <Grid container style={{ width: "100%", display: "flex" }}>
          <Grid container direction="column" xs={6} sm={6} spacing={2} style={{ padding: "2% 3% 2% 5%" }}>
              <Grid item style={{ marginTop: "5%" }}>
                <p className="textTitle"> USER STORY </p>
              </Grid>
              <br />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div></div>
      )}

      {openMeeting ? (
        <div>
          <Grid container style={{ width: "100%", display: "flex" }}>
            <Grid container direction="column" xs={6} sm={6} spacing={2} style={{ padding: "2% 3% 2% 5%" }}>
              <Grid item style={{ marginTop: "5%" }}>
                <p className="textTitle"> {projectTitle} </p>
              </Grid>
              <br />
            </Grid>
          </Grid>
        <div class="center">
          <Card style={{ backgroundColor: "#E9E9E9" }}>
            <CardHeader
              style={{ backgroundColor: "rgb(180, 180, 180)" }}
              action={
                <FormControl style={{ width: "130px" }}>
                  <InputLabel style={{ marginRight: "3%" }} id="1">
                    Participants{" "}
                  </InputLabel>
                  <Select
                    labelId="1"
                    label="Participants"
                    autoWidth
                  >
                    <MenuItem value={1}>Ahmed</MenuItem>
                    <MenuItem value={2}>Mohammed</MenuItem>
                    <MenuItem value={3}>Mahmoud</MenuItem>
                  </Select>
                </FormControl>
              }
              title="Meeting ID 1"
              subheader="September 14, 2016"
            ></CardHeader>
            <CardContent>
              <Card
                style={{
                  backgroundColor: "white",
                  padding: "7px",
                  marginBottom: "1%",
                  borderColor: "black",
                }}
              >
                ID 1: Login
              </Card>

              <Card
                style={{
                  backgroundColor: "white",
                  padding: "7px",
                  marginBottom: "1%",
                  borderColor: "black",
                }}
              >
                ID 2: Home Page
              </Card>
            </CardContent>
            <Button
              style={{
                textTransform: "none",
                marginLeft: "14px",
                marginBottom: "10px",
                fontFamily: "sans-serif",
                fontWeight: "600",
                color: "rgb(71, 70, 70)",
                fontSize: "15px",
              }}
            >
              ⊕ Add New Service
            </Button>
          </Card>
          <Grid
            style={{ width: "95%", display: "flex", padding: "2% 7% 2% 4%" }}
          >
            {/* <Grid
              container
              direction="column"
              xs={12}
              sm={12}
              spacing={2}
              style={{ padding: "2% 7% 2% 3%" }}
            >
              <Grid
                item
                style={{
                  height: "100%",
                  backgroundColor: "#E9E9E9",
                  borderRadius: 10,
                }}
              >
                <p className="textTitle"></p>
                <p>
                  {test != "loading" ? test[0]["meetingTitle"] : "loading test"}
                </p>
                {services.map((service) => (
                  <p>{"Service: " + service}</p>
                ))}
                %
              </Grid>
            </Grid> */}
          </Grid>
          <Button
            color="primary"
            variant="contained"
            style={{
              textTransform: "none",
              padding: "14px 14px",
              marginLeft: "40%",
            }}
          >
            {" "}
            Generate User Story
          </Button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Box>
  );
};

export default SpecificProject;
