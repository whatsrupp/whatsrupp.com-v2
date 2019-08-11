import styled from "@emotion/styled";
import { css } from "@emotion/core";

const headerHeight = css`
  height: 200px;
`;

export const Picture = styled.img`
  height: 100px;
`;

export const PictureWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight};
  background-color: #e6eec4;
  padding-top: 10px;
  padding-bottom: 10px;
`;
