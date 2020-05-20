import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          education {
            degree
            major
            when
            school
            where
            moreInfo
          }
        }
      }
    }
  `)

  const education = data.site.siteMetadata.education.map((item, index) => (
    <Item
      key={index}
      name={(item.degree || "") + " " + (item.major ? "in " + item.major : "")}
      when={item.when}
      where={item.where}
      org={item.school}
      moreInfo={item.moreInfo}
    />
  ))

  return (
    <Layout
      pageTitle="Education"
      pageDescription="Learn more about my education background"
    >
      {education}
    </Layout>
  )
}
