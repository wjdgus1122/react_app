import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Section = styled.div`
  padding: 120px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
const ProTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin: 50px 0;
`;

const SlideWrap = styled.div`
  width: 1440px;
  height: 70vh;
`;
const ConWrap = styled.div`
  display: flex;
`;

const LeftPro = styled.div`
  width: 50%;
  height: 70vh;
  border: 1px solid lightgray;
  border-radius: 14px;
  padding: 24px 32px;
  margin-right: 20px;
`;
const STitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const SPrice = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const RightPro = styled.div`
  width: 50%;
  height: 100%;
`;
const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
const Con = styled.div`
  width: 50%;
  height: 34vh;
  border: 1px solid lightgray;
  border-radius: 14px;
  padding: 24px 32px;
  &:nth-child(1) {
    margin-right: 20px;
  }
`;
const Bottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 10px;
`;

const BottomText = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  a {
    font-size: 20px;
    font-weight: 700;
    color: #333;
  }
`;

export const Section_4 = ({ productData }) => {
  return (
    <Section>
      <Title>
        가장 많은 혜택을 받는
        <br />
        기기를 추천해 드려요
      </Title>
      <ProTitle>제품</ProTitle>
      <SlideWrap>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          slidesPerView={1}
        >
          {productData.map((pro) => (
            <SwiperSlide key={pro.id}>
              <ConWrap>
                <LeftPro>
                  <STitle>{pro.LeftConTitle}</STitle>
                  <SPrice>{pro.LeftConPrice}</SPrice>
                </LeftPro>
                <RightPro>
                  <Top>
                    <Con>
                      <STitle>{pro.RightCon1Title}</STitle>
                      <SPrice>{pro.RightCon1Price}</SPrice>
                    </Con>
                    <Con>
                      <STitle>{pro.RightCon2Title}</STitle>
                      <SPrice>{pro.RightCon2Price}</SPrice>
                    </Con>
                  </Top>
                  <Bottom>
                    <Con>
                      <STitle>{pro.RightCon3Title}</STitle>
                      <SPrice>{pro.RightCon3Price}</SPrice>
                    </Con>
                    <Con>
                      <STitle>{pro.RightCon4Title}</STitle>
                      <SPrice>{pro.RightCon4Price}</SPrice>
                    </Con>
                  </Bottom>
                </RightPro>
              </ConWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideWrap>
      <BottomText>
        <Link to="#">
          5G 휴대폰 전체 보기 <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </BottomText>
    </Section>
  );
};
