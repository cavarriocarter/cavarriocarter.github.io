import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="About/Bio" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Cavarrio Carter is a technical support engineer and software analyst in the Dallas-Fort Worth area. He attended the University of Louisiana at Monroe where he obtained a Bachelor of Arts in criminal justice with a minor in sociology. He then went on to obtain his Juris Doctor from Louisiana State University. While at LSU, Cavarrio gained significant experience in advanced research and legal/technical writing.</p>

                    <p>Cavarrio has 5+ years of professional experience, with his most recent experience being in the population health management and energy management sectors as a software analyst and troubleshooter. Cavarrio has 1+ years of development/programming experience.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
