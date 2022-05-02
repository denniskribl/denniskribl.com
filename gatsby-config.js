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
         My tech journey began in 2014 at the age of seventeen.
         At this time I started my apprenticeship as an IT specialist for systems integration 
         with the main emphasis on linux system administration.<br>
         Already during my apprenticeship I've learned to live the principles of the 
         DevOps culture.<br>
         
         A passion for modern technology, automation and the mindset which accompanies this 
         culture evolved. <br><br> 
         
         Today I am working on bringing product teams closer to the DevOps world, teaching the key 
         principles and technical background to build truly independent, fully enabled, 
         cross functional teams.<br><br>
         
         On the technical side, I am making great use of various DevOps tools
         and actively help developing innovative products together with my scrum team.<br><br>
         
         The goal I've set myself is to blur the lines between operations and development to unite
         both worlds and get the best result out of it
     </p>
      `,
    education: [
      {
        degree: "IT specialist",
        major: "systems integration",
        when: "2014-2018",
        school: "immowelt AG",
        where: "Nuremberg, Germany",
        moreInfo: `<p>Apprenticeship as IT specialist/systems integration with main emphasis on on-premises Linux systems</p>`,
      },
      {
        degree: "Intermediate school-leaving certificate",
        when: "2007-2014",
        school: "Geschwister-Scholl-Realschule",
        where: "Nuremberg, Germany",
      },
    ],
    experience: [
      {
        role: "DevOps Engineer",
        when: "2018-Present",
        company: "Immowelt AG",
        where: "Nuremberg, Germany",
        moreInfo: `
          <ul class="intext-ul">
              <li class="intext-list">Enhancing the DevOps culture and mindset at immowelt.</li>
              <li class="intext-list">Teaching cross-functional teams the key fundamentals of DevOps to actively reduce dependencies across 
              the company and build fully independent product teams.</li>
              <li class="intext-list">Currently migrating and re-platforming the on-premises infrastructure/services powering immowelt 
              to AWS and building innovative products for the end-user powered by the latest and coolest tech.</li>
          </ul>
        `
      },
      {
        role: "Linux system administrator",
        when: "2017-2018",
        company: "Immowelt AG",
        where: "Nuremberg, Germany",
        moreInfo: `
          <ul class="intext-ul">
              <li class="intext-list">Administrating the on-premises Linux infrastructure at immowelt.</li>
              <li class="intext-list">Leveraging automation tools to build highly scalable and resilient 
                    on-premises infrastructure which powers some core components of immowelt</li>
          </ul>
        `
      },
      {
        role: "IT Specialist/Systems integration",
        when: "2014-2017",
        company: "Immowelt AG",
        where: "Nuremberg, Germany",
        moreInfo: `
          <ul class="intext-ul">
              <li class="intext-list">Apprenticeship and beginning of my journey</li>
          </ul>
        `,
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
        name: "App Development with Swift",
        level: "1000",
        experience: "1 day",
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
      "Web and mobile application programming",
      "Trying out the latest and coolest tech",
      "Information security",
      "Gaming",
      "Anime & TV shows",
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
        trackingId: "UA-167377453-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `denniskribl.com`,
        short_name: `denniskribl`,
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#4baea0`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/skills`, `/experience`, `/interests`, `/`],
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
