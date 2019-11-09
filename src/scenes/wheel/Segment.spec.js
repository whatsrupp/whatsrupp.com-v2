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

  describe("segment path definition", () => {});

  describe("segment path definitions", () => {
    let expectedPathDefinition;
    let testProps;
    beforeEach(() => {
      testProps = {};
    });

    afterEach(() => {
      const container = render(
        <svg>
          <Segment {...testProps} />
        </svg>
      );

      const removeWhitespaces = s => {
        return s.replace(/\s/g, "");
      };

      const pathDefinition = container
        .getByTestId("segment-path")
        .getAttribute("d");

      expect(removeWhitespaces(pathDefinition)).toEqual(
        removeWhitespaces(expectedPathDefinition)
      );
    });

    it("can render a semicircle", () => {
      testProps = {
        startAngle: 0,
        sweepAngle: 180,
        outerRadius: 10,
        innerRadius: 0
      };

      expectedPathDefinition =
        "M0,10 A10,10,0,0,0,0,-10 L0,0 A0,0,0,0,1,0,0 L0,10 z";
    });

    it("can change the start angle to render an offset semicircle", () => {
      testProps = {
        startAngle: 90,
        sweepAngle: 180,
        outerRadius: 10,
        innerRadius: 0
      };

      expectedPathDefinition =
        "M10,0 A10,10,0,0,0,-10,0 L0,0 A0,0,0,0,1,0,0 L10,0 z";
    });

    it("can vary the sweep angle to create a quarter circle", () => {
      testProps = {
        startAngle: 0,
        sweepAngle: 90,
        outerRadius: 10,
        innerRadius: 0
      };

      expectedPathDefinition =
        "M0,10 A10,10,0,0,0,10,0 L0,0 A0,0,0,0,1,0,0 L0,10 z";
    });

    it("uses the Big Arc flag when the sweep angle is greater than 180", () => {
      testProps = {
        startAngle: 0,
        sweepAngle: 270,
        outerRadius: 10,
        innerRadius: 0
      };

      expectedPathDefinition =
        "M0,10 A10,10,0,1,0,-10,0 L0,0 A0,0,0,1,1,0,0 L0,10 z";
    });

    it("can form a ring by adding an inner radius", () => {
      testProps = {
        startAngle: 0,
        sweepAngle: 180,
        outerRadius: 10,
        innerRadius: 5
      };

      expectedPathDefinition =
        "M0,10 A10,10,0,0,0,0,-10 L0,-5 A5,5,0,0,1,0,5 L0,10 z";
    });

    it("can add a radial offset", () => {
      testProps = {
        startAngle: 0,
        sweepAngle: 180,
        outerRadius: 10,
        innerRadius: 5,
        radialOffset: 10
      };

      expectedPathDefinition =
        "M0,20 A10,10,0,0,0,0,-20 L0,-15 A5,5,0,0,1,0,15 L0,20 z";
    });

    it("can add a rotation offset", () => {
      testProps = {
        startAngle: 0,
        sweepAngle: 180,
        outerRadius: 10,
        innerRadius: 0,
        angularOffset: 90
      };

      expectedPathDefinition =
        "M10,0 A10,10,0,0,0,-10,0 L0,0 A0,0,0,0,1,0,0 L10,0 z";
    });

    it("provides defaults for all parameters", () => {
      expectedPathDefinition =
        "M0,10 A10,10,0,0,0,0,-10 L0,0 A0,0,0,0,1,0,0 L0,10 z";
    });
  });
});
