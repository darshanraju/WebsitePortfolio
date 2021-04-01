import "./Home.css";
const Fade = require("react-reveal/Fade");

const Home = () => {
  return (
    <div className="container" id="hero">
      <div className="text-container">
        <Fade duration={800} bottom>
          <div className="text-above-name green">Hey, I'm</div>
          <div className="text-title">Darshan Raju.</div>
        </Fade>
        <Fade duration={900} bottom>
          <div className="role">
            <span>and I recently started to build things</span>
          </div>
        </Fade>

        <Fade duration={1000} bottom>
          <div className="text-subtitle">
            <span>
              I'm a 5th year University learning computer science and
              mathematics. I've only recently started web development , and this
              site is my first major project.
            </span>
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
