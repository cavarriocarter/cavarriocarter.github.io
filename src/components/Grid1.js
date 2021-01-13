import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../components/PieChart1'

import PieChart1 from '../components/PieChart1'
import PieChart2 from '../components/PieChart2'

import { Box, Center } from "@chakra-ui/react"
import BarChart1 from '../components/BarChart1'

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
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <h3>Skills Used by Employer</h3>
            <Box overflow="hidden">
              <Center>
                <BarChart1/>
              </Center>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
