import "./SkillsCard.css";

const Fade = require("react-reveal/Fade");

const SkillsCard = ({ percentage, icon, skill }: SkillCardData) => {
  const completedWidth = `${percentage}%`;

  return (
    <Fade duration={800} up>
      <div className="skill-card-container" data-testid="skill-card-container">
        <div className="skill-image-container">
          <i className={icon} data-testid="skill-image"></i>
        </div>
        <div className="skill-name" data-testid="skill-name">
          {skill}
        </div>
        {/* <div className="skill-percentage-bar-container">
          <div
            className="skill-percentage-bar-completed"
            data-testid="skill-percentage-bar-completed"
            style={{ width: completedWidth }}
          ></div>
        </div> */}
        {/* <div
          className="skill-percentage-number"
          data-testid="skill-percentage-number"
        >
          {percentage}%
        </div> */}
      </div>
    </Fade>
  );
};

export interface SkillCardData {
  percentage: string;
  icon: string;
  skill: string;
}

export default SkillsCard;
