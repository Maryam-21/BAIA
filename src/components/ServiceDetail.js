import React, { useState, useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteServiceDetail, updateServiceDetail } from '../redux/slices/services'
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import IconButton from '@mui/material/IconButton';
import Snackbar from "@mui/material/Snackbar";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import DeletePopUp from './DeletePopUp'

function ServiceDetail({ detail }) {
    const [openSB, setOpenSB] = useState(false);
    const [serviceDetail, setServiceDetail] = useState("retrieving data...");
    const [openD, setOpenD] = useState(false);
    const { meetingID } = useSelector((state) => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
        if(detail){
            setServiceDetail(detail["serviceDetailString"] )
        }
    }, [detail]);

    const handleOpenSnackbar = () => {
        setOpenSB(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSB(false);
    };

    const onSaveDetail = () => {
        const payload = {
            "ServiceDetailID": detail["serviceDetailID"],
            "ServiceDetailString": serviceDetail
        };
        if (dispatch(updateServiceDetail(payload)))
            handleOpenSnackbar()
    };

    const handleClickOpenD = () => {
        setOpenD(true);
    };

    const handleClickCloseD = () => {
        setOpenD(false);
    };

    const onDelete = () => {
        const payload = {
            "serviceDetailID": detail["serviceDetailID"],
            "meetingID": meetingID
        };
        dispatch(deleteServiceDetail(payload))
    }

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
        <Grid container >
            <DeletePopUp open={openD} handleClose={handleClickCloseD} onDelete={onDelete} 
            delObj={"this service detail"}/>
            <Grid item sm={10}>
                <TextField
                    variant="standard"
                    multiline
                    rows={3}
                    value={serviceDetail}
                    onChange = {(e) => { setServiceDetail(e.target.value) }}
                    style={{ width: "90%" }}
                />
            </Grid>
            <Grid container item sm={2}>
                <Grid item sm={4}>
                    <Typography style={{ float: "right", marginTop: "50%" }}>{detail ? detail["timestamp"] : ""}</Typography>
                </Grid>
                <Grid item sm={4}>
                    <IconButton aria-label="save" style={{ float: "left", marginTop: "25%" }} onClick = { onSaveDetail }>
                        <SaveOutlinedIcon />
                    </IconButton>
                </Grid>
                <Grid item sm={4}>
                    <IconButton aria-label="delete" style={{  marginTop: "25%" }} onClick = { handleClickOpenD }>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Snackbar
                open={openSB}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Service detail updated successfully!"
                action={action}
            />
        </Grid>
    )
}

export default ServiceDetail