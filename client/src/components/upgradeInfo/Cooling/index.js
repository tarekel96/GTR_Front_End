import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./cooling.css";

class Cooling extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "High Performance Cooling System Upgrades",
      id: 9,
      render: false,
      img: "assets/images/UpgradeInfo/cooling-system.jpeg",
      info:
        "The importance of a high capacity cooling system for your Mustang's engine shoulde be obvious. The more horsepower an engine creates, the more heat an engine will also create. The increase in an engine's heat requires a high performance cooling system to avoid engine damaging overheating problems. GTR carries everything your Mustang needs to run cool even in the dead of summer and when being driven hard. From Fluidyne aluminum racing radiators to low-temperature thermostats to high flow water pumps, GTR has it. All performance cooling parts GTR carries are direct replacement, and bolt on to their stock, factory counterpart. Ask a GTR representative if you need help choosing cooling parts that will best fit your needs.",
      benefits: [
        "High flow, high capacity cooling system parts help prevent engine-killing overheating conditions",
        "Allow continuous hard-driving, even under the most extreme racing conditions or bumper-to-bumper driving"
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
      <main id="cooling-main">
        <Jumbotron className="cooling-jumbo">
          <h2>{this.state.name}</h2>

          <div className="cooling-images-div">
            <Image src={this.state.img} className="cooling-images" />
          </div>

          <div className="cooling-benefits-div">
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
          <div className="cooling-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default Cooling;
