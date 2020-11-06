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
`;
// @mixin dots($count) {
//   $text-shadow: ();
//   @for $i from 0 through $count {
//     $text-shadow: $text-shadow,
//                  (-.5+(random()) * 3) + em
//                  (-.5+(random()) * 3) + em
//                  7px
//                  hsla(random() * 360, 100%, 50%,.9);
//   }
//   text-shadow: $text-shadow;
// }

// html {
//   font: 5vmin/1.3 Serif;
//   overflow: hidden;
//   background: #123;
// }

// body, head {
//   display: block;
//   font-size: 52px;
//   color: transparent;
// }

// head::before, head::after,
// body::before, body::after {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   width: 3em;
//   height: 3em;
//   content: '.';
//   mix-blend-mode: screen;
//   animation: 44s -27s move infinite ease-in-out alternate;
// }

// body::before {
//   @include dots(40);
//   animation-duration: 44s;
//   animation-delay: -27s;
// }

// body::after {
//   @include dots(40);
//   animation-duration: 43s;
//   animation-delay: -32s;
// }

// head::before {
//   @include dots(40);
//   animation-duration: 42s;
//   animation-delay: -23s;
// }

// head::after {
//   @include dots(40);
//   animation-duration: 41s;
//   animation-delay: -19s;
// }
