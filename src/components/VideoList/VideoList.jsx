import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styled from "styled-components";

const VideoListContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  padding-left: ${(props) => (props.useType === "main" ? "12vw" : "12rem")};
  background-color: #f9f9f9;
`;

const VideoList = ({ videos, useType }) => {
  return (
    <VideoListContainer useType={useType}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} useType={useType} />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
