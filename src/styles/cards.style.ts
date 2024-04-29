import styled from "styled-components";

const CardStyle = styled.a`
  background-color: white;
  color: black;
  max-height: 250px;
  width: auto;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  padding: 10px;
  overflow-y: auto;
  padding-top: 5px;

  text-decoration: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const ULStyle = styled.ul`
  padding-left: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const H3Style = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export { CardStyle, ULStyle, H3Style };
