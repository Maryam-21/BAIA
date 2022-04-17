import { Box,Grid } from '@material-ui/core'
import React, { useState } from 'react'
import TextBox from './TextBox'
import Btn from './Btn'
import RegisterForm from './RegisterForm'

const LoginForm = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [email_error, setEmail_error] = useState('')
    const [password_error, setPassword_error] = useState('')
    const [openRegister, setOpenRegister] = React.useState(false);

    const makeAPICall = async (user) => {
        var user = {
            "Name":Email,
            "Password":Password
        }
        try {
          const response = await fetch("https://localhost:44304/api/Users/Login",{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(user)
            
            }).then(res =>  {
                if(res.status == 200){
                    console.log('ok')
                }
                else{
                    console.log('not ok')
                    setEmail_error('Wrong Email or Password')
                    setPassword_error('Wrong Email or Password')
                }
            });
        }
        catch (e) {
          console.log(e)
        }
    }

    const onLogin = () => {
        validate()
    }

    const handleClickOpen = () => {
        setOpenRegister(true);
    };
    
    const handleClose = () => {
        setOpenRegister(false);
    };



    const validate =  () => {
        if(Email == '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email))
            setEmail_error(('Please Enter an Email Address'))
        else
            setEmail_error((''))

        if(Password == '')
            setPassword_error('Enter password')
        else
            setPassword_error('')

        makeAPICall()
    }



  return (
        <Box sx={{bgcolor:'text.disabled', display:"flex", width:"70%",height:'100%',p:'20px', borderRadius:5,
         border:'5px'}}>
            <Grid container spacing={2} style={{height:'100%'}} alignContent='center'>
                <Grid container direction="column" item xs={12} spacing={2} style={{width:'100%'}} 
                alignItems='center'>
                    <Grid item style={{width:'75%'}}>
                        <TextBox text="Email" required="true" type="email" onchange={setEmail} 
                        errormsg={email_error}/>
                        <TextBox text="Password" required="true" type="password" onchange={setPassword} 
                        errormsg={password_error}/>
                        <RegisterForm handleClose={handleClose} open={openRegister}></RegisterForm>
                    </Grid>
                </Grid>
                <Grid container item xs={12} direction="column" spacing={2} alignItems='center'>
                    <Grid item style={{width:'75%'}}>
                        <Btn color="primary" text="LOGIN" variant="contained" onclick={onLogin} ></Btn>
                    </Grid>
                    <hr style={{width:'80%', backgroundColor:'black', height:'1px', border:0}}/>
                    <Grid item>
                        <Btn text="REGISTER" size='large' onclick={handleClickOpen}></Btn>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
     )
}

export default LoginForm