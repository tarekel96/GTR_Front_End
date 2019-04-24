import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class YelpOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!window.doBuild) {
      this.preloadWidgetScript();
    } else {
      window.doBuild();
    }
  }

  preloadWidgetScript = () => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.pinBuild = "doBuild";
    script.src = "//www.yelp.com/embed/widgets.js";
    document.body.appendChild(script);
  };

  render() {
    return (
      <Fragment>
        <Fade clear>
          <Row className="pb-3">
            <Col>
              <span
                className="yelp-review"
                data-review-id="CPZ43GwBDsLfZLaBpDPxFQ"
                data-hostname="www.yelp.com"
              >
                <a
                  href="https://www.yelp.com/user_details?userid=nQjhEXRd9n1vON50NZnOCA"
                  rel="nofollow noopener"
                >
                  Jeff H.
                </a>

                <a
                  href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=CPZ43GwBDsLfZLaBpDPxFQ"
                  rel="nofollow noopener"
                >
                  review
                </a>

                <a
                  href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                  rel="nofollow noopener"
                >
                  GTR High Performance
                </a>
                <a href="https://www.yelp.com" rel="nofollow noopener">
                  Yelp
                </a>
              </span>
            </Col>
            <Col>
              <span
                className="yelp-review"
                data-review-id="aUGiGaQinuDPaCJLMvYsrg"
                data-hostname="www.yelp.com"
              >
                <a
                  href="https://www.yelp.com/user_details?userid=L74fXuL1VrIsMTBxUO5Kgw"
                  rel="nofollow noopener"
                >
                  Jordan N.
                </a>

                <a
                  href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=aUGiGaQinuDPaCJLMvYsrg"
                  rel="nofollow noopener"
                >
                  review
                </a>
                <a
                  href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                  rel="nofollow noopener"
                >
                  GTR High Performance
                </a>
                <a href="https://www.yelp.com" rel="nofollow noopener">
                  Yelp
                </a>
              </span>
            </Col>
            <Col>
              <span
                className="yelp-review"
                data-review-id="5YjNAfoTU6bBikeKp2R1FQ"
                data-hostname="www.yelp.com"
              >
                <a
                  href="https://www.yelp.com/user_details?userid=ZuEiZqe1QFAXhK4IdA2ZcA"
                  rel="nofollow noopener"
                >
                  Robert-Francis S.
                </a>

                <a
                  href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=5YjNAfoTU6bBikeKp2R1FQ"
                  rel="nofollow noopener"
                >
                  review
                </a>
                <a
                  href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
                  rel="nofollow noopener"
                >
                  GTR High Performance
                </a>
                <a href="https://www.yelp.com" rel="nofollow noopener">
                  Yelp
                </a>
              </span>
            </Col>
          </Row>
        </Fade>
      </Fragment>
    );
  }
}

export default YelpOne;
