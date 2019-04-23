import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./exhaust.css";

class Exhaust extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "Performance Exhaust Systems",
      id: 2,
      render: false,
      img: "assets/images/UpgradeInfo/tickford.jpg",
      info: [
        "It is almost an unwritten rule that a Mustang must have a deep, powerful exhaust tone. Swapping out the wimpy stock exhaust part(s) in favor of a less restrictive, larger diameter exhaust system will not only wake up your Mustang with an authoratative growl, but also reward your ride with more power and torque. Furthermore, due to the improved efficiency levels, gas mileage will also be increased. A win-win situation.",
        "GTR carries numerous top-quality exhaust systems for Mustangs that offer a throaty sound and more power. GTR offers everything required to replace your stock exhaust in pieces or as a whole. Performance parts such as headers, H-Pipes, X-pipes, and muffler systems are all available to suit your performance needs and your budget.",
        "Contact GTR for help in choosing a winning exhaust combination for your Mustang."
      ],
      benefits: [
        "Improved horsepower, torque, and performance",
        "Improved gas mileage",
        "Deep, muscular, aggressive exhaust tone",
        "Available in high-quality, lifetime warranty stainless steel",
        'Many parts are easy "bolt-on" items and 50-state smog legal'
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
      <main id="exhaust-main">
        <Jumbotron className="exhaust-jumbo">
          <h2>{this.state.name}</h2>

          <div className="exhaust-images-div">
            <Image src={this.state.img} className="exhaust-images" />
          </div>

          <div className="exhaust-benefits-div">
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
          <div className="exhaust-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default Exhaust;
