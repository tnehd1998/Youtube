import React from "react";
import styled from "styled-components";

const VideoItemContainer = styled.li`
  margin-left: 1rem;
`;

const VideoItemImg = styled.img`
  width: 360px;
  height: 200px;
`;

const VideoItem = ({ video, video: { snippet } }) => {
  return (
    <VideoItemContainer>
      <VideoItemImg src={snippet.thumbnails.medium.url} alt="" />
      <div>
        {/* <p>{snippet.title}</p> */}
        <p>{snippet.channelTitle}</p>
      </div>
    </VideoItemContainer>
  );
};

export default VideoItem;
