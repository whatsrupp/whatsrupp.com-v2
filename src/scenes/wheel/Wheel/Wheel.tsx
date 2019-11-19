import React from "react";
import Segment from "../Segment";
import useChordPlayer from "./useChordPlayer";
import * as SC from "./styled";
type WheelSegment = {
  position: number;
  text: string;
  key: number;
  mode: string;
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
  const callback = useChordPlayer();

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
        displayText: segment.text,
        radialOffset,
        angularOffset: offsetAngleForCentralisation,
        onSegmentPress: callback(segment.key, segment.mode)
      };
      return (
        <Segment
          key={segment.text}
          PathComponent={SC.Path}
          TextComponent={SC.Text}
          {...segmentProps}
        />
      );
    });
  };

  return <>{renderSegments()}</>;
};

export default Wheel;
