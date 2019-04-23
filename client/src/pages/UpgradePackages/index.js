import React from "react";
import { Container } from "react-bootstrap";
import FiveOh from "../../components/UpgradePackages/FiveOh/index.js";
import FourVal from "../../components/UpgradePackages/FourVal/index.js";
import VSix from "../../components/UpgradePackages/VSix/index.js";
import ThreeVal from "../../components/UpgradePackages/ThreeVal/index.js";
import TwoVal from "../../components/UpgradePackages/TwoVal/index.js";
import Mopar from "../../components/UpgradePackages/Mopar/index.js";
import Fade from "react-reveal/Fade";
import "./upgrade-packages.css";

const UpgradePackages = () => {
  return (
    <Container id="packages-container">
      <Fade clear>
        <FiveOh className="package-five-oh" />
        <FourVal className="package-four-val" />
        <VSix className="package-v6" />
        <ThreeVal className="package-three-val" />
        <TwoVal className="package-two-val" />
        <Mopar className="package-mopar" />
      </Fade>
    </Container>
  );
};

export default UpgradePackages;
