import React from "react";
import styled from "styled-components";
import VideoDetail from "../../components/VideoDetail/VideoDetail";

const VideoPageContainer = styled.div`
  display: flex;
  padding-top: 6vh;
`;

const VideoPage = ({ location }) => {
  return (
    <VideoPageContainer>
      <VideoDetail location={location} />
    </VideoPageContainer>
  );
};

export default VideoPage;
