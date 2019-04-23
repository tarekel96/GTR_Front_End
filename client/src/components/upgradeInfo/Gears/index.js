import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./gears.css";

class Gears extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "Differential Gears",
      id: 4,
      render: false,
      img: "assets/images/UpgradeInfo/gears.jpg",
      info:
        "By far, one of the most popular modifications for Mustangers to do to their cars. Changing the differential (rear) gears allows much quicker acceleration. Installing performance differential gears allows the rear tires to rotate and spin at a faster rate, thereby accelerating the car faster. Significant drops in 0-60mph and 1/4 mile times will be seen, not to mention the fun-factor will be raised. The most popular gears for Mustangs are 3.55, 3.73, 3.90 and 4.10 gears, although others are available. GTR carries top quality, strong gear sets for V6 and V8 Mustangs along with all the necessary parts that are required for a complete installation, such as: installation kits, bearings, seals, axles, synthetic gear oil, friction modifier, speedometer calibrators, etc...If you are having a tough time figuring out which is the best gear ratio for you car, contact GTR's knowledgeable staff for suggestions.",
      benefits: [
        "Much improved acceleration and passing power",
        "Quicker quarter mile times and reduces lap times in competition",
        "The equivalent in performance as adding 30-40 horsepower"
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
      <main id="gears-main">
        <Jumbotron className="gears-jumbo">
          <h2>{this.state.name}</h2>

          <div className="gears-images-div">
            <Image src={this.state.img} className="gears-images" />
          </div>

          <div className="gears-benefits-div">
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
          <div className="gears-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default Gears;
