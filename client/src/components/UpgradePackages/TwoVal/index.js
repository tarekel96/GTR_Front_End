import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";

class TwoVal extends Component {
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
          className="package-image"
          src="assets/images/UpgradePackages/2VGTButton.png"
          onClick={this.handleShow}
        />

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>
              <strong>GTR 1999-2004 4.6 2 Valve Power Packs</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>{twoValData[0]}</p>
              <p>{twoValData[1]}</p>
              <p>
                <strong>STAGE I:</strong>
                {twoValData[2]}
              </p>
              <p>{twoValData[3]}</p>
              <p>
                <strong>STAGE II:</strong>
                {twoValData[4]}
              </p>
              <p>
                <strong>STAGE III:</strong>
                {twoValData[5]}
              </p>
              <p>
                <strong>STAGE IV:</strong>
                {twoValData[6]}
              </p>
              <p>{twoValData[7]}</p>
              <p>{twoValData[8]}</p>
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

const twoValData = [
  `This is one of the more popular Mustang platforms to build upon simply due to the GT's relative affordability. These cars have respectable performance in stock form and respond quite well to basic modifications or bolt-ons. All 99-04 GTs are rated at 260 HP from the factory. For our purposes, we will use Rear Wheel Horsepower figures for consistency. All of the data below is verified on our in-house DynoJet chassis dyno. These figures are all "real-world" numbers and are 5 speed manual transmissions and 91 octane (pump-gas) is used. Those Mustangs with automatic transmissions and lower octane fuels, will generally produce slightly lower numbers. As a result, these are indicative of what the average Mustang enthusiast can expect out of their Mustang GT.`,

  `On average, 99-04 Mustang GTs will put down 225 rear wheel HP. 
  Following the proven "horsepower combination recipe" below, you will be able to increase output significantly.`,

  ` C&L Cold Air Induction kit (+ 7HP) $135, BBK 75mm Throttle 
  Body (+4 HP) $199, C&L Intake Plenum (+9HP) $165, STEEDA Power Pulleys (+9HP) $189, Bassani Catalytic X Pipe (+7HP) $389, MagnaFlow Cat Back muffler system (+5HP) $425, DiabloSport Predator Tuner (+10HP) $350.`,
  `These are the most common bolt on modifications that most enthusiasts will start with. This will provide an excellent foundation to build upon and provide noticeable performance improvements. Expect around 260 Rear Wheel HP with Stage I.`,

  ` This picks up where stage I left off. All of the above items can continue to be used and will compliment Stage II nicely. With Stage II, we add Competition Cams custom camshafts ($599) and bump the output out up to approximately 290 rear wheel HP.`,

  ` Continues with the naturally aspirated approach (no power 
        adder) and adds custom fully ported and polished 99-04 GT cylinder heads with upgraded valves, valve springs and valve train. This really finishes off the 4.6 SOHC motor and bumps the power output to 310 rear wheel HP.`,

  ` Here is where it becomes really exciting as we begin to add superchargers to the mix. Naturally, power goes up a bunch, but also involves larger expenses. (Nobody ever said this was going to be super-cheap). One of the most proven, reliable and popular supercharger kits for the 2V GT is Vortech's venerable S-Trim supercharger kit. At a modest 8 psi boost, it will add tremendous punch to the GT. Keep in mind that the Vortech kit can be used with any of the above levels Stage I--III. Assuming, we add the Vortech to the Stage I kit, power will rise to approximately 360 rear wheel HP. With the Stage II kit, it continues to climb to about 390 rear wheel HP. Finally, mixing the Vortech with the Stage III kit, will yield around 410 rear wheel HP. For the more power hungry, bumping the boost up to 10 psi will obviously render bigger gains.`,

  `As an alternative, we also offer the Paxton NOVI 2000 supercharger kit, which is arguably the most capable centrifugal supercharger kit available. With the use of the NOVI 2000, Paxton also offers their massive air-to-air intercooler for maximum performance and safety. At 10 psi intercooled boost, the NOVI 2000 will generate approximately 450 rear wheel HP with a Stage II. Step it up to a Stage II combination and bump up the boost to 13 psi and you will crack the 500 rear wheel HP barrier.`,
  `On a side note, keep in mind that any of the above items and combinations can be mixed and matched to suit your driving needs. Contact GTR for a custom combination to that fits your performance goals and works within your budget. All owners of 96-98 Mustang GT 2V can also use the above items or very similar combinations. However, due to the superior performance capabilities of the 99-04 Mustangs, the results for the 96-98s will be slightly lower.`
];

export default TwoVal;
