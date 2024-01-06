import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTrail, animated, config } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';

import gridButton from '../assets/img/gridButton.svg';
import listButton from '../assets/img/listButton.svg';

import css from '../assets/img/cssLogo.svg';
import html from '../assets/img/htmlLogo.svg';
import js from '../assets/img/jsLogo.svg';
import lisp from '../assets/img/lispLogo.svg';
import cpp from '../assets/img/cppLogo.svg';
import c from '../assets/img/cLogo.svg';
import csharp from '../assets/img/csLogo.svg';
import perl from '../assets/img/perlLogo.svg';
import ruby from '../assets/img/rubyLogo.svg';
import php from '../assets/img/phpLogo.svg';
import mysql from '../assets/img/mysqlLogo.svg';
import awk from '../assets/img/awkLogo.svg'; //didnt add for design purposes (adds a new line with only 1 language)

import git from '../assets/img/gitLogo.svg';
import vscode from '../assets/img/vscodeLogo.svg';
import eclipse from '../assets/img/eclipseLogo.svg';
import ubuntu from '../assets/img/ubuntuLogo.svg';
import figma from '../assets/img/figmaLogo.svg';
import emacs from '../assets/img/emacsLogo.svg';//didnt add for design purposes (adds a new line with only 1 language)
import unity from '../assets/img/unityLogo.svg';
import vim from '../assets/img/vimLogo.svg';//didnt add for design purposes (adds a new line with only 1 language)



