import React from 'react'
import { Grid, Card, CardContent, Select, MenuItem, CardHeader, InputLabel, FormControl, Button } from "@material-ui/core";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';


function Services() {
    return (
        <div>
            <Grid container style={{ width: "100%", display: "flex" }}>
                <Grid container direction="column" xs={6} sm={6} spacing={2} style={{ padding: "2% 3% 2% 5%" }}>
                    <Grid item style={{ marginTop: "5%" }}>
                        <p className="textTitle"> projectsTitles </p>
                    </Grid>
                    <br />
                </Grid>
            </Grid>
            <div className="center">
                <Card style={{ backgroundColor: "#E9E9E9" }}>
                    <CardHeader
                        style={{ backgroundColor: "rgb(180, 180, 180)" }}
                        action={
                            <FormControl style={{ width: "130px" }}>
                                <InputLabel style={{ marginRight: "3%" }} id="1">
                                    Participants{" "}
                                </InputLabel>
                                <Select
                                    labelId="1"
                                    label="Participants"
                                    autoWidth
                                >
                                    <MenuItem value={1}>Ahmed</MenuItem>
                                    <MenuItem value={2}>Mohammed</MenuItem>
                                    <MenuItem value={3}>Mahmoud</MenuItem>
                                </Select>
                            </FormControl>
                        }
                        title="Meeting ID 1"
                        subheader="September 14, 2016"
                    ></CardHeader>
                    <CardContent>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <TextField
                                    variant="standard"
                                    multiline
                                    rows={5}
                                    defaultValue=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    style={{ width: "100%" }}
                                />
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                    <Button
                        style={{
                            textTransform: "none",
                            marginLeft: "14px",
                            marginBottom: "10px",
                            fontFamily: "sans-serif",
                            fontWeight: "600",
                            color: "rgb(71, 70, 70)",
                            fontSize: "15px",
                        }}
                    >
                        ⊕ Add New Service
                    </Button>
                </Card>
                <Grid
                    style={{ width: "95%", display: "flex", padding: "2% 7% 2% 4%" }}
                >
                </Grid>
                <Button
                    color="primary"
                    variant="contained"
                    style={{
                        textTransform: "none",
                        padding: "14px 14px",
                        marginLeft: "40%",
                    }}
                >
                    {" "}
                    Generate User Story
                </Button>
            </div>
        </div>
    )
}

export default Services