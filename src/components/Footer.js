import styled from "styled-components";

const SFooter = styled.footer`
  padding: 50px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export const Footer = () => {
  return (
    <SFooter>
      <span>&copy; FruitLike {new Date().getFullYear()}</span>
    </SFooter>
  );
};
