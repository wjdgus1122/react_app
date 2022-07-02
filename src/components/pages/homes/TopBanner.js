import styled from "styled-components";

const STopBanner = styled.div`
  width: 1440px;
  height: 880px;
  position: absolute;
  top: 0;
`;
const ComWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 48px;
`;
const BtnWrap = styled.div`
  display: flex;
`;
const Btn = styled.div`
  width: 140px;
  height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  &:first-child {
    border: 1px solid white;
  }
  &:last-child {
    margin-left: 15px;
    background-color: #e6007e;
    &:hover {
      background-color: #850c4e;
    }
  }
`;

export const TopBanner = () => {
  return (
    <>
      <STopBanner>
        <ComWrap>
          <Title>갤럭시 S22</Title>
          <Desc>
            일상에 감강을 더하다 <br /> 갤럭시 사상 가장 빠른칩
          </Desc>
          <BtnWrap>
            <Btn>더 알아보기</Btn>
            <Btn>온라인 구매</Btn>
          </BtnWrap>
        </ComWrap>
      </STopBanner>
    </>
  );
};
