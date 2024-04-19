import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  background-color: transparent;
  color: white;

  width: 100%;

  border-color: red;
`;
const IconStyle = styled.div`
  flex-direction: row;
`;
const FooterTitle = styled.div`
  font-size: 25px;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: white;
`;
const CreditStyle = styled.div``;
export { FooterStyle, FooterTitle, IconStyle, CreditStyle, LinkStyle };
