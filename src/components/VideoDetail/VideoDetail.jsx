import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Youtube from "../../service/youtube";
import VideoList from "../VideoList/VideoList";

const youtube = new Youtube("AIzaSyDjgJ5Copq4Iaslil98TRkFOaCijXHDONM");

const VideoDetailContainer = styled.div`
  padding: 1.5rem 5vw;
  display: flex;
`;

const DisplayingVideo = styled.iframe`
  width: 67vw;
  height: 74vh;
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
      <DisplayingVideo
        type="text/html"
        title={`${state.snippet.title}`}
        src={`https://www.youtube.com/embed/${state.id}`}
        frameBorder="0"
        allowFullScreen
      ></DisplayingVideo>
      <NextVideoContainer>
        <VideoList videos={sideVideos} />
      </NextVideoContainer>
    </VideoDetailContainer>
  );
};

export default VideoDetail;
