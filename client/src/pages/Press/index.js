import React, { Component, Fragment } from "react";
// import PaginCom from "../../components/Press/PaginCom/index.js";
import ArticleT from "../../components/Press/ArticleT/index.js";
import YouTubeCom from "../../components/Customers/YouTube/index.js";
import SideArticles from "../../components/Press/SideArticles/index.js";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: false,
      showList: false
    };
  }

  togglerArticles = () => {
    this.setState(prevState => ({
      table: !prevState.table
    }));
  };

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 2
      }
    };
    return (
      <Fragment>
        <Fade clear>
          <h3 className="text-center p-3">
            {" "}
            GTR High Performance in the Press
          </h3>

          <div className="d-flex justify-content-center mb-4">
            <YouTubeCom videoId={"OSJpSXdeWMs"} opts={opts} />
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "-1rem"
            }}
          >
            Vortech Track Day Featuring GTR High Performance
          </p>
          <hr className="w-75" />
          <Fade clear>
            <h4 className="text-center">Articles featuring GTR</h4>
            <SideArticles list={articles} showList={this.state.showList} />
          </Fade>
          <Button
            className="mx-auto mb-4 d-flex"
            onClick={this.togglerArticles}
          >
            Preview Articles
          </Button>
        </Fade>
        <ArticleT table={this.state.table} />
      </Fragment>
    );
  }
}

const articles = [
  {
    hash: "https://www.youtube.com/watch?v=9oVsKMVmuCg",
    id: "Dan Garage",
    title: "GTR guest appearance on Dan's Garage Episode 4"
  },
  {
    hash:
      "http://www.mustang50magazine.com/eventcoverage/1311_big_stang_stampede_at_gtr_high_performance/",
    id: "Stang Stampede",
    title:
      "The Big 'Stang Stampede at GTR High Performance - carshow review by KJ Jones of 5.0 Mustang Magazine"
  },
  {
    hash:
      "http://blogs.mustang50magazine.com/6349756/miscellaneous/gtr-hosts-mustangs-and-enthusiasts-at-its-annual-show-and-dyno-day/index.html",
    id: "KJ Jones 5.0",
    title:
      "KJ Jones from 5.0 Super Fords blog on the 2008 GTR Customer Appreciation Day."
  },
  {
    hash:
      "http://blogs.mustang50magazine.com/6421680/mustang-tech-articles/these-parts-prove-it-doesnt-take-a-lot-to-hop-up-a-stock-stang/index.html",
    id: "KJ Jones Bonanza",
    title: "KJ Jones Bolt on Bonanza"
  },
  {
    hash:
      "http://www.mustang50magazine.com/techarticles/m5lp_0610w_v6_mustang_bolt_on_test/index.html",
    id: "Super Fords V6",
    title: "S197 V6 Bolt-On Test in 5.0 Super Fords"
  },
  {
    hash:
      "http://www.mustang50magazine.com/techarticles/m5lp_0703_s197_mustang_bolt_ons/index.html",
    id: "Super Fords 5.0",
    title: "S197 GT Bolt-On Test in 5.0 Super Fords"
  },
  {
    hash:
      "http://www.mustang50magazine.com/techarticles/m5lp_0902_s197_mustang_side_mirrors/index.html",
    id: "Super Fords Side Mirror",
    title: " S197 Mustang Side Mirror Upgrade in 5.0 Super Fords"
  },
  {
    hash:
      "http://www.mustang50magazine.com/techarticles/m5lp_0710_fox_turbo_upgrade/index.html",
    id: "Super Fords Turbo System",
    title: " HP Turbo System on Fox Body in 5.0 &amp; Super Fords"
  },
  {
    hash:
      "http://www.mustang50magazine.com/techarticles/m5lp_0710_fox_mustang_5_lug_swap/index.html",
    id: "Super Fords Fox Body",
    title: "Five-lug upgrade on Fox Body in 5.0 &amp; Super Fords"
  },
  {
    hash:
      "http://www.mustang50magazine.com/techarticles/m5lp_0701_acts_clutch_kit/index.html",
    id: "Super Fords Fox Body 5.0 Swap",
    title: "Fox Body Clutch Swap in 5.0 Super Fords"
  },
  {
    hash:
      "http://blogs.mustang50magazine.com/6441094/mustang-tech-articles/new-meaning-for-the-phrase-take-it-all-off/index.html",
    id: "Super Fords Strip Club",
    title: '5.0 Super Fords "Strip Club" Article'
  },
  {
    hash:
      "http://50mustangsuperfords.automotive.com/85768/m5lp-0810-mustang-gauge-installation/index.html",
    id: "Super Fords Guage",
    title: "5.0 Super Fords Gauge Installation Article"
  }
];

export default Press;
