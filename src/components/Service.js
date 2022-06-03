import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeletePopUp from './DeletePopUp'
import ServiceDetail from "./ServiceDetail";

function Service() {
    const [vColor, setVcolor] = useState("");
    const [openD, setOpenD] = React.useState(false);

    const handleClickOpenD = () => {
        setOpenD(true);
    };
    const handleClickCloseD = () => {
        setOpenD(false);
    };

    const onDelete = () => {

    }
    const onValidate = () => {
        if (!vColor)
            setVcolor("green");
        else
            setVcolor("");
    }
    return (
        <div>
            <DeletePopUp open={openD} handleClose={handleClickCloseD} delObj={"this service"}></DeletePopUp>
            <Grid container>
                <Grid item xs={false} sm={10} >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>User Login
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails >
                            <ServiceDetail></ServiceDetail>
                            <ServiceDetail></ServiceDetail>
                        </AccordionDetails>
                    </Accordion>

                </Grid>
                <Grid container item xs={false} sm={2} >

                    <Grid item sm={6} style={{ marginLeft: "35%" }}>
                        <IconButton aria-label="validate" onClick={onValidate}>
                            {/*style={{color: "green"}}*/}
                            <CheckCircleOutlineIcon style={{ color: vColor }} />
                        </IconButton>
                    </Grid>
                    <Grid item sm={6} >
                        <IconButton aria-label="delete" onClick={handleClickOpenD} >

                            <DeleteOutlineIcon style={{ color: "red" }} />
                        </IconButton>

                    </Grid>

                    <Grid item sm={12} style={{ marginLeft: "35%" }}>
                        <Button
                            color="primary"
                            variant="text"
                            style={{
                                textTransform: "none",
                                width: "90%",
                            }}
                        >
                            Generate User Story
                        </Button>
                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}

export default Service