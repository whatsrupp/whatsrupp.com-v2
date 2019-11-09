import React from "react";
import { render } from "@testing-library/react";
import Segment from "./Segment";

describe("Segment", () => {
  it("returns a path", () => {
    const container = render(
      <svg>
        <Segment />
      </svg>
    );
    expect(container.container).toBeDefined();
  });
});
