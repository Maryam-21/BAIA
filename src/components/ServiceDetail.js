import React, { useState, useEffect }  from 'react'
import { useDispatch } from 'react-redux';
import { updateServiceDetail } from '../redux/slices/services'
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import IconButton from '@mui/material/IconButton';
import Snackbar from "@mui/material/Snackbar";
import { Fragment } from "react";
import { Close } from "@material-ui/icons";

function ServiceDetail({ detail }) {
    const [openSB, setOpenSB] = useState(false);
    const [serviceDetail, setServiceDetail] = useState("loading");
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
            <Grid item sm={11}>
                <TextField
                    variant="standard"
                    multiline
                    rows={3}
                    value={serviceDetail}
                    onChange = {(e) => { setServiceDetail(e.target.value) }}
                    style={{ width: "94%", paddingRight: "5%" }}
                />
            </Grid>
            <Grid container item sm={1}>
                <Grid item sm={6}>
                    <Typography style={{ float: "right", marginTop: "50%" }}>{detail ? detail["timestamp"] : "loading"}</Typography>
                </Grid>
                <Grid item sm={6}>
                    <IconButton aria-label="save" style={{ float: "left", marginTop: "30%" }} onClick = { onSaveDetail }>
                        <SaveOutlinedIcon />
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