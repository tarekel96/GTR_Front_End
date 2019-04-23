import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";

class ThreeVal extends Component {
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
          src="assets/images/UpgradePackages/3VGTButton.png"
          className="package-image"
          onClick={this.handleShow}
        />

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>
              <strong>GTR 2005-2009 3 Valve Power Packs</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>{threeValData[0]}</p>
              <p>
                <strong>STAGE I:</strong>
                {threeValData[1]}
              </p>
              <p>
                <strong>STAGE II:</strong>
                {threeValData[2]}
              </p>
              <p>
                <strong>STAGE III:</strong>
                {threeValData[3]}
              </p>
              <p>
                <strong>STAGE IV:</strong>
                {threeValData[4]}
              </p>
              <p>
                <strong>STAGE V:</strong>
                {threeValData[5]}
              </p>
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

const threeValData = [
  `The S197 Mustang platform has quickly become one of the more popular Mustangs to hop-up. No mystery as it is plentiful, affordable and responds very well to cost-effective bolt-ons and more! Rated at 300 HP at the crank, we feel it to be slightly under-rated, since we normally see 265 rear wheel HP on our dyno. With classic styling and nice blend of performance and comfort, the 3 valve GT's are among our favorite project Mustangs! Follow some of the below guidelines to turn your pony into a stallion!`,

  ` C&L Cold Air Induction kit with Diablosport Predator tuner (+25 HP) $615, Steeda Power Pulleys (+10HP) $190, Bassani X-Pipe (+10HP) $250. As easy as 1, 2, 3 you are well over the 300 rear wheel HP hump. Expect around 305-310 at the rear tires.`,

  ` Keep it simple. BBK Throttle body, Coast Aluminum driveshaft, and JBA Shorty Headers will get you to near 325 rear wheel ponies.`,

  ` Supercharger time!!! We have many to choose from. Starting with basic, cost-effective, non-intercooled superchargers, we carry Vortech S Trim, Paxton NOVI 1200 and Kenne Bell non-intercooled kit. All of these will crank out around 8 psi boost. These systems will be good to take a GT with basic bolt ons to near 400 rear wheel HP.`,

  ` Keep it cool. Now we intercool any of the above superchargers and turn up the boost a bit. With approximately 10-11 psi boost, any of the above blowers will belt out around 430-450 rear wheel HP all on 91 octane pump fuel. Want more? Crank up the boost by changing to a smaller supercharger pulley, add race fuel and custom dyno tuning and approach 500 rear wheel HP. However, this is not recommended with stock internal engine parts, as they will not tolerate such elevated HP levels. For safety's sake we suggest staying at or below 450 with the stock internals, otherwise you WILL break something before too long.`,

  ` Again, bigger is better. For the really power hungry, we offer Kenne Bell's 2.8L supercharger. Now you can easily hit 575 rear wheel HP on 91 octane pump gas! More?! Swap the pulley out, crank up the boost, add race fuel and crank up the power to 650 rear wheel HP!!! Almost scary isn't it? Almost.`,

  `Time to build the motor from the inside-out. Now we get serious and change all the internals with forged pistons, crankshaft, connecting rods, etc...Add ported and polished cylinder heads, custom Competition Cams camshafts, JBA Long Tube headers, more boost with a supercharger, race fuel, and custom dyno tuning and 650 rear wheel HP will become a reality. Trust us, this is one killer combo that makes for a very wild ride! Contact GTR for help in selecting a combination that is right for you and your Mustang.`
];

export default ThreeVal;
