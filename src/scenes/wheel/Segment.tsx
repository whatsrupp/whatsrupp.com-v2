import React from "react";

type SegmentProps = { test: string };

const Segment = ({ test }: SegmentProps) => {
  return <path>{test}</path>;
};

export default Segment;
