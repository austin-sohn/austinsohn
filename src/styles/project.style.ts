import styled from "styled-components";

const ProjectStyle = styled.div`
  margin-top: 55.5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`;

export { ProjectStyle, CardContainer };
