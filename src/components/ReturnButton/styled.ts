import BackIcon from "./BackIcon";

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
export const Icon = styled(BackIcon)`
  width: 100px;
  height: 100px;
`;
