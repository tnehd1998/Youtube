import styled from "styled-components";

export const SideMenuContainer = styled.div`
  width: 15rem;
  height: 94vh;
  position: fixed;
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SideMenuItems = styled.ul`
  width: 11.5vw;
  padding: 1vh 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const SideMenuTitle = styled.p`
  padding-left: 1.4vw;
  padding-bottom: 1vh;
  font-size: 12px;
  color: #606060;
`;
