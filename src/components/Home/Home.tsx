import "./Home.css";
import PortfolioData from "../../PortfolioData";
const Fade = require("react-reveal/Fade");

const Home = () => {
  const homeData = PortfolioData.homePage;
  return (
    <div className="container" id="hero" data-testid="hero-container">
      <div className="text-container">
        <Fade duration={800} bottom>
          <div className="text-above-name green" data-testid="before-text">
            {homeData.introText}
          </div>
          <div className="text-title" data-testid="home-name">
            {homeData.name}
          </div>
        </Fade>
        <Fade duration={900} bottom>
          <div className="role" data-testid="home-subtitle">
            <span>{homeData.subtitle}</span>
          </div>
        </Fade>

        <Fade duration={1000} bottom>
          <div className="text-subtitle" data-testid="test-subtitle">
            <span>{homeData.aboutMe}</span>
          </div>
        </Fade>

        {/* <div className="Resume">
          <a
            href="_blank"
            id="resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume &gt;
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
