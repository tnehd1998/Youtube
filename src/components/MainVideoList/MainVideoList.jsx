import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styled from "styled-components";

const MainVideoListContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2vh;
  padding-left: 12vw;
  background-color: #f9f9f9;
`;

const MainVideoList = ({ videos }) => {
  return (
    <MainVideoListContainer>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </MainVideoListContainer>
  );
};

export default MainVideoList;
