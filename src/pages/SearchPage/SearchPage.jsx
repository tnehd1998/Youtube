import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideMenu from "../../components/SideMenu/SideMenu";
import VideoList from "../../components/VideoList/VideoList";
import Youtube from "../../service/youtube";

const youtube = new Youtube("AIzaSyCROyCIRNZU-ro57TqRxodwkFOns7BIhK8");

const SearchPageContainer = styled.div`
  display: flex;
  padding-top: 6vh;
`;

const SearchPage = ({ match }) => {
  const [searchVideos, setSearchVideos] = useState([]);
  const searchItem = match.params.id;

  useEffect(() => {
    youtube
      .search(searchItem) //
      .then((videos) => setSearchVideos(videos));
  }, [searchItem]);

  return (
    <SearchPageContainer>
      <SideMenu />
      <h1>SearchPage</h1>
      <VideoList videos={searchVideos} />
    </SearchPageContainer>
  );
};

export default SearchPage;