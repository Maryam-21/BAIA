import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CardHeader } from "@material-ui/core";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import UserStory from './UserStory';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CircularProgress from '@mui/material/CircularProgress'
import AddNewUserStoryPopUp from './AddNewUserStoryPopUp';
import { getUserStories, setLoading } from '../redux/slices/userStories';

function UserStories() {
  const [openAddUSDetail, setOpenAddUSDetail] = useState(false);
  const { userStories } = useSelector((state) => state.userStories)
  const { fullProjects } = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserStories(fullProjects['projectID']))
  }, [fullProjects]);

  const handleOpenAddUserStoryDetails = () => {
    setOpenAddUSDetail(true);
  }
  const handleCloseAddUserStoryDetails = () => {
    setOpenAddUSDetail(false);
  }
  return (
    <div className="center">
      <Card style={{ backgroundColor: "#E9E9E9" }} >

        <CardHeader
          style={{ backgroundColor: "rgb(180, 180, 180)", padding: "3%" }}
          title="User Story Map"
          subheader={fullProjects["projectTitle"]}
        ></CardHeader>


        <CardContent>
          <Grid container spacing={4} style={{ width: "100%", display: "flex" }}>
            {
              userStories ? userStories["$values"].map(story => (
                <Grid item sm={4}>
                  <UserStory story={story} projectName={fullProjects["projectTitle"]}
                  projectID={fullProjects["projectID"]}></UserStory>
                </Grid>
              )) : <CircularProgress/>
            }

          </Grid>
        </CardContent>
        <IconButton aria-label="delete"
          style={{
            textTransform: "none",
            marginLeft: "14px",
            marginBottom: "10px",
            fontFamily: "sans-serif",
            fontWeight: "600",
            color: "rgb(71, 70, 70)",
            fontSize: "15px",
          }}
          onClick={handleOpenAddUserStoryDetails}>
          <AddCircleOutlinedIcon />
          Add New User Story
        </IconButton>
        <AddNewUserStoryPopUp open={openAddUSDetail} handleClickClose={handleCloseAddUserStoryDetails}></AddNewUserStoryPopUp>
      </Card>
    </div>
  )
}

export default UserStories