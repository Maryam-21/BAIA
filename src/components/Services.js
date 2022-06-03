import React from 'react'
import { useSelector } from 'react-redux';
import {
    Grid, Card, CardContent, Select, MenuItem, CardHeader, InputLabel,
    FormControl, Button
} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Service from './Service';



function Services() {
    const { meetingID, services } = useSelector((state) => state.services)

    return (
        <div>
            <Grid container style={{ width: "100%", display: "flex" }}>
                <Grid container direction="column" xs={6} sm={6} spacing={2} style={{ padding: "2% 3% 2% 5%" }}>
                    <Grid item style={{ marginTop: "5%" }}>
                        <p className="textTitle"> </p>
                    </Grid>
                    <br />
                </Grid>
            </Grid>
            <div className="center">
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
                        title="First Meeting"
                        subheader="September 14, 2016"
                    ></CardHeader>
                    <CardContent>
                        <Service></Service>
                    </CardContent>

                    <IconButton aria-label="delete" style={{
                        textTransform: "none",
                        marginLeft: "14px",
                        marginBottom: "10px",
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        color: "rgb(71, 70, 70)",
                        fontSize: "15px",
                    }} >
                        <AddCircleOutlinedIcon />
                        Add New Service
                    </IconButton>
                </Card>
                <Grid
                    style={{ width: "95%", display: "flex", padding: "2% 7% 2% 4%" }}
                >
                </Grid>
            </div>
        </div>
    )
}

export default Services