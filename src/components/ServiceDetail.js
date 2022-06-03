import React from 'react'
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function ServiceDetail() {
    return (
        <Grid container>
            <Grid item sm={11}>
                <TextField
                    variant="standard"
                    multiline
                    rows={2}
                    defaultValue=" The user should login using email and password."
                    style={{ width: "100%", paddingRight: "5%" }}
                />
            </Grid>
            <Grid item sm={1}>
                <Typography style={{ float: "right", marginTop: "40%" }}>10:12</Typography>
            </Grid>
        </Grid>
    )
}

export default ServiceDetail