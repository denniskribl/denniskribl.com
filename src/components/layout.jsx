import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import Profile from "./profile"
import PageHeader from "./page-header"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          role
          email
          socialMedia {
            name
            link
          }
          theme
          font
        }
      }
    }
  `)

  const theme = data.site.siteMetadata.theme || "great-gatsby"
  const font = data.site.siteMetadata.font || "default"
  return (
    <>
      <Helmet>
        <title>
          {props.pageTitle} - {data.site.siteMetadata.name || ""}
        </title>
        <meta name="description" content={props.pageDescription || ""} />
      </Helmet>

      <div
        id="site-wrapper"
        className={"theme-" + theme.toLowerCase() + " font-" + font}
      >
        <Menu
          currentPage={props.pageTitle}
          name={data.site.siteMetadata.name}
        />

        <div className="container" id="page-content">
          <div className="row">
            <div className="column" id="profile-wrapper">
              <Profile
                name={data.site.siteMetadata.name}
                role={data.site.siteMetadata.role}
                socialMedia={data.site.siteMetadata.socialMedia}
                email={data.site.siteMetadata.email}
              />
            </div>
            <div className="column" id="content-wrapper">
              <PageHeader title={props.pageTitle} />
              {props.children}
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="column">
                <Footer name={data.site.siteMetadata.name} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
