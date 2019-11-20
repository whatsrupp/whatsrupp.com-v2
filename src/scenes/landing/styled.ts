import styled from "@emotion/styled";
import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";
import components from "../../style/components";
import { Link } from "react-router-dom";

export const PageLayout = styled(PageLayoutComponent)`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: scroll;

  * {
    font-family: "Montserrat", sans-serif;
  }
`;

export const FullPage = styled.div`
  height: 100%;
  width: 100%;
`;

export const PageContent = styled(components.PageLayout)`
  grid-template-rows: 1fr 3fr 1fr;
  padding: 20px;
  max-width: 1200px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Body = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 50px 0;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;

export const Row = styled(Link)`
  text-decoration: none;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
  grid-template-areas:
    "picture"
    "header"
    "text";
`;

export const SoundboardRow = styled(Row)`
  background: #093028;
  background: -webkit-linear-gradient(to right, #237a57, #093028);
  background: linear-gradient(to right, #237a57, #093028);
`;

export const PortfolioRow = styled(Row)`
  background: #2c3e50;
  background: -webkit-linear-gradient(to right, #4ca1af, #2c3e50);
  background: linear-gradient(to right, #4ca1af, #2c3e50);
`;

export const LoopsRow = styled(Row)`
  background: #0f2027;
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
`;

export const LandGridRow = styled(Row)`
  background: #355c7d;
  background: -webkit-linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
  background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
`;

export const WheelRow = styled(Row)`
  background: #59c173;
  background: -webkit-linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
  background: linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
`;
export const SegmentRow = styled(Row)`
  background: #5d4157;
  background: -webkit-linear-gradient(to right, #a8caba, #5d4157);
  background: linear-gradient(to right, #a8caba, #5d4157);
`;

export const RowPicture = styled.img`
  height: 100px;
  z-index: 0;
`;

export const Information = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
`;

export const RowHeader = styled.h1`
  grid-area: header;
  font-size: 1.4em;
  color: ${colours.white};
  text-align: left;

  font-weight: bold;
  justify-self: left;
`;

export const RowText = styled.p`
  grid-area: text;
  justify-self: left;
  text-align: left;
  color: ${colours.white};
`;

export const Footer = styled.div``;

export const PulsatingCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 50px;
  height: 50px;
  
  &:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 100px;
    background-color: #01a4e9;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-fill-mode: forwards;
    animation-delay: 3s;

  }
  
}

@keyframes pulse-ring {
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
}

`;
