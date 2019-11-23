import React from "react";
import * as SC from "./styled";
import * as routes from "routes";
import { clickHomeButton } from "./analytics";
const HomeButton = () => {
  return (
    <SC.Button to={routes.HOME} onClick={clickHomeButton}>
      <SC.Icon />
    </SC.Button>
  );
};

export default HomeButton;
