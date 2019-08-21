import styled from "@emotion/styled";
import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";
import components from "../../style/components";
import { Link } from "react-router-dom";
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

  /* @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1240px) {
    grid-template-columns: repeat(6, 1fr);
  } */
`;

export const Row = styled(Link)`
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 2fr;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 5px;
  color: ${colours.white};
  :hover {
    transform: scale(1.01);
    cursor: pointer;
    background-color: ${colours.orange};

    box-shadow: 0 0 5px 10px ${colours.orange};
  }
  grid-template-areas:
    "picture header"
    "picture text";
`;

export const RowPicture = styled.img`
  grid-area: picture;
  height: 100px;
`;

export const RowHeader = styled.h1`
  grid-area: header;
  font-size: 1.4em;
  font-weight: bold;
  justify-self: left;
`;

export const RowText = styled.p`
  grid-area: text;
  justify-self: left;
`;

export const Footer = styled.div``;
