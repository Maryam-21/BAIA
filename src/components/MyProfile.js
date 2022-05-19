import React from 'react'
import {Button, Card, Grid, TextField} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';

const MyProfile = () => {
  return (
    <Grid xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
            <Grid style={{ padding: "1% 3% 0% 0%",marginLeft: "15%" ,marginTop: "5%"  }}>
                <p className="textTitle"> Edit My Profile </p> <hr style={{width:"122%"}}/>
            </Grid>

        <Card style ={{ width: "70%", backgroundColor:"#E9E9E9", margin:"2% 15%", padding: "7% 17%"}}>

             <PersonIcon class="icons"/>
             <TextField id="1" label="Name" variant="standard" style ={{width: "93%"}}/> <br/><br/>
             <EmailIcon class="icons"/>
             <TextField id="2" label="Email" variant="standard" style ={{width: "93%"}}/> <br/><br/>
             <BusinessIcon class="icons"/>
             <TextField id="3" label="Company Name" variant="standard" style ={{width: "93%"}} /> <br/><br/>
             <LocalPhoneIcon class="icons"/>
             <TextField id="4" label="Phone Number" variant="standard" type="number" style ={{width: "93%"}}/> <br/><br/>
             <LockIcon class="icons"/>
             <TextField id="5" label="Password" variant="standard" type="password" style ={{width: "93%"}}/> <br/><br/><br/>
             <Button class = "LogoutBtn"> Log Out </Button>

        </Card>

        </Grid>
      )
}

export default MyProfile
