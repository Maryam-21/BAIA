import React from 'react'
import { useState } from 'react';
import {Button, Card, Grid, TextField} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { user } = useSelector((state)=>state.user)
  const [name, setName] = useState(user?user.name:"")
  const [email, setEmail] = useState(user?user.email:"")
  const [companyName, setCompanyName] = useState(user?user.companyName:"")
  const [phoneNumber, setPhoneNumber] = useState(user?user.phoneNumber:"")
  const [password, setPassword] = useState(user?user.password:"")

  return (
    <Grid xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
            <Grid style={{ padding: "1% 3% 0% 0%",marginLeft: "15%" ,marginTop: "5%"  }}>
                <p className="textTitle"> Edit My Profile </p> <hr style={{width:"122%"}}/>
            </Grid>
        <Card style ={{ width: "70%", backgroundColor:"#E9E9E9", margin:"2% 15%", padding: "7% 17%"}}>
             <PersonIcon class="icons"/>
             <TextField id="1" label="Name" defaultValue = {name} variant="standard" style ={{width: "93%"}}
              onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>
             <EmailIcon class="icons"/>
             <TextField id="2" label="" defaultValue = {email} variant="standard" style ={{width: "93%"}}
             onChange={(e)=>{setEmail(e.target.value)}}/> <br/><br/>
             <BusinessIcon class="icons"/>
             <TextField id="3" label="" defaultValue={companyName} variant="standard" style ={{width: "93%"}}
             onChange={(e)=>{setCompanyName(e.target.value)}} /> <br/><br/>
             <LocalPhoneIcon class="icons"/>
             <TextField id="4" label="" defaultValue={phoneNumber} variant="standard" type="number" style ={{width: "93%"}}
             onChange={(e)=>{setPhoneNumber(e.target.value)}}/> <br/><br/>
             <LockIcon class="icons"/>
             <TextField id="5" label="" defaultValue={password}variant="standard" type="password" style ={{width: "93%"}}
             onChange={(e)=>{setPassword(e.target.value)}}/> <br/><br/><br/>
             <Button class = "LogoutBtn"> Log Out </Button>
        </Card>
        </Grid>
      )
}

export default MyProfile
