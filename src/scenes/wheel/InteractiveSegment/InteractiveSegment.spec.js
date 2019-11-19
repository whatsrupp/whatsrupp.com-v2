import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Page from "./InteractiveSegment";

describe("Full Page Integration Test", () => {
  it("Can control the svg properties with a slider", async () => {
    const container = await render(<Page />);

    const adjustRangeInputToValue = (input, newValue) => {
      fireEvent.change(input, { target: { value: newValue } });
    };

    const expectEqualPaths = (result, expected) => {
      const removeWhitespaces = s => {
        return s.replace(/\s/g, "");
      };
      expect(removeWhitespaces(result)).toEqual(removeWhitespaces(expected));
    };

    const sweep = await container.findByLabelText("Sweep");
    const startAngle = await container.findByLabelText("Start Angle");
    const outerRadius = await container.findByLabelText("Outer Radius");
    const innerRadius = await container.findByLabelText("Inner Radius");
    const angularOffset = await container.findByLabelText("Angular Offset");

    let pathDefinition = await container.getByRole("button").getAttribute("d");

    const expectedDefaultPathDefinition =
      "M-0.4363,49.9981A50,50,0,0,0,0.8726,-49.9924L0.7854,-44.9931A45,45,0,0,1,-0.3927,44.9983L-0.4363,49.9981z";

    expectEqualPaths(pathDefinition, expectedDefaultPathDefinition);

    adjustRangeInputToValue(sweep, 180);
    adjustRangeInputToValue(startAngle, 0);
    adjustRangeInputToValue(outerRadius, 20);
    adjustRangeInputToValue(innerRadius, 10);
    adjustRangeInputToValue(angularOffset, 90);

    pathDefinition = await container.getByRole("button").getAttribute("d");

    const expectedPathDefinition =
      "M20,0 A20,20,0,0,0,-20,0 L-10,0 A10,10,0,0,1,10,0 L20,0 z";

    expectEqualPaths(pathDefinition, expectedPathDefinition);
  });
});
