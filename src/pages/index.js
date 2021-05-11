import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/work2.jpg'
import pic02 from '../assets/images/skills3.jpeg'
import pic03 from '../assets/images/code.jpeg'
import pic04 from '../assets/images/interests9.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Software Developer"
                    meta={[
                        { name: "Cavarrio Carter's Homepage", content: 'About, Bio, Pages' },
                        { name: 'Experience, Background, About, Info, Work History', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Experience</h3>
                                <p>Learn more about my work experience</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Skills</h3>
                                <p>Find out more about what I can do</p>
                            </header>
                            <Link to="/landing2" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Projects</h3>
                                <p>See What I've been Working On</p>
                            </header>
                            <Link to="/landing3" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>A Brief Summary</h2>
                            </header>
                            <p>Cavarrio Carter is a software developer and technical support analyst in the Dallas-Fort Worth area.</p>

                            <p>He attended the University of Louisiana at Monroe where he obtained a Bachelor of Arts in criminal justice
                            with a minor in sociology. He then went on to obtain his Juris Doctor from Louisiana State University Law School.
                            While at LSU, Cavarrio gained significant experience in advanced research and legal/technical writing.</p>

                            <p>Cavarrio has 2+ years of professional experience in the tech industry,
                            with his most recent experience being in the energy management and finance sectors,
                            serving in roles requiring both technical and client support skills.
                            Cavarrio is a self-taught programmer with 1.5+ years of development/programming experience.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">View Experience</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
