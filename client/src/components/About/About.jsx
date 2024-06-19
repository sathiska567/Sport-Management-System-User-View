import React from 'react';
import './About.css';
import NavBar from '../NavBar/NavBar';

const About = () => {
  return (
    <NavBar>
      <div className="About">
        <div className="box">
          <div className="title-container">
            <h2 className="title">About</h2>
          </div>
          <div className="paragraph">
            <p>
              Our Cricket Management System simplifies cricket event organization, 
              offering profiles for players, coaches, referees, and managers to showcase achievements. 
              Event organizers can announce events, and managers can form teams, track scores, and update standings.
              Players rate each other, fostering mutual recognition. This platform ensures seamless, transparent, and engaging cricket experiences.
            </p>
            <div className="paragraph-image">
              <img src="../cricket.png" alt="Cricket" />
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default About;
