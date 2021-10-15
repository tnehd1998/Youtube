import React from "react";
import {
  HeaderContainer,
  CategoryContainer,
  Icon,
  LogoContainer,
  LogoImage,
  LogoTitle,
  SearchBar,
  SearchButton,
  MicIconContainer,
  SideMenuContainer,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <CategoryContainer>
        <Icon className="fas fa-bars"></Icon>
        <LogoContainer to="/">
          <LogoImage src="/images/logo.png" alt="Youtube Logo" />
          <LogoTitle>YouTube</LogoTitle>
        </LogoContainer>
      </CategoryContainer>
      <CategoryContainer>
        <SearchBar type="text" placeholder="검색" />
        <SearchButton type="submit">
          <Icon className="fas fa-search"></Icon>
        </SearchButton>
        <MicIconContainer>
          <Icon className="fas fa-microphone"></Icon>
        </MicIconContainer>
      </CategoryContainer>
      <SideMenuContainer>
        <Icon className="fas fa-video"></Icon>
        <Icon className="fas fa-th"></Icon>
        <Icon className="fas fa-bell"></Icon>
        <Icon className="fas fa-user-circle"></Icon>
      </SideMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
