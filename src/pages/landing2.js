import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding2 from '../components/BannerLanding2'

import pic08 from '../assets/images/skills1.png'
import pic09 from '../assets/images/skills4.png'
import pic10 from '../assets/images/salesforce3.png'
import pic11 from '../assets/images/python1.png'

import { Box, Center, Container, Image} from "@chakra-ui/react"
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {CircleProgress} from 'react-gradient-progress'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Cavarrio | Skills</title>
            <meta name="Cavarrio Carter's Skills" content="Landing Page" />
        </Helmet>

        <BannerLanding2 />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Quick Overview</h2>
                    </header>
                      <div className="box">
                        <p>I began my journey in programming in an effort to find better ways to maximize efficiency, eliminate redundant work,
                        and automate standard processes. Over the years, I have gained a deep understanding of both technology and business operations,
                      and my experiences have provided valuable insight for using technology in the most effective manner possible to
                    to accomplish organizational goals.</p>
                      </div>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                      <Center>
                        <Image
                           src={pic08}
                           borderRadius="full"
                           boxSize="sm"
                           alt=""/>
                         </Center>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Programming</h3>
                            </header>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Language/<br></br>Framework</th>
                                            <th>Rating</th>
                                            <th>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Python</td>
                                            <td>
                                              <CircleProgress percentage={55} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>React</td>
                                            <td>
                                              <CircleProgress percentage={70} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gatsby</td>
                                            <td>
                                              <CircleProgress percentage={75} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>HTML</td>
                                            <td>
                                              <CircleProgress percentage={70} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CSS</td>
                                            <td>
                                              <CircleProgress percentage={60} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Javascript</td>
                                            <td>
                                              <CircleProgress percentage={40} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>SQL</td>
                                            <td>
                                              <CircleProgress percentage={45} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                      <Center>
                        <Image
                           src={pic09}
                           borderRadius="full"
                           boxSize="sm"
                           alt=""/>
                      </Center>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technical Support</h3>
                            </header>
                            <div className="table-wrapper">
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
                                            <td>Hardware</td>
                                            <td>
                                              <CircleProgress percentage={90} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Software</td>
                                            <td>
                                              <CircleProgress percentage={45} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>IoT</td>
                                            <td>
                                              <CircleProgress percentage={75} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Windows</td>
                                            <td>
                                              <CircleProgress percentage={45} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Linux</td>
                                            <td>
                                              <CircleProgress percentage={60} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Networking</td>
                                            <td>
                                              <CircleProgress percentage={85} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Databases</td>
                                            <td>
                                              <CircleProgress percentage={55} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Audio/Video</td>
                                            <td>
                                              <CircleProgress percentage={75} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                      <Center>
                        <img src={pic10}
                          borderRadius="full"
                          boxSize="sm"
                          alt=""/>
                      </Center>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Salesforce Administration</h3>
                            </header>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Skill</th>
                                            <th>Rating</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apex</td>
                                            <td>
                                              <CircleProgress percentage={45} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Visualforce</td>
                                            <td>
                                              <CircleProgress percentage={65} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Process Builder</td>
                                            <td>
                                              <CircleProgress percentage={80} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Lighting Design</td>
                                            <td>
                                              <CircleProgress percentage={65} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>SFDX</td>
                                            <td>
                                              <CircleProgress percentage={65} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Flowbuilder</td>
                                            <td>
                                              <CircleProgress percentage={55} width={120}/>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
