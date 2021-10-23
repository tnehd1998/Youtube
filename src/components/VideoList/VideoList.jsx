import React from "react";

import VideoItem from "../VideoItem/VideoItem";

import { VideoListContainer } from "./VideoList.styles";

const VideoList = ({ videos, usetype }) => {
  return (
    <VideoListContainer usetype={usetype}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} usetype={usetype} />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
