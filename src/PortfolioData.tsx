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
    subtitle: "and I build a few things",
    aboutMe:
      "I'm a UNSW University Graduate in CS and Mathematics. I'm a software engineer at Microsoft Azure and a core contributor to Morphware, a blockchain based machine learning platform.",
  },
  experience: [
    //Order these roles earlier to oldest
    {
      role: "Software Engineer",
      company: "Microsoft",
      duraction: "Jan 2022 - Present",
      responsibilities: [
        ".Net software engineer buiding microsoervice architecture for Azure",
        "Collaborate with partner teams to developer technical proposals for solutions",
      ],
      iconName: "Microsoft",
    },
    {
      role: "Software Engineer",
      company: "Fenergo",
      duraction: "May 2021 - October 2021",
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
      projectImage: "Project-WebsiteV2",
      projectName: "Web Portfolio",
      toolsUsed: ["React", "Typescript", "HTML", "CSS", "Jest"],
    },
    {
      description: "A machine learning overlay network on Ethereum.",
      githubLink: "https://github.com/morphware/daemon",
      liveProjectLink: "https://github.com/morphware/daemon",
      projectImage: "Morphware",
      projectName: "Morphware",
      toolsUsed: [
        "Solidity",
        "NodeJS",
        "React",
        "Typescript",
        "Electron",
        "Web3",
        "Hardhat",
      ],
    },
  ],
  skills: {
    skillsPageSubtitle: "These metrics may vary depending on whom you ask.",
    skills: [
      {
        name: "Solidity",
        percentage: "40",
        icon: "devicon-solidity-plain",
      },
      {
        name: "C#",
        percentage: "40",
        icon: "devicon-csharp-plain",
      },
      {
        name: "Python",
        percentage: "55",
        icon: "fab fa-python",
      },
      {
        name: "NodeJS",
        percentage: "60",
        icon: "devicon-nodejs-plain",
      },
      {
        name: "Typescript",
        percentage: "60",
        icon: "devicon-typescript-plain",
      },
      {
        name: "React",
        percentage: "75",
        icon: "fab fa-react",
      },
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
        name: "MySQL",
        percentage: "60",
        icon: "fas fa-database",
      },
      {
        name: "Postgresql",
        percentage: "40",
        icon: "devicon-postgresql-plain",
      },
      {
        name: "AWS",
        percentage: "40",
        icon: "devicon-amazonwebservices-original",
      },
      {
        name: "Azure",
        percentage: "40",
        icon: "devicon-azure-plain",
      },
      {
        name: "Electron",
        percentage: "40",
        icon: "devicon-electron-original",
      },
      {
        name: "Figma",
        percentage: "40",
        icon: "devicon-figma-plain",
      },
      {
        name: "Git",
        percentage: "40",
        icon: "devicon-git-plain",
      },
      {
        name: "Storybook",
        percentage: "40",
        icon: "devicon-storybook-plain",
      },
    ],
  },
  contact: {
    contactText: "",
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
