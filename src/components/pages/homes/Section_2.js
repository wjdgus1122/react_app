import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 80vh;
  background-color: navy;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  padding-top: 70px;
`;
const SText = styled.h5`
  font-size: 18px;
  color: white;
  cursor: pointer;
`;
const ImgWrap = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Section_2 = () => {
  return (
    <Section>
      <Title>
        휴대폰에서 보던 디즈니+를
        <br />
        7% 요금할인 받고 TV에서 이어 보세요
      </Title>
      <SText>
        더 알아보기 <FontAwesomeIcon icon={faAngleRight} />{" "}
      </SText>
      <ImgWrap>
        <img
          src="//image.lguplus.com/static/pc-contents/matching/images/main/blurb-detail-02.png"
          alt=""
        />
      </ImgWrap>
    </Section>
  );
};
