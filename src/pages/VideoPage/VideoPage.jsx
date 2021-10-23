import React from "react";

import VideoDetail from "../../components/VideoDetail/VideoDetail";

import { VideoPageContainer } from "./VideoPage.styles";

const VideoPage = ({ location }) => {
  return (
    <VideoPageContainer>
      <VideoDetail location={location} />
    </VideoPageContainer>
  );
};

export default VideoPage;
