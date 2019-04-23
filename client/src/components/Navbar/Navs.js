import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import gtrLogo from "../../images/gtrLogo.png";
import { FaEnvelope } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import "./nav.css";

const Navs = () => {
  function handleScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <Navbar id="homeNavBar" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <LinkContainer to="/" exact={true}>
          <img src={gtrLogo} alt="Home" onClick={handleScroll} />
        </LinkContainer>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* mr-auto classname keeps nav to left */}
        <Nav className="mr-auto">
          <LinkContainer to="/about">
            <Nav.Link
              href="/about"
              className="nav-black"
              onClick={handleScroll}
            >
              About
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/customers" exact={true}>
            <Nav.Link
              href="/customers"
              className="nav-black"
              onClick={handleScroll}
            >
              Customers
            </Nav.Link>
          </LinkContainer>

          <NavDropdown
            title="Products & Services"
            id="collasible-nav-dropdown"
            className="nav-black"
          >
            <LinkContainer to="/upgrade_info" exact={true}>
              <NavDropdown.Item
                to="/upgrade_info"
                className="nav-black"
                onClick={handleScroll}
              >
                Upgrades Explained
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/upgrade_packages" exact={true}>
              <NavDropdown.Item
                href="/upgrade_packages"
                className="nav-black"
                onClick={handleScroll}
              >
                Upgrade Packages
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>

        <Nav>
          <Nav.Link className="icons" href="mailto:info@gtrhipo.com">
            <FaEnvelope />
          </Nav.Link>

          <Nav.Link
            className="wordIcons nav-black"
            href="mailto:info@gtrhipo.com"
          >
            Email
          </Nav.Link>
          <LinkContainer to={"/press"} exact={true}>
            <Nav.Link to="/press" className="nav-black" onClick={handleScroll}>
              Press
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navs;
