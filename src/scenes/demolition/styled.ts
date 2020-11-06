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

export const Canvas = styled.canvas`
  /* width: 100%; */
  height: 100%;
`;
