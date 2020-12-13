import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Grid from '../components/Grid1'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import Chart from '../components/PieChart1'

import { Image } from "@chakra-ui/react"
import { Box, Center } from "@chakra-ui/react"


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Cavarrio | Experience </title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Quick Overview</h2>
                    </header>
                    <div className="box">
                        <p>I am a well-versed professional with experience in a variety of fields including law, software development, telecommunications, information technology, and energy management. In addition to my experience in corporate environments, I have also worked for several small to medium-sized companies. My experience has afforded me the opportunity to wear "many hats," resulting in the development of a wide range of skills in and effort to use technology in the best manner to accomplish organizational/departmental goals.</p>
                    </div>
                    <div>
                      <Grid />
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
                          alt="" />
                      </Center>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>NCR Corporation</h3>
                            </header>
                            <div className="box">
                                <p>NCR Corporation is an American software company, managed and professional services, consulting and technology company that also makes self-service kiosks, point-of-sale terminals, automated teller machines, check processing systems, and barcode scanners.</p>
                            </div>
                            <ul className="alt">
                              <li>Merchant/End-User Support</li>
                              <li>Reporting: Review and Analysis</li>
                              <li>SaaS and Technical Support</li>
                              <li>JIRA</li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="https://en.wikipedia.org/wiki/NCR_Corporation" className="button" target="_blank">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>ENTOUCH Controls</h3>
                            </header>
                            <div className="box">
                                <p>EnTouch Controls provides SaaS-based energy management systems (EMS) for retail and restaurant chains.</p>
                            </div>
                              <ul className="alt">
                                <li>Remote Hardware Troubleshooting: IoT devices</li>
                                <li>Technical Support</li>
                                <li>Data Review & Analysis</li>
                                <li>Managed Services - Customer/End-User Support</li>
                                <li>Salesforce, Salesforce Administration, Lightning Design & Process/Workflow Automation</li>
                              </ul>

                            <ul className="actions">
                                <li><Link to="https://entouchcontrols.com/solutions/" className="button" target="_blank">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>MEDecision</h3>
                            </header>
                            <div className="box">
                                <p>Medecision is an integrated health management company supporting virtual care and digital health.</p>
                            </div>
                          <ul className="alt">
                            <li>SaaS & Technical Support</li>
                            <li>Ticketing and Escalations</li>
                            <li>Understanding of Development Cycle</li>
                            <li>Use/Development of Automation Scripts</li>
                            <li>JIRA</li>
                          </ul>
                            <ul className="actions">
                                <li><Link to="https://www.linkedin.com/company/medecision/" className="button" target="_blank">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
