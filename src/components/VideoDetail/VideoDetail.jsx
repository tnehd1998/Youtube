import React, { useEffect, useState } from "react";

import Youtube from "../../service/youtube";
import VideoList from "../VideoList/VideoList";

import {
  VideoDetailContainer,
  DisplayingVideoContainer,
  DisplayingVideo,
  DisplayingVideoTitle,
  DisplayingVideoInfo,
  DisplayingVideoViewAndDate,
  DisplayingVideoSideIconContainer,
  DisplayingVideoIconItem,
  DisplayingVideoIcon,
  ChannelInfoContainer,
  ChannelInfoDescriptionContainer,
  ChannelInfoLogo,
  ChannelInfoDescription,
  ChannelInfoTitle,
  ChannelInfoSubscriber,
  ChannelInfoSubscribeButton,
  ChannelInfoSubscribeText,
  NextVideoContainer,
} from "./VideoDetail.styles";

const youtube = new Youtube("AIzaSyDjgJ5Copq4Iaslil98TRkFOaCijXHDONM");

const VideoDetail = ({ location }) => {
  const [sideVideos, setSideVideos] = useState([]);
  const { state } = location;
  const searchItem = state.snippet.channelTitle;

  useEffect(() => {
    youtube
      .search(searchItem, 8) //
      .then((videos) => setSideVideos(videos));
  }, [searchItem]);

  return (
    <VideoDetailContainer>
      <DisplayingVideoContainer>
        <DisplayingVideo
          type="text/html"
          title={`${state.snippet.title}`}
          src={`https://www.youtube.com/embed/${state.id}`}
          frameBorder="0"
          allowFullScreen
        ></DisplayingVideo>
        <DisplayingVideoTitle>{state.snippet.title}</DisplayingVideoTitle>
        <DisplayingVideoInfo>
          <DisplayingVideoViewAndDate>
            조회수 6,686,336회 • {state.snippet.publishedAt.slice(0, 4)} .{" "}
            {state.snippet.publishedAt.slice(5, 7)} .{" "}
            {state.snippet.publishedAt.slice(8, 10)}
          </DisplayingVideoViewAndDate>
          <DisplayingVideoSideIconContainer>
            <DisplayingVideoIconItem>
              <DisplayingVideoIcon className="far fa-thumbs-up"></DisplayingVideoIcon>
              3.1천
            </DisplayingVideoIconItem>
            <DisplayingVideoIconItem>
              <DisplayingVideoIcon className="far fa-thumbs-down"></DisplayingVideoIcon>
              32
            </DisplayingVideoIconItem>
            <DisplayingVideoIconItem>
              <DisplayingVideoIcon className="fas fa-share"></DisplayingVideoIcon>
              공유
            </DisplayingVideoIconItem>
            <DisplayingVideoIconItem>
              <DisplayingVideoIcon className="fas fa-download"></DisplayingVideoIcon>
              저장
            </DisplayingVideoIconItem>
            <DisplayingVideoIconItem>
              <DisplayingVideoIcon className="fas fa-ellipsis-h"></DisplayingVideoIcon>
            </DisplayingVideoIconItem>
          </DisplayingVideoSideIconContainer>
        </DisplayingVideoInfo>
        <ChannelInfoContainer>
          <ChannelInfoDescriptionContainer>
            <ChannelInfoLogo></ChannelInfoLogo>
            <ChannelInfoDescription>
              <ChannelInfoTitle>{state.snippet.channelTitle}</ChannelInfoTitle>
              <ChannelInfoSubscriber>구독자 118만명</ChannelInfoSubscriber>
            </ChannelInfoDescription>
          </ChannelInfoDescriptionContainer>
          <ChannelInfoSubscribeButton>
            <ChannelInfoSubscribeText>구독</ChannelInfoSubscribeText>
          </ChannelInfoSubscribeButton>
        </ChannelInfoContainer>
      </DisplayingVideoContainer>
      <NextVideoContainer>
        <VideoList videos={sideVideos} usetype={"side"} />
      </NextVideoContainer>
    </VideoDetailContainer>
  );
};

export default VideoDetail;
