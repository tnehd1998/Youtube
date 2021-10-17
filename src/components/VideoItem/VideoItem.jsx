import React from "react";
import styled from "styled-components";

const VideoItemContainer = styled.li`
  margin-left: 1rem;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 250ms ease-in;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.02);
  }
`;

const VideoItemImg = styled.img`
  width: 360px;
  height: 200px;
`;

const VideoDescriptionContainer = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const VideoChannelName = styled.p`
  font-size: 0.8rem;
  color: #787677;
`;

const VideoItem = ({ video, video: { snippet } }) => {
  return (
    <VideoItemContainer>
      <VideoItemImg src={snippet.thumbnails.medium.url} alt="" />
      <VideoDescriptionContainer>
        <VideoTitle>{snippet.title}</VideoTitle>
        <VideoChannelName>{snippet.channelTitle}</VideoChannelName>
      </VideoDescriptionContainer>
    </VideoItemContainer>
  );
};

export default VideoItem;
