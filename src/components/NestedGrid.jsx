import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridRow from './GridRow.jsx';

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

export default function NestedGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        { 
          props.dataRows.map( row => {
            return <GridRow row={row} key={JSON.stringify(row)}/>
          })
        }
      </Grid>
    </div>
  );
}


// import React from 'react';
// import GridRow from './GridRow.jsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function NestedGrid(props) {
//   console.log('NestedGrid props: ', props.dataRows);
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={1}>
//         { 
//           props.dataRows.map( row => {
//             return <GridRow row={row} key={JSON.stringify(row)}/>
//           })
//         }
//       </Grid>
//     </div>
//   );
// }