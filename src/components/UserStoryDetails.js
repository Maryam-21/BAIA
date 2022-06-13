import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import { Fragment } from "react";
import { Close } from "@material-ui/icons";
import { TextField, Grid, FormGroup, Button } from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";
import { addService } from '../redux/slices/services'
import { updateUserStory } from '../redux/slices/userStories'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function UserStoryDetails({ open, handleClickClose, story, projectID }) {
    const defaultValue = {
        "userStory": "As a [description of user],\nI want [functionality],\nso that [benefit].",
        "acceptanceCriteria": "Given [how things begin],\nwhen [action taken],\nthen [outcome of taking action].",
        "preconditions": "Conditions that must be met so that the needed functionality could function properly."
    };
    const [preconds, setPreconds] = useState("");
    const [acceptanceCrits, setAcceptanceCrits] = useState("")
    const [value, setValue] = useState(0);
    const [title,setTitle] = useState(story["userStoryTitle"])
    const [description,setDescription] = useState(story["userStoryDescription"])
    const [preconditions,setPreconditions] = useState(story["preconditions"])
    const [acceptanceCriteria,setAcceptanceCriteria] = useState(story["acceptanceCriteria"])

    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onUpdate = () =>{
        const payload = {
            "projectID": projectID,
            "body": {
                "UserStoryID": story["userStoryID"],
                "UserStoryTitle": title,
                "UserStoryDescription":description,
                "Preconditions":preconditions,
                "AcceptanceCriteria":acceptanceCriteria
            }
        }
        console.log(payload)
        dispatch(updateUserStory(payload));
        handleClickClose();
    }

    useEffect(() => {
        /*if (story["preconditions"]) {
            let precondsList = story["preconditions"].split('#');
            let temp = ""
            precondsList.forEach(cond => {
                temp += cond + "\n";
            });
            setPreconds(temp)
        }
        if (story["acceptanceCriteria"]) {
            let accCriteriaList = story["acceptanceCriteria"].split('#');
            let temp = ""
            accCriteriaList.forEach(crit => {
                temp += crit + "\n";
            });
            setAcceptanceCrits(temp)
        }*/
        
    }, [story]);

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClickClose}
                fullWidth={true}
                maxWidth={"sm"}
            >


                <DialogContent>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Body" {...a11yProps(0)} />
                                <Tab label="Preconditions" {...a11yProps(1)} />
                                <Tab label="Acceptance Criteria" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Grid container style={{ height: "100%" }}>
                                <Grid container xs={false} sm={12} spacing={1}>
                                    <Grid item xs={false} sm={12}>
                                        <TextField
                                            label="Title"
                                            variant="filled"
                                            defaultValue={story["userStoryTitle"]}
                                            onChange={(e) => { setTitle(e.target.value) }}
                                            style={{ width: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={false} sm={12}>
                                        <TextField
                                            multiline
                                            rows={10}
                                            label="User Story Body"
                                            variant="filled"
                                            defaultValue={story["userStoryDescription"] ? story["userStoryDescription"] : defaultValue["userStory"]}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                            style={{ width: "100%" }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid container style={{ height: "100%" }}>
                                <Grid container xs={false} sm={12} spacing={1}>
                                    <Grid item xs={false} sm={12}>
                                        <TextField
                                            multiline
                                            rows={12}
                                            label="Preconditions"
                                            variant="filled"
                                            defaultValue={story["preconditions"] ? story["preconditions"] : defaultValue["preconditions"]}
                                            onChange={(e) => { setPreconditions(e.target.value) }}
                                            style={{ width: "100%" }}
                                        />
                                        <Box style={{ paddingLeft: "90%", paddingTop: "5%" }}>
                                            <Fab color="primary" aria-label="add" size="small">
                                                <AddIcon />
                                            </Fab>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Grid container style={{ height: "100%" }}>
                                <Grid container xs={false} sm={12} spacing={1}>
                                    <Grid item xs={false} sm={12}>
                                        <TextField
                                            multiline
                                            rows={12}
                                            label="Acceptance Criteria"
                                            variant="filled"
                                            defaultValue={story["acceptanceCriteria"] ? story["acceptanceCriteria"] : defaultValue["acceptanceCriteria"]}
                                            onChange={(e) => { setAcceptanceCriteria(e.target.value) }}
                                            style={{ width: "100%" }}
                                        />
                                        <Box style={{ paddingLeft: "90%", paddingTop: "5%" }}>
                                            <Fab color="primary" aria-label="add" size="small">
                                                <AddIcon />
                                            </Fab>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button
                        autoFocus
                        onClick={onUpdate}
                        style={{ color: "#3f51b5" }} >
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default UserStoryDetails