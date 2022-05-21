import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/slices/user';
import { useNavigate } from 'react-router-dom'
import {Card, Grid, TextField} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import Btn from './Btn';

const MyProfile = () => {
  const { user } = useSelector((state)=>state.user)
  const [name, setName] = useState(user?user.name:"")
  const [email, setEmail] = useState(user?user.email:"")
  const [companyName, setCompanyName] = useState(user?user.companyName:"")
  const [phoneNumber, setPhoneNumber] = useState(user?user.phoneNumber:"")
  const [password, setPassword] = useState(user?user.password:"")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogOut = () =>{
    navigate('/Login')
  }

  const onSaveChanges = () =>{
    //console.log("save changes")
    const payload = {
      'userID': user.userID,
      'email': email,
      'name': name,
      'password': password,
      'companyName': companyName,
      'phoneNumber': phoneNumber
    }
    dispatch(updateUser(payload))
  }


  return (
    <Grid xs={12} sm={7} style={{alignContent:'center', height:'100%'}}>
            <Grid style={{ padding: "1% 3% 0% 0%",marginLeft: "15%" ,marginTop: "5%"  }}>
                <p className="textTitle"> Edit My Profile </p> <hr style={{width:"126%" }}/>
            </Grid>
        <Card style ={{ width: "70%", backgroundColor:"#E9E9E9", margin:"2% 15%", padding: "7% 17%"}}>

             <PersonIcon class="icons" style={{ padding: "1% 2.5% 0% 0%" }}/>
             <TextField id="1" label="Name" defaultValue = {name} variant="standard" style ={{width: "93%"}}
              onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>

             <EmailIcon class="icons" style={{ padding: "0% 2.5% 1.2% 0%" }}/>
             <TextField id="2" label="Email" defaultValue = {email} variant="standard" style ={{width: "93%"}}
             onChange={(e)=>{setEmail(e.target.value)}}/> <br/><br/>

             <BusinessIcon class="icons" style={{ padding: "0% 2.5% 1.2% 0%" }}/>
             <TextField id="3" label="Company Name" defaultValue={companyName} variant="standard" style ={{width: "93%"}}
             onChange={(e)=>{setCompanyName(e.target.value)}} /> <br/><br/>

             <LocalPhoneIcon class="icons" style={{ padding: "0% 2.5% 1.2% 0%" }}/>
             <TextField id="4" label="Phone Number" defaultValue={phoneNumber} variant="standard" type="number" style ={{width: "93%"}}
             onChange={(e)=>{setPhoneNumber(e.target.value)}}/> <br/><br/>

             <LockIcon class="icons" style={{ padding: "0% 2.5% 1.2% 0%" }}/>
             <TextField id="5" label="Password" defaultValue={password}variant="standard" type="password" style ={{width: "93%"}}
             onChange={(e)=>{setPassword(e.target.value)}}/> <br/><br/><br/>

             <Btn text="Save Changes" variant="contained" color2="#00A800" size="large" width="30%"
              margin="0% 16%" fontColor="white" onclick={onSaveChanges}/>
             <Btn text="Log Out" variant="contained" color="primary" size="large" width="30%" 
             margin="0% 8% 0% 0%" onclick={onLogOut}/>
        </Card>
        </Grid>
      )
}

export default MyProfile

