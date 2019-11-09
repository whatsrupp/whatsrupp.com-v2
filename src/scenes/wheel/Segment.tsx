import React from "react";

type CartesianCoordinates = {
  x: number;
  y: number;
};

type PolarCoordinates = {
  r: number;
  theta: number;
};

interface ISegmentProperties {
  text: string;
}

interface ISegmentConstraints {
  sweepAngle: number;
  startAngle: number;
  outerRadius: number;
  innerRadius: number;
}

interface ISegmentTransforms {
  angularOffset: number;
  radialOffset: number;
}

type SegmentProps = ISegmentConstraints &
  ISegmentProperties &
  ISegmentTransforms;

const inRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

const inDegrees = (radians: number) => {
  return (radians * 180) / Math.PI;
};

const Segment = (props: SegmentProps) => {
  const {
    text = "",
    sweepAngle: sweepAngleDegrees = 180,
    startAngle: startAngleDegrees = 0,
    outerRadius = 10,
    innerRadius = 0,
    angularOffset: angularOffsetDegrees = 0,
    radialOffset = 0
  } = props;

  const angularOffset = inRadians(angularOffsetDegrees);
  const sweepAngle = inRadians(sweepAngleDegrees);
  const startAngle = inRadians(startAngleDegrees);
  const centreAngle = (sweepAngle - startAngle) / 2;
  const textAngle = inDegrees(-centreAngle);

  const endAngle = startAngle + sweepAngle;
  const r = innerRadius;
  const R = outerRadius;
  const centreRadius = r + (R - r) / 2;
  const isBigArc = sweepAngleDegrees > 180;
  const bigArcValue = isBigArc ? 1 : 0;

  /*
        Draw Order
      1 ----->----- 2
       \           /
        \    c    /
         \       /
          4 -<- 3
    */

  const inCartesianCoordinates = (
    polarCoordinates: PolarCoordinates
  ): CartesianCoordinates => {
    const { r, theta } = polarCoordinates;
    const x = (r + radialOffset) * Math.sin(theta + angularOffset);
    const y = (r + radialOffset) * Math.cos(theta + angularOffset);
    return { x: parseFloat(x.toFixed(4)), y: parseFloat(y.toFixed(4)) };
  };

  const point1 = inCartesianCoordinates({
    r: R,
    theta: startAngle
  });
  const point2 = inCartesianCoordinates({ r: R, theta: endAngle });
  const point3 = inCartesianCoordinates({ r, theta: endAngle });
  const point4 = inCartesianCoordinates({ r, theta: startAngle });
  const centre = inCartesianCoordinates({
    r: centreRadius,
    theta: centreAngle
  });

  const pathDefinition = `
    M ${point1.x},${point1.y}
    A ${R},${R},0,${bigArcValue},0,${point2.x},${point2.y}
    L ${point3.x},${point3.y}
    A ${r},${r},0,${bigArcValue},1,${point4.x},${point4.y}
    L ${point1.x},${point1.y}
    z`;

  return (
    <>
      <path data-testid="segment-path" d={pathDefinition} />
      <text
        x={centre.x}
        y={centre.y}
        fontSize={5}
        dominantBaseline="middle"
        style={{ userSelect: "none" }}
        textAnchor="middle"
        transform={`rotate(${textAngle} ${centre.x} ${centre.y})`}
      >
        {text}
      </text>
    </>
  );
};

export default Segment;
