import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import { Fragment } from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import TextBox from './TextBox'

import { useState } from 'react';

export const RegisterForm = ({Transition, handleClose, open}) => {
    const [openSB, setOpenSB] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name_error, setName_error] = useState('')
    const [email_error, setEmail_error] = useState('')
    const [password_error, setPassword_error] = useState('')
    const [companyName_error, setCompanyName_error] = useState('')
    const [phoneNumber_error, setPhoneNumber_error] = useState('')

    const handleClickSnackbar = () => {
        setOpenSB(true);
    };
    
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSB(false);
    };

    const action = (
        <Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <Close fontSize="small" />
          </IconButton>
        </Fragment>
      );

    const makeAPICall = async (user) => {
        try {
          const response = await fetch("https://localhost:44304/api/Users",{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(user)
            
        }).then(res =>  {
            if(res.ok){
                console.log('ok')
            }
            else
                setEmail_error('User already exists')
            }
        );
        }
        catch (e) {
          console.log(e)
        }
      }

    const validate =() => {
        let c = 0
        if(name==''){
            setName_error(('Name is Required'))
            c++
        }
        else{
            setName_error((''))
        }
        if(email==''){
            setEmail_error(('Email is Required'))
            c++
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmail_error(('Please Enter a Valid Email Address'))
            c++
        }
        else{
            setEmail_error((''))
        }
        if(password==''){
            setPassword_error('Password is Required')
            c++
        }
        else{
            setPassword_error('')
        }
        if(companyName==''){
            setCompanyName_error(('Company Name is Required'))
            c++
        }
        else{
            setCompanyName_error((''))
        }
        if(phoneNumber==''){
            setPhoneNumber_error(('Phone Number is Required'))
            c++
        }
        else if(phoneNumber.length == 11 && phoneNumber.substring(0, 2) == '01') {
            setPhoneNumber_error(('Please Enter a Valid Phone Number'))
            c++
        }
        else{
            setPhoneNumber_error((''))
        }
        if (c===0){
            var user = {
                "Name":name,
                "Email":email,
                "Password":password,
                "PhoneNumber":phoneNumber,
                "CompanyName":companyName
                }
            makeAPICall(user)
            return true
        }
        return false
    }

    const onSubmit =() =>{ 
        if(validate()){
            handleClickSnackbar() 
            handleClose() 
        }
        return
    }
    const onCancel =() =>{ 
        setName_error((''))
        setEmail_error((''))
        setPassword_error('')
        setCompanyName_error((''))
        setPhoneNumber_error((''))
        handleClose()
        return
    }

  return (
    <div>
    <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth='sm'
        maxWidth='sm'
    >
        <DialogTitle>{"Sign Up"}</DialogTitle>
        <DialogContent>
            <TextBox text="Name" required="true" type="text" onchange={setName} 
            errormsg={name_error}/>
            <TextBox text="Email" required="true" type="email" onchange={setEmail} 
            errormsg={email_error}/>
            <TextBox text="Password" required="true" type="password" onchange={setPassword} 
            errormsg={password_error}/>
            <TextBox text="Company Name" required="true" type="text" onchange={setCompanyName} 
            errormsg={companyName_error}/>
            <TextBox text="Phone Number" required="true" type="number" onchange={setPhoneNumber} 
            errormsg={phoneNumber_error}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit}>Register</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
    </Dialog>
        <Snackbar
            open={openSB}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message="Successfully Registered!"
            action={action}
        />
    </div>
  )
}
export default RegisterForm