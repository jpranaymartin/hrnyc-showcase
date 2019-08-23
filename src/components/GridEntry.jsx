import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function GridEntry(props) {
  console.log('GridEntry props: ', props);

  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>{props.entry.name}</Paper>
      <MediaCard project={props.entry} />
    </Grid>
  );
}
