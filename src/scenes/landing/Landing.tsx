import React from "react";

import * as SC from "./styled";
import icons from "../../style/icons";
import NathanFace from "./assets/images/NathanFace.png";
const Landing: React.FC = () => {
  return (
    <SC.PageLayout>
      <SC.PageContent>
        <SC.Header></SC.Header>
        <SC.Body>
          <SC.Row to={"/soundboard"}>
            <SC.RowHeader>King Soundboard</SC.RowHeader>
            <SC.RowPicture src={NathanFace} />
            <SC.RowText>A Soundboard made to annoy my housemate</SC.RowText>
          </SC.Row>
          <SC.Row to={"/portfolio"}>
            <SC.RowHeader>whatsrupp.com v 1.0.0</SC.RowHeader>
            <SC.RowPicture src={icons.palette} />
            <SC.RowText>The original</SC.RowText>
          </SC.Row>
        </SC.Body>
        <SC.Footer></SC.Footer>>
      </SC.PageContent>
    </SC.PageLayout>
  );
};

export default Landing;
