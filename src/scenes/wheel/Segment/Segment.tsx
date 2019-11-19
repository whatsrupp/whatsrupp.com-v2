import React from "react";
import styled from "@emotion/styled";

type CartesianCoordinates = {
  x: number;
  y: number;
};

type PolarCoordinates = {
  r: number;
  theta: number;
};

type SegmentProps = {
  sweepAngle: number;
  startAngle: number;
  outerRadius: number;
  innerRadius: number;
  angularOffset?: number;
  radialOffset?: number;
  displayText?: string;
  TextComponent?: (props: any) => JSX.Element;
  PathComponent?: (props: any) => JSX.Element;
  onSegmentPress?: Function;
};

const inRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

const inDegrees = (radians: number) => {
  return (radians * 180) / Math.PI;
};

const Segment = (props: SegmentProps) => {
  const {
    displayText = "",
    sweepAngle: sweepAngleDegrees = 180,
    startAngle: startAngleDegrees = 0,
    outerRadius = 10,
    innerRadius = 0,
    angularOffset: angularOffsetDegrees = 0,
    radialOffset = 0,
    TextComponent = styled.text``,
    PathComponent = styled.path``,
    onSegmentPress = () => {}
  } = props;

  const angularOffset = inRadians(angularOffsetDegrees);
  const sweepAngle = inRadians(sweepAngleDegrees);
  const startAngle = inRadians(startAngleDegrees) + angularOffset;
  const centreAngle = startAngle + sweepAngle / 2;
  const textAngle = inDegrees(-centreAngle);

  const endAngle = startAngle + sweepAngle;
  const r = innerRadius;
  const R = outerRadius;
  const centreRadius = R - (R - r) / 2;
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
    const x = (r + radialOffset) * Math.sin(theta);
    const y = (r + radialOffset) * Math.cos(theta);
    return { x: parseFloat(x.toFixed(4)), y: parseFloat(y.toFixed(4)) };
  };

  const withRadialOffset = (coordinates: CartesianCoordinates) => {
    const radialOffsetVector = inCartesianCoordinates({
      r: radialOffset,
      theta: centreAngle
    });
    return {
      x: coordinates.x + radialOffsetVector.x,
      y: coordinates.y + radialOffsetVector.y
    };
  };

  const point1 = withRadialOffset(
    inCartesianCoordinates({
      r: R,
      theta: startAngle
    })
  );
  const point2 = withRadialOffset(
    inCartesianCoordinates({ r: R, theta: endAngle })
  );
  const point3 = withRadialOffset(
    inCartesianCoordinates({ r, theta: endAngle })
  );
  const point4 = withRadialOffset(
    inCartesianCoordinates({ r, theta: startAngle })
  );
  const centre = withRadialOffset(
    inCartesianCoordinates({
      r: centreRadius,
      theta: centreAngle
    })
  );

  const pathDefinition = `
    M ${point1.x},${point1.y}
    A ${R},${R},0,${bigArcValue},0,${point2.x},${point2.y}
    L ${point3.x},${point3.y}
    A ${r},${r},0,${bigArcValue},1,${point4.x},${point4.y}
    L ${point1.x},${point1.y}
    z`;

  const handleInteraction = (
    event:
      | React.MouseEvent<SVGPathElement, MouseEvent>
      | React.KeyboardEvent<SVGPathElement>
  ): void => {
    onSegmentPress();
  };

  return (
    <>
      <PathComponent
        d={pathDefinition}
        role={"button"}
        tabIndex={0}
        onClick={handleInteraction}
        onKeyDown={handleInteraction}
      />
      <TextComponent
        x={centre.x}
        y={centre.y}
        fontSize={5}
        dominantBaseline="middle"
        style={{ userSelect: "none" }}
        textAnchor="middle"
        transform={`rotate(${textAngle} ${centre.x} ${centre.y})`}
      >
        {displayText}
      </TextComponent>
    </>
  );
};

export default Segment;
