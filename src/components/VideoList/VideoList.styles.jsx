import styled from "styled-components";

export const VideoListContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  padding-left: ${(props) => (props.usetype === "main" ? "12vw" : "12rem")};
  background-color: #f9f9f9;
`;
