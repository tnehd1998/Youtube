import styled from "styled-components";

export const VideoDetailContainer = styled.div`
  width: 100vw;
  padding: 0 5vw;
  display: flex;
  background-color: #f9f9f9;
`;

export const DisplayingVideoContainer = styled.div`
  width: 67vw;
  padding-top: 1.5rem;
`;

export const DisplayingVideo = styled.iframe`
  width: 67vw;
  height: 74vh;
`;

export const DisplayingVideoTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1.2rem;
`;

export const DisplayingVideoInfo = styled.div`
  padding: 1.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

export const DisplayingVideoViewAndDate = styled.p`
  font-size: 0.8rem;
  color: #787677;
`;

export const DisplayingVideoSideIconContainer = styled.div`
  display: flex;
`;

export const DisplayingVideoIconItem = styled.p`
  margin-left: 1.2rem;
`;

export const DisplayingVideoIcon = styled.i`
  margin-right: 0.5rem;
`;

export const ChannelInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const ChannelInfoDescriptionContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ChannelInfoLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #787677;
  margin-right: 0.5rem;
`;

export const ChannelInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChannelInfoTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const ChannelInfoSubscriber = styled.p`
  font-size: 0.5rem;
  color: #787677;
`;

export const ChannelInfoSubscribeButton = styled.div`
  width: 70px;
  height: 40px;
  background-color: #cc0100;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const ChannelInfoSubscribeText = styled.p`
  font-size: 0.8rem;
  color: white;
`;

export const NextVideoContainer = styled.div`
  width: 10vw;
`;
