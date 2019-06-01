import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as classes from './footer.module.scss'

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={classes.footer}>
      <p>Created by {data.site.siteMetadata.author}, copyright 2019</p>
    </footer>
  )
}

export default Footer
