import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';
import { useTrail, animated, useSpring } from 'react-spring';

// placeholder
import portfolio from "../assets/img/portfolio1.png"

import project00 from "../assets/img/project00.png"
// projects
import project01a from "../assets/img/project01a.png"
import project01b from "../assets/img/project01b.png"
import project01c from "../assets/img/project01c.png"

import project02a from "../assets/img/project02a.png"
import project02b from "../assets/img/project02b.png"
import project02c from "../assets/img/project02c.png"

import project03a from "../assets/img/project03a.png"
import project03b from "../assets/img/project03b.png"
// import project03c from "../assets/img/project03c.png"

import project04a from "../assets/img/project04a.png"
import project04b from "../assets/img/project04b.png"
import project04c from "../assets/img/project04c.png"
import project04d from "../assets/img/project04d.png"

import project05a from "../assets/img/project05a.png"
import project05b from "../assets/img/project05b.png"
import project05c from "../assets/img/project05c.png"

import project06a from "../assets/img/project06a.png"
import project06b from "../assets/img/project06b.png"
import project06c from "../assets/img/project06c.png"

import project07a from "../assets/img/project07a.png"
import project07b from "../assets/img/project07b.png"
import project07c from "../assets/img/project07c.png"
import project07d from "../assets/img/project07d.png"

import project08a from "../assets/img/project08a.png"
import project08b from "../assets/img/project08b.png"
import project08c from "../assets/img/project08c.png"
import project08d from "../assets/img/project08d.png"

