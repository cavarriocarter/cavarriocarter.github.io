import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../components/PieChart1'

import PieChart1 from '../components/PieChart1'
import PieChart2 from '../components/PieChart2'

import { Box, Center } from "@chakra-ui/react"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
  chart: {
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={3}>
            <h3>Industries Worked</h3>
            <Box overflow="hidden">
              <Center>
                <PieChart1/>
              </Center>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper} elevation={3}>
            <h3>Job Functions</h3>
              <Box overflow="hidden">
                <Center>
                  <PieChart2 />
                </Center>
              </Box>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
