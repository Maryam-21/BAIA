import React from 'react'
import { Grid } from "@material-ui/core";


function UserStories() {
  return (
    <div>
          <Grid container style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Grid container direction="column" xs={6} sm={6} spacing={2} style={{ padding: "2% 3% 2% 5%" }}>
              <Grid item style={{ marginTop: "5%" }}>
                <p className="textTitle" style={{display: "center"}}> Comming Soon  </p>
              </Grid>
              <br />
            </Grid>
          </Grid>
        </div>
  )
}

export default UserStories