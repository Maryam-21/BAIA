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

function MeetingDetailsPopUp({ open, handleClickClose, participants, description }) {
    participants = participants.slice(0,-2);
    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClickClose}
            >
                <DialogTitle onClose={handleClickClose} class="label"> Meeting Details </DialogTitle>
                <hr style={{ width: "96%" }} />
                <DialogContent>
                    <Grid container style={{ height: "100%" }}>
                        <Grid container xs={false} sm={12} spacing={1}>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    label="Participants"
                                    variant="filled"
                                    value = {participants}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="Meeting Description"
                                    variant="filled"
                                    value= {description}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClickClose}
                        style={{ color: "#3f51b5" }} >
                        oK
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default MeetingDetailsPopUp