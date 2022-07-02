import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  position: fixed;
  z-index: 99;
`;
const TopHeader = styled.div`
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 220px;
  a {
    font-size: 20px;
    font-weight: 700;
  }
`;
const TopBtnWrap = styled.div`
  width: 220px;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 24px;
  padding: 2px;
`;
const TopBtn = styled.div`
  width: 100%;
  height: 90%;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  border-radius: 28px;
  cursor: pointer;
  &:nth-child(1) {
    background-color: white;
    color: #1d1d1d;
  }
`;
const BtmHeader = styled.div`
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 220px;
`;
const TextMenuWrap = styled.div`
  a {
    padding-left: 48px;
    &:nth-child(1) {
      padding-left: 0;
    }
  }
`;
const BtmBtnWrap = styled.div`
  svg {
    margin-left: 30px;
    font-size: 25px;
    font-weight: 100;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <TopHeader>
        <Link to="/">LG U+</Link>
        <TopBtnWrap>
          <TopBtn>개인</TopBtn>
          <TopBtn>기업</TopBtn>
          <TopBtn>소상공인</TopBtn>
        </TopBtnWrap>
      </TopHeader>
      <BtmHeader>
        <TextMenuWrap>
          <Link to="/product">모바일 기기</Link>
          <Link to="/price_1">모바일 요금제</Link>
          <Link to="/price_2">인터넷/IPTV</Link>
          <Link to="/">마이페이지</Link>
          <Link to="/">혜택</Link>
          <Link to="/">고객지원</Link>
          <Link to="/">#유플일상</Link>
        </TextMenuWrap>
        <BtmBtnWrap>
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faStore} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </BtmBtnWrap>
      </BtmHeader>
    </SHeader>
  );
};
