import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  position: fixed;
  background-color: #99aab5;
  color: white;
  width: 100vw;
  height: 55.5px;
`;
const HeaderRight = styled(HeaderStyle)`
  width: 85px;
  right: 0;
`;
export { HeaderStyle, HeaderRight };
