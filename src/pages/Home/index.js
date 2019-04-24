import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Shelby from "../../images/Home/RedStang.jpeg";
import GoogleMap from "../../components/GoogleMap/index.js";
import "./home.css";

class Home extends Component {
  handleScroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <main>
        <Container fluid id="home-con">
          <Row id="home-row">
            <Col
              lg="12"
              id="home-col"
              style={{
                backgroundColor: "white",
                backgroundImage: `url(${Shelby})`,
                height: "400px",
                backgroundPosition: "center",
                backgroundRepeat: "none",
                backgroundSize: "cover"
              }}
            />
          </Row>
          <Row id="home-row-two">
            <Col className="home-low-left-col" xs="12" md="8" lg="6">
              <div>
                <h2>About</h2>
                <section style={{ textAlign: "justify" }}>
                  Founded in 1997, GTR High Performance was created by two
                  long-time Mustang enthusiasts, Gonzalo & Ricardo Topete. The
                  concept was simple: to create a positive and rewarding Mustang
                  shop experience. With a courteous, professional, and
                  knowledgeable staff, GTR High Performance has emerged as one
                  of the premier Mustang performance shops in the country.
                </section>

                <Button id="home-button-learn" variant="info" href="/about">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col md="8" lg="6">
              <GoogleMap />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Home;
