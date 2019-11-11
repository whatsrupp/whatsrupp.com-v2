import React from "react";

import * as SC from "./styled";
import Segment from "./Segment";
import { Slider, useSlider } from "./Slider";

const Wheel: React.FC = () => {
  const sweep = useSlider({ label: "Sweep", min: 0, max: 359 });
  const startAngle = useSlider({ label: "Start Angle", min: 0, max: 359 });
  const outerRadius = useSlider({ label: "Outer Radius", min: 0, max: 100 });
  const innerRadius = useSlider({ label: "Inner Radius", min: 0, max: 95 });
  const angularOffset = useSlider({
    label: "Angular Offset",
    min: 0,
    max: 360
  });

  const canvasWidth = Math.max(innerRadius.value, outerRadius.value) * 2 + 5;
  const canvasHeight = canvasWidth;

  return (
    <SC.PageLayout>
      <SC.Header></SC.Header>

      <SC.Body>
        <svg
          height={500}
          width={500}
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
            text={""}
          />
        </svg>

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
