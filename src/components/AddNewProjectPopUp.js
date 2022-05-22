import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Grid } from "@material-ui/core";

const AddNewProjectPopUp = ({ open, handleClickClose }) => {
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
      <BootstrapDialog
        open={open}
        onClose={handleClickClose}
      >
        <BootstrapDialogTitle onClose={handleClickClose} class="label">
          Add New Project
          <hr style={{width:"96%"}} />
        </BootstrapDialogTitle>
        <DialogContent>
          <Grid container style={{ height: "100%" }}>
            <Grid container xs={false} sm={6} spacing={1} >
            <Grid item xs={false} sm={12}>
              <TextField
                label="Title"
                variant="filled"
                style ={{width: "96%"}}
              />
              </Grid>
            <Grid item xs={false} sm={12}>
              <TextField
                label="Company"
                variant="filled"
                style ={{width: "96%"}}
              />
              </Grid>
            <Grid item xs={false} sm={12}>
              <TextField
                label="Domain"
                variant="filled"
                style ={{width: "96%"}}
              />
              </Grid>
            <Grid item xs={false} sm={12}>
              <TextField
                label="Actors"
                variant="filled"
                style ={{width: "96%"}}
              />
              </Grid>
            
            </Grid>
            <Grid container xs={false} sm={6}>
            <Grid item xs={false} sm={12}>
              <TextField
                multiline
                rows={11}
                label="Description"
                variant="filled"
                style ={{width: "101%"}}
              />
            </Grid>
            </Grid>
            
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClickClose} style={{color:'#3f51b5'}}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default AddNewProjectPopUp;
