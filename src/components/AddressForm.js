import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





function AddressForm() {
  return (
    <Grid container style={{marginLeft:40}} spacing={5}>
      <Grid item xs={12}>
        <Typography
          variant='h4'
          align='center'
        >
            Edit My Requests
        </Typography>
        <Typography
          variant='body1'
          align='center'
          color='error'
        >
          MY name is PAvith
        </Typography>
      </Grid>

      <Grid item 
            xs={12} md={4} lg={3}>
          <TextField
            label='Name'
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={1} lg={1}></Grid>
        <Grid item 
            xs={12} md={4} lg={3}>
          <TextField 
            label='Email'
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={1} lg={1}></Grid> 
        <Grid item 
            xs={12} md={4} lg={3} >
          <TextField
            label='Description'
            variant='standard'
            fullWidth
          />
      </Grid>




      
      <Grid item 
            xs={12} md={4} lg={5}>
          <TextField
            label='Name'
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={1} lg={1}></Grid>
        <Grid item 
            xs={12} md={4} lg={5}>
          <TextField 
            label='Email'
            variant='standard'
            fullWidth
          />
        </Grid>





        <Grid item 
            xs={12} md={4} lg={11}>
          <TextField 
            label='Email'
            variant='standard'
            fullWidth
          />
        </Grid>





    </Grid>
  )
}

export default AddressForm
