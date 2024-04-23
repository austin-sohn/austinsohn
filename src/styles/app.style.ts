import styled from "styled-components";

const HomePage = styled.div`
  display: flex;
  position: relative;
  color: white;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: red;
`;

const ScrollStyle = styled.div`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 5px;
  }
`;

export { HomePage, ScrollStyle };
