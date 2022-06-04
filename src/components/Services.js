import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {
    Grid, Card, CardContent, Select, MenuItem, CardHeader, InputLabel,
    FormControl, Button
} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Service from './Service';
import AddNewServicePopUp from './AddNewServicePopUp';
import MeetingDetailsPopUp from './MeetingDetailsPopUp';



function Services() {
    const { meetingID, services } = useSelector((state) => state.services)
    const [openAddService, setOpenAddService] = useState(false);
    const [openMeetingDetails, setOpenMeetingDetails] = useState(false);

    const handleClickOpenAddService = () => {
        setOpenAddService(true);
    }

    const handleClickCloseAddService = () => {
        setOpenAddService(false);
    }

    const handleClickOpenMeetingDetails = () => {
        setOpenMeetingDetails(true);
    }

    const handleClickCloseMeetingDetails = () => {
        setOpenMeetingDetails(false);
    }

    return (
        <div>
            <AddNewServicePopUp open={openAddService} handleClickClose={handleClickCloseAddService} ></AddNewServicePopUp>
            <MeetingDetailsPopUp open={openMeetingDetails} handleClickClose={handleClickCloseMeetingDetails}
            participants = {services? services["meetingPersonnel"] : "loading"} 
            description = {services? services["meetingDescription"] : "loading"} ></MeetingDetailsPopUp>
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
                            <Grid container sm={12}>
                                <Grid item sm={6}>
                                    <Button
                                        color="primary"
                                        variant="text"
                                        style={{
                                            marginTop: "20%",
                                            width: "100%",
                                        }}
                                        onClick={handleClickOpenMeetingDetails}
                                    >
                                        Meeting Details
                                    </Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button
                                        color="primary"
                                        variant="text"
                                        style={{
                                            marginTop: "20%",
                                            width: "105%",
                                        }}
                                    >
                                        Detect Conflicts
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                        title={services ? services["meetingTitle"] : "loading"}
                        subheader="September 14, 2016"
                    ></CardHeader>
                    <CardContent>
                        {
                            services ? services["services"]["$values"].map(service => (
                                <Service service={service}></Service>
                            )) : "loading"
                        }
                    </CardContent>

                    <IconButton aria-label="delete"
                        onClick={handleClickOpenAddService}
                        style={{
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