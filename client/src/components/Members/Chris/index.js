import React, { Component, Fragment } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./chris.css";

class Chris extends Component {
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
          <Card.Img variant="top" src={"assets/images/members/Chris.jpg"} />
          <Card.Body>
            <Card.Title className="bio-name">{personalInfo.name}</Card.Title>
            <Card.Text className="bio-title">{personalInfo.title}</Card.Text>
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
    name: `93 Ford F-350 460 Big Block`,
    key: `ChrisF-350`
  },
  {
    name: `Ford Explorer`,
    key: `ChrisExplorer`
  },
  {
    name: `Toyota Truck`,
    key: `ChrisTruck`
  }
];

const personalInfo = {
  name: `Chris Balster`,
  title: `Technician/Installer`,
  background: `Universal Technical Institute graduate, 2005. Ford FACT graduate, 2006. A.S.E. certified Master Mechanic, A1 Engine Repair, A2 Automatic Transmission, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Brakes, A6 Electronic Systems, A7 Heating & Air Conditioning, A8 Engine Performance.`,
  hobbies: `Fishing.`,
  food: `Vietnamese Food.`
};

export default Chris;
