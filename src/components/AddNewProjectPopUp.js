import React, {useState} from 'react'
//import { EditText, EditTextarea } from 'react-edit-text';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const AddNewProjectPopUp = (open =1 ) => {

    const [openAddProj, setOpenAddProj] = useState(false);

      const handleClickClose = () => {
        setOpenAddProj(false);
      };

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
        onClose={handleClickClose}
        aria-labelledby="customized-dialog-title"
        openAddProj={openAddProj}
      >
        <BootstrapDialogTitle onClose={handleClickClose}>
          Add New Project
        </BootstrapDialogTitle>
        <DialogContent>

          

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
