import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";
import "./five-oh.css";

class FiveOh extends Component {
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
          src="assets/images/UpgradePackages/50Button.png"
          className="package-image"
          onClick={this.handleShow}
        />

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>
              <strong>GTR 5.0 Power Packs</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>STAGE I:</strong>
              {fiveOhData[0]}
            </p>
            <p>
              <strong>STAGE II:</strong>
              {fiveOhData[1]}
            </p>
            <p>
              {" "}
              <strong>STAGE III:</strong>
              {fiveOhData[2]}
            </p>
            <p>
              <strong>STAGE IV:</strong>
              {fiveOhData[3]}
            </p>
            <p>{fiveOhData[4]}</p>
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

const fiveOhData = [
  ` This is where most 5.0 Mustangs are currently at or will be at shortly. For our purposes, we will assume that the average guy uses this as a starting point, or foundation upon which to build thier Mustang. This list of modifications will include all or a combination of the following mods:
        Stock 302 bottom end, stock cast iron heads and stock camshaft...no real engine internal upgrades. All mods thusfar have been the true bolt-ons such as: Gears, Power pulleys, Shorty Headers, Catalytic H or X Pipe, Cat back exhaust kit, Cold Air intake, Mass Air Meter upgrade, Larger throttle body & EGR spacer, Ignition amplifier/box and coil, performance clutch kit, short throw shifter, and Electric fan kit. The more adventureous STAGE I guy may also have a street upper and lower intake manifold kit and adjustable fuel pressure regulator. Expect around 245 HP/ 290 Torque @ the wheels`,

  ` This is where things start to get a bit more serious. I will assume that most people that fall into this categoy have a fresh, low mileage 302/306 based engine with some internal engine upgrades, such as: Forged pistons, forged rods, and a good engine rebuild kit. All of the upgrades used in STAGE I will transfer over and compliment the STAGE II nicely. More importantly, it provides an excellent point to continue adding HP via power adder in the future. Here are some possible upgrades and related pricing:
        302/306 Short Block with forged internals $1700, AFR 165cc Aluminum Cylinder Heads-assembled $1350, Trick Flow Specialties Street Heat Upper/Lower Intake Manifold kit $465, Crane roller rocker arms $250, Trick Flow Specialties Stage I cam $180, 24 lb/hr fuel injectors $300, and Walbro 255 lph fuel pump $120. Expect around 300 HP / 345 Torque @ the wheels`,

  ` Some customers may choose to skip right over STAGE II and go straight into STAGE III, while others may choose to build yet another motor, this time even more serious. Stage III starts with a 331/347 stroker short block with forged internal that is boost/nitrous ready. Nearly all of the mods from STAGE I and STAGE II can transfer over to this stage, however in some cases it may be necessary to simply go bigger to feed the larger displacement and maximize performance. Here is what STAGE III consists of:
        331/347 Short Block with forged internals $1700, Trick Flow Specialties Track Heat upper/lower intake manifold kit $510, AFR 185cc Aluminum Heads--assembled $1375, Trick Flow Specialties STAGE II camshaft $ 180, 30 lb/hr fuel injectors. Expect about 325 HP / 350 Torque @ the wheels`,

  ` This level gets pretty close to the limit of a truly streetable 5.0. With this combination, 91 octane is required, many of the parts will be smog legal, will yeild good reliability and flat-o ut blistering performance. Many of the parts from the previous stages will transfer over to the STAGE IV, but it is best to start with the STAGE III combination for best performance and results. We are assuming that we will build on a 331/347 forged stroker short block. Here are the items required to take it to the next level:
        Vortech S-Trim superchargedr kit (8psi) $2900, 42 lb/hr fuel injectors $375, Lightning 90mm Mass Air Flow Meter $175, Anderson Ford Racing Power Pipe $250, Walbro High Pressure 255 lph fuel pump, DiabloSport Computer chip $190, and custom Dyno Tuning $400-$500. Expect about 420 HP / 460 Torque @ the wheels. Substitute a Paxton NOVI 2000 Supercharger kit (10 psi) for $3350, in place of the Vortech S Trim, and expect about 490 HP / 530 Torque @ the wheels.`,

  `A lot of customers will usually end up mixing and matching some variations of the above Stages to suit their needs and or budgets. Should your individual needs be different, GTR High Performance is able to create a custom performance combination that will suit your needs as well as your Mustangs. Feel free to contact us if you need further information.`
];

export default FiveOh;
