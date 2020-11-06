import { Grid, Paper, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

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

const SignUpForm = () => {
  const phoneRegex = /^[\+]?[(][0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [inputs, setInputs] = useState([
    {
      id: "phone",
      label: "Phone",
      placeholder: "999-999-9999",
      value: "",
      error: false,
      helperText: "Any valid phone no will do",
      getHelperText: (error) =>
        error ? "woops, invalid phone number" : "Any valid phone no will do",
      isValid: (value) => value === "" || value.length > 9,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "str.golu@gmail.com",
      value: "",
      error: false,
      helperText: "Any valid email address will do",
      getHelperText: (error) =>
        error
          ? "Woops not a valid email address"
          : "Any valid email address will do",
      isValid: (value) => value === "" || emailRegex.test(value),
    },
  ]);

  const _onChange = ({ target: { id, value } }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);
    const input = inputs[index];
    const isValid = input.isValid(value);
    newInputs[index] = {
      ...input,
      value: value,
      error: !isValid,
      helperText: input.getHelperText(!isValid),
    };
    setInputs(newInputs);
  };

  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root}>
      {/* column for text inputs on side-> (first name,last no,email,phoneNo) */}
      <Grid item xs={12} sm={6}>
        <Grid container direction="column">
          <Paper className={classes.paper}>
            {inputs.map((input) => (
              <Grid item key={input.id}>
                <TextField
                  id={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  error={input.error}
                  helperText={input.helperText}
                  value={input.value}
                  onChange={_onChange}
                  variant="outlined"
                />
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Grid>
      {/* checkbox, radio button, dropdown and date picker */}
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          checkbox, radio button, dropdown and date picker
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;

/* 
notes::
    TextField has properties->



*/
