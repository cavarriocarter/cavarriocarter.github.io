import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding2 from '../components/BannerLanding2'

import pic08 from '../assets/images/skills1.png'
import pic09 from '../assets/images/skills4.png'
import pic10 from '../assets/images/salesforce3.png'

import {Image} from "@chakra-ui/react"
import { Box, Center, Container } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Cavarrio | Skills</title>
            <meta name="description" content="Landing Page" />
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
                            <div>
                                <Table variant="striped" colorScheme="teal">
                                    <Thead>
                                        <Tr>
                                            <Th>Language/<br></br>Framework</Th>
                                            <Th>Usage</Th>
                                            <Th>Rating</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <tr>
                                            <td>Python</td>
                                            <td>Task Automation | Data Analysis & Visualization | Machine Learning</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>React</td>
                                            <td>Javascript Library for Modern Web and Mobile App Development </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gatsby</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>HTML/CSS</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Javascript</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>SQL</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td></td>
                                        </tr>
                                    </Tbody>
                                </Table>
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
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Skill</th>
                                            <th>Description</th>
                                            <th>Skill Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hardware/IoT Support</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Software Support (SaaS)</td>
                                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Windows</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Linux</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>User Account Management</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Networking</td>
                                            <td> Morbi faucibus arcu accumsan lorem.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Databases</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Audio/Video</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
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
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Skill</th>
                                            <th>Description</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apex</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Visualforce</td>
                                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Process Builder</td>
                                            <td> Morbi faucibus arcu accumsan lorem.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Lighting Design</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Flowbuilder</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
