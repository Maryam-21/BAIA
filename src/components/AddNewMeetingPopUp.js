import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import { TextField, Grid, FormGroup, Button } from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { addMeeting } from '../redux/slices/projects';


export const AddNewMeetingPopUp = ({ open, handleClickClose }) => {
  const [openSB, setOpenSB] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [participant, setParticipant] = useState('');
  const [chipData, setChipData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState("Nothing selected yet...");

  const { fullProjects } = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  const addFile = (e) => {
    //const s = URL.createObjectURL(e.target.files[0])
    //setSelectedFile(s)
    const path = "C://Audios//"+ e.target.files[0].name;
    setSelectedFile(path);
    setUploadedAudio(e.target.files[0].name)
    /*if (selectedFile) {
      var a = new Audio(selectedFile);
      a.play();
    }*/
  }

  const onSave = ()=> {
    //payload
    let participants = ""
    chipData.map(part => (
      participants = participant + part['label'] + ', '
    ));
    const payload = {
      "addMeeting": {
        "Meeting": {
          "meetingTitle": title,
          "meetingDescription": description,
          "AudioReference": selectedFile,
          "MeetingPersonnel": participants
        },
        "ProjectID": fullProjects["projectID"]
      },
      "projectTitle": fullProjects["projectTitle"]
    };
    console.log(payload)
    dispatch(addMeeting(payload))
    handleClickSnackbar();
    handleClickClose(); 
  }

  const handleClickSnackbar = () => {
    setTitle((""));
    setParticipant((""));
    setDescription((""));
    setUploadedAudio(("Nothing selected yet..."));
    setSelectedFile((""));
    setChipData(([]));
    setOpenSB(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSB(false);
  };


  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleAddParticipant = () => {
    let arr = [...chipData];
    arr.push({ key: chipData.length + 1, label: participant })
    setChipData(arr);
    setParticipant("");
  };

  //takes value of TextField and puts it in actor state
  const handleParticipantChange = (val) => {
    setParticipant(val);
    
  };

  const ListItem = styled("li")(({ theme }) => ({ margin: theme.spacing(0.5) }));
  const Input = styled('input')({
    display: 'none',
  });
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
        <DialogTitle onClose={handleClickClose} class="label"> Add New Meeting </DialogTitle>
        <hr style={{ width: "96%" }} />
        <DialogContent>
          <Grid container style={{ height: "100%" }}>
            <Grid container xs={false} sm={6} spacing={1}>
              <Grid item xs={false} sm={12}>
                <TextField
                  label="Title"
                  variant="filled"
                  style={{ width: "96%" }}
                  value={title}
                  onChange={(e) => { setTitle(e.target.value) }}
                />
              </Grid>
              <Grid item xs={false} sm={12}>
                <FormGroup row>
                  <TextField
                    id="1"
                    label="Participants"
                    variant="filled"
                    value={participant}
                    onChange={(e) => { handleParticipantChange(e.target.value) }}
                    style={{ width: "85%" }} />
                  <button type="button" className="buttonAdd" onClick={handleAddParticipant}> + </button>
                </FormGroup>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    p: 0.5,
                    m: 0,
                  }}
                  elevation="0"
                  component="ul"
                >
                  {
                    chipData.map((data) => {
                      let icon;

                      return (
                        <ListItem key={data.key}>
                          <Chip
                            icon={icon}
                            label={data.label}
                            onDelete={handleDelete(data)}
                          />
                        </ListItem>
                      );
                    })}
                </Paper>
              </Grid>
              <Grid item xs={false} sm={12}>
                <TextField
                  id="1"
                  label="Audio"
                  variant="filled"
                  value={uploadedAudio}
                  style={{ width: "96%" }}/>
                  <br/><br/>
                <label htmlFor="contained-button-file">
                  <Input accept="audio/*" id="contained-button-file" multiple type="file" onChange={addFile} />
                  <Button variant="contained" color="primary" component="span" style={{marginLeft: "60%"}}>
                    Browse
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Grid container xs={false} sm={6}>
              <Grid item xs={false} sm={12}>
                <TextField
                  multiline
                  rows={8}
                  label="Description"
                  variant="filled"
                  value={description}
                  onChange={(e) => { setDescription(e.target.value) }}
                  style={{ width: "96%", marginBottom: "4%" }}
                />
              </Grid>

            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={onSave}
            style={{ color: "#3f51b5" }} 
            >
            Upload Meeting
          </Button>
        </DialogActions>

      </Dialog>




      <Snackbar
        open={openSB}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Successfully Registered!"
        action={action}
      />
    </div>
  );
};
export default AddNewMeetingPopUp;
