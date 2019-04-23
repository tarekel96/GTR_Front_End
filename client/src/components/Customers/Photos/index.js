import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Col } from "react-bootstrap";
import "./photos.css";

class Photos extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Container>
        <Col className="mx-auto" lg={8}>
          <Carousel
            id="carousel-container"
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/2007-customer-day.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/2007GTRShowGallery/index.htm"
                  rel="noopener noreferrer"
                >
                  2007 GTR Customer Appreciation Day
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/ford-gt.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="pt-3">
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/2008GTRShowGallery/index.htm"
                  rel="noopener noreferrer"
                >
                  2008 GTR Customer Appreciation Day
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/2008-sema-day.jpg"
                alt="Third slide"
                rel="noopener noreferrer"
              />

              <Carousel.Caption>
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/2008%20SEMA%20Gallery/index.htm"
                  rel="noopener noreferrer"
                >
                  2008 SEMA Gallery
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/2009-fab-fords.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/2009-Knotts-Gallery/GTR-Knotts-Gallery/index.html"
                  rel="noopener noreferrer"
                >
                  2009 Fabulous Fords Forever
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/van-nic-photo.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/VanessaNicoleKenneBell/index.htm"
                  rel="noopener noreferrer"
                >
                  Vanessa, Nicole and a GT 500 Super Snake
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/gtr-work.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/VanessaNicoleKenneBell/index.htm"
                  rel="noopener noreferrer"
                >
                  GTR at work
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                className="d-block w-100"
                src="assets/images/Customers/misc-customer.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <a
                  target="_blank"
                  href="http://www.gtrhipo.com/Links/Misc%20Customer%20Rides/index.htm"
                  rel="noopener noreferrer"
                >
                  Misc Customer Photos
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Container>
    );
  }
}

export default Photos;
