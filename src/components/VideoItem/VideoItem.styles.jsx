import { Link } from "react-router-dom";
import styled from "styled-components";

export const VideoItemContainer = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 250ms ease-in;
  margin-bottom: ${(props) => (props.usetype === "main" ? "1rem" : "0.5rem")};
  display: ${(props) => (props.usetype === "main" ? "" : "flex")};
  width: ${(props) => (props.usetype === "main" ? "" : "360px")};

  &:hover {
    transform: scale(1.02);
  }
`;

export const VideoItemImg = styled.img`
  width: ${(props) => (props.usetype === "main" ? "360px" : "140px")};
  height: ${(props) => (props.usetype === "main" ? "200px" : "100px")};
`;

export const VideoDescriptionContainer = styled.div`
  width: 300px;
  height: 100px;
  padding: ${(props) => (props.usetype === "main" ? "10px 30px" : "0px 5px")};
  display: flex;
  flex-direction: column;
`;

export const VideoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const VideoChannelName = styled.p`
  font-size: 0.8rem;
  color: #787677;
`;
