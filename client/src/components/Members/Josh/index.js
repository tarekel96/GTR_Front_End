import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./josh.css";

class Josh extends Component {
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
      <div>
        <Card className="members-cards">
          <Card.Img variant="top" src={"assets/images/members/Josh.jpg"} />
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
      </div>
    );
  }
}

const rides = [
  {
    name: `2005 Dodge Magnum RT`,
    key: `Josh2005Dodge`
  },
  {
    name: `2005 Ford F-150 FX4 SuperCrew`,
    key: `Josh2005Ford`
  }
];

const personalInfo = {
  name: `Josh Felton`,
  title: `Marketing/Advertising/Web Site/Photography`,
  background: `Started working with GTR in 2002. Designs, updates, and maintains advertisements in magazines, web site, and promotional media such as calendars, flyers, brochures, etc...`,
  hobbies: `Family, and apparently, work.`,
  food: `Anything the majority of North Americans consider food is fine by me.`
};

export default Josh;
