import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head';

const IndexPage = props => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello </h1>
      <h2>I am Ajdin.Front - end developer.Living in Sarajevo.</h2>
    </Layout>
  )
}

export default IndexPage
