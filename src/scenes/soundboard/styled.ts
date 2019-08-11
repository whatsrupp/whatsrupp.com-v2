import styled from "@emotion/styled";

import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";

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
