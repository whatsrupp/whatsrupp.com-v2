import pageview from "./pageview";
import * as ReactGa from "react-ga";

jest.mock("react-ga");

describe("event", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("passes through all arguments through to google analytics", () => {
    const testPath = "testPath";
    pageview({ path: testPath });
    expect(ReactGa.pageview).toBeCalledWith(testPath);
  });
});
