import { Box,Grid } from '@material-ui/core'
import Slide from '@mui/material/Slide';
import React, {useState} from 'react'
import TextBox from './TextBox'
import Btn from './Btn'
import RegisterForm from './RegisterForm'

const LoginForm = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [email_error, setEmail_error] = useState('')
    const [password_error, setPassword_error] = useState('')
    const [openRegister, setOpenRegister] = React.useState(false);

    const handleClickOpen = () => {
        setOpenRegister(true);
    };
    
    const handleClose = () => {
        setOpenRegister(false);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const validate =() => {
        if(Email==''){
            setEmail_error(('Enter email'))
        }
        else
            setEmail_error((''))

        if(Password=='')
            setPassword_error('Enter password')
        else
            setPassword_error('')

    }



  return (
        <Box sx={{bgcolor:'text.disabled', display:"flex", width:"70%",height:'100%',p:'20px', borderRadius:5,
         border:'5px'}}>
            <Grid container spacing={2} style={{height:'100%'}} alignContent='center'>
                <Grid container direction="column"  item xs={12} spacing={2} style={{width:'100%'}} 
                alignItems='center'>
                    <Grid item style={{width:'75%'}}>
                        <TextBox text="Email" required="true" type="email" onchange={setEmail} 
                        errormsg={email_error}/>
                        <TextBox text="Password" required="true" type="password" onchange={setPassword} 
                        errormsg={password_error}/>
                        <RegisterForm handleClose={handleClose} open={openRegister}></RegisterForm>
                    </Grid>
                </Grid>
                <Grid container item  xs={12} direction="column"  spacing={2} alignItems='center'>
                    <Grid item style={{width:'75%'}}>
                        <Btn color="primary" text="Login" onclick={validate} ></Btn>
                    </Grid>
                    <hr style={{width:'80%', backgroundColor:'black', height:'1px', border:0}}/>
                    <Grid item>
                        <Btn color="" text="Register" size='large' onclick={handleClickOpen}></Btn>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
     )
}

export default LoginForm