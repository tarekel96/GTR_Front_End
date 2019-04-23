import React from "react";
import YouTubeCom from "../YouTube/index.js";
import Carousel from "react-bootstrap/Carousel";
import { Container, Col } from "react-bootstrap";

class Videos extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 2
      }
    };

    return (
      <Container>
        <Col className="mx-auto" lg={8}>
          <Carousel className="text-center" interval={false}>
            {videosInfo.map(video => (
              <Carousel.Item key={video.key}>
                <YouTubeCom videoId={video.videoId} opts={opts} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Container>
    );
  }
}
const videosInfo = [
  {
    key: "Super-Bee",
    videoId: "-NmiW3R-ebs"
  },
  {
    key: "2010-Vortech",
    videoId: "9lDsAcREYeg"
  },
  {
    key: "Jba-ss",
    videoId: "mMuJYTk6ESM"
  },
  {
    key: "kenne-bell-srt",
    videoId: "x68UQeR4b7w"
  },
  {
    key: "Nov-2011-contest",
    videoId: "YO0JwoAUHPo"
  },
  {
    key: "2010-Cam-Vortech",
    videoId: "bA7VmG4R6gQ"
  },
  {
    key: "2010-Vortech-Pt-1",
    videoId: "Iu7hh-0pKSw"
  },
  {
    key: "2000-Paxton-mustang",
    videoId: "9WbC5M-1x44"
  },
  {
    key: "Tahoo-Twin-Screw",
    videoId: "xieQLDnk1js"
  },
  {
    key: "Eli-2000-GT",
    videoId: "s9qzpeRaB2U"
  }
];

export default Videos;
