import {
  faBars,
  faCartShopping,
  faHouseFlag,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  position: fixed;
`;
const LogoWrap = styled.div`
  width: 100%;
  height: 57px;
  padding: 5px 200px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: #1d1d1d;
  cursor: pointer;
`;
const HeaderBtnWrap = styled.div`
  width: 220px;
  height: 32px;
  background-color: lightgray;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderBtn = styled.div`
  background-color: lightgray;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: white;
    box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  }
`;
const MenuWrap = styled.div`
  width: 100%;
  height: 57px;
  padding: 5px 200px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;
const TextMenu = styled.div`
  display: flex;
`;
const Menu = styled.div`
  padding-left: 40px;
  cursor: pointer;
  &:nth-child(1) {
    padding-left: 0;
  }
`;
const BtmMenu = styled.div`
  svg {
    font-size: 25px;
    margin-left: 30px;
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <LogoWrap>
        <Logo>LOGO</Logo>
        <HeaderBtnWrap>
          <HeaderBtn>개인</HeaderBtn>
          <HeaderBtn>기업</HeaderBtn>
          <HeaderBtn>소상공인</HeaderBtn>
        </HeaderBtnWrap>
      </LogoWrap>
      <MenuWrap>
        <TextMenu>
          <Menu>모바일 기기</Menu>
          <Menu>모바일 요금제</Menu>
          <Menu>인터넷/IPTV</Menu>
          <Menu>마이페이지</Menu>
          <Menu>혜택</Menu>
          <Menu>고객지원</Menu>
          <Menu>#유플일상</Menu>
        </TextMenu>
        <BtmMenu>
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faHouseFlag} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </BtmMenu>
      </MenuWrap>
    </SHeader>
  );
};
