import React from "react";
import { Grid, Button, Card } from "@material-ui/core";
import Btn from './Btn'

const ProjectDetails = () => {
  return (
    <Grid direction="column" xs={12} sm={7} style={{ alignContent: "center", height: "100%" }}>
      <Grid
        style={{ padding: "1% 3% 0% 0%", marginLeft: "15%", marginTop: "5%" }}
      >
        <p className="textTitle"> Project Details </p>{" "}
        <hr style={{ width: "126%" }} />
      </Grid>

      <Card class="card">
           <label> Title </label>
        <Btn variant="contained" color="primary" text="Delete" size="large" width="30%" />
      </Card>
    </Grid>
  );
};

export default ProjectDetails;