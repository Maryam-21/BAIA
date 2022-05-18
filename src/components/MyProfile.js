import React from 'react'
import {Button, Card, Grid, TextField} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';

const MyProfile = () => {
  return (
    <Grid direction="column" xs={12} sm={7} style={{alignContent:'center', height:'100%', display:'flex'}}>
            <Grid style={{ padding: "1% 3% 0% 0%",marginLeft: "15%" ,marginTop: "5%"  }}>
                <p className="textTitle"> My Profile </p> <hr style={{width:"122%"}}/>
            </Grid>

        <Card style ={{ width: "60%", backgroundColor:"#E9E9E9", margin:"2% 15%", padding: "7% 20%"}}>

             <TextField id="1" label="Name" variant="standard" style ={{width: "100%"}}/> <br/><br/>
             <TextField id="2" label="Email" variant="standard" style ={{width: "100%"}}/> <br/><br/>
             <TextField id="3" label="Company Name" variant="standard" style ={{width: "100%"}} /> <br/><br/>
             <TextField id="4" label="Phone Number" variant="standard" type="number" style ={{width: "100%"}}/> <br/><br/>
             <TextField id="5" label="Password" variant="standard" type="password" style ={{width: "100%"}}/> <br/><br/>
             <Button class = "LogoutBtn"> Log Out </Button>

        </Card>

        </Grid>
      )
}

export default MyProfile
