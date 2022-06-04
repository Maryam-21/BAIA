import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import UserStoryDetails from './UserStoryDetails';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import DeletePopUp from './DeletePopUp';

function UserStory() {
    const [openUSDetail, setOpenUSDetail] = useState(false);
    const [openDeleteWarning, setOpenDeleteWarning] = useState(false);

    const handleOpenUserStoryDetails = () => {
        setOpenUSDetail(true);
    }
    const handleCloseUserStoryDetails = () => {
        setOpenUSDetail(false);
    }

    const handleOpenDeleteWarning = () => {
        setOpenDeleteWarning(true);
    }
    const handleCloseDeleteWarning = () => {
        setOpenDeleteWarning(false);
    }

    const onDeleteUserStory = () => {
        console.log("on delete")
    }


    return (
        <div>
            <DeletePopUp open={openDeleteWarning} handleClose={handleCloseDeleteWarning} 
            delObj={"this user story"} onDelete={onDeleteUserStory}/>
            <Paper elevation={2}>
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item sm={11}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Snapchat - 1
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <IconButton aria-label="delete" size="small" onClick={handleOpenDeleteWarning} >
                                    <DeleteOutlineIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        </Grid>


                        <Typography variant="h5" component="div" style={{ paddingBottom: "5%" }}>
                            Login
                        </Typography>
                        <Typography variant="body2">
                            As a user I want to login using username and password.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleOpenUserStoryDetails}>Show More</Button>
                    </CardActions>

                </Card>

            </Paper>
            <UserStoryDetails open={openUSDetail} handleClickClose={handleCloseUserStoryDetails}></UserStoryDetails>
        </div>
    )
}

export default UserStory