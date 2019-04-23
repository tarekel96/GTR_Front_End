import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./pulleys.css";

class Pulleys extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "Underdrive Power Pulleys",
      id: 6,
      render: false,
      img: "assets/images/UpgradeInfo/pulley.jpg",
      info:
        "Underdrive power pulleys slow down engine-driven accessories (water pump, alternator, power steering, etc...) which reduces parasitic drag on the motor. This reduction on parasitic drag translates into extra horsepower that is freed, which gets transferred to the rear wheels. Normal gains for power pulleys are about 10 rear wheel horsepower and 10 lb.ft. torque! In addition, the motor is made more efficient by the power pulleys because of the saved power (remember that the engine doesn't have to work as hard), you will improve gas mileage too! Talk about a win-win upgrade. GTR High Performance carries power pulleys from MAC Products, BBK Performance, ASP, and STEEDA. Consult GTR to find out which is best for your Mustang.",
      benefits: [
        "Gain 10+ horsepower and torque",
        "Easy bolt-on that can be installed in about an hour",
        "Most Mustangs can re-use the stock/factory belt",
        "One of the best bang-for-the-buck modifications available for Mustangs!"
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
      <main id="pulleys-main">
        <Jumbotron className="pulleys-jumbo">
          <h2>{this.state.name}</h2>

          <div className="pulleys-images-div">
            <Image src={this.state.img} className="pulleys-images" />
          </div>

          <div className="pulleys-benefits-div">
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
          <div className="pulleys-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default Pulleys;
