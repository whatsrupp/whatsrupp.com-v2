import styled from "@emotion/styled";
import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";

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

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 3fr 1fr;
  height: 100%;
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

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1240px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Footer = styled.div``;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2em;
  color: ${colours.white};
`;

export const Whats = styled.span`
  font-weight: bold;
  color: ${colours.white};

  :hover {
    color: ${colours.deepPurple};
  }
`;
export const DeepPurple = styled.span`
  color: ${colours.deepPurple};
`;

type ImageProps = {
  animationTime: string;
};

export const IconLink = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 150px;
  justify-content: space-between;
  margin: 20px 40px;
`;

export const Icon = styled.img<ImageProps>`

  height: 100px;
  width: 100px;
  border-radius: 100px;

  :hover {
    cursor: pointer;
  }

  margin-bottom: 30px;
  animation: float ${(props: ImageProps) => props.animationTime};
  animation-iteration-count: infinite;
  animation-timing-function: ease;


  @keyframes float {
    0%,
    100% {
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
      transform: translateY(0);
    }

    50% {
      box-shadow: 0 18px 15px 0 rgba(0,0,0,0.4);
      transform: translateY(-10px);
    }
  }}
`;

export const IconText = styled.p`
  color: ${colours.deepPurple};
`;

export const FooterText = styled.p`
  color: ${colours.deepPurple};
  text-align: right;
`;
