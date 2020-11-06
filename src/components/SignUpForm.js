import { Grid, Paper,makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: theme.spacing(1),
    },
  }));



const SignUpForm = (props) => {
    const classes=useStyles();
    return ( 
        <Grid container direction="row" className={classes.root}>
            {/* column for text inputs on side-> (first name,last no,email,phoneNo) */}
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>i will have three text input</Paper>
            </Grid>
            {/* checkbox, radio button, dropdown and date picker */}
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>checkbox, radio button, dropdown and date picker</Paper>
            </Grid>
        </Grid>
     );
}
 
export default SignUpForm;