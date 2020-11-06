import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12} md={3}>
        <Paper className={classes.paper}>side menu bar let's say</Paper>
      </Grid>
      <Grid item xs={12} md={9}>
        {/* container with header, main body and footer */}
        <Grid container direction="column">
          <Grid item xs={12}>
            <Paper className={classes.paper}>Header</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p>
                Lorem Ipsum is simply <strong>dummy text</strong> of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
