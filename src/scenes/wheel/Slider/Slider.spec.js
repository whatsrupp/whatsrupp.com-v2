import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
import useSliderProps from "./useSliderProps";
import { slideEvent } from "./analytics";
jest.mock("./analytics");
jest.useFakeTimers();

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

  it("displays the min, max and current value", async () => {
    const container = render(
      <Slider min={0} max={100} value={50} onChange={jest.fn()} />
    );
    const max = await container.queryByText("0");
    const min = await container.queryByText("100");
    const value = await container.queryByText("50");

    expect(max).not.toBeNull();
    expect(min).not.toBeNull();
    expect(value).not.toBeNull();
  });
});

describe("useSliderProps", () => {
  const TestComponent = () => {
    const props = useSliderProps({ label: "Label Text", min: 0, max: 100 });
    return (
      <>
        <div data-testid="output"> {props.value}</div>
        <Slider {...props} />
      </>
    );
  };
  it("controls the value of a slider", async () => {
    const container = render(<TestComponent />);

    let output = container.queryByText("20");
    expect(output).toBeNull();
    output = await container.findByRole("textbox");
    fireEvent.change(output, { target: { value: 20 } });
    output = await container.findAllByText("20");

    expect(output).toBeDefined();
  });

  it.only("calls analytics with the label using debounce", async () => {
    const container = render(<TestComponent />);
    const sliderInput = await container.findByLabelText("Label Text");
    fireEvent.change(sliderInput, { target: { value: 1 } });
    fireEvent.change(sliderInput, { target: { value: 2 } });
    fireEvent.change(sliderInput, { target: { value: 3 } });
    fireEvent.change(sliderInput, { target: { value: 4 } });
    jest.runAllTimers();

    expect(slideEvent).toHaveBeenCalledTimes(1);
    expect(slideEvent).toHaveBeenLastCalledWith("Label Text");
  });
});
