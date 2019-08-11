import React, { Component } from "react";
import NathanFace from "./NathanFace.png";
import { Picture, PictureWrap } from "./styled";

class PageHeader extends Component {
  render = () => {
    return (
      <PictureWrap>
        <Picture src={NathanFace} />
      </PictureWrap>
    );
  };
}

export default PageHeader;
