import React, { useRef, useState } from "react";
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
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log("Value: " + value);
    console.log("Before: " + searchInput);
    setSearchInput(value);
    console.log("After: " + searchInput);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // useState Sync하게 바꿔야함

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
