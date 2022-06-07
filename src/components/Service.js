import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateService, deleteService, getConflictMeeting } from '../redux/slices/services'
import { Grid, Button } from "@material-ui/core";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeletePopUp from './DeletePopUp'
import ServiceDetail from "./ServiceDetail";
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Snackbar from "@mui/material/Snackbar";
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import CircularProgress from '@mui/material/CircularProgress'
import GenerateUserStoryPopUp from './GenerateUserStoryPopUp';
import ConflictsPopOver from "./ConflictsPopOver";
import AddNewDetailPopUp from "./AddNewDetailPopUp";

function Service({ service }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openPopOver = Boolean(anchorEl);
    const [openSB, setOpenSB] = useState(false);
    const [openGenerateUS, setOpenGenerateUS] = useState(false);
    const [openD, setOpenD] = useState(false);
    const [openAddDetail, setOpenAddDetail] = useState(false);
    const [vColor, setVcolor] = useState("");
    const [conflictColor, setConflictColor] = useState("");
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("retrieving data...");
    const { meetingID, conflictMeeting } = useSelector((state) => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
        if (service) {
            setTitle(service["serviceTitle"])
        }
        setValidated(service ? service["serviceVerified"] : false)
        if (service["serviceVerified"])
            setVcolor("green");
        else
            setVcolor("");
        if (service["conflictServiceID"]) {
            setConflictColor("#D0342C")
            dispatch(getConflictMeeting(service["conflictMeetingID"]))
        }
        else {
            setConflictColor("")
        }

    }, [service]);

    const handlePopoverOpen = (event) => {
        if (conflictColor)
            setAnchorEl(event.currentTarget);
        else
            setAnchorEl(null);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpenGenerateUS = () => {
        setOpenGenerateUS(true);
    }

    const handleClickCloseGenerateUS = () => {
        setOpenGenerateUS(false);
    }

    const handleClickOpenAddDetail = () => {
        setOpenAddDetail(true);
    }

    const handleClickCloseAddDetail = () => {
        setOpenAddDetail(false);
    }

    const handleOpenSnackbar = () => {
        setOpenSB(true);
    };

    const handleClickOpenD = () => {
        setOpenD(true);
    };

    const handleClickCloseD = () => {
        setOpenD(false);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSB(false);
    };

    const onDelete = () => {
        const payload = {
            "serviceID": service["serviceID"],
            "meetingID": meetingID
        };
        dispatch(deleteService(payload))
    }
    const onSaveTitle = () => {
        const payload = {
            "service": {
                "ServiceID": service["serviceID"],
                "ServiceTitle": title,
                "ServiceVerified": validated
            },
            "serviceID": service["serviceID"]
        }
        if (dispatch(updateService(payload)))
            handleOpenSnackbar()
    }
    const onValidate = () => {
        const payload = {
            "service": {
                "ServiceID": service["serviceID"],
                "ServiceTitle": service["serviceTitle"],
                "ServiceVerified": !validated
            },
            "serviceID": service["serviceID"]
        }
        dispatch(updateService(payload));
        setValidated(!validated)
        if (!vColor) {
            setVcolor("green");
        }
        else
            setVcolor("");
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
        <div>
            <GenerateUserStoryPopUp serviceID={service["serviceID"]} open={openGenerateUS}
                handleClickClose={handleClickCloseGenerateUS} />
            <DeletePopUp open={openD} handleClose={handleClickCloseD} onDelete={onDelete}
                delObj={"this service"} />
            <AddNewDetailPopUp open={openAddDetail} handleClickClose={handleClickCloseAddDetail}
                serviceID={service["serviceID"]}/>
            <Grid container>
                <Grid item xs={false} sm={9} >
                    {/*style={{backgroundColor: "red"}}*/}
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ backgroundColor: conflictColor }}
                            aria-owns={openPopOver ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <TextField
                                variant="standard"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                style={{ width: "98%", paddingRight: "5%" }}
                            />
                            <IconButton aria-label="save" style={{ float: "right" }}
                                onClick={onSaveTitle}>
                                <SaveOutlinedIcon />
                            </IconButton>
                            <ConflictsPopOver open={openPopOver} handlePopoverClose={handlePopoverClose}
                                anchorEl={anchorEl} conMeetTitle={conflictMeeting} />
                        </AccordionSummary>

                        <AccordionDetails >
                            {
                                service ? service["serviceDetails"]["$values"].map(detail => (
                                    <ServiceDetail detail={detail}></ServiceDetail>
                                )) : <CircularProgress/>
                            }

                        </AccordionDetails>
                    </Accordion>

                </Grid>
                <Grid container item xs={false} sm={3} >

                    <Grid item sm={1} style={{ marginLeft: "5%" }}>
                        <IconButton aria-label="validate" onClick={onValidate}>
                            {/*style={{color: "green"}}*/}
                            <CheckCircleOutlineIcon style={{ color: vColor }} />
                        </IconButton>
                    </Grid>
                    <Grid item sm={1} style={{ marginLeft: "2%" }}>
                        <IconButton aria-label="delete" onClick={handleClickOpenD} >
                            <DeleteOutlineIcon />
                        </IconButton>

                    </Grid>
                    <Grid item sm={4} style={{ marginLeft: "1%" }} >
                        <Button
                            color="primary"
                            variant="text"
                            style={{
                                textTransform: "none",
                                width: "100%",
                            }}
                            onClick={handleClickOpenAddDetail}
                        >
                            Add Detail
                        </Button>
                    </Grid>
                    <Grid item sm={5} style={{ marginLeft: "0%" }} >
                        <Button
                            color="primary"
                            variant="text"
                            style={{
                                textTransform: "none",
                                width: "100%",
                            }}
                            onClick={handleClickOpenGenerateUS}
                        >
                            Generate User Story
                        </Button>
                    </Grid>

                </Grid>

            </Grid>
            <br></br>
            <Snackbar
                open={openSB}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Service title updated successfully!"
                action={action}
            />
        </div>
    )
}

export default Service