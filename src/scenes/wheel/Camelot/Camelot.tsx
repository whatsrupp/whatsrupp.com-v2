import React from "react";

import * as SC from "./styled";
import Wheel from "../Wheel";
import { CamelotWheel } from "./constants";
const Camelot = () => {
  const majorRingSegmentDefinitions = CamelotWheel.map(section => {
    const { position, display, key, mode } = section.major;
    return {
      position,
      text: display,
      key,
      mode
    };
  });

  const minorRingSegmentDefinitions = CamelotWheel.map(section => {
    const { position, display, key, mode } = section.minor;
    return {
      position,
      text: display,
      key,
      mode
    };
  });
  return (
    <SC.PageLayout>
      <SC.Header></SC.Header>

      <SC.Body>
        <SC.SegmentSvg viewBox={"-250 -250 500 500"}>
          <Wheel
            segmentDefinitions={majorRingSegmentDefinitions}
            radialOffset={5}
            outerRadius={200}
            innerRadius={100}
          />
          <Wheel
            segmentDefinitions={minorRingSegmentDefinitions}
            radialOffset={5}
            outerRadius={90}
            innerRadius={50}
          />
        </SC.SegmentSvg>
      </SC.Body>
      <SC.Footer></SC.Footer>
    </SC.PageLayout>
  );
};

export default Camelot;
