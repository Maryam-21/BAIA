import React, { useState } from "react";
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
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

export const AddNewMeetingPopUp = ({ open, handleClickClose }) => {
  const [openSB, setOpenSB] = useState(false);
  const [actor, setActor] = useState('');
  const [chipData, setChipData] = useState([]);

  const handleClickSnackbar = () => {
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
  
  const handleAddActor = () => {
    let arr = [...chipData];
    arr.push( { key: chipData.length+1, label: actor })
    setChipData(arr);
  };

  //takes value of TextField and puts it in actor state
  const handleActorChange = (val) => {
    setActor(val);
  };
  
  const ListItem = styled("li")(({ theme }) => ({ margin: theme.spacing(0.5) }));

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
                />
              </Grid>
              <Grid item xs={false} sm={12}>
                <TextField
                  label="Audio"
                  variant="filled"
                  style={{ width: "96%" }}
                />
              </Grid>
              <Grid item xs={false} sm={12}>
                <FormGroup row>
                  <TextField
                    id="1"
                    label="Participants"
                    variant="filled"
                    onChange={(e)=>{handleActorChange(e.target.value)}}
                    style={{ width: "85%"}} />
                <button type="button" className="buttonAdd" onClick={handleAddActor}> + </button>
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
            </Grid>

            <Grid container xs={false} sm={6}>
              <Grid item xs={false} sm={12}>
                <TextField
                  multiline
                  rows={8}
                  label="Description"
                  variant="filled"
                  style={{ width: "96%", marginBottom:"4%"}}
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