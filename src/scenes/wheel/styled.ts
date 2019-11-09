import PageLayoutComponent from "../../style/components/PageLayout";
import * as colours from "../../style/colours";
import styled from "@emotion/styled";

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
