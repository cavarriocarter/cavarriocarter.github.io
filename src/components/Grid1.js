import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../components/PieChart1';
import Container from '@material-ui/core/Container';

import Modal from '../components/GraphModal2'
import Modal2 from '../components/GraphModal'


import PieChart1 from '../components/PieChart1'
import PieChart2 from '../components/PieChart2'

import { Box, Center } from "@chakra-ui/react"

import Doughnut from '../components/Doughnut1'
import Doughnut2 from '../components/Doughnut2'

import Line from '../components/Line1'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#3b3b3b',
    marginBottom: '25px',
  },
  chart: {
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" disableGutters="true">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <h3>Industries Worked</h3>
              <Center>
                <Doughnut/>
              </Center>
            <Modal></Modal>
          </Paper>
          </Grid>
        </Grid>
        </Container>
        <Container maxWidth="xl" disableGutters="true">
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <h3>Skills Used by Employer: Percent of Time Used</h3>
              <Center>
                <Line/>
              </Center>
            <Modal2></Modal2>
          </Paper>
      </Grid>
      </Container>
    </div>
  );
}
