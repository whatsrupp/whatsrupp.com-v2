import initialiseGoogleAnalytics from "./initialiseGoogleAnalytics";
import * as ReactGa from "react-ga";

jest.mock("react-ga");

describe("initialiseApp", () => {
  it("calls initialise google analytics", () => {
    initialiseGoogleAnalytics();
    expect(ReactGa.initialize).not.toHaveBeenCalledWith([
      "UA-152269286-1",
      {
        debug: true
      }
    ]);
  });
});
