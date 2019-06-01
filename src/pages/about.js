import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from '../components/Head';

const About = props => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        My name is Ajdin Holjan. I am front-end developer bla bla bla. Also, I
        am project manager. CSS expert also. Very sociable and likeable. Also,
        striving for enlightment.
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default About
