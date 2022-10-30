import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100vw;
  bottom: 0;
  background-color: #99aab5;
  color: black;
  height: 10vh;
  flex-direction: column;
`;
const FooterTitle = styled.div`
  font-size: 25px;
  padding: 5px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 5px;
  max-width: 60px;
  @media (max-height: 600px) {
    padding: 0;
  }
`;
export { FooterStyle, FooterTitle, FooterLink };
