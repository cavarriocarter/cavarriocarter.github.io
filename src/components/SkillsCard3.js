import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/PieChart1';
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {CircleProgress} from 'react-gradient-progress'



import Grid1 from '../components/Grid1'
import AreaChart3 from '../components/AreaChart3'


import { Box, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

import Doughnut1 from '../components/Doughnut1'

import Avatar3 from '../components/SkillsAvatar3'

import ApexAvatar from '../components/ApexAvatar'
import VisualforceAvatar from '../components/VisualforceAvatar'
import ProcessBuilderAvatar from '../components/ProcessBuilderAvatar'
import LightningDesignAvatar from '../components/LightningDesignAvatar'
import SFDXAvatar from '../components/SFDXAvatar'
import FlowbuilderAvatar from '../components/FlowbuilderAvatar'


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
                    <a href="https://www.ncr.com/payments" target="_blank"><Avatar3></Avatar3></a>
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
                                    <td><ApexAvatar></ApexAvatar></td>
                                    <td>
                                      <CircleProgress percentage={50} width={90}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><VisualforceAvatar></VisualforceAvatar></td>
                                    <td>
                                      <CircleProgress percentage={65} width={90}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><ProcessBuilderAvatar></ProcessBuilderAvatar></td>
                                    <td>
                                      <CircleProgress percentage={80} width={90}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><LightningDesignAvatar></LightningDesignAvatar></td>
                                    <td>
                                      <CircleProgress percentage={65} width={90}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><SFDXAvatar></SFDXAvatar></td>
                                    <td>
                                      <CircleProgress percentage={65} width={90}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><FlowbuilderAvatar></FlowbuilderAvatar></td>
                                    <td>
                                      <CircleProgress percentage={55} width={90}/>
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
                      <h5>Ratings: Salesforce Administration Skills</h5>
                        <Grid item xs={12}>
                            <AreaChart3/>
                        </Grid>
                      </Container>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>

    </div>
  );
}