export const Projects = () => {
  // programming language badges
  let python = "https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white",
  java = "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  js = "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  c = "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  cs = "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
  bash = "https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=for-the-badge&logo=GNU-Bash&logoColor=white",
  html = "https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white",
  css = "https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white",
  bootstrap = "https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white",
  tailwind = "https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white",
  jquery = "https://img.shields.io/badge/jQuery-0769AD.svg?style=for-the-badge&logo=jQuery&logoColor=white",
  php = "https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=PHP&logoColor=white",
  perl = "https://img.shields.io/badge/Perl-39457E.svg?style=for-the-badge&logo=Perl&logoColor=white",
  ruby = "https://img.shields.io/badge/Ruby-CC342D.svg?style=for-the-badge&logo=Ruby&logoColor=white",
  mysql = "https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white",
  linuxserver = "https://img.shields.io/badge/LinuxServer-DA3B8A.svg?style=for-the-badge&logo=LinuxServer&logoColor=white",
  ubuntu = "https://img.shields.io/badge/Ubuntu-E95420.svg?style=for-the-badge&logo=Ubuntu&logoColor=white",
  react = "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black",
  api = "https://img.shields.io/badge/Rapid-0055DA.svg?style=for-the-badge&logo=Rapid&logoColor=white",
  unity = "https://img.shields.io/badge/Unity-000000.svg?style=for-the-badge&logo=Unity&logoColor=white",
  android = "https://img.shields.io/badge/Android-34A853.svg?style=for-the-badge&logo=Android&logoColor=white",
  numpy = "https://img.shields.io/badge/NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white",
  pandas = "https://img.shields.io/badge/pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white";
  
  const projectsData = [
    {
      name: 'Portfolio',
      summary: 'Personal portfolio made from React to store all my current & upcoming projects',
      tags: [react, js, html, css, bootstrap],
      images: [project01a, project01b, project01c],
      details: 'A personal portfolio project where I used React for my first time. Luckily I was experienced in using HTML/CSS/Javascript & Bootstrap from my Web Development class, so learning React from scratch wasn\'t too difficult. A huge part of the graphics was made/edited using Figma which I\'ve been using for over 5 years. I plan on making more websites using different frameworks such as Angular and Django sometime, so keep an eye out on my project tab if they pop up!',
      link: 'https://github.com/JeelVekaria/portfoliov1',
    },
    {
      name: 'QuickSum',
      summary: 'Chrome extension that summarizes articles/bodies of text with just one click',
      tags: [html, css, js, api],
      images: [project02a, project02b, project02c],
      details: 'This is a project my friends and I worked on called QuickSum. QuickSum is a Chrome extension that condenses lengthy content into easily digestible snippets, preserving key insights without overwhelming details, solving time/reading constraints. Using HTML, CSS, and JavaScript, we crafted an intuitive browsing experience. An AI-powered text summarization API streamlined content processing for accurate summaries. Integrating the AI Summarizer API was tough initially, but our persistence led to a user-friendly extension revolutionizing content consumption.',
      link: 'https://github.com/muntalee/quick-sum',
    },    
    {
      name: 'Photograph Database',
      summary: 'Database using MySQL & PHP holding information about photographs displayed onto websites',
      tags: [mysql, php, ubuntu,linuxserver],
      images: [project05a, project05b, project05c],
      details: 'Database made using MySQL hosted on an Ubuntu Linux Server holding information about photographs. These photographs are displayed onto 2 websites, first website is the table sorted by the Date Taken, and other website shows photographs based on the location and date chosen by the user.',
      link: 'https://github.com/JeelVekaria/Photograph-Database',
    },
    {
      name: 'Endless Neon Jump',
      summary: 'Recreation of the classic Flappy Bird mobile game made from Unity and is currently in the process of being released on the Google Play Store',
      tags: [cs, unity, android],
      images: [project03a, project03b],
      details: 'Recreated the infamous game Flappy Bird using Unity and C#. This was a project I worked on during my winter break having to learn Unity and C# from scratch but it was worth it to get this game running, although it is compatible with both Android and IOS, I am going to publish it for Android only due to its low publishing fees compared to IOS. Expected to be published prior to April 2024.',
      link: 'https://github.com/JeelVekaria/endless-neon-jump',
    },
    {
      name: 'ChatGPT Ethical Analysis in Academia',
      summary: 'Research project that conducted the use of ChatGPT in Academia via surveys to build visual models using Python',
      tags: [python, numpy, pandas],
      images: [project07a, project07b, project07c, project07d],
      details: 'Research project that I and a group of 4 students conducted the use of ChatGPT in Academia, namely universities and colleges. Data was collected through surveys and after a collection of 100 submissions. We fed that data into our Python code which imported Pandas, Numpy, and Matplotlib, for data visualization. We prepared a presentation and a report conducting our findings in this research.',
      link: 'https://github.com/JeelVekaria/ChatGPT-Ethical-Analysis-in-Academia',
    },
    {
      name: 'Pokemon 2 Player Battle Simulation',
      summary: 'Recreation of a Pokemon battle simulation between two players alternating turns with 3 Pokemons each to choose from',
      tags: [java],
      images: [project04a, project04b, project04c, project04d ],
      details: 'Recreated a Pokemon game where user clicks anywhere from homescreen to begin the battle. Once the battle begins, it is Player 1\'s turn to Attack (shown as "Fight" in game) or Swap(shown as "Pokemon" in game). Attack inflicts random amount of damage to the opponent. Swap allows the user to swap Pokemons. After Player 1 completed their turn, Player 2\'s turn is up, and has the same functionality as Player 1 with Attack and Swap. A fainted Pokemon is indicated when they are unable to attack anymore and when opening the Swap menu, that pokemon button is dulled. The battle continues until either side runs out of Pokemons, and a winner is declared.',
      link: 'https://github.com/JeelVekaria/Pokemon-Game',
    },
    {
      name: 'Connect Four',
      summary: 'Connect Four game alternating between two players made using the Pygame library',
      tags: [python],
      images: [project06a, project06b, project06c],
      details: 'Connect Four game alternating between two players made using the Pygame library. To choose which column to drop the piece in, press the any number 1-7 corresponding to the column to drop it in. To drop the piece in, press Space and watch it fall down into its position. Game ends when there is a winner of 4 (or more) pieces aligned horizontally, vertically, or diagonally.',
      link: 'https://github.com/JeelVekaria/Connect-Four',
    },
    {
      name: 'Music Player App',
      summary: 'Developed an audio content system with advanced search, download modifications, exception handling, file I/O, and maps.',
      tags: [java],
      images: [project08a, project08b, project08c, project08d],
      details: 'This project focuses on creating an audio content management system, similar to Spotify or Apple Music. It incorporates features like search functionalities based on title, artist, and genre. The download action is modified to support ranges and artist or genre-specific downloads. Exception handling is implemented using custom exception classes, and file I/O is used to read audio content information from a file, which is shown after the user types "store" as input. Furthermore, the project focuses on object-oriented programming principles to organize and structure the code, utilizing classes and methods for a modular and scalable design, in addition to the use of maps enhances search efficiency within the system.',
      link: 'https://github.com/JeelVekaria/Music-Player-App',
    },
  ];
const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsInView, setProjectsInView] = useState(false);


  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  // Effect to determine if the component is in view
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 1.4;

      // Check if Projects section is in view
      const isProjectsInView =
        window.scrollY + offset >= document.getElementById('projects').offsetTop &&
        window.scrollY <=
          document.getElementById('projects').offsetTop +
          document.getElementById('projects').offsetHeight;
      setProjectsInView(isProjectsInView);
    };

    // Attach event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation configuration for slide-up effect
  const slideUpAnimation = useSpring({
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
  });

  return (
    <section className="projects my-5" id="projects">
      <Container>
        <h1 className="text-center mb-4">Projects</h1>

        {/* centers content */}
        <Row className="text-center">
          {/* fading animation */}
          <Col xs={12}>
            <animated.div style={slideUpAnimation}>
              {/* cards */}
              <Row >
                {projectsData.map((project, index) => (
                  <Col key={index} xs={12} sm={12} md={6} lg={4}>
                    <Card className="mb-4" onClick={() => handleCardClick(project)} style={{ cursor: 'pointer' }}>
                      {/* project cover image */}
                      <Card.Img variant="top" src={`${project.images[0]}`} />

                      {/* project name & short summary */}
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.summary}</Card.Text>

                        {/* tags */}
                        <div className="tags">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={`tag ${tag.toLowerCase()}-tag`}>
                              <img src={tag} alt="project cover"/>
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </animated.div>
          </Col>
        </Row>
      </Container>

      {/* Modal for detailed project view */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" className="detailedView">
        {/* header */}
        <Modal.Header closeButton className="header">
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>

        {/* body */}
        <Modal.Body>
          {/* carousel of images */}
          <Carousel>
            {selectedProject?.images.map((image, imageIndex) => (
              <Carousel.Item key={imageIndex}>
                <img className="d-block w-100" src={`${image}`} alt={`Slide ${imageIndex + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          {/* context */}
          <p>{selectedProject?.details}</p>
        </Modal.Body>

        {/* footer */}
        <Modal.Footer>
          {/* tags */}
          <div className="tags">
            {selectedProject?.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className={`tag ${tag.toLowerCase()}-tag`}>
                  <img src={tag} alt="project cover"/> 
              </span>
            ))}
          </div>

          {/* close & button to my project */}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" href={selectedProject?.link} target="_blank">
            Visit Project
          </Button>

        </Modal.Footer>
      </Modal>
    </section>
  );
};

