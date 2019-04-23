import React, { Component, Fragment } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./gonz.css";

class Gonz extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Fragment>
        <Card className="members-cards">
          <Card.Img variant="top" src={"assets/images/members/Gonz.jpeg"} />
          <Card.Body>
            <Card.Title>{personalInfo.name}</Card.Title>
            <Card.Text>{personalInfo.title}</Card.Text>
            <Button variant="info" onClick={this.handleShow}>
              More
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{personalInfo.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Background: </strong>
              {personalInfo.background}
            </p>
            <p>
              <strong>Hobbies: </strong>
              {personalInfo.hobbies}
            </p>
            <p>
              <strong>Favorite Food: </strong>
              {personalInfo.food}
            </p>
            <strong>Personal Rides:</strong>
            <ul>
              {rides.map(ride => (
                <li key={ride.key}>{ride.name}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const rides = [
  {
    name: `2006 Mustang GT Vortech Intercooled Supercharged (465 RWHP)`,
    key: `Gonz2006GT`
  },
  {
    name: `1989 Mustang 5.0 LX, 1999 Camaro Z-28 (Yes, a Camaro?!)`,
    key: `Gonz19895.0`
  },
  {
    name: `2007 Tahoe`,
    key: `Gonz2007Tahoe`
  }
];

const personalInfo = {
  name: `Gonzalo Topete`,
  title: `President and Co-Founder of GTR High`,
  background: `Bachelor of Science Business Administration, University of California, Riverside, 1997.`,
  hobbies: `Microsoft X-Box & sports.`,
  food: `Anything his wife, Lauri, makes.`
};

export default Gonz;
