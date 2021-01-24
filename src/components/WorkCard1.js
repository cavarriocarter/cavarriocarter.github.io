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

import Avatar1 from '../components/Avatar1'
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
  chart: {
  }
}));

export default function WorkCard1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Container>
                    <Avatar1></Avatar1>

                      <p><br></br>An American software company, managed and professional services, consulting and technology company that also makes self-service kiosks, point-of-sale terminals, automated teller machines, check processing systems, and barcode scanners.</p>
                        <ul className="actions">
                            <li><Link to="https://www.ncr.com/payments" className="button" target="_blank">Learn more</Link></li>
                        </ul>
                  </Container>
                </Paper>
              </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={3}>
                  <Container>
                      <h5>Responsibilities</h5>
                        <ul className="alt">
                          <li>Providing Support to End-Users of NCR's Products and Services</li>
                          <li>Reporting: Review, Analysis, and Reconciliation</li>
                          <li>Customer Support via Email and Inbound Calls</li>
                          <li>SaaS Support for NCR's Payments Processing Services and Platforms</li>
                          <li>User Account Management</li>
                          <li>Ticketing and Escalations</li>
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
                            <Doughnut1/>
                        </Grid>
                      </Container>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>
            </Paper>

    </div>
  );
}
