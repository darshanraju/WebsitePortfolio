import {
  HeaderProps,
  HomeProps,
  ExperienceProps,
  ProjectsProps,
  ContactProps,
  SkillsPageProps,
} from "./components/Types";

const PortfolioData: PortfolioDataProps = {
  headers: ["Expereience", "Projects", "Skills", "Contact"],
  homePage: {
    introText: "Hey, I'm",
    name: "Darshan Raju.",
    subtitle: "and I recently started to build things",
    aboutMe:
      "I'm a 5th year University learning computer science and mathematics. I've only recently started web development, and this site is my first major project.",
  },
  experience: [
    //Order these roles earlier to oldest
    {
      role: "Software Engineer",
      company: "Fenergo",
      duraction: "May 2021 - Present",
      responsibilities: [
        "Full stack software engineer buiding a SAAS, hosted in AWS",
        "Use React with Typescript to build micro frontends and the .NET Core for developing API's",
      ],
      iconName: "Fenergo",
    },
    {
      role: "Software Development Engineering Intern",
      company: "Amazon Web Services",
      duraction: "Nov 2020 - Feb 2021",
      responsibilities: [
        "Used Typescript with React to develop and maintain features in an AWS service.",
        "Integrated S3 into the AWS Incident Management service, enabling customers to upload files to their incident. This allowed for better documenting the progression and remediation of their incidents.",
      ],
      iconName: "AWSLogo",
    },
    {
      role: "Site Reliability Engineering Intern",
      company: "ServiceNow",
      duraction: "Nov 2019 - Nov 2020",
      responsibilities: [
        "Maintained customer instances by monitoring availability and latency.",
        "Utilise MySQL, MariaDB and the InnoDB engine to resolve database monitoring alerts.",
        "Operated in CentOS to analyse OS monitoring alerts.",
        "Used automations runbooks to provide minimal mean time to resolutions during outages.",
      ],
      iconName: "serviceNow",
    },
  ],
  projects: [
    {
      description:
        "Built a web portfolio to create a platform to showcase current and future projects.",
      githubLink: "https://github.com/darshanraju/WebsitePortfolio",
      //Provide root directory (e.g. http://www.darshanraju.com/)
      liveProjectLink: "http://www.darshanraju.com",
      projectImage: "Project-Website",
      projectName: "Web Portfolio",
      toolsUsed: ["React", "Typescript", "HTML", "CSS", "Jest"],
    },
    {
      description: "Created an ERC20 coin with its ICO page.",
      githubLink: "https://github.com/darshanraju/ERC20Token-with-ICOpage",
      liveProjectLink: "https://github.com/darshanraju/ERC20Token-with-ICOpage",
      projectImage: "DRJU-Coin",
      projectName: "ERC20 with ICO Site",
      toolsUsed: [
        "React",
        "Typescript",
        "Solidity",
        "Web3",
        "Ganache",
        "Truffle",
      ],
    },
  ],
  skills: {
    skillsPageSubtitle: "These metrics may vary depending on whom you ask.",
    skills: [
      {
        name: "HTML5",
        percentage: "65",
        icon: "fab fa-html5",
      },
      {
        name: "CSS3",
        percentage: "60",
        icon: "devicon-css3-plain",
      },
      {
        name: "Python",
        percentage: "55",
        icon: "fab fa-python",
      },
      {
        name: "JS",
        percentage: "70",
        icon: "fab fa-js-square",
      },
      {
        name: "React",
        percentage: "75",
        icon: "fab fa-react",
      },
      {
        name: "MySQL",
        percentage: "60",
        icon: "fas fa-database",
      },
      {
        name: "Typescript",
        percentage: "60",
        icon: "devicon-typescript-plain",
      },
      {
        name: "NodeJS",
        percentage: "60",
        icon: "devicon-nodejs-plain",
      },
      {
        name: "Flutter",
        percentage: "40",
        icon: "devicon-flutter-plain",
      },
      {
        name: "C",
        percentage: "40",
        icon: "devicon-csharp-plain",
      },
      {
        name: "AWS",
        percentage: "40",
        icon: "devicon-amazonwebservices-original",
      },
    ],
  },
  contact: {
    contactText:
      "I'll be graduating Nov 2021, and open for graduate roles in 2022",
    email: "darshanraju9@gmail.com",
  },
};

interface PortfolioDataProps {
  headers: HeaderProps;
  homePage: HomeProps;
  experience: Array<ExperienceProps>;
  projects: Array<ProjectsProps>;
  skills: SkillsPageProps;
  contact: ContactProps;
}

export default PortfolioData;
