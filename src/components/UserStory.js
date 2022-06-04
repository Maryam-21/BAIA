import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import UserStoryDetails from './UserStoryDetails';

function UserStory() {
    const [openUSDetail, setOpenUSDetail] = useState(false);
    const handleOpenUserStoryDetails = () =>{
        setOpenUSDetail(true);
    }
    const handleCloseUserStoryDetails = () =>{
        setOpenUSDetail(false);
    }

    return (
        <div>
            <Paper elevation={2}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Snapchat - 1
                        </Typography>
                        <Typography variant="h5" component="div" style={{ paddingBottom: "5%" }}>
                            Login
                        </Typography>
                        <Typography variant="body2">
                            As a user I want to login using username and password.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick = {handleOpenUserStoryDetails}>Show More</Button>
                    </CardActions>
                    
                </Card>

            </Paper>
            <UserStoryDetails open={openUSDetail} handleClickClose={handleCloseUserStoryDetails}></UserStoryDetails>
        </div>
    )
}

export default UserStory