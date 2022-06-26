import styled from "styled-components";

const Section = styled.section`
  width: 100%;
`;
const Section_1 = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.homeimg};
  position: relative;
`;
const TextWrap = styled.div`
  width: 290px;
  position: absolute;
  top: 50%;
  left: 220px;
  transform: translateY(-50%);
`;
const MainBtn = styled.div`
  display: flex;
`;
const Btn_1 = styled.div`
  width: 140px;
  height: 40px;
  font-size: 16px;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn_2 = styled.div`
  width: 140px;
  height: 40px;
  font-size: 16px;
  background-color: #e6007e;
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const Home = ({ homedb }) => {
  return (
    <Section>
      <Section_1 homeimg={homedb[0].mainImg}>
        <TextWrap>
          <h3
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "white",
            }}
          >
            {homedb[0].mainTitle}
          </h3>
          <h5
            style={{
              fontSize: "20px",
              fontWeight: 400,
              marginBottom: "48px",
              color: "white",
            }}
          >
            {homedb[0].mainText}
          </h5>
          <MainBtn>
            <Btn_1>더 알아보기</Btn_1>
            <Btn_2>온라인 구매</Btn_2>
          </MainBtn>
        </TextWrap>
      </Section_1>
    </Section>
  );
};
