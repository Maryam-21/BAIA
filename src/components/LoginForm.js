import { Box, Grid } from '@material-ui/core'
import React from 'react'
import TextBox from './TextBox'
import Btn from './Btn'

const LoginForm = () => {
  return (
        <Box sx={{bgcolor:'text.disabled', display:"flex", width:"75%", p:'20px', borderRadius:5, border:'5px'}}>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <TextBox text="Email" required="true" type="text"/>
                    <TextBox text="Password" required="true" type="password"/>
                </Grid>
                <Grid item>
                    <Btn color="primary" text="Login"></Btn>
                    <Btn color="" text="Register"></Btn>
                </Grid>
            </Grid>
        </Box>
     )
}

export default LoginForm