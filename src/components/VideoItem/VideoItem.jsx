import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoItemContainer = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 250ms ease-in;
  margin-bottom: ${(props) => (props.useType === "main" ? "1rem" : "0.5rem")};
  display: ${(props) => (props.useType === "main" ? "" : "flex")};
  width: ${(props) => (props.useType === "main" ? "" : "360px")};

  &:hover {
    transform: scale(1.02);
  }
`;

const VideoItemImg = styled.img`
  width: ${(props) => (props.useType === "main" ? "360px" : "140px")};
  height: ${(props) => (props.useType === "main" ? "200px" : "100px")};
`;

const VideoDescriptionContainer = styled.div`
  width: 300px;
  height: 100px;
  padding: ${(props) => (props.useType === "main" ? "10px 30px" : "0px 5px")};
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

const VideoItem = ({ video, video: { snippet }, useType }) => {
  return (
    <VideoItemContainer
      to={{ pathname: `/video/${video.id}`, state: video }}
      useType={useType}
    >
      <VideoItemImg src={snippet.thumbnails.medium.url} useType={useType} />
      <VideoDescriptionContainer useType={useType}>
        <VideoTitle>
          {useType === "main"
            ? snippet.title
            : snippet.title.length > 50
            ? snippet.title.slice(0, 50)
            : snippet.title}
        </VideoTitle>
        <VideoChannelName>{snippet.channelTitle}</VideoChannelName>
      </VideoDescriptionContainer>
    </VideoItemContainer>
  );
};

export default VideoItem;
