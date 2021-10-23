import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
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
import YoutubeLogo from "../../assets/images/logo.png";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef();

  const history = useHistory();

  const handleSearch = () => {
    const value = inputRef.current.value;
    setSearchInput(value);
  };

  const onClick = () => handleSearch();

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    history.push(`/search/${searchInput}`);
  }, [searchInput, history]);

  return (
    <HeaderContainer>
      <CategoryContainer>
        <Icon className="fas fa-bars"></Icon>
        <LogoContainer to="/">
          <LogoImage src={YoutubeLogo} alt="Youtube Logo" />
          <LogoTitle>YouTube</LogoTitle>
        </LogoContainer>
      </CategoryContainer>
      <CategoryContainer>
        <SearchBar
          type="text"
          placeholder="검색"
          ref={inputRef}
          onKeyPress={onKeyPress}
        />
        <SearchButton to={`/search/${searchInput}`}>
          <Icon className="fas fa-search" onClick={onClick}></Icon>
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
