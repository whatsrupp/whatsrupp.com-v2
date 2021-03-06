import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Segment from "./Segment";
import styled from "@emotion/styled";
describe("Segment", () => {
  it("can inject a custom component for the path and text", () => {
    const customPath = styled.path`
      background-color: blue;
    `;
    const customText = styled.text`
      background-color: blue;
    `;
    const container = render(
      <svg>
        <Segment
          TextComponent={customText}
          PathComponent={customPath}
          displayText={"test text"}
        />
      </svg>
    );

    const path = container.getByRole("button");
    const text = container.getByText("test text");

    expect(window.getComputedStyle(path)._values["background-color"]).toEqual(
      "blue"
    );
    expect(window.getComputedStyle(text)._values["background-color"]).toEqual(
      "blue"
    );

    expect(path).toBeDefined();
  });

  it("renders a path", () => {
    const container = render(
      <svg>
        <Segment />
      </svg>
    );
    const path = container.getByRole("button");
    expect(path).toBeDefined();
  });

  it("renders a path with a definition", () => {
    const container = render(
      <svg>
        <Segment />
      </svg>
    );
    const path = container.getByRole("button");
    const pathDefinition = path.getAttribute("d");
    expect(pathDefinition).not.toBeNull();
  });

  it("renders the correct text", () => {
    const container = render(
      <svg>
        <Segment displayText={"test text"} />
      </svg>
    );
    const text = container.getByText("test text");

    expect(text).toBeDefined();
  });

  it("centres the text in the segment and applies the correct rotation", () => {
    const testProps = {
      startAngle: 0,
      sweepAngle: 180,
      outerRadius: 10,
      innerRadius: 0,
      displayText: "test text"
    };
    const container = render(
      <svg>
        <Segment {...testProps} />
      </svg>
    );

    const text = container.getByText("test text");
    const x = text.getAttribute("x");
    const y = text.getAttribute("y");
    const transformDefinition = text.getAttribute("transform");

    expect(x).toEqual("5");
    expect(y).toEqual("0");
    expect(transformDefinition).toEqual(`rotate(-90 5 0)`);
  });

  it("calls a callback on click or on keydown for aria compliance", () => {
    const mockCallback = jest.fn();
    const container = render(
      <svg>
        <Segment onSegmentPress={mockCallback} displayText={"text"} />
      </svg>
    );

    const path = container.getByRole("button");
    fireEvent.click(path);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    fireEvent.focus(path);
    fireEvent.keyDown(path);
    expect(mockCallback).toHaveBeenCalledTimes(2);
    const text = container.getByText("text");
    fireEvent.click(text);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

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

      const pathDefinition = container.getByRole("button").getAttribute("d");

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
        "M20,20 A10,10,0,0,0,20,-20 L20,-15 A5,5,0,0,1,20,15 L20,20 z";
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
