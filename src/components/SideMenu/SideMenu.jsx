import React from "react";
import styled from "styled-components";
import SideMenuItem from "../SideMenuItem/SideMenuItem";

const SideMenuContainer = styled.div`
  height: 94vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SideMenuItems = styled.ul`
  width: 11.5vw;
  padding: 1vh 0;
  border-bottom: 1px solid #e5e5e5;
`;

const SideMenuTitle = styled.p`
  padding-left: 1.4vw;
  padding-bottom: 1vh;
  font-size: 12px;
  color: #606060;
`;

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <SideMenuItems>
        <SideMenuItem imageIcon={"fas fa-house-user"} title={"홈"} clicked />
        <SideMenuItem imageIcon={"fas fa-compass"} title={"탐색"} />
        <SideMenuItem imageIcon={"fas fa-folder"} title={"구독"} />
      </SideMenuItems>
      <SideMenuItems>
        <SideMenuItem imageIcon={"fas fa-database"} title={"보관함"} />
        <SideMenuItem imageIcon={"fas fa-history"} title={"시청 기록"} />
        <SideMenuItem imageIcon={"fas fa-folder"} title={"나중에 볼 동영상"} />
        <SideMenuItem
          imageIcon={"far fa-thumbs-up"}
          title={"좋아요 표시한 동영상"}
        />
      </SideMenuItems>
      <SideMenuItems>
        <SideMenuTitle>구독</SideMenuTitle>
        <SideMenuItem imageIcon={"fas fa-play-circle"} title={"음악"} />
        <SideMenuItem imageIcon={"fas fa-baseball-ball"} title={"스포츠"} />
        <SideMenuItem imageIcon={"fas fa-gamepad"} title={"게임"} />
        <SideMenuItem imageIcon={"fas fa-film"} title={"영화"} />
      </SideMenuItems>
      <SideMenuItems>
        <SideMenuTitle>YOUTUBE 더보기</SideMenuTitle>
        <SideMenuItem
          imageIcon={"fas fa-house-user"}
          title={"YouTube Premium"}
        />
        <SideMenuItem imageIcon={"fas fa-film"} title={"영화"} />
        <SideMenuItem imageIcon={"fas fa-gamepad"} title={"게임"} />
        <SideMenuItem imageIcon={"fas fa-record-vinyl"} title={"실시간"} />
        <SideMenuItem imageIcon={"far fa-lightbulb"} title={"학습"} />
        <SideMenuItem imageIcon={"fas fa-baseball-ball"} title={"스포츠"} />
      </SideMenuItems>
      <SideMenuItems>
        <SideMenuItem imageIcon={"fas fa-cog"} title={"설정"} />
        <SideMenuItem imageIcon={"far fa-flag"} title={"신고 기록"} />
        <SideMenuItem imageIcon={"far fa-question-circle"} title={"고객센터"} />
        <SideMenuItem
          imageIcon={"fas fa-exclamation-circle"}
          title={"의견 보내기"}
        />
      </SideMenuItems>
    </SideMenuContainer>
  );
};

export default SideMenu;
