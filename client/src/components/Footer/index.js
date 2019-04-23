import React from "react";
import { Image } from "react-bootstrap";
import { FaFacebook, FaYelp } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer-tag">
      <div>
        <h4>Contact</h4>
        <ul id="footer-contact-list">
          <li>
            <strong>Tech-Line 1: </strong> (909)-987-4386
          </li>
          <li>
            <strong>Tech Line 2: </strong> (909)-466-5993
          </li>
          <li>
            <strong>Fax:</strong> (909)-466-5981
          </li>
          <li>
            <strong>Email:</strong> info@gtrhipo.com
          </li>
          <li>
            <strong>Order Line:</strong> 1.888.HIPOGTR
          </li>
        </ul>
      </div>
      <div>
        <h4>Hours of Operation</h4>
        <ul id="footer-hours-list">
          <li>
            <strong> Mon-Fri:</strong> 9:00 a.m. - 6:30 p.m.
          </li>
          <li>
            <strong> Sat:</strong> 9:00 a.m. - 2:30 p.m.
          </li>
          <li>
            <strong> Sun:</strong> Closed
          </li>
        </ul>
      </div>
      <div>
        <h4>Location</h4>
        <p className="par-no-space">8678 Utica Ave,</p>
        <p className="par-no-space">Rancho Cucamonga,</p>
        <p className="par-no-space">CA 91730</p>
      </div>
      <div>
        <h4>Socials</h4>
        <a
          href="https://www.facebook.com/GTR-High-Performance-100816169990212/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3b5998" }}
        >
          <FaFacebook className="home-icons" />
        </a>

        <a
          href="https://www.instagram.com/explore/locations/310905761/gtr-high-performance?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="home-icons"
            src={"assets/images/Footer/instagram-logo.png"}
          />
        </a>

        <a
          href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c41200" }}
        >
          <FaYelp className="home-icons" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
