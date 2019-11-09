import React from "react";

import * as SC from "./styled";
import Segment from "./Segment";

const Wheel: React.FC = () => {
  return (
    <SC.PageLayout>
      <SC.Header></SC.Header>
      <SC.Body>
        <svg height={100} width={100} viewBox={"-10 -10 20 20"}>
          <Segment
            sweepAngle={355}
            startAngle={0}
            outerRadius={10}
            innerRadius={5}
            centreCoordinates={{ x: 0, y: 0 }}
            rotation={0}
            text={"Hello"}
          />
        </svg>
      </SC.Body>
      <SC.Footer></SC.Footer>
    </SC.PageLayout>
  );
};

export default Wheel;
