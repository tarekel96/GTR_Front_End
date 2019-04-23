import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./suspension.css";

class Suspension extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "Performance Suspension & Chassis Parts",
      id: 3,
      render: false,
      img: "assets/images/UpgradeInfo/suspension.jpg",
      info: [
        "GTR offers a wide assortment of quality performance suspension and chassis upgrades for late-model Mustang. Everything your pony could ever want to improve its handling and stability is under our roof. Parts such as lowering springs, drag-racing springs, control arms, shocks and struts, bushings, caster/camber plates, subrame connectors, strut tower braces, etc...If you stop and think about it, the bassis of a high performance car, begins with the foundation, which is its suspension and chassis. In order to harness and control the power of a vehicle, you must be able to put that power down to the ground. Whether in a straight line or around corners, suspension and chassis play a huge part in making a Mustang gallop at full speed. GTR has years of experience testing high performance street and race suspension and chassis parts. We can help you choose a complete suspension to achieve your goals or give you sound technical information. Contact GTR for help in selecting your first or next suspension modification. Regardless of whether you need a complete suspension and chassis system or basic bushings, count on GTR for the best advice and service!"
      ],
      benefits: [
        "Greatly improve traction, grip and stability under performance driving conditions",
        "Better vehicle control leads to more driver confidence allowing you to drive harder and safer",

        "Reduce or eliminate chassis and suspension flex or distortion."
      ]
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
      <main id="suspension-main">
        <Jumbotron className="suspension-jumbo">
          <h2>{this.state.name}</h2>

          <div className="suspension-images-div">
            <Image src={this.state.img} className="suspension-images" />
          </div>

          <div className="suspension-benefits-div">
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
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            }
          </div>
          <div className="suspension-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default Suspension;
