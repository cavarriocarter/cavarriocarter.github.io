import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import Grid1 from '../components/Grid1'
import WorkCard1 from '../components/WorkCard1'
import WorkCard2 from '../components/WorkCard2'
import WorkCard3 from '../components/WorkCard3'

import pic08 from '../assets/images/ncr2.jpg'
import pic09 from '../assets/images/entouch1.jpeg'
import pic10 from '../assets/images/medecision1.jpeg'

import Chart from '../components/PieChart1'

import { Image, Grid, GridItem } from "@chakra-ui/react"
import { Box, Center } from "@chakra-ui/react"
import Divider from '@material-ui/core/Divider';


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Cavarrio | Experience </title>
            <meta name="Cavarrio Carter's Background" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Quick Overview</h2>
                    </header>
                    <div className="box">
                        <p>I am a well-versed professional with experience in a variety of fields including telecommunications, information technology, and energy management. In addition to my experience in corporate environments, I have also worked for several small to medium-sized companies. My experience has afforded me the opportunity to develop a wide range of skills while using technology to accomplish organizational/departmental goals and maximize efficiency.</p>
                    </div>
                </div>
            </section>
            <section id="two" className="inner">
                <section>
                      <WorkCard1/>
                        <Divider/>

                      <WorkCard2 />
                        <Divider/>
                      <WorkCard3 />
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
