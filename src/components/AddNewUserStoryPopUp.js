import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { TextField, Grid, FormGroup, Button } from "@material-ui/core";

function AddNewUserStoryPopUp({ open, handleClickClose }) {
    const defaultValue = {
        "userStory": "As a [description of user],\nI want [functionality],\nso that [benefit].",
        "acceptanceCriteria": "Given [how things begin],\nwhen [action taken],\nthen [outcome of taking action]."
    }
    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClickClose}
            >
                <DialogTitle onClose={handleClickClose} class="label"> User Story </DialogTitle>
                <hr style={{ width: "96%" }} />

                <DialogContent>
                    <Grid container style={{ height: "100%" }}>
                        <Grid container xs={false} sm={12} spacing={1}>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    label="Title"
                                    variant="filled"
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="User Story Body"
                                    variant="filled"
                                    value={defaultValue["userStory"]}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="Acceptance Criteria"
                                    variant="filled"
                                    value={defaultValue["acceptanceCriteria"]}
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
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default AddNewUserStoryPopUp