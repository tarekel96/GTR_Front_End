import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./cai.css";

class CAI extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "Cold Air Induction Kits",
      id: 1,
      render: false,
      img: "assets/images/UpgradeInfo/CAI_Cropped.jpg",
      info:
        "GTR carries a full line of various brand cold air induction and intake kits for late-model Mustangs. From simple, yet effective, no-frills intake kits to chrome-plated or carbon-fiber induction kits with custom programed computer tuners. Adding a cold air intake will improve power output and also render improved fuel mileage--you get the best of both worlds! Cold air kits are one of the most popular upgrades we offer because they flat-out work! Best of all, most cold air kits can be installed in as little as 20 minutes with basic tools and many are 50 state smog-legal. Put this on the top of your list if more power is what you are after. Contact GTR to help choose which cold air intake is right for your Mustang!",
      benefits: [
        "Improves horsepower and torque output between 7-25 HP (depending on application)",
        "Improves gas mileage due to increased efficiency of engine",
        "Inlcudes re-usable, high-flow, lifetime air filter."
      ],
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <main id="cai-main">
        <Jumbotron className="cai-jumbo">
          <h2>{this.state.name}</h2>

          <div className="cai-images-div">
            <Image src={this.state.img} className="cai-images" />
          </div>

          <div className="cai-benefits-div">
            <h3>Benefits: </h3>

            <ul>
              {this.state.benefits.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            {
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{this.state.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="cai-info">{this.state.info}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="info" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            }
          </div>
          <div className="cai-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default CAI;
