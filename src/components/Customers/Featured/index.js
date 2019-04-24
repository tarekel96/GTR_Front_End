import React from "react";
import YouTubeCom from "../YouTube/index.js";
import "./featured.css";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 2
  }
};

const Featured = () => {
  return (
    <div className="con-featured">
      <YouTubeCom
        className="video-featured"
        videoId="xbBvdiS59fc"
        opts={opts}
      />

      <main className="main-featured">
        <h3>Featured Customer</h3>
        2011 Mustang GT owned and driven by Dan Houtz. Vortech supercharged and
        intercooled, belts out a whopping 620 REAR WHEEL HORSEPOWER ON 91 OCTANE
        FUEL!! Factory stock Brembo brakes, wheels, tires make this a stallion
        around the autocross course. Dan's Mustang is a perfect example of a car
        that can compete in an autocross event and still serve as a daily
        driver, all while pulling in near stock gas mileage. Dan is fairly new
        to the autocross circuit, but he has become a regular at the local
        events. At this event, Dan managed to run a best of mid 42 second laps,
        which is very respectable for street tires. Look for him at the track
        and don't be bashful about asking him for a ride-along around the
        autocross course...that is if you can handle the ride!
      </main>
    </div>
  );
};

export default Featured;
