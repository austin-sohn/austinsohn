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
  /* &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #6e6e6e;
  } */
`;

export { HomePage, ScrollStyle };
