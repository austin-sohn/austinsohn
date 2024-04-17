import styled from "styled-components";

const ResumeStyle = styled.div`
  display: flex;
  color: black;
  margin-top: 55.5px;
  margin-bottom: 15vh;
  padding: 1vh;
`;

const PInfoStyle = styled.div`
  position: absolute;
  background-color: red;
`;
const EducationStyle = styled.div`
  position: absolute;
  background-color: green;
  left: 30%;
`;
const SkillStyle = styled.div`
  position: absolute;
  background-color: blue;
  left: 60%;
`;
export { ResumeStyle, PInfoStyle, EducationStyle, SkillStyle };
