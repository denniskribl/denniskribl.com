module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `Dennis Kribl`,
    role: `DevOps Engineer`,
    email: `denniskribl@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/denniskribl",
      },
      { name: "linkedin", link: "https://linkedin.com/in/denniskribl" },
      { name: "twitter", link: "https://twitter.com/denniskrb_" },
    ],
    about: `
      <p>
         Dennis tech journey began in 2014 at the age of seventeen as an trainee IT specialist for system integration.<br>
         Already during his apprenticeship he learned to live the principles of the DevOps culutre. A 
         passion for modern technology, automation and the mindeset which accompanies this culture evolved. <br><br> 
         Today Dennis is working on bringing product teams closer to the DevOps world, teaching the key principles
         to build truly independent, cross functional teams.<br> On the technical side, he uses a wide range of DevOps tools
         and actively helps developing innovative products with his scrum team. The goal he set himself is to blur the
         line between operations and development and unite both worlds to get the best out of it.
     </p>
      `,
    education: [
      {
        degree: "IT specialist",
        major: "systems integration",
        when: "2014-2018",
        school: "Immowelt AG",
        where: "Nürnberg, Germany",
        moreInfo: `<p>Apprenticeship as IT specialist/systems integration with main emphasis on on-premises Linux systems</p>`,
      },
      {
        degree: "Intermediate school-leaving certificate",
        when: "2007-2014",
        school: "Geschwister-Scholl-Realschule",
        where: "Nürnberg, Germany",
      },
    ],
    experience: [
      {
        role: "DevOps Engineer",
        when: "2018-Present",
        company: "Immowelt AG",
        where: "Nürnberg, Germany",
        moreInfo: `Enhancing the DevOps culture and mindset at Immowelt. Teaching cross-functional 
                   teams the key fundamentals of DevOps to actively reduce dependencies across 
                   the company and build fully independent product teams.
                   Currently migrating and re-platforming the on-premises infrastructure/services powering Immowelt 
                   to AWS and building innovative products for the end-user powered by the latest and coolest tech.
        `,
      },
      {
        role: "Linux system administrator",
        when: "2017-2018",
        company: "Immowelt AG",
        where: "Nürnberg, Germany",
        moreInfo: `Administrating the on-premises Linux infrastructure at Immowelt. 
                  Leveraging automation tools to build highly scalable and resilient 
                  on-premises infrastructure which powers some core components of Immowelt`,
      },
      {
        role: "IT Specialist/Systems integration",
        when: "2014-2017",
        company: "Immowelt AG",
        where: "Nürnberg, Germany",
        moreInfo: "Apprenticeship and beginning of my journey",
      },
    ],
    skills: [
      {
        name: "DevOps & Agile Methodologies",
        level: "95",
        experience: "5 years",
      },
      {
        name: "Amazon Web Services",
        level: "90",
        experience: "3 years",
      },
      {
        name: "Serverless Cloud architecture",
        level: "80",
        experience: "2 years",
      },
      {
        name: "Terraform",
        level: "85",
        experience: "3 years",
      },
      {
        name: "GitLab CI/CD",
        level: "85",
        experience: "4 years",
      },
      {
        name: "Linux",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Kubernetes",
        level: "70",
        experience: "1 year",
      },
      {
        name: "Javascript",
        level: "65",
        experience: "1 year",
      },
      {
        name: "Golang",
        level: "70",
        experience: "2 years",
      },
    ],
    interests: [
      "Trying out the latest and hottest tech",
      "Web and mobile application programming",
      "Information security",
      "Gaming",
      "Animes & TV shows",
      "Languages",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "master-yoda",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
          },
        ],
      },
    },
  ],
}
