import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Snackbar from "@mui/material/Snackbar";
import IconButton from '@mui/material/IconButton';
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import { styled } from "@mui/material/styles";
import { TextField, Grid, Button } from "@material-ui/core";
import { LoadingButton } from '@mui/lab';
import { generateUserStories, setLoading } from '../redux/slices/userStories';

function GenerateUserStoryPopUp({ open, handleClickClose, serviceID }) {
    const [loadingG, setLoadingG] = useState(false);
    const [openSB, setOpenSB] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    const [uploadedAudio, setUploadedAudio] = useState("Nothing selected yet...");
    const { fullProjects } = useSelector((state) => state.projects)
    const { meetingID } = useSelector((state) => state.services)
    const { loading } = useSelector((state) => state.userStories)
    const dispatch = useDispatch()
    const Input = styled('input')({
        display: 'none',
    });

    useEffect(() => {
        if (loading == 1) {
            setLoadingG(true)
        }
        else if (loading == 0) {
            setLoadingG(false)
            onClose()
            dispatch(setLoading(undefined))
        }
        else if (loading == -1){
            console.log("failed")
            dispatch(setLoading(undefined))
        }
    }, [loading]);

    const onClose = () =>{
        //handleClickSnackbar();
        handleClickClose();
    }
    const onSave = () => {
        //payload
        const payload = {
            "ProjectID": fullProjects["projectID"],
            "ServiceID": serviceID,
            "filepath": selectedFile,
            "MeetingID": meetingID
        };
        dispatch(generateUserStories(payload))
    }
    const addFile = (e) => {
        const path = "C://Audios//" + e.target.files[0].name;
        setSelectedFile(path);
        setUploadedAudio(e.target.files[0].name)
    }

    const handleClickSnackbar = () => {
        setUploadedAudio(("Nothing selected yet..."));
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
                fullWidth={false}
                maxWidth={"xs"}
            >
                <DialogTitle onClose={handleClickClose} class="label"> Generate User Story </DialogTitle>
                <hr style={{ width: "96%" }} />

                <DialogContent>
                    <Grid item sm={12}>
                        If you want to generate user stories from another meeting, please upload it.
                        <br />
                        Note: If you don't upload a meeting, the user story will be generated from
                        the service details only.
                    </Grid>
                    <br /><br />
                    <Grid item xs={false} sm={12}>
                        <TextField
                            id="2"
                            label="Audio"
                            variant="filled"
                            value={uploadedAudio}
                            style={{ width: "70%" }}
                        />
                        <label htmlFor={serviceID}>
                            <Input onChange={addFile} accept="audio/*" id={serviceID} multiple type="file" />
                            <Button variant="contained" color="primary" component="span" style={{ marginLeft: "2%", marginTop: '4%' }}>
                                Browse
                            </Button>
                        </label>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <LoadingButton
                        loading={loadingG}
                        loadingPosition="end"
                        autoFocus
                        onClick={onSave}
                        style={{ color: "#3f51b5", paddingRight: "5%" }} >
                        Generate
                    </LoadingButton>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSB}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Successfully generated user stories !"
                action={action}
            />
        </div>
    )
}

export default GenerateUserStoryPopUp