import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";

const randomTextShadow = () => {
  let i;
  let textShadow = ``;
  const numberOfBalls = 40;
  for (i = 0; i < numberOfBalls; i++) {
    const hShadow = -0.7 * (Math.random() - 0.5) * 3;
    const vShadow = -0.7 * Math.random() * 3;
    const blurRadius = 8 * Math.random() + 5;
    const test = `${hShadow}em ${vShadow}em ${blurRadius}px
    hsla(${Math.random() * 360}, 100%, 50%, 0.9)`;
    textShadow += test;
    textShadow += i + 1 < numberOfBalls ? "," : "";
  }

  return css`
    text-shadow: ${textShadow};
  `;
};

const neonTextColour = "#f40";

export const NeonText = styled.h1`
  font-family: "Syne Mono", monospace;
  color: white;
  position: fixed;
  font-size: 3rem;
  top: 1rem;
  left: 1rem;
  margin: 0;
  color: #fff;
  user-select: none;
  text-transform: uppercase;
  text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
    0 0 2rem ${neonTextColour}, 0 0 4rem ${neonTextColour},
    0 0 6rem ${neonTextColour}, 0 0 8rem ${neonTextColour},
    0 0 10rem ${neonTextColour};
`;

export const SubHeading = styled(NeonText)`
  font-size: 1rem;
  top: 5rem;
  font-style: italic;
`;

export const PageLayout = styled(PageLayoutComponent)`
  background: ${colours.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: scroll;

  * {
    font-family: "Montserrat", sans-serif;
  }

  font: 5vmin/1.3 Serif;
  overflow: hidden;
  background: #123;

  display: block;
  font-size: 52px;
  color: transparent;

  &::after {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    content: ".";
    mix-blend-mode: screen;
    animation: 44s -27s move infinite ease-in-out alternate;
    ${randomTextShadow()}
  }

  &::before {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    content: ",";
    mix-blend-mode: screen;
    animation: 20s -27s move infinite ease-in-out alternate;
    ${randomTextShadow()}
  }

  @keyframes move {
    from {
      transform: rotate(0deg) scale(12) translateX(-20px);
    }
    to {
      transform: rotate(360deg) scale(18) translateX(20px);
    }
  }
`;

export const Canvas = styled.canvas`
  /* width: 100%; */
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const InfoPanelBase = styled.div`
  position: fixed;
  height: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const InfoPanelSkeleton = styled(InfoPanelBase)`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 20px;
`;

export const InfoPanel = styled(InfoPanelBase)`
  display: grid;

  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 2fr;

  grid-gap: 5px;
  grid-template-areas:
    "icon heading button"
    "icon subheading button";
`;

export const InfoPanelIcon = styled.img`
  grid-area: icon;
  width: 80%;
  max-width: 100px;
  align-self: center;
  justify-self: center;
  user-select: none;
`;

export const InfoPanelHeading = styled.h1`
  grid-area: heading;
  text-align: left;
  font-size: 1rem;
  height: fit-content;
  line-height: 1;
  user-select: none;
  justify-self: left;
  color: white;
  align-self: center;
`;

export const InfoPanelSubheading = styled.h2`
  grid-area: subheading;
  text-align: left;
  user-select: none;
  height: fit-content;
  font-size: 0.8rem;
  justify-self: left;
  align-self: baseline;
  color: white;
`;

export const InfoPanelButton = styled.button`
  grid-area: button;
  font-size: 1rem;
  user-select: none;
`;
