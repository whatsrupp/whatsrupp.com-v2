import React from "react";

import * as SC from "./styled";
import Segment from "../Segment";
import { Slider, useSliderProps } from "../Slider";

const Wheel: React.FC = () => {
  const outerRadiusMax = 100;
  const sweep = useSliderProps({ label: "Sweep", min: 0, max: 359 });
  const startAngle = useSliderProps({ label: "Start Angle", min: 0, max: 359 });
  const outerRadius = useSliderProps({
    label: "Outer Radius",
    min: 0,
    max: outerRadiusMax
  });
  const innerRadius = useSliderProps({
    label: "Inner Radius",
    min: 0,
    max: 90
  });
  const angularOffset = useSliderProps({
    label: "Angular Offset",
    min: 0,
    max: 360
  });

  const canvasWidth = outerRadiusMax * 2 + 10;
  const canvasHeight = canvasWidth;

  return (
    <SC.PageLayout>
      <SC.Header></SC.Header>

      <SC.Body>
        <SC.SegmentSvg
          viewBox={`${-canvasWidth / 2} ${-canvasHeight /
            2} ${canvasWidth} ${canvasHeight}`}
        >
          <Segment
            sweepAngle={sweep.value}
            startAngle={startAngle.value}
            outerRadius={outerRadius.value}
            innerRadius={innerRadius.value}
            angularOffset={angularOffset.value}
            radialOffset={0}
            displayText={""}
          />
        </SC.SegmentSvg>

        <Slider {...sweep} />
        <Slider {...startAngle} />
        <Slider {...outerRadius} />
        <Slider {...innerRadius} />
        <Slider {...angularOffset} />
      </SC.Body>
      <SC.Footer></SC.Footer>
    </SC.PageLayout>
  );
};

export default Wheel;
