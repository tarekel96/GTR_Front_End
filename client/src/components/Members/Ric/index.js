import React, { Component, Fragment } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./ric.css";

class Ric extends Component {
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
          <Card.Img variant="top" src={"assets/images/members/Ric.jpg"} />
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
    name: `2001 Mustang GT Paxton Supercharged`,
    key: `Ric2001GT`
  },
  {
    name: `1994 SVT Cobra Vortech Supercharged (sold)`,
    key: `RicCobra`
  },
  {
    name: `1992 Mustang GT (sold)`,
    key: `Ric1992GT`
  },
  {
    name: `1964 1/2 Mustang 289`,
    key: `Rick1964Stang`
  },
  {
    name: `2005 Ford F-150 SuperCrew`,
    key: `Ric2005F150`
  },
  {
    name: `2006 Infiniti G35 Coupe`,
    key: `Ric2006G35`
  },
  {
    name: `Ricardo doesn't know the meaning of "factory stock.`,
    key: `RicFunnyFact`
  }
];

const personalInfo = {
  name: `Ricardo Topete`,
  id: 2,
  title: `Vice-President and Co-Founder of GTR High`,
  background: ` Bachelor of Science Business Administration, University of California, Riverside, 1997. A.S.E Certified: A1 Engine Repair, A8 Engine Performance, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Braking Systems.`,
  hobbies: `Spending time with family, Traveling, Bicycling, Cruising in Mustangs & making horsepower!`,
  food: `Any dead and cooked animal is fair game`
};

export default Ric;
