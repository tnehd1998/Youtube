import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Youtube from "../../service/youtube";
import VideoList from "../VideoList/VideoList";

const youtube = new Youtube("AIzaSyDjgJ5Copq4Iaslil98TRkFOaCijXHDONM");

const VideoDetailContainer = styled.div`
  width: 100vw;
  padding: 0 5vw;
  display: flex;
  background-color: #f9f9f9;
`;

const DisplayingVideoContainer = styled.div`
  width: 67vw;
  padding-top: 1.5rem;
`;

const DisplayingVideo = styled.iframe`
  width: 67vw;
  height: 74vh;
`;

const DisplayingVideoTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1.2rem;
`;

const DisplayingVideoInfo = styled.div`
  padding: 1.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

const DisplayingVideoViewAndDate = styled.p`
  font-size: 0.8rem;
  color: #787677;
`;

const DisplayingVideoSideIconContainer = styled.div`
  display: flex;
`;

const DisplayingVideoIconItem = styled.p`
  margin-left: 1.2rem;
`;

const DisplayingVideoIcon = styled.i`
  margin-right: 0.5rem;
`;

const NextVideoContainer = styled.div`
  width: 10vw;
`;

const VideoDetail = ({ location }) => {
  const [sideVideos, setSideVideos] = useState([]);
  const { state } = location;
  console.log(state);
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
      </DisplayingVideoContainer>
      <NextVideoContainer>
        <VideoList videos={sideVideos} useType={"side"} />
      </NextVideoContainer>
    </VideoDetailContainer>
  );
};

export default VideoDetail;
