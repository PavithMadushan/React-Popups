import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Radio from "@mui/material/Radio";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { useSelector, useDispatch } from "react-redux";
//import Button from '@mui/material/Button';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Grid,
  Typography,
} from "@mui/material";

export default function Addnewserviceagreement() {
  //const popUpState = useSelector((state) => state.popUp);
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog> */}

        <Dialog open={open} onClose={handleClose} maxWidth="100px">
          <DialogTitle align="center">Add new Service agreement</DialogTitle>

          <Grid container style={{ marginLeft: 40 }} spacing={5}>
            <Grid item xs={12}></Grid>

            <Grid item xs={12} md={4} lg={5}>
              <TextField label="Agreement ID" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} md={1} lg={1}></Grid>
            <Grid item xs={12} md={4} lg={5}>
              <TextField label="Equipment ID" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} md={1} lg={1}></Grid>
            <Grid item xs={12} md={4} lg={11}>
              <TextField
                label="Equipment Description"
                variant="standard"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12} lg={3}>
              <DatePicker
                disableFuture
                label="Start Date"
                openTo="year"
                views={["year", "month", "day"]}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item xs={12} md={1} lg={1}></Grid>

            <Grid item xs={12} md={12} lg={3}>
              <DatePicker
                disableFuture
                label="End Date"
                openTo="year"
                views={["year", "month", "day"]}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item xs={12} md={1} lg={1}></Grid>

            <Grid item xs={12} md={4} lg={3}>
              <TextField
                label="Total Services for the period"
                variant="standard"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={1} lg={1}></Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginLeft={0}
              marginTop={10}
              paddingLeft={0}
            >
              <Button variant="contained">Add Agreement</Button>

              <Grid item xs={12} md={1} lg={1}></Grid>

              <Button variant="contained">Cancel</Button>
            </Grid>

            <Grid item xs={12} md={1} lg={1}></Grid>

          </Grid>
        </Dialog>
      </LocalizationProvider>
    </div>
  );
}
