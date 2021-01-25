import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/PieChart1';
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {CircleProgress} from 'react-gradient-progress'



import Grid1 from '../components/Grid1'
import AreaChart from '../components/AreaChart1'

import pic08 from '../assets/images/ncr2.jpg'

import { Box, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

import Avatar1 from '../components/SkillsAvatar1'

import PyAvatar from '../components/PyAvatar'
import ReactAvatar from '../components/ReactAvatar'
import GatsbyAvatar from '../components/GatsbyAvatar'
import HTMLAvatar from '../components/HTMLAvatar'
import CSSAvatar from '../components/CSSAvatar'
import SCSSAvatar from '../components/SCSSAvatar'
import JSAvatar from '../components/JSAvatar'
import SQLAvatar from '../components/SQLAvatar'
import GITAvatar from '../components/GITAvatar'


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
    marginBottom: '25px',
    display: 'flex',
  },

  paper2: {
    padding: theme.spacing(1),
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
    height: '100%',
  },
  chart: {
  }
}));

export default function WorkCard1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper3} elevation={3}>
                  <Container>
                    <a href="https://www.ncr.com/payments" target="_blank"><Avatar1></Avatar1></a>
                      <br></br>
                      <br></br>

                      <table>
                          <thead>
                              <tr>
                                  <th>Language/Framework</th>
                                  <th>Rating</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td><PyAvatar></PyAvatar></td>
                                  <td>
                                    <CircleProgress percentage={55} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><ReactAvatar></ReactAvatar></td>
                                  <td>
                                    <CircleProgress percentage={70} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><GatsbyAvatar></GatsbyAvatar></td>
                                  <td>
                                    <CircleProgress percentage={75} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><GITAvatar></GITAvatar></td>
                                  <td>
                                    <CircleProgress percentage={60} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><HTMLAvatar></HTMLAvatar></td>
                                  <td>
                                    <CircleProgress percentage={70} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><CSSAvatar></CSSAvatar></td>
                                  <td>
                                    <CircleProgress percentage={60} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><SCSSAvatar></SCSSAvatar></td>
                                  <td>
                                    <CircleProgress percentage={40} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><JSAvatar></JSAvatar></td>
                                  <td>
                                    <CircleProgress percentage={50} width={90}/>
                                  </td>
                              </tr>
                              <tr>
                                  <td><SQLAvatar></SQLAvatar></td>
                                  <td>
                                    <CircleProgress percentage={45} width={90}/>
                                  </td>
                              </tr>
                          </tbody>
                      </table>

                  </Container>
                </Paper>
              </Grid>


                <Grid item xs={12}>
                  <Container>
                    <Paper className={classes.paper2} elevation={3}>
                      <Container>
                      <h5>Ratings: Most Frequently Used Programming Skills</h5>
                        <Grid item xs={12}>
                            <AreaChart/>
                        </Grid>
                      </Container>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>

    </div>
  );
}
