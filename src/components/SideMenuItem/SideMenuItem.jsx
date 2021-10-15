import React from "react";
import styled from "styled-components";

const SideMenuItemContainer = styled.li`
  display: flex;
  align-items: center;
  height: 4vh;
  font-size: 14px;
  color: #606060;
  background-color: ${(props) => (props.clicked ? "#e5e5e5" : "white")};
  padding-left: 1.5vw;
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.clicked ? "#dcdcdc" : "#f5f4f4")};
    cursor: pointer;
  }
`;

const IconImage = styled.i`
  font-size: 18px;
  margin-right: 1.5rem;
`;

const SideMenuItem = ({ imageIcon, title, clicked }) => {
  return (
    <SideMenuItemContainer clicked={clicked}>
      <IconImage className={imageIcon}></IconImage>
      <h1>{title}</h1>
    </SideMenuItemContainer>
  );
};

export default SideMenuItem;
