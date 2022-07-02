import styled from "styled-components";

const SBottomBanner = styled.div`
  width: 1440px;
  height: 880px;
  position: absolute;
  top: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: white;
  margin-bottom: 50px;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
`;
const LeftCon = styled.div`
  width: 564px;
  height: 564px;
  background-color: #fbedfb;
  border-radius: 14px;
  padding: 24px 32px;
`;
const ConTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  &.btmtitle {
    font-size: 20px;
  }
`;

const ConDesc = styled.div`
  font-size: 18px;
  color: #1d1d1d;
  line-height: 27px;
`;
const RightCon = styled.div`
  margin-left: 20px;
`;
const TopCon = styled.div`
  height: 272px;
  display: flex;
  margin-bottom: 20px;
`;
const BCon = styled.div`
  width: 564px;
  height: 100%;
  padding: 24px 32px;
  border-radius: 14px;
  &:nth-child(1) {
    background-color: lightblue;
    margin-right: 20px;
  }
  &:nth-child(2) {
    background-color: white;
    margin-left: 20px;
  }
`;
const SCon = styled.div`
  width: 272px;
  height: 100%;
  padding: 24px 32px;
  border-radius: 14px;
  background-color: white;
  &.topscon {
    padding: 24px 28px;
  }
`;
const BottomCon = styled.div`
  display: flex;
  height: 272px;
`;

export const BottomBanner = () => {
  return (
    <SBottomBanner>
      <Title>
        오직 유플러스에서만 가능한 <br /> 혜택을 만나보세요
      </Title>
      <ConWrap>
        <LeftCon>
          <ConTitle>온라인 전용 5G 다이렉트 요금제</ConTitle>
          <ConDesc>
            갤럭시 워치4 &amp; 버즈2 <br />
            100% 할인 받을 수 있어요
          </ConDesc>
        </LeftCon>
        <RightCon>
          <TopCon>
            <BCon>
              <ConTitle>매달 최대 10,000원 쇼핑쿠폰팩 증정</ConTitle>
              <ConDesc>2년동안 최대 24만원 혜택</ConDesc>
            </BCon>
            <SCon className="topscon">
              <ConTitle>온라인 유심 가입 혜택</ConTitle>
            </SCon>
          </TopCon>
          <BottomCon>
            <SCon>
              <ConTitle className="btmtitle">함께 많이 보는 휴대폰</ConTitle>
              <ConDesc>갤럭시 z 플립3</ConDesc>
            </SCon>
            <BCon>
              <ConTitle className="btmtitle">
                유플러스 닷컴 그랜드 오픈 이벤트
              </ConTitle>
              <ConDesc>
                유월엔 유플 페스타
                <br />
                유플러스 닷컴이 <br />
                준비한 다양한 혜택
              </ConDesc>
            </BCon>
          </BottomCon>
        </RightCon>
      </ConWrap>
    </SBottomBanner>
  );
};
