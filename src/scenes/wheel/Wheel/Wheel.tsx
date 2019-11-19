import React from "react";
import Segment from "../Segment";
type WheelSegment = {
  position: number;
  text: string;
};

type WheelProps = {
  segmentDefinitions: WheelSegment[];
  outerRadius: number;
  innerRadius: number;
  radialOffset: number;
};

const Wheel = ({
  segmentDefinitions,
  outerRadius,
  innerRadius,
  radialOffset
}: WheelProps) => {
  const numberOfSegments = segmentDefinitions.length;
  const degreesInCircle = 360;
  const sweepAngle = degreesInCircle / numberOfSegments;
  const offsetAngleForCentralisation = -sweepAngle / 2;

  const renderSegments = () => {
    return segmentDefinitions.map(segment => {
      const segmentProps = {
        sweepAngle,
        startAngle: sweepAngle * segment.position,
        outerRadius,
        innerRadius,
        text: segment.text,
        radialOffset,
        angularOffset: offsetAngleForCentralisation
      };
      return <Segment key={segment.text} {...segmentProps} />;
    });
  };

  return <>{renderSegments()}</>;
};

export default Wheel;
