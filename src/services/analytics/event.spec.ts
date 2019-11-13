import event from "./event";
import * as ReactGa from "react-ga";

jest.mock("react-ga");

describe("event", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("passes through all arguments through to google analytics", () => {
    const testOptions = {
      category: "testCategory",
      action: "testAction",
      label: "testLabel",
      value: 0,
      nonInteraction: true,
      transport: "testTransport"
    };

    event(testOptions);
    expect(ReactGa.event).toBeCalledWith(testOptions);
  });

  it("defaults to a beacon transport", () => {
    const testOptions = {
      category: "testCategory",
      action: "testAction"
    };
    const expectedOptions = {
      category: "testCategory",
      action: "testAction",
      transport: "beacon"
    };
    event(testOptions);

    expect(ReactGa.event).toBeCalledWith(expectedOptions);
  });
});
