import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateService, deleteService } from '../redux/slices/services'
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

function Service({ service }) {
    const [openSB, setOpenSB] = useState(false);
    const [vColor, setVcolor] = useState("");
    const [openD, setOpenD] = useState(false);
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("loading");
    const { meetingID } = useSelector((state) => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
        if(service){
            setTitle(service["serviceTitle"])
        }
        setValidated(service ? service["serviceVerified"] : false)
        if (service["serviceVerified"])
            setVcolor("green");
        else
            setVcolor("");
    }, [service]);
    
    
    const handleOpenSnackbar = () => {
        setOpenSB(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSB(false);
    };
    
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


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log(title)
        }
    }
    const handleClickOpenD = () => {
        setOpenD(true);
    };
    const handleClickCloseD = () => {
        setOpenD(false);
    };

    const onDelete = () => {
        const payload = {
            "serviceID":  service["serviceID"],
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
        if(dispatch(updateService(payload)))
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
    return (
        <div>
            <DeletePopUp open={openD} handleClose={handleClickCloseD} onDelete={onDelete} delObj={"this service"}></DeletePopUp>
            <Grid container>
                <Grid item xs={false} sm={9} >
                    {/*style={{backgroundColor: "red"}}*/}
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <TextField
                                variant="standard"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                style={{ width: "98%", paddingRight: "5%" }}
                            />
                            <IconButton aria-label="delete" style={{ float: "right" }} onClick={onSaveTitle}>
                                <SaveOutlinedIcon />
                            </IconButton>
                        </AccordionSummary>

                        <AccordionDetails >
                            {
                                service ? service["serviceDetails"]["$values"].map(detail => (
                                    <ServiceDetail detail={detail}></ServiceDetail>
                                )) : "loading"
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
                    <Grid item sm={1}  style={{ marginLeft: "2%" }}>
                        <IconButton aria-label="delete" onClick={handleClickOpenD} >
                            <DeleteOutlineIcon />
                        </IconButton>

                    </Grid>

                    <Grid item sm={9} style={{ marginLeft: "1%" }} >
                        <Button
                            color="primary"
                            variant="text"
                            style={{
                                textTransform: "none",
                                width: "100%",
                            }}
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