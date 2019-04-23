import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";

class FourVal extends Component {
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
          src="assets/images/UpgradePackages/4V46Button.png"
          className="package-image"
          onClick={this.handleShow}
        />

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>
              <strong>
                GTR 1999-2001 & 2003-2004 (Terminator) 4 Valve Power Packs
              </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h3>GTR 1999-2001 4 Valve Power Packs</h3>
              <p>{cobraData[0]}</p>
              <p>
                <strong>STAGE I:</strong>
                {cobraData[1]}
              </p>
              <p>
                <strong>STAGE II:</strong>
                {cobraData[2]}
              </p>
              <p>
                <strong>STAGE III:</strong>
                {cobraData[3]}
              </p>
              <p>{cobraData[4]}</p>
            </div>
            <div>
              <h3>GTR 2003-2004 (Terminator) 4 Valve Power Packs</h3>
              <p>{terminatorData[0]}</p>
              <p>
                <strong>STAGE I:</strong>
                {terminatorData[1]}
              </p>
              <p>
                <strong>STAGE II:</strong>
                {terminatorData[2]}
              </p>
              <p>
                <strong>STAGE III:</strong>
                {terminatorData[3]}
              </p>
              <p>
                <strong>STAGE IV:</strong>
                {terminatorData[4]}
              </p>
              <p>
                <strong>STAGE V:</strong>
                {terminatorData[5]}
              </p>
              <p>{terminatorData[6]}</p>
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

const cobraData = [
  `Both the 99-01 Cobra and 03-04 MACH I Mustangs share a 4.6 32 valve, DOHC motor that is virtually identical. Minor differences aside, they both accept the same modifications and respond equally well to them. Due to the inherent ability of the 32 valve motor to move tremendous amounts of air and rev well past 6000 rpm, they have great potential. In stock form, they offer respectable output at 320 horsepower at the crank. Typically, we see around 270 rear wheel HP on our chassis dyno. Below are some proven items that will reward your Cobra or MACH I with more power.`,
  ` C&L Cold Air Induction kit (+5HP) $135, STEEDA Power Pulleys (+10HP) $189, JBA Shorty Headers (+10 HP), Magnaflow Cat Back Exhaust system (+8HP), Diablo Predator Tuner (+10HP). These basic, but effective bolt-ons will yield approximately 310 rear wheel HP.`,

  ` Now we start going into the motor of the 4 valves. To the stage I, we add ported and polished cylinder heads and Competition Cams camshafts, along with custom dyno-tuning with Diablosport software. This will get you in the neighborhood of 360 rear wheel HP.`,

  ` Supercharger time! We have many different types of supercharger kits for the venerable 4 valvers. Starting with the simpler and more cost-effective non-intercooled centrifugal supercharger kits, we offer the Paxton NOVI 1000 8 psi Supercharger kit. With a couple of minor bolt-ons from the Stage I, this will crank out 425 rear wheel horsepower. Want more boost? Gotta have an intercooler. For this, we have the proven Vortech S Trim Aftercooled 10 psi supercharger system that will get you over the 450 rear wheel horsepower mark. If you are looking into a positive displacement blower, Kenne Bell Twin Screw superchargers are the only way to go. The Kenne Bell intercooled 8 psi kit will pump out 460 rear wheel HP without breaking a sweat. Still not satisfied? Swap the pulley on the Kenne Bell to push 14 psi and the rear wheel HP will swell to near 520.

  Clearly you can see that the 4 valve Cobras and Machs respond well to superchargers. Again, this goes back to their ability to flow huge volumes of air. A supercharger simply compliments this motor nicely. We did not cover 96-98 Cobras here, however, all of the above modifications are also available for those years. Granted, the output will be slightly lower due to their older cylinder head and intake manifold designs. Call GTR for your specific needs to really bring out the potential of your 4 Valve Monster!`
];

const terminatorData = [
  `This is one bad-mutha of a Mustang to build a performance platform on. Quite arguably, pound-per-pound, the hardest-hitting Mustang out there. Factory equipped with an Eaton positive displacement supercharger, the Terminator is factory rated at 390 HP at the crank. We regularly see 365 rear wheel HP on our chassis dyno out of 100% stock Cobras! That means, this car is grossly UNDER-RATED from Ford! Below are some of the best bang-for-the-buck upgrades to really crank this up.`,

  ` C&L Cold Air Kit (+20HP) $135, Steeda 2.8" Supercharger pulley (+6 psi boost) $80, Steeda supercharger belt tensioner $130, NGK TR-6 Spark Plugs $30, Shorter Supercharger belt $45, Diablo Predator Tuner $350, and custom dyno-tuned. This simple, short list will push you into the 440 rear wheel HP range, while still running on 91-octane pump gas.`,

  ` Goes a bit further with a Fluidyne large capacity Heat Exchanger (intercooler) $330, Magnaflow Cat Back exhaust system (+10HP), Accufab single-blade throttle body and supercharger inlet plenum. Now you are looking at the 460 rear wheel HP range.`,

  ` Not enough? Only way to safely get more power out of the stock supercharger is to have it ported and polished. This will create more boost (+2-3 psi boost) and allow you to reach 500 rear wheel HP...all on pump gas! Any more than this and you will need further modifications.`,

  ` Bigger is better. Here we ditch the stock supercharger in favor of Kenne Bell's 2.6L unit. With moderate boost pressure, 530 rear wheel HP is a breeze. Swap the pulley out, pour in some race fuel and 580 rear wheel HP is a quick dyno tune away.`,

  ` Again, bigger is better. For the really power hungry, we offer Kenne Bell's 2.8L supercharger. Now you can easily hit 575 rear wheel HP on 91 octane pump gas! More?! Swap the pulley out, crank up the boost, add race fuel and crank up the power to 650 rear wheel HP!!! Almost scary isn't it? Almost.`,

  `The 03-04 Terminator is a true beast and with some well chosen modifications and guidance from GTR, we can help you be top-dog in your town!`
];

export default FourVal;
