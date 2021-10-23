import styled from "styled-components";

export const SideMenuItemContainer = styled.li`
  width: 12rem;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4vh;
  font-size: 14px;
  color: #606060;
  background-color: ${(props) => (props.clicked ? "#e5e5e5" : "white")};
  padding-left: 1.5rem;
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.clicked ? "#dcdcdc" : "#f5f4f4")};
    cursor: pointer;
  }
`;

export const IconImage = styled.i`
  width: 1.5rem;
  font-size: 18px;
  margin-right: 1.5rem;
`;

export const IconTitle = styled.p`
  font-size: 12px;
`;
