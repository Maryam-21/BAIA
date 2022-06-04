import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { styled } from "@mui/material/styles";
import { TextField, Grid, Button } from "@material-ui/core";


function GenerateUserStoryPopUp({ open, handleClickClose, id }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedAudio, setUploadedAudio] = useState("Nothing selected yet...");
    const Input = styled('input')({
        display: 'none',
    });

    const addFile = (e) => 
    {
        const path = "C://Audios//" + e.target.files[0].name;
        setSelectedFile(path);
        setUploadedAudio(e.target.files[0].name)
    }
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
                        <br/>
                        Note: If you don't upload a meeting, the user story will be generated from 
                        the service details only.
                    </Grid>
                    <br/><br/>
                    <Grid item xs={false} sm={12}>
                        <TextField
                            id="2"
                            label="Audio"
                            variant="filled"
                            value={uploadedAudio}
                            style={{ width: "70%" }} 
                        />
                        <label htmlFor={id}>
                            <Input onChange = {addFile} accept="audio/*" id={id} multiple type="file"  />
                            <Button variant="contained" color="primary" component="span" style={{marginLeft: "2%", marginTop: '4%'}}>
                                Browse
                            </Button>
                        </label>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClickClose}
                        style={{ color: "#3f51b5" }} >
                        Generate
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default GenerateUserStoryPopUp