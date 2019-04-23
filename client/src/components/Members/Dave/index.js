import React, { Component, Fragment } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./dave.css";

class Dave extends Component {
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
          <Card.Img variant="top" src={"assets/images/members/Dave.jpg"} />
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
    name: `06 Chrysler 300C SRT8`,
    key: `DaveChrys`
  },
  {
    name: `96 Chevy Impala SS`,
    key: `DaveImpala`
  },
  {
    name: `04 Chevy Truck 2500`,
    key: `Dave2500Truck`
  },
  {
    name: `1986 Mustang GT (previous)`,
    key: `Dave1986GT`
  },
  {
    name: `1989 Mustang 5.0. (previous)`,
    key: `Dave1989GT`
  }
];

const personalInfo = {
  name: `Dave Chamberlain`,
  title: `Technician/Installer`,
  background: `Started with GTR in 2006. Specializes in 5.0 Mustangs and truck performance. Was owner/operator of Dave's Custom Motorsports (Upland, Ca) 1992-1996.`,
  hobbies: `Las Vegas and sleeping.`,
  food: `Chili cheese fries at The Hat.`
};

export default Dave;
