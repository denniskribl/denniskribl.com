import React from "react"
import profile_photo from "../../static/profile.png"
import { SocialIcon } from "react-social-icons"
import { useStaticQuery, graphql } from "gatsby"

const Profile = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          theme
        }
      }
    }
  `)

  const theme = data.site.siteMetadata.theme || "gatsby"
  const themeDict = {
    "great-gatsby": "#9a5abe",
    "darth-vader": "#777",
    "master-yoda": "#4baea0",
    "wonder-woman": "#dc4e48",
    "luke-lightsaber": "#5c94bd",
  }
  const socialIcons = props.socialMedia.map((item, index) => (
    <SocialIcon
      key={index}
      url={item.link}
      bgColor={themeDict[theme]}
      style={{ height: 25, width: 25 }}
    />
  ))
  return (
    <>
      <img src={profile_photo} alt={props.name} id="profile-img" />
      <div id="profile-info-wrapper">
        <h4 id="profile-name">{props.name}</h4>
        <h6 id="profile-role">{props.role}</h6>
        <p id="profile-email">
          <a href={"mailto:" + props.email}>{props.email || ""}</a>
        </p>
      </div>
      <div id="social-icons-wrapper">{socialIcons}</div>
    </>
  )
}

export default Profile
