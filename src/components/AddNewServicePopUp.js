import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import { TextField, Grid, FormGroup, Button } from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";
import { addService } from '../redux/slices/services'

function AddNewServicePopUp({ open, handleClickClose }) {
    const { meetingID } = useSelector((state) => state.services)

    const [openSB, setOpenSB] = useState(false);
    const [title, setTitle] = useState("");
    const [serviceDetails, setServiceDetails] = useState("");

    const dispatch = useDispatch()

    const onSave = () => {

        const payload = {
            "Service": {
                "ServiceTitle": title,
                "ServiceDetails": [
                    {
                        "ServiceDetailString": serviceDetails
                    }
                ]
            },
            "MeetingID": meetingID
        }
        dispatch(addService(payload))
        handleClickClose();
        handleOpenSnackbar();
    }
    const handleOpenSnackbar = () => {
        setTitle((""));
        setServiceDetails((""));
        setOpenSB(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSB(false);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
            >
                <Close fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClickClose}
            >
                <DialogTitle onClose={handleClickClose} class="label"> Add New Service</DialogTitle>
                <hr style={{ width: "96%" }} />
                <DialogContent>
                    <Grid container style={{ height: "100%" }}>
                        <Grid container xs={false} sm={12} spacing={1}>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    label="Service Title"
                                    variant="filled"
                                    value={title}
                                    style={{ width: "100%" }}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="Service Details"
                                    variant="filled"
                                    value={serviceDetails}
                                    style={{ width: "100%" }}
                                    onChange={(e) => { setServiceDetails(e.target.value) }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button
                        autoFocus
                        onClick={onSave}
                        style={{ color: "#3f51b5" }} >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSB}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Service Added Successfully!"
                action={action}
            />
        </div>
    )
}

export default AddNewServicePopUp