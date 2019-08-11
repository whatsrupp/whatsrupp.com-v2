import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

// import { zoomIn } from "react-animations";
// const fadeInAnimation = keyframes`${zoomIn}`;

export const Button = styled.button`
  color: white;
  background-color: #567c82;
  box-sizing: border-box;
  padding: 5px;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.3em;
  border-radius: 5px;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;
