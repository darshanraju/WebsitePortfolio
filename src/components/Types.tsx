export type HeaderProps = Array<string>;

export interface HomeProps {
  introText: string;
  name: string;
  subtitle: string;
  aboutMe: string;
}

export interface ExperienceProps {
  role: string;
  company: string;
  duraction: string;
  responsibilities: Array<string>;

  //Put icon in /images/CompanyLogos/
  iconName: string;
}

export interface ProjectsProps {
  projectName: string;
  description: string;
  toolsUsed: Array<string>;
  githubLink: string;

  //Supports only 1 image
  //I used https://image.online-convert.com/convert-to-ico to turn any image into an icon
  //Put image in /images/Projects/
  projectImage: string;
}

export interface SkillsProps {
  name: string;
  percentage: string;

  //Current supprts all icons on devicon and font-awesome
  icon: string;
}

export interface ContactProps {
  contactText: string;
  email: string;
}
