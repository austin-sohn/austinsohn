import styled from "styled-components";

const ContactStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100svh;
  justify-content: center;
  flex-direction: column;
`;
const FormStyle = styled.form`
  margin: 1%;
  width: 10rem;
`;
const InputStyle = styled.input`
  background: transparent;
  border: none;
  margin-bottom: 10px;
  border: 1px solid white;
  color: white;
  :focus {
    border-color: red;
  }
  &::placeholder {
    color: white;
  }
  border-radius: 4px;
`;
const TextAreaStyle = styled.textarea`
  resize: none;
  background: transparent;
  border: none;
  border: 1px solid white;
  color: white;
  &::placeholder {
    color: white;
  }
  border-radius: 4px;
`;

export { ContactStyle, InputStyle, TextAreaStyle, FormStyle };
