import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 80vh;
  padding: 120px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
const ConWrap = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Con = styled.div`
  width: 100%;
  height: 300px;
  margin-right: 20px;
  border-radius: 14px;
  padding: 24px 32px;
  &:nth-child(1) {
    background-color: beige;
  }
  &:nth-child(2) {
    background-color: lightblue;
  }
  &:nth-child(3) {
    margin-right: 0;
    background-color: lightsteelblue;
  }
`;
const ConTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ConText = styled.p`
  font-size: 18px;
  color: #333;
`;
const STitle = styled.h3`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
`;

export const Section_3 = () => {
  return (
    <>
      <Section>
        <Title>
          좋아하는 아이돌을 눈앞에서 보는 것처럼 <br />
          생생하게 아이돌Live에서 즐겨보세요
        </Title>
        <ConWrap>
          <Con>
            <ConTitle>아돌라스쿨</ConTitle>
            <ConText>
              아이돌Live 오리지널 예능 <br />
              아돌라스쿨:홍보On아이돌
            </ConText>
          </Con>
          <Con>
            <ConTitle>본투비투비</ConTitle>
            <ConText>
              Born to beat!
              <br /> 비투비의 예능 신고식
            </ConText>
          </Con>
          <Con>
            <ConTitle>아이돌워크숍</ConTitle>
            <ConText>
              내 아이돌이 보여주는 <br />
              사회생활의 모든것!
            </ConText>
          </Con>
        </ConWrap>
        <STitle> U+아이돌 Live 바로가기 </STitle>
      </Section>
    </>
  );
};
