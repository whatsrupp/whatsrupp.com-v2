import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";
import UnstyledBadge from "./Badge";

export const Button = styled.button`
  color: white;
  background-color: #567c82;
  box-sizing: border-box;
  padding: 5px;
  font-size: 1.3em;
  font-weight: 100;
  border-radius: 5px;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonV1 = styled(Button)`
  background-color: #567c82;
`;

export const ButtonV2 = styled(Button)`
  background-color: #002c82;
`;

export const ButtonV3 = styled(Button)`
  background-color: #533c82;
`;

const spinClockwise = keyframes`
    from {
        transform:rotate(0deg) scale(1);
    }
    10% {
      transform:rotate(360deg) scale(1.5);

    }
    70%{
      transform:rotate(20deg) scale(1);

    }
    to {
        transform:rotate(0deg) scale(1);

    }
`;

const spinAntiClockwise = keyframes`
    from {
        transform:rotate(0deg) scale(1);
    }
    10% {
      transform:rotate(-360deg) scale(1.5);

    }
    70%{
      transform:rotate(-20deg) scale(1);

    }
    to {
        transform:rotate(0deg) scale(1);

    }
`;

export const BadgeOuter = styled(UnstyledBadge)`
  animation: ${spinClockwise} 10s ease infinite;
  path {
    fill: ${colours.softBlack};
  }
  height: 100px;
  width: 100px;
`;

export const BadgeInner = styled(UnstyledBadge)`
  animation: ${spinAntiClockwise} 10s ease infinite;
  path {
    fill: ${colours.deepPurple};
  }
  height: 70px;
  width: 70px;
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  * {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const PageLayout = styled(PageLayoutComponent)`
  background: ${colours.teal};
  display: grid;
  grid-template-rows: 1fr 3fr 0.5fr;
`;

export const Header = styled.div``;
export const Body = styled.div`
  max-width: 800px;
`;
export const Footer = styled.div``;

export const Picture = styled.img`
  height: 100px;
  margin: 20px;
  z-index: 1;
`;

export const PageTitle = styled.h1`
  margin: 0px;
  text-transform: uppercase;
  padding: none;
  font-size: 2em;
`;

export const SoundboardWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;

export const PageFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const FooterText = styled.p`
  font-size: 0.8em;
  font-family: "Courier New", Courier, monospace;
`;
