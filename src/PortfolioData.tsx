import {
  HeaderProps,
  HomeProps,
  ExperienceProps,
  ProjectsProps,
  SkillsProps,
  ContactProps,
} from "./components/Types";

const PortfolioData: PortfolioDataProps = {
  headers: ["Expereience", "Projects", "Skills", "Contact"],
  homePage: {
    introText: "Hey, I'm",
    name: "Darshan Raju.",
    subtitle: "and I recently started to build things",
    aboutMe:
      "I'm a 5th year University learning computer science and mathematics. I've only recently started web development , and this site is my first major project.",
  },
  experience: [
    //Order these roles earlier to oldest
    {
      role: "Software Development Engineering Intern",
      company: "Amazon Web Services",
      duraction: "Nov 2020 - Feb 2021",
      responsibilities: [
        "Used Typescript with React to develop and maintain features in an AWS service.",
        "Integrated S3 into a new AWS Incident Management service, enabling customers to upload files to incidents, which allows for the documenting ofprogression and resolution or incidents.",
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
        "Build a web portfolio to create a platform to display projects and skills I learn over time",
      githubLink: "https://github.com/darshanraju/WebsitePortfolio",
      projectImage: "Project-Website",
      projectName: "Web Portfolio",
      toolsUsed: ["React", "Typescript", "HTML", "CSS"],
    },
  ],
  skills: [
    {
      name: "HTML",
      percentage: "65",
      icon: "fab fa-html5",
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
  ],
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
  skills: Array<SkillsProps>;
  contact: ContactProps;
}

export default PortfolioData;