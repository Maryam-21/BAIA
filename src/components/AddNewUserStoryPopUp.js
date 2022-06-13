import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { TextField, Grid, FormGroup, Button } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import Snackbar from "@mui/material/Snackbar";
import { addUserStory } from '../redux/slices/userStories'

function AddNewUserStoryPopUp({ open, handleClickClose, projectID }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [preconditions, setPreconditions] = useState("");
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
    const { meetingID } = useSelector((state) => state.services)

    const [openSB, setOpenSB] = useState(false);

    const defaultValue = {
        "userStory": "As a [description of user],\nI want [functionality],\nso that [benefit].",
        "acceptanceCriteria": "Given [how things begin],\nwhen [action taken],\nthen [outcome of taking action].",
        "preconditions": "Conditions that must be met so that the needed functionality could function properly."
    };
    const dispatch = useDispatch()
    const onSave = () => {
        const payload = {
            "projectID": projectID,
            "body": {
                "userStory": {
                    "UserStoryTitle": title,
                    "UserStoryDescription": description,
                    "Preconditions": preconditions,
                    "AcceptanceCriteria": acceptanceCriteria
                },
                "projectID": projectID
            }
        };
        console.log(payload)
        dispatch(addUserStory(payload));
        handleClickClose();
        handleOpenSnackbar();
    }

    const handleOpenSnackbar = () => {
        setTitle("");
        setDescription(defaultValue["userStory"]);
        setPreconditions(defaultValue["preconditions"]);
        setAcceptanceCriteria(defaultValue["acceptanceCriteria"]);
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
                <DialogTitle onClose={handleClickClose} class="label"> User Story </DialogTitle>
                <hr style={{ width: "96%" }} />

                <DialogContent>
                    <Grid container style={{ height: "100%" }}>
                        <Grid container xs={false} sm={12} spacing={1}>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    label="Title"
                                    variant="filled"
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="User Story Body"
                                    variant="filled"
                                    defaultValue={defaultValue["userStory"]}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="Preconditions"
                                    variant="filled"
                                    defaultValue={defaultValue["preconditions"]}
                                    onChange={(e) => { setPreconditions(e.target.value) }}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <TextField
                                    multiline
                                    rows={5}
                                    label="Acceptance Criteria"
                                    variant="filled"
                                    defaultValue={defaultValue["acceptanceCriteria"]}
                                    onChange={(e) => { setAcceptanceCriteria(e.target.value) }}
                                    style={{ width: "100%" }}
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
                message="User Story Added Successfully!"
                action={action}
            />
        </div>
    )
}

export default AddNewUserStoryPopUp