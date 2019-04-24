import React from "react";
import YouTube from "react-youtube";

class YouTubeCom extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    // "2g811Eo7K8U"
    event.target.pauseVideo();
  }
  render() {
    //     const opts = {
    //       height: "390",
    //       width: "640",
    //       playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 2
    //       }
    //     };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={this.props.opts}
        onReady={this._onReady}
      />
    );
  }
}

export default YouTubeCom;
