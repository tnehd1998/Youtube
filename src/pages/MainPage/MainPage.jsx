import React, { useEffect, useState } from "react";
import VideoList from "../../components/VideoList/VideoList";
import SideMenu from "../../components/SideMenu/SideMenu";
import Youtube from "../../service/youtube";

import { MainPageContainer } from "./MainPage.styles";

const youtube = new Youtube("AIzaSyDjgJ5Copq4Iaslil98TRkFOaCijXHDONM");

const MainPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));

    return () => setVideos([]);
  }, []);

  return (
    <MainPageContainer>
      <SideMenu />
      <VideoList videos={videos} />
    </MainPageContainer>
  );
};

export default MainPage;
