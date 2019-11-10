import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
import useSlider from "./useSlider";

describe("Slider", () => {
  it("passes the contrainsts of the range component into the", async () => {
    const mockOnChange = jest.fn();
    const container = render(
      <Slider
        label={"Label Text"}
        min={0}
        max={100}
        value={50}
        onChange={mockOnChange}
      />
    );
    const input = await container.findByLabelText("Label Text");
    expect(input.getAttribute("min")).toEqual("0");
    expect(input.getAttribute("max")).toEqual("100");
    expect(input.getAttribute("type")).toEqual("range");
    expect(input.getAttribute("value")).toEqual("50");

    fireEvent.change(input, { target: { value: 20 } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});

describe("useSlider", () => {
  it("controls the value of a slider", async () => {
    const TestComponent = () => {
      const props = useSlider({ label: "hi", min: 0, max: 100 });
      return (
        <>
          <div data-testid="output"> {props.value}</div>
          <Slider {...props} />
        </>
      );
    };

    const container = render(<TestComponent />);

    let output = container.queryByText("20");
    expect(output).toBeNull();
    output = await container.findByRole("textbox");
    fireEvent.change(output, { target: { value: 20 } });
    output = await container.findByText("20");

    expect(output).toBeDefined();
  });
});
