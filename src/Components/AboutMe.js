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
            <h2>About Me</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna sed blandit mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat quam elit, at consectetur risus blandit eget. Suspendisse nec pharetra mauris, non congue felis. Sed sit amet orci a ligula molestie pellentesque. Etiam bibendum arcu quam, sed malesuada massa facilisis non. Mauris ullamcorper efficitur diam, ac lobortis ex tempus mattis. Vestibulum tristique ligula vel elit porta, a varius mi varius. Quisque a convallis nibh. Nunc ut nisl id odio mattis blandit in ac neque.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};