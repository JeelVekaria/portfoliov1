import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';
import { useTrail, animated, useSpring } from 'react-spring';

// placeholder
import portfolio from "../assets/img/portfolio1.png"

// projects
import project01a from "../assets/img/project01a.png"
import project01b from "../assets/img/project01b.png"
import project01c from "../assets/img/project01c.png"

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
  ubunutu = "https://img.shields.io/badge/Ubuntu-E95420.svg?style=for-the-badge&logo=Ubuntu&logoColor=white",
  react = "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black";
  
  const projectsData = [
    /*{
      
      name: 'Template',
      summary: 'Short project summary',
      tags: [python, java, js, c,
        cs,
        bash,
        html,
        css,
        bootstrap,
        tailwind,
        jquery,
        php,
        perl,
        ruby,
        mysql,
        linuxserver,
        ubunutu,
        react],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    */
    {
      name: 'Portfolio',
      summary: 'A personal portfolio made from React to store all my current & upcoming projects.',
      tags: [react, js, html, css, bootstrap],
      images: [project01a, project01b, project01c],
      details: 'A personal portfolio project where I used React for my first time. Luckily I was experienced in using HTML/CSS/Javascript & Bootstrap from my Web Development class, so learning React from scratch wasn\'t too difficult. A huge part of the graphics was made/edited using Figma which I\'ve been using for over 5 years. I plan on making more websites using different frameworks such as Angular and Django sometime, so keep an eye out on my project tab if they pop up!',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
    },
    {
      
      name: 'Project Name',
      summary: 'Short project summary.',
      tags: [python, java, js, c,
        cs,
  ],
      images: [portfolio, portfolio, portfolio],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa sed est sollicitudin, id fermentum elit mollis. Nullam facilisis erat nec magna venenatis faucibus. Fusce interdum feugiat orci, sed lacinia erat sodales eu. Aliquam neque nibh, consectetur maximus nulla ut, pulvinar commodo eros. Nullam hendrerit lectus at felis consectetur imperdiet. Sed vel viverra dui, vel elementum turpis. Nulla mattis et turpis et lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed lacus nunc. Fusce tempus eu ligula id viverra. Mauris vitae massa sapien.',
      link: 'https://project1.com',
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
              <Row>
                {projectsData.map((project, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
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

