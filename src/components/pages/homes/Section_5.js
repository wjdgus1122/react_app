import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Section = styled.section`
  height: 45vh;
  background-color: rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 70px;
`;
const BanWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btmban = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  align-items: center;
  &:nth-child(3) .textwrap {
    border-right: none;
  }
`;
const BanImg = styled.div`
  width: 180px;
  height: 140px;
  margin-left: 20px;
`;
const TextWrap = styled.div`
  width: 300px;
  height: 100px;
  margin-left: 20px;
  border-right: 1px solid lightgray;
`;
const BanTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  a {
    color: #333;
  }
`;
const BanText = styled.div`
  width: 250px;
  font-size: 18px;
  color: #333;
`;

export const Section_5 = ({ bottombanner }) => {
  return (
    <Section>
      <Title>도움이 필요하신가요?</Title>
      <BanWrap>
        {bottombanner.map((btmban) => (
          <Btmban>
            <BanImg
              style={{
                background: `url(${btmban.img}) no-repeat center/cover`,
              }}
            />
            <TextWrap className="textwrap">
              <BanTitle>
                <Link to="#">
                  {btmban.title} <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </BanTitle>
              <BanText>{btmban.text}</BanText>
            </TextWrap>
          </Btmban>
        ))}
      </BanWrap>
    </Section>
  );
};
