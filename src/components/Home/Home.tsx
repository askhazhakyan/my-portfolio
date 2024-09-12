import React, { useState,useEffect } from 'react';
import './Home.scss';
import GitHub_Logo from '../../images/github.png';
import LinkedIn_Logo from '../../images/linkedin.png';
import HTML_Logo from '../../images/tech_stack/html-5.png';
import CSS_Logo from '../../images/tech_stack/css-3.png';
import SCSS_Logo from '../../images/tech_stack/sass.png';
import JS_Logo from '../../images/tech_stack/js.png';
import TS_Logo from '../../images/tech_stack/typescript.png';
import React_Logo from '../../images/tech_stack/atom.png';
import Angular_Logo from '../../images/tech_stack/angular.png';
import Node_Logo from '../../images/tech_stack/node.png';
import AWS_Logo from '../../images/tech_stack/aws.png';
import Firebase_Logo from '../../images/tech_stack/firebase.png';

const techData = {
  HTML: { 
    color: '#FF4B1E',
    font_color:"white",
    percentage: 90, 
    experience: '4 years',
  },
  CSS: { 
    color: '#0164F3', 
    font_color:"white",
    percentage: 85, 
    experience: '3 years',
  },
  SCSS: {
    color: '#CC6699',
    font_color:"white",
    percentage: 80, 
    experience: '2 years',
  },
  JavaScript: {
    color: '#FFDF00', 
    font_color:"black",
    percentage: 70, 
    experience: '5 years',
  },
  TypeScript: {
    color: '#3077C6', 
    font_color:"white",
    percentage: 60, 
    experience: '4 years',
  },
  React: {
    color: '#0088F0',
    font_color:"white",
    percentage: 80, 
    experience: '3 years',
  },
  Angular: {
    color: '#F14551',
    font_color:"white",
    percentage: 30, 
    experience: '1 years',
  },
  Node: {
    color: '#21A365', 
    font_color:"white",
    percentage: 65, 
    experience: '5 years',
  },
  AWS: { 
    color: '#FF9900', 
    font_color:"black",
    percentage: 50, 
    experience: '2 years',
  },
  Firebase: { 
    color: '#FF6F00', 
    font_color:"white",
    percentage: 25, 
    experience: '1 years',
  },
};

const Home: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // Handle expansion

  const handleIconClick = (tech: string) => {
    setActiveTech(tech);
    setIsExpanded(true);
  };

  const handleBackClick = () => {
    setIsExpanded(false);
    setActiveTech(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded) {
        handleBackClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const techInfo = techData[activeTech as keyof typeof techData] || techData['HTML'];

  return (
    <div className='home-container'>
      <div className="intro-container">
        <div className="content-wrapper">        
          <p className='intro-name'>Hi, I'm <b><i>Alex Khazhakyan</i></b>. An enthusiastic</p>
          <h1 className='intro'>Full-Stack Web Developer</h1>
          <p className='intro-loc'> based in <b><i>Los Angeles, CA</i></b> 📍</p>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/alex-khazhakyan" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn_Logo} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/askhazhakyan" target="_blank" rel="noopener noreferrer">
              <img src={GitHub_Logo} alt="GitHub" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="tech-stack">
        <div className={`blob-container ${isExpanded ? 'expand' : ''}`} style={isExpanded && activeTech ? { boxShadow: `0px 0px 50px 1px ${techInfo.color}` } : {}}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
            <path fill="#f7f7f7" d="M55.3,-58C65.2,-45.4,62.3,-22.7,58.2,-4.1C54.2,14.5,48.9,29.1,39,35.9C29.1,42.8,14.5,42,-2.8,44.7C-20.1,47.5,-40.2,53.9,-56.9,47.1C-73.5,40.2,-86.7,20.1,-81.3,5.5C-75.8,-9.2,-51.6,-18.3,-35,-30.9C-18.3,-43.4,-9.2,-59.4,6.8,-66.2C22.7,-72.9,45.4,-70.5,55.3,-58Z"
                  transform="translate(100 100)" />
          </svg>
          {isExpanded && (
            <button className="back-arrow" onClick={handleBackClick} style={{color: `${techInfo.font_color}`}}>
              ➤
            </button>
          )}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
            <path fill={activeTech ? techInfo.color : "#f7f7f7"} d="M55.3,-58C65.2,-45.4,62.3,-22.7,58.2,-4.1C54.2,14.5,48.9,29.1,39,35.9C29.1,42.8,14.5,42,-2.8,44.7C-20.1,47.5,-40.2,53.9,-56.9,47.1C-73.5,40.2,-86.7,20.1,-81.3,5.5C-75.8,-9.2,-51.6,-18.3,-35,-30.9C-18.3,-43.4,-9.2,-59.4,6.8,-66.2C22.7,-72.9,45.4,-70.5,55.3,-58Z"
              transform="translate(100 100)" />
          </svg>
          {!activeTech ? (
            <div className="ts-label fade-in">
              <h2 className="ts-label-text">My Tech Stack</h2>
            </div>
          ) : (
            <div className="tech-details fade-in" style={{color: `${techInfo.font_color}`}}>
              <h2 className="tech-name">{activeTech}</h2>
              <div className="skill">
                <span className="skill-label">Skill : </span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: `${techInfo.percentage}%`}}></div>
                </div>
                <span className="skill-percentage">{techInfo.percentage}%</span>
              </div>
              <div className="experience">
                <span className="experience-label">Experience : </span>
                <span className="experience-value">{techInfo.experience}</span>
              </div>
            </div>
          )}
        </div>
        <hr className="separator" />
        <div className="ts-icons">
          <img src={HTML_Logo} alt="HTML" className="tech-icon" onClick={() => handleIconClick('HTML')} />
          <img src={CSS_Logo} alt="CSS" className="tech-icon" onClick={() => handleIconClick('CSS')} />
          <img src={SCSS_Logo} alt="SCSS" className="tech-icon" onClick={() => handleIconClick('SCSS')} />
          <img src={JS_Logo} alt="JavaScript" className="tech-icon" onClick={() => handleIconClick('JavaScript')} />
          <img src={TS_Logo} alt="TypeScript" className="tech-icon" onClick={() => handleIconClick('TypeScript')} />
          <img src={React_Logo} alt="React" className="tech-icon" onClick={() => handleIconClick('React')} />
          <img src={Angular_Logo} alt="Angular" className="tech-icon" onClick={() => handleIconClick('Angular')} />
          <img src={Node_Logo} alt="Node" className="tech-icon" onClick={() => handleIconClick('Node')} />
          <img src={AWS_Logo} alt="AWS" className="tech-icon" onClick={() => handleIconClick('AWS')} />
          <img src={Firebase_Logo} alt="Firebase" className="tech-icon" onClick={() => handleIconClick('Firebase')} />
        </div>
      </div>
    </div>
  );
};

export default Home;