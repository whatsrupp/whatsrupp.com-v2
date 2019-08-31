import styled from "@emotion/styled";
import PageLayoutComponent from "../../style/components/PageLayout";

import * as colours from "../../style/colours";
export const PageLayout = styled(PageLayoutComponent)`
  background: ${colours.teal};
  display: grid;
  grid-template-rows: 1fr 3fr 0.5fr;
`;
