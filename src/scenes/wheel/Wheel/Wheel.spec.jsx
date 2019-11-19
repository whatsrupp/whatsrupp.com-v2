import React from "react";
import { render } from "@testing-library/react";
import Wheel from "./Wheel";

describe("Wheel", () => {
  it("renders", async () => {
    const container = render(
      <svg>
        <Wheel
          segmentDefinitions={[{ position: 1, text: "test" }]}
          innerRadius={5}
          outerRadius={10}
          radialOffset={0}
        />
      </svg>
    );
    const segments = await container.findAllByRole("button");
    expect(segments).toHaveLength(1);
  });

  it("renders multiple segments based on segment definitions", async () => {
    const container = render(
      <svg>
        <Wheel
          segmentDefinitions={[
            { position: 1, text: "test1" },
            { position: 2, text: "test2" }
          ]}
          outerRadius={10}
          innerRadius={5}
          radialOffset={0}
        />
      </svg>
    );
    const segments = await container.findAllByRole("button");
    expect(segments).toHaveLength(2);
  });

  it("splits the circle into even segments and ensures each element is centered along it's radial axis", async () => {
    const container = render(
      <svg>
        <Wheel
          segmentDefinitions={[
            { position: 1, text: "test1" },
            { position: 2, text: "test2" }
          ]}
          outerRadius={10}
          innerRadius={5}
          radialOffset={0}
        />
      </svg>
    );
    const segments = await container.findAllByRole("button");
    expect(segments[0]).toHavePathDefinition(
      "M10,0A10,10,0,0,0,-10,0L-5,0A5,5,0,0,1,5,0L10,0z"
    );
    expect(segments[1]).toHavePathDefinition(
      "M-10,0A10,10,0,0,0,10,0L5,0A5,5,0,0,1,-5,0L-10,0z"
    );
  });
});
