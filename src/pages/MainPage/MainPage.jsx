import React, { useEffect, useState } from "react";
import MainVideoList from "../../components/MainVideoList/MainVideoList";
import SideMenu from "../../components/SideMenu/SideMenu";
import Youtube from "../../service/youtube";

import { MainPageContainer } from "./MainPage.styles";

const youtube = new Youtube("AIzaSyCROyCIRNZU-ro57TqRxodwkFOns7BIhK8");

const MainPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <MainPageContainer>
      <SideMenu />
      <MainVideoList videos={videos} />
    </MainPageContainer>
  );
};

export default MainPage;
