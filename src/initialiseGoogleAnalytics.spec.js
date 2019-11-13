import initialiseGoogleAnalytics from "./initialiseGoogleAnalytics";
import * as ReactGa from "react-ga";

jest.mock("react-ga");

describe("initialiseApp", () => {
  beforeEach(() => {
    process.env.NODE_ENV = "test";
    jest.resetAllMocks();
  });
  it("calls initialise google analytics in production", () => {
    process.env.NODE_ENV = "production";
    initialiseGoogleAnalytics();
    const expectedOptions = {
      debug: false
    };
    expect(ReactGa.initialize).toBeCalledWith(
      "UA-152269286-1",
      expectedOptions
    );
  });

  it("runs analytics in test mode when not in production", () => {
    initialiseGoogleAnalytics();
    const expectedOptions = {
      debug: true,
      testMode: true
    };
    expect(ReactGa.initialize).toBeCalledWith(
      "UA-152269286-1",
      expectedOptions
    );
  });
});
