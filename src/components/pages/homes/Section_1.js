import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  /* height: 100vh; */
  background-color: white;
  padding: 120px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

const ConWrap = styled.div`
  width: 1440px;
  display: flex;
`;
const Con_1 = styled.div`
  width: ${(props) => props.wth1};
  height: 600px;
  border-radius: 14px;
  color: white;
  margin: 10px;
  position: relative;
  transition: 1s;
  background-color: lightblue;
`;
const Con_2 = styled.div`
  width: ${(props) => props.wth2};
  height: 600px;
  border-radius: 14px;
  color: white;
  margin: 10px;
  position: relative;
  transition: 1s;
  background-color: lightblue;
`;
const Con_3 = styled.div`
  width: ${(props) => props.wth3};
  height: 600px;
  border-radius: 14px;
  color: white;
  margin: 10px;
  position: relative;
  transition: 1s;
  background-color: lightblue;
`;
const TexrWrap = styled.div`
  position: absolute;
  left: 15px;
  bottom: 32px;
`;
const ConTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
  letter-spacing: -2px;
`;
const ConText = styled.div`
  width: 200px;
  font-size: 20px;
  letter-spacing: -1px;
`;
const Btn1 = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: #e6007e;
  font-size: 18px;
  color: white;
  display: ${(props) => props.dis1};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 32px;
`;

const Btn2 = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: #e6007e;
  font-size: 18px;
  color: white;
  display: ${(props) => props.dis2};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 32px;
`;
const Btn3 = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: #e6007e;
  font-size: 18px;
  color: white;
  display: ${(props) => props.dis3};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 32px;
`;

export const Section_1 = () => {
  const [wid1, setWid1] = useState("272px");
  const [wid2, setWid2] = useState("272px");
  const [wid3, setWid3] = useState("865px");
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("flex");
  const handleCon_1 = () => {
    if (wid1 == "272px") {
      setWid1("865px");
      setWid2("272px");
      setWid3("272px");
      setDisplay1("flex");
      setDisplay2("none");
      setDisplay3("none");
    }
  };
  const handleCon_2 = () => {
    if (wid2 == "272px") {
      setWid2("865px");
      setWid1("272px");
      setWid3("272px");
      setDisplay1("none");
      setDisplay2("flex");
      setDisplay3("none");
    }
  };
  const handleCon_3 = () => {
    if (wid3 == "272px") {
      setWid1("272px");
      setWid2("272px");
      setWid3("865px");
      setDisplay1("none");
      setDisplay2("none");
      setDisplay3("flex");
    }
  };
  return (
    <Section>
      <Title>
        오직 유플러스에서만 가능한 <br /> 혜택을 만나보세요
      </Title>
      <ConWrap>
        <Con_1
          onMouseEnter={handleCon_1}
          onMouseLeave={handleCon_1}
          wth1={wid1}
        >
          <TexrWrap>
            <ConTitle>디즈니+팩</ConTitle>
            <ConText>시대를 초월하는 명작을 먼저 만나보세요</ConText>
          </TexrWrap>
          <Btn1 dis1={display1}>가입하기</Btn1>
        </Con_1>
        <Con_2
          onMouseEnter={handleCon_2}
          onMouseLeave={handleCon_2}
          wth2={wid2}
        >
          <TexrWrap>
            <ConTitle>넷플릭스 팩</ConTitle>
            <ConText>전 세계 다양한 콘텐츠를 여러 언어로 즐기세요</ConText>
          </TexrWrap>
          <Btn2 dis2={display2}>가입하기</Btn2>
        </Con_2>
        <Con_3
          onMouseEnter={handleCon_3}
          onMouseLeave={handleCon_3}
          wth3={wid3}
        >
          <TexrWrap>
            <ConTitle>유튜브 프리미엄 팩</ConTitle>
            <ConText>끊김없는 즐거움과 감동을 언제 어디서든 느껴보세요</ConText>
          </TexrWrap>
          <Btn3 dis3={display3}>가입하기</Btn3>
        </Con_3>
      </ConWrap>
    </Section>
  );
};
