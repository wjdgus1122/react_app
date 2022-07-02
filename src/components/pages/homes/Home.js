import { TopBanner } from "./TopBanner";
import styled from "styled-components";
import { BottomBanner } from "./BottomBanner";
import { Section_1 } from "./Section_1";
import { Section_2 } from "./Section_2";
import { Section_3 } from "./Section_3";
import { Section_4 } from "./Section_4";
import { BtmBanner, Product } from "../../../reactDb";
import { Section_5 } from "./Section_5";

const MainBanner = styled.div`
  height: 170vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Home = () => {
  return (
    <>
      <MainBanner>
        <TopBanner />
        <BottomBanner />
      </MainBanner>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 productData={Product} />
      <Section_5 bottombanner={BtmBanner} />
    </>
  );
};
