import React from "react";
import { Helmet } from "react-helmet";

import VideoDetail from "../../components/VideoDetail/VideoDetail";

import { VideoPageContainer } from "./VideoPage.styles";

const VideoPage = ({ location }) => {
  return (
    <VideoPageContainer>
      <Helmet>
        <title>{location.state.snippet.title} - YouTube</title>
      </Helmet>
      <VideoDetail location={location} />
    </VideoPageContainer>
  );
};

export default VideoPage;
