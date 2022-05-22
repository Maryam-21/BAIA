import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {TextField} from "@material-ui/core";
import { height } from '@mui/system';

const AddNewProjectPopUp = ({open, handleClickClose}) => {
      const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
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
                  position: 'absolute',
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
            aria-labelledby="customized-dialog-title"
      >
        <BootstrapDialogTitle onClose={handleClickClose} class='label'>
          Add New Project
          <hr/>
        </BootstrapDialogTitle>
        <DialogContent>
        <div style={{display:'inline-block'}}>
        <TextField label="Title" variant="filled" style={{margin:'0% 5% 5% 2%'}}/><br/>
        <TextField label="Company" variant="filled" style={{margin:'0% 5% 5% 2%'}}/><br/>
        <TextField label="Domain" variant="filled" style={{margin:'0% 5% 5% 2%'}}/><br/>
        <TextField label="Actors" variant="filled" style={{margin:'0% 5% 5% 2%'}}/>
        </div>
        <div style={{display:'inline-block'}}>
        <TextField multiline rows={4} label="Description" variant="filled" style={{margin:'0% 5% 5% 2%'}}/>
        </div>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClickClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>


    </div>
  )
}

export default AddNewProjectPopUp
