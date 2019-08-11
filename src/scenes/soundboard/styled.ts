import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
// import { zoomIn } from "react-animations";

// import { zoomIn } from "react-animations";

// const fadeInAnimation = keyframes`${zoomIn}`;

export const Button = styled.button`
  color: white;
  background-color: #567c82;
  box-sizing: border-box;
  padding: 5px;
  font-size: 1.3em;
  border-radius: 5px;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const PageTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
  text-transform: uppercase;
  padding: none;
`;

export const SoundboardWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;

export const PageFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(204, 204, 204, 0.5);
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const FooterText = styled.p`
  font-size: 0.8em;
  font-family: "Courier New", Courier, monospace;
`;
