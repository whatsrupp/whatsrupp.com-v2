import set from "./set";
import * as ReactGa from "react-ga";

jest.mock("react-ga");

describe("set", () => {
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

    set(testOptions);
    expect(ReactGa.set).toBeCalledWith(testOptions);
  });
});
