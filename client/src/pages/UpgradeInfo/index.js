import React, { Component } from "react";
// import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./upgrade.css";
import { Row, Col, Container } from "react-bootstrap";
import CAI from "../../components/upgradeInfo/CAI/index.js";
import Exhaust from "../../components/upgradeInfo/Exhaust/index.js";
import Suspension from "../../components/upgradeInfo/Suspension/index.js";
import Gears from "../../components/upgradeInfo/Gears/index.js";
import Shifters from "../../components/upgradeInfo/Shifters/index.js";
import Pulleys from "../../components/upgradeInfo/Pulleys/index.js";
import Brakes from "../../components/upgradeInfo/Brakes/index.js";
import Fuel from "../../components/upgradeInfo/Fuel/index.js";
import Cooling from "../../components/upgradeInfo/Cooling/index.js";
import Fade from "react-reveal/Fade";

class upgradeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="exp-main">
        <Container>
          <Row>
            <Col sm="12" lg="4">
              <Fade clear>
                <CAI show={false} />
              </Fade>
            </Col>
            <Col sm="12" lg="4">
              <Fade clear>
                <Exhaust show={false} />
              </Fade>
            </Col>
            <Col sm="12" lg="4">
              <Fade clear>
                <Suspension show={false} />
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="4">
              <Fade clear>
                <Gears show={false} />
              </Fade>
            </Col>
            <Col sm="12" lg="4">
              <Fade clear>
                <Shifters show={false} />
              </Fade>
            </Col>
            <Col sm="12" lg="4">
              <Fade clear>
                <Pulleys show={false} />
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="4">
              <Fade clear>
                <Brakes show={false} />
              </Fade>
            </Col>
            <Col sm="12" lg="4">
              <Fade clear>
                <Fuel show={false} />
              </Fade>
            </Col>
            <Col sm="12" lg="4">
              <Fade clear>
                <Cooling show={false} />
              </Fade>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default upgradeInfo;
