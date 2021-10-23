import React from "react";

import {
  SideMenuItemContainer,
  IconImage,
  IconTitle,
} from "./SideMenuItem.styles";

const SideMenuItem = ({ imageIcon, title, clicked }) => {
  return (
    <SideMenuItemContainer clicked={clicked}>
      <IconImage className={imageIcon}></IconImage>
      <IconTitle>{title}</IconTitle>
    </SideMenuItemContainer>
  );
};

export default SideMenuItem;
