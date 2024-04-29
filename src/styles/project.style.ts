import styled from "styled-components";

const ProjectStyle = styled.div`
  margin-top: 55.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1435px) {
    grid-column-gap: 1vh;
    grid-row-gap: 1vw;
  }
  @media screen and (max-width: 1313px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`;

export { ProjectStyle, CardContainer };
