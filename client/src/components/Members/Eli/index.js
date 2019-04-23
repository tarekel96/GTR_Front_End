import React, { Component, Fragment } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./eli.css";

class Eli extends Component {
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
          <Card.Img variant="top" src={"assets/images/members/Eli.jpg"} />
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
    name: `2000 Mustang GT Paxton Intercooled Supercharged`,
    key: `Eli2000GTPaxton`
  },
  {
    name: `94 Mustang GT`,
    key: `Eli94GT`
  },
  {
    name: `99 Mustang GT`,
    key: `Eli99GT`
  },
  {
    name: `2000 Mustang GT (current)`,
    key: `Eli2000GT`
  },
  {
    name: `He has so many speeding tickets, we call him "Ticket-Master".`,
    key: `EliFunnyComment`
  }
];

const personalInfo = {
  name: `Elisseos Patronas`,
  title: `Sales Associate/ Customer Service / Installer`,
  background: `Started with GTR in 2002. In charge of shipping/receiving, fulfilling sales orders and parts sales in store. Eli ensures that your orders arrives accurately and promptly. Eli lends a hand in the shop and installs parts on a regular basis. Eli's hands-on experience is an advantage to you, our customer.`,
  hobbies: `Family, skateboarding, gym.`,
  food: `Gyros, lowfat yogurt & cottage cheese.`
};

export default Eli;
