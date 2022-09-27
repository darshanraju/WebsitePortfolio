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
      "I'm a software engineer at Microsoft Azure and a core contributor to Morphware, a blockchain based machine learning platform.",
  },
  experience: [
    //Order these roles earlier to oldest
    {
      role: "Software Engineer",
      company: "Microsoft",
      duraction: "Jan 2022 - Present",
      responsibilities: [
        ".Net software engineer buiding microsoervice architecture for Azure",
        "Build VSCode extensions for Azure to prevent services outages",
        "Collaborate with partner teams to developer technical proposals for solutions",
      ],
      iconName: "Microsoft",
    },
    {
      role: "Software Engineer",
      company: "Fenergo",
      duraction: "May 2021 - October 2021",
      responsibilities: [
        "Develop micro frontends using React with Typescript, and leveraged .NET Core to build and deploy our backend infrastructure across AWS.",
        "Architect solutions which satisfy customer needs as well as passing GDPR compliance. Then built and scaled these financial solutions across our global AWS infrastructure to 1000's customers.",
        "Individually contribute and maintain a storybook repository for business analysts to easily view and modify front end components, to streamline user story creation",
      ],
      iconName: "Fenergo",
    },
    {
      role: "Software Development Engineering Intern",
      company: "Amazon Web Services",
      duraction: "Nov 2020 - Feb 2021",
      responsibilities: [
        "Integrating Amazon S3 into the AWS Incident Management service. Enabling 10,000's customers to easily upload files to their incidents, which allows for better documenting the progression and remediation of the incident.",
        "Designed and presented AWS service integration architecture and threat models. Mitigating all potential security issues attack vectors for our customers.",
      ],
      iconName: "AWSLogo",
    },
    {
      role: "Site Reliability Engineering Intern",
      company: "ServiceNow",
      duraction: "Nov 2019 - Nov 2020",
      responsibilities: [
        "Responsible for availability and performance of 10,000's MySQL database instances running on Linux services which store data for 1,000's of companies",
        "Scaled 100's of database instances with sharding and read replicas which accommodated sudden and planned increases in database workloads",
        "Executed 100's of emergency database failovers and rollbacks (point-in-time recoveries) which mitigated potential or ongoing service impact and restored database instances to a health state.",
        "Performed standardized tests on new data centers to ensure that all the 100's of Linux servers were setup correctly for production use.",
        "Mentored 2 interns and 5 new hires",
      ],
      iconName: "serviceNow",
    },
  ],
  projects: [
    {
      description:
        "A job board for softwaree engineers starting out their career in the industry",
      // githubLink: "https://github.com/darshanraju/WebsitePortfolio",
      //Provide root directory (e.g. http://www.darshanraju.com/)
      liveProjectLink: "http://www.cse-gigs.com",
      projectImage: "CSE-Gigs",
      projectName: "CSE-Gigs",
      toolsUsed: ["NextJS", "Typescript", "TailwindCSS"],
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
  ],
  skills: {
    skillsPageSubtitle: "",
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
