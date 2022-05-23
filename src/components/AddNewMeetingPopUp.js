import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Grid, FormGroup, Button } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const AddNewMeetingPopUp = ({ open, handleClickClose }) => {
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  let [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(1),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div>
      <BootstrapDialog open={open} onClose={handleClickClose}>
        <BootstrapDialogTitle onClose={handleClickClose} class="label">
          Add New Meeting
          <hr style={{ width: "96%" }} />
        </BootstrapDialogTitle>
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
                  label="Date"
                  variant="filled"
                  style={{ width: "96%" }}
                />
              </Grid>
              <Grid item xs={false} sm={12}>
                <TextField
                  label="Recording"
                  variant="filled"
                  style={{ width: "96%" }}
                />
              </Grid>
            </Grid>
            <Grid container xs={false} sm={6}>
            <Grid item xs={false} sm={12}>
                <FormGroup row>
                  <TextField
                    label="Actors"
                    variant="filled"
                    style={{ width: "85%"}}
                  />
                <button type="button" class="buttonAdd"> + </button>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClickClose}
            style={{ color: "#3f51b5" }}
          >
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default AddNewMeetingPopUp;
