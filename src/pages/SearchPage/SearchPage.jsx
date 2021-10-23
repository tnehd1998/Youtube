import React, { useEffect, useState } from "react";

import SideMenu from "../../components/SideMenu/SideMenu";
import VideoList from "../../components/VideoList/VideoList";
import Youtube from "../../service/youtube";

import { SearchPageContainer } from "./SearchPage.styles";

const youtube = new Youtube("AIzaSyDjgJ5Copq4Iaslil98TRkFOaCijXHDONM");

const SearchPage = ({ match }) => {
  const [searchVideos, setSearchVideos] = useState([]);
  const searchItem = match.params.id;

  useEffect(() => {
    youtube
      .search(searchItem, 24) //
      .then((videos) => setSearchVideos(videos));
  }, [searchItem]);

  return (
    <SearchPageContainer>
      <SideMenu />
      <h1>SearchPage</h1>
      <VideoList videos={searchVideos} usetype={"main"} />
    </SearchPageContainer>
  );
};

export default SearchPage;
