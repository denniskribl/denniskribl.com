import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          interests
        }
      }
    }
  `)
  const interests = data.site.siteMetadata.interests.map((item, index) => (
    <li key={index}>{item}</li>
  ))
  return (
    <Layout
      pageTitle="Interests"
      pageDescription="Learn more about my interests and hoppies"
    >
      <ul>{interests}</ul>
    </Layout>
  )
}
