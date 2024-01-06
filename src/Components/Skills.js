import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img from '../assets/img/gmailIcon.svg';
// import icon1 from 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'

import css from '../assets/img/cssLogo.svg';
import html from '../assets/img/htmlLogo.svg';
import js from '../assets/img/jsLogo.svg';
import lisp from '../assets/img/lispLogo.svg';
import cpp from '../assets/img/cppLogo.svg';
import c from '../assets/img/cLogo.svg';
import csharp from '../assets/img/csLogo.svg';
import perl from '../assets/img/perlLogo.svg';
import ruby from '../assets/img/rubyLogo.svg';
import mysql from '../assets/img/mysqlLogo.svg';
import awk from '../assets/img/awkLogo.svg'; //didnt add for design purposes (adds a new line with only 1 language)

import git from '../assets/img/gitLogo.svg';
import vscode from '../assets/img/vscodeLogo.svg';
import eclipse from '../assets/img/eclipseLogo.svg';
import ubuntu from '../assets/img/ubuntuLogo.svg';
import figma from '../assets/img/figmaLogo.svg';
import emacs from '../assets/img/emacsLogo.svg';
import vim from '../assets/img/vimLogo.svg';



export const Skills = () => {
    const url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
    const programmingSkills = [
      { name: 'Python', image: `${url}/python/python-original.svg` },
      { name: 'Bash', image: `${url}/bash/bash-original.svg` },
      { name: 'JavaScript', image: js },
      { name: 'HTML', image: html },
      { name: 'CSS', image: css },
      { name: 'Common Lisp', image: lisp },
      { name: 'C', image: c },
      { name: 'C++', image: cpp },
      { name: 'C#', image: csharp },
      { name: 'Perl', image: perl },
      { name: 'Ruby', image: ruby },
      { name: 'MySQL', image: mysql }
      // Add more programming skills as needed
    ];
    const developerTools = [
      { name: 'Git', image: git },
      { name: 'Vscode', image: vscode },
      { name: 'Eclipse', image: eclipse },
      { name: 'Linux (Ubuntu)', image: ubuntu },
      { name: 'Figma', image: figma },
      { name: 'Emacs', image: emacs }
      // { name: 'Vim', image: vim }, //didnt add for design purposes (adds a new line with only 1 language)
    ];
    return(
    <section className="skills my-5">
    <Container>
        <h1 className="text-center">Skills</h1>
      <Row className="text-center">
        {/* Programming Skills Box */}
        <Col md={12}>
          <div className="skills-box">
            <h2>Programming</h2>
            <Row>
              {programmingSkills.map((skill, index) => (
                  <Col key={index} xs={6} sm={4} md={2} >
                  <div className="skill-item">
                    <img src={skill.image} alt={skill.name} className="img-fluid" />
                    <p>{skill.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>

        {/* Developer Tools Box */}
        <Col md={12}>
          <div className="skills-box">
            <h2>Developer Tools</h2>
            <Row>
              {developerTools.map((tool, index) => (
                  <Col key={index} xs={4} md={2}>
                  <div className="skill-item">
                    <img src={tool.image} alt={tool.name} className="img-fluid" />
                    <p>{tool.name}</p>
                  </div>
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