export const Skills = () => {

    const url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    const programmingSkills = [
      { name: 'Python', image: `${url}/python/python-original.svg` , badge: "https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white" },
      { name: 'Java', image: `${url}/java/java-original.svg` , badge: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"},
      { name: 'Bash', image: `${url}/bash/bash-original.svg` , badge: "https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=for-the-badge&logo=GNU-Bash&logoColor=white"},
      { name: 'JavaScript', image: js , badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E}"},
      { name: 'HTML', image: html , badge: "https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" },
      { name: 'CSS', image: css , badge: "https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" },
      // { name: 'Common Lisp', image: lisp }, not as relevent
      { name: 'C', image: c , badge: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"},
      // { name: 'C++', image: cpp }, not that experienced
      { name: 'C#', image: csharp , badge: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"},
      { name: 'PHP', image: php , badge: "https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=PHP&logoColor=white" },
      { name: 'Perl', image: perl , badge: "https://img.shields.io/badge/Perl-39457E.svg?style=for-the-badge&logo=Perl&logoColor=white" },
      { name: 'Ruby', image: ruby , badge: "https://img.shields.io/badge/Ruby-CC342D.svg?style=for-the-badge&logo=Ruby&logoColor=white" },
      { name: 'MySQL', image: mysql , badge: "https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white" }
    ];

    const developerTools = [
      { name: 'Git', image: git , badge: "https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white"},
      { name: 'Linux (Ubuntu)', image: ubuntu , badge: "https://img.shields.io/badge/Ubuntu-E95420.svg?style=for-the-badge&logo=Ubuntu&logoColor=white"},
      { name: 'Figma', image: figma , badge: "https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white"},
      { name: 'Unity', image: unity , badge: "https://img.shields.io/badge/Unity-000000.svg?style=for-the-badge&logo=Unity&logoColor=white"},
      { name: 'Eclipse', image: eclipse , badge: "https://img.shields.io/badge/Eclipse%20IDE-2C2255.svg?style=for-the-badge&logo=Eclipse-IDE&logoColor=white"},
      { name: 'Vscode', image: vscode , badge: "https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white"}
      // { name: 'Vim', image: vim }, //didnt add for design purposes (adds a new line with only 1 language)
    ];
    // State to check if each section is in view
  const [programmingInView, setProgrammingInView] = useState(false);
  const [developerToolsInView, setDeveloperToolsInView] = useState(false);
  const [isListView, setIsListView] = useState(false);

  // Effect to determine if the component is in view
  useEffect(() => {
    const handleScroll = () => {
      // Adjusts how much into the scroll user needs to do for animation to appear, less value = closer to component
      const offset = window.innerHeight / 1.4; // for Programming section
      const offset2 = window.innerHeight / 1.1; // for Developer Tools section

      // Check if Programming Skills section is in view
      const isProgrammingInView =
        window.scrollY + offset >= document.getElementById('programming-section').offsetTop &&
        window.scrollY <=
          document.getElementById('programming-section').offsetTop +
          document.getElementById('programming-section').offsetHeight;
      setProgrammingInView(isProgrammingInView);

      // Check if Developer Tools section is in view
      const isDeveloperToolsInView =
        window.scrollY + offset2 >= document.getElementById('developer-tools-section').offsetTop &&
        window.scrollY <=
          document.getElementById('developer-tools-section').offsetTop +
          document.getElementById('developer-tools-section').offsetHeight;
      setDeveloperToolsInView(isDeveloperToolsInView);
    };

    // Attach event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation configuration for fade-in effect
  const fadeInAnimationProgrammingSkills = useTrail(programmingSkills.length, {
    opacity: programmingInView ? 1 : 0,
    from: { opacity: 0 },
  });

  // Animation configuration for fade-in effect of developer tools
  const fadeInAnimationDeveloperTools = useTrail(developerTools.length, {
    opacity: developerToolsInView ? 1 : 0,
    from: { opacity: 0 },
  });

 // Animation configuration for slide-in effect
 const slideInAnimation = useTrail(
  isListView ? programmingSkills.length + developerTools.length : 0,
  {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(50px)' },
    config: config.gentle
  }
);

const toggleLayout = () => {
  setIsListView(!isListView);
};

return (
  <section className="skills my-5" id="skills">
    <Container>
      {/* Title & button */}
      <div className="headerBox">
        <div className="title">
          <h1 >Skills</h1>
        </div>
        
        <div className="toggleButton">
          <Button onClick={toggleLayout}>
            {isListView ? 
            <img src={gridButton} alt="Toggle Button"/>: 
            <img src={listButton} alt="Toggle Button"/>}
          </Button>
        </div>
      </div>

      <Row className="text-center">
        {/* Programming Skills Box */}
        <Col md={12}>
          <div
            id="programming-section"
            className={`skills-box ${isListView ? 'list-view' : ''}`}
          >
            <h2>Programming</h2>
            {isListView ? (
              <Row className="justify-content-center">
                {/* goes through each programming language with text */}
                {slideInAnimation.map((props, index) => (
                  <Col key={index} xs={6} sm={4} md={2}>
                    <animated.div style={props} className="list-item">
                      <div>
                        <img src={programmingSkills[index]?.badge} alt="" onerror="this.style.display='none'" className="badgeIcon"/>
                        <pre> </pre>
                      </div>
                    </animated.div>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                {/* goes through each programming language and places the image with text */}
                {fadeInAnimationProgrammingSkills.map((props, index) => (
                  <Col key={index} xs={6} sm={4} md={2}>
                    <animated.div style={props} className="skill-item">
                      <img
                        src={programmingSkills[index]?.image}
                        alt={programmingSkills[index]?.name}
                        className="img-fluid"
                      />
                      <p>{programmingSkills[index]?.name}</p>
                    </animated.div>
                  </Col>
                )
                )}
              </Row>
            )}
          </div>
        </Col>

        {/* Developer Tools Box */}
        <Col md={12}>
          <div
            id="developer-tools-section"
            className={`skills-box ${isListView ? 'list-view' : ''}`}
          >
            <h2>Developer Tools</h2>
            {isListView ? (
              <Row className="justify-content-center developerToolsText">
                {/* goes through each developer tool with text */}
                {slideInAnimation.map((props, index) => (
                  <Col key={index} xs={4} md={2}>
                    <animated.div style={props} className="list-item">
                    <div>
                        <img src={developerTools[index]?.badge} alt="" onerror="this.style.display='none'" className="badgeIcon"/>
                        <pre> </pre>
                      </div>
                    </animated.div>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                {/* goes through each developer tool and places the image with text */}
                {fadeInAnimationDeveloperTools.map((props, index) => (
                  <Col key={index} xs={4} md={2}>
                    <animated.div style={props} className="skill-item">
                      <img
                        src={developerTools[index]?.image}
                        alt={developerTools[index]?.name}
                        className="img-fluid"
                      />
                      <p>{developerTools[index]?.name}</p>
                    </animated.div>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
};