import React from "react"
import Layout from "../components/layout"

export default props => {
  return (
    <Layout pageTitle="Page Not Found!" pageDescription="">
      <p>Ooops! Wrong turn!</p>
      <p>
        Head back to the <a href="/">Home</a> page
      </p>
    </Layout>
  )
}
