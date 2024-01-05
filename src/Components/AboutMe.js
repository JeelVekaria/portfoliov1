import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import picture from '../assets/img/Avatar.png';


export const AboutMe = () => {
  return (
    <section className="aboutme">
    <Container className="my-5">
      <Row className="align-items-center">
        {/* IMy image*/}
        <Col md={6}>
          <img
            src={picture}
            alt="Profile"
            className="img-fluid rounded-circle"
            />
        </Col>

        {/* Description about me*/}
        <Col md={6}>
          <div>
            <h2>About Me</h2>
            <p>
              Write more about me here...
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};