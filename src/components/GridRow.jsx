import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridEntry from './GridEntry.jsx';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GridRow(props) {
  console.log('GridRow props: ', props);

  const classes = useStyles();

  function FormRow(props) {
    console.log('FormRow props: ', props);
    // each grid below is a column
    // for each item populate jsx
    // console.log('items3', items3);
    return (
      <React.Fragment>
        { props.row.map(entry => {
            return (<GridEntry entry={entry} key={entry}/>)
        })}
      </React.Fragment>
    );
  }

  

  return (
    <Grid container item xs={12} spacing={3}>
      <FormRow row={props.row}/>
    </Grid>
  )
  
}

// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import GridEntry from './GridEntry.jsx'

// export default function GridRow(props) {
//   console.log('GridRow props: ', props);

//   function FormRow(props) {
//     // each grid below is a column
//     // for each item populate jsx
//     // console.log('items3', items3);
//     return (
//       <React.Fragment>
        // { props.row.map(entry => {
        //     return <GridEntry entry={entry} key={entry}/>
        // })}
//       </React.Fragment>
//     );
//   }

//   return (
//     <Grid container item xs={12} spacing={3}>
//       <FormRow row={props.row}/>
//     </Grid>
//   )
  
// }

