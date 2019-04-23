import React from "react";
import { Row, Container } from "react-bootstrap";
import "./article-t.css";

const ArticleT = ({ table }) => {
  return (
    <Container
      className="articles"
      style={{ display: table ? "" : "none", marginTop: "2rem" }}
    >
      <Row className={`justify-content-center`}>
        <a
          href="http://www.amosauto.com/Articles/Gm/Tech/get-a-grip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Get-A-Grip-sm.jpg"
            width="100"
            height="121"
            alt="getagrip"
            title="Get A Grip"
          />
        </a>

        <a
          href="assets/images/Press/BartonInd6SpeedShifter.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Barton-Industries-6-Speed.jpg"
            alt="Barton Industires Short Flow Six Speed Shifter"
            width="100"
            height="121"
            border="0"
            title="Barton Industires Short Flow Six Speed Shifter"
          />
        </a>

        <a
          href="assets/images/Press/SixSpeedTransG-Force.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Six-Speed-Transmission.jpg"
            alt="Six Speed Transmission G Force Gear Upgrades"
            width="100"
            height="122"
            border="0"
            title="Six Speed Transmission G Force Gear Upgrades"
          />
        </a>

        <a
          href="assets/images/Press/2002FordMustangGT.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/2002-Ford-Mustang-GT.jpg"
            alt="2002 Ford Mustang GT 8.8 Rearend Rebuild"
            width="100"
            height="121"
            border="0"
            title="2002 Ford Mustang GT 8.8 Rearend Rebuild"
          />
        </a>

        <a
          href="assets/images/Press/TrickFlowTwistedWedgeChamber.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/trick-flow-twisted-wedge-chamber.jpg"
            alt="Trick Flow Twisted Wedge Chamber"
            width="100"
            height="121"
            border="0"
            title="Trick Flow Twisted Wedge Chamber"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/2011FordMustangGTSteeda.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/2011-Ford-Mustang-GT.jpg"
            alt="2011 Ford Mustang GT Steeda Ultimate Induction Pak"
            width="100"
            height="121"
            border="0"
            title="2011 Ford Mustang GT Steeda Ultimate Induction Pak"
          />
        </a>

        <a
          href="assets/images/Press/Recession-Proof-Performance.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/recession-proof-performance.jpg"
            width="100"
            height="121"
            alt="Recession Proof Performance"
            title="Recession Proof Performance"
          />
        </a>

        <a
          href="assets/images/Press/2010-Mustang50Mag/GTR-Trick-Flows-Twisted-Wedge-Chamber.pdf"
          target="_new"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/TrickFlowsTwistedWedge.png"
            alt="Trick Flo's Twisted Wedge Chamber"
            width="100"
            height="135"
            border="0"
            title="Trick Flo's Twisted Wedge Chamber"
          />
        </a>

        <a
          href="assets/images/Press/CoolUnderPressure.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/CoolUnderPressure-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="132"
            border="0"
            title="Cool Under Pressure"
          />
        </a>

        <a
          href="assets/images/Press/CasualZex.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/CasualZex-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Casual Zex"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/2011-Mustang50Mag/GTR-Barton-Industries- Short-Throw-Six-Speed-Shifter.pdf"
          target="_new"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Barton-Industries-Short-Throw.png"
            alt="Barton Industries Short Throw Six Speed Shifter"
            width="100"
            height="135"
            border="0"
            title="Barton Industries Short Throw Six Speed Shifter"
          />
        </a>

        <a
          href="assets/images/Press/GimmeABoost.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/GimmeABoost-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Gimme A Boost"
          />
        </a>

        <a
          href="assets/images/Press/EasyBreathing.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/EasyBreathing-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Easy Breathing"
          />
        </a>

        <a
          href="assets/images/Press/2009-Mustang50Mag/GTR-Six-Speed-Transmission-G-Force-Gear.pdf"
          target="_new"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Six-Speed-Transmission-G-Force.png"
            alt="Six Speed Transmission G Force"
            width="100"
            height="135"
            border="0"
            title="Six Speed Transmission G Force"
          />
        </a>

        <a
          href="assets/images/Press/MustangEngineSwap.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Mustang-Engine-Swap.jpg"
            alt="Mustang Engine Swap"
            width="100"
            height="121"
            border="0"
            title="Mustang Engine Swap"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/LicenseToChill.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/LicenseToChill-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="132"
            border="0"
            title="License to Chill"
          />
        </a>

        <a
          href="assets/images/Press/LiftItQuick.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/LiftItQuick-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Lift it Quick"
          />
        </a>

        <a
          href="assets/images/Press/QuickSix.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/QuickSix-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Quick Six"
          />
        </a>

        <a
          href="assets/images/Press/Mach1MakeOver.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Mach1MakeOver-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Mach1 Makeover"
          />
        </a>

        <a
          href="assets/images/Press/2007-Mustang50Mag/GTR-Mustang-Engine-Swap.pdf"
          target="_new"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/Mustang-Engine-Swap.png"
            alt="Mustang Engine Swap"
            width="100"
            height="135"
            border="0"
            title="Mustang Engine Swap"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/ShockTherapy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/ShockTherapy-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="132"
            border="0"
            title="Shock Therapy"
          />
        </a>

        <a
          href="assets/images/Press/2011-Mustang50Mag/GTR-2002-Ford- Mustang-GT-88.pdf"
          target="_new"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/2002-Ford-Mustang-GT-88.png"
            alt="2002 Ford Mustang GT 8.8"
            width="100"
            height="135"
            border="0"
            title="2002 Ford Mustang GT 8.8"
          />
        </a>

        <a
          href="assets/images/Press/2011-Mustang50Mag/GTR-2011-Ford-Mustang-GT-Steeda.pdf"
          target="_new"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/2011-Ford-Mustang-GT-Steeda.png"
            alt="2011 Ford Mustang GT Steeda"
            width="100"
            height="135"
            border="0"
            title="2011 Ford Mustang GT Steeda"
          />
        </a>

        <a
          href="assets/images/Press/StraightShooter.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/StraightShooter-1.jpg"
            alt="Straight Shooter"
            title="Straight Shooter"
            width="100"
            height="135"
            border="0"
          />
        </a>

        <a
          href="assets/images/Press/SittinPretty.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/SittinPretty-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Sittin Pretty"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/TurboneticsArticle.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/TurboneticsArticle-1.jpg"
            width="100"
            height="135"
            alt="GTR-Turbonetics"
            title="GTR-Turbonetics"
          />
        </a>

        <a
          href="assets/images/Press/UnderdrivingOverachiever.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/UnderdrivingOverachiever-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Underdriving Overachiever"
          />
        </a>

        <a
          href="assets/images/Press/RaisingTheBar.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/RaisingTheBar-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Raising The Bar"
          />
        </a>

        <a
          href="assets/images/Press/AShiftForTheBetter.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/AShiftForTheBetter-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="A Shift for the Better"
          />
        </a>

        <a
          href="assets/images/Press/TheMissingLink.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/TheMissingLink-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="The Missing Link"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/C&amp;L-TrueflowFirstLook.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/C&amp;L-TrueflowFirstLook-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="True Flow First Look"
          />
        </a>

        <a
          href="assets/images/Press/BlowingThe5oh.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/BlowingThe5oh-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Blowing the 5.0"
          />
        </a>

        <a
          href="assets/images/Press/BaerEssentials.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/BaerEssentials-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="132"
            border="0"
            title="Baer Essentials"
          />
        </a>

        <a
          href="assets/images/Press/UnderPressure-Camaro.pdf"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/UnderPressure-Camaro-1.jpg"
            width="100"
            height="135"
            alt="gtr-camaro-clutch-article"
            title="GTR Camaro Clutch article"
          />
        </a>

        <a
          href="assets/images/Press/UpgradedRoadHandling.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/UpgradedRoadHandling-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="132"
            border="0"
            title="Upgraded Road Handling"
          />
        </a>
      </Row>
      <Row className="justify-content-center">
        <a
          href="assets/images/Press/BlownAway.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/BlownAway-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="Blown Away"
          />
        </a>

        <a
          href="assets/images/Press/XMarksTheSpot.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/Press/XMarksTheSpot-1.jpg"
            alt="GTR-in-press"
            width="100"
            height="135"
            border="0"
            title="X Marks the Spot"
          />
        </a>
      </Row>
    </Container>
  );
};

export default ArticleT;
