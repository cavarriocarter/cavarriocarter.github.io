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
import SkillsCard from '../components/SkillsCard1'
import SkillsCard2 from '../components/SkillsCard2'
import SkillsCard3 from '../components/SkillsCard3'


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
                    <header class="headerCenter">
                        <h2>Quick Overview</h2>
                    </header>
                      <div>
                        <p>I began my journey in programming in an effort to find better ways to maximize efficiency, eliminate redundant work,
                        and automate standard processes. Over the years, I have gained a deep understanding of both technology and business operations,
                      and my experiences have provided valuable insight for using technology in the most effective manner possible to
                    accomplish organizational goals.</p>
                      </div>
                </div>
            </section>

            <section id="two" className="inner">
                <section>
                      <SkillsCard/>
                </section>
            </section>
            <section id="two" className="inner">
                <section>
                      <SkillsCard2 />
                </section>
            </section>
            <section id="two" className="inner">
                <section>
                      <SkillsCard3 />
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
