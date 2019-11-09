import React from "react";
import { render } from "@testing-library/react";
import Segment from "./Segment";

describe("Segment", () => {
  it("renders a path", () => {
    const container = render(
      <svg>
        <Segment />
      </svg>
    );
    const path = container.getByTestId("segment-path");
    expect(path).toBeDefined();
  });

  it("renders a path with a definition", () => {
    const container = render(
      <svg>
        <Segment />
      </svg>
    );
    const path = container.getByTestId("segment-path");
    const pathDefinition = path.getAttribute("d");
    expect(pathDefinition).not.toBeNull();
  });

  it("renders the correct text", () => {
    const container = render(
      <svg>
        <Segment text={"test text"} />
      </svg>
    );
    const text = container.getByText("test text");

    expect(text).toBeDefined();
  });

  describe("segment path definitions", () => {
    it.each([
      [
        0,
        180,
        10,
        0,
        0,
        0,
        "M0,10 A10,10,0,0,0,0,-10 L0,0 A0,0,0,0,1,0,0 L0,10 z"
      ]
    ])(
      "produces the expected path",
      (
        startAngle,
        sweepAngle,
        outerRadius,
        innerRadius,
        cx,
        cy,
        expectedPath
      ) => {
        const props = {
          startAngle,
          sweepAngle,
          outerRadius,
          innerRadius,
          centreCoordinates: { cx, cy }
        };

        const container = render(
          <svg>
            <Segment {...props} />
          </svg>
        );

        const removeWhitespaces = s => {
          return s.replace(/\s/g, "");
        };

        const pathDefinition = container
          .getByTestId("segment-path")
          .getAttribute("d");

        expect(removeWhitespaces(pathDefinition)).toEqual(
          removeWhitespaces(expectedPath)
        );
      }
    );
  });
});
