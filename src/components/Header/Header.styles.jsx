import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 1.5rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 20px;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 2rem;
  height: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 0.2rem;
`;

export const LogoTitle = styled.p`
  font-size: 20px;
  font-weight: 900;
`;

export const SearchBar = styled.input`
  width: 30vw;
  height: 4vh;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid #c6c6c6;
  padding: 0;
  padding-left: 0.5rem;
`;

export const SearchButton = styled.button`
  all: unset;
  width: 3vw;
  height: 4vh;
  background-color: #f0f0f0;
  text-align: center;
  border: 1px solid #c6c6c6;
`;

export const MicIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f9f9f9;
  border-radius: 50%;
  text-align: center;
  line-height: 2.5rem;
  margin-left: 0.5rem;
`;

export const SideMenuContainer = styled.div`
  width: 12vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
