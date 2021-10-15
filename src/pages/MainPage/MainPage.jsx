import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import styled from "styled-components";

const MainPageContainer = styled.div`
  height: 94vh;
  display: flex;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <SideMenu />
      <h1>Main Page</h1>
    </MainPageContainer>
  );
};

export default MainPage;
