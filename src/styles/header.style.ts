import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  position: fixed;
  background-color: #330033;
  color: white;
  width: 100%;
  height: 55.5px;
  z-index: 2;
  border-bottom: 1px solid;
  border-color: grey;
`;
const HeaderRight = styled(HeaderStyle)`
  width: 85px;
  right: 0;
`;
export { HeaderStyle, HeaderRight };
