import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/PieChart1';
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';



import Grid1 from '../components/Grid1'
import Line from '../components/Line1'

import pic08 from '../assets/images/ncr2.jpg'

import { Box, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

import Avatar3 from '../components/Avatar3'
import Doughnut1 from '../components/Doughnut1'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#bdbdbd',
    marginTop: '25px',
    marginBottom: '25px'
  },

  paper2: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#3b3b3b',
    marginTop: '25px',
  },
  paper3: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#bdbdbd',
    marginTop: '25px',
    paddingBottom: '137px',
  },
  chart: {
  }
}));

export default function WorkCard1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper3} elevation={3}>
                  <Container>
                    <Avatar3></Avatar3>

                      <p><br></br>Medecision is an integrated health management company supporting virtual care and digital health.</p>
                        <ul className="actions">
                            <li><Link to="https://www.medecision.com/"  className="button" target="_blank">Learn more</Link></li>
                        </ul>
                  </Container>
                </Paper>
              </Grid>

                <Grid item xs={12} sm={6}>
                  <Container>
                    <Paper className={classes.paper} elevation={3}>
                      <h5>Responsibilities</h5>
                        <ul className="alt">
                          <li>SaaS & Technical Support</li>
                          <li>Customer Support via Email and Inbound Calls</li>
                          <li>Ticketing and Escalations</li>
                          <li>Understanding of Development Cycle</li>
                          <li>Use/Development of Automation Scripts</li>
                          <li>JIRA</li>
                        </ul>
                      </Paper>
                  </Container>
                </Grid>



                <Grid item xs={12}>
                  <Container>
                    <Paper className={classes.paper2} elevation={3}>
                      <Container>
                      <h5>Skills Used</h5>
                        <Grid item xs={12}>
                            <Doughnut1/>
                        </Grid>
                      </Container>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>
    </div>
  );
}
