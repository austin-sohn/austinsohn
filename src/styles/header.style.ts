import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  position: fixed;
  background-color: black;
  color: white;
  width: 100%;
  height: 55.5px;
  z-index: 1;
`;
const HeaderRight = styled(HeaderStyle)`
  width: 85px;
  right: 0;
`;
export { HeaderStyle, HeaderRight };
