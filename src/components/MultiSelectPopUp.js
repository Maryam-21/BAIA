import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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
import { updateUserStory, setTempAcceptanceCriteria, setTempPreconditions } from '../redux/slices/userStories'

const MultiSelectPopUp = ({ open, handleClickClose, title, story, projectID, closeMain, openMain }) => {

    const [checked, setChecked] = useState([]);
    const [choices, setChoices] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {

        if (title == "Select Preconditions") {
            if (story["preconditions"]) {
                let precondsList = story["preconditions"].split('#');
                setChoices(precondsList)
            }
        }
        else if (title == "Select Acceptance Criteria") {
            if (story["acceptanceCriteria"]) {
                let accCriteriaList = story["acceptanceCriteria"].split('#');
                setChoices(accCriteriaList)
            }
        }

    }, [title]);

    const handleChangeChild = (event, i) => {
        let checkedTemp = { ...checked };
        checkedTemp[i] = event.target.checked;
        setChecked({ ...checkedTemp });
    };

    const onSave = () => {
        let newValue = "";
        choices.map(function (choice, i) {
            if (checked[i]) {
                newValue += choice + "\n";
            }
        })

        if (title == "Select Preconditions") {
            dispatch(setTempPreconditions(newValue))
        }
        else if (title == "Select Acceptance Criteria") {
            dispatch(setTempAcceptanceCriteria(newValue))
        }
        handleClickClose();
    }

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>

            {
                choices ? choices.map(function (choice, i) {
                    return <div><FormControlLabel
                        label={choice}
                        control={<Checkbox checked={checked[i]} onChange={(e) => { handleChangeChild(e, i) }} />}
                    /><br /><br /></div>;
                }) : "loading"
            }
        </Box>
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
                <DialogTitle onClose={handleClickClose} class="label"> {title} </DialogTitle>
                <hr style={{ width: "96%" }} />
                <DialogContent>
                    <Grid container style={{ height: "100%" }}>
                        <Grid container xs={false} sm={12} spacing={1}>
                            {
                                choices.length == 0 ? <div style={{ paddingLeft: "35%" }}>Nothing to show</div> 
                                : children
                            }

                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button
                        autoFocus
                        onClick={onSave}
                        style={{ color: "#3f51b5" }} >
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MultiSelectPopUp