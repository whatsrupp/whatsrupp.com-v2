import React from "react";

import * as SC from "./styled";
import * as images from "./assets/images";

const Loops: React.FC = () => {
  return (
    <SC.PageLayout>
      <SC.Header>
        <SC.Head src={images.jack} />
        <SC.Head src={images.nick} />
        <SC.Logo src={images.logo} />
        <SC.Head src={images.will} />
        <SC.Head src={images.viv} />
      </SC.Header>
      <SC.Body></SC.Body>
      <SC.Footer>
        <SC.RecordButton />
      </SC.Footer>
    </SC.PageLayout>
  );
};

export default Loops;
