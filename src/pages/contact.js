import React from "react"

import Layout from "../components/Layout"
import Head from '../components/Head';

const Contact = props => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact me</h1>
      <p>My email: aydinholjan@gmail.com</p>
      <a
        href="https://www.youtube.com/watch?v=plut8NxcPuY"
        target="_blank"
        rel="noopener noreferrer"
      >
        Youtube
      </a>
    </Layout>
  )
}

export default Contact
