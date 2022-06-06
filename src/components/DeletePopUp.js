import React from 'react'
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from '@mui/material/DialogContentText';


function DeletePopUp({open, handleClose, delObj, onDelete}) {
    const handleDelete = ()  =>{
        onDelete();
        handleClose();
    }
    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                fullWidth={false}
                maxWidth={"sm"}
            >
                <DialogTitle style={{color: "#D0342C"}} >
                    {"Warning"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        {"Are you sure you want to delete " + delObj + "?"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus style={{ color: "#3f51b5" }}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} autoFocus style={{ color: "#3f51b5" }}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default DeletePopUp