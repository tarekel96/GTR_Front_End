import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";

class VSix extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
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
      <React.Fragment>
        <Image
          src="assets/images/UpgradePackages/V6Button.png"
          className="package-image"
          onClick={this.handleShow}
        />

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>
              <strong>GTR 1999-2004 V6 Power Packs</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h3>GTR 1999-2001 4 Valve Power Packs</h3>
              <p>{vSixData[0]}</p>
              <p>
                <strong>STAGE I:</strong>
                {vSixData[1]}
              </p>
              <p>
                <strong>STAGE II:</strong>
                {vSixData[2]}
              </p>
              <p>{vSixData[3]}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const vSixData = [
  `Many of our customers own and cherish the V6 Mustang as it provides a nice blend of practicality, fuel efficiency and sportiness. Although the 99-04 Mustang V6 is by no means a hot-rod from the factory, it can be improved upon and made fun-to-drive. From the factory, the V6 is rated at 190 HP, which translates into around 145 rear wheel HP on our in-house DynoJet dyno. Follow the steps below to make the V6 Mustang a contender on the street.`,
  ` This begins with the basic bolts on, which are relatively affordable and simple to install. Begin with a MAC Cold Air Induction kit (+5HP) $170, ASP Power Pulleys (+10 HP), MAC Dual Exhaust conversion kit (+7HP), JBA Shorty Headers (+6HP), DiabloSport Predator tuner (+5 HP). This simple combination will yield around 185 rear wheel HP.`,

  ` If you want to continue building power with a naturally aspirated formula, GTR offers custom grind camshafts for the V6 Mustang. Also, adding Ford Racing 3.73 gears will greatly improve acceleration. Depending on the specs, this will bump output up to 210 rear wheel HP.`,

  ` This brings a supercharger into the mix. GTR recommends the use of Vortech's S-Trim supercharger kit as it is a complete, reliable and effective supercharger system. Using the Vortech on a Stage II combo will generate nearly 300 rear wheel HP. Not too shabby out of a V6 Mustang. At this level, many Mustang GT's will be out-muscled!`,

  `Although this is citing 99-04 V6 Mustangs, the same upgrades also apply to 94-98 V6 Mustangs. Naturally, the 94-98 platform will produce lower HP numbers than their 99-04 counterparts. Keep in mind that any variation of the above items are available. Contact GTR for further tech info or pricing for V6-powered Mustangs!`
];

export default VSix;
