import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      { name: 'Python', image: `${url}/python/python-original.svg` },
      { name: 'Java', image: `${url}/java/java-original.svg` },
      { name: 'Bash', image: `${url}/bash/bash-original.svg` },
      { name: 'JavaScript', image: js },
      { name: 'HTML', image: html },
      { name: 'CSS', image: css },
      // { name: 'Common Lisp', image: lisp }, not as relevent

      { name: 'PHP', image: php },
      { name: 'C', image: c },
      // { name: 'C++', image: cpp }, not that experienced
      { name: 'C#', image: csharp },
      { name: 'Perl', image: perl },
      { name: 'Ruby', image: ruby },
      { name: 'MySQL', image: mysql }
    ];
    const developerTools = [
      { name: 'Git', image: git },
      { name: 'Vscode', image: vscode },
      { name: 'Eclipse', image: eclipse },
      { name: 'Linux (Ubuntu)', image: ubuntu },
      { name: 'Figma', image: figma },
      { name: 'Unity', image: unity }
      // { name: 'Vim', image: vim }, //didnt add for design purposes (adds a new line with only 1 language)
    ];
    
// State to check if each section is in view
const [programmingInView, setProgrammingInView] = useState(false);
const [developerToolsInView, setDeveloperToolsInView] = useState(false);

// Effect to determine if the component is in view
useEffect(() => {
  const handleScroll = () => {
    // Ajusts how much into the scroll user needs to do for animation to appear, less value = closer to component
    const offset = window.innerHeight / 1.4; // for Programming section
    const offset2 = window.innerHeight / 1.2; // for Developer Tools section

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

return (
    <section className="skills my-5">
      <Container>
        <h1 className="text-center">Skills</h1>
        <Row className="text-center">
          {/* Programming Skills Box */}
          <Col md={12}>
            <div id="programming-section" className="skills-box">
              <h2>Programming</h2>
              <Row>
                {/* goes through each programming languages and places the image with text */}
                {fadeInAnimationProgrammingSkills.map((props, index) => (
                  <Col key={index} xs={6} sm={4} md={2}>
                    <animated.div style={props} className="skill-item">
                      <img src={programmingSkills[index].image} alt={programmingSkills[index].name} className="img-fluid" />
                      <p>{programmingSkills[index].name}</p>
                    </animated.div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Developer Tools Box */}
          <Col md={12}>
            <div id="developer-tools-section" className="skills-box">
              <h2>Developer Tools</h2>
              <Row>
                {/* goes through each develops tools and places the image with text */}
                {fadeInAnimationDeveloperTools.map((props, index) => (
                  <Col key={index} xs={4} md={2}>
                    <animated.div style={props} className="skill-item">
                      <img src={developerTools[index].image} alt={developerTools[index].name} className="img-fluid"/>
                      <p>{developerTools[index].name}</p>
                    </animated.div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
);
};