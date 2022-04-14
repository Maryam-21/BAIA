import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextBox from './TextBox'

import { useEffect, useState } from 'react';

export const RegisterForm = ({Transition, handleClose, open}) => {
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

    const makeAPICall = async (user) => {
            console.log(user)
        try {
          const response = await fetch("https://localhost:44304/api/Users",{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(user)
            
        });
          const data = await response.json();
          console.log({ data })
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
        if(validate())
            handleClose()
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
  )
}
export default RegisterForm