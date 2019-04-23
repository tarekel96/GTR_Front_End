import React, { Component } from "react";
import { Jumbotron, Image, Button, Modal } from "react-bootstrap";
import "./fuel.css";

class Fuel extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      name: "Fuel System Upgrades",
      id: 8,
      render: false,
      img: "assets/images/UpgradeInfo/fuel-system.jpeg",
      info:
        "Everybody knows that you can't make horsepower without fuel...it really is that simple. GTR High Performance carries a wide assortment of fuel system components to feed your beast. From high flow fuel pumps, to larger capacity fuel injectors to adjustable fuel pressure regulators to help fine-tune your Mustang's fuel demands, GTR has you covered. Not sure exactly how much fuel flow is required to optimize your current or future modifications, call us and put our vast experience to use. Having tested and installed virtually every fuel system upgrade on the market, we know what works best on Mustangs.",
      benefits: [
        "High flow fuel components support elevated horsepower levels",
        "High capacity fuel components prevent engine-destroying detonation",
        "Majority of items available in direct-replacement, bolt-on parts"
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
      <main id="fuel-main">
        <Jumbotron className="fuel-jumbo">
          <h2>{this.state.name}</h2>

          <div className="fuel-images-div">
            <Image src={this.state.img} className="fuel-images" />
          </div>

          <div className="fuel-benefits-div">
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
          <div className="fuel-button-div">
            <Button variant="info" onClick={this.handleShow}>
              More Info
            </Button>
          </div>
        </Jumbotron>
      </main>
    );
  }
}

export default Fuel;
