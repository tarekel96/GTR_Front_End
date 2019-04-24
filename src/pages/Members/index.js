import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./members.css";
import Gonz from "../../components/Members/Gonz/index.js";
import Ric from "../../components/Members/Ric/index.js";
import Eli from "../../components/Members/Eli/index.js";
import Chris from "../../components/Members/Chris/index.js";
import Dave from "../../components/Members/Dave/index.js";
import Josh from "../../components/Members/Josh/index.js";
import Fade from "react-reveal/Fade";

const Members = () => {
  return (
    <main id="staffContainer">
      <Container id="members-container">
        <Row id="members-row-one">
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Gonz />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Ric />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Eli />
            </Fade>
          </Col>
        </Row>
        <Row id="members-row-two">
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Chris />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Dave />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Josh />
            </Fade>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Members;
