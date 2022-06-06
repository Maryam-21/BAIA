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
import { addServiceDetail } from '../redux/slices/services'

function AddNewDetailPopUp({ open, handleClickClose, serviceID }) {
    const { meetingID } = useSelector((state) => state.services)

    const [openSB, setOpenSB] = useState(false);
    const [serviceDetails, setServiceDetails] = useState("");

    const dispatch = useDispatch()

    const onSave = () => {
        const payload = {
            "body": {
                "ServiceDetail":
                {
                    "ServiceDetailString": serviceDetails
                },
                "ServiceID": serviceID
            },
            "MeetingID": meetingID
        }
        dispatch(addServiceDetail(payload))
        handleClickClose();
        handleOpenSnackbar();
    }
    const handleOpenSnackbar = () => {
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
                fullWidth={true}
                maxWidth={"xs"}
            >
                <DialogTitle onClose={handleClickClose} class="label"> Add New Service Detail</DialogTitle>
                <hr style={{ width: "96%" }} />
                <DialogContent>
                    <Grid container style={{ height: "100%" }}>
                        <Grid container xs={false} sm={12} spacing={1}>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={3}
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
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSB}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Service Detail Added Successfully!"
                action={action}
            />
        </div>
    )
}

export default AddNewDetailPopUp