import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import picture from '../assets/img/profile.png';


export const AboutMe = () => {
  return (
    <section className="aboutme" id="about">
    <Container>
      <Row className="align-items-center ">
        {/* My image*/}
        <Col md={6}>
          <img src={picture} alt="Profile" />
        </Col>

        {/* Description about me*/}
        <Col md={6}>
          <div>
            <h1>HI THERE👋</h1>
            <h3>I am a computer programmer who :</h3>
            <ul>
                <li>Enjoys eating cheese</li>
                <li>Enjoys eating cheese</li>
                <li>Enjoys eating cheese</li>
                <li>Enjoys eating cheese</li>
                <li>Enjoys eating cheese</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};