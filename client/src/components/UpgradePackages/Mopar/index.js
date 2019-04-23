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
          src="assets/images/UpgradePackages/MoparButton.png"
          className="package-image"
          onClick={this.handleShow}
        />

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>
              <strong>
                GTR MOPAR Power Packs for Chargers, Challengers and 300C
              </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>
                Dodge and Chrysler have created some of the coolest looking cars
                on the road today. The very versatile "LX" platform, which
                serves the Challenger, Charger, 300C and Magnum cars, offers
                aggressive styling, roomy interiors and a sporty ride. Which
                motor you select under the hood determines the personality your
                MOPAR will have.
              </p>
              <p>
                You can either have a sporty, fuel efficient "Pony car" which
                offers a nice blend of practicality and fun with a V6. Opt for
                the venerable and popular HEMI 5.7L V8 and you get some punch
                under the hood that can go toe-to-toe with Ford's and Chevy's
                finest. Select the SRT-8 HEMI 6.1L motor and you have some
                serious firepower under the hood! The SRT cars are the wildest,
                fastest cars from the MOPAR camp. Not only do they have more
                power, but also re-tuned suspension, larger brakes and more
                aggressive styling. Money- no- object, the SRT cars are the ones
                to get if you want to run with the big-boys!
              </p>
              <p>
                <strong>
                  GTR Power Pack for V6 Charger, Challenger, 300C and Magnum
                </strong>
              </p>
              <p>
                Chrysler has equipped the base LX cars with two different V6
                engines, a 2.7L and a 3.5L. Most enthusiasts that own a V6 Mopar
                opt for the gutsier 3.5L as it offers more potential. Rated at
                250 horsepower (at the crank), we have dyno tested them on our
                in-house DynoJet and find they they put down in the range of 195
                Rear Wheel Horsepower and 220 lb./ft. Torque at the rear wheels.
                Not too bad for an economy car, but there is still room for
                improvement. Follow the below recipe to give your V6-powered
                Mopar more punch:
              </p>
              <p>
                <strong>STAGE I: </strong>
                This begins with very basic bolt-on upgrades that will give
                immediate and proven results. For starters, let the motor
                breathe with a K&N Cold Air induction kit $330 (+11 HP). Next,
                get the addiditonal air out via a Magnaflow Cat Back exhaust
                sytem. Magnaflow makes a performance exhaust that follows the
                stock routing in a "single" exhaust configuration. For those
                seeking a more aggressive sound, look and a bit more power,
                Magnaflow also offers a dual exhaust conversion to give you the
                look of a V8 with dual exhaust pipes. If you are looking to
                maximize your exhaust sytem even more, JBA manufactures "Shorty"
                headers (from $370) for these cars that will give you more power
                and torque and deepen up the exhaust note even more! Lastly,
                finish it all off with a Diablo Predator computer tuner for
                $310. The Predator tuner will ensure that your car's computer is
                fully optimized for the performance modifications and will help
                you get every last HP from your V6 Mopar.
              </p>
              <p>
                <strong>
                  GTR Power Packs for HEMI 5.L Charger, Challenger, 300C and
                  Magnum
                </strong>
              </p>
              <p>
                The storied HEMI blends old-school cubic inches with modern
                technology to push out 340 horsepower and 390 Torque. A revised
                5.7L motor in 2009 upped that figure to 368 HP and 395 Torque.
                The actual power these motors put down to the rear wheels vary a
                bit depending on what car the motor is installed in and whether
                that car is equipped with an automatic or manual transmission.
                Dyno testing numerous cars in different configurations
                consistenly shows that the 2005-2008 Hemi cars put down around
                285 RWHP and 320 RWTQ, while the revised 2009 and newer cars
                crank out 330 RWHP and 360 RWTQ. Mighty impressive as this
                provides more than enough grunt to get you in trouble and shock
                the pesky neighborhood Mustang or Camaro! Huge power gains are
                possible by following our proven packages:{" "}
              </p>
              <p>
                We have dyno tested and proven the above combination countless
                times on Hemi cars. Here are some examples:{" "}
              </p>
              <p>
                2006 Magnum auto trans with Bassani Cat Back, X Pipe and C&L
                Cold Air Induction 306 RWHP and 348 RWTQ.
              </p>
              <p>
                2009 Charger auto trans with SLP Cat Back, X Pipe, SLP Cold Air
                kit, and Diablo Predator custom dyno tuned 356 RWHP and 400 RWTQ
              </p>
              <p>
                <strong>Stage II: </strong>
                Time to get serious. We use a Vortech Aftercooled/Intercooled
                Supercharger to elevate the 5.7L motor's output by a whopping 80
                RWHP and 100 RWTQ! This will transform your 5.7L into an SRT-8
                crusher and will blow away the competition. With Complete,
                read-to-install kits starting at $4999, Vortech offers maximum
                muscle for minimal cash-outlay.
              </p>
              <p>
                <strong>
                  GTR Power Packs for SRT8 Charger, Challenger, 300C and Magnum{" "}
                </strong>
              </p>
              <p>
                The SRT8 is Mopar's top-dog as it offers brute strength to get
                the job done. Rated at 425 horsepower and 420 torque at the
                crank, we consistently see these cars churn out 350 RWHP and 350
                RWTQ on our DynoJet chassis dyno. The monstrous 6.1L motor is
                very similar to its smaller brother the 5.7L and as such, reacts
                very well to the same modifications and in some cases even
                better due to the increased displacement. You will notice that
                the horsepower formula for the 6.1L SRT8 is nearly identical.
              </p>
              <p>
                <strong>Stage I:</strong>
                We keep it simple here. The 6.1L responds very well the basic
                bolt-ons, which provide significant power gains, are affordable
                and easy to install. Start with the C&L Cold Air Induction kit
                $285 (+18 HP), followed by a Diablosport Predator computer tuner
                $309 (+20 HP and +20 TQ). Make the motor more efficient by
                allowing it to free up some power with SLP's Power Pulley $219
                (+9 HP and +10 TQ). Let the motor exhale via an SLP Cat back and
                X Pipe system from $650 (+12 HP and +15 TQ) and compliment that
                with JBA Shorty Headers from $395 (+14 HP and +10 TQ). All of
                these modifications can be installed by mechanically inclined
                do-it-yourselfers, otherwise GTR offers professional
                installation.
              </p>
              <p>
                We have dyno tested and proven the above combination countless
                times on SRT8 cars. Here are some examples:{" "}
              </p>
              <p>
                2009 Challenger SRT8 6 speed manual transmission with C&L Cold
                air kit and SLP cat back and X Pipe 390 RWHP and 380 RWTQ.
              </p>
              <p>
                <strong>Stage II: </strong> Turn it up with a Vortech
                Aftercooled/Intercooled 8 psi supercharged system. Vortech's
                proven centrifugal supercharger will provide a top-end rush than
                can only be duplicated by a giant sling-shot! Complete Vortech
                supercharger kits starting at $4275 for the SRT8. With massive
                gains of upto 135 HP and 95 lb/ft of Torque, Vortech will keep
                you ahead of the competition. Here is an example of an SRT8 cars
                we have built:
              </p>
              <p>
                2008 Challenger SRT8 6 speed manual transmission with Vortech
                Aftercooled 8 psi system 490 RWHP and 450 RWTQ. All else 100%
                stock!! Later we installed a Magnaflow Cat Back and X Pipe on
                this same car and it bumped output to 512 RWHP and 458 RWTQ!!
                This is the easiest and most cost effective way to break the 500
                RWHP mark while doing it safely and legally as the Vortech
                supercharger kit is 100% smog legal. Crazy power and legit?!
                Gotta love it.
              </p>
              <p>
                <strong>Stage III: </strong>If there is no such thing as too
                much power for you, then the Kenne Bell 2.8L Intercooled
                Supercharger kit is right for you. The industry leader in
                positive-displacement superchargers, Kenne Bell's twin-screw
                superchargers provide massive power and torque gains from a very
                low rpm range all the way to redline. Providing instant boost
                will pin you in the seat until you let off the throttle.
                Complete KB supercharger kits start at $6859. Kenne Bell's 2.8L
                kit provides 175 HP and 135 TQ gains. Here is an example of a KB
                equipped car's we have built:
              </p>
              <p>
                2008 Challenger SRT8 6 speed manual transmission with Kenne Bell
                2.8L 8 psi Intercooled system 514 RWHP and 470 RWTQ. Shortly
                afterwards, we installed an SLP Cat Back and X Pipe and power
                output soared to 540 RWHP and 490 RWTQ! That's enough to power a
                small city!! Oh, and all this was accomplished with no other
                modifications, using 91-octane fuel and keeping the car 100%
                smog legal. Ready to hunt-down some Corvette ZR-1s?
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

export default ThreeVal;
