import styled from "styled-components";

const LandingStyle = styled.div`
  margin-top: 55.5px;
  height: 100svh;
  scroll-margin-top: 55.5px;
`;
const ButtonStyle = styled.button`
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  padding: 1rem 3rem;
  transition: 0.2s;
  &:hover {
    letter-spacing: 0.2rem;
    padding: 1.1rem 3.1rem;
    background: var(--clr);
    color: var(--clr);
    /* box-shadow: 0 0 35px var(--clr); */
    animation: box 3s infinite;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #272822;
  }
  > * {
    position: relative;
    z-index: 1;
  }
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes box {
    0% {
      box-shadow: #27272c;
    }
    50% {
      box-shadow: 0 0 25px var(--clr);
    }
    100% {
      box-shadow: #27272c;
    }
  }
`;
// background-color: #4d4d4d;
// color: white;
// border: 3px solid #6d6d6d;
// margin: 50px;
// padding: 10px;
// width: 500px;
// height: 500px;
// font-size: 50px;
// border-radius: 5px;
// -webkit-transition: all 0.2s ease;
// transition: all 0.4 ease;
// /*  Making button bigger on hover  */
// transform: scale(1.1) perspective(1px) translateZ(0);
// box-shadow: 0 5px 50px var(--btnClr);
// animation: buttonAnimation 3s infinite;
// @keyframes buttonAnimation {
//   50% {
//     border-color: green;
//     color: green;
//   }
// }
export { LandingStyle, ButtonStyle };
