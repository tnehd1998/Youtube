import React from "react";

import {
  VideoItemContainer,
  VideoItemImg,
  VideoDescriptionContainer,
  VideoTitle,
  VideoChannelName,
} from "./VideoItem.styles";

const VideoItem = ({ video, video: { snippet }, usetype }) => {
  return (
    <VideoItemContainer
      to={{ pathname: `/video/${video.id}`, state: video }}
      usetype={usetype}
    >
      <VideoItemImg src={snippet.thumbnails.medium.url} usetype={usetype} />
      <VideoDescriptionContainer usetype={usetype}>
        <VideoTitle>
          {usetype === "main"
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
