import React, { useState } from "react";
import "./WorkCard.css";
const Fade = require("react-reveal/Fade");

const WorkCard = ({
  role,
  duration,
  company,
  responsibilities,
}: workCardData) => {
  const [viewResponsibilities, setViewResponsibilities] = useState(false);
  const buttonIcon = () => {
    return viewResponsibilities ? "fas fa-angle-up" : "fas fa-angle-down";
  };

  return (
    <Fade duration={800} bottom>
      <div className="work-card-container">
        <div className="word-card-role">{role}</div>
        <div className="word-card-company">{company}</div>
        <div className="word-card-duration">
          {duration}
          <button
            className="show-resp-btn"
            onClick={() =>
              setViewResponsibilities(
                (viewResponsibilities) => !viewResponsibilities
              )
            }
          >
            <i className={buttonIcon()}></i>
          </button>
        </div>

        <ShowResponsibilities
          responsibilities={responsibilities}
          viewResponsibilities={viewResponsibilities}
        />
      </div>
    </Fade>
  );
};

const ShowResponsibilities = ({
  responsibilities,
  viewResponsibilities,
}: responsibilityData) => {
  return (
    <Fade duration={900} down collapse when={viewResponsibilities}>
      {responsibilities.map((res, i) => {
        return (
          <div className="word-card-responsibilities-container" key={i}>
            <div className="word-card-responsibilities">{res}</div>
          </div>
        );
      })}
    </Fade>
  );
};

interface workCardData {
  role: string;
  duration: string;
  company: string;
  responsibilities: Array<string>;
}

interface responsibilityData {
  responsibilities: Array<string>;
  viewResponsibilities: boolean;
}

export default WorkCard;
