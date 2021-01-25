import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/PieChart1';
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {CircleProgress} from 'react-gradient-progress'



import Grid1 from '../components/Grid1'
import AreaChart2 from '../components/AreaChart2'


import { Box, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

import Doughnut1 from '../components/Doughnut1'

import Avatar2 from '../components/SkillsAvatar2'

import HardwareAvatar from '../components/HardwareAvatar'
import SoftwareAvatar from '../components/SoftwareAvatar'
import IOTAvatar from '../components/IOTAvatar'
import WindowsAvatar from '../components/WindowsAvatar'
import LinuxAvatar from '../components/LinuxAvatar'
import NetworkingAvatar from '../components/NetworkingAvatar'
import DatabasesAvatar from '../components/DatabasesAvatar'
import AV_Avatar from '../components/AV_Avatar'


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
                    <a href="https://www.ncr.com/payments" target="_blank"><Avatar2></Avatar2></a>
                      <br></br>
                      <br></br>

                        <table>
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Rating</th>
                                    <th>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><HardwareAvatar></HardwareAvatar></td>
                                    <td>
                                      <CircleProgress percentage={90} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><SoftwareAvatar></SoftwareAvatar></td>
                                    <td>
                                      <CircleProgress percentage={65} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><IOTAvatar></IOTAvatar></td>
                                    <td>
                                      <CircleProgress percentage={75} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><WindowsAvatar></WindowsAvatar></td>
                                    <td>
                                      <CircleProgress percentage={70} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><LinuxAvatar></LinuxAvatar></td>
                                    <td>
                                      <CircleProgress percentage={60} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><NetworkingAvatar></NetworkingAvatar></td>
                                    <td>
                                      <CircleProgress percentage={85} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><DatabasesAvatar></DatabasesAvatar></td>
                                    <td>
                                      <CircleProgress percentage={55} width={120}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><AV_Avatar></AV_Avatar></td>
                                    <td>
                                      <CircleProgress percentage={75} width={120}/>
                                    </td>
                                    <td></td>
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
                      <h5>Ratings: Most Frequently Used IT/Tech Support Skills</h5>
                        <Grid item xs={12}>
                            <AreaChart2/>
                        </Grid>
                      </Container>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>

    </div>
  );
}
