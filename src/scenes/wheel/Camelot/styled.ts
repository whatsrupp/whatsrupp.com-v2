import PageLayoutComponent from "style/components/PageLayout";
import styled from "@emotion/styled";

export const PageLayout = styled(PageLayoutComponent)`
  background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #29323c, #485563);
  background: linear-gradient(to right, #29323c, #485563);
  display: grid;
  grid-template-rows: 1fr 3fr 0.5fr;
`;

export const Header = styled.div``;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  max-width: 800px;
`;
export const Footer = styled.div``;

export const SegmentSvg = styled.svg`
  width: 100%;
`;
