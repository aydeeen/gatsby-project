import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"

import * as classes from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
