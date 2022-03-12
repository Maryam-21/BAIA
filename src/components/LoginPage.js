import { Box, Grid } from '@material-ui/core'
import { textAlign } from '@mui/system'
import React from 'react'
import LoginForm from './LoginForm'
import Logo from './Logo'


const LoginPage = () => {
  return (
  <Grid container spacing={2} >
      <Grid item xs={0} sm={6} >
      <Box pt={50}>
        <Logo/>
      </Box>
      </Grid>
    
  <Grid item xs={12} sm={6}>
        <LoginForm/>
  </Grid>
</Grid>
  )
}

export default LoginPage