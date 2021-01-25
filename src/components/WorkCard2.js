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

import Avatar2 from '../components/Avatar2'
import Doughnut2 from '../components/Doughnut2'


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
    backgroundColor: '#828282',
    marginTop: '25px',
    height: '100%'
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
                    <a href="https://entouchcontrols.com/solutions/" target="_blank"><Avatar2></Avatar2></a>

                    <p><br></br>EnTouch Controls provides SaaS-based energy management systems (EMS) for retail and restaurant chains.</p>
                      <ul className="actions">
                          <li><Link to="https://entouchcontrols.com/solutions/" className="button" target="_blank">Learn more</Link></li>
                      </ul>
                  </Container>
                </Paper>
              </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper3} elevation={3}>
                  <Container>
                      <h5>Responsibilities</h5>
                      <ul className="alt">
                        <li>Remote Hardware Troubleshooting: IoT devices</li>
                        <li>Technical Support</li>
                        <li>Data Review & Analysis</li>
                        <li>Customer Support via Email and Inbound Calls</li>
                        <li>Managed Services - Customer/End-User Support</li>
                        <li>Salesforce, Salesforce Administration, Lightning Design & Process/Workflow Automation</li>
                      </ul>
                  </Container>
                </Paper>
                </Grid>


                <Grid item xs={12}>
                  <Container>
                    <Paper className={classes.paper2} elevation={3}>
                      <Container>
                      <h5>Skills Used</h5>
                        <Grid item xs={12}>
                            <Doughnut2/>
                        </Grid>
                      </Container>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>

    </div>
  );
}
